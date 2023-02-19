import React from 'react'
import { Form, Button, Message, Input } from "semantic-ui-react"
import Campaign from '../../ethereum/campaign'
import web3 from '../../ethereum/web3'
import { Link, Router } from "../../routes"
import Layout from '../../components/Layout'

export default function RequestNew({ props }) {

    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const [recipient, setRecipient] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();
        const campaign = Campaign(props.address)
        try {

            const accounts = await web3.eth.getAccounts()
            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value, "ether"),
                recipient
            ).send({ from: accounts[0] })

        } catch (error) {

        }
    }

    return (
        <Layout>
            <h3>Create a Request</h3>
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <label>Description</label>
                    <Input
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </Form.Field>

                <Form.Field>
                    <label>Value in Ether</label>
                    <Input
                        value={value}
                        onChange={(e) => { setValue(e.target.value) }} />
                </Form.Field>

                <Form.Field>
                    <label>Recipient</label>
                    <Input
                        value={recipient}
                        onChange={(e) => { setRecipient(e.target.value) }} />
                </Form.Field>

                <Button primary>
                    Create!
                </Button>
            </Form>
        </Layout>
    )
}

RequestNew.getInitialProps = async (props) => {
    const { address } = props.query;
    return { address }
}