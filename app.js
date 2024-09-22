const reqBox = document.querySelector(".requirements-box"); // Select the element with class 'requirements-box'
const rcNext = document.querySelector(".next-1"); // Select the element with class 'next-1' (Requirement Completed message)
const chkbox = document.querySelectorAll(".chkbox"); // Select all elements with class 'chkbox'
const phone = document.querySelector("#p"); // Select the element with ID 'p' (Phone)
const pc = document.querySelector("#pc"); // Select the element with ID 'pc' (PC)
const usb = document.querySelector("#usb"); // Select the element with ID 'usb' (USB)
const sdk = document.querySelector("#sdk"); // Select the element with ID 'sdk' (SDK)
const termux = document.querySelector("#T"); // Select the element with ID 'T' (Termux)
const phoneYes = document.querySelector("#phone-yes"); // Select the element with ID 'phone-yes' (Phone confirmation)
const pcYes = document.querySelector("#pc-yes"); // Select the element with ID 'pc-yes' (PC confirmation)
const usbYes = document.querySelector("#usb-yes"); // Select the element with ID 'usb-yes' (USB confirmation)
const sdkYes = document.querySelector("#sdk-yes"); // Select the element with ID 'sdk-yes' (SDK confirmation)
const termuxYes = document.querySelector("#termux-yes"); // Select the element with ID 'termux-yes' (Termux confirmation)
const sdkLink = document.querySelector("#sdk-link"); // Select the element with ID 'sdk-link' (SDK link)
const termuxLink = document.querySelector("#termux-link"); // Select the element with ID 'termux-link' (Termux link)
const sdkContainer = document.querySelector(".sdk-container"); // Select the element with class 'sdk-container'
const sdkBox = document.querySelector(".sdk-box"); // Select the element with class 'sdk-box'
const pl_dl = document.querySelector("#pl-dl"); // Select the element with ID 'pl-dl'
const pl_extract = document.querySelector("#pl-extract"); // Select the element with ID 'pl-extract'
const pl_copy = document.querySelector("#pl-copy"); // Select the element with ID 'pl-copy'
const pl_cdrive = document.querySelector("#pl-cdrive"); // Select the element with ID 'pl-cdrive'
const pl_paste = document.querySelector("#pl-paste"); // Select the element with ID 'pl-paste'
const pl_version = document.querySelector("#pl-ver"); // Select the element with ID 'pl-ver'
const plInstallStatus = document.querySelector(".pl-install-status"); // Select the element with class 'pl-install-status'
const plYes = document.querySelector("#pl-yes-no"); // Select the element with ID 'pl-yes-no'
const pl_chkbox = document.querySelectorAll(".pl-chkbox"); // Select all elements with class 'pl-chkbox'
const plNext = document.querySelector(".pl-Next"); // Select the element with class 'pl-Next'
const plcontactMe = document.querySelector(".contact"); // Select the element with class 'contact'
const plcontactLogo = document.querySelector(".contact-logo"); // Select the element with class 'contact-logo'

//--yesno-phone-check
const phoneChecked = (phone) => {
  // Function to handle phone checkbox checked state
  if (phone.checked) {
    // If phone is checked, apply greenyellow box shadow and adjust styles
    phone.style.boxShadow = "0 0 2px 2px greenyellow inset";
    phoneYes.innerText = "yes";
    phoneYes.style.color = "#013220";
    phone.style.height = "15px";
    phone.style.width = "15px";
    phone.style.animation = "paused";
  } else {
    // If phone is unchecked, remove styles and reset animation
    phone.style.boxShadow = "none";
    phoneYes.innerText = "no";
    phoneYes.style.color = "red";
    phone.style.animation = "requirements-box 555ms ease-in-out infinite both";
  }
};
phone.addEventListener("click", () => {
  // Add event listener for phone checkbox click
  phoneChecked(phone);
});

//--yesno-pc-check
const pcChecked = (pc) => {
  // Function to handle PC checkbox checked state
  if (pc.checked) {
    pc.style.boxShadow = "0 0 2px 2px greenyellow inset";
    pcYes.innerText = "yes";
    pcYes.style.color = "#013220";
    pc.style.height = "15px";
    pc.style.width = "15px";
    pc.style.animation = "paused";
  } else {
    pc.style.boxShadow = "none";
    pcYes.innerText = "no";
    pcYes.style.color = "red";
    pc.style.animation = "requirements-box 555ms ease-in-out infinite both";
  }
};
pc.addEventListener("click", () => {
  pcChecked(pc);
});

