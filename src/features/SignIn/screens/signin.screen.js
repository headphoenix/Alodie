import React from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { useTheme } from "styled-components/native";


export const SignIn = ({ navigation }) => {
    const theme = useTheme();

    return (
        <View>
            <StatusBar hidden={false} />
            <View style={{ flexDirection: 'row' }}>
                <Image source={require("../../../../assets/images/color_bar.png")} />
                <View style={{
                    marginTop: StatusBar.currentHeight,
                    marginHorizontal: 26,
                    marginBottom: 53,
                    justifyContent: 'space-between'
                }}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#1B1D28', fontSize: 24 }}>06:20 PM</Text>
                            <Image style={{ marginLeft: 20 }} source={require('../../../../assets/images/cloud.png')}></Image>
                            <Text style={{ fontSize: 13, color: '#1B1D28', marginLeft: 8 }}>34 C</Text>
                        </View>
                        <Text style={{ fontSize: 13, color: '#7B7F9E', marginTop: 7 }}>Aug.22.2022 | Monday</Text>
                    </View>
                    <View>
                        <Image source={require('../../../../assets/images/logo.png')} />
                        <Text style={{
                            fontSize: 28,
                            color: '#1B1D28',
                            marginTop: 16,
                        }}>Alodie</Text>
                        <View style={{
                            alignContent: 'space-between', height: 110, width: 189
                        }}>
                            <Text style={{
                                fontSize: 14,
                                color: '#7B7F9E',
                                marginTop: 16,
                                lineHeight: 22
                            }}>Open An Account For A Digital E-Wallet.Better And Faster Solutions </Text>
                            <Text style={{
                                fontSize: 14,
                                color: '#7B7F9E',
                                marginTop: 16,
                            }}>Join Now</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            height: 50,
                            width: 190,
                            borderRadius: 10,
                            backgroundColor: '#FFAC30',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 16,
                                color: '#212330'
                            }}>Sign In</Text>
                            <Image style={{ marginLeft: 8 }} source={require('../../../../assets/images/right_arrow.png')} />
                        </View>
                        <View style={{
                            alignItems: 'center',
                            marginTop: 30,
                            marginBottom: 30
                        }}>
                            <Text style={{
                                fontSize: 16,
                                color: '#1B1D28'
                            }}>Create an account</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

