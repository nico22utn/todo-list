import { StyleSheet } from "react-native";
import COLORS from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        backgroundColor: COLORS.white,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.whiteSilver,
        borderWidth: 1,
      },
});

export default styles;
