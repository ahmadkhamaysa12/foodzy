import { createContext } from 'react'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  console.log('UserContextProvider');

  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
