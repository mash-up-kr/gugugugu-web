import { AppProps } from "next/app";

import GlobalStyle from "~/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
