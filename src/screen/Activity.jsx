import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Activity = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={{marginVertical: 10, width: '90%', alignSelf: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
            Activity
          </Text>
        </View>

        {/* Upcoming */}
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
            Upcoming
          </Text>

          <View
            style={{
              borderWidth: 2,
              borderColor: '#ededed',
              borderRadius: 10,
              marginVertical: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{padding: 10, gap: 5}}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
                You have no upcoming trips
              </Text>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
                Reserve your tips --
              </Text>
            </View>
            <View>
              <Image
                source={require('../../assets/image/car.png')}
                resizeMode="contain"
                style={{height: 75, width: 75}}
              />
            </View>
          </View>
        </View>

        {/* Past */}
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
            Past
          </Text>

          <View
            style={{borderWidth: 2, borderColor: '#ededed', borderRadius: 10}}>
            <View style={{padding: 10}}>
              <Image
                source={require('../../assets/image/map.png')}
                resizeMode="cover"
                style={{height: 150, width: '100%', borderRadius: 20}}
              />
            </View>

            <View style={{padding: 10, gap: 5}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                India Today Office
              </Text>
              <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
                16 Nov - 10:06 AM
              </Text>
              <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
                Rs. 150. Booked
              </Text>
            </View>

            <View
              style={{
                marginBottom: 10,
                marginHorizontal: 10,
                paddingStart: 10,
                flexDirection: 'row',
                backgroundColor: '#ededed',
                gap: 5,
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'flex-start',
                borderRadius: 25,
              }}>
              <MaterialIcons name="refresh" size={24} color="black" />
              <Text
                style={{
                  padding: 5,
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '600',
                  marginEnd: 8,
                }}>
                Rebook
              </Text>
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

        {/* List of past Booking */}
        <View
          style={{ width: '90%', alignSelf: 'center', gap: 10}}>
          <View
            style={{
              borderWidth: 2,borderColor: '#ededed', borderRadius: 10,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'center',
              alignContent:'center'
            }}>
            <View style={{backgroundColor:'#ededed',marginEnd:10,borderRadius:10}}>
              <Image source={require('../../assets/image/car.png')} resizeMode='contain' style={{height:50,width:50}}/>
            </View>
            <View>
              <Text style={{color:'black',fontSize:14,fontWeight:'700'}}>LaxmiNagar Metro Station</Text>
              <Text style={{color:'black'}}>16 Nov . 8:12 AM</Text>
              <Text style={{color:'black'}}>Rs164.50. Booked</Text>
            </View>
            <View>
            <View
              style={{
                marginBottom: 10,
                marginHorizontal: 10,
                paddingStart: 10,
                flexDirection: 'row',
                backgroundColor: '#ededed',
                gap: 5,
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'flex-start',
                borderRadius: 25,
              }}>
              <MaterialIcons name="refresh" size={24} color="black" />
              <Text
                style={{
                  padding: 5,
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '600',
                  marginEnd: 8,
                }}>
                Rebook
              </Text>
            </View>
            </View>
          </View>

          <View
            style={{
              borderWidth: 2,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'center',
              alignContent:'center',
              borderColor: '#ededed', borderRadius: 10
            }}>
            <View style={{backgroundColor:'#ededed',marginEnd:10,borderRadius:10}}>
              <Image source={require('../../assets/image/car.png')} resizeMode='contain' style={{height:50,width:50}}/>
            </View>
            <View>
              <Text style={{color:'black',fontSize:14,fontWeight:'700'}}>LaxmiNagar Metro Station</Text>
              <Text style={{color:'black'}}>16 Nov . 8:12 AM</Text>
              <Text style={{color:'black'}}>Rs164.50. Booked</Text>
            </View>
            <View>
            <View
              style={{
                marginBottom: 10,
                marginHorizontal: 10,
                paddingStart: 10,
                flexDirection: 'row',
                backgroundColor: '#ededed',
                gap: 5,
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'flex-start',
                borderRadius: 25,
              }}>
              <MaterialIcons name="refresh" size={24} color="black" />
              <Text
                style={{
                  padding: 5,
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '600',
                  marginEnd: 8,
                }}>
                Rebook
              </Text>
            </View>
            </View>
          </View>

          <View
            style={{
              borderWidth: 2,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'center',
              alignContent:'center',
              borderColor: '#ededed', borderRadius: 10
            }}>
            <View style={{backgroundColor:'#ededed',marginEnd:10,borderRadius:10}}>
              <Image source={require('../../assets/image/car.png')} resizeMode='contain' style={{height:50,width:50}}/>
            </View>
            <View>
              <Text style={{color:'black',fontSize:14,fontWeight:'700'}}>LaxmiNagar Metro Station</Text>
              <Text style={{color:'black'}}>16 Nov . 8:12 AM</Text>
              <Text style={{color:'black'}}>Rs164.50. Booked</Text>
            </View>
            <View>
            <View
              style={{
                marginBottom: 10,
                marginHorizontal: 10,
                paddingStart: 10,
                flexDirection: 'row',
                backgroundColor: '#ededed',
                gap: 5,
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'flex-start',
                borderRadius: 25,
              }}>
              <MaterialIcons name="refresh" size={24} color="black" />
              <Text
                style={{
                  padding: 5,
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '600',
                  marginEnd: 8,
                }}>
                Rebook
              </Text>
            </View>
            </View>
          </View>

          <View
            style={{
              borderWidth: 2,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'center',
              alignContent:'center',
              borderColor: '#ededed', borderRadius: 10
            }}>
            <View style={{backgroundColor:'#ededed',marginEnd:10,borderRadius:10}}>
              <Image source={require('../../assets/image/car.png')} resizeMode='contain' style={{height:50,width:50}}/>
            </View>
            <View>
              <Text style={{color:'black',fontSize:14,fontWeight:'700'}}>LaxmiNagar Metro Station</Text>
              <Text style={{color:'black'}}>16 Nov . 8:12 AM</Text>
              <Text style={{color:'black'}}>Rs164.50. Booked</Text>
            </View>
            <View>
            <View
              style={{
                marginBottom: 10,
                marginHorizontal: 10,
                paddingStart: 10,
                flexDirection: 'row',
                backgroundColor: '#ededed',
                gap: 5,
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'flex-start',
                borderRadius: 25,
              }}>
              <MaterialIcons name="refresh" size={24} color="black" />
              <Text
                style={{
                  padding: 5,
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '600',
                  marginEnd: 8,
                }}>
                Rebook
              </Text>
            </View>
            </View>
          </View>

          <View
            style={{
              borderWidth: 2,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'center',
              alignContent:'center',
              borderColor: '#ededed', borderRadius: 10
            }}>
            <View style={{backgroundColor:'#ededed',marginEnd:10,borderRadius:10}}>
              <Image source={require('../../assets/image/car.png')} resizeMode='contain' style={{height:50,width:50}}/>
            </View>
            <View>
              <Text style={{color:'black',fontSize:14,fontWeight:'700'}}>LaxmiNagar Metro Station</Text>
              <Text style={{color:'black'}}>16 Nov . 8:12 AM</Text>
              <Text style={{color:'black'}}>Rs164.50. Booked</Text>
            </View>
            <View>
            <View
              style={{
                marginBottom: 10,
                marginHorizontal: 10,
                paddingStart: 10,
                flexDirection: 'row',
                backgroundColor: '#ededed',
                gap: 5,
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'flex-start',
                borderRadius: 25,
              }}>
              <MaterialIcons name="refresh" size={24} color="black" />
              <Text
                style={{
                  padding: 5,
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '600',
                  marginEnd: 8,
                }}>
                Rebook
              </Text>
            </View>
            </View>
          </View>

          <View
            style={{
              borderWidth: 2,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'center',
              alignContent:'center',
              borderColor: '#ededed', borderRadius: 10
            }}>
            <View style={{backgroundColor:'#ededed',marginEnd:10,borderRadius:10}}>
              <Image source={require('../../assets/image/car.png')} resizeMode='contain' style={{height:50,width:50}}/>
            </View>
            <View>
              <Text style={{color:'black',fontSize:14,fontWeight:'700'}}>LaxmiNagar Metro Station</Text>
              <Text style={{color:'black'}}>16 Nov . 8:12 AM</Text>
              <Text style={{color:'black'}}>Rs164.50. Booked</Text>
            </View>
            <View>
            <View
              style={{
                marginBottom: 10,
                marginHorizontal: 10,
                paddingStart: 10,
                flexDirection: 'row',
                backgroundColor: '#ededed',
                gap: 5,
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'flex-start',
                borderRadius: 25,
              }}>
              <MaterialIcons name="refresh" size={24} color="black" />
              <Text
                style={{
                  padding: 5,
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '600',
                  marginEnd: 8,
                }}>
                Rebook
              </Text>
            </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Activity;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
