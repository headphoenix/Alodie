import styled, { useTheme } from 'styled-components/native';
import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList,Platform, StatusBar,ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { SafeArea } from "../../../components/utility/safe-area.component"

export const Send = ({navigation, route}) => {
  const { text } = route.params
   
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
          <HeaderSection>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../../../assets/images/logo.png')} style={{marginRight: 10}}/>
                <Text style={{fontSize: 25, color: '#1B1D28'}}>Alodie</Text>
                </View>
                    <Image source={require('../../../../assets/images/union.png')} style={{width: 19,
                    height: 19, tintColor: '#3A4276'}}/>
            </HeaderSection>
            <HeaderSection style={{ marginTop: 30}}>
              <Text style={{fontSize: 25, color: '#3A4276'}}>
                Send Money
              </Text>
            </HeaderSection>
        <Text>{text}</Text>
        </View>
        
      </SafeArea>
    );
}

const HeaderSection = styled.View`
  margin: 0px 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`

