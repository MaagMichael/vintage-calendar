
export function Card({
    event
}) {
  return <div className="card" onClick={() => alert(`Mehr Info zu ${event.title}: ${event.description}`)}>
            <p>
              <strong>am {event.date}</strong>
            </p>
            <div>{event.place}</div>
            <div>
              {event.time_start} - {event.time_end}
            </div>
            <h3>{event.title}</h3>
            <p>{event.subtitle}</p>
            {
      /* <p >{event.description}</p> */
    }
            <div>{event.level}</div>
          </div>;
}
  