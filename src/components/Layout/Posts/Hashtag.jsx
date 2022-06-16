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
  font-weight: 700;
`;
