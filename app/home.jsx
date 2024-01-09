import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';
import { useRouter } from 'expo-router';
// import Accelerometer from './AccelerometerScreen';
import AccelerometerScreen from './App';
import App from './App';

export default function Home(navigation) {
  return (
    /*<SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
      <StatusBar style="dark" />

      
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
            <Text
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-neutral-700"
            >
                READY TO
            </Text>
            <Text
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-rose-500"
            >
                WORKOUT
            </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
            <Image 
                source={require('../assets/images/avatar.png')}
                style={{height: hp(6), width: hp(6)}} 
                className="rounded-full"
            />
            <View 
                className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                style={{height: hp(5.5), width: hp(5.5)}}
            >
              <TouchableOpacity
            onPress={() => navigation.navigate('excersises')}
            className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
            style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
        >
                 <Ionicons name="notifications" size={hp(3)} color="green" />
        </TouchableOpacity>
                
            </View>
        </View>
      </View>

      // image slider 
      <View>
        <ImageSlider />
      </View>

      // body parts list 
      <View className="flex-1">
        <BodyParts />
      </View>


    </SafeAreaView>*/
    <View>
      {/* <Text>dd</Text> */}
      <App/>  
    </View>
  )
}