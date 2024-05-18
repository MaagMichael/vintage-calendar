export function Card({ event }) {
  return (
    <div
      className="card"
      onClick={() =>
        alert(`Mehr Info zu ${event.title_class}: ${event.description_class}`)
      }
    >
      <p>
        <strong>am {event.date_class_local}</strong>
      </p>
      <div>{event.place_event}</div>
      <div>
        {event.time_start_class} - {event.time_end_class}
      </div>
      <h3>{event.title_class}</h3>
      <p>{event.subtitle_class}</p>
      
      <p>{event.level_class}</p>
      <p>mit {event.teacher_class}</p>
    </div>
  );
}
