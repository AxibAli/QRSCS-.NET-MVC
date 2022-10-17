$(document).ready(function () {

    $("#prof").click(function () {
        var url = "/Admin/UpdateUserProfile?User_ID=" + $("#prof").val();
        $("#ModalTitle").html("Personal Details");
        $("#MyModal").modal("show");
        $.ajax({
            type: "GET",
            url: url,

            success: function (data) {
                var obj = JSON.parse(data);
                $("#Full_Name").val(obj.Full_Name);
                $("#Father_Name").val(obj.Father_Name);
                $("#NIC").val(obj.NIC);
                $("#Gen").val(obj.Gender);
                var a = obj.DOB;
                var ab = a.split("T");
                $("#Date_of_Birth").val(ab[0]);

                $("#Contact").val(obj.Contact_Number);
                $("#Rank").val(obj.Rank);
                $("#Designation").val(obj.Desigation_Role);
                $("#Address").val(obj.Address);
                $("#City").val(obj.City);
                $("#State").val(obj.State);
                $("#username").val(obj.UserName);
                $("#Password").val(obj.Password);

                var aw = obj.Picture;
                var abs = aw.split("~");
                $('#pics').attr('src', abs[1]);
            }
        })
    });
    $("#saverecord").click(function () {
        var data1 = {
            User_ID: $("#prof").val(),
            Full_Name: $("#Full_Name").val(),
            Father_Name: $("#Father_Name").val(),
            NIC: $("#NIC").val(),
            Gender: $("#Gen").val(),
            DOB: $("#Date_of_Birth").val(),
            Contact_Number: $("#Contact").val(),
            Rank: $("#Rank").val(),
            Desigation_Role: $("#Designation").val(),
            Address: $("#Address").val(),
            City: $("#City").val(),
            State: $("#State").val(),
            UserName: $("#username").val(),
            Password: $("#Password").val(),

        };



        $.ajax({
            type: "Post",
            url: "/Admin/SaveDataInDatabase",
            data: data1,
            success: function (result) {

                abc()
            }
        })
    })
    function abc() {
        var img = $('#file')[0].files[0];
        var Db = new FormData();
        Db.append("datas", img);
        $.ajax({
            type: "Post",
            url: "/Admin/saveimg",
            data: Db,
            contentType: false,
            processData: false,
            success: function (result) {
                alert("Successfully Updated....");
                window.location.href = "/Admin/Index";
                $("#MyModal").modal("hide");

            }
        })
    }


});
