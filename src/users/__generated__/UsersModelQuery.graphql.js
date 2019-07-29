/**
 * @flow
 * @relayHash c4377d6c6fd9f01d9192fd029d254aee
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UsersModelQueryResponse = {|
  +users: $ReadOnlyArray<{| |}>;
|};
*/


/*
query UsersModelQuery {
  users {
    ...Users_users
    id
  }
}

fragment Users_users on User {
  id
  login
  email
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersModelQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "users",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Users_users",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "UsersModelQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "UsersModelQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "users",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "User",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "login",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "email",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query UsersModelQuery {\n  users {\n    ...Users_users\n    id\n  }\n}\n\nfragment Users_users on User {\n  id\n  login\n  email\n}\n"
};

module.exports = batch;
