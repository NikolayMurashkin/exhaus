import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tagTime: '',
	vibr1Alarm: '',
	vibr2Alarm: '',
	temp1Alarm: '',
	temp2Alarm: '',
	timeAlarm: '',
	alarmName: '',
	daysToAlarm: '',
	allData: [],
	exhauster: {
		id: '',
		label: '',
	},
};

const exhausterDetailsSlice = createSlice({
	name: 'exhauster',
	initialState,
	reducers: {
		setDetails: (state, action) => {
			state.tagTime = action.payload.tagTime;
			state.vibr1Alarm = action.payload.vibr1Alarm;
			state.vibr2Alarm = action.payload.vibr2Alarm;
			state.temp1Alarm = action.payload.temp1Alarm;
			state.temp2Alarm = action.payload.temp2Alarm;
			state.timeAlarm = action.payload.timeAlarm;
			state.alarmName = action.payload.alarmName;
			state.daysToAlarm = action.payload.daysToAlarm;
			state.allData = action.payload.allData;
		},
		setExhauster: (state, action) => {
			state.exhauster.label = action.payload.exhausterName;
			state.exhauster.id = action.payload.id;
		},
	},
});

export const { setDetails, setExhauster } = exhausterDetailsSlice.actions;

export default exhausterDetailsSlice.reducer;
