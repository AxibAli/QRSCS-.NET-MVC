


    //$(document).ready(function() {
    //    $('#next_btn4').on('click', function(e) {
    //        var cnt = $("#cid_3 :radio:checked").length;
    //        if (cnt == 0)
    //        {
    //            alert('Select any option.');
    //            e.preventDefault();
    //        }

    //    });
    //});

    // Next Button Script

    //General Information
    const GI1 = document.querySelector("#input_73");
    const GI2 = document.querySelector("#first_56");
    const GI3 = document.querySelector("#input_63");
    const GI4 = document.querySelector("#d_ex");

    ////Family History
    //const FH1 = document.querySelector("#input_27");
    //const FH2 = document.querySelector("#input_30");
    //const FH4 = document.querySelector("#input_43");
    //const FH5 = document.querySelector("#input_47");

    ////Particular of Siblings
    //const PS1 = document.querySelector("#input_97");
    //const PS2 = document.querySelector("#input_98");

    ////Education History
    //const EH1 = document.querySelector("#input_121");
    //const EH2 = document.querySelector("#input_125");

    ////Physco Social Factors
    //const PSF = document.querySelector("#input_131");

    ////Behaviour Observation Conclusion
    //const Cons = document.querySelector("#input_139");


    function next_step1() {
        let gi1 = GI1.value;
    let gi2 = GI2.value;
    let gi3 = GI3.value;
    let gi4 = GI4.value;
    if (gi1 == "" || gi2 == "" || gi3 == "" || gi4 == "") {
        alert("Kindly Search through GR No and Select Date then Proceed")
    }
    else {
        document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("active2").style.color = "red";
        }

    }

    function next_step2() {
        //const select = document.querySelector("#input_41");
        //const value = select.options[select.selectedIndex].value;

        //    let fh1 = FH1.value;
        //    let fh2 = FH2.value;
        //    let fh4 = FH4.value;
        //    let fh5 = FH5.value;

        //if (fh1 == "" || fh2 == "" || fh4 == "" || fh5 == ""||value == "") {

        //   alert("Kindly Fill Family History Required Fields")
        //}
        //else  {
        document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
    document.getElementById("active3").style.color = "red";
        //}
    }

    function next_step3() {
        //let ps1 = PS1.value;
        //let ps2 = PS2.value;

        //if (ps1 == "" || ps2 == "") {
        //    alert("Kindly Fill Particular of Siblings Required Fields")
        //}
        //else {
        document.getElementById("third").style.display = "none";
    document.getElementById("fourth").style.display = "block";
    document.getElementById("active3").style.color = "red";
        //}
    }

    function next_step4() {

        //Development History
        //    const select1 = document.querySelector("#input_9");
        //    const select2 = document.querySelector("#input_14");
        //    const select3 = document.querySelector("#input_16");
        //    const select4 = document.querySelector("#input_17");
        //    const select5 = document.querySelector("#input_18");
        //    const select6 = document.querySelector("#input_19");
        //    const select7 = document.querySelector("#input_20");
        //    const select8 = document.querySelector("#input_109");
        //    const select9 = document.querySelector("#input_110");
        //    const select10 = document.querySelector("#input_111");
        //    const select11 = document.querySelector("#input_112");

        //    const value1 = select1.options[select1.selectedIndex].value;
        //    const value2 = select2.options[select2.selectedIndex].value;
        //    const value3 = select3.options[select3.selectedIndex].value;
        //    const value4 = select4.options[select4.selectedIndex].value;
        //    const value5 = select5.options[select5.selectedIndex].value;
        //    const value6 = select6.options[select6.selectedIndex].value;
        //    const value7 = select7.options[select7.selectedIndex].value;
        //    const value8 = select8.options[select8.selectedIndex].value;
        //    const value9 = select9.options[select9.selectedIndex].value;
        //    const value10 = select10.options[select10.selectedIndex].value;
        //    const value11 = select11.options[select11.selectedIndex].value;

        //    if (value1 == "" || value2 == "" || value3 == "" ||
        //        value4 == "" || value5 == "" || value6 == "" ||
        //        value7 == "" || value8 == "" || value9 == "" ||
        //        value10 == ""|| value11 == "" ) {

        //        alert("Kindly Fill Development History Required Fields")
        //    }
        //else {
        document.getElementById("fourth").style.display = "none";
    document.getElementById("fifth").style.display = "block";
    document.getElementById("active3").style.color = "red";
        //}
    }

    function next_step5() {

        //Medical History
        //const select1 = document.querySelector("#input_25_0_0");
        //const select2 = document.querySelector("#input_25_1_0");
        //const select3 = document.querySelector("#input_25_2_0");
        //const select4 = document.querySelector("#input_25_3_0");
        //const select5 = document.querySelector("#input_25_4_0");
        //const select6 = document.querySelector("#input_25_5_0");
        //const select7 = document.querySelector("#input_25_6_0");
        //const select8 = document.querySelector("#input_25_7_0");
        //const select9 = document.querySelector("#input_25_8_0");
        //const select10 = document.querySelector("#input_25_9_0");
        //const select11 = document.querySelector("#input_25_10_0");
        //const select12 = document.querySelector("#input_25_11_0");

        //const value1 = select1.options[select1.selectedIndex].value;
        //const value2 = select2.options[select2.selectedIndex].value;
        //const value3 = select3.options[select3.selectedIndex].value;
        //const value4 = select4.options[select4.selectedIndex].value;
        //const value5 = select5.options[select5.selectedIndex].value;
        //const value6 = select6.options[select6.selectedIndex].value;
        //const value7 = select7.options[select7.selectedIndex].value;
        //const value8 = select8.options[select8.selectedIndex].value;
        //const value9 = select9.options[select9.selectedIndex].value;
        //const value10 = select10.options[select10.selectedIndex].value;
        //const value11 = select11.options[select11.selectedIndex].value;
        //const value12 = select12.options[select12.selectedIndex].value;

        //if (value1 == "" || value2 == "" || value3 == "" ||
        //   value4 == "" || value5 == "" || value6 == "" ||
        //   value7 == "" || value8 == "" || value9 == "" ||
        //   value10 == "" || value11 == "" || value12 == "") {

        //    alert("Kindly Fill Medical History Required Fields")
        //}
        //else {
        document.getElementById("fifth").style.display = "none";
    document.getElementById("sixth").style.display = "block";
    document.getElementById("active3").style.color = "red";
        //}
    }

    function next_step6() {
        //let eh1 = EH1.value;
        //let eh2 = EH2.value;

        //if (eh1 == "" || eh2 == "") {
        //    alert("Kindly Fill Education History Required Fields")
        //}
        //else {
        document.getElementById("sixth").style.display = "none";
    document.getElementById("seventh").style.display = "block";
    document.getElementById("active3").style.color = "red";
        //}
    }

    function next_step7() {
        //let psf = PSF.value;

        //if (psf == "") {
        //    alert("Kindly Fill Physco Social Factors Required Fields")
        //}
        //else {
        document.getElementById("seventh").style.display = "none";
    document.getElementById("eighth").style.display = "block";
    document.getElementById("active3").style.color = "red";
        //}
    }

    function next_step8() {

        //Behaviour Observation
        //const select1 = document.querySelector("#input19");
        //const select2 = document.querySelector("#input20");
        //const select3 = document.querySelector("#input21");
        //const select4 = document.querySelector("#input22");
        //const select5 = document.querySelector("#input23");
        //const select6 = document.querySelector("#input24");
        //const select7 = document.querySelector("#input25");
        //const select8 = document.querySelector("#input26");
        //const select9 = document.querySelector("#input27");
        //const select10 = document.querySelector("#input28");
        //const select11 = document.querySelector("#input29");
        //const select12 = document.querySelector("#input30");
        //const select13 = document.querySelector("#input31");
        //const select14 = document.querySelector("#input32");
        //const select15 = document.querySelector("#input33");
        //const select16 = document.querySelector("#input34");
        //const select17 = document.querySelector("#input35");
        //const select18 = document.querySelector("#input36");

        //const value1 = select1.options[select1.selectedIndex].value;
        //const value2 = select2.options[select2.selectedIndex].value;
        //const value3 = select3.options[select3.selectedIndex].value;
        //const value4 = select4.options[select4.selectedIndex].value;
        //const value5 = select5.options[select5.selectedIndex].value;
        //const value6 = select6.options[select6.selectedIndex].value;
        //const value7 = select7.options[select7.selectedIndex].value;
        //const value8 = select8.options[select8.selectedIndex].value;
        //const value9 = select9.options[select9.selectedIndex].value;
        //const value10 = select10.options[select10.selectedIndex].value;
        //const value11 = select11.options[select11.selectedIndex].value;
        //const value12 = select12.options[select12.selectedIndex].value;
        //const value13 = select13.options[select13.selectedIndex].value;
        //const value14 = select14.options[select14.selectedIndex].value;
        //const value15 = select15.options[select15.selectedIndex].value;
        //const value16 = select16.options[select16.selectedIndex].value;
        //const value17 = select17.options[select17.selectedIndex].value;
        //const value18 = select18.options[select18.selectedIndex].value;


        //let Concls = Cons.value;

        //if (Concls == "" || value1 == "" || value2 == "" ||
        //    value3 == "" || value4 == "" || value5 == "" ||
        //    value6 == "" || value7 == "" || value8 == "" ||
        //    value9 == "" || value10 == "" || value11 == "" ||
        //    value12 == "" || value13 == "" || value14 == "" ||
        //    value15 == "" || value16 == "" || value17 == "" || value18 == "") {

        //    alert("Kindly Fill Behaviour Observation Required Fields")
        //}
        //else {
        document.getElementById("eighth").style.display = "none";
    document.getElementById("nineth").style.display = "block";
    document.getElementById("active3").style.color = "red";
        //}
    }

    //function btn_submitch()
    //{
        //    const select1 = document.querySelector("#input41");
        //    const value1 = select1.options[select1.selectedIndex].value;
        //    if (value1=="") {
        //        alert("Kindly Fill Recommendations Required Fields")
        //    } else
        //    {
        //        alert("ok")
        //    }
        //}
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
   
