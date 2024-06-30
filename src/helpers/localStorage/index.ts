import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async <T>(key: string, value: T) => {
  try {
    await AsyncStorage.removeItem(key);
    const data = JSON.stringify(value);
    await AsyncStorage.setItem(key, data);
    return true;
  } catch (error) {
    return false;
  }
};

const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};

const getItem = async (key: string) => {
  try {
    const value: any = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    return false;
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (e) {
    return false;
  }
};

const Storage = {
  storeData,
  removeItem,
  getItem,
  clearAll,
};

export default Storage;