//--yesno-usb-check
const usbChecked = (usb) => {
  // Function to handle USB checkbox checked state
  if (usb.checked) {
    usb.style.boxShadow = "0 0 2px 2px greenyellow inset";
    usbYes.innerText = "yes";
    usbYes.style.color = "#013220";
    usb.style.height = "15px";
    usb.style.width = "15px";
    usb.style.animation = "paused";
  } else {
    usb.style.boxShadow = "none";
    usbYes.innerText = "no";
    usbYes.style.color = "red";
    usb.style.animation = "requirements-box 555ms ease-in-out infinite both";
  }
};
usb.addEventListener("click", () => {
  usbChecked(usb);
});

//--yesno-sdk-check
const sdkChecked = (sdk) => {
  // Function to handle SDK checkbox checked state
  if (sdk.checked) {
    sdk.style.boxShadow = "0 0 2px 2px greenyellow inset";
    sdkYes.innerText = "yes";
    sdkYes.style.color = "#013220";
    sdkLink.style.display = "none";
    sdk.style.height = "15px";
    sdk.style.width = "15px";
    sdk.style.animation = "paused";
  } else {
    sdk.style.boxShadow = "none";
    sdkYes.innerText = "no";
    sdkYes.style.color = "red";
    sdk.style.animation = "requirements-box 555ms ease-in-out infinite both";
  }
};
sdk.addEventListener("click", () => {
  sdkChecked(sdk);
});

//--yesno-termux-check
const termuxChecked = (termux) => {
  // Function to handle Termux checkbox checked state
  if (termux.checked) {
    termux.style.boxShadow = "0 0 2px 2px greenyellow inset";
    termuxYes.innerText = "yes";
    termuxYes.style.color = "#013220";
    termux.style.animation = "paused";
  } else {
    termux.style.boxShadow = "none";
    termuxYes.innerText = "no";
    termuxYes.style.color = "red";
    termux.style.height = "15px";
    termux.style.width = "15px";
    termux.style.animation = "requirements-box 555ms ease-in-out infinite both";
  }
};
termux.addEventListener("click", () => {
  termuxChecked(termux);
});

//--show-termux-link
termux.addEventListener(
  "mouseover",
  () => {
    // Show Termux link if unchecked and mouseover
    if (termuxYes.innerText === "no") {
      termuxLink.style.display = "display";
      termuxLink.style.display = "inline";
      termux.disabled = true;
    }
  },
  { once: true }
);

//--hide-termux-link
termuxLink.addEventListener("click", () => {
  // Hide Termux link on click
  termuxLink.style.display = "none";
  termux.disabled = false;
});

//--show-sdk-link
sdk.addEventListener(
  "mouseover",
  () => {
    // Show SDK link on mouseover
    sdkLink.style.display = "block";
    sdkLink.style.display = "inline";
    sdk.disabled = true;
  },
  { once: true }
);

//--hide-sdk-link
sdkLink.addEventListener("click", () => {
  // Hide SDK link on click
  sdkLink.style.display = "none";
  sdk.disabled = false;
});

//--requirements completed
chkbox.forEach((chkbox) => {
  chkbox.addEventListener("click", () => {
    // Iterate over checkboxes to check if requirements are met
    if (
      phone.checked &&
      pc.checked &&
      usb.checked &&
      termux.checked &&
      sdk.checked
    ) {
      reqBox.style.animation = "paused";
      reqBox.style.boxShadow = "0 0 2px 3px greenyellow";
      reqBox.style.backgroundColor = "#e6ffe6";
      rcNext.style.display = "block";
      rcNext.innerText = "** Requirements are completed **";
      rcNext.style.marginBottom = "2px";
      rcNext.style.color = "red";
      phone.style.pointerEvents = "none";
      pc.style.pointerEvents = "none";
      usb.style.pointerEvents = "none";
      termux.style.pointerEvents = "none";
      sdk.style.pointerEvents = "none";
    } else {
      reqBox.style.animation =
        "requirements-box 999ms ease-in-out infinite both";
      reqBox.style.backgroundColor = "hsl(0, 38%, 75%)";
    }
    if (
      !phone.checked &&
      !pc.checked &&
      !usb.checked &&
      !termux.checked &&
      !sdk.checked
    ) {
      reqBox.style.backgroundColor = "#e9ecef";
      reqBox.style.boxShadow = "0 0 20px 1px aqua";
      phone.style.animation = "paused";
      pc.style.animation = "paused";
      usb.style.animation = "paused";
      termux.style.animation = "paused";
      sdk.style.animation = "paused";
      reqBox.style.animation = "paused";
    }
  });
});

