import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "./../../utils/api";
import { getContext } from '../../hooks/ContextAPI';
import styled from 'styled-components';

function TrendingBox() {
  const navigate = useNavigate();
  const { token } = getContext();
  const [hashtagList, setHashtagList] = useState([]);
 
  useEffect(() => {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };

    api
      .get('/hashtags',config)
      .then((res) => setHashtagList(res.data))
      .catch((err) => console.error(err));
  }, [token]);

  return (
    <Box>
      <h1>trending</h1>
      <div />
      <Article>
        {hashtagList.map((str, index) =>
          <p onClick={() => navigate(`/hashtag/${str}`)}># {str}</p>
        )}
      </Article>
    </Box>
  )
};

export default TrendingBox;

const Box = styled.div`
  margin-top: 3.4rem;
  margin-left: 1rem;
  width:37%;
  height: auto;
  border-radius: 16px;
  background-color: var(--color-5);
  position: relative;

  @media (max-width: 500px) {      
      display: none;
    }

  &>h1{
    font-family: var(--font-logo-login-secundary);
    font-size: 1.5rem;
    margin-top:1rem;
    margin-left:1rem
  }

  &>div{
    width: 100%;
    border: 1px solid var(--color-6);
    margin-top: 0.5rem;
  }
`;

const Article = styled.article`
    margin-top: 1rem ;
    margin-bottom: 1rem;
    margin-left: 1rem;
  
    &>p{
        margin-bottom: 10px;
        font-weight: var(--font-weight-bold);
    }
`;
