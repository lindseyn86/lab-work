// Remember in React 18+ we don't need to import React anymore!

let date = new Date()

let singleUser = {
  name: 'John',
  time: date.toDateString(),
}

export default function Section() {
    return (
      <section className="welcomeSection">
        <h1>Welcome, {singleUser.name}</h1>
        <p>Todays date is: {singleUser.time}</p>
      </section>
    )
  }
