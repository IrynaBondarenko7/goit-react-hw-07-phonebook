import { Formik, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { FcPlus } from 'react-icons/fc';

import {
  ErrorMessage,
  Form,
  StyledAddContactBtn,
  StyledBtnWrap,
  StyledLabelWrap,
  StyledNumberTextWrap,
  StyledTextWrap,
} from './ContactForm.styled';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name'
    )
    .required(),
  phone: Yup.string().required(),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={(values, { resetForm }) => {
        const contactsArray = contacts.filter(
          contact => contact.name === values.name
        );
        if (contactsArray.length !== 0) {
          alert(`${values.name} is alredy in contacts`);
          return;
        }
        dispatch(addContact(values));
        resetForm({ values: { name: '', phone: '' } });
      }}
    >
      <Form>
        <StyledLabelWrap>
          <label htmlFor="">
            <StyledTextWrap>Name</StyledTextWrap>

            <Field
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <ErrorMessage name="name" component="div" />
          <label>
            <StyledNumberTextWrap>Number</StyledNumberTextWrap>

            <Field
              type="tel"
              name="phone"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <ErrorMessage name="number" component="div" />
        </StyledLabelWrap>

        <StyledBtnWrap>
          <StyledAddContactBtn type="submit">
            <FcPlus />
          </StyledAddContactBtn>
          <p>Add contact</p>
        </StyledBtnWrap>
      </Form>
    </Formik>
  );
};
