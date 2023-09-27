import {ApolloProvider} from '@apollo/client';
import React from 'react';
import CountriesScreen from './src/screens/CountriesScreen';
import client from './src/graphql/client';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <CountriesScreen />
    </ApolloProvider>
  );
}

export default App;
