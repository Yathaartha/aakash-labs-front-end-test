import React, { Component } from "react";
import CurrencyList from "./CurrencyList";
import Footer from "./Footer";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CurrencyList />
        <Footer />
      </div>
    );
  }
}

export default App;
