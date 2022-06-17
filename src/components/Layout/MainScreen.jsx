import styled from "styled-components";
import Header from "./Header/Header";
import TrendingBox from "../TrendingBox";

function MainScreen(prop) {
  const { children } = prop;

  return (
    <MainScreenContainer>
      <Header />
      <LayoutPage>
        <main>
          {children}
        </main>
        <TrendingBox />
      </LayoutPage>
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

const LayoutPage = styled.article`
  display: flex;
`;