let original = document.getElementById('duplicater');
let i = 0;

function duplicate() {

    const input = document.querySelector('#keyvalue').value;
    const container = document.querySelector('.passkeeper-keys');
    const sitenameval = document.querySelector('.add-website-name').value;
    container.innerHTML += `
    <div class="key" id="${container.childElementCount}">
    <div class="key-title">
        <h1 class="website-name" id="sitename">${sitenameval}</h1>
    </div>
    <div class="key-data">
        <div class="key-holder">
            <input type="password" class="key-itself" readonly="readonly" value="${input}">
        </div>
        <button class="iconbtn btn hide-show"><img src="./images/visibility_off_white_24dp.svg" class="iconsizer"></button>
        <button class="iconbtn btn copy-key"><img src="./images/content_copy_white_24dp.svg" class="iconsizer"></button>
    </div>
    </div>
    `
    function isEmpty(str) {
        return !str.trim().length;
    }


    if (isEmpty (document.getElementById('keyvalue').value)){alert("The password cannot be empty.")};
    if (isEmpty (document.querySelector('.add-website-name').value)){alert("The website name cannot be empty.")};

    
    document.getElementById('keyvalue').value="";
    document.querySelector('.add-website-name').value="";
}

