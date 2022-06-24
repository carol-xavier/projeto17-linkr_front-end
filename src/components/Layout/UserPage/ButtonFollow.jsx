import { useState } from "react"
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { getContext } from "../../../hooks/ContextAPI";
import { api } from "../../../utils/api";

function ButtonFollow({ userId, follow, isOwner }) {
  const { header } = getContext();
  const [ following, setFollowing ] = useState( follow );
  const [ loading, setLoading ] = useState( false );

  if( isOwner ){
    return <></>
  }

  function sussessFollow() {
    setLoading( false );
    setFollowing(!following);
  }

  function errorFollow(e) {
    setLoading( false );
    console.log(e);
    window.alert(
      "Cannot perform this action, please try again later."
    );
  }

  function handleFollow() {
    const body = { follow: !following };
    setLoading( true );
    api.post(`/users/${userId}/follow`, body, header)
      .then(sussessFollow)
      .catch(errorFollow);
  }

  function innerButton() {
    if( loading ) {
      const color = following ? "var(--color-1)" : "var(--color-4)";
      return <ThreeDots color={color} width={'100%'} height={'0.6rem'} />

    } else {
      return following ? 'Unfollow' : 'Follow';
    }
  }

  return (
    <ButtonFollowContainer following={following} onClick={handleFollow}>
      {innerButton()}
    </ButtonFollowContainer>
  )
}

export default ButtonFollow;

const ButtonFollowContainer = styled.button`
  --background-button: ${props => props.following ? 'var(--color-4)' : 'var(--color-1)'};
  --color-button: ${props => props.following ? 'var(--color-1)' : 'var(--color-4)'};
  --hover-background-button: ${props => props.following ? 'var(--color-3)' : 'var(--color-button-hover)'};

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 1.5rem;
  padding: 0.3rem 1rem;
  margin-top: 0.7rem;
  font-size: 0.8rem;
  
  border: none;
  border-radius: 5px;
  background-color: var(--background-button);
  color: var(--color-button);

  &:hover {
    background-color: var(--hover-background-button);
  }
  
  @media (max-width: 500px) {
    & {
      right: var(--main-screen-padding-inline);
      top: calc(var(--height-header) + 1.2rem);
    }
  }

  @media (min-width: 650px) {
    & {
      position: fixed;
      right: var(--main-screen-padding-inline);
      top: calc(var(--height-header) + 1.2rem);
    }
  }
`