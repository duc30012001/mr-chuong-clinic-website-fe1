import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface User {
  id: string;
  name: string;
  email: string;
}

const initialState: User = {
  id: '',
  name: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUserLoggedIn: (state, action: PayloadAction<User>) => {
      const { email, id, name } = action.payload;
      state.email = email;
      state.id = id;
      state.name = name;
    },
  },
});

export const { setCurrentUserLoggedIn } = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
