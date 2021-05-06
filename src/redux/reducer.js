import { combineReducers } from 'redux';
// import { addNewContact, deleteContact, filterContact } from './actions';
import { ADD, DELETE, FILTER } from './types';

// const initState = {
//   contacts: JSON.parse(localStorage.getItem('contacts')) || [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

const items = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

const filter = (state = '', action) => {
  switch (action.type) {
    case FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ items, filter });
