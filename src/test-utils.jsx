import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { MockedProvider } from 'react-apollo/test-utils';

const renderApollo = (node, { mocks, addTypename, defaultOptions, cache, ...options } = {}) =>
  render(
    <MockedProvider mocks={mocks} addTypename={addTypename} defaultOptions={defaultOptions} cache={cache}>
      {node}
    </MockedProvider>,
    options
  );

export * from 'react-testing-library';

export { renderApollo };