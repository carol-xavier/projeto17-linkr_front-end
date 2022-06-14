import Hashtag from './Hashtag';

const Post = (props) => (
    <p>
      <Hashtags>{props.children}</Hashtags>
    </p>
  );

  export default Post;