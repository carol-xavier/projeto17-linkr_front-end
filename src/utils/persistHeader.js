const persistHeader = () => {
  const { token } = localStorage.getItem('token');
  if (token) {
    return {
      headers: { Authorization: `Bearer ${token}` }
    };
  }
  return {};
}

export default persistHeader;