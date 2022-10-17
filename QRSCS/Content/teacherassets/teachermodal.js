$(document).ready(function () {
    $("#teacherbtn").click(function () {
        var url = "/Admin/UpdateUserProfile?User_ID=" + $("#prof").val();
        $("#TeacherCreateModal").modal("show");
    });
    //$("#modify").click(function () {
    //    var url = "/Admin/UpdateeTeachers?Teacher_ID=" + $("#teacher_id").val();
    //    alert(url);
    //    //$("#ModalTitle").html("Personal Details");
    //    //$("#TeacherModal").modal("show");
    //    //$.ajax({
    //    //    type: "GET",
    //    //    url: url,

    //    //    success: function (data) {
    //    //        var obj = JSON.parse(data);
    //    //        $("#Full_Name").val(obj.Full_Name);
    //    //        $("#Father_Name").val(obj.Father_Name);
    //    //        $("#NIC").val(obj.NIC);
    //    //        $("#Gen").val(obj.Gender);
    //    //        var a = obj.DOB;
    //    //        var ab = a.split("T");
    //    //        $("#Date_of_Birth").val(ab[0]);

    //    //        $("#Contact").val(obj.Contact_Number);
    //    //        $("#Rank").val(obj.Rank);
    //    //        $("#Designation").val(obj.Desigation_Role);
    //    //        $("#Address").val(obj.Address);
    //    //        $("#City").val(obj.City);
    //    //        $("#State").val(obj.State);
    //    //        $("#username").val(obj.UserName);
    //    //        $("#Password").val(obj.Password);

    //    //        var aw = obj.Picture;
    //    //        var abs = aw.split("~");
    //    //        $('#pics').attr('src', abs[1]);
    //    //    }
    //    //})
    //});

    

});