import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [data, setData] = useState({});

  async function signIn ({email, password}) {
    try {
      const response = await api.post("/auth", {
        email,
        password
      });

      const { user, token } = await response.data;
      
      localStorage.setItem("@rocketmovies:token", token);
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({user, token});
      
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@rocketmovies:user"));
    const token = localStorage.getItem("@rocketmovies:token");

    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({user, token})
    }
  }, [])

  return (
    <AuthContext.Provider value={{signIn, user: data.user, token: data.token}}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}