import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddNewContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <>
        <form className={style.ContactForm} onSubmit={handleSubmit}>
          <label className={style.label}>
            Name
            <input
              className={style.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label className={style.label}>
            Number
            <input
              className={style.input}
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button className={style.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return { state };
// };

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsActions.addNewContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  onAddNewContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
