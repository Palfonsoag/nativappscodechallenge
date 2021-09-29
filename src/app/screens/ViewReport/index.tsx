import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, FlatList, RefreshControl, Text, Alert} from 'react-native';
import {globalStateType} from '../../ducks/reducers';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Spinner from '../../components/common/Spinner';
import ReportItem from '../../components/ReportItem';
import {getReports, cleanState} from '../../ducks/actions/ListReportActions';
import {reportType} from '../../utils/Types';
import Styles from './styles';

type Props = {
  navigation: any;
  loading: boolean;
  error: string;
  success: boolean;
  reports: reportType[];
  getReports: () => void;
  cleanState: () => void;
};

const noReportsMessage = 'You have no reports to list yet';

const emptyList = () => (
  <View style={Styles.noRequestContainer}>
    <View style={Styles.notificationContainer}>
      <Text style={Styles.notificationText}>{noReportsMessage}</Text>
    </View>
  </View>
);

const renderItem = ({item}: any) => <ReportItem key={item.id} report={item} />;

const ListReport = ({
  navigation,
  loading,
  getReports,
  error,
  cleanState,
  reports,
}: Props) => {
  useEffect(() => {
    getReports();
    return () => {
      cleanState();
    };
  }, []);

  useEffect(() => {
    if (error) {
      Alert.alert(
        'Error',
        error,
        [
          {
            text: 'OK',
            onPress: () => {
              cleanState();
            },
          },
        ],
        {cancelable: false},
      );
    }
  }, [error]);

  const renderMoreData = () => {
    if (reports.length > 5) {
      getReports();
    }
  };
  const refreshData = () => {
    getReports();
  };
  return (
    <View style={Styles.screenContainer}>
      {loading && <Spinner />}
      <Header navigation={navigation} screenTitle="My Reports" backOption />
      <View style={Styles.listContainer}>
        <FlatList
          data={reports}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={emptyList}
          onEndReachedThreshold={0.2}
          onEndReached={renderMoreData}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              progressBackgroundColor="transparent"
              tintColor="transparent"
              colors={['transparent']}
              style={{backgroundColor: 'transparent'}}
              onRefresh={refreshData}
            />
          }
        />
      </View>
      <Footer />
    </View>
  );
};

const mapStateTopProps = (state: globalStateType) => {
  return {
    loading: state.listReports.loading,
    error: state.listReports.error,
    reports: state.listReports.reports,
  };
};

export default connect(mapStateTopProps, {getReports, cleanState})(ListReport);
