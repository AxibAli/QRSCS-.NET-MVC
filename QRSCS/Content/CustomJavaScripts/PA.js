


    $("#input_73").on('change', function () {
        var userid = $(this).val();
    if (userid != '') {
        $.post('@Url.Action("GetUserByID","Editor")', { GR_NO: userid })
            .done(function (response, status, jqxhr) {

                if (response != '') {
                    var postdata = { input_73: userid }
                    $("#first_56").val(response.Student_First_Name);
                    $("#last_56").val(response.Student_Last_Name);
                    $("input[name=q15_gender][value=" + response.Gender + "]").prop("checked", true);
                    $("#input_72").val(response.Father_Name);
                    $("#input_63").val(response.Disability);

                }

            })
            .fail(function (jqxhr, status, error) { alert('error') });
        }
    });

