function Date(props) {
  return (
    <li className="inline-block bg-white rounded-lg shadow-md">
      <div
        className={`${
          props.day === "SUN"
            ? "bg-red-400"
            : props.day === "SAT"
            ? "bg-blue-400"
            : "bg-orange-400"
        } rounded-t-lg px-2 py-1 text-xl text-white`}
      >
        {props.date}
      </div>
      <ul className="p-2 text-lg min-h-[80px]">
        {props.todos.map((v, i) => {
          return <li className="truncate">{v}</li>;
        })}
      </ul>
    </li>
  );
}

export default Date;
