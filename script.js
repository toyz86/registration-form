$(document).ready(function(){
    $("#username-error-message").hide();
    $("#email-error-message").hide();
    $("#address-error-message").hide();
    $("#country-error-message").hide();
    $("#kodepos-error-message").hide();
    $("#password-error-message").hide();
    $("#retypePwd-error-message").hide();
    
    const error_username = false;
    
    $("#submit").click(function(){
        const name = $("#username").val();

		if (name.length == 0) {
		    $("#username-error-message").html("Nama harus diisi");
            $("#username-error-message").show();
            error_username = true
		} else {
		    $("#username-error-message").hide();
        }

		if (name.length < 3) {
		    $("#username-error-message").html("Nama kurang dari 3 karakter");
		    $("#username-error-message").show();
		    error_username = true
		} else {
		    $("#username-error-message").hide();
		}
        

        
    })
})
