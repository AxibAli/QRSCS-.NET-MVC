

    const targetDiv = document.getElementById("secondSection");
    const btn = document.getElementById("addsection");
    btn.onclick = function () {
        if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    $('#addsection').html('Add Section');
    $('#addsection').css({"width": "120px" });
        } else {
        targetDiv.style.display = "block";
    $('#addsection').html('Remove Section');
    $('#addsection').css({"width": "140px" });
        }
    };

    window.onload = function () {
        const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const GRNO = urlParams.get('GRNO')
    const IEP_ID = urlParams.get('IEP_ID')
    console.log(GRNO);

    $("#IEP_ID").val(IEP_ID);


        //$.get(`/IDD/UpdateIEP?GRNO='${GRNO}'&IEP_ID=` + GRNO, function (res) {
        //    console.log(res)

        //    $("#GR_NO").val(GRNO);
        //    $("#Std_Name").val(res.Student_First_Name + " " + res.Student_Last_Name);

        //    if (res.Gender == "Male") {
        //        $("#input_15_0").prop('checked', true);
        //    } else {
        //        $("#input_15_1").prop('checked', true);
        //    }

        //    const d1 = new Date(res.Dob.match(/\d+/)[0] * 1);
        //    const formattedDate1 = d1.getFullYear() + '-' + ("0" + (d1.getMonth() + 1)).slice(-2) + '-' + ("0" + d1.getDate()).slice(-2)
        //    console.log(formattedDate1)
        //    $('#Std_DOB').val(formattedDate1);
        //    $("#Disability").val(res.Disability);
        //});
    };

    function GetSTDInfo(id) {

    }

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

