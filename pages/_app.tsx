import type { AppProps } from "next/app";
import "../public/fonts/fonts.scss";
import "shared/styles/_normalize.scss";
import { Layout } from "app/Layout";
import store, { persistor } from "app/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
