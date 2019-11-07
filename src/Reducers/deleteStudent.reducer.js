import { allConstants } from '../Constants/AllConstants';

const initialState = { student: {}};

export function deleteStudent(state = initialState, action) {

  switch (action.type) {
    case allConstants.DELETE_PLAYER_REQUEST:
      return { student: [] };
    case allConstants.DELETE_PLAYER_SUCCESS:
      return { student: action.student};
    case allConstants.DELETE_PLAYER_FAILURE:
      return { student: [] };
    default:
      return state
  }

}