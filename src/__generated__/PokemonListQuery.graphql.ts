/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PokemonListQueryVariables = {};
export type PokemonListQueryResponse = {
    readonly pokemons: ReadonlyArray<{
        readonly id: string;
        readonly number: string | null;
        readonly name: string | null;
        readonly image: string | null;
        readonly classification: string | null;
        readonly weight: {
            readonly minimum: string | null;
            readonly maximum: string | null;
        } | null;
        readonly height: {
            readonly minimum: string | null;
            readonly maximum: string | null;
        } | null;
    } | null> | null;
};
export type PokemonListQuery = {
    readonly response: PokemonListQueryResponse;
    readonly variables: PokemonListQueryVariables;
};



/*
query PokemonListQuery {
  pokemons(first: 151) {
    id
    number
    name
    image
    classification
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "minimum",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "maximum",
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 151
      }
    ],
    "concreteType": "Pokemon",
    "kind": "LinkedField",
    "name": "pokemons",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "number",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "classification",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PokemonDimension",
        "kind": "LinkedField",
        "name": "weight",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PokemonDimension",
        "kind": "LinkedField",
        "name": "height",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": "pokemons(first:151)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PokemonListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d5ee25edced4250f7485082629536eaa",
    "id": null,
    "metadata": {},
    "name": "PokemonListQuery",
    "operationKind": "query",
    "text": "query PokemonListQuery {\n  pokemons(first: 151) {\n    id\n    number\n    name\n    image\n    classification\n    weight {\n      minimum\n      maximum\n    }\n    height {\n      minimum\n      maximum\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0769f6eba268978888c5c1e7c2c625d1';
export default node;
