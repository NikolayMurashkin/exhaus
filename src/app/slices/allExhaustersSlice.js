import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		exhausterThree: {
			oneBearing: {
				name: '1',
				temp: [''],
				vibr: [''],
				time: [''],
			},
			twoBearing: {
				name: '2',
				temp: [''],
				vibr: [''],
				time: [''],
			},
			threeBearing: {
				name: '3',
				temp: [''],
				vibr: [''],
				time: [''],
			},
			fourBearing: {
				name: '4',
				temp: [''],
				vibr: [''],
				time: [''],
			},
			fiveBearing: {
				name: '5',
				temp: [''],
				vibr: [''],
				time: [''],
			},
			sixBearing: {
				name: '6',
				temp: [''],
				vibr: [''],
				time: [''],
			},
			sevenBearing: {
				name: '7',
				temp: [''],
				vibr: [''],
				time: [''],
			},
			eightBearing: {
				name: '8',
				temp: [''],
				vibr: [''],
				time: [''],
			},
			nineBearing: {
				name: '9',
				temp: [''],
				vibr: [''],
				time: [''],
			},
		},
	},
];

const allExhaustersSlice = createSlice({
	name: 'allExhausters',
	initialState,
	reducers: {
		setExhausterThree: (state, action) => {
			console.log(action.payload);
			console.log(state[0]);
			state[0].exhausterThree.sevenBearing.temp = action.payload.temp;
			state[0].exhausterThree.sevenBearing.time = action.payload.time;
		},
	},
});

export const { setExhausterThree } = allExhaustersSlice.actions;

export default allExhaustersSlice.reducer;
