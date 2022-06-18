export default function handleInfosLikes(isLiked, qtdLikes, names) {
  if( qtdLikes === 0 ){
    return "No likes yet";
  }

  if (isLiked) {
    if( qtdLikes === 1 ){
      return `You liked this post`;      
    }

    if( qtdLikes === 2 ){
      return `You and ${names[0]}`;      
    } 

    if( qtdLikes > 2 ){
      return `You, ${names[0]} and other ${qtdLikes - 2} people`;
    }

  } else {
    if( qtdLikes === 1 ){
      return `${names[0]} liked this post`;      
    }

    if( qtdLikes === 2 ){
      return `${names[0]} and ${names[1]}`;  
    }

    if( qtdLikes > 2 ) {
      return `${names[0]}, ${names[1]} and other ${qtdLikes - 2} people`;
    }
  }
}
