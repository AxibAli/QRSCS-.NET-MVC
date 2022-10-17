
    $(document).ready(function () {


            var readURL = function (input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

    reader.onload = function (e) {
        $('.profile-pic').attr('src', e.target.result);
                    }

    reader.readAsDataURL(input.files[0]);
                }
            }


    $(".file-upload").on('change', function () {
        readURL(this);
            });

    $(".upload-button").on('click', function () {
        $(".file-upload").click();
            });
        });

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password1');
    togglePassword.addEventListener('click', function (f) {
            // toggle the type attribute
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
        });

