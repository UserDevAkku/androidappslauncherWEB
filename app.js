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
    reqBox.style.backgroundColor = "#ccffcc";
    Rstatus.style.display = "block";
    Rstatus.style.animation = "Status 555ms ease-in-out infinite";
    reqBox.style.border = "2px dotted green";
  } else {
    Rstatus.innerText = "";
    reqBox.style.boxShadow = "0 0 12px 1px #000";
  }
};
// requirements checkboxes :- GREEN CHECKED BOX
reqCheckbox.forEach((reqCheckbox) => {
  reqCheckbox.addEventListener("click", () => {
    reqCheckbox.style.accentColor = "green";
    reqCheckbox.style.boxShadow = "0 0 0 2px green inset";
    reqCompleted();
  });
});

// **                                       PLATFORMTOOL                     **//
let plBox = document.querySelector(".app-platformtool-box");
let plCheckbox = document.querySelectorAll(".platformtool-checkboxes");
let Pstatus = document.querySelector("#P-status");
let Pverified = document.querySelector(".platformtool-verified");

//**####**//
plCheckbox.forEach((plCheckbox) => {
  plCheckbox.addEventListener("click", () => {
    plCheckbox.style.accentColor = "green";
    plCheckbox.style.boxShadow = "0 0 0 2px green inset";
  });
});
//**####**//
Pverified.addEventListener("input", () => {
  if (
    (download.checked &&
      extract.checked &&
      copy.checked &&
      cdrive.checked &&
      paste.checked &&
      cmd.checked &&
      adb.checked &&
      Pverified.value === "yes") ||
    Pverified.value === "YES" ||
    Pverified.value === "Yes"
  ) {
    Pstatus.innerHTML = "platformtool installed";
    plBox.style.backgroundColor = "#ccffcc";
    Pstatus.style.display = "block";
    Pstatus.style.animation = "Status 555ms ease-in-out infinite";
    plBox.style.border = "2px dotted green";
  } else {
    Pstatus.innerHTML = "";
    Pstatus.style.display = "none";
    Pstatus.style.animation = "Status 555ms ease-in-out infinite";
    plBox.style.border = "none";
    plBox.style.backgroundColor = "#ffffff";

  }
});
//**####**//

//*                    CONFIGURATION FOR ANDROID                    *//

let ABox = document.querySelector(".app-adbconnection-box");
let ACheckbox = document.querySelectorAll(".adbconnection-checkboxes");
let Astatus = document.querySelector("#A-status");
let Averified = document.querySelector(".Aadbconnection-verified");

//**####**//
ACheckbox.forEach((ACheckbox) => {
  ACheckbox.addEventListener("click", () => {
    ACheckbox.style.accentColor = "green";
    ACheckbox.style.boxShadow = "0 0 0 2px green inset";
  });
});
//**####**//
Averified.addEventListener("input", () => {
  if (
    (settings.checked &&
      miuibuild.checked &&
      searchdeveloperoption.checked &&
      opendeveloperoption.checked &&
      allowforusb.checked &&
      datacable.checked &&
      allowforphone.checked &&
      Acmd.checked &&
      Aadbdevices.checked &&
      Averified.value === "yes") ||
    Averified.value === "YES" ||
    Averified.value === "Yes"
  ) {
    Astatus.innerHTML = "adb configured for android";
    ABox.style.backgroundColor = "#ccffcc";
    Astatus.style.display = "block";
    Astatus.style.animation = "Status 555ms ease-in-out infinite";
    ABox.style.border = "2px dotted green";
  } else {
    Astatus.innerHTML = "";
    Astatus.style.display = "none";
    Astatus.style.animation = "Status 555ms ease-in-out infinite";
    ABox.style.border = "none";
    ABox.style.backgroundColor = "#ffffff";}
});
//**####**//


//*                    CONFIGURATION FOR TERMUX                    *//
let TBox = document.querySelector(".app-termuxadbconnection-box");
let TCheckbox = document.querySelectorAll(".termuxadbconnection-checkboxes");
let Tstatus = document.querySelector("#T-status");
let Tverified = document.querySelector(".termuxadbconnection-verified");

//**####**//
TCheckbox.forEach((TCheckbox) => {
  TCheckbox.addEventListener("click", () => {
    TCheckbox.style.accentColor = "green";
    TCheckbox.style.boxShadow = "0 0 0 2px green inset";
  });
});
//**####**//
Tverified.addEventListener("input", () => {
  if (
    (VAadbdevice.checked &&
      tcp.checked &&
      T_install.checked &&
      T_pkgs1.checked &&
      T_pkgs2.checked &&
      IP_find.checked &&
      IP_noted.checked &&
      IP_enter.checked &&
      Tverified.value === "yes") ||
    Tverified.value === "YES" ||
    Tverified.value === "Yes"
  ) {
    Tstatus.innerHTML = "adb configured for termux";
    TBox.style.backgroundColor = "#ccffcc";
   Tstatus.style.display="block"
    Tstatus.style.animation = "Status 555ms ease-in-out infinite";
    TBox.style.border = "2px dotted green";
  } else {
    Tstatus.innerHTML = "";
    Tstatus.style.display = "none";
    Tstatus.style.animation = "Status 555ms ease-in-out infinite";
    TBox.style.border = "none";
    TBox.style.backgroundColor = "#ffffff";}
});
//**####**//
