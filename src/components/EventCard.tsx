import React from 'react'
import './EventCard.css'

function EventCard({id}: {id: string}) {
  return (
    <div className='Card'>

        <div>EventCard</div>
        <img className="Bild" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IIHS_crash_test_dummy_in_Hyundai_Tucson.jpg/220px-IIHS_crash_test_dummy_in_Hyundai_Tucson.jpg"/>
    </div>
  )
}

export default EventCard