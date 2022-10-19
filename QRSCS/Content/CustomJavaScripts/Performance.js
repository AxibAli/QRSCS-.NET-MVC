

    let button = document.querySelectorAll('.menu button');
    let content_inside = document.querySelectorAll('.content_inside');

    Array.from(button).forEach(function (buttonArray, i) {
        buttonArray.addEventListener('click', function () {

            Array.from(button).forEach(buttonAll => buttonAll.classList.remove('button_active'));

            Array.from(content_inside).forEach(content_insideAll => content_insideAll.classList.remove('content_inside_active'));

            button[i].classList.add('button_active');

            content_inside[i].classList.add('content_inside_active');
        });
    });

    function SaveId(data) {
        localStorage.setItem("TabId", data.id)
        console.log(localStorage.getItem("TabId"))
    }

    function GetSpeech(id) {
        debugger
    $.post("/Editor/GetSpeechPerformance/",
    {
        id: id
            },
    function (data, status) {
        console.log(data)

                if (data.length == 0) {
        alert("No Data Found!!");
    location.reload();
                }

    document.getElementById("Sound_St_Name").innerHTML = data[0].Name;
    document.getElementById("Sound_Father_Name").innerHTML = data[0].Father_Name;
    document.getElementById("Sound_Disability").innerHTML = data[0].Disability;

    var table = document.getElementById('soundTable');
    table.innerHTML = "";
    var YearDate = [];
    var Marks = [];
    for (var i = 0; i < data.length; i++) {
                    var row = `<tr>
        <td>${data[i].Year}</td>
        <td>${data[i].Marks}</td>
    </tr>`
    table.innerHTML += row;
    YearDate.push(data[i].Year);
    Marks.push(data[i].Marks);
                }

    console.log(YearDate);
    console.log(Marks);

    var data = [{
        x: YearDate,
    y: Marks,
    type: 'scatter',
    name: 'Speech Chart',
                }];

    var layout1 = {
        title: "Left Ear Graph",
    xaxis: {
        title: 'Years',
    showgrid: false,
    zeroline: false

                    },
    yaxis: {
        title: 'Marks',
    showline: false,
    range: [0, 100]
                    }
                };

    Plotly.newPlot('soundChart', data, layout1);

                //new Chart("soundChart", {
        //    type: "line",
        //    data: {
        //        labels: YearDate,
        //        datasets: [{
        //            data: Marks,
        //            borderColor: "blue",
        //            fill: false,
        //            label: "Marks"
        //        }]
        //    },
        //    options: {
        //        title: {
        //            display: true,
        //            text: "Speech Chart",
        //            fontSize: 25
        //        },
        //        legend: {
        //            display: true,
        //            position: "bottom",
        //            align: "end",
        //            //labels: {
        //            //    boxWidth: 1,
        //            //}
        //        },
        //        animation: {
        //            duration: 5000
        //        },
        //        scales: {
        //            yAxes: [{
        //                scaleLabel: {
        //                    display: true,
        //                    labelString: 'Marks',
        //                    fontSize: 20
        //                },
        //                ticks: {
        //                    beginAtZero: true
        //                }
        //            }],
        //            xAxes: [{
        //                scaleLabel: {
        //                    display: true,
        //                    labelString: 'Year',
        //                    fontSize: 20
        //                }
        //            }]
        //        },
        //        layout: {
        //            padding: {
        //                left: 0,
        //                right: 0,
        //                top: 20,
        //                bottom: 20,
        //            }
        //        }
        //    }
        //});
    });


    }

    function GetAudiology(id) {
        $.post("/Editor/GetAudiologyPerformance/",
            {
                id: id
            },
            function (data, status) {
                console.log(data)
                if (data.length == 0) {
                    alert("No Data Found!!");
                    location.reload();
                }

                document.getElementById("St_Name").innerHTML = data[0].Name;
                document.getElementById("Father_Name").innerHTML = data[0].Father_Name;
                document.getElementById("Disability").innerHTML = data[0].Disability;

                var table = document.getElementById('mytable');
                table.innerHTML = "";
                var leftEarMean = [];
                var RightEarMean = [];
                var YearDate = [];
                for (var i = 0; i < data.length; i++) {
                    var row = `<tr>
                                    <td>${data[i].Year}</td>
                                    <td style="color:blue;">${data[i].Left_Ear_Mean}</td>
                                    <td>${data[i].Left_Ear_Mean_Level}</td>
                                    <td style="color:red;">${data[i].Right_Ear_Mean}</td>
                                    <td>${data[i].Right_Ear_Mean_Level}</td>
                              </tr>`
                    table.innerHTML += row;
                    leftEarMean.push(data[i].Left_Ear_Mean);
                    RightEarMean.push(data[i].Right_Ear_Mean);
                    YearDate.push(data[i].Year);
                }

                var xValues = YearDate;

                var trace11 = {
                    x: xValues,
                    y: leftEarMean,
                    mode: 'lines+markers',
                    name: 'Left Ear Mean',
                    marker: {
                        color: 'blue',
                        size: 12,
                    },
                    line: {
                        color: 'blue',
                        width: 2
                    }
                };
                var trace21 = {
                    x: xValues,
                    y: RightEarMean,
                    mode: 'lines+markers',
                    name: 'Right Ear Mean',
                    marker: {
                        color: 'red',
                        size: 12,
                        symbol: ["triangle-se-open", "triangle-se-open", "triangle-se-open", "triangle-se-open", "triangle-se-open"]
                    },
                    line: {
                        color: 'red',
                        width: 2
                    }
                };

                var data1 = [trace11, trace21];
                var layout1 = {
                    title: "Ear Mean Graph",
                    xaxis: {
                        title: 'Years',
                        showgrid: false,
                        zeroline: false
                    },
                    yaxis: {
                        title: 'Ear Mean',
                        showline: false
                    }
                };

                Plotly.newPlot("myChart", data1, layout1)

                //new Chart("myChart", {
                //    type: "line",
                //    data: {
                //        labels: xValues,
                //        datasets: [{
                //            data: leftEarMean,
                //            borderColor: "blue",
                //            fill: false,
                //            label: "Left Ear Mean"
                //        }, {
                //            data: RightEarMean,
                //            borderColor: "red",
                //            fill: false,
                //            label: "Right Ear Mean"
                //        }]
                //    },
                //    options: {
                //        title: {
                //            display: true,
                //            text: "Audiology Chart",
                //            fontSize: 25
                //        },
                //        legend: {
                //            display: true,
                //            position: "bottom",
                //            //labels: {
                //            //    boxWidth: 1,
                //            //}
                //        },
                //        animation: {
                //            duration: 5000
                //        },
                //        scales: {
                //            yAxes: [{
                //                scaleLabel: {
                //                    display: true,
                //                    labelString: 'Mean',
                //                    fontSize: 20
                //                },
                //                ticks: {
                //                    beginAtZero: true
                //                }
                //            }],
                //            xAxes: [{
                //                scaleLabel: {
                //                    display: true,
                //                    labelString: 'Year',
                //                    fontSize: 20
                //                }
                //            }]
                //        },
                //        layout: {
                //            padding: {
                //                left: 0,
                //                right: 0,
                //                top: 20,
                //                bottom: 20,
                //            }
                //        }
                //    }
                //});
            });
    }

    function FetchAcademicData(id) {
        if (id == '') return alert("Enter the GRNO!!!")
    $.get("/Academic/GetAcademic?GRNO=" + id,
    function (data, status) {
                debugger
    console.log(data)

    document.getElementById("Aca_St_Name").innerHTML = data[0].Name;
    document.getElementById("Aca_Father_Name").innerHTML = data[0].FatherName;
    document.getElementById("Aca_Class").innerHTML = data[0].Class;

    var table = document.getElementById('academic_table');
    var st_class = [];
    var percentage = [];
    var year = [];
    var status = [];
    for (var i = 0; i < data.length; i++) {
                    var row = `<tr>
        <td>${data[i].CurrentClass}</td>
        <td>${data[i].Presentage}</td>
        <td>${data[i].Year}</td>
        <td>${data[i].Result}</td>
    </tr>`
    table.innerHTML += row;
    st_class.push(data[i].CurrentClass);
    percentage.push(data[i].Presentage);
    year.push(data[i].Year);
    status.push(data[i].Result);
                }

    var xValue = year;

    var yValue = percentage;

    var trace1 = {
        x: xValue,
    y: yValue,
    type: 'bar',
    text: yValue.map(String),
    textposition: 'auto',
    marker: {
        color: 'rgb(158,202,225)',
    opacity: 0.6,
    line: {
        color: 'rgb(8,48,107)',
    width: 0.8
                        }
                    }
                };

    var data = [trace1];

    var layout = {
        title: 'Academic',
    barmode: 'stack',
    xaxis: {
        title: 'Years',
                    },
    yaxis: {
        title: 'Percentage',
    showline: false,
    range: [0, 100]
                    }
                };

    Plotly.newPlot('barChart', data, layout);

            });
    }

    function RemoveTag() {
        var answer = document.getElementsByTagName("label").length
    console.log(answer)
    for (let i = 0; i < answer; i++) {
        document.getElementsByTagName("label")[i].innerText = ""
    }
    }

    function FetchData() {
        var id = document.getElementById('GR_NO').value;
    if (id == '') return alert("Enter the GRNO!!!")
    RemoveTag();
    $.post("/Result/GetHIResult/",
    {
        GR_NO: id
            },
    function (data, status) {
        //console.log(data.Test_Type)
        ////if (data.Test_Type == )
        //const TestType = [];
        //for (let i = 0; i < data.length; i++) {
        //    TestType.push(data[i].Test_Type);
        //}
        console.log(data)

                document.getElementById("FBM_English").innerText = data["FirstBTM_English"];
    document.getElementById("FBM_Urdu").innerText = data["FirstBTM_Urdu"];
    document.getElementById("FBM_Maths").innerText = data["FirstBTM_Maths"];
    document.getElementById("FBM_Science").innerText = data["FirstBTM_Science"];
    document.getElementById("FBM_Social_Studies").innerText = data["FirstBTM_Social_Studies"];
    document.getElementById("FBM_Islamiat").innerText = data["FirstBTM_Islamiat"];
    document.getElementById("FBM_Computer").innerText = data["FirstBTM_Computer"];
    document.getElementById("FBM_Speech").innerText = data["FirstBTM_Speech"];
    document.getElementById("FBM_Language").innerText = data["FirstBTM_Language"];
    document.getElementById("FBM_Concepts").innerText = data["FirstBTM_Concepts"];
    document.getElementById("FBM_Art_and_Drawing").innerText = data["FirstBTM_Art_and_Drawing"];
    document.getElementById("FBM_Sindhi").innerText = data["FirstBTM_Sindhi"];
    document.getElementById("FBM_Total").innerText = data["FirstBTM_Obtained_Total"];
    document.getElementById("FBM_Percentage").innerText = data["FirstBTM_Percentage"];
    document.getElementById("FBM_Grade").innerText = data["FirstBTM_Grade"];

    document.getElementById("SBM_English").innerText = data["SecondBTM_English"];
    document.getElementById("SBM_Urdu").innerText = data["SecondBTM_Urdu"];
    document.getElementById("SBM_Maths").innerText = data["SecondBTM_Maths"];
    document.getElementById("SBM_Science").innerText = data["SecondBTM_Science"];
    document.getElementById("SBM_Social_Studies").innerText = data["SecondBTM_Social_Studies"];
    document.getElementById("SBM_Islamiat").innerText = data["SecondBTM_Islamiat"];
    document.getElementById("SBM_Computer").innerText = data["SecondBTM_Computer"];
    document.getElementById("SBM_Speech").innerText = data["SecondBTM_Speech"];
    document.getElementById("SBM_Language").innerText = data["SecondBTM_Language"];
    document.getElementById("SBM_Concepts").innerText = data["SecondBTM_Concepts"];
    document.getElementById("SBM_Art_and_Drawing").innerText = data["SecondBTM_Art_and_Drawing"];
    document.getElementById("SBM_Sindhi").innerText = data["SecondBTM_Sindhi"];
    document.getElementById("SBM_Total").innerText = data["SecondBTM_Obtained_Total"];
    document.getElementById("SBM_Percentage").innerText = data["SecondBTM_Percentage"];
    document.getElementById("SBM_Grade").innerText = data["SecondBTM_Grade"];

    document.getElementById("TBM_English").innerText = data["ThirdBTM_English"];
    document.getElementById("TBM_Urdu").innerText = data["ThirdBTM_Urdu"];
    document.getElementById("TBM_Maths").innerText = data["ThirdBTM_Maths"];
    document.getElementById("TBM_Science").innerText = data["ThirdBTM_Science"];
    document.getElementById("TBM_Social_Studies").innerText = data["ThirdBTM_Social_Studies"];
    document.getElementById("TBM_Islamiat").innerText = data["ThirdBTM_Islamiat"];
    document.getElementById("TBM_Computer").innerText = data["ThirdBTM_Computer"];
    document.getElementById("TBM_Speech").innerText = data["ThirdBTM_Speech"];
    document.getElementById("TBM_Language").innerText = data["ThirdBTM_Language"];
    document.getElementById("TBM_Concepts").innerText = data["ThirdBTM_Concepts"];
    document.getElementById("TBM_Art_and_Drawing").innerText = data["ThirdBTM_Art_and_Drawing"];
    document.getElementById("TBM_Sindhi").innerText = data["ThirdBTM_Sindhi"];
    document.getElementById("TBM_Total").innerText = data["ThirdBTM_Obtained_Total"];
    document.getElementById("TBM_Percentage").innerText = data["ThirdBTM_Percentage"];
    document.getElementById("TBM_Grade").innerText = data["ThirdBTM_Grade"];

    document.getElementById("FthBM_English").innerText = data["FourthBTM_English"];
    document.getElementById("FthBM_Urdu").innerText = data["FourthBTM_Urdu"];
    document.getElementById("FthBM_Maths").innerText = data["FourthBTM_Maths"];
    document.getElementById("FthBM_Science").innerText = data["FourthBTM_Science"];
    document.getElementById("FthBM_Social_Studies").innerText = data["FourthBTM_Social_Studies"];
    document.getElementById("FthBM_Islamiat").innerText = data["FourthBTM_Islamiat"];
    document.getElementById("FthBM_Computer").innerText = data["FourthBTM_Computer"];
    document.getElementById("FthBM_Speech").innerText = data["FourthBTM_Speech"];
    document.getElementById("FthBM_Language").innerText = data["FourthBTM_Language"];
    document.getElementById("FthBM_Concepts").innerText = data["FourthBTM_Concepts"];
    document.getElementById("FthBM_Art_and_Drawing").innerText = data["FourthBTM_Art_and_Drawing"];
    document.getElementById("FthBM_Sindhi").innerText = data["FourthBTM_Sindhi"];
    document.getElementById("FthBM_Total").innerText = data["FourthBTM_Obtained_Total"];
    document.getElementById("FthBM_Percentage").innerText = data["FourthBTM_Percentage"];
    document.getElementById("FthBM_Grade").innerText = data["FourthBTM_Grade"];

    document.getElementById("FT_English").innerText = data["FirstTerm_English"];
    document.getElementById("FT_Urdu").innerText = data["FirstTerm_Urdu"];
    document.getElementById("FT_Maths").innerText = data["FirstTerm_Maths"];
    document.getElementById("FT_Science").innerText = data["FirstTerm_Science"];
    document.getElementById("FT_Social_Studies").innerText = data["FirstTerm_Social_Studies"];
    document.getElementById("FT_Islamiat").innerText = data["FirstTerm_Islamiat"];
    document.getElementById("FT_Computer").innerText = data["FirstTerm_Computer"];
    document.getElementById("FT_Speech").innerText = data["FirstTerm_Speech"];
    document.getElementById("FT_Language").innerText = data["FirstTerm_Language"];
    document.getElementById("FT_Concepts").innerText = data["FirstTerm_Concepts"];
    document.getElementById("FT_Art_and_Drawing").innerText = data["FirstTerm_Art_and_Drawing"];
    document.getElementById("FT_Sindhi").innerText = data["FirstTerm_Sindhi"];
    document.getElementById("FT_Total").innerText = data["FirstTerm_Total"];
    document.getElementById("FT_Percentage").innerText = data["FirstTerm_Percentage"];
    document.getElementById("FT_Grade").innerText = data["FirstTerm_Grade"];

    document.getElementById("ST_English").innerText = data["SecondTerm_English"];
    document.getElementById("ST_Urdu").innerText = data["SecondTerm_Urdu"];
    document.getElementById("ST_Maths").innerText = data["SecondTerm_Maths"];
    document.getElementById("ST_Science").innerText = data["SecondTerm_Science"];
    document.getElementById("ST_Social_Studies").innerText = data["SecondTerm_Social_Studies"];
    document.getElementById("ST_Islamiat").innerText = data["SecondTerm_Islamiat"];
    document.getElementById("ST_Computer").innerText = data["SecondTerm_Computer"];
    document.getElementById("ST_Speech").innerText = data["SecondTerm_Speech"];
    document.getElementById("ST_Language").innerText = data["SecondTerm_Language"];
    document.getElementById("ST_Concepts").innerText = data["SecondTerm_Concepts"];
    document.getElementById("ST_Art_and_Drawing").innerText = data["SecondTerm_Art_and_Drawing"];
    document.getElementById("ST_Sindhi").innerText = data["SecondTerm_Sindhi"];
    document.getElementById("ST_Total").innerText = data["SecondTerm_Total"];
    document.getElementById("ST_Percentage").innerText = data["SecondTerm_Percentage"];
    document.getElementById("ST_Grade").innerText = data["SecondTerm_Grade"];

    document.getElementById("FGT_English").innerText = data["FirstGT_English"];
    document.getElementById("FGT_Urdu").innerText = data["FirstGT_Urdu"];
    document.getElementById("FGT_Maths").innerText = data["FirstGT_Maths"];
    document.getElementById("FGT_Science").innerText = data["FirstGT_Science"];
    document.getElementById("FGT_Social_Studies").innerText = data["FirstGT_Social_Studies"];
    document.getElementById("FGT_Islamiat").innerText = data["FirstGT_Islamiat"];
    document.getElementById("FGT_Computer").innerText = data["FirstGT_Computer"];
    document.getElementById("FGT_Speech").innerText = data["FirstGT_Speech"];
    document.getElementById("FGT_Language").innerText = data["FirstGT_Language"];
    document.getElementById("FGT_Concepts").innerText = data["FirstGT_Concepts"];
    document.getElementById("FGT_Art_and_Drawing").innerText = data["FirstGT_Art_and_Drawing"];
    document.getElementById("FGT_Sindhi").innerText = data["FirstGT_Sindhi"];
    document.getElementById("FGT_Total").innerText = data["FirstGT_Total"];
    document.getElementById("FGT_Percentage").innerText = data["FirstGT_Percentage"];
    document.getElementById("FGT_Grade").innerText = data["FirstGT_Grade"];

    document.getElementById("SGT_English").innerText = data["SecondGT_English"];
    document.getElementById("SGT_Urdu").innerText = data["SecondGT_Urdu"];
    document.getElementById("SGT_Maths").innerText = data["SecondGT_Maths"];
    document.getElementById("SGT_Science").innerText = data["SecondGT_Science"];
    document.getElementById("SGT_Social_Studies").innerText = data["SecondGT_Social_Studies"];
    document.getElementById("SGT_Islamiat").innerText = data["SecondGT_Islamiat"];
    document.getElementById("SGT_Computer").innerText = data["SecondGT_Computer"];
    document.getElementById("SGT_Speech").innerText = data["SecondGT_Speech"];
    document.getElementById("SGT_Language").innerText = data["SecondGT_Language"];
    document.getElementById("SGT_Concepts").innerText = data["SecondGT_Concepts"];
    document.getElementById("SGT_Art_and_Drawing").innerText = data["SecondGT_Art_and_Drawing"];
    document.getElementById("SGT_Sindhi").innerText = data["SecondGT_Sindhi"];
    document.getElementById("SGT_Total").innerText = data["SecondGT_Total"];
    document.getElementById("SGT_Percentage").innerText = data["SecondGT_Percentage"];
    document.getElementById("SGT_Grade").innerText = data["SecondGT_Grade"];

    document.getElementById("FourtyPT_English").innerText = data["FourtyPT_English"];
    document.getElementById("FourtyPT_Urdu").innerText = data["FourtyPT_Urdu"];
    document.getElementById("FourtyPT_Maths").innerText = data["FourtyPT_Maths"];
    document.getElementById("FourtyPT_Science").innerText = data["FourtyPT_Science"];
    document.getElementById("FourtyPT_Social_Studies").innerText = data["FourtyPT_Social_Studies"];
    document.getElementById("FourtyPT_Islamiat").innerText = data["FourtyPT_Islamiat"];
    document.getElementById("FourtyPT_Computer").innerText = data["FourtyPT_Computer"];
    document.getElementById("FourtyPT_Speech").innerText = data["FourtyPT_Speech"];
    document.getElementById("FourtyPT_Language").innerText = data["FourtyPT_Language"];
    document.getElementById("FourtyPT_Concepts").innerText = data["FourtyPT_Concepts"];
    document.getElementById("FourtyPT_Art_and_Drawing").innerText = data["FourtyPT_Art_and_Drawing"];
    document.getElementById("FourtyPT_Sindhi").innerText = data["FourtyPT_Sindhi"];

    document.getElementById("SixtyPT_English").innerText = data["SixtyPT_English"];
    document.getElementById("SixtyPT_Urdu").innerText = data["SixtyPT_Urdu"];
    document.getElementById("SixtyPT_Maths").innerText = data["SixtyPT_Maths"];
    document.getElementById("SixtyPT_Science").innerText = data["SixtyPT_Science"];
    document.getElementById("SixtyPT_Social_Studies").innerText = data["SixtyPT_Social_Studies"];
    document.getElementById("SixtyPT_Islamiat").innerText = data["SixtyPT_Islamiat"];
    document.getElementById("SixtyPT_Computer").innerText = data["SixtyPT_Computer"];
    document.getElementById("SixtyPT_Speech").innerText = data["SixtyPT_Speech"];
    document.getElementById("SixtyPT_Language").innerText = data["SixtyPT_Language"];
    document.getElementById("SixtyPT_Concepts").innerText = data["SixtyPT_Concepts"];
    document.getElementById("SixtyPT_Art_and_Drawing").innerText = data["SixtyPT_Art_and_Drawing"];
    document.getElementById("SixtyPT_Sindhi").innerText = data["SixtyPT_Sindhi"];

            });
    }

