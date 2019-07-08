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


// Tracking


async function tracking_check(){
    let tracking = await tracking_data();
    console.log(tracking    )
    alert(`Tracking ID: ${tracking[5]}\n
    Product Name: ${tracking[2]}\n
    Price: ${tracking[4]}\n
    Buyer Name: ${tracking[1]}\n
    Address: ${tracking[0]}\n
    Phone: ${tracking[3]}\n
    `);
}

function tracking_data() {
    
    let trackingID = document.getElementById('damsd').value;
    return new Promise((resolve, reject) => {
      firebase.database().ref().child('tracking/' + trackingID).on('value', function(snapshot) {
        var a = snapshotToArray(snapshot);
        resolve(a);
      });
    });
}


// Render product

function renderHtml(data, rootItems) {
   
  let htmlContent = `
  <div id='ea' class='item'>
  <div class='size'>
  <img class='pic' src='${data.image}' alt=''</div>
  <div id='box1' class='col'><div><h4>${data.name}</h4><h5><a style='color: red'>Price: ${data.price}</a></h5><h5><a id='${data.productId}' onClick='buynow(this.id,"${rootItems}")'>BUY NOW</a></h5></div></div></div>`

  var itemList = document.getElementById("itemList")

  itemList.innerHTML += htmlContent
}

    
 async function renderItem(category){
    var items = await getData_View(category);

    let rootItems = category

    itemList.innerHTML = ""
  
      items.forEach(item => {
        renderHtml(item, rootItems)
      })
    
 }

 function getData_View(category) {

    return new Promise((resolve, reject) => {
      firebase.database().ref().child(`products/${category}/`).on('value', function(snapshot) {
        var a = snapshotToArray(snapshot);
        resolve(a);
      });
    });
 }

 function getData_buynow_ea() {

  return new Promise((resolve, reject) => {
    firebase.database().ref().child('products/ea').on('value', function(snapshot) {
      var a = snapshotToArray(snapshot);
      resolve(a);
    });
  });
}


// Buynow item




async function buynow(items, rootItems) {
   console.log(rootItems)
    var Arr = await getData_View1(items, rootItems);
 console.log(Arr)

   
    
    let htmlContent = `<div id="tablediv">
    <button id="close" onclick="buynow()">x</button>
    <table id="table">
        <thead>
            <tr>
                <th style="width:50%">Tên sản phẩm </th>
                <th style="width:30%">Giá</th>
                <th style="width:10%"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div>
                        <h4 id="nameproduct">${Arr[1]}</h4>
                    </div>
                </td>
                <td id="pricebuy">${Arr[2]}</td>
            </tr>
        </tbody>
    </table>  
    <div id="info">
        <div class="hangnhap">
            <label for="name">Họ tên người mua       </label>
            <input class="hangnhap1" type="text" name="" id="namebuy" placeholder="Nhập họ tên"> 
        </div>
        <div class="hangnhap">
            <label for="address">Địa chỉ người mua      </label>
            <input class="hangnhap1" type="text" id="addressbuy" placeholder="Nhập địa chỉ ">
        </div>
        <div class="hangnhap">
            <label for="phone">Số điện thoại người mua</label>
            <input class="hangnhap1" type="text" id="phonebuy" placeholder="Nhập số điện thoại">
        </div>
    </div> 
    <button id="submit" onclick="submitForm()">Xác nhận</button>
</div>
    `
  
    var itemLi = document.getElementById("itemLi")
  
    itemLi.innerHTML += htmlContent

    let x = document.getElementById('tablediv');
    if (x.style.display === 'none') {
        x.style.display = 'flex';
    } 
    else {
        x.style.display = 'none';
    }


  }
  
      
  function getData_View1(items, rootItems) {

    return new Promise((resolve, reject) => {
      firebase.database().ref().child(`products/${rootItems}/` + items).on('value', function(snapshot) {
        var a = snapshotToArray(snapshot);
        resolve(a);
      });
    });
 }




 // BUY Comfirm

   function submitForm(){
   
     // Get values
     let nameproduct = document.getElementById('nameproduct').innerHTML;
     let addressbuy = document.getElementById('addressbuy').value;
     let pricebuy = document.getElementById('pricebuy').innerHTML;
     let namebuy = document.getElementById('namebuy').value;
     let phonebuy = document.getElementById('phonebuy').value;
     let trackingID = Math.random().toString(36).substring(2);
 
 
 
     // Save message
     saveTracking(namebuy, pricebuy, trackingID, addressbuy, phonebuy, nameproduct);
   
     // Show alert

   
     // Hide alert after 3 seconds

   
     // Clear form
   }
   
   // Function to get get form values

   
   // Save message to firebase
   function saveTracking(namebuy, pricebuy, trackingID, addressbuy, phonebuy, nameproduct){
     // Reference messages collection
     var messagesRef = firebase.database().ref('tracking/' + trackingID);
  
     messagesRef.set({
        nameproduct: nameproduct,
        namebuy: namebuy,
        addressbuy: addressbuy,
        phonebuy: phonebuy,
       pricebuy: pricebuy,
       trackingID: trackingID,
     });
     alert(`Tracking ID: ${trackingID}
     `);
   }