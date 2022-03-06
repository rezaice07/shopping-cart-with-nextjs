import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../redux/store';
import React from 'react';
import withRedux from "next-redux-wrapper";

function MyApp({ Component, pageProps }) {
  const { store } = pageProps;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  )
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //Anything returned here can be accessed by the client
  return { pageProps: pageProps };
}


//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);


