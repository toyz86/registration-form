$(document).ready(function(){
    // Hide pesan error ketika halaman baru dibuka
    $("#username-error-message").hide();
    $("#email-error-message").hide();
    $("#gender-error-message").hide();
    $("#address-error-message").hide();
    $("#country-error-message").hide();
    $("#kodepos-error-message").hide();
    $("#psw-error-message").hide();
    $("#retypePwd-error-message").hide();
    $("#agreement-error-message").hide();

    // Hide class error ketika halaman baru dibuka
    $(".error").removeClass();

    // Variable component loading data
    const loadingBg = $("#loading-bg");
    const loadingIcon = $("#loading");

    var error_username = false;
    var error_email = false;
    var error_gender = false;
    var error_address = false;
    var error_kodepos = false;
    var error_country = false;
    var error_password = false;
    var error_retypePsw = false;
    var error_agreement = false;


    // menonaktifkan input text kodepos pada saat belum divalidasi
    $("#kodepos").on("keypress keyup blur",function (event) {
        $("#kodepos").val($("#kodepos").val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    })

    // CALLBACK kalau validasi tidak sukses maka akan muncul pesan error
    function errorMessage(selectorId, idErrorMessage, message) {
        $(idErrorMessage).html(message);
        $(idErrorMessage).show();
        $(selectorId).addClass('error');
    }
    // CALLBACK Kalau Validasi sukses maka pesan error hilang
    function hideMessage(selectorErrorMessage, selectorIdMessage) {
        $(selectorErrorMessage).hide();
        $(selectorIdMessage).removeClass('error');
    }

    // BEGIN VALIDATION INPUT FUNCTION
    function check_username(){
        const name = $("#username").val();
        console.log('nama', name);
        // contain only uppercase and lowercase
        const regEx = /^[a-zA-Z ]*$/;
        if(name.length == 0) {
            errorMessage("#username", "#username-error-message", "Nama harus diisi");
            error_username = true
        } else {
            hideMessage("#username-error-message", "#username");
            if (name.length < 3 || name.length > 50) {
                errorMessage("#username", "#username-error-message", "Nama min. 3 karakter & max. 50 karakter");
                error_username = true
            } else {
                hideMessage("#username-error-message", "#username");
                if (!name.match(regEx) != ' ') {
                    errorMessage("#username", "#username-error-message", "Nama hanya boleh berisi alfabet dan spasi");
                    error_username = true
                } else {
                    hideMessage("#username-error-message", "#username");
                }
            }
        }
    }

    function check_email(){
        const email = $("#email").val();
        console.log('email', email);
        //reGex untuk validasi email
        const mailReq = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if ($("#email").val() == "") {
            errorMessage("#email", "#email-error-message", "email harus diisi");
            error_email = true;
        } else {
            hideMessage("#email-error-message", "#email");
            if (!email.match(mailReq) != '') {
                errorMessage("#email", "#email-error-message", "email tidak valid");
                error_email = true
            } else {
                hideMessage("#email-error-message", "#email");
                if ($("#email").val().length > 50) {
                    errorMessage("#email", "#email-error-message", "maksimal 50 karakter");
                    error_email = true;                    
                } else {
                    hideMessage("#email-error-message", "#email");
                }
            }
        }
    }

    function check_address(){
        const address = $("#address");
        console.log('Alamat', address);
        if ($(address).val().length > 100) {
            errorMessage("#address", "#address-error-message", "Alamat tidak lebih dari 100 karakter");
            $("#address").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10", "box-shadow": "1px 1px maroon"});
            error_address = true;
        } else {
            hideMessage("#address-error-message", "#address");
            $("#address").css({"border": "", "background-color": "", "box-shadow": ""});
            if ($('#address').val().length == 0) {
                errorMessage("#address", "#address-error-message", "Alamat harus diisi");
                $("#address").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10", "box-shadow": "1px 1px maroon"});
                error_address = true;
            } else {
                hideMessage("#address-error-message", "#address");
                $("#address").css({"border": "", "background-color": "", "box-shadow": ""});
            }
        }
    }

    function check_country(){
        const selectCountry = $("#country option:selected").val();
        console.log('Negara', selectCountry);
        if (!selectCountry){
            errorMessage("#country", "#country-error-message", "Negara harus dipilih");
            $("#country").css({"border": "1px solid #c51244", "background-color": "rgba(197, 18, 68, 0.10", "box-shadow": "1px 1px maroon"});
            error_country = true;
        } else {
            hideMessage("#country-error-message", "#country");
            $("#country").css({"border": "", "background-color": "", "box-shadow": ""});
        }
    }

    function check_kodepos(){
        var kodePos = $("#kodepos").val();
        console.log('Kodepos', kodePos);

        if (kodePos.length == 0){
            errorMessage("#kodepos", "#kodepos-error-message", "Kodepos harus diisi");
            error_kodepos = true;
        } else {
            hideMessage("#kodepos-error-message", "#kodepos");
            if (kodePos.length < 5){
                errorMessage("#kodepos", "#kodepos-error-message", "Kodepos harus 5 karakter");
                error_kodepos = true;
            } else {
                hideMessage("#kodepos-error-message", "#kodepos");
            }
        }
    }

    function check_gender(){
        const inputGender = $("input[name='gender']:checked").val();
        const genderId = $("input[name='gender']");
        console.log('Kelamin', inputGender);
        if (!inputGender) {
            errorMessage(genderId, "#gender-error-message", "Silahkan pilih gender");
            error_gender = true;
        } else {
            hideMessage("#gender-error-message", genderId);
        }
    }

    function check_password(){
        const userPsw = $("#psw").val();
        // pswContain reGex password contain min 1 lowercase, 1 Uppercase, 
        // 1 special character, min 8 and max 32 character
        const pswContain = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{8,32}$/;
        if (userPsw == "") {
            errorMessage("#psw", "#psw-error-message", "Silahkan masukkan password");
            error_password = true;
        } else {
            hideMessage("#psw-error-message", "#psw");
            if (userPsw.length < 8) {
                errorMessage("#psw", "#psw-error-message", "Password minimal 8 karakter");
                error_password = true;                
            } else {
                hideMessage("#psw-error-message", "#psw");
                if (!userPsw.match(pswContain) != ' '){
                    errorMessage("#psw", "#psw-error-message", "Password tidak valid");
                    error_password = true;                
                } else {
                    hideMessage("#psw-error-message", "#psw");
                }
            }
        }
    }

    function check_retypePsw(){
        const psw = $("#psw").val();
        const confirmPsw = $("#retypePsw").val();
        if (confirmPsw.length == ""){
            errorMessage("#retypePsw", "#retypePwd-error-message", "Confirm Password harus diisi")
            error_retypePsw = true;
        } else {
            hideMessage("#retypePwd-error-message", "#retypePsw");
            if (confirmPsw != psw){
                errorMessage("#retypePsw", "#retypePwd-error-message", "Harus sama dengan password");
                error_retypePsw = true;
            } else {
                hideMessage("#retypePwd-error-message", "#retypePsw");
            }
        }
    }

    function check_agreement(){
        const agree = $("input[name='agreement']:checked").val();
        if (!agree){
            errorMessage("#agreement", "#agreement-error-message", "Anda harus menyetujui syarat dan ketentuan");
            error_agreement = true;
        } else {
            hideMessage("#agreement-error-message", "#agreement");
        }
    }
    // END VALIDATION FUNCTIONS

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

        // VALIDATION PROCESS WHEN FILL INPUT DATA
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
            // cuma untuk validasi numeric, keypress alphabet disabled
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
        
        // Menjalankan fungsi validasi data
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

    $('#formRegister').on('submit', function(e){
        e.preventDefault();

        loadingBg.css("display", "block");
        loadingIcon.css("display", "block");

        setTimeout(function() {
            loadingBg.css("display", "none");
            loadingIcon.css("display", "none");
            $.ajax({
              url: "http://dummy.restapiexample.com/api/v1/create",
              data: {
                  name: 'Gatot',
                  salary: '99999',
                  age: '9999'
              },
              method: "POST",
              dataType: "json",
              success: function(data){
                  console.log(data);
                  alert('Simpan Data Sukses');
              },
              error: function(data){
                  alert('Simpan data gagal');
              }
            })
        }, 3000);
    });
})
