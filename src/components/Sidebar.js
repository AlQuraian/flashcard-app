import React from 'react';
import ReactDOM from 'react-dom';

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
        <button onClick={this.props.showAddDeck}>New Deck</button>
        <ul>
          {this.props.decks.map((deck, i) =>
            <li key={i}>{deck.name}</li>
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

export default Sidebar;
