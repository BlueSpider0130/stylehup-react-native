import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Modal,
  ImageBackground,
  ActivityIndicator
  // TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-paper';
import {
  Dropdown,
  MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';

import Loader from '../../components/Loader';

// import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen({ isExtended, setIsExtended }) {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };
  
  // const [selectedTeam, setSelectedTeam] = useState({})
  // const [selectedTeams, setSelectedTeams] = useState([])
const eventData = [
  {
    value: 'wedding',
    label: 'Wedding'
  },
  {
    value: 'prom',
    label: 'Prom Night'
  },
  {
    value: 'dating',
    label: 'Romantic Date'
  },
  {
    value: 'holiday',
    label: 'Holiday Styling'
  },
  {
    value: 'business',
    label: 'Business Styling'
  },
  {
    value: 'hair',
    label: 'Hair Cut'
  }
];
const locationData = [
  {
    value: 'atlanta',
    label: 'Atlanta GA'
  },
  {
    value: 'austin',
    label: 'Austin TX'
  },
  {
    value: 'boston',
    label: 'Boston MA'
  },
  {
    value: 'houston',
    label: 'Houston TX'
  },
];
const serviceDate = [
  {
    value: 'one_week',
    label: 'within this Week'
  },
  {
    value: 'two_week',
    label: 'in Two Weeks TX'
  },
  {
    value: 'one_month',
    label: 'in this Month'
  },
  {
    value: 'three_month',
    label: 'in next 3 Months'
  },
  {
    value: 'six_month',
    label: 'in next 6 Months'
  },
];
  
const [valueEv, setValueEV] = useState([]);
const [valueLc, setValueLC] = useState('');
const [valueSd, setValueSD] = useState('');
const [loadingState, setLoadingState] = useState(false);
const [isModalVisible, setModalVisible] = useState(false);
const onChangeEV = (value) => {
  setValueEV(value);
};
const onChangeLC = (value) => {
  setValueLC(value);
};
const onChangeSD = (value) => {
  setValueSD(value);
};
const search = () => {
  // setLoadingState(true)
  if (!valueEv || !valueLc || !valueSd) {
    setModalVisible(true)
  } else {
    setLoadingState(true)
  }
  console.log('event:', valueEv, 'location:', valueLc, 'serviceDate:', valueSd)
};
const toggleModal = () => {
  setModalVisible(!isModalVisible);
};
const myIcon = <Icon name="search" size={25} color="#fff" />;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <Modal transparent visible={isModalVisible}>
          <View style={{ 
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
            backgroundColor: '#00000040'
          }}
          >
            
            <View style={{
              backgroundColor: '#FFFFFF',
              height: 150,
              width: wp('60%'),
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
            >
              <Text size={20} bold color={colors.black}>Please select all fields!</Text>
              <Button mode='contained' color={colors.primary} onPress={toggleModal}>
                <Text>close</Text>
              </Button>
            </View>
            
          </View>
        </Modal>
        <Loader loading={loadingState} />
        {/* <ActivityIndicator size="large" color={colors.primary} /> */}
        <View style={styles.sectionTitle}>
          <Text size={22} white>
            StyleHup for Unique Styling Experiences
          </Text>
        </View>
        <View style={styles.searchCon}>
          <Text style={{fontSize: 18}}>
            Search for stylist & markup artists
          </Text>
          <ScrollView style={styles.searchEvSection}>
            <MultiselectDropdown
              label="Events"
              data={eventData}
              // enableSearch
              primaryColor={colors.primary}
              color={colors.white}
              chipType="flat"
              chipTextStyle={{ color: colors.white }}
              value={valueEv}
              onChange={onChangeEV}
              floating
              mode="outlined"
              emptySelectionText="No item selected"
              selectedItemTextStyle={{ color: colors.primary, fontWeight: 'bold' }}
              selectedItemsText="events selected"
            />
          </ScrollView>
          <ScrollView style={styles.searchLcSection}>
            <Dropdown
              label="Location"
              data={locationData}
              primaryColor={colors.primary}
              selectedItemTextStyle={{ color: colors.primary, fontWeight: 'bold' }}
              // enableSearch
              value={valueLc}
              onChange={onChangeLC}
              mode="outlined"
            />
          </ScrollView>
          <ScrollView style={styles.searchLcSection}>
            <Dropdown
              label="Service Date"
              data={serviceDate}
              primaryColor={colors.primary}
              selectedItemTextStyle={{ color: colors.primary, fontWeight: 'bold' }}
              // enableSearch
              value={valueSd}
              onChange={onChangeSD}
              mode="outlined"
            />
          </ScrollView>
          {/* <TouchableOpacity
            // onPress={props.onPress}
            style={{
                paddingHorizontal: 16,
                paddingVertical: 12,
              }}
          >
            <Icon name="search" size={30} color={colors.primary} />
            <Text>Search</Text>
          </TouchableOpacity>  */}
          <Button mode="contained" color={colors.primary} onPress={search}>
            {myIcon}
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>search</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    display: 'flex',
    flexDirection: 'column',

  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  sectionTitle: {
    height: hp('10%'),
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#94205B'
  },
  searchCon: {
    marginTop: hp('10%'),
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: wp('90%'),
    // height: hp('50%'),
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
  searchEvSection: {
    // marginTop: 10,
    // paddingHorizontal: 20,
  },
  searchLcSection: {
    marginBottom: 12,
    // paddingHorizontal: 20,
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