reqBox.addEventListener("mouseover", () => {
  if (
    phone.checked &&
    pc.checked &&
    usb.checked &&
    termux.checked &&
    sdk.checked
  ) {
    setTimeout(()=>{alert("Requirements have completed")},1);
  }
});

pl_chkbox.forEach((pl_chkbox) => {
  pl_chkbox.addEventListener("click", () => {
    if (pl_dl.checked) {
      pl_dl.style.boxShadow = "0 0 3px 3px greenyellow";
      pl_dl.style.animation = "paused";
      pl_dl.style.height = "18px";
      pl_dl.style.width = "18px";
    } else if (!pl_dl.checked) {
      pl_dl.style.boxShadow = "none";
      pl_dl.style.animation =
        "requirements-box 555ms ease-in-out infinite both";
      pl_dl.style.height = "12px";
      pl_dl.style.width = "12px";
    }
    if (pl_extract.checked) {
      pl_extract.style.boxShadow = "0 0 3px 3px greenyellow"; // Changed here
      pl_extract.style.height = "18px";
      pl_extract.style.width = "18px";
      pl_extract.style.animation = "paused";
    } else if (!pl_extract.checked) {
      pl_extract.style.boxShadow = "none";
      pl_extract.style.animation =
        "requirements-box 555ms ease-in-out infinite both";
      pl_extract.style.height = "12px";
      pl_extract.style.width = "12px";
    }
    if (pl_copy.checked) {
      pl_copy.style.boxShadow = "0 0 3px 3px greenyellow"; // Changed here
      pl_copy.style.height = "18px";
      pl_copy.style.width = "18px";
      pl_copy.style.animation = "paused";
    } else if (!pl_copy.checked) {
      pl_copy.style.boxShadow = "none";
      pl_copy.style.animation =
        "requirements-box 555ms ease-in-out infinite both";
      pl_copy.style.height = "12px";
      pl_copy.style.width = "12px";
    }
    if (pl_cdrive.checked) {
      pl_cdrive.style.boxShadow = "0 0 3px 3px greenyellow"; // Changed here
      pl_cdrive.style.height = "18px";
      pl_cdrive.style.width = "18px";
      pl_cdrive.style.animation = "paused";
    } else if (!pl_cdrive.checked) {
      pl_cdrive.style.boxShadow = "none";
      pl_cdrive.style.animation =
        "requirements-box 555ms ease-in-out infinite both";
      pl_cdrive.style.height = "12px";
      pl_cdrive.style.width = "12px";
    }
    if (pl_paste.checked) {
      pl_paste.style.boxShadow = "0 0 3px 3px greenyellow"; // Changed here
      pl_paste.style.height = "18px";
      pl_paste.style.width = "18px";
      pl_paste.style.animation = "paused";
    } else if (!pl_paste.checked) {
      pl_paste.style.boxShadow = "none";
      pl_paste.style.animation =
        "requirements-box 555ms ease-in-out infinite both";
      pl_paste.style.height = "12px";
      pl_paste.style.width = "12px";
    }
    if (pl_version.checked) {
      pl_version.style.boxShadow = "0 0 3px 3px greenyellow";
      pl_version.style.height = "18px";
      pl_version.style.width = "18px";
      pl_version.style.animation = "paused";
    } else if (!pl_version.checked) {
      pl_version.style.boxShadow = "none";
      pl_version.style.animation =
        "requirements-box 555ms ease-in-out infinite both";
      pl_version.style.height = "12px";
      pl_version.style.width = "12px";
    }
    if (
      !pl_dl.checked ||
      !pl_extract.checked ||
      !pl_copy.checked ||
      !pl_cdrive.checked ||
      !pl_paste.checked ||
      !pl_version.checked
    ) {
      plInstallStatus.value = "";
      sdkBox.style.animation =
        "requirements-box 999ms ease-in-out infinite both";
      plNext.innerHTML = "";
      plcontactLogo.style.display = "none";
      sdkBox.style.backgroundColor = "hsl(0, 38%, 75%)";
    }
    if (
      !pl_dl.checked &&
      !pl_extract.checked &&
      !pl_copy.checked &&
      !pl_cdrive.checked &&
      !pl_paste.checked &&
      !pl_version.checked
    ) {
      sdkBox.style.backgroundColor = "#e9ecef";
      sdkBox.style.boxShadow = "0 0 20px 1px aqua";
      pl_dl.style.animation = "paused";
      pl_extract.style.animation = "paused";
      pl_copy.style.animation = "paused";
      pl_cdrive.style.animation = "paused";
      pl_paste.style.animation = "paused";
      pl_version.style.animation = "paused";
      sdkBox.style.animation = "paused";
    }
  });
});
plInstallStatus.addEventListener("input", () => {
  if (
    pl_dl.checked &&
    pl_extract.checked &&
    pl_copy.checked &&
    pl_cdrive.checked &&
    pl_paste.checked &&
    pl_version.checked &&
    plInstallStatus.value === "yes"
  ) {
    plNext.style.display = "block";
    plNext.style.color = "red";
    plNext.innerHTML = "** Platform tool has installed **";
    plNext.style.textAlign = "center";
    plNext.style.marginBottom = "2px";
    sdkBox.style.animation = "paused";
    sdkBox.style.boxShadow = "0 0 2px 3px greenyellow";
    sdkBox.style.backgroundColor = "#e6ffe6";
  } else {
    sdkBox.style.animation = "requirements-box 999ms ease-in-out infinite both";
    sdkBox.style.backgroundColor = "hsl(0, 38%, 75%)";
    plNext.innerHTML = "";
  }
  if (
    pl_dl.checked &&
    pl_extract.checked &&
    pl_copy.checked &&
    pl_cdrive.checked &&
    pl_paste.checked &&
    pl_version.checked &&
    plInstallStatus.value === "no"
  ) {
    plNext.style.display = "none";
    plcontactLogo.style.display = "block";
    plcontactMe.style.paddingTop = "4px";
    plcontactLogo.style.display = "grid";
    plcontactLogo.style.placeContent = "center";
    sdkBox.style.animation = "requirements-box 999ms ease-in-out infinite both";
    sdkBox.style.backgroundColor = "hsl(0, 38%, 75%)";
  } else {
    plcontactLogo.style.display = "none";
  }
  if (!pl_dl.checked ||
      !pl_extract.checked ||
      !pl_copy.checked ||
      !pl_cdrive.checked ||
      !pl_paste.checked ||
      !pl_version.checked && 
    plInstallStatus.value === "yes" ||
    plInstallStatus.value === "no" || plInstallStatus.value===""
  ) {
    sdkBox.style.animation = "requirements-box 999ms ease-in-out infinite both";
    sdkBox.style.backgroundColor = "hsl(0, 38%, 75%)";
  }

  if (
    !pl_dl.checked &&
    !pl_extract.checked &&
    !pl_copy.checked &&
    !pl_cdrive.checked &&
    !pl_paste.checked &&
    !pl_version.checked 
   )
   {
   alert("**installation proccess is not started yet**")
   plInstallStatus.value=""
   sdkBox.style.animation = "paused";
  sdkBox.style.backgroundColor="#e9ecef";
 sdkBox.boxShadow="0 0 20px 1px aqua";

  }
});

