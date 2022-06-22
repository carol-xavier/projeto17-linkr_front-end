import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { getContext } from "../../hooks/ContextAPI";
import { api } from "../../utils/api";
import Header from "./Header/Header";
import UserPost from "./Posts/UserPost";
import TrendingBox from "./TrendingBox";

function MainScreen({ route, children}) {
  const { header,refresh } = getContext();
  const [ posts, setPosts ] = useState([]);
  const [ followingSomeone, setFollowingSomeone ] = useState( false );
  const [ loading, setLoading ] = useState( true );

  

  function assemblyPosts(){
    if(loading){
      return <ThreeDots color="#fff" width={'100%'} height={'1.5rem'} />
    }

    if( !posts.length && route === '/timeline' ) return infoMessage();

    const listOfPosts = posts.map((post, index) => 
      <UserPost key={index} postData={post} />
    );

    // TODO: Add pagination here
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
    setLoading( false );
    console.log( e );
    window.alert("An error occurred while trying to fetch the posts, please refresh the page.");
  }

  function successGetPosts({ data }) {
    const posts = data.posts || data;
    const followingSomeone = data?.followingSomeone || false;
    
    setLoading( false );
    setFollowingSomeone( followingSomeone );
    setPosts( posts );
  }

  useEffect(() => {
    setLoading( true );
    
    api.get( route, header)
			.then( successGetPosts )
			.catch( errorGetPosts );
  },[ refresh ]);

  return(
    <MainScreenContainer>
      <Header />
      <main>
        <Section>
          { children }
          { assemblyPosts() }
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

    position: relative;

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

  &>h1 {
    width: 100%;
    padding-block: 1.45rem;
    font-size: 1.8rem;
    padding-left: 0;

    font-family: var(--font-logo-login-secundary);

    @media (max-width: 500px) {      
      padding-left: 0.8rem;
    }
  }

  &>h2 {
    padding: 0.8rem;
    color: var(--text-color-secodary);
  }
`