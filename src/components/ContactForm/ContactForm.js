import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import s from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/contacts-operations';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { contacts } = useSelector(state => state);
  const dispatch = useDispatch();

  const onAddContacts = (name, phone) => dispatch(addContact(name, phone));

  const handleSubmit = e => {
    e.preventDefault();

    const isAdded = name =>
      contacts.map(contact => contact.name).includes(name);

    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      onAddContacts(name, phone);
    }

    setName('');
    setPhone('');
  };

  return (
    <>
      <form className={s.form} onSubmit={e => handleSubmit(e)}>
        <label id="name" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label id="phone" htmlFor="phone">
          Phone
        </label>
        <input
          className={s.input}
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          pattern="[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
          onChange={e => setPhone(e.target.value)}
        />
        <button type="submit" disabled={!(name && phone)}>
          add contact
        </button>
      </form>
    </>
  );
}

ContactsForm.propTypes = {
  onAddContacts: propTypes.func,
};
