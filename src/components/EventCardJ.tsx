import React from "react";
import "./EventCard.css";

function EventCardJ({ id }: { id: string }) {
  return (
    <div className="cardcontainer">
      <div className="cardstyling">
        <h2>Titel</h2>
        <div className="centerimage">
          <img src="https://picsum.photos/300" />
        </div>
        <p>
          Hier steht die Beschreibung - Hier steht die Beschreibung - Hier steht
          die Beschreibung
        </p>
      </div>
    </div>
  );
}

export default EventCardJ;
