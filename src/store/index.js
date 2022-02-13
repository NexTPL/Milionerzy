import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import Data from '../assets/Questions.json';
import Correct_Sound from '../assets/Correct.mp3';
import Wrong_Sound from '../assets/Wrong.mp3';
import Win_Sound from '../assets/Win.mp3';
import Lose_Sound from '../assets/Lose.mp3';
import Play_Sound from '../assets/Play.mp3';
import Select_Sound from '../assets/Selected.mp3';
import Question_Sound from '../assets/Question.mp3';

const QuestionData = Data;
const Correct = new Audio(Correct_Sound);
const Wrong = new Audio(Wrong_Sound);
const Win = new Audio(Win_Sound);
const Lose = new Audio(Lose_Sound);
const Play = new Audio(Play_Sound);
const Select = new Audio(Select_Sound);
const Question = new Audio(Question_Sound);
Question.loop = true;
Question.volume = 0.4;

const StoreState = {
	Score: -1,
	Question: {
		q: 'Chcesz zagrać?',
		c: [0, 1, 2, 3],
		a: ['Tak', 'Tak', 'Tak', 'Tak'],
	},
	Set: [0, 1, 2, 3],
	Reveal: false,
	Select: false,
	Modal: false,
};

const StoreSlice = createSlice({
	name: 'Store',
	initialState: StoreState,
	reducers: {
		check(state, action) {
			const correct = state.Question.c;
			if (correct.includes(action.payload)) {
				state.Score === 11 ? Win.play() : Correct.play();
				if (state.Score === 11) state.Win = true;
				state.Score++;
			} else {
				state.Score === 11 ? Lose.play() : Wrong.play();
				state.Score = 0;
				state.Win = false;
			}
			state.Reveal = true;
		},
		generate(state) {
			state.Reveal = false;
			if (QuestionData.length === 0) {
				alert('Out of questions');
				return;
			}
			if (state.Modal) return;
			Play.play();
			const QuestionID = Math.floor(Math.random() * QuestionData.length);
			let SetArray = [0, 1, 2, 3];
			let NewArray = [];
			for (let i = 0; i < 4; i++) {
				const ID = Math.floor(Math.random() * SetArray.length);
				NewArray.push(SetArray[ID]);
				SetArray.splice(ID, 1);
			}
			state.Question = QuestionData[QuestionID];
			state.Set = NewArray;
			QuestionData.splice(QuestionID, 1);
			state.Select = false;

			setTimeout(() => {
				Question.play();
			}, 5000);
		},
		select(state) {
			state.Select = !state.Select;
			if (Select) {
				Select.play();
				Question.pause();
				Question.currentTime = 0;
				Play.pause();
				Play.currentTime = 0;
			}
		},
		wait() {
			Question.play();
		},
		stop_audio() {
			Select.pause();
			Select.currentTime = 0;
			Question.pause();
			Question.currentTime = 0;
		},
		modal(state) {
			state.Modal = !state.Modal;
		},
	},
});

const store = configureStore({
	reducer: { Store: StoreSlice.reducer },
});
export const StoreSliceActions = StoreSlice.actions;
export default store;
