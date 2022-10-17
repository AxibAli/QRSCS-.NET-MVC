

    // function GetInfo(id) {
        //    console.log(id);
        //    $.get("/Result/GetInfo?GRNO="+id, function (response) {
        //        console.log(response)

        //        document.getElementById("BM_St_Name").innerHTML = response.Name;
        //        document.getElementById("BM_Father_Name").innerHTML = response.Father_Name;
        //        document.getElementById("BM_Class").innerHTML = response.Class;
        //        document.getElementById("BM_Disability").innerHTML = response.Disability;
        //    });
        //}

        function FetchAcademicData(id) {
            debugger
            if (id == '') return alert("Enter the GRNO!!!")
            var status = document.getElementById("switchId").checked
            console.log(status);
            $.get(`/Editor/GetOT2Performance?GRNO=${id}&isCurrentYear=${status}`,
                function (data) {
                    console.log(data)
                    document.getElementById("Aca_St_Name").innerHTML = data.Student.Name;
                    document.getElementById("Aca_Father_Name").innerHTML = data.Student.FatherName;

                    var table = document.getElementById('academic_table');
                    var year = [];
                    var seekScore = [];
                    var avoidScore = [];
                    var sensitiveScore = [];
                    var registerScore = [];
                    table.innerHTML = "";

                    var row = "";
                    row = `<tr>
                            <th scope="col" class="text-center">Year</th>
                            <th scope="col" class="text-center">Seeking</th>
                            <th scope="col" class="text-center">Avoiding</th>
                            <th scope="col" class="text-center">Sensitivity</th>
                            <th scope="col" class="text-center">Registration</th>
                       </tr>`
                    for (var i = 0; i < data.Performance.length; i++) {
                        row += `<tr>
                                    <td>${data.Performance[i].Year}</td>
                                    <td>${data.Performance[i].Seeking}</td>
                                    <td>${data.Performance[i].Avoiding}</td>
                                    <td>${data.Performance[i].Sensitivity}</td>
                                    <td>${data.Performance[i].Registration}</td>
                              </tr>`
                        year.push(data.Performance[i].Year);
                        seekScore.push(data.Performance[i].SeekingValue);
                        avoidScore.push(data.Performance[i].AvoidingValue);
                        sensitiveScore.push(data.Performance[i].SensitivityValue);
                        registerScore.push(data.Performance[i].RegistrationValue);
                    }
                    table.innerHTML += row;
                    console.log(seekScore);
                    var xValues = year;

                    var trace11 = {
                        x: xValues,
                        y: seekScore,
                        mode: 'lines+markers',
                        name: 'Seeking Score',
                        marker: {
                            color: 'blue',
                            size: 5,
                        },
                        line: {
                            color: 'blue',
                            width: 2
                        }
                    };
                    var trace21 = {
                        x: xValues,
                        y: avoidScore,
                        mode: 'lines+markers',
                        name: 'Avoiding Score',
                        marker: {
                            color: 'red',
                            size: 5,
                        },
                        line: {
                            color: 'red',
                            width: 2
                        }
                    };
                    var trace31 = {
                        x: xValues,
                        y: sensitiveScore,
                        mode: 'lines+markers',
                        name: 'Sensitivity Score',
                        marker: {
                            color: 'orange',
                            size: 5,
                        },
                        line: {
                            color: 'orange',
                            width: 2
                        }
                    };
                    var trace41 = {
                        x: xValues,
                        y: registerScore,
                        mode: 'lines+markers',
                        name: 'Registration Score',
                        marker: {
                            color: 'purple',
                            size: 5,
                        },
                        line: {
                            color: 'purple',
                            width: 2
                        }
                    };

                    var data1 = [trace11];
                    var data2 = [trace21];
                    var data3 = [trace31];
                    var data4 = [trace41];

                    var layout1 = {
                        title: "Seeking Score",
                        xaxis: {
                            title: 'Year',
                            showgrid: false,
                            zeroline: false,
                            type: 'date',
                        },
                        yaxis: {
                            title: 'Score',
                            showline: false
                        }
                    };
                    var layout2 = {
                        title: "Avoiding Score",
                        xaxis: {
                            title: 'Year',
                            showgrid: false,
                            zeroline: false,
                            type: 'date',
                        },
                        yaxis: {
                            title: 'Score',
                            showline: false
                        }
                    };

                    var layout3 = {
                        title: "Sensitivity Score",
                        xaxis: {
                            title: 'Year',
                            showgrid: false,
                            zeroline: false,
                            type: 'date',
                        },
                        yaxis: {
                            title: 'Score',
                            showline: false
                        }
                    };

                    var layout4 = {
                        title: "Registration Score",
                        xaxis: {
                            title: 'Year',
                            showgrid: false,
                            zeroline: false,
                            type: 'date',
                        },
                        yaxis: {
                            title: 'Score',
                            showline: false
                        }
                    };

                    Plotly.newPlot("seektbl", data1, layout1)
                    Plotly.newPlot("avoidtbl", data2, layout2)
                    Plotly.newPlot("sensitivetbl", data3, layout3)
                    Plotly.newPlot("registertbl", data4, layout4)

                });
        }

