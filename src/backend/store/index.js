import {configureStore, combineReducers} from '@reduxjs/toolkit';
import subRedditSlice from './subRedditSlice';

export default configureStore({
  reducer: combineReducers({
    subreddits: subRedditSlice
  })
});