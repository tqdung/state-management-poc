import React from 'react';
import UserName from './components/UserName';
import UserAge from './components/UserAge'
import UserNameInput from './components/UserNameInput';
import UserAgeInput from './components/UserAgeInput';

function App() {
  return (
    <div className="App">
      <UserName />
      <UserAge />
      <UserNameInput />
      <UserAgeInput />
    </div>
  );
}

export default App;
