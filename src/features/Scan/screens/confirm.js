import { Root, Popup } from "react-native-popup-confirm-toast";
import { View, TouchableOpacity, Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const Confirm = ({ navigation }) => {
  return (
    <SafeArea>
      <Root>
        <View>
          <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: "success",
                title: "Confirmation of Transaction",
                textBody: "Your transaction was successful",
                buttonText: "Go to home",
                callback: () => Popup.hide(),
              })
            }
          >
            <Text>Open Popup Message</Text>
          </TouchableOpacity>
        </View>
      </Root>
    </SafeArea>
  );
};
