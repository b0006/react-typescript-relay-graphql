// @flow

import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from '../app/Environment';

import Users from './Users';

type Props = {
  id: Number
};

class UsersModel extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): ?React$Element<any> {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query UsersModelQuery {
            users {
              ...Users_users
            }
          }
        `}
        render={(data) => {
          if (data.error) return <div>Failure!</div>;
          if (!data.props) return <div>Loading...</div>;
          return <Users
            users={data.props.users}
          />;
        }}
      />
    );
  }
}

export default UsersModel;
