import {combineReducers} from 'redux';
import SetReportReducer, {setReportStateType} from './SetReportReducer';
import ListReportReducer, {listReportStateType} from './ListReportReducer';

export type globalStateType = {
  setReport: setReportStateType;
  listReports: listReportStateType;
};

export default combineReducers<globalStateType>({
  setReport: SetReportReducer,
  listReports: ListReportReducer,
});
