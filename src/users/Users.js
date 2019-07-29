// @flow

import React from 'react';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import type { Users_users } from './__generated__/Users_users.graphql';

type Props = {
  users: Users_users,
};

class Users extends React.Component<Props> {
  refetch: () => void;

  constructor(props: Props) {
    super(props);

    this.refetch = this.refetch.bind(this);
  }

  refetch(): void {
    this.props.relay.refetch();
  }

  render(): ?React$Element<any> {
    return (
      <section>
        {this.props.users.map(user => 
          <p>
            <span>ID: {user.id}</span>
            <br />
            <span>Login: {user.login}</span>
            <br />
            <span>Email: {user.email}</span>
          </p>
        )}
      </section>
    );
  }
}

export default createRefetchContainer(
  Users,
  {
    users: graphql`
    fragment Users_users on User @relay(plural: true) {
      id,
      login,
      email,
    }
  `,
  },
);
