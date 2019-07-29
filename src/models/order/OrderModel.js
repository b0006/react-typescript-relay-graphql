// @flow

import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from '../../app/Environment';

import Order from './Order';

type Props = {
  id: Number
};

class OrderModel extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): ?React$Element<any> {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query OrderModelQuery {
            orders {
              edges {
                node {
                  ...Order_orders
                }
              }
            }
          }
        `}
        render={(data) => {
          console.log(data)
          if (data.error) return <div>Failure!</div>;
          if (!data.props) return <div>Loading...</div>;
          return <p>orders</p>;
        }}
      />
    );
  }
}

export default OrderModel;
