import React, { Component, useEffect, useState } from "react";
import factory from "../ethereum/factory";
import { Card, Container, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";

function index({ props }) {
  return (
    <Layout>
      <h3>Open Campaigns</h3>

      <Link route="/campaigns/new">
        <a>
          <Button
            floated="right"
            icon="add circle"
            content="Create Campaign"
            primary
          />
        </a>
      </Link>

      {renderCampaigns(props)}
    </Layout>
  );
}

function renderCampaigns(props) {
  const items = props.map((address) => {
    return {
      header: address,
      description: (
        <Link route={`/campaigns/${address}`}>
          <a>View Campaign</a>
        </Link>
      ),
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
