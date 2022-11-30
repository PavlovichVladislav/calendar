import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAppDispatch } from "../hooks/useTypesDispatch";
import { login } from "../store/slices/auth/actionCreators";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
   const dispatch = useAppDispatch();
   const { error, isLoading } = useTypedSelector((state) => state.auth);
   const [username, setUsername] = useState<string>("");
   const [password, setPassword] = useState<string>("");

   const submit = () => {
      dispatch(login(username, password));
   };

   return (
      <Form onFinish={submit}>
         {error && <div style={{ color: "red" }}>{error}</div>}
         <Form.Item
            label="Имя пользователя "
            name="username"
            rules={[rules.required("Пожалуйста, введите имя")]}
         >
            <Input
               value={username}
               onChange={(e) => setUsername(e.target.value)}
            />
         </Form.Item>

         <Form.Item
            label="пароль"
            name="password"
            rules={[rules.required("Пожалуйста, введите пароль")]}
         >
            <Input.Password
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
         </Form.Item>

         <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
               Войти
            </Button>
         </Form.Item>
      </Form>
   );
};

export default LoginForm;
