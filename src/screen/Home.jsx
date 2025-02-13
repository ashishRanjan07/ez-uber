import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
const Home = () => {
  const loaclAddress = [
    {
      id: 1,
      name: 'Nirala Esate',
      address: 'abc',
    },
    {
      id: 2,
      name: 'New Delhi Railway station',
      address: 'xyz',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginVertical: 5,
        }}>
        <Entypo name="location-pin" size={24} color="black" />
        <View>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '700'}}>
            {item.name}
          </Text>
          <Text style={{color: 'gray', fontSize: 14, fontWeight: '500'}}>
            {item.address}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {/* Home Header */}
      <SafeAreaView/>
      <View style={{marginVertical: 10, width: '90%', alignSelf: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
          Uber
        </Text>
      </View>
      <ScrollView>
        {/* Text Input Search box */}
        <View style={{borderWidth: 2, width: '90%', alignSelf: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Feather name="search" size={30} color="black" />
            <TextInput
              placeholder="Where to?"
              placeholderTextColor="black"
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: '700',
                width: '100%',
              }}
            />
          </View>
        </View>

        {/* List of local Address */}
        <View>
          <FlatList
            style={{marginVertical: 10}}
            data={loaclAddress}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        {/* Image */}
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            overflow: 'hidden',
            borderRadius: 20,
          }}>
          <Image
            source={require('../../assets/image/q.png')}
            style={{height: 150, width: '100%'}}
          />
        </View>

        {/* Suggestions */}
        <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '800'}}>
              Suggestions
            </Text>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '400'}}>
              See all
            </Text>
          </View>
          {/* for list of services */}
          <View
            style={{
              marginVertical: 15,
              width: '100%',
              alignSelf: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
            }}>
            <View
              style={{
                alignItems: 'center',
                gap: 10,
                width: '20%',
                marginRight: 10,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  padding: 10,
                  borderRadius: 25,
                  backgroundColor: '#ededed',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/image/package.png')}
                  resizeMode="contain"
                  style={{height: 50, width: 75}}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
                Package
              </Text>
            </View>

            <View
              style={{
                alignItems: 'center',
                gap: 10,
                width: '20%',
                marginRight: 10,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  padding: 10,
                  borderRadius: 25,
                  backgroundColor: '#ededed',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/image/car.png')}
                  resizeMode="contain"
                  style={{height: 50, width: 75}}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
                Ride
              </Text>
            </View>

            <View
              style={{
                alignItems: 'center',
                gap: 10,
                width: '20%',
                marginRight: 10,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  padding: 10,
                  borderRadius: 25,
                  backgroundColor: '#ededed',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/image/intercity.png')}
                  resizeMode="cover"
                  style={{height: 50, width: 75}}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
                Intercity
              </Text>
            </View>

            <View
              style={{
                alignItems: 'center',
                gap: 10,
                width: '20%',
                overflow: 'hidden',
              }}>
              <View
                style={{
                  padding: 10,
                  borderRadius: 25,
                  backgroundColor: '#ededed',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/image/rental.jpeg')}
                  resizeMode="contain"
                  style={{height: 50, width: 75}}
                />
              </View>
              <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
                Rental
              </Text>
            </View>
          </View>
        </View>

        {/* second Image */}
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            overflow: 'hidden',
            borderRadius: 20,
          }}>
          <Image
            source={require('../../assets/image/u.png')}
            style={{height: 150, width: '100%'}}
          />
        </View>

        <View style={{width: '95%', alignSelf: 'center', marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '800'}}>
              Commute smarter
            </Text>
          </View>
        </View>
        <ScrollView horizontal={true} style={{flex: 1}}>
          <View style={{flexDirection: 'row', gap: 15}}>
            <View style={{width: '55%'}}>
              <Image
                source={require('../../assets/image/k.png')}
                resizeMode="cover"
                style={{height: 100, width: '100%'}}
              />
              <Text style={{color: 'black', fontSize: 16}}>
                Go with Uber Auto --
              </Text>
              <Text>Doorsteps pick-up, no bargaining</Text>
            </View>

            <View style={{width: '55%'}}>
              <Image
                source={require('../../assets/image/i.png')}
                resizeMode="cover"
                style={{height: 100, width: '100%'}}
              />
              <Text style={{color: 'black', fontSize: 16}}>
                Hope on a shuttle --
              </Text>
              <Text>Pre - book a seat, ride in comfort</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
