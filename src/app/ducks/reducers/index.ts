import {combineReducers} from 'redux';
import SetReportReducer, {setReportStateType} from './SetReportReducer';

export type globalStateType = {
  setReport: setReportStateType;
};

export default combineReducers<globalStateType>({setReport: SetReportReducer});
