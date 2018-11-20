import firebase from 'firebase';

import * as Settings from 'src/util/settings';

firebase.initializeApp(Settings.database.firebaseConfig);
firebase.auth().signInWithEmailAndPassword('test@a.com', 'testPASSword');
firebase.firestore().settings({
  timestampsInSnapshots: true,
});
