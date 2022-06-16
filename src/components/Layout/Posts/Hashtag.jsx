import { useNavigate } from 'react-router-dom';
import ReactHashtag from '@mdnm/react-hashtag';
import styled from 'styled-components';

const Hashtag = (props) => (
    <ReactHashtag
      renderHashtag={(hashtagValue) => (
        <StyledHashtag href={`/hashtag/${hashtagValue}`}>
          {hashtagValue}
        </StyledHashtag>
      )}
    >
      {props.children}
    </ReactHashtag>
  );

  export default Hashtag;

  const StyledHashtag = styled.a`
    font-weight: var(--font-weight-bold);
    color: var(--color-4);
  `;