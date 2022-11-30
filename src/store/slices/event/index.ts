import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IEvent } from "../../../models/IEvent"
import { IUser } from "../../../models/IUser"
import { EventState } from "./types"


const initialState: EventState = {
    guests: [],
    events: []
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setGuests: (state, action: PayloadAction<IUser[]>) => {
            state.guests = action.payload;
        },
        setEvents: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload;
        }
    }
})

export const { setGuests, setEvents } = eventSlice.actions;

export default eventSlice.reducer;