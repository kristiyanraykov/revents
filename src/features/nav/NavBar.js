import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

function NavBar({ setFormOpen }) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut() {
      setAuthenticated(false)
      history.push('/')
  }

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: 15 }}
          ></img>
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' header name='events' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent' header>
            <Button positive inverted content='Create event' />
          </Menu.Item>
        )}
      </Container>
      {authenticated ? (
        <SignedInMenu signOut={handleSignOut} />
      ) : (
        <SignedOutMenu setAuthenticated={setAuthenticated} />
      )}
    </Menu>
  );
}

export default NavBar;