const disbale_sdkBOX = () => {
  if (
    phone.checked &&
    pc.checked &&
    usb.checked &&
    termux.checked &&
    sdk.checked
  ) {
    (pl_dl.style.pointerEvents = "auto"),
      (pl_extract.style.pointerEvents = "auto"),
      (pl_copy.style.pointerEvents = "auto"),
      (pl_cdrive.style.pointerEvents = "auto"),
      (pl_paste.style.pointerEvents = "auto"),
      (pl_version.style.pointerEvents = "auto"),
      (plInstallStatus.style.pointerEvents = "auto");
  } else {
    alert("** Permission is not allowed **");
  }

  if (
    pl_dl.checked &&
    pl_extract.checked &&
    pl_copy.checked &&
    pl_cdrive.checked &&
    pl_paste.checked &&
    pl_version.checked &&
    plInstallStatus.value === "yes"
  ) {
    alert("** Platform tool has installed **");
    (pl_dl.style.pointerEvents = "none"),
      (pl_extract.style.pointerEvents = "none"),
      (pl_copy.style.pointerEvents = "none"),
      (pl_cdrive.style.pointerEvents = "none"),
      (pl_paste.style.pointerEvents = "none"),
      (pl_version.style.pointerEvents = "none"),
      (plInstallStatus.style.pointerEvents = "none");

  }
}
sdkBox.addEventListener("mouseover", () => {
  disbale_sdkBOX();
});

