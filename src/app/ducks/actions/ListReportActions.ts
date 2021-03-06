import AsyncStorage from '@react-native-async-storage/async-storage';
import {REPORTS} from '../../utils/Constants';
import {reportType} from '../../utils/Types';

const base = 'LIST_REPORT_ACTIONS_';

export const LIST_REPORT_ACTIONS = {
  CLEAN_STATE: base + 'CLEAN_STATE',
  DO_NOTHING: base + 'DO_NOTHING',
  ACTION_START: base + 'ACTION_START',
  ACTION_STOP: base + 'ACTION_STOP',
  SET_ERROR: base + 'SET_ERROR',
  SET_SUCCESS: base + 'SET_SUCCESS',
};

export const getReports = () => {
  return async (dispatch: any) => {
    dispatch({type: LIST_REPORT_ACTIONS.ACTION_START});
    let reportArray: reportType[] = [];
    try {
      const readValue = await AsyncStorage.getItem(REPORTS);
      if (readValue !== null) {
        const reports = JSON.parse(readValue);
        reportArray = [...reports];
      }
      dispatch({type: LIST_REPORT_ACTIONS.ACTION_STOP});
      dispatch({type: LIST_REPORT_ACTIONS.SET_SUCCESS, payload: reportArray});
    } catch (e) {
      // saving error
      dispatch({type: LIST_REPORT_ACTIONS.SET_ERROR, payload: e});
      dispatch({type: LIST_REPORT_ACTIONS.ACTION_STOP});
    }
  };
};

export const cleanState = () => {
  return {type: LIST_REPORT_ACTIONS.CLEAN_STATE};
};
