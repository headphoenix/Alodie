import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList,Platform, StatusBar,ScrollView } from 'react-native';
import styled, { useTheme } from 'styled-components/native'
import { SafeArea } from "../../../components/utility/safe-area.component"
import * as ImagePicker from 'expo-image-picker';
import { dummyData } from "../../../Mock/index"
import callGoogleVisionAsync from '../../Scan/screens/helperFunction';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import * as ImageManipulator from 'expo-image-manipulator';

import { Dimensions, Button, ImageBackground } from 'react-native'
import { ImageManipulatorView } from 'expo-image-manipulator-view'

import { useNavigation } from '@react-navigation/native';



const DEFAULT_HEIGHT = 500;
const DEFAULT_WITH = 600;
const defaultPickerOptions = {
  base64: true,
};

export const Home = ({navigation}) => {
 const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const { width, height } = Dimensions.get('window');

  const [editorVisible, setEditorVisible] = useState(false);

  //const navigate = useNavigation();

  const onSubmit= callGoogleVisionAsync;

  const onToggleModal = () => {
    setIsVisible(!isVisible)
};
    
  
  const recognizeFromCamera = async (options = defaultPickerOptions) => {
        try {
          const result = await ImagePicker.launchCameraAsync({ base64: true, allowsEditing: true });
          // const finalResult = await ImageManipulator.manipulateAsync(result.uri, [ {crop: {
          //   height: 200, 
          //   originX: 200, 
          //   originY: 200, 
          //   width: 200
          // }}], { compress: 1, format: SaveFormat.PNG })
          // console.log(finalResult);
          setImage(result.uri)
          setText("Loading..");
          const responseData = await onSubmit(result.base64);
          console.log(responseData.text)
          setText(responseData.text);
          // setImgSrc({uri: image.path});
          // await recognizeTextFromImage(image.path);
        } catch (err) {
          if (err.message !== 'Could not get image') {
            console.error(err);
          }
        }
      };


    const theme = useTheme()
    return (
        <SafeArea>
        <View
            style={{
                flex: 1,
                // justifyContent: 'center',
                // alignItems: 'center',
                backgroundColor: "#FFFFFF",
            }}
        >
            {/* Header Section */}
            <HeaderSection>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../../assets/images/logo.png')} style={{marginRight: 10}}/>
                <Text style={{fontSize: 25, color: '#1B1D28'}}>Alodie</Text>
                </View>
                    <Image source={require('../../../../assets/images/union.png')} style={{width: 19,
                    height: 19, tintColor: '#3A4276'}}/>
            </HeaderSection>
            {/* Account Overview */}
            <ScrollView>
            <HeaderSection style={{ marginTop: 50}}>
              <Text style={{fontSize: 16, color: '#3A4276'}}>
                Account Overview
              </Text>
            </HeaderSection>
            <View
              style={{
                marginHorizontal: 25,
                marginTop: 20,
                height: 116,
                backgroundColor: '#F1F3F6',
                borderRadius: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
                <View style={{marginLeft: 25}}>
                    <Text style={{fontSize: 24, lineHeight: 30, marginBottom: 8, color: '#1B1D28'}}>20,600</Text>
                    <Text style={{fontSize: 16, color: '#7B7F9E'}}>Current Balance</Text>
                </View>
                <TouchableOpacity style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                marginRight: 25,
                backgroundColor: '#FFAC30',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require('../../../../assets/images/plus.png')}/>
            </TouchableOpacity>
            </View>
            {/* Send Money */}
            <HeaderSection style={{ marginTop: 40 }}>
                <Text style={{fontSize: 16, color: '#3A4276'}}>Send Money</Text>
                <TouchableOpacity
                onPress={recognizeFromCamera}>
                <Image source={require('../../../../assets/images/scan.png')} 
                   style={{
                    width: 24,
                    height: 24,
                    tintColor: '#3A4276',
                   }}
                   />
                   </TouchableOpacity>
            </HeaderSection>
            { image && navigation.navigate("Send", { text: text})}
            <View>
                <FlatList
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={dummyData.SendMoneyRecords}
                  renderItem={({item, index}) => {
                    return (
                        <View style={{
                            marginTop: 20,
                            marginLeft: index === 0 ? 25 : 0,
                            marginRight: index === dummyData.SendMoneyRecords.length-1 ? 0 : 10,
                        }}>
                           {index === 0 ? (
                              <View style={{
                                width: 52,
                                height: 120,
                                justifyContent: 'center',
                                alignItems: 'center'
                              }}>
                                <TouchableOpacity style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: 26,
                                    backgroundColor: '#FFAC30',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Image source={item.img}/>
                                </TouchableOpacity>
                              </View>
                           ): (
                            <View style={{
                                width: 110,
                                height: 120,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#F1F3F6',
                                borderRadius: 12,
                            }}>
                                <View style={{
                                     width: 42,
                                     height: 42,
                                     borderRadius: 21,
                                     borderWidth: 1,
                                     borderColor: 'rgba(58, 66, 118, 0.2)',
                                     backgroundColor: '#F1F3F6',
                                     justifyContent: 'center',
                                     alignItems: 'center'
                                }}>
                                    <Image source={item.avatar}/>
                                </View>
                                <Text style={{
                                    fontSize: 16,
                                    color: '#7B7F9E',
                                    marginTop: 16,
                                }}>{item.name}</Text>
                            </View>
                           )}
                        </View>
                    )
                  }}
                ></FlatList>
            </View>
            {/* Services */}
            <HeaderSection style={{ marginTop: 40 }}>
                <Text style={{fontSize: 16, color: '#3A4276'}}>Services</Text>
                <Image source={require('../../../../assets/images/filter.png')} 
                   style={{
                    width: 24,
                    height: 24,
                    tintColor: '#3A4276',
                   }}
                   />
            </HeaderSection>
            <View>
                <View style={{
                    marginTop: 10,
                    marginHorizontal: 25,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap'
                }}>
                {dummyData.Services?.map((item, index) => {
                    return (
                        <View
                          key={item.id}
                          style={{
                            height: 96,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: (index === 0 || index === 4) ? 0 : 23,
                            // marginTop: index > 8 ? 20 : 0,
                          }}
                        >
                            <View 
                            style={{
                            width: 60,
                            height: 60,
                            borderRadius: 12,
                            backgroundColor: '#F1F3F6',
                            justifyContent: 'center',
                            alignItems: "center"
                          }}
                          >
                                <Image source={item.img}/>
                            </View>
                            <Text 
                            style={{
                                fontSize: 10,
                                color: '#7B7F9E',
                                marginTop: 6,
                                width: 52,
                                textAlign: 'center'
                            }}
                            >{item.name}</Text>
                        </View>
                    )
                })}
                </View>
            </View>
            </ScrollView>
        </View>
        </SafeArea>
    );
};

const HeaderSection = styled.View`
  margin: 0px 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`

