$(document).ready(function(){
    $("#username-error-message").hide();
    $("#email-error-message").hide();
    $("#gender-error-message").hide();
    $("#address-error-message").hide();
    $("#country-error-message").hide();
    $("#kodepos-error-message").hide();
    $("#password-error-message").hide();
    $("#retypePwd-error-message").hide();

    var error_username = false;
    var error_email = false;
    var error_gender = false;
    var error_address = false;

    $("#username").keyup(function(){
        check_username();
    });
    $("#email").keyup(function () {
        check_email();
    });

    function check_username(){
        const name = $("#username").val();
        const regEx = /^[a-zA-Z ]*$/;
        if(name.length == 0) {
            $("#username-error-message").html("Nama harus diisi");
            $("#username-error-message").show();
            $("#username").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_username = true
        } else {
            $("#username-error-message").hide();
            $("#username").css({"border": "", "background-color": ""});
            if (name.length < 3 || name.length > 50) {
                $("#username-error-message").html("Nama min. 3 karakter & max. 50 karakter");
                $("#username-error-message").show();
                $("#username").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            } else {
                $("#username-error-message").hide();
                if (!name.match(regEx) != ' ') {
                    $("#username-error-message").html("Nama hanya boleh berisi alfabet dan spasi");
                    $("#username-error-message").show();
                    $("#username").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
                }
            }
        }
    }

    function check_email(){
        const email = $("#email").val();
        const mailReq = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if ($("#email").val() == "") {
            $("#email-error-message").html("email harus diisi");
            $("#email-error-message").show();
            $("#email").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_email = true;
        } else {
            $("#email-error-message").hide();
            $("#email").css({"border": "", "background-color": ""});
            if (!email.match(mailReq) != '') {
                $("#email-error-message").html("email tidak valid");
                $("#email-error-message").show();
                $("#email").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
                error_email = true
            } else {
                $("#email-error-message").hide();
                $("#email").css({"border": "", "background-color": ""});
                if ($("#email").val().length > 50) {
                    $("#email-error-message").html("maksimal 50 karakter");
                    $("#email-error-message").show();
                    $("#email").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
                    error_email = true;                    
                } else {
                    $("#email-error-message").hide();
                    $("#email").css({"border": "", "background-color": ""});                    
                }
            }
        }
    }

    $("#submit").click(function(){
        error_username = false;
        error_email = false;

        check_username();
        check_email();

        if(error_username == false && error_email == false){
            return true;
        } else {
            return false;
        }
    })
    
})
