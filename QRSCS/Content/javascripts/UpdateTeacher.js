
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
    function validate(file) {
                                var ext = file.split(".");
    ext = ext[ext.length - 1].toLowerCase();
    var arrayExtensions = ["jpg", "jpeg", "png", "bmp", "gif"];

    if (arrayExtensions.lastIndexOf(ext) == -1) {
        alert("This is not an allowed file type Please upload Picture");
    $("#file").val("");
                                }
                            }
                            //$('INPUT[type="file"]').change(function () {
        //    var ext = this.value.match(/\.(.+)$/)[1];
        //    switch (ext) {
        //        case 'jpeg':
        //        case 'jpg':
        //        case 'png':

        //        $('.upload-button').attr('disabled', false);
        //          break;
        //          default:
        //          alert('This is not an allowed file type Please upload jpg, jpeg, or png file.');
        //          this.value = '';
        //    }
        //});

        $("#file").change(function (e) {
            var file = this.files[0], img;
            if (Math.round(file.size / (1024 * 1024)) > 2) { // make it in MB so divide by 1024*1024
                alert('Please select image size less than 2 MB');
                this.value = '';
            }

        });

    $(".file-upload").on('change', function () {
        readURL(this);
                            });

    $(".upload-button").on('click', function () {
        $(".file-upload").click();
                            });
                        });




