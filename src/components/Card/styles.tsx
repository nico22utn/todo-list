import { StyleSheet } from "react-native";
import COLORS from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    icon: {
        width: 24,
        height: 24,
        backgroundColor: COLORS.blue,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    item: {
        flexDirection: 'row',
        alignItems: "center",
    },
    text: { maxWidth: '80%' },
});

export default styles;
