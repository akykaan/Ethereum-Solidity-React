import React from "react";
import Layout from "../../../components/Layout";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

export default function index({ props }) {
  const { Header, Row, HeaderCell, Body } = Table;
  return (
    <Layout>
      <h3>Requests</h3>
      <Link route={`/campaigns/${props.address}/requests/new`}>
        <a>
          <Button primary>Add Request</Button>
        </a>
      </Link>

      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>
          <Row>
            <Table.Cell>{renderRows(props)}</Table.Cell>
          </Row>
        </Body>
      </Table>
    </Layout>
  );
}

index.getInitialProps = async (props) => {
  const { address } = props.query;
  const campaign = Campaign(address);
  const requestCount = await campaign.methods.getRequestsCount().call();

  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );

  return { props: { address, requests, requestCount } };
};

function renderRows(props) {
  return props.requests.map((request, index) => {
    return <RequestRow key={index} request={request} address={props.address} />;
  });
}
