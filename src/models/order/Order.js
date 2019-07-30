// @flow

import React from 'react';
import { createRefetchContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import type { Order_orders } from './__generated__/Order_orders.graphql';

type Props = {
  orders: Order_orders,
};

class Order extends React.Component<Props> {
  render(): ?React$Element<any> {
    console.log(this.props);
    return (
      <section>
        <p>orders</p>
      </section>
    );
  }
}

export default createRefetchContainer(
  Order,
  {
    orders: graphql`
    fragment Order_orders on Order @relay(plural: true) {
      id
      status
      externalUrl 
    }
  `,
  },
);
