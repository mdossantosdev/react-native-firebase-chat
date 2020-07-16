<h1 align="center">React Native Firebase Chat</h1>

> Realtime Chat App built with React Native and Firebase as a backend in order to authenticate users and store data.

## 📦 Built with

- React Native
- Expo
- React Native Paper
- React Navigation
- React Native Gifted Chat
- Firebase / Firestore

## ✨ Features

- [x] Authentication
- [x] Realtime Chat
- [x] Create Chat Room
- [x] Light/Dark theme
- [x] Logout
- [x] Bottom Tab Navigation
- [x] Firebase as a Backend

## 🚀 Getting Started

1. Clone the repository

```sh
$ git clone https://github.com/mdossantosdev/react-native-firebase-chat
```

2. Go into react-native-firebase-chat

```sh
$ cd react-native-firebase-chat
```

3. Install dependencies

```sh
$ npm install
```

4. Rename the config/firebaseConfig_sample file to firebaseConfig.js and fill it

```js
export const firebaseConfig = {
  apiKey: 'your_api_key',
  authDomain: 'your_auth_domain',
  databaseURL: 'your_database_url',
  projectId: 'your_project_id',
  storageBucket: 'your_storage_bucket',
  messagingSenderId: 'your_messaging_sender_id',
  appId: 'your_app_id',
  measurementId: 'your_measurement_id',
};
```

5. Start the project

```sh
$ expo start
```

## © License

This project is licensed under the [MIT License](LICENSE).
