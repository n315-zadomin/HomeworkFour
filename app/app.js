// importing all content from model.js to app.js
import * as MODEL from "./model.js";

function route () {
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#", "");
    let pageContent = pageName + "Content";


    if(pageName == "") {
        pageContent = "homeContent";
    }

MODEL.modelPageName(pageContent);
  
}

function init() {
    $("#submit").on("click", function (e) {
        e.preventDefault();
        let fn = $("#fName").val();
        let ln = $("#lName").val();
        let em = $("#email").val();
        let pass = $("#password").val();
    
        if (fn == "") {
         Swal.fire('Please enter your first name');
        } else if (ln == "") {
            Swal.fire('Please enter your last name');
        }else if (em == "") {
            Swal.fire('Please enter your email');
        }  else if (pass == "") {
            Swal.fire('Please enter your password');
        } else {
            Swal.fire({
                title: 'Yay!',
                text: 'You are all logged in :)',
                imageUrl: 'images/dogygroom-removebg-preview.png',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Dog Logo',
              });
    
            $("#fName").val("");
            $("#lName").val("");
            $("#email").val("");
            $("#password").val("");
    
        }
        
    });
    
    }

function initListeners() {
    $(window).on("hashchange",route);
    route ();
}

$(document).ready(function (){

    initListeners();
    init();
   
});