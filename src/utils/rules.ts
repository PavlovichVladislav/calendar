import { Dayjs } from "dayjs";
import moment from "moment";

export const rules = {
    required: (message: string = 'Обязательное поле!') => ({ 
        required: true,
        message
    }),
    isOutdated: (message: string ) => () => ({
        validator(_: any, value: Dayjs) {
            if (value.isAfter(moment() as Dayjs) || value.isSame(moment() as Dayjs)) {
                return Promise.resolve()
            }

            return Promise.reject(new Error(message));
        }
    })
}