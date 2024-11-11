import styles from "./Date.module.css";
import { useState } from "react";
import Calendar from '../../../public/assets/svg/Calendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Data() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleFocus = () => {
    setCalendarOpen(true);
  };

  const handleBlur = () => {
    setCalendarOpen(false);
  };

  return (
    <div className={`${styles.inputItem} ${styles.data}`}>
      <h2>Check In</h2>
      <div className={styles.dataItem}>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          open={calendarOpen}
          onClickOutside={() => setCalendarOpen(false)}
          onFocus={() => setCalendarOpen(true)}
          dateFormat="MMMM d, yyyy"
          className={styles.dateInput}
          popperClassName={styles.customCalendar} // Применяем свой пользовательский класс для календаря
        />
        <div className={styles.icon}>
          <Calendar />
        </div>
      </div>
    </div>
  );
}
