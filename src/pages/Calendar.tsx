import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAppDispatch } from "../hooks/useTypesDispatch";
import { IEvent } from "../models/IEvent";
import {
   createEvent,
   fetchEvents,
   fetchGuests,
} from "../store/slices/event/action-creators";

const Calendar: FC = () => {
   const [modalVisible, setModalVisible] = useState<boolean>(false);
   const { guests, events } = useTypedSelector((state) => state.event);
   const { username } = useTypedSelector((state) => state.auth.user);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchGuests());
      dispatch(fetchEvents(username));
   }, []);

   const addNewEvent = (event: IEvent) => {
      dispatch(createEvent(event));
      setModalVisible(false);
   };

   return (
      <Layout>
         <EventCalendar events={events} />
         <Row justify="center">
            <Button onClick={() => setModalVisible(true)}>
               Добавить событие
            </Button>
         </Row>
         <Modal
            title="Добавить событие"
            visible={modalVisible}
            footer={null}
            onCancel={() => setModalVisible(false)}
         >
            <EventForm guests={guests} submit={addNewEvent} />
         </Modal>
      </Layout>
   );
};

export default Calendar;
