import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		name: '1',
		temp: '2',
		vibr: '',
		time: '',
	},
	{
		name: '2',
		temp: '',
		vibr: '',
		time: '',
	},
	{
		name: '3',
		temp: '',
		vibr: '',
		time: '',
	},
	{
		name: '4',
		temp: '',
		vibr: '',
		time: '',
	},
	{
		name: '5',
		temp: '',
		vibr: '',
		time: '',
	},
	{
		name: '6',
		temp: '',
		vibr: '',
		time: '',
	},
	{
		name: '7',
		temp: '',
		vibr: '',
		time: '',
	},
	{
		name: '8',
		temp: '',
		vibr: '',
		time: '',
	},
	{
		name: '9',
		temp: '',
		vibr: '',
		time: '',
	},
];

const exhThreeSlice = createSlice({
	name: 'exhThree',
	initialState,
	reducers: {
		setBearingSeven: (state, action) => {
			state[6].temp = action.payload.temp;
			state[6].vibr = action.payload.vibr;
			state[6].time = action.payload.time;
		},
	},
});

export const { setBearingSeven } = exhThreeSlice.actions;

export default exhThreeSlice.reducer;
