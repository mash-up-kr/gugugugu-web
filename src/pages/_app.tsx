import { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "~/store";

import GlobalStyle from "~/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
