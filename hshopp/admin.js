// Initialize Firebase (ADD YOUR OWN DATA)
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


  // Listen for form submit
  document.getElementById('form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var type = getInputVal('type');
    var name = getInputVal('name');
    var image = getInputVal('image');
    var price = getInputVal('price');
    let productId = Math.random().toString(36).substring(2);



    // Save message
    saveMessage(type, name, image, price, productId);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(type, name, image, price, productId){
    // Reference messages collection
    var messagesRef = firebase.database().ref('products/' + type + '/' + productId);
 
    messagesRef.set({
      type: type,
      name: name,
      image: image,
      price: price,
      productId: productId,
    });
  }