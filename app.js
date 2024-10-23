// **                                       REQUIREMENTS                     **//
let reqBox = document.querySelector(".app-requirements-box");
let Rstatus = document.querySelector("#R-status");
let reqCheckbox = document.querySelectorAll(".requirements-checkboxes");
let link = document.querySelectorAll(".link");
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
    reqBox.style.border = "2px solid green";
    reqBox.style.boxShadow = "0 0 20px 2px #32cd32";
    Pstatus.innerHTML = "permission is allowed";
  } else {
    reqBox.style.backgroundColor = "#ffffff";
    Rstatus.style.display = "none";
    reqBox.style.border = "none";
    reqBox.style.boxShadow = "0 0 12px 1px #000";
    //
    plBox.style.backgroundColor = "#ffffff";
    Pstatus.style.display = "none";
    plBox.style.border = "none";
    plBox.style.boxShadow = "0 0 12px 1px #000";
    Pverified.value = "";
    //
    ABox.style.backgroundColor = "#ffffff";
      Astatus.style.display = "none";
      ABox.style.border = "none";
      ABox.style.boxShadow = "0 0 12px 1px #000";
      Averified.value = "";
      //
      TBox.style.backgroundColor = "#ffffff";
      Tstatus.style.display = "none";
      TBox.style.border = "none";
      TBox.style.boxShadow = "0 0 12px 1px #000";
      //
    plCheckbox.forEach((plCheckbox)=>{
      plCheckbox.checked=false;
    })
    //
    ACheckbox.forEach((ACheckbox)=>{
      ACheckbox.checked=false;
    })
    //
    TCheckbox.forEach((TCheckbox)=>{
      TCheckbox.checked=false;
    })
    //
  }
};
reqCheckbox.forEach((reqCheckbox) => {
  reqCheckbox.addEventListener("click", () => {
    reqCompleted();
  });
});
// termux.addEventListener(
//   "mouseover",
//   () => {
//     termuxLink.style.display = "block";
//     termux.style.pointerEvents = "none";
//   },
//   { once: true }
// );
// termuxLink.addEventListener(
//   "click",
//   () => {
//     termuxLink.style.display = "none";
//     termux.style.pointerEvents = "auto";
//   },
//   { once: true }
// );
reqBox.addEventListener("click", () => {
  if (
    phone.checked &&
    pc.checked &&
    usb.checked &&
    termux.checked &&
    sdk.checked
  ) {
    setTimeout(()=>{alert("Requirements have been completed*")},1400);
  }
});
// **                                       PLATFORMTOOL                     **//
let plBox = document.querySelector(".app-platformtool-box");
let plCheckbox = document.querySelectorAll(".platformtool-checkboxes");
let Pstatus = document.querySelector("#P-status");
let Pverified = document.querySelector(".platformtool-verified");
//**####**//
plCheckbox.forEach((plCheckbox) => {
  plCheckbox.addEventListener("click", () => {
    if (
      !download.checked ||
      !extract.checked ||
      !copy.checked ||
      !cdrive.checked ||
      !paste.checked ||
      !cmd.checked ||
      !adb.checked
    ) {
      plBox.style.backgroundColor = "#ffffff";
      Pstatus.style.display = "none";
      plBox.style.border = "none";
      plBox.style.boxShadow = "0 0 12px 1px #000";
      Pverified.value = "";
        ABox.style.backgroundColor = "#ffffff";
      ABox.style.border = "none";
      ABox.style.boxShadow = "0 0 12px 1px #000";
      ACheckbox.forEach((ACheckbox)=>{
        ACheckbox.checked=false;
      })
    }
    if(download.checked &&
      extract.checked &&
      copy.checked &&
      cdrive.checked &&
      paste.checked &&
      cmd.checked &&
      adb.checked){
        Pstatus.style.display="none"
      }
  });
});

// sdk.addEventListener(
//   "mouseover",
//   () => {
//     sdkLink.style.display = "block";
//     sdk.style.pointerEvents = "none";
//   },
//   { once: true }
// );
// sdkLink.addEventListener(
//   "click",
//   () => {
//     sdkLink.style.display = "none";
//     sdk.style.pointerEvents = "auto";
//   },
//   { once: true }
// );

