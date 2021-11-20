



function newkey() {
    const input = document.querySelector('#keyvalue').value;
    const container = document.querySelector('.passkeeper-keys');
    const sitenameval = document.querySelector('.add-website-name').value;
    let calc = container.childElementCount;
    console.log (calc);
    container.innerHTML += `
    <div class="key" id="${container.childElementCount}">
    <div class="key-title">
        <h1 class="website-name" id="sitename">${sitenameval}</h1>
    </div>
    <div class="key-data">
        <div class="key-holder">
            <input type="password" class="key-itself" readonly="readonly" id="myInput" value="${input}">
        </div>
        <button class="iconbtn btn hide-show" onclick="visiblepass()"><img src="./images/visibility_off_white_24dp.svg" class="iconsizer"></button>
        <div class="tooltip">
        <button class="iconbtn btn copy-key" onclick="copykey()" onmouseout="outFunc()"><img src="./images/content_copy_white_24dp.svg" class="iconsizer">
        <span class="tooltiptext" id="myTooltip">Copy key</span>
        </button>
        </div>
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


function visiblepass() {
    let passwordcontent = document.querySelector(".key-itself");

    if (passwordcontent.type === "password") {
        passwordcontent.type = "text";
    }
    else {passwordcontent.type = "password"}
    event.preventDefault();
}

function footervisiblepass() {
    let passwordcontent = document.querySelector(".add-key-itself");

    if (passwordcontent.type === "password") {
        passwordcontent.type = "text";
    }
    else {passwordcontent.type = "password"}
    event.preventDefault();

}

function copykey() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
    event.preventDefault();
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy key";
  }