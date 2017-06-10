import { connect } from 'react-redux';

import CardModal from './CardModal';
import { addCard } from '../actions';

const mapStateToProps = (props, { params: { deckId } }) => ({
  card: { deckId }
});

const mapDispatchToProps = dispatch => ({
  onSave: card => dispatch(addCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
