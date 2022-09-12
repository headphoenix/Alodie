// import 'react-native-gesture-handler';
// import React, {useState, useEffect, useRef} from 'react';
// import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { Camera, CameraType } from "expo-camera"
// import { useCameraDevices, useFrameProcessor } from 'react-native-vision-camera';
// import { ScanConfig, recognize } from 'vision-camera-dynamsoft-label-recognizer';
// import * as REA from 'react-native-reanimated';
// import styled from 'styled-components/native';
// import { Svg, Rect, Circle } from 'react-native-svg'
// import { SafeArea } from '../../../components/utility/safe-area.component';

// import TextRecognition from 'react-native-text-recognition';

// // pass the image's path to recognize



// import PropTypes from 'prop-types';


// export const Constants = {
//   ...Camera.Constants
// };

// const Scanner = styled(Camera)`
//     width: 100%;
//     height:100%
// `;


// export const ScannerScreen = ({navigation}) => {

//   camera = null;
//   const [type, setType] = useState(CameraType.back);
//   const [hasPermission, setHasPermission] = useState(null);

//   const [frameWidth, setFrameWidth] = useState(1280);
//   const [frameHeight, setFrameHeight] = useState(720);

//   const [faceData, setFaceData] = React.useState([]);

//   const [enabledOCR, setEnabledOCR] = useState(false)
//   const cameraRef = useRef();

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   const takePicture = async () => {
//     if (camera) {
//       const options = { 
//         quality: quality, 
//         base64: true, 
//         width: imageWidth, 
//         doNotSave: true,
//         fixOrientation: true,
//         pauseAfterCapture: true
//       };
//       const data = await camera.takePictureAsync(options);
      
//      onCapture && onCapture(data.base64, recognizedText); 
//     }
//   };

//   const onTextRecognized = (data) => {
//     if(enabledOCR) {
//       console.log('onTextRecognized: ', data);
//       if(data && data.textBlocks && data.textBlocks.length > 0) {
//        setRecognizedText(data)
//        console.log(data)
//       }
//     }
//   }

//   return (
//     <SafeArea>
//   <Scanner 
//   ref={(camera) => (cameraRef.current = camera)}
//   type={CameraType.back}
//   trackingEnabled
//   flashMode={false}
//   onTextRecognized={enabledOCR ? (data) => onTextRecognized(data) : undefined}
//    >
//     <TouchableOpacity
//             style={{
//                 flex: 1,
//                 alignItems: 'center',
//                 justifyContent: 'center'
//             }}
//         >
//             <Image
//                 source={require('../../../../assets/images/focus.png')}
//                 resizeMode="stretch"
//                 style={{
//                     marginTop: "-55%",
//                     width: 300,
//                     height: 200
//                 }}
//             />
//         </TouchableOpacity>

//         <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//           <TouchableOpacity onPress={takePicture} style={styles.camera.capture}>
//             <Image source={require("../../../../assets/images/cameraButton.png")} style={{width: 50, height: 50}} resizeMode={'contain'} />
//           </TouchableOpacity>
//         </View>

//   </Scanner>
  
//   </SafeArea>
//   )
// };

// Camera.propTypes = {
//   cameraType: PropTypes.any,
//   flashMode: PropTypes.any,
//   autoFocus: PropTypes.any,
//   whiteBalance: PropTypes.any,
//   ratio: PropTypes.string,
//   quality: PropTypes.number,
//   imageWidth: PropTypes.number,
//   style: PropTypes.object,
//   onCapture: PropTypes.func,
//   enabledOCR: PropTypes.bool,
// };

// Camera.defaultProps = {
//   cameraType: Constants.Type.back,
//   flashMode: Constants.FlashMode.off,
//   autoFocus: Constants.AutoFocus.on,
//   whiteBalance: Constants.WhiteBalance.auto,
//   ratio: '4:3',
//   quality: 0.5,
//   imageWidth: 768,
//   style: null,
//   onCapture: null,
//   enabledOCR: false,
// };


// const styles = {
//   camera: {
//     container: {
//       position: 'absolute',
//       left: 0,
//       right: 0,
//       top: 0,
//       bottom: 0,
//       backgroundColor: 'black'
//     },
//     preview: {
//       flex: 1,
//       justifyContent: 'flex-end',
//       alignItems: 'center'
//     },
//     capture: {
//       flex: 0,
//       //backgroundColor: '#f00',
//       padding: 15,
//       paddingHorizontal: 20,
//       alignSelf: 'center',
//       margin: 20
//     }
//   },
//   closeButton: {
//     position: 'absolute',
//     backgroundColor: '#aaaaaab0', 
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     top: Platform.OS === "ios" ? 45 : 10,
//     left: 10
//   },
//   closeButtonIcon: {
//     fontSize: Platform.OS === "ios" ? 40 : 40, 
//     fontWeight: 'bold', 
//     alignSelf: 'center', 
//     lineHeight: Platform.OS === "ios" ? 58 : 40
//   }
// };

// import 'react-native-gesture-handler';
// import React, {useState, useEffect, useRef} from 'react';
// import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { Camera, CameraType } from "expo-camera"
// import { useCameraDevices, useFrameProcessor } from 'react-native-vision-camera';
// import { ScanConfig, recognize } from 'vision-camera-dynamsoft-label-recognizer';
// import * as REA from 'react-native-reanimated';
// import styled from 'styled-components/native';
// import { Svg, Rect, Circle } from 'react-native-svg'
// import { SafeArea } from '../../../components/utility/safe-area.component';

// import TextRecognition from 'react-native-text-recognition';

// import { decode as atob, encode as btoa } from 'base-64';
// import * as AWS from 'aws-sdk';
// import credential from './test';

// // pass the image's path to recognize



// import PropTypes from 'prop-types';


// export const Constants = {
//   ...Camera.Constants
// };

// const Scanner = styled(Camera)`
//     width: 100%;
//     height:100%
// `;


// export const ScannerScreen = ({navigation}) => {

//   camera = null;
//   const [type, setType] = useState(CameraType.back);
//   const [hasPermission, setHasPermission] = useState(null);

//   const [frameWidth, setFrameWidth] = useState(1280);
//   const [frameHeight, setFrameHeight] = useState(720);

//   const [faceData, setFaceData] = React.useState([]);

//   const [loading, setLoading] = useState(false)

//   const [enabledOCR, setEnabledOCR] = useState(false)
//   const cameraRef = useRef();

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   const takePicture = async () => {
//     if (camera) {
//      camera.takePictureAsync()
//      .then(res => {onProcess(res.uri); setLoading(true)})
//     }
//   };

//   const onProcess = async (photo) => {
//     const compressed = await ImageManipulator.manipulateAsync(
//       photo,
//       [{ resize: { width: 200 } }],
//       { base64: true }
//     );
//     let imageBytes = this.getBinary(compressed.base64);
//     let params = {
//       Image: {
//         Bytes: imageBytes
//       }
//     };
//     let rekognition = new AWS.Rekognition(credential);
//     const getResult = rekognition.detectText(params).promise();
//     getResult.then((data) => {
//       setLoading(false)
//       setResponse(data.TextDetections.map(e => e.DetectedText))
//     }).catch((err) => {
//       setLoading(false)
//       setResponse([]);
//     });
//   }

//  const getBinary = (base64Image) => {
//     let binaryImg = atob(base64Image);
//     let length = binaryImg.length;
//     let ab = new ArrayBuffer(length);
//     let ua = new Uint8Array(ab);
//     for (let i = 0; i < length; i++) {
//       ua[i] = binaryImg.charCodeAt(i);
//     }
//     return ab;
//   }


//   const onTextRecognized = (data) => {
//     if(enabledOCR) {
//       console.log('onTextRecognized: ', data);
//       if(data && data.textBlocks && data.textBlocks.length > 0) {
//        setRecognizedText(data)
//        console.log(data)
//       }
//     }
//   }

//   return (
//     <SafeArea style={styles.container}>
//     <ScrollView showsVerticalScrollIndicator={false}>
//       {
//         loading === true &&
//         <View style={{ backgroundColor: '#fff', padding: 15, height: Dimensions.get('window').height, justifyContent: 'center', flexDirection: 'column' }}>
//           <ActivityIndicator size="large" color="#999" />
//           <Text style={{ marginTop: 15, fontSize: 18, textAlign: 'center' }}>Getting Text Results...</Text>
//         </View>

//       }
//       {
//         this.state.loading === false && this.state.response.length > 0 &&
//         <View style={{ padding: 15 }}>
//           <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 15, fontSize: 22 }}>Predicted Results</Text>
//           <Text style={{ textAlign: 'center', fontSize: 18, color: 'blue', marginTop: 0, marginBottom: 15, padding: 10 }} onPress={() => {
//             this.setState({
//               response: []
//             })
//           }}>Clear Results</Text>
//           {
//             this.state.response.map((data, i) => (
//               < Text key={i} style={{ marginTop: 5, padding: 5, fontSize: 16 }}>
//                 {(i + 1) + ' . '} {data}
//               </Text>
//             ))
//           }
//         </View>

//       }
//       {
//         this.state.loading === false && this.state.response.length === 0 &&
//         <View style={{ display: 'flex', height: Dimensions.get('window').height, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }}>
//           <Camera
//             autoFocus={true}
//             ref={ref => {
//               this.camera = ref;
//             }}
//             style={{ height: 320, width: 220 }} type={this.state.type}>
//           </Camera>
//           <View>
//             <TouchableOpacity
//               onPress={this.takePicture}
//               style={{ alignSelf: 'center' }}
//             >
//               <Ionicons name="ios-radio-button-on" size={70} color="black" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       }
//     </ScrollView>
//   </SafeArea>
//   )
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//     backgroundColor: '#fff'
//   }
// });


// // AWS access portal URL: https://d-9067b65b6e.awsapps.com/start, Username: Alodie, One-time password: xW$RDdRH5nb*Lf>GgZr!gFlCw%s1-K_5zFk6GhwEp%H7Kre3F?nasC

import React, { useRef, useState, useEffect } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { View, TouchableOpacity, Image } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import TextRecognition from 'react-native-text-recognition';
import MlkitOcr from 'react-native-mlkit-ocr';

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const ScannerScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [response, setResponse] = useState(null)
  const cameraRef = useRef();


  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      try {
      //const result1 = await MlkitOcr.detectFromUri(photo.uri);
     // console.log(result1)
      let body = JSON.stringify({
				requests: [
					{
						features: [
							{ type: 'TEXT_DETECTION', maxResults: 5 },
						],
						image: {
							source: {
								imageUri: photo.uri
							}
						}
					}
				]
			});
			let response = await fetch(
				'https://vision.googleapis.com/v1/images:annotate?key=' +
        'AIzaSyD4JT06u_nEe8PaZr5yntL6mCcEu721Ca0',
				{
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					method: 'POST',
					body: body
				}
			);
			let responseJson = await response.json();
			console.log(responseJson);
			// this.setState({
			// 	googleResponse: responseJson,
			// 	uploading: false
			// });
      setResponse(responseJson)
      // console.log(result)
      // setResponse(result);
      } catch (error) {
        console.log(error)
      }
     
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeArea>
       <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.backgroundColor}
    >
      <TouchableOpacity onPress={snap}>
        <InnerSnap />
      </TouchableOpacity>
    </ProfileCamera>
     {/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={snap} style={styles.camera.capture}>
             <Image source={require("../../../../assets/images/cameraButton.png")} style={{width: 50, height: 50}} resizeMode={'contain'} />         
              </TouchableOpacity>
        </View> */}
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