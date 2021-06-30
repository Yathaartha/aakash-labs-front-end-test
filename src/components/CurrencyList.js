import React, { Component, Fragment } from "react";
import Zabo from "zabo-sdk-js";
import CurrencySingle from "./CurrencySingle";

class CurrencyList extends Component {
  state = { currencies: null, exchangeRates: null, signedIn: false, error: "" };

  componentDidMount = async () => {
    let currencyList, rate;
    const zabo = await Zabo.init({
      clientId:
        "B1ClJW6BrLHObHyylIXODixpkeE488ususaUnuGxrhSGWne5tvHdFVYui1QtdWnB",
      env: "sandbox",
    });

    zabo
      .connect()
      .onConnection(async (account) => {
        this.setState({ signedIn: true });
        try {
          currencyList = await zabo.currencies.getList();
        } catch (error) {
          this.setState({ error: error });
        }
        try {
          rate = await zabo.currencies.getExchangeRates();
        } catch (error) {
          this.setState({ error: error });
        }
        this.setState({
          currencies: currencyList,
          exchangeRates: rate,
        });
      })
      .onError((error) => {
        console.error("account connection error:", error.message);
        this.setState({ error: error.message, signedIn: false });
      });
  };

  loadingMessage = () => {
    if (this.state.signedIn === false) {
      return <Fragment>Waiting For Sign In</Fragment>;
    } else {
      return <Fragment>Loading</Fragment>;
    }
  };

  renderCurrency = () => {
    if (this.state.currencies) {
      return (
        <CurrencySingle
          currencies={this.state.currencies}
          exchangeRates={this.state.exchangeRates}
        />
      );
    } else if (this.state.error === "") {
      return (
        <div class="ui segment" style={{ height: "500px", margin: "0" }}>
          <div class="ui active inverted dimmer">
            <div class="ui text loader">{this.loadingMessage()}</div>
          </div>
          <p></p>
        </div>
      );
    } else {
      return (
        <div
          class="ui segment"
          style={{
            height: "500px",
            margin: "0",
            border: "1px solid #333",
            borderTop: "none",
            borderRadius: "0",
          }}>
          <div class="ui active inverted dimmer">
            <div class="ui text" style={{ color: "red", fontSize: "1.3rem" }}>
              {this.state.error}
            </div>
          </div>
          <p>
            <i className="exclamation triangle"></i>
          </p>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="content">
          <ul className="list-header">
            <li>S.N</li>
            <li>Ticker</li>
            <li>Name</li>
            <li>Type</li>
            <li>Logo</li>
            <li>ExchangeRate</li>
          </ul>
          {this.renderCurrency()}
        </div>
      </div>
    );
  }
}

export default CurrencyList;
