import React from "react";
import { render } from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { ExchangeRatesIndex } from './ExchangeRates/ExchangeRatesIndex.js';
import Dashboard from './Dashboard.js';

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const App = () => (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <div>
                <h2>My first Apollo app 🚀</h2>
                <nav>
                    <Link to="/">Dashboard</Link>
                    &nbsp;|&nbsp;
                    <Link to="/exchange-rates">ExchangeRate</Link>
                </nav>
                <div>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/exchange-rates" component={ExchangeRatesIndex}/>  
                </div>
            </div>
        </BrowserRouter>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));

registerServiceWorker();
