let phone = document.querySelector("#phone");
let pc = document.querySelector("#pc");
let usb = document.querySelector("#usb");
let termux = document.querySelector("#termux");
let sdk = document.querySelector("#sdk");
let reqBox = document.querySelector(".app-requirements-box");
let Rstatus = document.querySelector("#R-status");
let reqCheckbox = document.querySelectorAll(".requirements-checkboxes");
console.log(Rstatus)

// **                                       REQUIREMENTS                     **//
// dynamically css manipulation on requirements completed by dom
const reqCompleted = () => {
 
  if (
    phone.checked &&
    pc.checked &&
    usb.checked &&
    termux.checked &&
    sdk.checked
  ) {
    Rstatus.innerHTML = "requirements completed";
    reqBox.style.backgroundColor="#ccffcc"
    Rstatus.style.display="block"
    Rstatus.style.animation="Status 555ms ease-in-out infinite"
    reqBox.style.boxShadow=" 0 0 12px 1px #32cd32";
  } else {
    Rstatus.innerText = "";
    reqBox.style.boxShadow =
      " -3px 0 5px 0px #ccc inset, 3px 0 5px 0px # inset,0px -3px 5px 0px #32cd32 inset, 0 3px 5px 0px #32cd32 inset";
  }
};
// requirements checkboxes :- GREEN CHECKED BOX
reqCheckbox.forEach((reqCheckbox) => {
  reqCheckbox.addEventListener("click", () => {
    reqCheckbox.style.accentColor="#008000"
    reqCompleted();
  });
});



// **                                       PLATFORMTOOL                     **//
let plBox=document.querySelector(".app-platformtool-box");
let plCheckbox = document.querySelectorAll(".platformtool-checkboxes");
let Pstatus=document.querySelector("#P-status")

plinstalled=()=>{
  if (
    download.checked &&
    extract.checked &&
    copy.checked &&
    cdrive.checked &&
    paste.checked &&
    cmd.checked && 
    adb.checked
  ) {
    Pstatus.innerHTML = "platform installed";
    plBox.style.backgroundColor="#ccffcc"
    Pstatus.style.display="block"
    Pstatus.style.animation="Status 555ms ease-in-out infinite"
    plBox.style.boxShadow=" 0 0 12px 1px #32cd32";
  } else {
    Pstatus.innerText = "";
    plBox.style.boxShadow =
      " -3px 0 5px 0px #ccc inset, 3px 0 5px 0px # inset,0px -3px 5px 0px #32cd32 inset, 0 3px 5px 0px #32cd32 inset";
  }
};
// platformtool checkboxes :- GREEN CHECKED BOX
plCheckbox.forEach((plCheckbox) => {
  plCheckbox.addEventListener("click", () => {
    plCheckbox.style.accentColor = "#008000";
    plinstalled();
  });
});
// platformtool box :- called plBoxlocked function
const plBoxlocked=()=>{
  if (
    !phone.checked ||
    !pc.checked ||
    !usb.checked ||
    !termux.checked ||
    !sdk.checked
  ){
    // plBox.style.pointerEvents="auto";
    alert("complete the requirements first");
  }
}
// platformtool box :-  platformtool box is locked if requirements are not completed
plBox.addEventListener("click",()=>{
  plBoxlocked();
})

// androidadbconnection checkboxes :- GREEN CHECKED BOX
const adbACheckbox = document.querySelectorAll(".adbconnection-checkboxes");
adbACheckbox.forEach((adbACheckbox) => {
  adbACheckbox.addEventListener("click", () => {
    adbACheckbox.style.accentColor = "#7CFC00";
  });
});
// termuxadbconnection checkboxes :- GREEN CHECKED BOX
const adbTCheckbox = document.querySelectorAll(
  ".termuxadbconnection-checkboxes"
);
adbTCheckbox.forEach((adbTCheckbox) => {
  adbTCheckbox.addEventListener("click", () => {
    adbTCheckbox.style.accentColor = "#7CFC00";
  });
});
