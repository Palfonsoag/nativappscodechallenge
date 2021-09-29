import {LIST_REPORT_ACTIONS} from '../actions/ListReportActions';
import {reportType} from '../../utils/Types';

export type listReportStateType = typeof INITIAL_STATE;

const INITIAL_STATE = {
  loading: false,
  error: '',
  success: false,
  reports: [] as reportType[],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LIST_REPORT_ACTIONS.ACTION_START:
      return {...state, loading: true};
    case LIST_REPORT_ACTIONS.ACTION_STOP:
      return {...state, loading: false};
    case LIST_REPORT_ACTIONS.SET_SUCCESS:
      return {...state, success: true, reports: action.payload};
    case LIST_REPORT_ACTIONS.SET_ERROR:
      return {...state, error: action.payload};
    case LIST_REPORT_ACTIONS.CLEAN_STATE:
      return {
        ...state,
        loading: false,
        error: '',
        success: false,
      };

    case LIST_REPORT_ACTIONS.DO_NOTHING:
      return {...state};

    default:
      return {...state};
  }
};
