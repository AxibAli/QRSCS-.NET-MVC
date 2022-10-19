

    function GetInfo(id) {
        console.log(id);
    $.get("/Result/GetInfo?GRNO=" + id, function (response) {
        console.log(response)

            document.getElementById("AS_St_Name").innerHTML = response.Name;
    document.getElementById("AS_Father_Name").innerHTML = response.Father_Name;
    document.getElementById("AS_Class").innerHTML = response.Class;
    document.getElementById("AS_Disability").innerHTML = response.Disability;
        });
    }

    function IEPGetInfo(id) {
        console.log(id);
    $.get("/Result/GetInfo?GRNO=" + id, function (response) {
        console.log(response)

            document.getElementById("IEP_St_Name").innerHTML = response.Name;
    document.getElementById("IEP_Father_Name").innerHTML = response.Father_Name;
    document.getElementById("IEP_Class").innerHTML = response.Class;
    document.getElementById("IEP_Disability").innerHTML = response.Disability;
        });
    }

    function VGGetInfo(id) {
        console.log(id);
    $.get("/Result/GetInfo?GRNO=" + id, function (response) {
        console.log(response)

            document.getElementById("VG_St_Name").innerHTML = response.Name;
    document.getElementById("VG_Father_Name").innerHTML = response.Father_Name;
    document.getElementById("VG_Class").innerHTML = response.Class;
    document.getElementById("VG_Disability").innerHTML = response.Disability;
        });
    }

