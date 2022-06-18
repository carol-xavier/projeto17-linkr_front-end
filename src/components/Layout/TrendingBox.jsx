import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getContext } from '../../hooks/ContextAPI';
import { api } from "../../utils/api";

function TrendingBox() {
	const { header } = getContext();
	const navigate = useNavigate();
	const [hashtagList, setHashtagList] = useState([]);

	useEffect(() => {
		api
			.get('/hashtags', header)
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
	width: 15rem;
	min-width: 15rem;
	height: 10rem;
  border-radius: 16px;
  background-color: var(--color-5);
  position: relative;

  h1{
	font-family: var(--font-header);
	font-size: 27px;
	position:absolute;
	top:12px;
	left:16px;
  }

  div{
		display: flex;
		width: 100%;
		border: 1px solid var(--color-6);
		position: absolute;
		top: 61px;
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
