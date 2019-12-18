import React from "react";
import { connect } from "react-redux";
import * as AuctionActions from "../../redux/actions/auctionActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import AuctionList from "./AuctionList";

class AuctionsPage extends React.Component {
  componentDidMount() {
    const { auctions, actions } = this.props;

    if (auctions.length === 0) {
      actions.loadauctions().catch(error => {
        alert("Loading auctions failed" + error);
      });
    }
  }

  render() {
    console.log(this.props.auctions);
    return (
      <>
        <div className="row">
          <div className="col">
            <button
                style={{ marginBottom: 20 }}
                className="btn btn-primary add-course"
                onClick={() => this.setState({ redirectToAddCoursePage: true })}
              >
                Add Auction
            </button>
          </div>
          <div className="col-md-auto"></div>
          <div className="col col-lg-2">
            <h2>Auctions</h2>
          </div>
        </div>
        
        <AuctionList auctions={this.props.auctions} />
      </>
    );
  }
}

AuctionsPage.propTypes = {
  auctions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    auctions : state.auctions.map(Auction => { 
       return {
        ...Auction,
        dayLeft : Math.ceil(Math.abs(Date(Auction.endDate) - Date(Auction.startDate))/ (1000 * 60 * 60 * 24))
       };
    })
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadauctions: bindActionCreators(AuctionActions.loadauctions, dispatch),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuctionsPage);
