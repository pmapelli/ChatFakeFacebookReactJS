import React, { Component } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Header } from './style';
import facebook from '../assets/facebook_logo.png';

export default class ChatHeader extends Component {
  render() {
    return (
      <Header>
        <img src={facebook} />
        <div>
          <span>Meu perfil</span>
          <FaUserCircle />
        </div>
      </Header>
    );
  }
}
