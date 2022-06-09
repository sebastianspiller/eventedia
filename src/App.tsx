import React from 'react';
import './App.css';
import EventCard from './components/EventCard';


function App() {
  const eventarray = [{ort: "Düsseldorf"}, {ort: "Hamburg"}, {ort: "Berlin"}, {ort: "Köln"}]
  console.log(eventarray)

  const oneevent = eventarray.map((element)=>{
    return <div><EventCard id={0} ort={element.ort} /></div>
  })

  return (
    <div className="card">
      <div className='card-header'>
        <div>Header</div>
      </div>
      <div className='card-body'>
      {oneevent}
        {/* <EventCard id={0} ort="Düsseldorf" />
        <EventCard id={0} ort="Köln"/>
        <EventCard id={0} ort="München"/>
        <EventCard id={0} ort="Barcelona"/>
        <EventCard id={0} ort="Barcelona"/> */}
      </div>
      <div className='card-footer'>
          <div>Footer</div>
      </div>
    </div>
  );
}

export default App;
