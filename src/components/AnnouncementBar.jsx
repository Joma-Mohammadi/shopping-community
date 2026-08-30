import { useEffect, useState } from "react";

const announcement = {
  text: "LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.",
  hours: 23,
  minutes: 15,
  seconds: 0,
};

export default function AnnouncementBar() {
  const [time, setTime] = useState({
    hours: announcement.hours,
    minutes: announcement.minutes,
    seconds: announcement.seconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 60;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 60;
          seconds = 60;
        } else {
          clearInterval(timer);
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => {
    return String(value).padStart(2, "0");
  };

  return (
    <div className="min-h-8 bg-[#075039]">
      <div className="flex min-h-8 w-full items-center justify-center gap-2 whitespace-nowrap px-2
       text-[9px] text-gray-200 sm:gap-4 sm:px-4 sm:text-sm md:text-[15px]">

        <span className="font-normal tracking-[0.1px] sm:tracking-[0.5px]">
          {announcement.text}
        </span>

        <span className="shrink-0 font-semibold tracking-[0.5px] text-white sm:tracking-[1px]">
          {formatTime(time.hours)} : {formatTime(time.minutes)} :{" "}
          {formatTime(time.seconds)}
        </span>

      </div>
    </div>
  );
}