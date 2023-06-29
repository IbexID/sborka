import type { AppProps } from "next/app";
import "../public/fonts/fonts.scss";
import "shared/styles/_normalize.scss";
import { Layout } from "app/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
