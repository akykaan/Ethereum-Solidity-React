import React, { useState, useEffect } from "react";
import { Button, Form, Input ,Message} from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { useRouter } from "next/router";

export default function ContributeForm(props) {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const campaign = Campaign(props.address);
    setLoading(true)
    setErrorMessage("")
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
      setErrorMessage(error)
    }
    setLoading(false)
    value("")
  };

  return (
    <Form onSubmit={onSubmit} error={!!errorMessage}>
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
      <Message error header={"Oops!"} content={errorMessage}/>
      <Button primary loading={loading}>Contribute!</Button>
    </Form>
  );
}
