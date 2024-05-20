import React, { useState } from "react";

// interface Person {
//   firstname: string;
//   lastname: string;
//   email: string;
//   age: number;
//   country: string;
// }
const people = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    age: 32,
    country: "USA",
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    age: 27,
    country: "Canada",
  },
  {
    firstname: "Michael",
    lastname: "Johnson",
    email: "michael.johnson@example.com",
    age: 45,
    country: "UK",
  },
  {
    firstname: "Emily",
    lastname: "Williams",
    email: "emily.williams@example.com",
    age: 19,
    country: "Canada",
  },
  {
    firstname: "David",
    lastname: "Brown",
    email: "david.brown@example.com",
    age: 38,
    country: "UK",
  },
];

//   const Experiment: React.FC = () => {
function Experiment() {
  // const [lastnameFilters, setLastnameFilters] = useState<string[]>(['Doe', 'Smith']);
  // const [countryFilters, setCountryFilters] = useState<string[]>(['USA', 'Canada']);

  const [lastnameFilters, setLastnameFilters] = useState(["Doe", "Williams"]);
  const [countryFilters, setCountryFilters] = useState(["USA", "Canada"]);

//   const filteredPeople = people.filter(function (person) {
//     return (
//       lastnameFilters.includes(person.lastname) &&
//       countryFilters.includes(person.country)
//     );
//   });

// as arrow function
    const filteredPeople = people.filter(
      (person) =>
        lastnameFilters.includes(person.lastname) && countryFilters.includes(person.country)
        // lastnameFilters.includes(person.lastname) || countryFilters.includes(person.country)
    );

  return (
    <div>
      <h1>Filtered People</h1>

      <p>Filter Lastname:</p>
      {lastnameFilters.map((lastname, index) => {
        return <p key={index}>{lastname}</p>;
      })}

      <p>Filter Country:</p>
      {countryFilters.map((country, index) => {
        return <p key={index}>{country}</p>;
      })}

      <ul>
        {filteredPeople.map((person, index) => (
          <li key={index}>
            {person.firstname} {person.lastname} - {person.email} - age:{" "}
            {person.age} ( in {person.country})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experiment;
