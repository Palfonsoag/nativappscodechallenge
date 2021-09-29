import {SET_REPORT_ACTIONS} from '../actions/SetReportAction';

export type setReportStateType = typeof INITIAL_STATE;

const INITIAL_STATE = {
  loading: false,
  error: '',
  success: false,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_REPORT_ACTIONS.ACTION_START:
      return {...state, loading: true};
    case SET_REPORT_ACTIONS.ACTION_STOP:
      return {...state, loading: false};
    case SET_REPORT_ACTIONS.SET_ERROR:
      return {...state, error: action.payload};
    case SET_REPORT_ACTIONS.CLEAN_STATE:
      return {
        ...state,
        loading: false,
        error: '',
        success: false,
      };

    case SET_REPORT_ACTIONS.DO_NOTHING:
      return {...state};

    default:
      return {...state};
  }
};
