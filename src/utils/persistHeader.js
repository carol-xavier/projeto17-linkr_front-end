const persistHeader = () => {
  const tokenData = localStorage.getItem('token');
  if (tokenData) {
    console.log('tokenData', tokenData);
    return {
      headers: { Authorization: `Bearer ${tokenData.token}` }
    };
  }
  return {};
}

export default persistHeader;