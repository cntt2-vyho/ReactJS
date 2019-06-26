import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDRonkTeTFkwJBdRNUb-2SYkpNYmW2K2Rk",
    authDomain: "notereactproj.firebaseapp.com",
    databaseURL: "https://notereactproj.firebaseio.com",
    projectId: "notereactproj",
    storageBucket: "",
    messagingSenderId: "417818283055",
    appId: "1:417818283055:web:44ed0b231e344216"
  };
  

 firebase.initializeApp(firebaseConfig);
 export const noteData =  firebase.database().ref('dataForNote');

 // var data = firebase.database().ref( 'dataForNote/note2');
  // sửa dữ liệu
  // data.set({
  //   id: 3,
  //   title: "title cua note 2",
  //   content: "hom nay tui ngu toi 10h sang"
  // })


    //lấy dữ liệu
    // data.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // })