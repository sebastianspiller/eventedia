import React from "react";
import "./App.css";
import EventCard from "./components/EventCard";
import EventCardJ from "./components/EventCardJ";
function App() {
  return (
    <div>
      <div className="container">
        <EventCardJ id="1" />
        <EventCardJ id="2" />
      </div>
    </div>
  );
}

export default App;
