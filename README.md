# Blog
React Native Blog simple application


###Instalation Commands
>> npx react-native init Blog

>> RUN: npx react-native run-android

>> npm install react-navigation

>> React navigation: npm install react-navigation-stack

>> npm install react-native-gesture-handler react-native-reanimated

* Server to run locally
>> npm install json-server ngrok (Check note 1)

>> npm install axios

#### Fonts icons
>> npm i --save react-native-svg
>> npm i --save @fortawesome/fontawesome-svg-core
>> npm i --save @fortawesome/free-solid-svg-icons
>> npm i --save @fortawesome/react-native-fontawesome




#### Note 1:

In order to set up, create a file (db.json) inside the new folder, then add the following scripts inside appsetings.json:

"scripts": {
    "db": "json-server -w db.json",
    "tunnel": "ngrok http 3000"
  },

  >> npm run db

Run the following command on the second terminal:

  >> npm run tunnel

#### Edn Note 1


