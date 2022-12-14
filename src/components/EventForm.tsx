import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { FC, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";
import { IUser } from "../models/IUser";
import { formatDate } from "../utils/date";
import { rules } from "../utils/rules";

interface EventFormProps {
   guests: IUser[];
   submit: (event: IEvent) => void 
}

const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
   const [event, setEvent] = useState<IEvent>({
      author: "",
      date: "",
      description: "",
      guest: "",
   } as IEvent);
   const { username } = useTypedSelector((state) => state.auth.user);

   const selectDate = (date: Date | null) => {
      if (date) {
         setEvent({...event, date: formatDate(date)})
      }
   };

   const submitForm = () => {
      submit({...event, author: username})
   }

   return (
      <Form onFinish={submitForm}>
         <Form.Item
            label="Описание события"
            name="decription"
            rules={[rules.required()]}
         >
            <Input
               value={event.description}
               onChange={(e) =>
                  setEvent({ ...event, description: e.target.value })
               }
            />
         </Form.Item>
         <Form.Item label="Дата события" name="date" rules={[rules.required()]}>
            <DatePicker onChange={(date: any) => selectDate(date?.toDate())} />
         </Form.Item>
         <Form.Item
            label="Выберите гостя"
            name="guest"
            rules={[rules.required()]}
         >
            <Select
               onChange={(guest: string) => setEvent({ ...event, guest })}
               options={guests.map((guest) => ({
                  value: guest.username,
               }))}
            />
         </Form.Item>
         <Row justify="end">
            <Form.Item>
               <Button type="primary" htmlType="submit">
                  Создать
               </Button>
            </Form.Item>
         </Row>
      </Form>
   );
};

export default EventForm;
