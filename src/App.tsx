import { useEffect } from "react";
import Layout, { Content } from "antd/es/layout/layout";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import "./App.css";
import { useAppDispatch } from "./hooks/useTypesDispatch";
import { setAuth, setUser } from "./store/slices/auth";
import { IUser } from "./models/IUser";

function App() {
  const dispatch = useAppDispatch();

   useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(setUser({username: localStorage.getItem('username'), password: ''} as IUser))
      dispatch(setAuth(true))
    }
  });

   return (
      <Layout>
         <Navbar />
         <Content>
            <AppRouter />
         </Content>
      </Layout>
   );
}

export default App;
