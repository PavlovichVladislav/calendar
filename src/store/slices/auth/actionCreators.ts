import { setAuth, setError, setIsLoading, setUser } from ".";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IUser } from "../../../models/IUser";

export const login =
   (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
         dispatch(setIsLoading(true));
         setTimeout(async () => {
            const response = await UserService.getUsers();
            const mockUser = response.data.find(
               (user) =>
                  username === user.username && password === user.password
            );

            if (mockUser) {
               localStorage.setItem("auth", "true");
               localStorage.setItem("username", mockUser.username);
               dispatch(setAuth(true));
               dispatch(setUser(mockUser));
               dispatch(setError(''));
            } else {
               dispatch(setError("Некорректный логин или пароль"));
            }
            dispatch(setIsLoading(false));
         }, 1000);
      } catch (e) {
         dispatch(setError("Ошибка при авторизации"));
      }
   };

export const logout = () => async (dispatch: AppDispatch) => {
      localStorage.removeItem("auth");
      localStorage.removeItem("username");

      dispatch(setUser({} as IUser));
      dispatch(setAuth(false));
};
