import { gql } from "@apollo/client"

export const GET_REPOSITORIES = gql`
query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          id
          ownerAvatarUrl
          fullName
          description
          language
          forksCount
          stargazersCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const ME = gql`
query {
    me {
      id
      username
    }
  }`

  export const SINGLE_REPOSITORY = gql `
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      url
      ownerAvatarUrl
      forksCount
      reviewCount
      ratingAverage
      stargazersCount
      language
      description
      reviews {
        edges {
          node {
            createdAt
            id
            rating
            text
            user {
              username
            }
            
          }
        }
      }
    }
  }`