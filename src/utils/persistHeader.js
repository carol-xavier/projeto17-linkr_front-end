const persistHeader = () => {
  const tokenData = localStorage.getItem('token');
  
  if (tokenData) {
<<<<<<< HEAD
    
=======
>>>>>>> main
    return {
      headers: { Authorization: `Bearer ${tokenData}` }
    };
  }
  return {};
}

export default persistHeader;