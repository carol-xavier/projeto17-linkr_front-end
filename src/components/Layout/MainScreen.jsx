import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { api } from "../../utils/api";
import Header from "./Header/Header";
import UserPost from "./Posts/UserPost";
import TrendingBox from "./TrendingBox";

function MainScreen({rote, children}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  function assemblyPosts(){
    if(loading){
      return <ThreeDots color="#fff" width={'100%'} height={'1.5rem'} />
    }

    if(posts.length === 0){
      return <h2>There are no posts yet</h2>
    }

    return posts.map((post, id) => <UserPost key={id} postData={post} /> );
  }

  function errorGetPosts(e) {
    setLoading(false);
    console.log(e);
    window.alert("An error occurred while trying to fetch the posts, please refresh the page.");
  }

  useEffect(() => {
    api.get('/timeline')
			.then(res => {
        setLoading(false);
        setPosts(res.data);
      })
			.catch(errorGetPosts);
  },[])

  return(
    <MainScreenContainer>
      <Header />
      <main>
        <Section>
          {children}
          {assemblyPosts()}
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
  height: 100%;

  padding-top: var(--heigth-header);
    
  overflow-y: auto;
  overflow-x: hidden;
  
  &>main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    height: 100%;
    
    padding-inline: var(--main-screen-padding-inline);
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  &>h1 {
    width: 100%;
    padding-block: 0.8rem;
    font-size: 1.8rem;
    padding-left: 0;

    @media (max-width: 500px) {      
      padding-left: 0.8rem;
    }
  }

  &>h2 {
    padding: 0.8rem;
    color: var(--text-color-secodary);
  }
`