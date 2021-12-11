import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

function NavBar({ setFormOpen }) {
  const { authenticated } = useSelector((state) => state.auth);

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
        <Menu.Item as={NavLink} to='/sandbox' header name='sandbox' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent' header>
            <Button positive inverted content='Create event' />
          </Menu.Item>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
}

export default NavBar;
