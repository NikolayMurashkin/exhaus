import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		name: '1',
		temp: '11',
		vibr: '1',
		time: '',
	},
	{
		name: '2',
		temp: '',
		vibr: '2',
		time: '',
	},
	{
		name: '3',
		temp: '33',
		vibr: '3',
		time: '',
	},
	{
		name: '4',
		temp: '44',
		vibr: '4',
		time: '',
	},
	{
		name: '5',
		temp: '55',
		vibr: '5',
		time: '',
	},
	{
		name: '6',
		temp: '66',
		vibr: '6',
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
		temp: '88',
		vibr: '8',
		time: '',
	},
	{
		name: '9',
		temp: '99',
		vibr: '9',
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
