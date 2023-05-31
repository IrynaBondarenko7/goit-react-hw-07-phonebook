import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  StyledContactList,
  StyledContactsItem,
  StyledDeleteBtn,
  StyledNumber,
} from './ContactList.styled';
import { MdClose } from 'react-icons/md';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <StyledContactList>
      {filtredContacts.map(contact => {
        return (
          <StyledContactsItem key={contact.id}>
            <p>
              {contact.name}
              <StyledNumber>{contact.phone}</StyledNumber>
            </p>
            <StyledDeleteBtn onClick={() => handleDelete(contact.id)}>
              <MdClose />
            </StyledDeleteBtn>
          </StyledContactsItem>
        );
      })}
    </StyledContactList>
  );
};
