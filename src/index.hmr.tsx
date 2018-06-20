import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./containers/app";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  // TODO: Add apollo-cache-persist when this PR will be merged https://github.com/apollographql/apollo-client/pull/3561
});

const ROOT_NODE = document.getElementById("rootNode");

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </AppContainer>,
    ROOT_NODE,
  );
};

render(AppContainer);

if (module.hot) {
  module.hot.accept();
}
