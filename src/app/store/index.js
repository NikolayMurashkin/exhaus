import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import exhausterDetailsSlice from '../slices/exhausterDetailsSlice';

export const store = configureStore({
	reducer: {
		exhauster: exhausterDetailsSlice,
	},
});

setupListeners(store.dispatch);
