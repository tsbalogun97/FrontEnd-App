import {UserProvider} from './auth/index';

const AppProvider = ({children}) =>{
  return <UserProvider>{children}</UserProvider>
  
};

export default AppProvider;