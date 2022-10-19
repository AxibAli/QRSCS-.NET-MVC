
    function UpdateStatus(data, userId) {
        var id = data.id;
    var status = document.getElementById(id).checked

    $.post("/Admin/UpdateUserStatus",
    {
        Status: status,
    UserId: userId
            },
    function (data) {
                if (data == true) {

    }
    else {
        document.getElementById(id).checked = status;
    alert("Error Updating")
                }
    console.log(status)
            });
    }
