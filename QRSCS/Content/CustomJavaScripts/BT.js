

                            // Next Button Script
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

    function next_step5() {
        document.getElementById("fifth").style.display = "none";
    document.getElementById("sixth").style.display = "block";
    document.getElementById("active3").style.color = "red";

                            }

    function next_step6() {
        document.getElementById("sixth").style.display = "none";
    document.getElementById("seventh").style.display = "block";
    document.getElementById("active3").style.color = "red";

                            }

    function next_step7() {
        document.getElementById("seventh").style.display = "none";
    document.getElementById("eighth").style.display = "block";
    document.getElementById("active3").style.color = "red";
                            }

    function next_step8() {
        document.getElementById("eighth").style.display = "none";
    document.getElementById("nineth").style.display = "block";
    document.getElementById("active3").style.color = "red";

                            }
    function next_step9() {
        document.getElementById("nineth").style.display = "none";
    document.getElementById("tenth").style.display = "block";
    document.getElementById("active3").style.color = "red";

                            }
    function next_step10() {
        document.getElementById("tenth").style.display = "none";
    document.getElementById("eleventh").style.display = "block";
    document.getElementById("active3").style.color = "red";

                            }
    function next_step11() {
        document.getElementById("eleventh").style.display = "none";
    document.getElementById("twelveth").style.display = "block";
    document.getElementById("active3").style.color = "red";

                            }
    function next_step12() {
        document.getElementById("twelveth").style.display = "none";
    document.getElementById("thirteenth").style.display = "block";
    document.getElementById("active3").style.color = "red";

                            }
    function next_step13() {
        document.getElementById("thirteenth").style.display = "none";
    document.getElementById("fourteenth").style.display = "block";
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
    function prev_step5() {
        document.getElementById("sixth").style.display = "none";
    document.getElementById("fifth").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
                            }
    function prev_step6() {
        document.getElementById("seventh").style.display = "none";
    document.getElementById("sixth").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
                            }
    function prev_step7() {
        document.getElementById("eighth").style.display = "none";
    document.getElementById("seventh").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
                            }
    function prev_step8() {
        document.getElementById("nineth").style.display = "none";
    document.getElementById("eighth").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
                            }
    function prev_step9() {
        document.getElementById("tenth").style.display = "none";
    document.getElementById("nineth").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
                            }
    function prev_step10() {
        document.getElementById("eleventh").style.display = "none";
    document.getElementById("tenth").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
                            }
    function prev_step11() {
        document.getElementById("twelveth").style.display = "none";
    document.getElementById("eleventh").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
                            }
    function prev_step12() {
        document.getElementById("thirteenth").style.display = "none";
    document.getElementById("twelveth").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
                            }
    function prev_step13() {
        document.getElementById("fourteenth").style.display = "none";
    document.getElementById("thirteenth").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
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
