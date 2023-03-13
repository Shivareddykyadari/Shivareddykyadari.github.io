var tablinks=document.getElementsByClassName('tab-links')
var tabcontents=document.getElementsByClassName('tab-contents')

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-200px"
}

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "kyadarishivareddy1430@gmail.com",
        Password : "8869FC2989A861D2EF5D2ED762CA6508076D",
        To : 'kyadarishivareddy1430@gmail.com',
        From : document.getElementById("email").value,
        Subject : "subject",
        Body : "Name: " +document.getElementById("Name").value
                
    }).then(
      message => alert("message sent successfully")
    );
}

