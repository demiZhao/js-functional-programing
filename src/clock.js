import { useRef, useState, useContext, memo } from "react";
import { TimeContext } from "./app";

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const getTime = ({ hours, minutes, seconds }) => {
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  return date.getTime();
};

const getHhmmss = (time) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return { hours, minutes, seconds };
};

const ClockSetting = memo(({title, setTime }) => {
  console.log(`  <ClockSetting> rendered`)

  const [error, setError] = useState(null);
  const hasError = (hh, mm, ss) => isNaN(hh) || isNaN(mm) || isNaN(ss);

  const hhRef = useRef();
  const mmRef = useRef();
  const ssRef = useRef();

  const reset = () => {
    hhRef.current.value = "";
    mmRef.current.value = "";
    ssRef.current.value = "";
  };

  const handleClick = () => {
    setError(null);

    const hours = hhRef.current.value;
    const minutes = mmRef.current.value;
    const seconds = ssRef.current.value;

    if (hasError(hours, minutes, seconds)) {
      setError("Error! Please enter number.");
    } else {
      setTime(getTime({ hours, minutes, seconds }));
      reset();
    }
  };

  return (
    <div className={"clock-settings"}>
      {error && <div className={"error"}>{error}</div>}
      <div>
        <label htmlFor={`${title}hh`}>{'hh:'}</label>
        <input
          ref={hhRef}
          type="text"
          id={`${title}hh`}
          maxLength="2"
          data-testid="hh"
        />
        <label htmlFor={`${title}mm`}>{'mm:'}</label>
        <input
          ref={mmRef}
          type="text"
          id={`${title}mm`}
          maxLength="2"
          data-testid="mm"
        />
        <label htmlFor={`${title}ss`}>{'ss:'}</label>
        <input
          ref={ssRef}
          type="text"
          id={`${title}ss`}
          maxLength="2"
          data-testid="ss"
        />
        <button data-testid="btn" className={"btn-primary"} onClick={handleClick}>
          Set
        </button>
      </div>
    </div>
  );
})

const DigitalClock = ({ title }) => {
  console.log(` <DigitalClock> rendered`)

  const { time, setTime } = useContext(TimeContext);
  const { hours, minutes, seconds } = getHhmmss(time);

  return (
    <div className={"clock"}>
      <h3>{title}</h3>
      <div className={"digital-clock"}>
        <span data-testid="time">{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</span>
      </div>
      <ClockSetting setTime={setTime} title={title}/>
    </div>
  );
};

const AnalogClock = ({ title }) => {
  console.log(` <AnalogClock> rendered`)

  const { time, setTime } = useContext(TimeContext);
  const { hours, minutes, seconds } = getHhmmss(time);

  const secondsStyle = {
    transform: `rotate(${seconds * 6}deg)`
  };
  const minutesStyle = {
    transform: `rotate(${minutes * 6}deg)`
  };
  const hoursStyle = {
    transform: `rotate(${hours * 30}deg)`
  };

  return (
    <div className={"clock"}>
      <h3>{title}</h3>
      <div className={"analog-clock"}>
        <div className={"dial seconds"} style={secondsStyle} />
        <div className={"dial minutes"} style={minutesStyle} />
        <div className={"dial hours"} style={hoursStyle} />
      </div>
      <ClockSetting setTime={setTime} title={title} />
    </div>
  );
};

export {
  ClockSetting,
  DigitalClock,
  AnalogClock,
  formatTime,
  getTime,
  getHhmmss
};
