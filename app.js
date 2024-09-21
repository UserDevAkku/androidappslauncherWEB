const reqBox=document.querySelector(".requirements-box")
const nextBtn=document.querySelector(".next")
const chkbox=document.querySelectorAll(".chkbox")
const phone=document.querySelector("#p")
const pc=document.querySelector("#pc")
const usb=document.querySelector("#usb")
const sdk=document.querySelector("#sdk")
const termux=document.querySelector("#T")
const phoneYes=document.querySelector("#phone-yes")
const pcYes=document.querySelector("#pc-yes")
const usbYes=document.querySelector("#usb-yes")
const sdkYes=document.querySelector("#sdk-yes")
const termuxYes=document.querySelector("#termux-yes")
const sdkLink=document.querySelector("#sdk-link")
const termuxLink=document.querySelector("#termux-link")

//--yesno-phone-check
const phoneChecked = (phone) => {
    if (phone.checked) {
        phone.style.boxShadow = "0 0 2px 2px greenyellow inset";
        phoneYes.innerText = "yes";
        phoneYes.style.color = "#013220";
        phone.style.height = "15px";
        phone.style.width = "15px";
        phone.style.animation="paused"
    } else {
        phone.style.boxShadow = "none";
        phoneYes.innerText = "no";
        phoneYes.style.color = "red";
        phone.style.animation="requirements-box 555ms ease-in-out infinite both"
    }
};
phone.addEventListener("click", () => {
    phoneChecked(phone);
});

//--yesno-pc-check
const pcChecked = (pc) => {
    if (pc.checked) {
        pc.style.boxShadow = "0 0 2px 2px greenyellow inset"; // Changed here
        pcYes.innerText = "yes";
        pcYes.style.color = "#013220";
        pc.style.height = "15px";
        pc.style.width = "15px";
        pc.style.animation="paused"
        
    } else {
        pc.style.boxShadow = "none";
        pcYes.innerText = "no";
        pcYes.style.color = "red";
        pc.style.animation="requirements-box 555ms ease-in-out infinite both"
    }
};
pc.addEventListener("click", () => {
    pcChecked(pc);
});

//--yesno-usb-check
const usbChecked = (usb) => {
    if (usb.checked) {
        usb.style.boxShadow = "0 0 2px 2px greenyellow inset"; // Changed here
        usbYes.innerText = "yes";
        usbYes.style.color = "#013220";
        usb.style.height = "15px";
        usb.style.width = "15px";
        usb.style.animation="paused"
    } else {
        usb.style.boxShadow = "none";
        usbYes.innerText = "no";
        usbYes.style.color = "red";
        usb.style.animation="requirements-box 555ms ease-in-out infinite both"
    }
};
usb.addEventListener("click", () => {
    usbChecked(usb);
});

//--yesno-sdk-check
const sdkChecked = (sdk) => {
    if (sdk.checked) {
        sdk.style.boxShadow = "0 0 2px 2px greenyellow inset"; // Changed here
        sdkYes.innerText = "yes";
        sdkYes.style.color = "#013220";
        sdkLink.style.display = "none";
        sdk.style.height = "15px";
        sdk.style.width = "15px";
        sdk.style.animation="paused"
    } else {
        sdk.style.boxShadow = "none";
        sdkYes.innerText = "no";
        sdkYes.style.color = "red";
        sdk.style.animation="requirements-box 555ms ease-in-out infinite both"
    }
};
sdk.addEventListener("click", () => {
    sdkChecked(sdk);
});

//--yesno-termux-check
const termuxChecked = (termux) => {
    if (termux.checked) {
        termux.style.boxShadow = "0 0 2px 2px greenyellow inset"; // Changed here
        termuxYes.innerText = "yes";
        termuxYes.style.color = "#013220";
        termux.style.animation="paused"
    } else {
        termux.style.boxShadow = "none";
        termuxYes.innerText = "no";
        termuxYes.style.color = "red";
        termux.style.height = "15px";
        termux.style.width = "15px";
        termux.style.animation="requirements-box 555ms ease-in-out infinite both"
    }
};
termux.addEventListener("click", () => {
    termuxChecked(termux);
});

//--show-termux-link
termux.addEventListener("mouseover", () => {
    if (termuxYes.innerText === "no") {
        termuxLink.style.display = "display";
        termuxLink.style.display = "inline";
        termux.disabled = true;
    }
}, { once: true });

//--hide-termux-link
termuxLink.addEventListener("click", () => {
    termuxLink.style.display = "none";
    termux.disabled = false;
});

//--show-sdk-link
sdk.addEventListener("mouseover", () => {
    sdkLink.style.display = "block";
    sdkLink.style.display = "inline";
    sdk.disabled = true;
}, { once: true });

//--hide-sdk-link
sdkLink.addEventListener("click", () => {
    sdkLink.style.display = "none";
    sdk.disabled = false;
});

//--reqbox--css
chkbox.forEach((chkbox) => {
    chkbox.addEventListener("click", () => {
        if (phone.checked && pc.checked && usb.checked && termux.checked && sdk.checked) {
            reqBox.style.animation = "paused";
            reqBox.style.boxShadow = "0 0 2px 3px greenyellow";
            reqBox.style.backgroundColor = "#e6ffe6";
        } else {
            reqBox.style.animation = "requirements-box 999ms ease-in-out infinite both";
            reqBox.style.backgroundColor = "hsl(0, 38%, 75%)";
        }
    });
});

