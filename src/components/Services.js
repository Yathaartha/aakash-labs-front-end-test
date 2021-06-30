import React, { Component } from "react";

import Zabo from "zabo-react-component";

class Example extends Component {
  render() {
    return (
      <Zabo
        clientId="B1ClJW6BrLHObHyylIXODixpkeE488ususaUnuGxrhSGWne5tvHdFVYui1QtdWnB"
        env="sandbox"
        onInit={(team) => console.log("Team", team)}
        onError={(err) => console.log("Error", err)}
        onConnect={(account, zaboInstance) => {
          console.log("Account", account);

          zaboInstance.currencies
            .getList()
            .then((resp) => console.log("Currencies List", resp));
        }}
      />
    );
  }
}

export default Example;
