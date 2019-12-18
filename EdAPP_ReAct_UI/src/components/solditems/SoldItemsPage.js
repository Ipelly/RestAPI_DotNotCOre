import React from "react";
import { connect } from "react-redux";
import * as SoldItemActions from "../../redux/actions/soldItemActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SoldItemList from "./SoldItemList";

class SoldItemsPage extends React.Component {
  componentDidMount() {
    const { solditems, actions } = this.props;

    if (solditems.length === 0) {
      actions.loadsolditems().catch(error => {
        alert("Loading loadsolditem failed" + error);
      });
    }
  }

  render() {
    console.log(this.props.solditems);
    return (
      <>
        <div className="row">
          <div className="col">
            <button
                style={{ marginBottom: 20 }}
                className="btn btn-primary add-course"
                onClick={() => this.setState({ redirectToAddCoursePage: true })}
              >
                Process Pending Bid
            </button>
          </div>
          <div className="col-md-auto"></div>
          <div className="col col-lg-3">
            <h2>Sold Items</h2>
          </div>
        </div>
        
        <SoldItemList solditems={this.props.solditems} />
      </>
    );
  }
}

SoldItemsPage.propTypes = {
  solditems: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    solditems : state.solditems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadsolditems: bindActionCreators(SoldItemActions.loadsolditems, dispatch),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoldItemsPage);
