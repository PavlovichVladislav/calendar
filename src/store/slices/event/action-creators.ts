import { setEvents, setGuests } from ".";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";


export const fetchGuests = () => async (dispatch: AppDispatch) => {
    try {
        const response = await UserService.getUsers();

        dispatch(setGuests(response.data));
    } catch (e) {
        console.log(e);
    }
}

export const createEvent = (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
        const events = localStorage.getItem('events') || '[]';
        const json = JSON.parse(events) as IEvent[];
        json.push(event);
        dispatch(setEvents(json));
        localStorage.setItem('events', JSON.stringify(json));
    } catch (e) {
        console.log(e);
    }
}