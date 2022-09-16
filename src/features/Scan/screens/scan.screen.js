import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity, Image, StyleSheet, Button } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";



import callGoogleVisionAsync from "./helperFunction";


const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const ScannerScreen = ({text}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [response, setResponse] = useState(null)
  
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imgSrc, setImgSrc] = useState(null);
 
  
  // useEventListener('onProgressChange', (p) => {
  //   setProgress(p.percent / 100);
  // });

  
  // const cameraRef = useRef();

 
  // const recognizeFromCamera = async (options = defaultPickerOptions) => {
  //   try {
  //     const result = await ImagePicker.launchCameraAsync(options);
  //     setImage(result.uri);
  //     setText("Loading..");
  //     const responseData = await onSubmit(result.base64);
  //     setText(responseData.text);
  //     // setImgSrc({uri: image.path});
  //     // await recognizeTextFromImage(image.path);
  //   } catch (err) {
  //     if (err.message !== 'Could not get image') {
  //       console.error(err);
  //     }
  //   }
  // };



  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }
  return (
    <SafeArea>
     <Text>{text}</Text>
    </SafeArea>
  );
};

const styles = {
  camera: {
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'black'
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      //backgroundColor: '#f00',
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    }
  },
  closeButton: {
    position: 'absolute',
    backgroundColor: '#aaaaaab0', 
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    top: Platform.OS === "ios" ? 45 : 10,
    left: 10
  },
  closeButtonIcon: {
    fontSize: Platform.OS === "ios" ? 40 : 40, 
    fontWeight: 'bold', 
    alignSelf: 'center', 
    lineHeight: Platform.OS === "ios" ? 58 : 40
  }
};

 {/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={snap} style={styles.camera.capture}>
             <Image source={require("../../../../assets/images/cameraButton.png")} style={{width: 50, height: 50}} resizeMode={'contain'} />         
              </TouchableOpacity>
        </View> */}
        {/* <View style={styles.container}>
      <Text style={styles.title}>Tesseract OCR example</Text>
      <Text style={styles.instructions}>Select an image source:</Text>
      <View style={styles.options}>
        <View style={styles.button}>
          <Button
            disabled={isLoading}
            title="Camera"
            onPress={() => {
              recognizeFromCamera();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            disabled={isLoading}
            title="Picker"
            onPress={() => {
              recognizeFromPicker();
            }}
          />
        </View>
      </View>
      {imgSrc && (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imgSrc} />
          {isLoading ? (
            <ProgressCircle showsText progress={progress} />
          ) : (
            <Text>{text}</Text>
          )}
        </View>
      )}
    </View> */}