import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { listenToEventFromFirestore } from '../../../app/firestore/firestoreService'
import useFirestoreDoc from '../../../app/hooks/useFirestoreDoc'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { Redirect } from 'react-router'
import { listenToSelectedEvent } from '../eventActions'

function EventDetailedPage({match}) {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.auth)
    const event = useSelector(state => state.event.selectedEvent)
    const isHost = event?.hostUid === currentUser?.uid;
    const isGoing = event?.attendees?.some(a => a.id === currentUser?.uid)
    const {loading, error} = useSelector(state=> state.async)
    useFirestoreDoc({
        query: () => listenToEventFromFirestore(match.params.id),
        data: event => dispatch(listenToSelectedEvent(event)),
        deps: [match.params.id, dispatch]
    })
    if (loading || (!event && !error)) return <LoadingComponent content='Loading event...'/>
    if (error) return <Redirect to='/error'/>
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader event={event} isGoing={isGoing} isHost={isHost} />
                <EventDetailedInfo event={event} />
                <EventDetailedChat eventId={event.id} />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={event?.attendees} hostUid={event.hostUid} />
            </Grid.Column>
        </Grid>
    )
}

export default EventDetailedPage
