import { setGuests } from ".";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";


export const fetchGuests = () => async (dispatch: AppDispatch) => {
    try {
        console.log('hello');
        const response = await UserService.getUsers();

        dispatch(setGuests(response.data));
    } catch (e) {
        console.log(e);
    }
}