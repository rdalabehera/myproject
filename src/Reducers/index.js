import { crudStudent } from './CrudStudent.reducer.js';
import { viewStudents } from './ViewStudents.reducer.js'
import { deleteStudent } from './deleteStudent.reducer.js'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  crudStudent,
  viewStudents,
  deleteStudent
});

export default rootReducer;
