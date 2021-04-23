const addNewContact = arr => ({
  type: 'contacts/AddNewContact',
  payload: arr, 
});

const deleteContact = contactId => ({
    type: 'contacts/DeleteContact',
    payload: contactId, 
  });
  