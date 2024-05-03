import { createSlice } from '@reduxjs/toolkit';
import projectsData from "../data/data.json"
const initialState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;

export const fetchProjects = () => (dispatch) => {
  dispatch(setProjects(projectsData));
};