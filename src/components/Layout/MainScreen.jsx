import styled from "styled-components";
import Header from "./Header/Header";

function MainScreen(prop) {
  return(
    <MainScreenContainer>
      <Header />
      <main>
        {prop.children}
      </main>      
    </MainScreenContainer>
  );
}

export default MainScreen;

const MainScreenContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  
  &>main {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    padding-inline: var(--main-screen-padding-inline);
  }
`