import { useState, useEffect } from 'react';
import { getContext } from '../hooks/ContextAPI';
import { api } from './api';

import Input from './input';

export default function Editable ({postId, value, onChange, children, ...props }) {
  const { header, refrash, setRefresh } = getContext();
  const [editing, setEditing] = useState(true);
  const [state, setState] = useState(value);

  useEffect(() => {
    if (!editing) {
      setState(value);
    }
  });

  function handleChange (e) {
    const body = { newText: state };
    api.put(`/posts/${postId}`, body, header )
      .then(() => setRefresh(!refrash))
      .catch(err => console.log(err));
  }

  function onKeyPress (event) {
    if (event.key === 'Enter') {
      handleChange();
    
    } else if (event.key === 'Escape') {
      setEditing(false);
    }
  }

  return (
    editing
    ? <Input {...props} value={state} onChange={e => setState(e.target.value)} onKeyPress={onKeyPress} />
    : <span style={{ cursor: 'pointer' }} onClick={() => setEditing(true)}>{state}</span>
  );
}