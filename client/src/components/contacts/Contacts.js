import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/ContactContext';

const Contacts = () => {

    const contactContext = useContext(ContactContext);
    
    const { contacts, filtered, getContacts, loading } = contactContext;
    
    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if(contacts.length === 0){
        return <h4>Please add a contact!</h4>
    }

    return (
        <Fragment>
            <TransitionGroup>
            {(filtered || contacts).map(contact => (
                <CSSTransition key={contact._id} classNames="item" timeout={500}>
                    <ContactItem contact={contact} />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </Fragment>
    );
};

export default Contacts