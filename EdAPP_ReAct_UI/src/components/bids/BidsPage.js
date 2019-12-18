import React from "react";
import { connect } from "react-redux";
import * as BidActions from "../../redux/actions/bidActions";
import * as ItemActions from "../../redux/actions/itemActions";
import * as UserActions from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import BidList from "./BidList";
import { Redirect } from "react-router-dom";

class BidsPage extends React.Component {
  state = {
    redirectToBidPage: false
  };
  componentDidMount() {
    const { bids,items, users, actions } = this.props;

    if (bids.length === 0) {
      actions.loadbids().catch(error => {
        alert("BidsPage Loading bids failed" + error);
      });
    }
    if (items.length === 0) {
      actions.loaditems().catch(error => {
        alert("BidsPage Loading items failed " + error);
      });
    }
    if (users.length === 0) {
      actions.loadusers().catch(error => {
        alert("BidsPage Loading users failed" + error);
      });
    }
  }

  render() {
    console.log(this.props.bids);
    return (
      <>
        {this.state.redirectToBidPage && <Redirect to="/bid" />}
        <div className="row">
          <div className="col">
            <button
                style={{ marginBottom: 20 }}
                className="btn btn-primary add-course"
                onClick={() => this.setState({ redirectToBidPage: true })}
              >
                Add a Bid
            </button>
          </div>
          <div className="col-md-auto"></div>
          <div className="col col-lg-2">
            <h2>Bids</h2>
          </div>
        </div>
        
        <BidList bids={this.props.bids} />
      </>
    );
  }
}

BidsPage.propTypes = {
  bids: PropTypes.array.isRequired,
  items: PropTypes.array,
  users: PropTypes.array,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    bids : state.bids,
    items : state.items,
    users : state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadbids: bindActionCreators(BidActions.loadbids, dispatch),
      loaditems: bindActionCreators(ItemActions.loaditems, dispatch),
      loadusers: bindActionCreators(UserActions.loadusers, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BidsPage);
