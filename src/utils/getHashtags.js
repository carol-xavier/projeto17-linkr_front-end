export default function getHashtags(text) {
  const hashtags = text.match(/#\w+/g);
  if(hashtags){
    return hashtags.map(hashtag => hashtag.slice(1));
  }
  return [];
}