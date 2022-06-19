const persistHeader = () => {
  const tokenData = localStorage.getItem('token');
  
  if (tokenData) {
    
    return {
      headers: { Authorization: `Bearer ${tokenData}` }
    };
  }
  return {};
}

export default persistHeader;