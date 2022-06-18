import styled from "styled-components";
import { Link } from "react-router-dom";

import LinkPreview from "./LinkPreview";
import Hashtag from "./Hashtag";
import Likes from "./Likes";
import DeleteIcon from "./DeleteIcon";

function UserPost({ postData }) {
    const { image, name, postId, postBody, metadata, infoLikes, userId } = postData;

    return (
        <PostContainer>
            <section>
                <img className="user" src={image} alt="" />
                {/* <Likes postId={postId} infoLikes={infoLikes} /> */}
            </section>
            <section className="trashCan">
                <DeleteIcon postId={postId} />
            </section>
            <section className="post-body">
				<Link to={`/user/${userId}`}>
                	<h2>{name}</h2>
				</Link>
                <p>
                    <Hashtag>{postBody}</Hashtag>
                </p>
                <LinkPreview metaData={metadata} />
            </section>
        </PostContainer>
    );
}

export default UserPost;

const PostContainer = styled.article`
    display: flex;
    width: 100%;
    height: auto;
    padding: 1rem;
    overflow: hidden;
    margin-bottom: 1rem;
    background-color: var(--color-2);
    position: relative;

    @media (min-width: 500px) {
        border-radius: 0.8rem;
    }

    & > section {
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
        }

        border-radius: 50%;
    }

    & > section.post-body {
        align-items: flex-start;
        width: calc(100% - 4rem);
        padding-right: 0;
        font-weight: var(--font-weight-regular);

        h2 {
            margin-bottom: 0.5rem;
            font-size: 1rem;
			color: var(--color-4);
        }

        p {
            font-size: 0.9rem;
            color: var(--text-color-secodary);
            margin-bottom: 0.8rem;
        }
    }

    & > section.trashCan {
        position: absolute;
        right: 3%;
    }
`;
