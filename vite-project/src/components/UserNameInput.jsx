import  { useState } from 'react';

// eslint-disable-next-line react/prop-types
const UserNameInput = ({ onSubmit }) => {
    const [userName, setUserName] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(userName);
    };
  
    return (
      <div>
        <h2>Deinen Namen eingeben</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </label>
          <button type="submit">Senden</button>
        </form>
      </div>
    );
  };
  
  export default UserNameInput;