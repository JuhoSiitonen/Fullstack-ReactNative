import { View, StyleSheet } from "react-native"
import { Button, Divider, Menu } from "react-native-paper"
import { useState } from "react"

export const repoSortingVariables = {
    latest: {
      orderBy: "CREATED_AT",
      orderDirection: "DESC",
      searchKeyword: "",
    },
    highestRated: {
      orderBy: "RATING_AVERAGE",
      orderDirection: "DESC",
      searchKeyword: "",
    },
    lowestRated: {
      orderBy: "RATING_AVERAGE",
      orderDirection: "ASC",
      searchKeyword: "",
    },
  }


const styles = StyleSheet.create({
    bar: {
        height: 50,
        marginTop: 10,
    },
  });

const SortingMenu = ({ setRepoSortVar }) => {
    const [visible, setVisible] = useState(false)
    const [sorter, setSorter] = useState("Latest repositories")
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
            <View style={styles.bar}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>{sorter}</Button>}>
                    <Menu.Item onPress={() => {
                        setRepoSortVar(repoSortingVariables.latest)
                        setSorter("Latest repositories")
                        closeMenu()
                    }} title="Latest repositories" />
                    <Menu.Item onPress={() => {
                        setRepoSortVar(repoSortingVariables.highestRated)
                        setSorter("Highest rated repositories")
                        closeMenu()
                    }} title="Highest rated repositories" />
                    <Menu.Item onPress={() => {
                        setRepoSortVar(repoSortingVariables.lowestRated)
                        setSorter("Lowest rated repositories")
                        closeMenu()
                    }} title="Lowest rated repositories" />
                </Menu>
            </View>
    )
}

export default SortingMenu