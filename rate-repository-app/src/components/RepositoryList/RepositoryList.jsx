import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories'
import { useNavigate } from 'react-router-native';
import SortingMenu, { repoSortingVariables } from './SortingMenu';
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const RepositoryListContainer = ({ repositories, setRepoSortVar }) => {
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
      <SortingMenu setRepoSortVar={setRepoSortVar}/>}
      />
  );
}

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [keyword, setKeyword] = useState("")
  const [repoSortVar, setRepoSortVar] = useState(
    repoSortingVariables.latest
  )
  const { repositories } = useRepositories(repoSortVar)
  console.log(repoSortVar)
  console.log(repositories)

  return (
    <View>
      <RepositoryListContainer 
      repositories={repositories} 
      setRepoSortVar={setRepoSortVar} />
    </View>
  );
};

export default RepositoryList;