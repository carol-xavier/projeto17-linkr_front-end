import styled from "styled-components";

import ShowUser from "./ShowUser";
import SearchUser from "./SearchUser";

function Header() {
    return (
        <>
            <HeaderContainer>
                <h1>linkr</h1>
                <SearchUser className="desktop" />
                <ShowUser />
            </HeaderContainer>
        </>
    );
}

export default Header;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:relative;

    width: 100%;
    height: var(--heigth-header);
    padding-inline: 10px;

    background-color: var(--color-2);

    & > h1 {
        font-weight: var(--font-weight-bold);
        font-size: 1.5rem;
    }
`;
