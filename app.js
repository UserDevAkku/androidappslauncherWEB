// **                                       REQUIREMENTS                     **//
let reqBox = document.querySelector(".app-requirements-box");
let Rstatus = document.querySelector("#R-status");
let reqCheckbox = document.querySelectorAll(".requirements-checkboxes");
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




//*                    CONFIGURATION FOR ANDROID                    *//


let ABox=document.querySelector(".app-adbconnection-box");
let ACheckbox = document.querySelectorAll(".adbconnection-checkboxes");
let Astatus=document.querySelector("#A-status");
let Averified=document.querySelector(".Aadbconnection-verified")


  
  Averified.addEventListener("input", () => {
    if(settings.checked && miuibuild.checked && searchdeveloperoption.checked && opendeveloperoption.checked && allowforusb.checked && datacable.checked && allowforphone.checked && Acmd.checked && Aadbdevices.checked && Averified.value ==="yes"|| Averified.value ==="YES"  || Averified.value ==="Yes" ){
      ABox.style.backgroundColor="#32cd32"
    }else{
       ABox.style.backgroundColor="#ffffff"
    }
  });




// termuxadbconnection checkboxes :- GREEN CHECKED BOX
let adbTCheckbox = document.querySelectorAll(
  ".termuxadbconnection-checkboxes"
);
adbTCheckbox.forEach((adbTCheckbox) => {
  adbTCheckbox.addEventListener("click", () => {
    adbTCheckbox.style.accentColor = "#7CFC00";
  });
});





// // platformtool box :- called plBoxlocked function
// const plBoxlocked=()=>{
//   if (
//     !phone.checked ||
//     !pc.checked ||
//     !usb.checked ||
//     !termux.checked ||
//     !sdk.checked
//   ){
//     // plBox.style.pointerEvents="auto";
//     alert("complete the requirements first");
//   }
// }
// // platformtool box :-  platformtool box is locked if requirements are not completed
// plBox.addEventListener("click",()=>{
//   plBoxlocked();
// })