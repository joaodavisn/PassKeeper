let original = document.getElementById('duplicater');
let i = 0;
let j = 0;
// let originalb = document.getElementById('sitename');


function duplicate() {
    let clone = original.cloneNode(true); // "deep" clone
    clone.id = "duplicater" + (i++);
    // or clone.id = ""; if the divs don't need an ID
    original.parentNode.appendChild(clone);
    let originalkey = document.getElementById('password-value').id;
    let newkey = originalkey + (j++);
    console.log(newkey)
    document.querySelector('#password-value').id = newkey;
}


// var x = document.getElementById("keyvalue").value;
// let passwordid = document.getElementById("password-value").id;
// passwordid = passwordid;
// console.log(passwordid);
// document.getElementById("password-value").id = passwordid;
// // document.getElementById("demo").innerHTML = x;