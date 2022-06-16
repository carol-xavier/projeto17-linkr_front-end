import { useNavigate } from 'react-router-dom';
import ReactHashtag from '@mdnm/react-hashtag';
import styled from 'styled-components';

function Hashtag(props){
  const navigate = useNavigate();
  
  return (
    <ReactHashtag onHashtagClick={(name) => navigate(`/hashtag/${name}`)}>
      <StyledHashtag>
        {props.children}
      </StyledHashtag>
    </ReactHashtag>
  );
};

  export default Hashtag;

  const StyledHashtag = styled.a`
    font-weight: var(--font-weight-bold);
    color: red;
  `;



// const Hashtag = (props) => (
//     <ReactHashtag
//       renderHashtag={(hashtagValue) => (
//         <StyledHashtag href={`/hashtag/${hashtagValue}`}>
//           {hashtagValue}
//         </StyledHashtag>
//       )}
//     >
//       {props.children}
//     </ReactHashtag>
//   );