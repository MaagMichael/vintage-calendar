export function Card({ event }) {
  return (
    <div
      className="card"
      onClick={() =>
        alert(`Mehr Info zu ${event.title_class}: ${event.description_class}`)
      }
      style={{
        backgroundColor: event.color_card,
        // filter: "blur(5px)"
      }}
    >
      <p>
        <strong>am {event.date_class_local}</strong>
      </p>
      <p>
        {event.time_start_class} - {event.time_end_class} Uhr
      </p>
      <p>{event.place_event}</p>
      <h3>{event.title_class}</h3>
      <h4>Level {event.level_number}</h4>
      <p>{event.subtitle_class}</p>
      
      <p>{event.level_class}</p>
      <p>mit {event.teacher_class}</p>
      
    </div>
  );
}
