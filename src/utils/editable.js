import { useState, useEffect } from 'react';

import Input from './input';

export default function Editable ({ value, onChange, children, ...props }) {
  const [editing, setEditing] = useState(true);
  const [state, setState] = useState(value);

  useEffect(() => {
    if (!editing) {
      setState(value);
    }
  });

  function onKeyPress (event) {
    console.log(event.key)
    if (event.key === 'Enter') {
      console.log("enter pressed")
      setEditing(false);
    } 
    
  }

  return (
    editing
    ? <Input {...props} value={state} onChange={e => setState(e.target.value)} onKeyPress={onKeyPress} />
    : <span style={{ cursor: 'pointer' }} onClick={() => setEditing(true)}>{state}</span>
  );
}