const pl_dl = document.querySelector("#pl-dl");
const pl_extract = document.querySelector("#pl-extract");
const pl_copy = document.querySelector("#pl-copy");
const pl_cdrive = document.querySelector("#pl-cdrive");
const pl_paste = document.querySelector("#pl-paste");
const pl_version=document.querySelector("#pl-ver");
const sdkBox=document.querySelector(".sdk-box")
const plInstallStatus=document.querySelector(".pl-install-status")
const plYes=document.querySelector("#pl-yes-no")
const pl_chkbox=document.querySelectorAll(".pl-chkbox")
const plNext=document.querySelector(".pl-next")
const contactMe=document.querySelector(".contact-me");
const contactLogo=document.querySelector(".contact-logo");
const toolStatus=document.querySelector("#tool-status")
// Function for pl_dl
const dlChecked = (pl_dl) => {
    if (pl_dl.checked) {
        pl_dl.style.boxShadow = "0 0 2px 2px greenyellow inset"; // Changed here
        pl_dl.style.height = "15px";
        pl_dl.style.width = "15px";
        pl_dl.style.animation="paused"
    } else {
        pl_dl.style.boxShadow = "none";
        pl_dl.style.animation="requirements-box 555ms ease-in-out infinite both"
    }
};
pl_dl.addEventListener("click", () => {
    dlChecked(pl_dl);
});

// Function for pl_extract
const extractChecked = (pl_extract) => {
    if (pl_extract.checked) {
        pl_extract.style.boxShadow = "0 0 2px 2px greenyellow inset"; // Changed here
        pl_extract.style.height = "15px";
        pl_extract.style.width = "15px";
        pl_extract.style.animation="paused"
    } else {
        pl_extract.style.boxShadow = "none";
        pl_extract.style.animation="requirements-box 555ms ease-in-out infinite both"
    }
};
pl_extract.addEventListener("click", () => {
    extractChecked(pl_extract);
});

// Function for pl_copy
const copyChecked = (pl_copy) => {
    if (pl_copy.checked) {
        pl_copy.style.boxShadow = "0 0 2px 2px greenyellow inset"; // Changed here
        pl_copy.style.height = "15px";
        pl_copy.style.width = "15px";
        pl_copy.style.animation="paused"
    } else {
        pl_copy.style.boxShadow = "none";
        pl_copy.style.animation="requirements-box 555ms ease-in-out infinite both"
    }
};
pl_copy.addEventListener("click", () => {
    copyChecked(pl_copy);
});

// Function for pl_cdrive
const cdriveChecked = (pl_cdrive) => {
    if (pl_cdrive.checked) {
        pl_cdrive.style.boxShadow = "0 0 2px 2px greenyellow inset"; // Changed here
        pl_cdrive.style.height = "15px";
        pl_cdrive.style.width = "15px";
        pl_cdrive.style.animation="paused"
    } else {
        pl_cdrive.style.boxShadow = "none";
        pl_cdrive.style.animation="requirements-box 555ms ease-in-out infinite both"
    }
};
pl_cdrive.addEventListener("click", () => {
    cdriveChecked(pl_cdrive);
});

// Function for pl_paste
const pasteChecked = (pl_paste) => {
    if (pl_paste.checked) {
        pl_paste.style.boxShadow = "0 0 2px 2px greenyellow inset"; // Changed here
        pl_paste.style.height = "15px";
        pl_paste.style.width = "15px";
        pl_paste.style.animation="paused"
    } else {
        pl_paste.style.boxShadow = "none";
        pl_paste.style.animation="requirements-box 555ms ease-in-out infinite both"
    }
};
pl_paste.addEventListener("click", () => {
    pasteChecked(pl_paste);
});
// Function for pl_version
const versionChecked = (pl_version) => {
    if (pl_version.checked) {
        pl_version.style.boxShadow = "0 0 2px 2px greenyellow inset";
        pl_version.style.height="15px";
        pl_version.style.width="15px";
        pl_version.style.animation="paused"
    } else {
        pl_version.style.boxShadow = "none";
        pl_version.style.animation="requirements-box 555ms ease-in-out infinite both"
    }
};
pl_version.addEventListener("click", () => {
    versionChecked(pl_version);
});
plNext.addEventListener("click",()=>{
    if(pl_dl.checked && pl_extract.checked && pl_copy.checked && pl_cdrive.checked && pl_paste.checked &&  pl_version.checked && plInstallStatus.value==="yes"){
        alert("nice")
    }
    else if (plInstallStatus.value==="yes" || plInstallStatus.value===""){
        alert("sorry! you are not eligble to proceed the next step ")
    }
})
//
pl_chkbox.forEach((pl_chkbox)=>{
    pl_chkbox.addEventListener("click",()=>{
        if(pl_dl.checked && pl_extract.checked && pl_copy.checked && pl_cdrive.checked && pl_paste.checked &&  pl_version.checked ){
            plInstallStatus.disabled=false    
        }
    })
})
plInstallStatus.addEventListener("input",()=>{
    toolStatus.innerText="verifying the installation....";

        if(plInstallStatus.value==="yes")
            {
            toolStatus.innerText="INSTALLATION COMPLETED";
        }
        if(plInstallStatus.value==="no")
            {
            toolStatus.innerText="CONTACT US";
            }
        
})




