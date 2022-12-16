import { Calendar, Layout } from "antd";
import { Dayjs } from "dayjs";
import { FC } from "react";
import { IEvent } from "../models/IEvent";
import { formatDate } from "../utils/date";

interface EventCalendarProps {
   events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
   const dateCellRender = (value: Dayjs) => {
      const formatedDate = formatDate(value.toDate());
      console.log(formatedDate);
      const currentDayEvents = props.events.filter(
         (ev) => ev.date === formatedDate
      );
      return (
         <div>
            {currentDayEvents.map((ev, i) => (
               <div key={i}>{ev.description}</div>
            ))}
         </div>
      );
   };

   return (
      <Layout>
         <Calendar dateCellRender={dateCellRender} />
      </Layout>
   );
};

export default EventCalendar;
