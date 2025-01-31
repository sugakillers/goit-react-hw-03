import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"
const ContactList = ({ contactsList, deleteContact }) => {
return (
    <>
    <div className={css.contactList}>
    {contactsList.map(contact => {
        return  (
            <li className={css.item} key={contact.id}>
            <Contact contact={contact} deleteContact={deleteContact} />
            </li>
        );
    })}
    </div></>
);
}

export default ContactList