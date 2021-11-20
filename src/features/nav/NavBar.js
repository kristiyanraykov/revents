import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

function NavBar({setFormOpen}) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight: 15}}></img>
                    Re-vents
                </Menu.Item>
                <Menu.Item name='events'/>
                <Menu.Item>
                    <Button onClick={() => setFormOpen(true)} positive inverted content='Create event'/>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login'/>
                    <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
