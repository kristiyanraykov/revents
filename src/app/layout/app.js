import React, {useState} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboards from '../../features/events/eventDashboard/EventDashboards';
import NavBar from '../../features/nav/NavBar';

function App() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboards formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </>
  );
}

export default App;
