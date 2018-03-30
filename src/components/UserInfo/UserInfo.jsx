import React, { Component } from 'react';
import { Follow } from 'react-twitter-widgets';

function UserInfo(props) {
  const { userTwitter } = props.config;
  const { expanded } = props;
  return (
    <Follow
      username={userTwitter}
      options={{ count: expanded ? true : 'none' }}
    />
  );
}

export default UserInfo;
