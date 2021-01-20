import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/contacts-operations';
import propTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactsList() {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  // const onDeleteBtn = id => dispatch(deleteContacts(id));

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filterContacts = filteredContacts(contacts, filter);

  return (
    <>
      <ul>
        {filterContacts.map(({ id, name, phone }) => (
          <li key={id}>
            <p className={s.nameText}>
              {name}: <span>{phone}</span>
            </p>
            <button type="button" onClick={() => dispatch(deleteContacts(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  onDeleteBtn: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      phone: propTypes.string,
    }),
  ),
};
