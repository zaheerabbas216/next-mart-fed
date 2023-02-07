import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
