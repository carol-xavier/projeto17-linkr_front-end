const persistHeader = () => {
<<<<<<< HEAD
  const tokenData = localStorage.getItem('token');
  
  if (tokenData) {
    
    return {
      headers: { Authorization: `Bearer ${tokenData}` }
=======
  const jsonConfigData = localStorage.getItem('configData');
  
  if (!jsonConfigData) {
    return { header: null, imgUser: null };
  }

  const { token, imgUser } = JSON.parse( jsonConfigData );

  if ( token ) {
    const header = {
      headers: {
        Authorization: `Bearer ${token}`
      }
>>>>>>> main
    };
    
    return { header, imgUser };
  }
  
  return {header: null, imgUser: null};
}

export default persistHeader;