import axios from "axios";
import { setAuth, setError, setIsLoading, setUser } from ".";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";

export const login =
   (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
         dispatch(setIsLoading(true));
         setTimeout(async () => {
            const response = await axios.get<IUser[]>("./users.json");
            const mockUser = response.data.find(
               (user) =>
                  username === user.username && password === user.password
            );

            if (mockUser) {
               localStorage.setItem("auth", "true");
               localStorage.setItem("username", mockUser.username);
               dispatch(setAuth(true));
               dispatch(setUser(mockUser));
            } else {
               dispatch(setError("Некорректный логин или пароль"));
            }
            dispatch(setIsLoading(false));
         }, 1000);
      } catch (e) {
         dispatch(setError("Ошибка при авторизации"));
      }
   };
