import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const accessTokenRaw = await AsyncStorage.getItem(
        `${this.namespace}:accesstoken`,
        )
    return accessTokenRaw ? JSON.parse(accessTokenRaw) : "";
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    await AsyncStorage.setItem(
        `${this.namespace}:accesstoken`,
        JSON.stringify(accessToken)
    )
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:accesstoken`)
  }
}

export default AuthStorage;