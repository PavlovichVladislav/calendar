import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAppDispatch } from "../hooks/useTypesDispatch";
import { fetchGuests } from "../store/slices/event/action-creators";

const Calendar: FC = () => {
   const [modalVisible, setModalVisible] = useState<boolean>(false);
   const { guests } = useTypedSelector((state) => state.event);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchGuests());
   }, []);

   return (
      <Layout>
         <EventCalendar events={[]} />
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
            <EventForm guests={guests} />
         </Modal>
      </Layout>
   );
};

export default Calendar;
