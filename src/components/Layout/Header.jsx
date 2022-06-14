import styled from "styled-components";
import { getContext } from "../../hooks/ContextAPI";

function Header() {

  function showUser() {
    const {apiUrl, setUser} = getContext();

    return (
      <>
        <article>
          <button>^</button>
          <figure>
            <img src="https://avatars3.githubusercontent.com/u/527098?v=3&s=460" alt=""/>
          </figure>
        </article>
        <span>Logout</span>
      </>
    )
  }

  return (
    <HeaderContainer>
      <h1>linkr</h1>
      {showUser()}
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

`