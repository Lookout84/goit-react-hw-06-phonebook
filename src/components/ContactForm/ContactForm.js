import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';
import { connect } from 'react-redux';
import actionsExport from '../../redux/actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;
    if (contacts.some(elm => elm.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    }
    if (
      contacts.some(elm => elm.number.toLowerCase() === number.toLowerCase())
    ) {
      return alert(`${number} is already in contacts`);
    }
    onSubmit(this.state);
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
              onChange={handleChange}
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

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(actionsExport.addNewContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  // name: PropTypes.string.isRequired,
  // number: PropTypes.string.isRequired,
};
