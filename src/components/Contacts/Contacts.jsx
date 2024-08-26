import { ContactsItem } from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types';
import style from './Contacts.module.css';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <ContactsItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  Contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};