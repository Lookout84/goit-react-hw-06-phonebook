import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/actions';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.filterContact(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
