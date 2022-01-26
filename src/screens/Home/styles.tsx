import { StyleSheet } from "react-native";
import COLORS from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.grey,
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
    footer: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: COLORS.white,
      borderRadius: 60,
      borderColor: COLORS.whiteSilver,
      borderWidth: 1,
      width: 250,
    },
  });
  
  export default styles;
  