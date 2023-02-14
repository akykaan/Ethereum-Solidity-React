import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xE6F3975733C8C44BD9899552B7aE8F8D65Db0B8A"
);

export default instance;
