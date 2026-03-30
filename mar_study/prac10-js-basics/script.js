const events = [
  {
    title: "Boardgame Meetup - 1st round",
    date: "2024-07-01",
    location: "Cafe A",
    attendees: ["Alice", "Bob", "Charlie"],
  },
  {
    title: "Boardgame Meetup - 2nd round",
    date: "2024-07-15",
    location: "Cafe B",
    attendees: ["Dave", "Eve", "Frank"],
  },
];

const container = document.getElementById("events");

events.forEach((event) => {
  const card = document.createElement("div");
  card.classList.add("event-card");

  const title = document.createElement("h2");
  title.textContent = event.title;

  const date = document.createElement("p");
  date.textContent = `Date: ${event.date}`;

  const location = document.createElement("p");
  location.textContent = `Location: ${event.location}`;

  const attendees = document.createElement("p");
  attendees.textContent = `Attendees: ${event.attendees.length} people`;

  card.appendChild(title);
  card.appendChild(date);
  card.appendChild(location);
  card.appendChild(attendees);

  container.appendChild(card);
});
