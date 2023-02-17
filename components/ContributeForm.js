import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { useRouter } from "next/router";

export default function ContributeForm(props) {
  const [value, setValue] = useState("");
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const campaign = Campaign(props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, "ether"),
      });
      // await router.replace(`/campaigns/${props.address}`, undefined, {
      //   shallow: true,
      // });

      // ERROR!!!!!!!
      await router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          label="ether"
          labelPosition="right"
        />
      </Form.Field>
      <Button primary>Contribute!</Button>
    </Form>
  );
}
