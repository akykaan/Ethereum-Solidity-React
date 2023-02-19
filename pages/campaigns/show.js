import React from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes"

function show(props) {
  return (
    <Layout>
      <h3>Campaign Show</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            {renderCards(props)}
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={props.address} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link route={`/campaigns/${props.address}/requests`}>
              <a>
                <Button primary>View Requests</Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}

function renderCards(props) {
  const summary = {
    balance: props.balance,
    manager: props.manager,
    minimumContribution: props.minimumContribution,
    requestsCount: props.requestsCount,
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
    {
      header: summary.minimumContribution,
      meta: "Minimum Contribution (wei)",
      description:
        "You must contribute at least this much wei to become an approver",
    },
    {
      header: summary.requestsCount,
      meta: "Number of Requests",
      description:
        "A request tries to withdraw money from the contract.Requests must be approved by approvers",
    },
    {
      header: summary.approversCount,
      meta: "Number of Approvers",
      description: "Number of people who have already donated to this campaign",
    },
    {
      header: summary.approversCount,
      meta: "Number of Approvers",
      description: "Number of people who have already donated to this campaign",
    },
    {
      header: web3.utils.fromWei(summary.balance, "ether"),
      meta: "Campaign Balance (ether)",
      description:
        "The balance is how much money this campaign has left to spend ",
    },
  ];
  return <Card.Group items={items} />;
}

show.getInitialProps = async (props) => {
  const campaign = Campaign(props.query.address);
  const summary = await campaign.methods.getSummary().call();
  return {
    address: props.query.address,
    minimumContribution: summary[0],
    balance: summary[1],
    requestsCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
};

export default show;
