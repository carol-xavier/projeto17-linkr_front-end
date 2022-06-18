import styled from "styled-components";
import { Link } from "react-router-dom";

import ShowUser from "./ShowUser";
import SearchUser from "./SearchUser";

function Header() {
    return (
        <>
            <HeaderContainer>
                <Link to="/timeline">
                    <h1>linkr</h1>
                </Link>
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

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    width: 100%;
    height: var(--heigth-header);
    padding-inline: 10px;

    background-color: var(--color-2);

    & > a h1 {
        font-weight: var(--font-weight-bold);
        font-size: 1.5rem;
        color: var(--color-4);
        font-family: var(--font-logo-login);
    }
`;
