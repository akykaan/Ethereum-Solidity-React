import React from "react";
import { Card } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";

function show(props) {
  return <Layout>{renderCards(props)}</Layout>;
}

function renderCards(props) {
  const summary = {
    balance: props.balance,
    manager:props.manager,
    minimumContribution: props.minimumContribution,
    requestsCount:props.requestsCount,
    approversCount: props.approversCount,
  };

  const items = [
    {
      header: summary.manager,
      meta: "Address of Manager",
      description:
        "The manager created this campaign and can create requests to withdraw money",
      style: { overflowWrap: "break-word" },
    },
  ];
  return <Card.Group items={items} />;
}

show.getInitialProps = async (props) => {
  const campaign = Campaign(props.query.address);
  const summary = await campaign.methods.getSummary().call();
  return {
    minimumContribution: summary[0],
    balance: summary[1],
    requestsCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
};

export default show;
