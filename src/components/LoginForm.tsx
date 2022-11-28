import { Button, Form, Input } from "antd";
import React, { FC } from "react";
import { useAppDispatch } from "../hooks/useTypesDispatch";
import { login } from "../store/slices/auth/actionCreators";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
   const dispatch = useAppDispatch();

   const submit = () => {
    dispatch(login('user@mail.ru', '123'));
   };

   return (
      <Form onFinish={submit}>
         <Form.Item
            label="Имя пользователя "
            name="username"
            rules={[rules.required("Пожалуйста, введите имя")]}
         >
            <Input />
         </Form.Item>

         <Form.Item
            label="пароль"
            name="password"
            rules={[rules.required("Пожалуйста, введите пароль")]}
         >
            <Input.Password />
         </Form.Item>

         <Form.Item>
            <Button type="primary" htmlType="submit">
               Войти
            </Button>
         </Form.Item>
      </Form>
   );
};

export default LoginForm;
