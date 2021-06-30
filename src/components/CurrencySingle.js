import React, { Component, Fragment } from "react";

class CurrencySingle extends Component {
  getExchangeRate = (ticker) => {
    let rateFound = "not found";
    this.props.exchangeRates.data.forEach((rate) => {
      if (rate.from === ticker) {
        rateFound = rate.rate;
      }
    });
    return <div>{rateFound}</div>;
  };

  renderList = (currency, index) => {
    return (
      <ul>
        <li>{index + 1}</li>
        <li>{currency.ticker}</li>
        <li>{currency.name}</li>
        <li>{currency.type}</li>
        <li>
          <img src={currency.logo} alt={currency.name} />
        </li>
        <li>{this.getExchangeRate(currency.ticker)}</li>
      </ul>
    );
  };

  render() {
    console.log(this.props);
    return (
      <Fragment>
        {this.props.currencies.data.map((currency, index) => {
          return this.renderList(currency, index);
        })}
      </Fragment>
    );
  }
}

export default CurrencySingle;
