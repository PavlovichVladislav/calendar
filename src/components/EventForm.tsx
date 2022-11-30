import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import React, { FC } from "react";
import { IUser } from "../models/IUser";
import { rules } from "../utils/rules";

interface EventFormProps {
   guests: IUser[];
}

const EventForm: FC<EventFormProps> = ({ guests }) => {
   return (
      <Form>
         <Form.Item
            label="Описание события"
            name="decription"
            rules={[rules.required()]}
         >
            <Input />
         </Form.Item>
         <Form.Item label="Дата события" name="date" rules={[rules.required()]}>
            <DatePicker />
         </Form.Item>
         <Form.Item>
            <Select
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
