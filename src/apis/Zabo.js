import axios from "axios";

const ClientId =
  "B1ClJW6BrLHObHyylIXODixpkeE488ususaUnuGxrhSGWne5tvHdFVYui1QtdWnB";
const apiKey = "0ee1efc4858ff302c20ae01029f1ad2606117dd5";
const secretKey =
  "8d19e4c608f9eeaefa08b5a4665cc187b1ee1236e6358a8c030f3ccd430de0d7";

export default axios.create({
  baseURL: "https://api.zabo.com/sandbox-v1",
  params: {
    clientId: ClientId,
    env: "sandbox",
    apiKey: apiKey,
    secretKey: secretKey,
  },
});