Pverified.addEventListener("input", () => {
  if (
    !download.checked ||
    !extract.checked ||
    !copy.checked ||
    !cdrive.checked ||
    !paste.checked ||
    !cmd.checked ||
    !adb.checked
  ) {
    Pstatus.style.display = "block";
    Pstatus.style.animation = "NoStatus 555ms ease-in-out infinite";
    Pstatus.innerHTML="permission is not allowed*";
    Pverified.value = "";
  }
  if (
    download.checked &&
    extract.checked &&
    copy.checked &&
    cdrive.checked &&
    paste.checked &&
    cmd.checked &&
    adb.checked
  ) {
    if (
      Pverified.value === "yes" ||
      Pverified.value === "YES" ||
      Pverified.value === "Yes"
    ) {
      Pstatus.innerHTML = "Platformtool Installed";
      plBox.style.backgroundColor = "#ccffcc";
      Pstatus.style.display = "block";
      Pstatus.style.animation = "Status 555ms ease-in-out infinite";
      plBox.style.border = "2px solid green";
      plBox.style.boxShadow = "0 0 20px 2px #32cd32";
      Astatus.innerHTML = "permission is allowed";
    } else {
      plBox.style.backgroundColor = "#ffffff";
      Pstatus.style.display = "none";
      plBox.style.border = "none";
      plBox.style.boxShadow = "0 0 12px 1px #000";
      ABox.style.backgroundColor = "#ffffff";
      Astatus.style.display = "none";
      ABox.style.border = "none";
      ABox.style.boxShadow = "0 0 12px 1px #000";
      Averified.value = "";
    }
  }
});

//**####**//
//**####**//

//*                    CONFIGURATION FOR ANDROID                    *//

let ABox = document.querySelector(".app-adbconnection-box");
let ACheckbox = document.querySelectorAll(".adbconnection-checkboxes");
let Astatus = document.querySelector("#A-status");
let Averified = document.querySelector(".Aadbconnection-verified");

