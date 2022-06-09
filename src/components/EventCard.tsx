import React from 'react'
import './EventCard.css'

function EventCard({id, ort}: {id: number, ort:string}) {
  return (
    <div className='Card'>

        <div>EventTitel</div>
        <img className="Bild" alt="Dies ist ein Dummy-Bild" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IIHS_crash_test_dummy_in_Hyundai_Tucson.jpg/220px-IIHS_crash_test_dummy_in_Hyundai_Tucson.jpg"/>
        <div className="Ort">Wo: {ort}</div>
        <div className='Zeit'>
          <div className='Beginn'>Beginn</div>
          <div className='Ende'>Ende</div>
        </div>

    </div>
  )
}

export default EventCard

// 