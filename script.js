$(document).ready(function(){
    $("#username-error-message").hide();
    $("#email-error-message").hide();
    $("#address-error-message").hide();
    $("#country-error-message").hide();
    $("#kodepos-error-message").hide();
    $("#password-error-message").hide();
    $("#retypePwd-error-message").hide();

    const error_username = false;
    const error_email = false;

    $("#username").keyup(function(){
        const name = $("#username").val();
        const regEx = /^[a-zA-Z ]*$/;

        if (name.length == 0) {
            $("#username-error-message").html("Nama harus diisi");
            $("#username-error-message").show();
            $("#username").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_username = true
        } else {
            $("#username-error-message").hide();
            $("#username").css({"border": "", "background-color": ""});
        }
        if (name.length < 3 || name.length > 50) {
            $("#username-error-message").html("Nama min. 3 karakter & max. 50 karakter");
            $("#username-error-message").show();
            $("#username").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_username = true
        } else {
            $("#username-error-message").hide();
            $("#username").css({"border": "", "background-color": ""});
        }

        if (!name.match(regEx) != ' ') {
            $("#username-error-message").html("Nama hanya boleh berisi alfabet dan spasi");
            $("#username-error-message").show();
            $("#username").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_username = true 
        } else {
            $("#username-error-message").hide();
            $("#username").css({"border": "", "background-color": ""});
        }        
    });

    $("#email").keyup(function(){
        const email = $("#email").val();
        const mailReq = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        
        if (email.length == 0) {
            $("#email-error-message").html("email harus diisi");
            $("#email-error-message").show();
            $("#email").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_email = true
        } else {
            $("#email-error-message").hide();
            $("#email").css({"border": "", "background-color": ""});
        }

        if (!email.match(mailReq) != '') {
            $("#email-error-message").html("email tidak valid");
            $("#email-error-message").show();
            $("#email").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_email = true
        } else {
            $("#email-error-message").hide();
            $("#email").css({"border": "", "background-color": ""});
        }
    });

    $("#submit").click(function(){

        if (error_username == false && error_email == false) {
            return true;
        } else {
            return false;
        }

    })
})
