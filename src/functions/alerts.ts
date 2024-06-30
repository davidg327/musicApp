import { Alert } from "react-native";

export function alerts(
  title: string,
  message: string,
) {
  try {
    Alert.alert(
      title,
      message,
    );
  } catch (error) {
    console.log(error);
  }
}
