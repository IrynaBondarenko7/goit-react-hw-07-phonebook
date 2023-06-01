import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => (state.isLoading = true))
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// {
// [fetchContacts.pending](state) {
//   state.isLoading = true;
// },
// [fetchContacts.fulfilled](state, action) {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// },
// [fetchContacts.rejected](state, action) {
//   state.isLoading = false;
//   state.error = action.payload;
// },
// [addContact.pending](state) {
//   state.isLoading = true;
// },
// [addContact.fulfilled](state, action) {
//   state.isLoading = false;
//   state.error = null;
//   state.items.push(action.payload);
// },
// [addContact.rejected](state, action) {
//   state.isLoading = false;
//   state.error = action.payload;
// },
// [deleteContact.pending](state) {
//   state.isLoading = true;
// },
// [deleteContact.fulfilled](state, action) {
//   state.isLoading = false;
//   state.error = null;
//   const index = state.items.findIndex(
//     contact => contact.id === action.payload.id
//   );
//   state.items.splice(index, 1);
// },
// [deleteContact.rejected](state, action) {
//   state.isLoading = false;
//   state.error = action.payload;
// },
// },
