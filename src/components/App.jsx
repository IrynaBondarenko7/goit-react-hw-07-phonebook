import { useSelector } from 'react-redux';
import { ContactList } from './Contacts/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { StyledLayout } from './Layout/Layout.styled';
import {
  StyledPhonebookWrap,
  StyledContactsTitle,
  StyledTitle,
  StyledTitleWrap,
} from './App.styled';
import { FaBook } from 'react-icons/fa';
import { IoMdContacts } from 'react-icons/io';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <StyledLayout>
      <StyledPhonebookWrap>
        <StyledTitleWrap>
          <StyledTitle>Phonebook</StyledTitle>
          <FaBook />
        </StyledTitleWrap>

        <ContactForm />
        <StyledTitleWrap>
          <StyledContactsTitle>Contacts</StyledContactsTitle>
          <IoMdContacts />
        </StyledTitleWrap>

        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </StyledPhonebookWrap>
    </StyledLayout>
  );
};
