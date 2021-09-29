import AsyncStorage from '@react-native-async-storage/async-storage';
import {REPORTS} from '../../utils/Constants';
import {reportType} from '../../utils/Types';

const base = 'SET_REPORT_ACTIONS_';

export const SET_REPORT_ACTIONS = {
  CLEAN_STATE: base + 'CLEAN_STATE',
  DO_NOTHING: base + 'DO_NOTHING',
  SET_REPORT: base + 'SET_REPORT',
  ACTION_START: base + 'ACTION_START',
  ACTION_STOP: base + 'ACTION_STOP',
  SET_ERROR: base + 'SET_ERROR',
  SET_SUCCESS: base + 'SET_SUCCESS',
};

export const saveReport = (description: string, uri: any) => {
  const newReport: reportType = {
    uri,
    description,
  };

  return async (dispatch: any) => {
    dispatch({type: SET_REPORT_ACTIONS.ACTION_START});
    let reportArray: reportType[] = [];
    try {
      const readValue = await AsyncStorage.getItem(REPORTS);
      if (readValue !== null) {
        const reports = JSON.parse(readValue);
        reportArray = [...reports];
      }

      const jsonValue = JSON.stringify([...reportArray, newReport]);
      await AsyncStorage.setItem(REPORTS, jsonValue);
      dispatch({type: SET_REPORT_ACTIONS.ACTION_STOP});
      dispatch({type: SET_REPORT_ACTIONS.SET_SUCCESS});
    } catch (e) {
      // saving error
      dispatch({type: SET_REPORT_ACTIONS.SET_ERROR, payload: e});
      dispatch({type: SET_REPORT_ACTIONS.ACTION_STOP});
    }
  };
};

export const cleanReportState = () => {
  return {type: SET_REPORT_ACTIONS.CLEAN_STATE};
};
