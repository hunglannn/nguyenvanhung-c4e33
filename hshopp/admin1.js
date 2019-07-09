var config = {
    apiKey: "AIzaSyCwMDG9cnEQ6LMsb0o5y_sqjkl8c9somUk",
    authDomain: "coolboy195-hshop.firebaseapp.com",
    databaseURL: "https://coolboy195-hshop.firebaseio.com",
    projectId: "coolboy195-hshop",
    storageBucket: "",
    messagingSenderId: "990001732065",
    appId: "1:990001732065:web:55afa3522725c0ba"
  };
  firebase.initializeApp(config);


  // Snapshot to Array

  function snapshotToArray(snapshot) {
    var returnArr = [];
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
  };



// Render product

function renderHtml(data) {
  let htmlContent = `
<div class="managee" id="col2">
</div>
<div class="managee" id="col3">
</div>
`

  var itemList = document.getElementById("itemList")

  itemList.innerHTML += htmlContent
}

    
 async function renderItem(){
    var items = await getData_View();
    console.dir(items)

    itemList.innerHTML = ""
    if (itemList.innerHTML == "") {

      items.forEach(item => {
        renderHtml(item)
      })
    } 
 }

 function getData_View() {

    return new Promise((resolve, reject) => {
      firebase.database().ref().child(`tracking/`).on('value', function(snapshot) {
        var a = snapshotToArray(snapshot);
        resolve(a);
      });
    });
 }