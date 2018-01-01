import * as firebase from "firebase";

export const initialize = () => firebase.initializeApp({
	apiKey: "AIzaSyAsq5_Bz7k0NvHwgkujU5rsFdltIiKx42s",
    authDomain: "dwauth-a7b5e.firebaseapp.com",
    databaseURL: "https://dwauth-a7b5e.firebaseio.com",
    projectId: "dwauth-a7b5e",
    storageBucket: "dwauth-a7b5e.appspot.com",
    messagingSenderId: "913864115277"
});

export const setListener = (endpoint, updaterFn) => {
	firebase.database().ref(endpoint).on('value', updaterFn);
	return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint, data) => {
	return firebase.database().ref(endpoint).push(data);
}