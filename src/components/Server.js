import React, { Component } from 'react';
import {
    Card,
    Icon,
    Image,
    Container,
    Divider,
    Grid,
    Header,
    Item,
    Modal,
    List,
    Button,
} from 'semantic-ui-react'

import getRequest from '../auth'

import ubuntu from '../images/ubuntu.png'

class Server extends Component {
    render(props) {
        return (
        <Item>
        <Item.Content>
            <ServerInfo name={this.props.name} data={this.props.data} />
        </Item.Content>
        </Item>
        )
    }
}

class ServerInfo extends Component {
    render(props) {
        return (
            <Modal trigger={<Item.Header as='a'>{this.props.name}</Item.Header>}>
            <Modal.Header>{this.props.name}</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='medium' src={ubuntu} />
            <Modal.Description>
            <List>
                <List.Item>ID: {this.props.data.id}</List.Item>
                <List.Item>Status: {this.props.data.status}</List.Item>
            </List>
            </Modal.Description>
            </Modal.Content>
        </Modal>
        )
    }
}

export default Server;