import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories'
import { useNavigate } from 'react-router-native';
import SortingMenu, { repoSortingVariables } from './SortingMenu';
import { useState } from 'react';
import SearchBar from './SearchBar';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const RepositoryListContainer = ({ repositories, setRepoSortVar, setKeyword }) => {
  const navigate = useNavigate()
  
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  console.log(repositoryNodes)

  const renderComponent = ({item}) => (
    <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
      <RepositoryItem item={item} />
    </Pressable>
    )

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={renderComponent}
      ListHeaderComponent={
      <View>
        <SearchBar setKeyword={setKeyword} />
        <SortingMenu setRepoSortVar={setRepoSortVar}/>
      </View>}
      />
  );
}

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [searchKeyword, setKeyword] = useState("")
  const [repoSortVar, setRepoSortVar] = useState(
    repoSortingVariables.latest
  )
  const { repositories } = useRepositories({
    ...repoSortVar,
    searchKeyword
    })
  console.log(repoSortVar)
  console.log(searchKeyword)
  console.log(repositories)

  return (
    <View>
      <RepositoryListContainer 
      repositories={repositories} 
      setRepoSortVar={setRepoSortVar}
      setKeyword={setKeyword} />
    </View>
  );
};

export default RepositoryList;