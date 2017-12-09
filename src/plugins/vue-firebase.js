
import Vue from 'vue'
import Firebase from 'firebase'
import 'firebase/firestore'

let config = {
  apiKey: 'AIzaSyCTu_hsnRd0jm7cTRlMbZD5rYK7KQgDAII',
  authDomain: 'aifirst-8c56c.firebaseapp.com',
  databaseURL: 'https://aifirst-8c56c.firebaseio.com',
  projectId: 'aifirst-8c56c',
  storageBucket: '',
  messagingSenderId: '1019177554448'
}

Firebase.initializeApp(config)

// Bind Firestore to Vue.
Vue.$db = Firebase.firestore()
Object.defineProperty(Vue.prototype, '$db', {
  get() {
    return Firebase.firestore();
  },
});
