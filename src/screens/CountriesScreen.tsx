import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Button from '../components/Button';
import {useQuery} from '@apollo/client';
import GET_COUNTRIES from '../graphql/getCountries.query';

function CountriesScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {loading, error, data} = useQuery(GET_COUNTRIES);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {[...(data.countries ?? [])].map(countryItem => {
            return (
              <Button title={countryItem?.name} key={countryItem?.code}>
                <Text>Continent: {countryItem?.continent.name}</Text>
              </Button>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CountriesScreen;
