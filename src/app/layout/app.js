import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboards from '../../features/events/eventDashboard/EventDashboards';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import Sandbox from '../../features/sandbox/sandbox';
import ModalManager from '../common/modals/ModalManager';
import { ToastContainer } from 'react-toastify';
import ErrorComponent from '../common/errors/ErrorComponent';
import AccountPage from '../../features/auth/AccountPage';
import { useSelector } from 'react-redux';
import LoadingComponent from './LoadingComponent';
import ProfilePage from '../../features/profiles/profilePage/ProfilePage';
import PrivateRoute from './PrivateRoute';

function App() {
  const { key } = useLocation();
  const { initialized } = useSelector((state) => state.async);
  if (!initialized) return <LoadingComponent content='Loading app...' />;
  return (
    <>
      <ModalManager />
      <ToastContainer theme='colored' position='bottom-right' hideProgressBar />
      <Route exact path='/' component={HomePage} />
      <Route
        path='/(.+)'
        render={() => (
          <>
            <Container className='main'>
              <NavBar />
              <Route exact path='/events' component={EventDashboards} />
              <Route exact path='/sandbox' component={Sandbox} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <PrivateRoute
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
                key={key}
              />
              <PrivateRoute path='/account' component={AccountPage} />
              <PrivateRoute path='/profile/:id' component={ProfilePage} />
              <Route path='/error' component={ErrorComponent} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
