import {createSlice} from '@reduxjs/toolkit';
import {getsubReddits} from '../api/reddit';

const initialState = {
  subreddits: [],
  error: false,
  isloading: false,
};

const subRedditSlice = createSlice({
  name: 'subReddits',
  initialState,
  reducers: {
    startGetsubReddits(state) {
      state.isloading = true;
      state.error = false;
    },
    getSubredditsSuccess(state, action) {
      state.isLoading = false;
      state.subreddits = [...action.payload];
    },
    getSubredditsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  getSubredditsFailed,
  getSubredditsSuccess,
  startGetsubReddits,
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchsubReddits = () => async dispatch => {
  try {
    dispatch(startGetsubReddits());
    const subReddits = await getsubReddits();
    dispatch(getSubredditsSuccess(subReddits));
  } catch (e) {
    dispatch(getSubredditsFailed());
  }
};

export const selectSubReddits = state => state.subreddits;
