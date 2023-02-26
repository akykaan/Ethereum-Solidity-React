import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const abi = JSON.parse(CampaignFactory.interface);

const instance = new web3.eth.Contract(
  abi,
  "0x21cA055c8768189DC163521cD20e6685B4DE9b8b"
);

export default instance;
