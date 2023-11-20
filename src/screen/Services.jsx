import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

const Services = () => {
 

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={{marginVertical: 10, width: '90%', alignSelf: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
          Services
        </Text>
      </View>

      {/* Second Header */}
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>
          Go anywhere, get anythings
        </Text>
      </View>

      {/* for list of services */}
      <View
        style={{
          marginVertical: 15,
          width: '90%',
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

      {/* for list of 2nd services */}
      <View
        style={{
          width: '90%',
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
              source={require('../../assets/image/reserve.png')}
              resizeMode="contain"
              style={{height: 50, width: 75}}
            />
          </View>
          <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
            Reserve
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
              source={require('../../assets/image/travel.png')}
              resizeMode="contain"
              style={{height: 50, width: 75}}
            />
          </View>
          <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
            Travel
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
              source={require('../../assets/image/group.jpeg')}
              resizeMode="cover"
              style={{height: 50, width: 75}}
            />
          </View>
          <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
            Group ride
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
              source={require('../../assets/image/shuttle.jpg')}
              resizeMode="contain"
              style={{height: 50, width: 75}}
            />
          </View>
          <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
            Shuttle
          </Text>
        </View>
      </View>

    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',}
});
