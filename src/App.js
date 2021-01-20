import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/contacts-operations';
import Layout from './components/Layout/Layout';
import Section from './components/Layout/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());

    // localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [dispatch]);

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      {contacts.length ? (
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      ) : null}
    </Layout>
  );
}

// const mapStateToProps = state => ({
//   contacts: state.contacts,
// });

// export default connect(mapStateToProps)(App);
