/**
 * @flow
 * @relayHash 419e19345a548a4da3e1513f4d5fcca4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GetAuthorsQueryVariables = {||};
export type GetAuthorsQueryResponse = {|
  +authors: $ReadOnlyArray<{|
    +id: ?string,
    +name: ?string,
    +alias: $ReadOnlyArray<string>,
    +thumbnail: ?string,
    +texts: $ReadOnlyArray<{|
      +id: string,
      +title: ?string,
    |}>,
  |}>
|};
export type GetAuthorsQuery = {|
  variables: GetAuthorsQueryVariables,
  response: GetAuthorsQueryResponse,
|};
*/


/*
query GetAuthorsQuery {
  authors {
    id
    name
    alias
    thumbnail
    texts {
      id
      title
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "authors",
    "storageKey": null,
    "args": null,
    "concreteType": "Author",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "alias",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "thumbnail",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "texts",
        "storageKey": null,
        "args": null,
        "concreteType": "Text",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "GetAuthorsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "GetAuthorsQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "GetAuthorsQuery",
    "id": null,
    "text": "query GetAuthorsQuery {\n  authors {\n    id\n    name\n    alias\n    thumbnail\n    texts {\n      id\n      title\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7136d122abdf7105cff1f6c25d9a07b4';
module.exports = node;