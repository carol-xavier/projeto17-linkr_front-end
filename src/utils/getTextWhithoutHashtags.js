export default function getTextWithoutHashtags(text) {
  return text.replace(/#\w+/g, '');
}