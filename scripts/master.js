const keybox = document.querySelector(".passkeeper-keys");
let unikey = "";

function newkey() {
  let unikey = `unikey${(keybox.childElementCount += 1)}`;
  const input = document.querySelector("#keyvalue").value;
  const container = document.querySelector(".passkeeper-keys");
  const sitenameval = document.querySelector(".add-website-name").value;
  container.innerHTML += `
    <div class="key" id="${container.childElementCount}">
        <div class="key-title">
            <h1 class="website-name" id="sitename">${sitenameval}</h1>
        </div>
        <div class="key-data">
            <div class="key-holder">
                <input type="password" class="key-itself" readonly="readonly" id="${unikey}" value="${input}">
            </div>

            <button class="iconbtn btn hide-show" type="button" onclick="visiblepass(${unikey})"><img src="./images/visibility_off_white_24dp.svg" class="iconsizer" id="eyeid"></button>
            <div class="tooltip">
            <button class="iconbtn btn copy-key" type="button" onclick="copykey(${unikey})"><img src="./images/content_copy_white_24dp.svg" class="iconsizer">

            </button>
            </div>
        </div>
    </div>
    `;

  function isEmpty(str) {
    return !str.trim().length;
  }

  if (isEmpty (document.getElementById('keyvalue').value) ||
  isEmpty (document.querySelector('.add-website-name').value)){
      alert("The fields cannot be empty.");
    };

  document.getElementById("keyvalue").value = "";
  document.querySelector(".add-website-name").value = "";
}

function copykey(unikey) {
  unikey.select();
  unikey.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(unikey.value);
}

function visiblepass(unikey) {
  if (unikey.type === "password") {
    unikey.type = "text";
    document.getElementById("eyeid").src = "./images/visibility_white_24dp.svg";
  } else {
    unikey.type = "password";
    document.getElementById("eyeid").src =
      "./images/visibility_off_white_24dp.svg";
  }

}

function footervisiblepass() {
  let passwordcontent = document.querySelector(".add-key-itself");

  if (passwordcontent.type === "password") {
    passwordcontent.type = "text";
  } else {
    passwordcontent.type = "password";
  }
  event.preventDefault();
}
