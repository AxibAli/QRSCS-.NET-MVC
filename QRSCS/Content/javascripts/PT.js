


    function next_step1() {

        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        document.getElementById("active2").style.color = "red";
    }
    function next_step2() {
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "block";
        document.getElementById("active3").style.color = "red";
    }
    function next_step3() {
        document.getElementById("third").style.display = "none";
        document.getElementById("fourth").style.display = "block";
        document.getElementById("active3").style.color = "red";
    }
    function next_step4() {
        document.getElementById("fourth").style.display = "none";
        document.getElementById("fifth").style.display = "block";
        document.getElementById("active3").style.color = "red";

    }
    // Previous Button Script
    function prev_step1() {
        document.getElementById("first").style.display = "block";
        document.getElementById("second").style.display = "none";
        document.getElementById("active1").style.color = "red";
        document.getElementById("active2").style.color = "gray";
    }
    function prev_step2() {
        document.getElementById("third").style.display = "none";
        document.getElementById("second").style.display = "block";
        document.getElementById("active2").style.color = "red";
        document.getElementById("active3").style.color = "gray";
    }
    function prev_step3() {
        document.getElementById("fourth").style.display = "none";
        document.getElementById("third").style.display = "block";
        document.getElementById("active2").style.color = "red";
        document.getElementById("active3").style.color = "gray";
    }
    function prev_step4() {
        document.getElementById("fifth").style.display = "none";
        document.getElementById("fourth").style.display = "block";
        document.getElementById("active2").style.color = "red";
        document.getElementById("active3").style.color = "gray";
    }

    function btn_submitch() {
        const select1 = document.querySelector("#input41");
        const value1 = select1.options[select1.selectedIndex].value;
        if (value1 == "") {
            alert("Kindly Fill Recommendations Required Fields")
        } else {
            alert("ok")
        }
    }


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
