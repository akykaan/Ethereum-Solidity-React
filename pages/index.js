import React, { Component, useEffect, useState } from "react";
import factory from "../ethereum/factory";

function index({ props }) {
  console.log(props);
  return <div>Wallet: {props}</div>;
}

index.getInitialProps = async () => {
  const campaignsWallet = await factory.methods.getDeployedCampaigns().call();
  return { props: campaignsWallet };
};

export default index;
