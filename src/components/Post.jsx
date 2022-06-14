import Hashtag from './Hashtag';

const Post = (props) => (
    <p>
      <Hashtag>{props.children}</Hashtag>
    </p>
  );

  export default Post;