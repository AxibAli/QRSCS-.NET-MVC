

    function FetchAcademicData(id) {
        debugger
    if (id == '') return alert("Enter the GRNO!!!")
    $.get(`/IDD/GetIEPData?GRNO=${id}`,
    function (data) {
        console.log(data)
                document.getElementById("Aca_St_Name").innerHTML = data.Student.Name;
    document.getElementById("Aca_Father_Name").innerHTML = data.Student.FatherName;

    var table = document.getElementById('academic_table');
    var year = [];
    table.innerHTML = "";

    var currentTime = new Date()
    var currentyear = currentTime.getFullYear()

    var row = "";
    row = `<tr>
        <th scope="col" class="text-center">Date of Assessment</th>
        <th scope="col" class="text-center">Action</th>
    </tr>`
    for (var i = 0; i < data.Performance.length; i++) {
                    if (data.Performance[i].Year == currentyear) {
        row += `<tr>
                                        <td>${data.Performance[i].Year}</td>
                                        <td>
                                            <a class="button_active btn btn-sm btn-primary mx-1" id="true" href="/IDD/UpdateIEP?GRNO=${id}&IEP_ID=${data.Performance[i].IEP_ID}">Update</a>
                                        </td>
                                  </tr>`
    }
    else {
        row += `<tr>
                                    <td>${data.Performance[i].Year}</td>
                                    <td>
                                        <button class="button_active btn btn-sm btn-primary mx-1" id="btn" disabled=disabled>Update</button>
                                    </td>
                              </tr>`
    }
    year.push(data.Performance[i].Year);
                }
    table.innerHTML += row;
            })
    }
