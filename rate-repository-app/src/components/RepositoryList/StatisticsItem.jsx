import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from "../../theme"
import { digitChanger } from '../../utils';

const styles = StyleSheet.create({
    container: {
      marginLeft: 24,
      flexGrow: 1,
      flexShrink: 1,
    },
    containerImageAndText: {
        display: "flex",
        flexDirection: "row",
    },
    containerStatistics: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 24,
      },
    flexItem: {
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 24,
    },
    statisticItem: {
        alignItems: "center",
      },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
        marginTop: 6,
    },
})

const StatisticsItem = ({ digit, text }) => {
    const digitNew = digitChanger(digit)
    return (
        <View style={styles.statisticItem}>
            <Text fontWeight="bold">{digitNew}</Text>
            <Text style={styles.colorTextSecondary}>{text}</Text>
        </View>
    )
}

export default StatisticsItem
