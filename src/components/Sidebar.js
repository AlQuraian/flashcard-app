import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addDeck, showAddDeck, hideAddDeck } from '../actions';


// const mapStatetToProps = state => {
//   return {
//     decks: state.decks,
//     addingDeck: state.addingDeck
//   };
// };

// same as the above, thanks to destructoring and short property naming
const mapStatetToProps = ({ decks, addingDeck }) => ({ decks, addingDeck });

const mapDispatchToProps = dispatch => ({
  addDeck: name => dispatch(addDeck(name)),
  showAddDeck: () => dispatch(showAddDeck()),
  hideAddDeck: () => dispatch(hideAddDeck())
});

const Sidebar = React.createClass({
  componentDidUpdate() {
    var el = ReactDOM.findDOMNode(this.refs.add);
    if (el) {
      el.focus();
    }
  },
  render() {
    return (
      <div className="sidebar">
        <h2>All Decks</h2>
        <ul>
          {this.props.decks.map((deck, i) =>
            <li key={i}>
              <Link to={`/deck/${deck.id}`}>{deck.name}</Link>
            </li>
          )}
        </ul>
        {this.props.addingDeck && <input ref="add" onKeyPress={this.createDeck} />}
      </div>);
  },
  createDeck(evt) {
    if (evt.which !== 13) return;
    var name = ReactDOM.findDOMNode(this.refs.add).value;
    this.props.addDeck(name);
    this.props.hideAddDeck();
  }
});

export default connect(mapStatetToProps, mapDispatchToProps)(Sidebar);
