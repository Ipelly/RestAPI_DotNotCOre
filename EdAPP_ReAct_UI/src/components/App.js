import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import auctionsPage from "./auctions/AuctionsPage";
import bidPage from "./bids/BidsPage"; 
import ManageBidPage from "./bids/ManageBidPage"; 
import soldItemsPage from "./solditems/SoldItemsPage"; 

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/auctions" component={auctionsPage} />
        <Route path="/bids" component={bidPage} />
        <Route path="/bid" component={ManageBidPage} />
        <Route path="/solditems" component={soldItemsPage} />

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
