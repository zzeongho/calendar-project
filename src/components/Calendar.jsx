import Date from "./Date";
import calendarData from "../calendarDate.json";

function Calendar() {
  return (
    <div className="bg-white max-w-full rounded-lg shadow-2xl p-8">
      <div className="pb-8 text-4xl font-bold">2021,04</div>
      <ul className="grid grid-cols-7 gap-4">
        {calendarData.map((v, i) => {
          return <Date key={i} date={v.date} day={v.day} todos={v.todos} />;
        })}
      </ul>
    </div>
  );
}

export default Calendar;
