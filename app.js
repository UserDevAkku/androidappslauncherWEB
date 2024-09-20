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
const phoneChecked=(phone)=>{
    if(phone.checked)
        {
        phone.style.boxShadow="0 0 2px 2px #013220"
        phoneYes.innerText="yes";
        phoneYes.style.color="#013220"
        
    }
    else
    {
        phone.style.boxShadow="none";
        phoneYes.innerText="no";
        phoneYes.style.color="red"
    }
}
phone.addEventListener("click",()=>{
    phoneChecked(phone,phoneYes);
})

//--yesno-pc-check
const pcChecked=(pc)=>{
    if(pc.checked)
        {
        pc.style.boxShadow="0 0 2px 2px #013220 inset"
        pcYes.innerText="yes";
        pcYes.style.color="#013220"
    }
    else
    {
        pc.style.boxShadow="none";
        pcYes.innerText="no";
        pcYes.style.color="red"
    }
}
pc.addEventListener("click",()=>{
    pcChecked(pc,pcYes);
})
//--yesno-usb-check
const usbChecked=(usb)=>{
    if(usb.checked)
        {
        usb.style.boxShadow="0 0 2px 2px #013220 inset"
        usbYes.innerText="yes";
        usbYes.style.color="#013220"
    }
    else
    {
        usb.style.boxShadow="none";
        usbYes.innerText="no";
        usbYes.style.color="red"
    }
}
usb.addEventListener("click",()=>{
    usbChecked(usb,usbYes);
})


//--yesno-sdk-check
const sdkChecked=(sdk)=>{
    if(sdk.checked)
        {
        sdk.style.boxShadow="0 0 2px 2px #013220 inset"
       sdkYes.innerText="yes";
        sdkYes.style.color="#013220"
        sdkLink.style.display="none"
    }
    else
    {
        sdk.style.boxShadow="none";
        sdkYes.innerText="no";
        sdkYes.style.color="red"
        
    }
}

sdk.addEventListener("click",()=>{
    sdkChecked(sdk,sdkYes);
})

//--yesno-termux-check
const termuxChecked=(termux)=>{
    if(termux.checked)
        {
        termux.style.boxShadow="0 0 2px 2px #013220 inset"
        termuxYes.innerText="yes";
        termuxYes.style.color="#013220"
    }
    else
    {
        termux.style.boxShadow="none";
        termuxYes.innerText="no";
        termuxYes.style.color="red"
    }
}
termux.addEventListener("click",()=>{
    termuxChecked(termux,termuxYes);
})

//--show-termux-link
termux.addEventListener("mouseover",()=>{
    if (termuxYes.innerText==="no")
        {
        termuxLink.style.display="display"
        termuxLink.style.display="inline"
        termux.disabled=true;
   }
},{once:true})  // {once:true} it will trigger the event handler only one time

//--hide-termux-link
termuxLink.addEventListener("click",()=>{
   termuxLink.style.display="none"
   termux.disabled=false;
})

//--show-sdk-link
sdk.addEventListener("mouseover",()=>{
    sdkLink.style.display="block"
    sdkLink.style.display="inline"
    sdk.disabled=true;
},{once:true})// {once:true} it will trigger the event handler only one time

//--hide-sdk-link
sdkLink.addEventListener("click",()=>{
    sdkLink.style.display="none"
    sdk.disabled=false;
 })

 //--reqbox--css
chkbox.forEach((chkbox)=>{
chkbox.addEventListener("click",()=>{
    if(phone.checked && pc.checked && usb.checked && termux.checked && sdk.checked){
        reqBox.style.animation="paused"
        reqBox.style.boxShadow="0 0 2px 3px green"       
        reqBox.style.backgroundColor="#e6ffe6"
    }
    else{
        reqBox.style.animation="requirements-box 999ms ease-in-out infinite both"
        reqBox.style.backgroundColor="hsl(0, 38%, 75%)"
 
    }
})
})

const pl_dl=document.querySelector("#pl-dl")
const pl_extract=document.querySelector("#pl-extract")
const pl_copy=document.querySelector("#pl-copy")
const pl_cdrive=document.querySelector("#pl-cdrive")
const pl_paste=document.querySelector("#pl-paste")
const pl_version=document.querySelector("#pl-ver")


// Function for pl_dl
const dlChecked = (pl_dl) => {
    if (pl_dl.checked) {
        pl_dl.style.boxShadow = "0 0 1px 1px #013220";
    } else {
        pl_dl.style.boxShadow = "none";
    }
};
pl_dl.addEventListener("click", () => {
    dlChecked(pl_dl);
});

// Function for pl_extract
const extractChecked = (pl_extract) => {
    if (pl_extract.checked) {
        pl_extract.style.boxShadow = "0 0 1px 1px #013220";
    } else {
        pl_extract.style.boxShadow = "none";
    }
};
pl_extract.addEventListener("click", () => {
    extractChecked(pl_extract);
});

// Function for pl_copy
const copyChecked = (pl_copy) => {
    if (pl_copy.checked) {
        pl_copy.style.boxShadow = "0 0 1px 1px #013220";
    } else {
        pl_copy.style.boxShadow = "none";
    }
};
pl_copy.addEventListener("click", () => {
    copyChecked(pl_copy);
});

// Function for pl_cdrive
const cdriveChecked = (pl_cdrive) => {
    if (pl_cdrive.checked) {
        pl_cdrive.style.boxShadow = "0 0 1px 1px #013220";
    } else {
        pl_cdrive.style.boxShadow = "none";
    }
};
pl_cdrive.addEventListener("click", () => {
    cdriveChecked(pl_cdrive);
});

// Function for pl_paste
const pasteChecked = (pl_paste) => {
    if (pl_paste.checked) {
        pl_paste.style.boxShadow = "0 0 1px 1px #013220";
    } else {
        pl_paste.style.boxShadow = "none";
    }
};
pl_paste.addEventListener("click", () => {
    pasteChecked(pl_paste);
});

// Function for pl_version
const versionChecked = (pl_version) => {
    if (pl_version.checked) {
        pl_version.style.boxShadow = "0 0 1px 1px #013220";
    } else {
        pl_version.style.boxShadow = "none";
    }
};
pl_version.addEventListener("click", () => {
    versionChecked(pl_version);
});



