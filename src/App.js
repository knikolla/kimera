import React, { Component } from 'react';
import ubuntu from './images/ubuntu.png'
import './App.css';
import getRequest from './auth';
import {
  Card,
  Icon,
  Image,
  Container,
  Divider,
  Grid,
  Header,
  Item,
  Sidebar,
  Segment,
  Menu,
  Loader,
  Dimmer
} from 'semantic-ui-react'

import Server from './components/Server';

class ServerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      servers: [],
      loaded_servers: false,
    }
  }

  componentDidMount() {
    var request = getRequest('GET', 'https://kaizen.massopen.cloud:8774/v2.1/servers/detail', null);

    fetch(request)
      .then(d => d.json())
      .then(d => {
        this.setState({servers: d.servers});
        this.setState({loaded_servers: true});
      })
}

  render() {
    var servers = this.state.servers.map(function(s) {
      return <Server key={s.id} name={s.name} data={s} />;
    });

    if (!this.state.loaded_servers) {
      return (
        <Segment basic>
          <Dimmer active inverted>
          <Loader active>Loading Servers</Loader>
          </Dimmer>
          <Header as='h1'>Servers</Header>
        </Segment>
    )};
    return (
      <Segment basic>
        <Header as='h1'>Servers</Header>
        <Item.Group>
        {servers}
        </Item.Group>
      </Segment>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={true} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
                <ServerList />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>
    );
  }
}

export default App;
