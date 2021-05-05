import shortid from 'shortid';
import { ADD, DELETE, FILTER } from './types';

const addNewContact = (name, number) => ({
  type: ADD,
  payload: { contact: { id: shortid.generate(), name: name, number: number } },
});

const deleteContact = contactId => ({
  type: DELETE,
  payload: { id: contactId },
});

const filterContact = filter => ({
  type: FILTER,
  payload: filter,
});

export default { addNewContact, deleteContact, filterContact };
