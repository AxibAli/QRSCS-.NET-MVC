

    $('#UserImage').click(function () {
        UploadClickEvent();

        });

    $('.upload-pic').click(function () {
        UploadClickEvent();
        });

    function UploadClickEvent() {
        $('#BrowseImage').trigger('click');
        }


    //select and upload window
    $('#BrowseImage').change(function () {
            var File = this.files;

    if (File && File[0]) {
                var reader = new FileReader();
    reader.readAsDataURL(File[0]);

    reader.onload = function (x) {
                    var image = new Image;
    image.src = x.target.result;

    image.onload = function () {
                        var width = this.width;
    var height = this.height;
    var type = File[0].type;
                        if ((width >= "512" && height >= "512") && (type == "image/png" || type == "image/jpg" || type == "image/jpeg")) {
        $('#UserImage').attr('src', x.target.result);
    $('.image-desc ').css("color", "black");
                        }
    else {
        $('.image-desc ').css("color", "red");
                        }
                        //alert("Width: " + width + ", Height: " + height + ", Type: " + type);
                    }
                }
            }
        });
