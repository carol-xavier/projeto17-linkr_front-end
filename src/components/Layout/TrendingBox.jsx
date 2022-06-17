import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { api } from "../../utils/api";
//#TODO: ## Get **token** from contextAPI

function TrendingBox() {
	const navigate = useNavigate();
	const [hashtagList, setHashtagList] = useState([]);

	useEffect(() => {

		/* const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			}
		}; */

		api
			.get('/hashtags')
			.then((res) => setHashtagList(res.data))
			.catch((err) => console.error(err));
	}, []); 

	return (
		<Box>
			<h1>trending</h1>
			<div />
			<Article>
				{hashtagList.map((str, index) =>
					   <p onClick={() => navigate(`hashtag/${str}`)}># {str}</p>
				)}
			</Article>
		</Box>
	)
};

export default TrendingBox;

const Box = styled.div`
  margin-top: 3.8rem;
  margin-left: 3rem;
  width:12rem;
  height: auto;
  border-radius: 16px;
  background-color: var(--color-5);
  position: relative;

  @media (max-width: 500px) {      
      display: none;
    }

  h1{
    font-family: var(--font-logo-login-secundary);
    font-size: 1.5rem;
    position:absolute;
    top:1rem;
    left:1rem
  }

  div{
    width: 100%;
    border: 1px solid var(--color-6);
    position: absolute;
    top: 3.5rem;
  }
`;

const Article = styled.article`
    position: absolute;
    height: 293px;
    top: 83px;
    left: 16px;
    
    p{
        margin-bottom: 10px;
        font-weight: var(--font-weight-bold);
    }
`;
