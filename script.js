$(document).ready(function(){
    $("#username-error-message").hide();
    $("#email-error-message").hide();
    $("#gender-error-message").hide();
    $("#address-error-message").hide();
    $("#country-error-message").hide();
    $("#kodepos-error-message").hide();
    $("#psw-error-message").hide();
    $("#retypePwd-error-message").hide();

    var error_username = false;
    var error_email = false;
    var error_gender = false;
    var error_address = false;
    var error_kodepos = false;
    var error_country = false;
    var error_password = false;

    $("#username").keyup(function(){
        check_username();
    });
    $("#email").keyup(function () {
        check_email();
    });
    $("#address").keyup(function () {
        check_address();
    });
    $("#kodepos").on('keyup', function () {
        var numVal = $(this).val().replace(/[^0-9.]/g, "");
        $(this).val(numVal);
        check_kodepos();
    });
    $("input[type='radio']").keyup(function () {
        check_gender();
    });
    $("#country").keyup(function(){
        check_country();
    })
    $("#psw").keyup(function () {
        check_password();
    })

    function check_username(){
        const name = $("#username").val();
        console.log('nama', name);
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
        console.log('email', email);
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

    function check_address(){
        const address = $("#address");
        console.log('Alamat', address);
        if ($(address).val().length > 100) {
            $("#address-error-message").html("Alamat tidak lebih dari 100 karakter");
            $("#address-error-message").show();
            $("#address").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_address = true;
        } else {
            $("#address-error-message").hide();
            $("#address").css({"border": "", "background-color": ""});
            if ($('#address').val().length == 0) {
                $("#address-error-message").html("Alamat harus diisi");
                $("#address-error-message").show();
                $("#address").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
                error_address = true;
            } else {
                $("#address-error-message").hide();
                $("#address").css({"border": "", "background-color": ""});
            }
        }
    }

    function check_country(){
        const selectCountry = $("#country").val();
        console.log('Negara', selectCountry);
        if (selectCountry == ""){
            $("#country-error-message").html("Negara harus dipilih");
            $("#country-error-message").show();
            $("#country").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_country = true;
        } else {
            $("#country-error-message").hide();
            $("#country").css({"border": "", "background-color": ""});
        }
    }

    function check_kodepos(){
        var kodePos = $("#kodepos").val();
        console.log('Kodepos', kodePos);

        if (kodePos.length == 0){
            $("#kodepos-error-message").html("Kodepos harus diisi");
            $("#kodepos-error-message").show();
            $("#kodepos").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
            error_kodepos = true;
        } else {
            $("#kodepos-error-message").hide();
            $("#kodepos").css({"border": "", "background-color": ""});
            if (kodePos.length < 5){
                $("#kodepos-error-message").html("Maksimal 5 Digit");
                $("#kodepos-error-message").show();
                $("#kodepos").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"});
                error_kodepos = true;
            } else {
                $("#kodepos-error-message").hide();
                $("#kodepos").css({"border": "", "background-color": ""});
            }
        }
    }

    function check_gender(){
        const inputGender = $("input[name='gender']:checked").val();
        console.log('Kelamin', inputGender);
        if (!inputGender) {
            $("#gender-error-message").html("Silahkan pilih gender");
            $("#gender-error-message").show();
            $("input[name='gender']").css(({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"}))
            error_gender = true;
        } else {
            $("#gender-error-message").hide();
        }
    }

    function check_password(){
        const password = $("#psw").val();
        console.log('psw', password);
        if (password.length == "") {
            $("#psw-error-message").html("Silahkan masukkan password");
            $("#psw-error-message").show();
            $("#psw").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"})
            error_password = true;
        } else {
            $("#psw-error-message").hide();
            $("#psw").css({"border": "", "background-color": ""});
            if (password.length < 8) {
                $("#psw-error-message").html("Password minimal 8 karakter");
                $("#psw-error-message").show();
                $("#psw").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10"})
                error_password = true;                
            } else {
                $("#psw-error-message").hide();
                $("#psw").css({"border": "", "background-color": ""});                
            }
        }
    }

    $("#submit").click(function(){
        error_username = false;
        error_email = false;
        error_address = false;
        error_kodepos = false;
        error_gender = false;
        error_country = false;
        error_password = false;

        check_username();
        check_email();
        check_address();
        check_kodepos();
        check_gender();
        check_country();
        check_password();

        if  (error_username == false && error_email == false && error_country == false
            && error_address == false && error_kodepos == false && error_gender == false && error_password == false){
            return true;
        } else {
            return false;
        }
    })
    
})
