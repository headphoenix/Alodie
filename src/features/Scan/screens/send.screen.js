import styled, { useTheme } from "styled-components/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
  StatusBar,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import PropTypes from "prop-types";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { useForm, Controller } from "react-hook-form";
import { Spacer } from "../../../components/spacer/spacer.component";

export const Send = ({ navigation, route }) => {
  const { text } = route.params;

  const theme = useTheme();

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [saved, setSaved] = useState("");
  const [network, setNetwork] = useState("");
  const [reference, setReference] = useState("");

  // if (text === "0201112222") {
  //   setName("Kofi Mensah");
  //   setNetwork("Vodafone");
  // } else if (text === "0242233445") {
  //   setName("Adwoa Manu");
  //   setNetwork("MTN");
  // } else {
  //   setNumber("Did not scan valid number");
  // }

  return (
    <SafeArea>
      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: "primaryLight",
        }}
      >
        <HeaderSection>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../../assets/images/logo.png")}
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 25, color: "#1B1D28" }}>Alodie</Text>
          </View>
          <Image
            source={require("../../../../assets/images/union.png")}
            style={{
              width: 19,
              height: 19,
              tintColor: "#3A4276",
            }}
          />
        </HeaderSection>
        <View
          backgroundColor="primaryLight"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ marginTop: 20, marginBottom: 20, padding: 20 }}
        >
          <Text style={{ fontSize: 25, color: "black" }}>Amount</Text>
          <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <TextInput
              placeholder="0.00"
              style={{
                height: 50,
                width: 100,
                padding: 7,
                fontWeight: "bold",
                fontSize: 25,
                color: "gray",
              }}
              keyboardType="number-pad"
              placeholderTextColor="gray"
              defaultValue={amount}
              onChangeText={(text) => setAmount(text)}
            />
            <View padding={10} alignItems="center" borderLeftWidth={1}>
              <Text variant="body" fontSize={50}>
                GHS
              </Text>
            </View>
          </View>
        </View>

        <View flex={1} backgroundColor="white">
          <View borderBottomWidth={0.3} borderBottomColor="gray">
            <Text style={{ fontSize: 15, paddingLeft: 20, color: "gray" }}>
              Account Number
            </Text>
            <TextInput
              // placeholder="Add account number"
              style={{
                width: "100%",
                fontSize: 20,
                paddingLeft: 20,
                paddingBottom: 10,
                paddingTop: 5,
              }}
              keyboardType="number-pad"
              placeholderTextColor="gray"
              defaultValue={text}
              onChangeText={(text) => setNumber(text)}
            />
          </View>
          <View borderBottomWidth={0.3} borderBottomColor="gray">
            <Text
              style={{
                fontSize: 15,
                paddingLeft: 20,
                paddingTop: 5,
                color: "gray",
              }}
            >
              Select Network
            </Text>
            <TextInput
              style={{
                width: "100%",
                fontSize: 20,
                paddingLeft: 20,
                paddingBottom: 10,
                paddingTop: 5,
              }}
              placeholderTextColor="gray"
              // defaultValue={network}
              //  onChangeText={(text) => setAmount(text)}
            />
          </View>
          <View borderBottomWidth={0.3} borderBottomColor="gray">
            <Text
              style={{
                fontSize: 15,
                paddingLeft: 20,
                paddingTop: 5,
                color: "gray",
              }}
            >
              Beneficiary Name
            </Text>
            <TextInput
              style={{
                width: "100%",
                fontSize: 20,
                paddingLeft: 20,
                paddingBottom: 10,
                paddingTop: 5,
              }}
              placeholderTextColor="gray"
              defaultValue={name}
              //  onChangeText={(text) => setAmount(text)}
            />
          </View>
          <View borderBottomWidth={0.3} borderBottomColor="gray">
            <Text
              style={{
                fontSize: 15,
                paddingLeft: 20,
                paddingTop: 5,
                color: "gray",
              }}
            >
              Reference
            </Text>
            <TextInput
              // placeholder="Add a reference"
              style={{
                width: "100%",
                fontSize: 20,
                paddingLeft: 20,
                paddingBottom: 10,
                paddingTop: 5,
              }}
              placeholderTextColor="gray"
              defaultValue={amount}
              //  onChangeText={(text) => setAmount(text)}
            />
          </View>
          <Spacer position="left" size="large">
            <Spacer position="right" size="large">
              <TouchableOpacity
                style={{
                  backgroundColor: "green",
                  textAlign: "center",
                  justifyContent: "center",
                  marginTop: 30,
                }}
                onPress={() => navigation.navigate("Pass")}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    textAlign: "center",
                    padding: 10,
                  }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </Spacer>
          </Spacer>
        </View>
      </View>
    </SafeArea>
  );
};

const HeaderSection = styled.View`
  margin: 0px 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
