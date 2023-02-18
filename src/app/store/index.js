import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import exhausterDetailsSlice from '../slices/exhausterDetailsSlice';
import exhThreeSlice from '../slices/exhThreeSlice';
import exhOneSlice from '../slices/exhOneSlice';
import exhTwoSlice from '../slices/exhTwoSlice';
import exhFourSlice from '../slices/exhFourSlice';
import exhFiveSlice from '../slices/exhFiveSlice';
import exhSixSlice from '../slices/exhSixSlice';
import allExhaustersSlice from '../slices/allExhaustersSlice';

export const store = configureStore({
	reducer: {
		exhauster: exhausterDetailsSlice,
		exhThree: exhThreeSlice,
		exhTwo: exhTwoSlice,
		exhOne: exhOneSlice,
		exhFour: exhFourSlice,
		exhFive: exhFiveSlice,
		exhSix: exhSixSlice,
		allExhausters: allExhaustersSlice,
	},
});

setupListeners(store.dispatch);
