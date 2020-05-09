import React, { useEffect } from "react";
import Layout from "../components/layout";

const NotFoundPage = () => {
  useEffect(() => {
    document.location.replace("/");
  });

  return (
    <Layout>
      <h1>NOT FOUND</h1>
      <p>Rerouting to /</p>
    </Layout>
  );
};

export default NotFoundPage;
