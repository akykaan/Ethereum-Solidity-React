import React, { useState, useEffect } from "react";
import { Button, Form, Input, Label, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

export default function CampaignsNew() {
  const [minimumContribution, setminimumContribution] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage();
  }, [minimumContribution]); // çokta mantıklı değil gibi ama dursun

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(minimumContribution).send({
        from: accounts[0],
      });
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <Layout>
      <h3> Create a Campaign</h3>
      <Form onSubmit={onSubmit} error={!!message}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimumContribution}
            onChange={(e) => setminimumContribution(e.target.value)}
          />
        </Form.Field>
        <Message error header="Oops!" content={message} />
        <Button primary>Create!</Button>
      </Form>
    </Layout>
  );
}
