import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getContext } from '../../hooks/ContextAPI';
import { api } from "../../utils/api";

function TrendingBox() {
	const { header,refresh,setRefresh } = getContext();
	const navigate = useNavigate();
	const [hashtagList, setHashtagList] = useState([]);

	useEffect(() => {
		api
			.get('/hashtags', header)
			.then((res) => setHashtagList(res.data))
			.catch((err) => console.error(err));
	}, [header]);

	return (
		<Box>
			<h1>trending</h1>
			<div />
			<Article>
				{hashtagList.map((str, index) =>
					<p key={index} onClick={() => {
						navigate(`/hashtag/${str}`);
						setRefresh(!refresh);
					}}># {str}</p>
				)}
			</Article>
		</Box>
	)
};

export default TrendingBox;

const Box = styled.div`
	width: 37%;
	height: auto;
	margin-top: 3.4rem;
	margin-left: 3rem;
	border-radius: 16px;
	background-color: var(--color-5);

  &>h1{
	font-family: var(--font-header);
	font-size: 1.5rem;
	margin-top:1rem;
	margin-left:1rem;
  }

  &>div{
		display: flex;
		width: 100%;
		border: 1px solid var(--color-6);
		margin-top:1rem;
  }
`;

const Article = styled.article`
	margin-top: 0.7rem;
	margin-left:1rem;
	
	&>p{
		margin-bottom: 0.5rem;
		font-weight: var(--font-weight-bold);
	}
`;
