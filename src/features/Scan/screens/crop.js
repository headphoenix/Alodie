// import { Dimensions, Button, ImageBackground } from 'react-native'
// import { ImageManipulatorView } from 'expo-image-manipulator-view'

// export const Crop = ({navigation, result}) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const { width, height } = Dimensions.get('window')
    
//     const  onToggleModal = () => {
//         setIsVisible(!isVisible)
//     };
        
//     return (
//         <ImageBackground
//               resizeMode="contain"
//               style={{
//                   justifyContent: 'center', padding: 20, alignItems: 'center', height, width, backgroundColor: 'black',
//               }}
//               source={{ result }}
//           >
//               <Button title="Open Image Editor" onPress={() => setIsVisible(true)} />
//               <ImageManipulatorView
//                   photo={{ result }}
//                   isVisible={isVisible}
//                   onPictureChoosed={({ uri: uriM }) => this.setState({ uri: uriM })}
//                   onToggleModal={onToggleModal}
//               />
//           </ImageBackground>
//     )
// }