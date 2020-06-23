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


    $("#submit").click(function () {
        const name = $("#username").val();
        if(name.length == 0) {
            $("#username-error-message").html("Nama harus diisi");
            $("#username-error-message").show();
            $("#username").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_username = true;
        } else {
            $("#username-error-message").hide();
            $("#username").css({"border": "", "background-color": ""});
        }
        
        if ($("#email").val() == "") {
            $("#email-error-message").html("email harus diisi");
            $("#email-error-message").show();
            $("#email").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_email = true;
        } else {
            $("#email-error-message").hide();
            $("#email").css({"border": "", "background-color": ""});
        }

        const inputGender = $("input:checked").val();
        console.log('radio', inputGender);
        if ($('input').val().length == 0) {
            $("#gender-error-message").html("Silahkan pilih gender");
            $("#gender-error-message").show();
            error_gender = true;
        } else {
            $("#gender-error-message").hide();
        }

        if ($('#address').val().length == 0) {
            $("#address-error-message").html("Alamat harus diisi");
            $("#address-error-message").show();
            $("#address").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_address = true;
        } else {
            $("#address-error-message").hide();
            $("#address").css({"border": "", "background-color": ""});
        }

        const selectCountry = $("#country");
        if (selectCountry.val() == ""){
            $("#country-error-message").html("Negara harus dipilih");
            $("#country-error-message").show();
            $("#country").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
        } else {
            $("#country-error-message").hide();
            $("#country").css({"border": "", "background-color": ""});
        }

        const kodePos = $("#kodepos");
        if (kodePos.val() == ""){
            $("#kodepos-error-message").html("Kodepos harus diisi");
            $("#kodepos-error-message").show();
            $("#kodepos").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
        } else {
            $("#country-error-message").hide();
            $("#country").css({"border": "", "background-color": ""});
        }

    })

    
    $("#username").keyup(function(){
        const name = $("#username").val();
        const regEx = /^[a-zA-Z ]*$/;

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
    $("input").keyup(function () {
        const inputGender = $("input:checked").val();
        console.log('radio', inputGender);
        if ($('input').val().length == 0) {
            $("#gender-error-message").html("Silahkan pilih gender");
            $("#gender-error-message").show();
            error_gender = true;
        } else {
            $("#gender-error-message").hide();
        }
    })

    $("#address").keyup(function(){
        if ($('#address').val().length > 100) {
            $("#address-error-message").html("Alamat tidak lebih dari 100 karakter");
            $("#address-error-message").show();
            $("#address").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_address = true;
        } else {
            $("#address-error-message").hide();
            $("#address").css({"border": "", "background-color": ""});
        }        
    })

    $("#kodepos").keyup(function(){
        const kodePos = $("#kodepos");
        const numRegex = /^[0 - 9]*$/;
        if (kodePos.match(numRegex) != '' && kodePos.length < 5) {
            $("#kodepos-error-message").html("Kodepos harus 5 karakter");
            $("#kodepos-error-message").show();
            $("#kodepos").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_address = true;
        } else {
            $("#address-error-message").hide();
            $("#address").css({"border": "", "background-color": ""});
        }                 
    })
})
