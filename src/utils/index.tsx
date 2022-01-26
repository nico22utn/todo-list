import Toast from "react-native-root-toast";
import COLORS from "../theme/colors";

const showToast = (message: string) => 
    Toast.show(
        message,
            {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                containerStyle: { backgroundColor: COLORS.white },
                textColor: COLORS.black,
            }
        );
export {
    showToast,
};
