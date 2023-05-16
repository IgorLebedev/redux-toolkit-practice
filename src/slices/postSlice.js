import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  process: '',
  error: null,
}

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { dispatch }) => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts(result.data));
  } 
);

export const removePostById = createAsyncThunk(
  'posts/removePostsById',
  async (id, { dispatch }) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    dispatch(removePost(id)); 
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, { payload }) => {
      state.posts = payload;
    },
    removePost: (state, { payload }) => {
      const newPosts = state.posts.filter(({ id }) => id !== payload);
      state.posts = newPosts;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.process = 'loading';
      })
      .addCase(getPosts.fulfilled, (state) => {
        state.process = 'loaded';
      })
      .addCase(getPosts.rejected, (state, { error }) => {
        state.error = error.message;
        state.process = 'error';
      })
      .addCase(removePostById.pending, (state, action) => {
        const currentId = action.meta.arg;
        const currentPost = state.posts.find(({ id }) => id === currentId);
        currentPost.process = 'deleting';
      })
      .addCase(removePostById.rejected, (state, action) => {
        const currentId = action.meta.arg;
        const currentPost = state.posts.find(({ id }) => id === currentId);
        currentPost.process = 'error'
      });
  }
});

export const { setPosts, removePost } = postsSlice.actions;

export default postsSlice.reducer;