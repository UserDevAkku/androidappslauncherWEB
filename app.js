// **                                       REQUIREMENTS                     **//
// dynamically css manipulation on requirements completed by dom
const reqCompleted = () => {
  let phone = document.querySelector("#phone");
  let pc = document.querySelector("#pc");
  let usb = document.querySelector("#usb");
  let termux = document.querySelector("#termux");
  let sdk = document.querySelector("#sdk");
  let reqBox = document.querySelector(".app-requirements-box");
  let reqstatus = document.querySelector(".requirements-completed");
  if (
    phone.checked &&
    pc.checked &&
    usb.checked &&
    termux.checked &&
    sdk.checked
  ) {
    reqstatus.innerText = "requirements completed";
    reqstatus.style.color = "red";
    reqBox.style.boxShadow =
      " -3px 0 5px 0px #32cd32 inset, 3px 0 5px 0px #32cd32 inset,0px -3px 5px 0px #32cd32 inset, 0 3px 5px 0px #32cd32 inset";
    
  } else {
    reqstatus.innerText = "";
    reqstatus.style.color = "";
    reqBox.style.boxShadow =
      " -3px 0 5px 0px #ccc inset, 3px 0 5px 0px # inset,0px -3px 5px 0px #32cd32 inset, 0 3px 5px 0px #32cd32 inset";
  }
};
// requirements checkboxes :- GREEN CHECKED BOX
const reqCheckbox = document.querySelectorAll(".requirements-checkboxes");
reqCheckbox.forEach((reqCheckbox) => {
  reqCheckbox.addEventListener("click", () => {
    reqCompleted();
  });
});


// **                                       PLATFORMTOOL                     **//
let plBox=document.querySelector(".app-platformtool-box");
let plCheckbox = document.querySelectorAll(".platformtool-checkboxes");

// platformtool checkboxes :- GREEN CHECKED BOX
plCheckbox.forEach((plCheckbox) => {
  plCheckbox.addEventListener("click", () => {
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
  });
});
// termuxadbconnection checkboxes :- GREEN CHECKED BOX
const adbTCheckbox = document.querySelectorAll(
  ".termuxadbconnection-checkboxes"
);
adbTCheckbox.forEach((adbTCheckbox) => {
  adbTCheckbox.addEventListener("click", () => {
  });
});
