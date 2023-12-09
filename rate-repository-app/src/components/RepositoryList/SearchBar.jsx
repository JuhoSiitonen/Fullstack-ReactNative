import { debounce } from "lodash"
import { useCallback, useState } from "react"
import { View, StyleSheet } from "react-native"
import { IconButton, Searchbar } from "react-native-paper"

const styles = StyleSheet.create({
    searchbar: {
        borderRadius: 10,
        height: 40,
        backgroundColor:"white",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
  });

const SearchBar = ({ setKeyword }) => {
    const [search, setSearch] = useState("")
    const setSearchDebouncer = useCallback(
      debounce(setKeyword, 500),
      []
    )

    const onChange = (query) => {
      setSearch(query)
      setSearchDebouncer(query)
    }

    return (
        <View
          style={{
            flexGrow: 1,
            }}>
            <Searchbar
              placeholder="Search"
              placeholderTextColor="grey"
              onChangeText={onChange}
              value={search}
              style={styles.searchbar}
              clearIcon={() => (
                <IconButton
                  icon="close"
                  size={16}
                />
              )}
              icon={() => (
                <IconButton
                  icon="magnify"
                  size={16}
                />
               )}
              />
        </View>
    )
}

export default SearchBar