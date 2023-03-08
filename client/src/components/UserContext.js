import React from 'react';
import { createContext, useState } from 'react';

export const UserContext = createContext(null);

function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const setUser = (user) => setCurrentUser(user);

  return (
    <UserContext.Provider value={{ currentUser,  setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
