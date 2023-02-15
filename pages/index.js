import React, { Component, useEffect, useState } from "react";
import factory from "../ethereum/factory";
import { Card, Container, Button } from "semantic-ui-react";
import Layout from "../components/Layout";

function index({ props }) {
  return (
    <Layout>
      <link
        async
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
      />
      <h3>Open Campaigns</h3>

      <Button
        floated="right"
        icon="add circle"
        content="Create Campaign"
        primary
      />
      {renderCampaigns(props)}
    </Layout>
  );
}

function renderCampaigns(props) {
  const items = props.map((address) => {
    return {
      header: address,
      description: <a>View Campaign</a>,
      fluid: true,
    };
  });
  return <Card.Group items={items} />;
}

index.getInitialProps = async () => {
  const campaignsWallet = await factory.methods.getDeployedCampaigns().call();
  return { props: campaignsWallet };
};

export default index;
