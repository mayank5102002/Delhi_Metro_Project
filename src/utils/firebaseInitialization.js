
//Setting up firebase admin and firebase admin key
const admin = require('firebase-admin')
var serviceAccount = require("../data/firebase_admin_key.json");

//Initializing the firebase admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://delhi-metro-project-f08e5-default-rtdb.asia-southeast1.firebasedatabase.app"
});

//Getting data from firebase
function downloadData() {
  const ref2 = admin.database().ref("/stationToNums");
  ref2.once("value", (snapshot) => {
    console.log(snapshot.val());
  });
}

module.exports = downloadData