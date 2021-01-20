import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,

  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

export default combineReducers({
  contacts,
  filter: filterReducer,
  loading,
});
