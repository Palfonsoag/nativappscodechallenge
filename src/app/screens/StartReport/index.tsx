import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Image} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {globalStateType} from '../../ducks/reducers';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BorderButton from '../../components/common/BorderButton';
import Input from '../../components/common/Input';
import Styles from './styles';
import {Colors} from '../../theme/Colors';

type Props = {
  navigation: any;
};

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    },
  },
  {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
    },
  },
];

const StartReport = ({navigation}: Props) => {
  const [response, setResponse] = useState<any>(null);
  const [description, setDescription] = useState<string>('');

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  const onDescriptionChange = (value: string) => {
    setDescription(value);
  };

  return (
    <View style={Styles.screenContainer}>
      <Header navigation={navigation} screenTitle="Set Report" backOption />
      <View style={Styles.contentContainer}>
        <View style={Styles.imageSection}>
          {response?.assets &&
            response?.assets.map(({uri}: any) => (
              <View key={uri} style={Styles.image}>
                <Image
                  resizeMode="cover"
                  resizeMethod="scale"
                  style={{width: 200, height: 200}}
                  source={{uri: uri}}
                />
              </View>
            ))}
        </View>
        <View style={Styles.buttonSection}>
          {actions.map(({title, type, options}) => {
            return (
              <BorderButton
                key={title}
                label={title}
                onPress={() => onButtonPress(type, options)}
              />
            );
          })}
        </View>
        <View style={Styles.descriptionSection}>
          <Input
            autoCapitalize={'none'}
            value={description}
            onChangeText={onDescriptionChange}
            placeholder={'Describe the image above'}
            multiline={true}
            numberOfLines={4}
          />
          <BorderButton
            label={'Create Report'}
            onPress={() => {}}
            large
            labelColor={Colors.blue1}
            borderColor={Colors.blue1}
          />
        </View>
      </View>
      <Footer />
    </View>
  );
};

const mapStateTopProps = (state: globalStateType) => {
  return {};
};

export default connect(mapStateTopProps, {})(StartReport);
