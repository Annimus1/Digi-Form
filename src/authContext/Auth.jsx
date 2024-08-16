import { useState, createContext } from 'react';
import { Login } from '../util/functions';
import Admin  from '../pages/Admin';
import Header from '../components/Header';


export const AuthContext = createContext({ auth: null, setAuth: () => {} });

export function Auth() {
  const [auth, setAuth] = useState(null);

  async function handleAuth(email, password){
    let data = await Login(email, password)
    
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
// Child component to show login form
 const Component = () => {
  return (
    <AuthContext.Consumer>

        {(auth) => {
          return (
            <section className='w-screen h-screen flex justify-center items-center'>
              <Header />
              <form onSubmit={(event)=>{
              event.preventDefault();
              auth.handleAuth(event.target[0].value, event.target[1].value);
              }}>
              
                <div className="flex flex-col mb-3">
                  <label
                  htmlFor="email" 
                  >Email</label>
                  
                  <input
                  className = "border-b-gray-300 border-b focus:outline-none focus:border-b-william-100"
                  id="email"
                  name="email"
                  type="email"/>
                </div>
                
                <div className="flex flex-col mb-3">
                  <label
                  htmlFor="passwd"
                  >Password</label>
                  
                  <input
                  className = "border-b-gray-300 border-b focus:outline-none focus:border-b-william-100"
                  id="passwd"
                  name="passwd"
                  type="password"/>
                </div>

                <div className="flex justify-end"> 
                  <input
                  className = "p-3 bg-william-500 text-white rounded-md"
                  type="submit" value="Login"/>
                </div>
              </form>
            </section>
            );
        }}
    </AuthContext.Consumer>
  )
}
