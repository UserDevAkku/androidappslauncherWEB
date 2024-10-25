// **                                       REQUIREMENTS                     **//
let yesNo = document.querySelectorAll(".yesNo");
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
    Rstatus.style.display = "block";
    Rstatus.style.animation = "Status 555ms ease-in-out infinite";
    reqBox.style.backgroundColor = "#ccffcc";
    reqBox.style.border = "2px solid green";
    reqBox.style.boxShadow = "0 0 20px 2px #32cd32";
    Pstatus.style.display = "block";
    Pstatus.style.animation = "NoStatus 555ms ease-in-out infinite";
    Pstatus.innerHTML = "permission is allowed";
  } else {
    Rstatus.style.display = "none";
    reqBox.style.backgroundColor = "#ffffff";
    reqBox.style.border = "none";
    reqBox.style.boxShadow = "0 0 12px 1px #000";
    Pstatus.style.display = "block";
    Pstatus.style.animation = "NoStatus 555ms ease-in-out infinite";
    Pstatus.innerHTML = "requirements are mendatory";
  }
  if (
    !phone.checked ||
    !pc.checked ||
    !usb.checked ||
    !termux.checked ||
    !sdk.checked
  ) {
    plBox.style.backgroundColor = "#ffffff";
    Pstatus.style.display = "none";
    plBox.style.border = "none";
    plBox.style.boxShadow = "0 0 12px 1px #000";
    plCheckbox.forEach((plCheckbox) => {
      plCheckbox.checked = false;
    });
    if (Pverified.value === "YesNo") {
      Pverified.value != "";
    } else {
      Pverified.value = "";
    }
    ABox.style.backgroundColor = "#ffffff";
    Astatus.style.display = "none";
    ABox.style.border = "none";
    ABox.style.boxShadow = "0 0 12px 1px #000";
    ACheckbox.forEach((ACheckbox) => {
      ACheckbox.checked = false;
    });
    if (Averified.value === "YesNo") {
      Averified.value != "";
    } else {
      Averified.value = "";
    }
    TBox.style.backgroundColor = "#ffffff";
    Tstatus.style.display = "none";
    TBox.style.border = "none";
    TBox.style.boxShadow = "0 0 12px 1px #000";
    TCheckbox.forEach((TCheckbox) => {
      TCheckbox.checked = false;
    });
    if (Tverified.value === "YesNo") {
      Tverified.value != "";
    } else {
      Tverified.value = "";
    }
  }
};
reqBox.addEventListener("click", () => {
  reqCompleted();
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
      if (Pverified.value === "YesNo") {
        Pverified.value != "";
      } else {
        Pverified.value = "";
      }
      plBox.style.backgroundColor = "#ffffff";
      Pstatus.style.display = "none";
      plBox.style.border = "none";
      plBox.style.boxShadow = "0 0 12px 1px #000";
      ABox.style.backgroundColor = "#ffffff";
      ABox.style.border = "none";
      ABox.style.boxShadow = "0 0 12px 1px #000";
      ACheckbox.forEach((ACheckbox) => {
        ACheckbox.checked = false;
      });
      Astatus.style.display = "block";
      Astatus.style.animation = "NoStatus 555ms ease-in-out infinite";
      Astatus.innerHTML = "platformtool is mendatory";
      if (Averified.value === "YesNo") {
        Averified.value != "";
      } else {
        Averified.value = "";
      }
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
      Pstatus.style.display = "none";
    }
  });
});
Pverified.addEventListener("mouseout", () => {
  if (
    !download.checked ||
    !extract.checked ||
    !copy.checked ||
    !cdrive.checked ||
    !paste.checked ||
    !cmd.checked ||
    !adb.checked
  ) {
    if (
      Pverified.value === "yes" ||
      Pverified.value === "Yes" ||
      Pverified.value === "YES"
    ) {
      Pstatus.style.display != "none";
    } else {
      Pstatus.style.display = "none";
    }
  }
});
Pverified.addEventListener("input", () => {
  if (
    download.checked &&
    extract.checked &&
    copy.checked &&
    cdrive.checked &&
    paste.checked &&
    cmd.checked &&
    adb.checked){
      if(Pverified.value !== "yes" || Pverified.value !== "YES" || Pverified.value !== "Yes"
    ) {
      Astatus.style.display = "block";
      Astatus.style.animation = "NoStatus 555ms ease-in-out infinite";
      Astatus.innerHTML = "platformtool is mendatory";
      ABox.style.backgroundColor = "#ffffff";
      ABox.style.border = "none";
      ABox.style.boxShadow = "0 0 12px 1px #000";
      ACheckbox.forEach((ACheckbox) => {
        ACheckbox.checked = false;
      });
      if (Averified.value === "YesNo") {
        Averified.value != "";
      } else {
        Averified.value = "";
      }
    } else {
      Astatus.style.display = "none";
    }
  }
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
    Pstatus.innerHTML = "permission is not allowed*";
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
      Pstatus.style.display = "block";
      Pstatus.style.animation = "Status 555ms ease-in-out infinite";
      Pstatus.innerHTML = "Platformtool Installed";
      plBox.style.backgroundColor = "#ccffcc";
      plBox.style.border = "2px solid green";
      plBox.style.boxShadow = "0 0 20px 2px #32cd32";
      Astatus.innerHTML = "permission is allowed";
      Astatus.style.display = "block";
      Astatus.style.animation = "NoStatus 555ms ease-in-out infinite";
    } else {
      Pstatus.style.display = "none";
      plBox.style.backgroundColor = "#ffffff";
      plBox.style.border = "none";
      plBox.style.boxShadow = "0 0 12px 1px #000";
      Astatus.innerHTML = "platformtool is mendatory";
      Astatus.style.display = "block";
      Astatus.style.animation = "NoStatus 555ms ease-in-out infinite";
      ABox.style.backgroundColor = "#ffffff";
      ABox.style.border = "none";
      ABox.style.boxShadow = "0 0 12px 1px #000";
      if (Averified.value === "YesNo") {
        Averified.value != "";
      } else {
        Averified.value = "";
      }
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
      TBox.style.backgroundColor = "#ffffff";
      TBox.style.border = "none";
      TBox.style.boxShadow = "0 0 12px 1px #000";
      TCheckbox.forEach((TCheckbox) => {
        TCheckbox.checked = false;
      });
      if(Tverified.value==="YesNo"){
        Tverified.value!=""
      }
      else
      {
         Tverified.value="";
      }
      ABox.style.backgroundColor = "#ffffff";
      Astatus.style.display = "none";
      ABox.style.border = "none";
      ABox.style.boxShadow = "0 0 12px 1px #000";
      if (Averified.value === "YesNo") {
        Averified.value != "";
      } else {
        Averified.value = "";
      }
    }
  });
});
Averified.addEventListener("mouseout", () => {
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
    if (
      Averified.value === "yes" ||
      Averified.value === "Yes" ||
      Averified.value === "YES"
    ) {
      Astatus.style.display != "none";
    } else {
      Astatus.style.display = "none";
    }
  }
});
Averified.addEventListener("input", () => {
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
      Averified.value !== "yes" ||
      Averified.value !== "YES" ||
      Averified.value !== "Yes"
    ) {
      TBox.style.backgroundColor = "#ffffff";
      TBox.style.border = "none";
      TBox.style.boxShadow = "0 0 12px 1px #000";
      TCheckbox.forEach((TCheckbox) => {
        TCheckbox.checked = false;
      });
      if(Tverified.value==="YesNo"){
        Tverified.value!=""
      }
      else
      {
         Tverified.value="";
      }
    }
  }
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
    Astatus.innerHTML = "permission is not allowed*";
    Astatus.style.display = "block";
    Astatus.style.animation = "NoStatus 555ms ease-in-out infinite";
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
      Astatus.innerHTML = "android configuration is completed";
      ABox.style.backgroundColor = "#ccffcc";
      Astatus.style.display = "block";
      Astatus.innerHTML = "android configuration is completed";
      Astatus.style.animation = "Status 555ms ease-in-out infinite";
      ABox.style.border = "2px solid green";
      ABox.style.boxShadow = "0 0 20px 2px #32cd32";
      Tstatus.style.display = "block";
      Tstatus.innerHTML = "permission is allowed";
      Tstatus.style.animation = "NoStatus 555ms ease-in-out infinite";
      
    } else {
      Astatus.style.display = "none";
      ABox.style.backgroundColor = "#ffffff";
      ABox.style.border = "none";
      ABox.style.boxShadow = "0 0 12px 1px #000";
      TBox.style.backgroundColor = "#ffffff";
      TBox.style.border = "none";
      TBox.style.boxShadow = "0 0 12px 1px #000";
      Tstatus.style.display = "block";
      Tstatus.innerHTML = "android configuration is completed";
      Tstatus.style.animation = "NoStatus 555ms ease-in-out infinite";
      
    }
  }
});
//**####**//
//*                    CONFIGURATION FOR TERMUX                    *//
let TBox = document.querySelector(".app-termuxadbconnection-box");
let TCheckbox = document.querySelectorAll(".termuxadbconnection-checkboxes");
let Tstatus = document.querySelector("#T-status");
let Tverified = document.querySelector(".termuxadbconnection-verified");

