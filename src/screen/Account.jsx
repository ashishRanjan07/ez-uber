import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Account = () => {
  return (
    <View style={styles.mainContainer}>
     <SafeAreaView/>
      {/* Upper Header Section */}
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'space-between',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
          marginVertical: 5,
        }}>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
            Ashish Ranjan
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <AntDesign name="star" color="black" size={24} />
            <Text style={{color: 'black', fontSize: 14}}>8.0</Text>
          </View>
        </View>
        <Image
          source={require('../../assets/image/pro.jpg')}
          resizeMode="contain"
          style={{height: 75, width: 75}}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* second Header Section */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: '#ededed',
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <View style={{padding: 10, gap: 10, alignItems: 'center'}}>
              <Ionicons name="help-buoy-sharp" size={30} color="black" />
              <Text style={{fontSize: 16, fontWeight: '600'}}>Help</Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: '#ededed',
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <View style={{padding: 10, gap: 10, alignItems: 'center'}}>
              <MaterialIcons name="payment" size={30} color="black" />
              <Text style={{fontSize: 16, fontWeight: '600'}}>Paymentsa</Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: '#ededed',
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <View style={{padding: 10, gap: 10, alignItems: 'center'}}>
              <Foundation name="clipboard-notes" size={30} color="black" />
              <Text style={{fontSize: 16, fontWeight: '600'}}>Activity</Text>
            </View>
          </View>
        </View>

        {/* Third Header */}
        <View
          style={{
            flexDirection: 'column',
            width: '90%',
            alignSelf: 'center',
            marginVertical: 10,
            gap: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#ededed',
            }}>
            <View style={{width: '70%', gap: 5}}>
              <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
                You have multiple promos
              </Text>
              <Text>
                We'll automatically apply the one that save you the most
              </Text>
            </View>
            <View>
              <MaterialIcons name="local-offer" size={24} color="black" />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#ededed',
            }}>
            <View style={{width: '70%', gap: 5}}>
              <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
                Safety check-up
              </Text>
              <Text>
                Boost your safety profile by turning on additional fetures
              </Text>
            </View>
            <View>
              <Image
                source={require('../../assets/image/progress.png')}
                resizeMode="cover"
                style={{height: 50, width: 50}}
              />
            </View>
          </View>
        </View>

        {/* Header Line */}
        <View
          style={{
            marginVertical: 5,
            borderWidth: 2,
            borderColor: '#ededed',
            backgroundColor: '#ededed',
          }}
        />

        {/* List of Options */}
        <View
          style={{flexDirection: 'column', width: '90%', alignSelf: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              padding: 10,
              alignContent: 'center',
              alignItems: 'center',
              marginBottom:5
            }}>
            <MaterialIcons name="settings" size={24} color="black" />
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
              Settings
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              padding: 10,
              alignContent: 'center',
              alignItems: 'center',
              marginBottom:5
            }}>
            <MaterialIcons name="email" size={24} color="black" />
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
             Messages
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              padding: 10,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="gift" size={24} color="black" />
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
              Seend s gift
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              padding: 10,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons name="boy" size={24} color="black" />
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
             Earn by driving or delivering
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              padding: 10,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome5 name="ticket-alt" size={24} color="black" />
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
              Shuttle Package
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              padding: 10,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="bag" size={24} color="black" />
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
              Business Hub
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              padding: 10,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons name="route" size={24} color="black" />
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
              Shuttle Routes
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              padding: 10,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome name="user" size={24} color="black" />
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
              Manage Uber Account
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              padding: 10,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome name="legal" size={24} color="black" />
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
              Legal
            </Text>
          </View>
        </View>

        <View style={{padding:10}}>
          <Text style={{fontSize:14}}>v4.498.10001</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
