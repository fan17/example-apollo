import React from "react";
import { render } from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ExchangeRatesIndex } from './ExchangeRates/ExchangeRatesIndex.js';

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRatesIndex />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));

registerServiceWorker();
