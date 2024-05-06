import React, {useState, useEffect, createElement} from "react"

//stylesheet
import style from "./clock.module.css"

function Clock() {
  const [time, setTime] = useState(new Date());

  const daysOfWeek = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const currentDayOfWeek = daysOfWeek[time.getDay()];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  function formatTime(){
    let hour = time.getHours();
    const minute = time.getMinutes();
    const secend = time.getSeconds();
     
    hour = hour % 12 || 12;
    
    return `${setPadStartToClock(hour)}:${setPadStartToClock(minute)}:${setPadStartToClock(secend)}`
  }

  function getMeridiem(){
    return time.getHours() >= 12 ? "PM" : "AM";
  }

  function setPadStartToClock(number){
    return String(number).padStart(2, '0');
  }

  return (
    <div className={style.clockCantainer}>
      <div className={style.weekDays}>{daysOfWeek.map((day) => day === currentDayOfWeek ? <span id={style.currentDayOfWeek}>{day}</span> : <span>{day}</span>)}</div>

      <div className={style.clock}>
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="style=linear"><g id="clock-stand"><path id="line" d="M18 20.5L19.5 22" stroke="#0000004f" strokeWidth="2" strokeLinecap="round"/><path id="line_2" d="M6 20.5L4.5 22" stroke="#0000004f" strokeWidth="2" strokeLinecap="round"/><path id="vector" d="M21 13C21 17.968 16.968 22 12 22C7.032 22 3 17.968 3 13C3 8.032 7.032 4 12 4C16.968 4 21 8.032 21 13Z" stroke="#0000004f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path id="vector_2" d="M15.339 15.862L12.549 14.197C12.063 13.909 11.667 13.216 11.667 12.649V8.95898" stroke="#0000004f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path id="line_3" d="M18 2L21.747 5.31064" stroke="#0000004f" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path id="line_4" d="M6 2L2.25304 5.31064" stroke="#0000004f" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></g></g></svg>

        <span className={style.time}>{formatTime()}</span>
        <span className={style.meridiem}>{getMeridiem()}</span>
      </div>
    </div>
  )
}

export default Clock
