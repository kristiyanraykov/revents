import React from 'react'
import EventListItem from './EventListItem'

function EventList(props) {
    return (
        <div>
            {props.events.map(event => (
                <EventListItem event={event} key={event.id} />
            ))}
        </div>
    )
}

export default EventList
