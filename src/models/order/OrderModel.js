// @flow

import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from '../../app/Environment';

import Order from './Order';

class OrderModel extends React.Component {
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
          if (data.error) return <div>Failure!</div>;
          if (!data.props) return <div>Loading...</div>;
          const newData = data.props.orders.edges.map(item => item.node)
          return <Order orders={newData} />;
        }}
      />
    );
  }
}

export default OrderModel;
