import { 
  DASHBOARD_GET_MY_INFO,
  DASHBOARD_GET_MY_INFO_ERROR,
  DASHBOARD_GET_MY_INFO_SUCCESS,
  DASHBOARD_GET_TOTAL_INFO,
  DASHBOARD_GET_TOTAL_INFO_ERROR,
  DASHBOARD_GET_TOTAL_INFO_SUCCESS,
} from '../actions';

export const getMyDashboardInfo = () => ({
  type: DASHBOARD_GET_MY_INFO,
});

export const getMyDashboardInfoSuccess = (organizations) => ({
  type: DASHBOARD_GET_MY_INFO_SUCCESS,
  payload: organizations,
});

export const getMyDashboardInfoError = (error) => ({
  type: DASHBOARD_GET_MY_INFO_ERROR,
  payload: error,
});

export const getTotalDashboardInfo = () => ({
  type: DASHBOARD_GET_TOTAL_INFO,
});

export const getTotalDashboardInfoSuccess = (organizations) => ({
  type: DASHBOARD_GET_TOTAL_INFO_SUCCESS,
  payload: organizations,
});

export const getTotalDashboardInfoError = (error) => ({
  type: DASHBOARD_GET_TOTAL_INFO_ERROR,
  payload: error,
});
