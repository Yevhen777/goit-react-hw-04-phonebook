import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';
export const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <li className={style.addContact} key={nanoid()}>
            {contact.name}: {contact.number}
            <button
              className={style.btn}
              onClick={() => deleteContact(contact.id)}
              type="button"
            >
              Delete2
            </button>
          </li>
        );
      })}
    </ul>
  );
};
