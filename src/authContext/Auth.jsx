import { useState, createContext } from 'react';
import { Login } from '../util/functions'
import Admin  from '../pages/Admin'
import GoogleButton from 'react-google-button'
import Header from '../components/Header';


export const AuthContext = createContext({ auth: null, setAuth: () => {} });

export function Auth() {
  const [auth, setAuth] = useState(null);

  async function handleAuth(){
    let data = await Login()
    if (data.uid === import.meta.env.VITE_uid) {
      setAuth(data)
    }
  }

  return (
    <AuthContext.Provider value={{ auth, handleAuth }}>
      {
        auth? <Admin />:<Component />
      }
    </AuthContext.Provider>
  );
}

//----------------------------------------------------------
// otro componente hijo 
const Component = () => {
  return (
    <AuthContext.Consumer>

        {(auth) => {
          return (
            <section className='w-screen h-screen flex justify-center items-center'>
              <Header />
              <GoogleButton onClick={() => { auth.handleAuth() }} />
            </section>
            );
        }}
    </AuthContext.Consumer>
  )
}