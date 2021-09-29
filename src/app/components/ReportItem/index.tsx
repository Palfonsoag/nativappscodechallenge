import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Styles from './styles';
import {reportType} from '../../utils/Types';

type Props = {
  report: reportType;
};

const ReportItem = ({report}: Props) => {
  const {description, uri} = report;

  return (
    <TouchableOpacity style={Styles.cardContainer} onPress={() => {}}>
      <View style={Styles.sectionContainer}>
        <Text style={Styles.description}>{description}</Text>
      </View>
      <Image source={{uri}} style={Styles.image} />
    </TouchableOpacity>
  );
};
export default ReportItem;
