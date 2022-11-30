import { Row } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { FC } from "react";
import Menu from "antd/es/menu";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAppDispatch } from "../hooks/useTypesDispatch";
import { logout } from "../store/slices/auth/actionCreators";

const Navbar: FC = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const {isAuth, user} = useTypedSelector(state => state.auth);


   return (
      <Header>
         <Row justify="end">
            {isAuth ? (
               <Menu theme="dark" mode="horizontal" selectable={false}>
                  <div style={{ color: "white" }}> {user.username} </div>
                  <Menu.Item onClick={() => dispatch(logout())} key={1}>
                     Выйти
                  </Menu.Item>
               </Menu>
            ) : (
               <Menu theme="dark" mode="horizontal" selectable={false}>
                  <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>
                     Логин
                  </Menu.Item>
               </Menu>
            )}
         </Row>
      </Header>
   );
};

export default Navbar;