//**####**//
ACheckbox.forEach((ACheckbox) => {
  ACheckbox.addEventListener("click", () => {
    if (
      !settings.checked ||
      !miuibuild.checked ||
      !searchdeveloperoption.checked ||
      !opendeveloperoption.checked ||
      !allowforusb.checked ||
      !datacable.checked ||
      !allowforphone.checked ||
      !Acmd.checked ||
      !Aadbdevices.checked
    ) {
      ABox.style.backgroundColor = "#ffffff";
      Astatus.style.display = "none";
      ABox.style.border = "none";
      ABox.style.boxShadow = "0 0 12px 1px #000";
      Averified.value = "";
    }
  });
});
Averified.addEventListener("input", () => {
  if (
    !settings.checked ||
    !miuibuild.checked ||
    !searchdeveloperoption.checked ||
    !opendeveloperoption.checked ||
    !allowforusb.checked ||
    !datacable.checked ||
    !allowforphone.checked ||
    !Acmd.checked ||
    !Aadbdevices.checked
  ) {
    Astatus.innerHTML="permission is not allowed*";
    Averified.value = "";
  }
  if (
    settings.checked &&
    miuibuild.checked &&
    searchdeveloperoption.checked &&
    opendeveloperoption.checked &&
    allowforusb.checked &&
    datacable.checked &&
    allowforphone.checked &&
    Acmd.checked &&
    Aadbdevices.checked
  ) {
    if (
      Averified.value === "yes" ||
      Averified.value === "YES" ||
      Averified.value === "Yes"
    ) {
      Astatus.innerHTML = "configuration is completed";
      ABox.style.backgroundColor = "#ccffcc";
      Astatus.style.display = "block";
      Astatus.style.animation = "Status 555ms ease-in-out infinite";
      ABox.style.border = "2px solid green";
      ABox.style.boxShadow = "0 0 20px 2px #32cd32";
      Tstatus.innerHTML = "permission is allowed";
    } else {
      ABox.style.backgroundColor = "#ffffff";
      Astatus.style.display = "none";
      ABox.style.border = "none";
      ABox.style.boxShadow = "0 0 12px 1px #000";
      TBox.style.backgroundColor = "#ffffff";
      Tstatus.style.display = "none";
      TBox.style.border = "none";
      TBox.style.boxShadow = "0 0 12px 1px #000";
    }
  }
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
    if (
      !VAadbdevice.checked ||
      !tcp.checked ||
      !T_install.checked ||
      !T_pkgs1.checked ||
      !T_pkgs2.checked ||
      !IP_find.checked ||
      !IP_noted.checked ||
      !IP_enter.checked
    ) {
      TBox.style.backgroundColor = "#ffffff";
      Tstatus.style.display = "none";
      TBox.style.border = "none";
      TBox.style.boxShadow = "0 0 12px 1px #000";
      Tverified.value = "";
    }
  });
});
Tverified.addEventListener("input", () => {
  if (
    !VAadbdevice.checked ||
    !tcp.checked ||
    !T_install.checked ||
    !T_pkgs1.checked ||
    !T_pkgs2.checked ||
    !IP_find.checked ||
    !IP_noted.checked ||
    !IP_enter.checked
  ) {
    Tstatus.innerHTML="permission is not allowed*";
    Tverified.value = "";

  }
  if (
    VAadbdevice.checked &&
    tcp.checked &&
    T_install.checked &&
    T_pkgs1.checked &&
    T_pkgs2.checked &&
    IP_find.checked &&
    IP_noted.checked &&
    IP_enter.checked
  ) {
    if (
      Tverified.value === "yes" ||
      Tverified.value === "YES" ||
      Tverified.value === "Yes"
    ) {
      Tstatus.innerHTML = "configuration is completed";
      TBox.style.backgroundColor = "#ccffcc";
      Tstatus.style.display = "block";
      Tstatus.style.animation = "Status 555ms ease-in-out infinite";
      TBox.style.border = "2px solid green";
      TBox.style.boxShadow = "0 0 20px 2px #32cd32";
    } else {
      TBox.style.backgroundColor = "#ffffff";
      Tstatus.style.display = "none";
      TBox.style.border = "none";
      TBox.style.boxShadow = "0 0 12px 1px #000";
    }
  }
});
//**####**//
plBox.addEventListener("mouseover", () => {
  if (
    phone.checked &&
    pc.checked &&
    usb.checked &&
    termux.checked &&
    sdk.checked
  ) {
    plCheckbox.forEach((plCheckbox) => {
      plCheckbox.style.pointerEvents = "auto";
    });
  } else {
      plCheckbox.forEach((plCheckbox) => {
      plCheckbox.style.pointerEvents = "none";
      Pstatus.innerHTML = "requirements are incompleted";
      Pstatus.style.display = "block";
      Pstatus.style.animation = "NoStatus 555ms ease-in-out infinite";
    });
  }
});
ABox.addEventListener("mouseover", () => {
  if(download.checked &&
    extract.checked &&
    copy.checked &&
    cdrive.checked &&
    paste.checked &&
    cmd.checked &&
    adb.checked ){
      if(!Pverified.value === "yes" ||
    !Pverified.value === "YES" ||
    !Pverified.value === "Yes"
  ){
        Astatus.style.display = "block";
        Astatus.style.animation = "NoStatus 555ms ease-in-out infinite";
         Astatus.innerHTML="platformtool installation is incomplete"
        ABox.style.backgroundColor = "#ffffff";
      ABox.style.border = "none";
      ABox.style.boxShadow = "0 0 12px 1px #000";
      ACheckbox.forEach((ACheckbox)=>{
        ACheckbox.checked=false;
      })
    }
  }
    if(!download.checked ||
      !extract.checked ||
      !copy.checked ||
      !cdrive.checked ||
      !paste.checked ||
      !cmd.checked ||
      !adb.checked){
        Astatus.innerHTML="platformtool is not installed yet"
        Astatus.style.display = "block";
        Astatus.style.animation = "NoStatus 555ms ease-in-out infinite";
        ABox.style.backgroundColor = "#ffffff";
      ABox.style.border = "none";
      ABox.style.boxShadow = "0 0 12px 1px #000";
      ACheckbox.forEach((ACheckbox)=>{
        ACheckbox.checked=false;
      })
      }
  if (download.checked &&
      extract.checked &&
      copy.checked &&
      cdrive.checked &&
      paste.checked &&
      cmd.checked &&
      adb.checked &&
      Pverified.value === "yes" ||
    Pverified.value === "YES" ||
    Pverified.value === "Yes"
  ) {
    ACheckbox.forEach((ACheckbox) => {
      ACheckbox.style.pointerEvents = "auto";
    });
  } else {
    ACheckbox.forEach((ACheckbox) => {
      ACheckbox.style.pointerEvents = "none";
    });
  }
});
TBox.addEventListener("mouseover", () => {
  if(settings.checked &&
    miuibuild.checked &&
    searchdeveloperoption.checked &&
    opendeveloperoption.checked &&
    allowforusb.checked &&
    datacable.checked &&
    allowforphone.checked &&
    Acmd.checked &&
    Aadbdevices.checked && Averified.value==="" || !Averified.value === "yes" ||
    !Averified.value === "YES" ||
    !Averified.value === "Yes" ){
      Tstatus.innerHTML="android configuration is incomplete"
        Tstatus.style.display = "block";
      Tstatus.style.animation = "NoStatus 555ms ease-in-out infinite";

    }
    if(!settings.checked ||
      !miuibuild.checked ||
      !searchdeveloperoption.checked ||
      !opendeveloperoption.checked ||
      !allowforusb.checked ||
      !datacable.checked ||
      !allowforphone.checked ||
      !Acmd.checked ||
      !Aadbdevices.checked){
        Tstatus.innerHTML="android is not configured yet"
        Tstatus.style.display = "block";
      Tstatus.style.animation = "NoStatus 555ms ease-in-out infinite";
      }
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
    TCheckbox.forEach((TCheckbox) => {
      TCheckbox.style.pointerEvents = "auto";
    });
  } else {
    TCheckbox.forEach((TCheckbox) => {
      TCheckbox.style.pointerEvents = "none";
    });
  }
});
