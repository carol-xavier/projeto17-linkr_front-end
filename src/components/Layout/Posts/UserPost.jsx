import { React, useEffect, useState, useRef} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import LinkPreview from "./LinkPreview";
import Hashtag from "./Hashtag";
import Likes from "./Likes";
import DeleteIcon from "./DeleteIcon";
import Editable from '../../../utils/editable';
import { MdOutlineEdit } from "react-icons/md";
import Reposts from './Reposts';
import Comments from './Comments/Comments';
import { CgRepeat } from 'react-icons/cg';

function UserPost({ postData }) {
    const [editable, setEditable] = useState(false);
    const ref = useRef()
	const { 
        image, 
        name, 
        userId,
        postId, 
        postBody,
        following,
        isOwner, 
        metadata, 
        infoLikes,        
        reposts,
        repostInfo
    } = postData;

	function handleButton() {
		setEditable(!editable)
	}

    function sideInfoPost() {
        return (
            <section>
                <img className="user" src={image} alt="" />
                <Likes postId={postId} infoLikes={infoLikes} />
                <Reposts postId={postId} reposts={reposts}/>
            </section>
        )
    }

    function showRepostInfo() {
        if (repostInfo === false) return <></>;
        let name;
        if (isOwner && repostInfo.userId === userId) {
            name = "you";
        } else {
            name = repostInfo.userName;
        }

        return (
            <RepostContainer>
                <CgRepeat />
                <p>Re-posted by <Link to={`/user/${repostInfo.userId}`}>{name}</Link></p>
            </RepostContainer>
        );
    }

    function descriptionPost() {
        return (
            <>
            <section className="header-post">
                <Link to={`/user/${userId}`} state={ { following, isOwner } }>
                    <h2>{name}</h2>
                </Link>
                <CommandsContainer visible={ isOwner }>
                    <MdOutlineEdit className='edit' onClick={handleButton} />
                    <DeleteIcon postId={postId} />
                </CommandsContainer>
            </section>
            <p ref={ref}>
                {editable
                    ? <Editable postId={postId} value={postBody} /> 
                    : <p><Hashtag>{postBody}</Hashtag></p>
                }
            </p>
            </>
        )
    }

	useEffect(() => {
		const checkIfClickedOutside = e => {
		  if (editable && ref.current && !ref.current.contains(e.target)) {
			setEditable(false)
		  }
		}
		document.addEventListener("mousedown", checkIfClickedOutside)
		return () => {
		  document.removeEventListener("mousedown", checkIfClickedOutside)
		}
	}, [editable]);

	return (
        <BaseContainer>
            {showRepostInfo()}
            <PostContainer>
                { sideInfoPost() }
                <section className="post-body">
                    { descriptionPost() }
                    <LinkPreview metaData={ metadata } />
                </section>
            </PostContainer>
            <Comments />
        </BaseContainer>
	);
}

export default UserPost;

const BaseContainer = styled.article`
    display: flex;
    flex-direction: column;
	width: 100%;
	height: auto;
	overflow: hidden;
	margin-bottom: 1rem;
	background-color: var(--color-7);

    @media (min-width: 500px) {
        border-radius: 0.8rem;
    }
`

const PostContainer = styled.section`
	display: flex;
	width: 100%;
	height: auto;
	padding: 1rem;
	overflow: hidden;
	background-color: var(--color-2);
	position: relative;

	@media (min-width: 500px) {
		border-radius: 0.8rem;
	}

    &>section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 4rem;
        padding-right: 1rem;

        img.user {
            --size-icon: 2.5rem;
            width: var(--size-icon);
            height: var(--size-icon);

            border-radius: 50%;
            object-fit: cover;
            object-position: center;
            background-repeat: no-repeat;
        }
    }

	& > section.post-body {
		align-items: flex-start;
		width: calc(100% - 4rem);
		padding-right: 0;
		font-weight: var(--font-weight-regular);
		

        & > section.header-post {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }


        h2 {
            margin-bottom: 0.5rem;
            font-size: 1rem;
            color: var(--color-4);
        }

        p {
            width: 100%;
            font-size: 0.9rem;
            color: var(--text-color-secondary);
            margin-bottom: 0.8rem;
        }
    }
`;

const CommandsContainer = styled.section`
    display: ${props => props.visible ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    &>.edit {
        cursor: pointer;
        &:hover {
            color: var(--color-1);
        }
    }
`;

const RepostContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 33px;
    padding: 10px;
    position: relative;
    background-color: var( --color-7 );
    &::before,
    &::after {
        content: "";
        position: absolute;
        background-color: transparent;
        width: 16px;
        height: 50px;
        box-shadow: 0 -16px 0 0 #1E1E1E;
        bottom: -50px;
    }
    &::before{
        border-top-left-radius: 16px;
        left: 0;
    }
    &::after{
        border-top-right-radius: 16px;
        right: 0;
    }
    p, p a{
        font-size: 11px;
    }
    p a{
        font-weight: var(--font-weight-bold);
        color: var(--color-4)
    }
    svg{
        font-size: 23px;
    }
`;