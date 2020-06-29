$(document).ready(function(){
    $("#username-error-message").hide();
    $("#email-error-message").hide();
    $("#gender-error-message").hide();
    $("#address-error-message").hide();
    $("#country-error-message").hide();
    $("#kodepos-error-message").hide();
    $("#psw-error-message").hide();
    $("#retypePwd-error-message").hide();
    $("#agreement-error-message").hide();

    $(".error").removeClass();

    var error_username = false;
    var error_email = false;
    var error_gender = false;
    var error_address = false;
    var error_kodepos = false;
    var error_country = false;
    var error_password = false;
    var error_retypePsw = false;
    var error_agreement = false;

    // menonaktifkan input text pada saat belum divalidasi
    $("#kodepos").on("keypress keyup blur",function (event) {
        $("#kodepos").val($("#kodepos").val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    })

    function check_username(){
        const name = $("#username").val();
        console.log('nama', name);
        const regEx = /^[a-zA-Z ]*$/;
        if(name.length == 0) {
            $("#username-error-message").html("Nama harus diisi");
            $("#username-error-message").show();
            $("#username").addClass('error');
            error_username = true
        } else {
            $("#username-error-message").hide();
            $("#username").removeClass('error');
            if (name.length < 3 || name.length > 50) {
                $("#username-error-message").html("Nama min. 3 karakter & max. 50 karakter");
                $("#username-error-message").show();
                $("#username").addClass('error');
                error_username = true
            } else {
                $("#username-error-message").hide();
                $("#username").removeClass('error');
                if (!name.match(regEx) != ' ') {
                    $("#username-error-message").html("Nama hanya boleh berisi alfabet dan spasi");
                    $("#username-error-message").show();
                    $("#username").addClass('error');
                    error_username = true
                } else {
                    $("#username-error-message").hide();
                    $("#username").removeClass('error');
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
            $("#email").addClass('error');
            error_email = true;
        } else {
            $("#email-error-message").hide();
            $("#email").removeClass('error');
            if (!email.match(mailReq) != '') {
                $("#email-error-message").html("email tidak valid");
                $("#email-error-message").show();
                $("#email").addClass('error');
                error_email = true
            } else {
                $("#email-error-message").hide();
                $("#email").removeClass('error');;
                if ($("#email").val().length > 50) {
                    $("#email-error-message").html("maksimal 50 karakter");
                    $("#email-error-message").show();
                    $("#email").addClass('error');
                    error_email = true;                    
                } else {
                    $("#email-error-message").hide();
                    $("#email").removeClass('error');
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
            $("#address").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10", "box-shadow": "1px 1px maroon"});
            error_address = true;
        } else {
            $("#address-error-message").hide();
            $("#address").css({"border": "", "background-color": "", "box-shadow": ""});
            if ($('#address').val().length == 0) {
                $("#address-error-message").html("Alamat harus diisi");
                $("#address-error-message").show();
                $("#address").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10", "box-shadow": "1px 1px maroon"});
                error_address = true;
            } else {
                $("#address-error-message").hide();
                $("#address").css({"border": "", "background-color": "", "box-shadow": ""});
            }
        }
    }

    function check_country(){
        const selectCountry = $("#country option:selected").val();
        console.log('Negara', selectCountry);
        if (!selectCountry){
            $("#country-error-message").html("Negara harus dipilih");
            $("#country-error-message").show();
            $("#country").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10", "box-shadow": "1px 1px maroon"});
            error_country = true;
        } else {
            $("#country-error-message").hide();
            $("#country").css({"border": "", "background-color": "", "box-shadow": ""});
        }
    }

    function check_kodepos(){
        var kodePos = $("#kodepos").val();
        console.log('Kodepos', kodePos);

        if (kodePos.length == 0){
            $("#kodepos-error-message").html("Kodepos harus diisi");
            $("#kodepos-error-message").show();
            $("#kodepos").addClass('error');
            error_kodepos = true;
        } else {
            $("#kodepos-error-message").hide();
            $("#kodepos").removeClass('error');
            if (kodePos.length < 5){
                $("#kodepos-error-message").html("Kodepos harus 5 karakter");
                $("#kodepos-error-message").show();
                $("#kodepos").addClass('error');
                error_kodepos = true;
            } else {
                $("#kodepos-error-message").hide();
                $("#kodepos").removeClass('error');
            }
        }
    }

    function check_gender(){
        const inputGender = $("input[name='gender']:checked").val();
        console.log('Kelamin', inputGender);
        if (!inputGender) {
            $("#gender-error-message").html("Silahkan pilih gender");
            $("#gender-error-message").show();
            $("input[name='gender']").addClass('error');
            error_gender = true;
        } else {
            $("#gender-error-message").hide();
            $("input[name='gender']").removeClass('error');
        }
    }

    function check_password(){
        const userPsw = $("#psw").val();
        const pswContain = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{8,32}$/;
        if (userPsw == "") {
            $("#psw-error-message").html("Silahkan masukkan password");
            $("#psw-error-message").show();
            $("#psw").addClass('error');
            error_password = true;
        } else {
            $("#psw-error-message").hide();
            $("#psw").removeClass('error');
            if (userPsw.length < 8) {
                $("#psw-error-message").html("Password minimal 8 karakter");
                $("#psw-error-message").show();
                $("#psw").addClass('error');
                error_password = true;                
            } else {
                $("#psw-error-message").hide();
                $("#psw").removeClass('error');
                if (!userPsw.match(pswContain) != ' '){
                    $("#psw-error-message").html("Password tidak valid");
                    $("#psw-error-message").show();
                    $("#psw").addClass('error');
                    error_password = true;                
                } else {
                    $("#psw-error-message").hide();
                    $("#psw").removeClass('error');              
                }
            }
        }
    }

    function check_retypePsw(){
        const psw = $("#psw").val();
        const confirmPsw = $("#retypePsw").val();
        if (confirmPsw.length == ""){
            $("#retypePwd-error-message").html("Confirm Password harus diisi");
            $("#retypePwd-error-message").show();
            $("#retypePsw").addClass('error');
            error_retypePsw = true;
        } else {
            $("#retypePwd-error-message").hide();
            $("#retypePsw").removeClass('error');
            if (confirmPsw != psw){
                $("#retypePwd-error-message").html("Harus sama dengan password");
                $("#retypePwd-error-message").show();
                $("#retypePsw").addClass('error');
                error_retypePsw = true;
            } else {
                $("#retypePwd-error-message").hide();
                $("#retypePsw").removeClass('error');
            }
        }
    }

    function check_agreement(){
        const agree = $("input[name='agreement']:checked").val();
        if (!agree){
            $("#agreement-error-message").html("Anda harus menyetujui syarat dan ketentuan");
            $("#agreement-error-message").show();
            $("#agreement").addClass('error');
            error_agreement = true;
        } else {
            $("#agreement-error-message").hide();
            $("#agreement").removeClass('error');
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
        error_retypePsw = false;
        error_agreement = false;

        $("#username").keyup(function(){
            check_username();
        });
        $("#email").keyup(function () {
            check_email();
        });
        $("#address").keyup(function () {
            check_address();
        });
        $("#kodepos").on("keypress keyup blur",function (event) {
           $(this).val($(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
            check_kodepos();
        });
        $("input[type='radio']").click(function () {
            check_gender();
        });
        $("#country").change(function(){
            check_country();
        })
        $("#psw").keyup(function () {
            check_password();
        })
        $("#retypePsw").keyup(function () {
            check_retypePsw();
        })
        $("#agreement").click(function () {
            check_agreement();
        })
        
        check_username();
        check_email();
        check_address();
        check_kodepos();
        check_gender();
        check_country();
        check_password();
        check_retypePsw();
        check_agreement();

        if  (error_username == false && error_email == false && error_country == false && error_agreement == false
            && error_address == false && error_kodepos == false && error_gender == false && error_password == false && error_retypePsw == false) {
            return true;
        } else {
            return false;
        }
    })
    
})
