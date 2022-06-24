import { useEffect, useState, useRef  } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { getContext } from "../../hooks/ContextAPI";
import { api } from "../../utils/api";
import Header from "./Header/Header";
import UserPost from "./Posts/UserPost";
import TrendingBox from "./TrendingBox";
import useInterval from "../../utils/useInterval.js";
import { IoIosRefresh } from "react-icons/io";



function MainScreen({ route, children}) {
  const { header } = getContext();
  const [ posts, setPosts ] = useState([]);
  const [ followingSomeone, setFollowingSomeone ] = useState( false );
  const [ totalPosts, setTotalPosts ] = useState(0);
  const [ newPosts, setNewPosts ] = useState(0);
  const [ showButton, setShowButton] = useState(false);

  useEffect(() =>{
    api.get(`${route}/number`, header)
      .then((res) => {
        setTotalPosts(parseInt(res.data.count));
      })
      .catch((e) => {
        console.log(e)
      });
  }, [])

  function assemblyPosts(){
    if( !posts.length && route === '/timeline' ) return infoMessage();

    const listOfPosts = posts.map((post, index) => 
      <UserPost key={index} postData={post} />
    );

    return (
      listOfPosts
    )
  }
  
  function infoMessage() {
    if( followingSomeone ) {
      return <h2>No posts found from your friends</h2>
    }

    return <h2>You don't follow anyone yet. Search for new friends</h2>
  }


  function errorGetPosts(e) {
    console.log( e );
    window.alert("An error occurred while trying to fetch the posts, please refresh the page.");
  }

  function successGetPosts({ data }) {
    const posts = data.posts || data;
    const followingSomeone = data?.followingSomeone || false;
    
    setFollowingSomeone( followingSomeone );
    setPosts( posts );
  }

  function loadPosts(limit) {
    api.get (`${route}/?limit=${limit}`, header)
      .then(successGetPosts)
      .catch(errorGetPosts)
  }

  function nextDownload() {
    if (posts.length + 10 < totalPosts){
      loadPosts(posts.length + 10)
    } else {
      loadPosts(totalPosts)
    }
  }

  useInterval(() => {
    api.get(`${route}/number`, header)
      .then((res) => {
        if (res.data.count > totalPosts){
          setNewPosts(res.data.count-totalPosts);
          setShowButton(true);
          console.log("tem poots novo")
        }
      })
      .catch((e) => {
        console.log(e)
      }); 
  }, 15000)

  return(
    <MainScreenContainer id="scrollParentElement">
      <Header />
      <main>
        <Section>
          { children }
          <button 
            style={showButton ? {display: "block"} : {display: "none"}}
            onClick={() => window.location.reload()} 
          >
            {newPosts} new posts, load more! <IoIosRefresh className="icon"/>
          </button>
          <InfiniteScroll
            className="infinit-scroll"
            height= {450}
            pageStart={0}
            loadMore={() => nextDownload()}
            hasMore={posts.length === totalPosts ? (false):(true)}
            threshold={10}
            loader={
              <div className="loader" key={0}>
                <ThreeDots color="#fff" width={'100%'} height={'1.5rem'} />
              </div>
            }
            useWindow={false}
            getScrollParent={()=>
              document.getElementById("scrollParentElement")
            }
          >
            { assemblyPosts() }
          </InfiniteScroll>
        </Section>
        <TrendingBox />
      </main>      
    </MainScreenContainer>
  );
}

export default MainScreen;

const MainScreenContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  padding-top: var(--main-screen-padding-top);
    
  overflow-y: auto;
  overflow-x: hidden;
  
  &>main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    position: static;

    width: 100%;
    height: 100%;

    padding-inline: var(--main-screen-padding-inline);
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70%;

  @media (max-width: 650px) {
		width: 100%;
	}

  .infinit-scroll {
    width: 100%;
  }

  &>h1 {
    width: 100%;
    padding-block: 1.45rem;
    font-size: 1.8rem;
    padding-left: 0;

    font-family: var(--font-logo-login-secundary);
    cursor: default;

    @media (max-width: 500px) {      
      padding-left: 0.8rem;
    }
  }

  &>h2 {
    padding: 0.8rem;
    color: var(--text-color-secondary);
  }

  &>button {
    width: 100%;
    height: 3.5rem;
    margin: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    background-color: var(--color-1);
    color: var(--color-4);
    display: flex;
    justify-content: center;
    align-items: center;

    &>.icon{
      margin-left: 0.4rem;
    }
  }
`
