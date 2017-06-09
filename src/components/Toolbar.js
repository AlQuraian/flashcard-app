import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { showAddDeck } from '../actions';

const mapDispatchToProps = dispatch => ({
  showAddDeck: () => dispatch(showAddDeck())
});

const Toolbar = ({ deckId, showAddDeck }) => {
  let deckTools = deckId ? (
    <div>
      <Link className='btn' to={`/deck/${deckId}/new`}> + New Card </Link>
      <Link className='btn' to={`/deck/${deckId}/study`}> Study Deck </Link>
    </div>
  ) : null;

  return (
    <div className='toolbar'>
      <div>
        <button onClick={showAddDeck}>+ New Deck</button>
      </div>
      {deckTools}
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Toolbar);
