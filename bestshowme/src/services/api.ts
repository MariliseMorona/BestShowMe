import Constants from 'expo-constants';
import { Platform } from "react-native";
import axios from "axios";

const baseURLIOS = Constants.expoConfig?.extra?.baseURLIOS;
const baseURLAndroid = Constants.expoConfig?.extra?.baseURLAndroid;
const baseURL = Platform.OS === 'android' ? baseURLAndroid : baseURLIOS;

console.log('baseURL:', baseURL);
if (!baseURL) {
    throw new Error('Base URL não está definida.');
}

export const api = axios.create({
    baseURL:  baseURL 
});