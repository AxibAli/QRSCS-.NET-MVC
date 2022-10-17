$(document).ready(function () {
    var url = "/Admin/UpdateUserProfile?User_ID=" + $("#User_ID").val();
    $.ajax({
        type: "GET",
        url: url,

        success: function (data) {
            var obj = JSON.parse(data);
            var a = obj.DOB;
            var ab = a.split("T");
            $("#dat").val(ab[0]);
        }
    })
});