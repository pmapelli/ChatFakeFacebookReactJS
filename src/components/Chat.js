import React, { Component } from 'react';
import ChatList from './ChatList';
import ChatHeader from './ChatHeader';

export default class Chat extends Component {
  render() {
    return (
      <>
        <ChatHeader />
        <ChatList />
      </>
    );
  }
}
