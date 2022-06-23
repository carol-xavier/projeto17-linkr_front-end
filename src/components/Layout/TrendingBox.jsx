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
		<>
		<Base />
		<TrendingBoxContainer>
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
		</TrendingBoxContainer>
		</>
	)
};

export default TrendingBox;

const Base = styled.article`	
	width: 30%;
	position: static;
	margin-left: 3rem;
	border-radius: 13px;

	@media (max-width: 650px) {
		display: none;
	}
`

const TrendingBoxContainer = styled.div`
	--width-main: calc( 100% - ( 2 * var( --main-screen-padding-inline )) );
	--width: calc( var( --width-main ) * 0.3 );

	width: var( --width );
	max-width: var( --width );
	height: auto;
	position: absolute;
	right: var(--main-screen-padding-inline);
	top: calc( var( --height-header) + 4.6rem );

	border-radius: 13px;
	background-color: var(--color-5);

	@media (max-width: 750px){
		width: calc( var( --width) - 1rem);
		max-width: calc( var( --width) - 1rem);
	}

	@media (max-width: 650px) {
		display: none;
	}

  &>h1{
		font-size: 1.3rem;
		margin-block: 0.7rem;
		margin-left: 0.6rem;
		cursor: default;
  }

  &>div{
		display: flex;
		width: 100%;
		border: 1px solid var(--color-6);
  }
`;

const Article = styled.article`
	margin-block: 0.7rem;
	margin-left:0.6rem;
	
	&>p{
		margin-bottom: 0.5rem;
		font-weight: var(--font-weight-bold);
		cursor: pointer;
	}
`;