//**####**////
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
      if (Tverified.value === "YesNo") {
        Tverified.value != "";
      } else {
        Tverified.value = "";
      }
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
    Tstatus.innerHTML = "permission is not allowed";
    Tstatus.style.display = "block";
    Tstatus.style.animation = "NoStatus 555ms ease-in-out infinite";
    Tverified.value = "";
  }
  //
  Tverified.addEventListener("mouseout", () => {
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
      if (
        Tverified.value === "yes" ||
        Tverified.value === "Yes" ||
        Tverified.value === "YES"
      ) {
        Tstatus.style.display != "none";
      } else {
        Tstatus.style.display = "none";
      }
    }
  });
  //
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
      Tstatus.innerHTML = " Termux configuration is completed";
      Tstatus.style.display = "block";
      Tstatus.style.animation = "Status 555ms ease-in-out infinite";
      TBox.style.border = "2px solid green";
      TBox.style.backgroundColor = "#ccffcc";
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
    });
    Pstatus.innerHTML = "requirements are mendatory";
    Pstatus.style.display = "block";
    Pstatus.style.animation = "NoStatus 555ms ease-in-out infinite";
  }
});
ABox.addEventListener("mouseover", () => {
  if (
    !download.checked ||
    !extract.checked ||
    !copy.checked ||
    !cdrive.checked ||
    !paste.checked ||
    !cmd.checked ||
    !adb.checked
  ) {
    Astatus.innerHTML = "platformtool is mendatory";
    Astatus.style.display = "block";
    Astatus.style.animation = "NoStatus 555ms ease-in-out infinite";
  }
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
    Tstatus.innerHTML = "android configuration is mendatory";
    Tstatus.style.display = "block";
    Tstatus.style.animation = "NoStatus 555ms ease-in-out infinite";
  }
});
plBox.addEventListener("touchstart", () => {
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
    });
    Pstatus.innerHTML = "requirements are mendatory";
    Pstatus.style.display = "block";
    Pstatus.style.animation = "NoStatus 555ms ease-in-out infinite";
  }
});
ABox.addEventListener("touchstart", () => {
  if (
    !download.checked ||
    !extract.checked ||
    !copy.checked ||
    !cdrive.checked ||
    !paste.checked ||
    !cmd.checked ||
    !adb.checked
  ) {
    Astatus.innerHTML = "platformtool is mendatory";
    Astatus.style.display = "block";
    Astatus.style.animation = "NoStatus 555ms ease-in-out infinite";
  }
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
    ACheckbox.forEach((ACheckbox) => {
      ACheckbox.style.pointerEvents = "auto";
    });
  } else {
    ACheckbox.forEach((ACheckbox) => {
      ACheckbox.style.pointerEvents = "none";
    });
  }
});
TBox.addEventListener("touchstart", () => {
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
    Tstatus.innerHTML = "android configuration is mendatory";
    Tstatus.style.display = "block";
    Tstatus.style.animation = "NoStatus 555ms ease-in-out infinite";
  }
});
