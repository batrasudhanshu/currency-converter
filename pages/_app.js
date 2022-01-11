import "../styles/globals.css";
import { Layout } from "../components/layout";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
function getLibrary(provider) {
  return new Web3(provider);
}
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Store token={pageProps.token}> */}
      <Layout>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Component {...pageProps} />
        </Web3ReactProvider>
      </Layout>
    </>
  );
}

export default MyApp;
