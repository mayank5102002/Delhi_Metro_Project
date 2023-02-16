//Setting up firebase admin and firebase admin key
const admin = require("firebase-admin");
var serviceAccount = require("../data/firebase_admin_key.json");

//Initializing the firebase admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://delhi-metro-project-f08e5-default-rtdb.asia-southeast1.firebasedatabase.app",
});

//Getting data from firebase
function getData() {
  const ref = admin.database().ref("/stationToNums");
  var data;
  ref.once("value", (snapshot) => {
    data = snapshot.val();
  });
}

function addStationToNumsData(stations, nums) {
  const ref = admin.database().ref("/stationToNums");
  var data;
  ref.once("value", (snapshot) => {
    data = snapshot.val();
    computeData(stations, nums, ref, data);
  });
}

function computeData(key, value, ref, data) {
  var n = key.length;

  for (let i = 0; i < n; i++) {
    data[key[i]] = value[i];
  }

  ref.set(data);
}

function add() {
  addStationToNumsData(["KASHMERE GATE", "KALKAJI MANDIR"], [2, 3]);
}

module.exports = {
  addStationToNumsData,
  add,
};
