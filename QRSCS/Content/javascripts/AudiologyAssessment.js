﻿
    function Submit() {
        debugger
    var error = document.getElementById("errorMessage")
    var id = 0
    try {
        id = Number(document.getElementById("GetGRNO").innerText)
    }
    catch (err) {
        id = 0
    }
    if (id == 0) {

        error.innerHTML = "<small>Search the Student first</small>"
    }
    else {
        error.innerHTML = ""
            var AU_l_freq1 = Number(document.getElementById("AU_l_freq1").value)
    var AU_l_freq2 = Number(document.getElementById("AU_l_freq2").value)
    var AU_l_freq3 = Number(document.getElementById("AU_l_freq3").value)
    var AU_l_freq4 = Number(document.getElementById("AU_l_freq4").value)
    var AU_l_freq5 = Number(document.getElementById("AU_l_freq5").value)

    var AU_l_hl1 = Number(document.getElementById("AU_l_hl1").value)
    var AU_l_hl2 = Number(document.getElementById("AU_l_hl2").value)
    var AU_l_hl3 = Number(document.getElementById("AU_l_hl3").value)
    var AU_l_hl4 = Number(document.getElementById("AU_l_hl4").value)
    var AU_l_hl5 = Number(document.getElementById("AU_l_hl5").value)

    var BM_l_freq1 = Number(document.getElementById("BM_l_freq1").value)
    var BM_l_freq2 = Number(document.getElementById("BM_l_freq2").value)
    var BM_l_freq3 = Number(document.getElementById("BM_l_freq3").value)
    var BM_l_freq4 = Number(document.getElementById("BM_l_freq4").value)
    var BM_l_freq5 = Number(document.getElementById("BM_l_freq5").value)

    var BM_l_hl1 = Number(document.getElementById("BM_l_hl1").value)
    var BM_l_hl2 = Number(document.getElementById("BM_l_hl2").value)
    var BM_l_hl3 = Number(document.getElementById("BM_l_hl3").value)
    var BM_l_hl4 = Number(document.getElementById("BM_l_hl4").value)
    var BM_l_hl5 = Number(document.getElementById("BM_l_hl5").value)


    var AU_r_freq1 = Number(document.getElementById("AU_r_freq1").value)
    var AU_r_freq2 = Number(document.getElementById("AU_r_freq2").value)
    var AU_r_freq3 = Number(document.getElementById("AU_r_freq3").value)
    var AU_r_freq4 = Number(document.getElementById("AU_r_freq4").value)
    var AU_r_freq5 = Number(document.getElementById("AU_r_freq5").value)

    var AU_r_hl1 = Number(document.getElementById("AU_r_hl1").value)
    var AU_r_hl2 = Number(document.getElementById("AU_r_hl2").value)
    var AU_r_hl3 = Number(document.getElementById("AU_r_hl3").value)
    var AU_r_hl4 = Number(document.getElementById("AU_r_hl4").value)
    var AU_r_hl5 = Number(document.getElementById("AU_r_hl5").value)

    var BM_r_freq1 = Number(document.getElementById("BM_r_freq1").value)
    var BM_r_freq2 = Number(document.getElementById("BM_r_freq2").value)
    var BM_r_freq3 = Number(document.getElementById("BM_r_freq3").value)
    var BM_r_freq4 = Number(document.getElementById("BM_r_freq4").value)
    var BM_r_freq5 = Number(document.getElementById("BM_r_freq5").value)

    var BM_r_hl1 = Number(document.getElementById("BM_r_hl1").value)
    var BM_r_hl2 = Number(document.getElementById("BM_r_hl2").value)
    var BM_r_hl3 = Number(document.getElementById("BM_r_hl3").value)
    var BM_r_hl4 = Number(document.getElementById("BM_r_hl4").value)
    var BM_r_hl5 = Number(document.getElementById("BM_r_hl5").value)

    var AU_l_freq = AU_l_freq1 + "," + AU_l_freq2 + "," + + AU_l_freq3 + "," + + AU_l_freq4 + "," + + AU_l_freq5
    var AU_l_hl = AU_l_hl1 + "," + AU_l_hl2 + "," + + AU_l_hl3 + "," + + AU_l_hl4 + "," + AU_l_hl5

    var BM_l_freq = BM_l_freq1 + "," + BM_l_freq2 + "," + + BM_l_freq3 + "," + + BM_l_freq4 + "," + + BM_l_freq5
    var BM_l_hl = BM_l_hl1 + "," + BM_l_hl2 + "," + + BM_l_hl3 + "," + + BM_l_hl4 + "," + BM_l_hl5

    var AU_r_freq = AU_r_freq1 + "," + AU_r_freq2 + "," + + AU_r_freq3 + "," + + AU_r_freq4 + "," + + AU_r_freq5
    var AU_r_hl = AU_r_hl1 + "," + AU_r_hl2 + "," + + AU_r_hl3 + "," + + AU_r_hl4 + "," + AU_r_hl5

    var BM_r_freq = BM_r_freq1 + "," + BM_r_freq2 + "," + + BM_r_freq3 + "," + + BM_r_freq4 + "," + + BM_r_freq5
    var BM_r_hl = BM_r_hl1 + "," + BM_r_hl2 + "," + + BM_r_hl3 + "," + + BM_r_hl4 + "," + BM_r_hl5

    var xVal11 = [AU_l_freq1, AU_l_freq2, AU_l_freq3, AU_l_freq4, AU_l_freq5];
    var yVal11 = [AU_l_hl1, AU_l_hl2, AU_l_hl3, AU_l_hl4, AU_l_hl5];

    var xVal21 = [BM_l_freq1, BM_l_freq2, BM_l_freq3, BM_l_freq4, BM_l_freq5];
    var yVal21 = [BM_l_hl1, BM_l_hl2, BM_l_hl3, BM_l_hl4, BM_l_hl5];

    var trace11 = {
        x: xVal11,
    y: yVal11,
    mode: 'lines+markers',
    name: 'Air Unmasked',
    marker: {
        color: 'red',
    size: 12,
                },
    line: {
        color: 'red',
    width: 2
                }
            };
    var trace21 = {
        x: xVal21,
    y: yVal21,
    mode: 'lines+markers',
    name: 'Bone Masked',
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
        title: "Left Ear Graph",
    xaxis: {
        title: 'Frequency',
    showgrid: false,
    zeroline: false
                },
    yaxis: {
        title: 'Hearing Level',
    showline: false
                }
            };

    var xVal12 = [AU_r_freq1, AU_r_freq2, AU_r_freq3, AU_r_freq4, AU_r_freq5];
    var yVal12 = [AU_r_hl1, AU_r_hl2, AU_r_hl3, AU_r_hl4, AU_r_hl5];

    var xVal22 = [BM_r_freq1, BM_r_freq2, BM_r_freq3, BM_r_freq4, BM_r_freq5];
    var yVal22 = [BM_r_hl1, BM_r_hl2, BM_r_hl3, BM_r_hl4, BM_r_hl5];

    var trace12 = {
        x: xVal12,
    y: yVal12,
    mode: 'lines+markers',
    name: 'Air Unmasked',
    marker: {
        color: 'blue',
    size: 12,

                },
    line: {
        color: 'blue',
    width: 2
                }
            };
    var trace22 = {
        x: xVal22,
    y: yVal22,
    mode: 'lines+markers',
    name: 'Bone Masked',
    marker: {
        color: 'blue',
    size: 12,
    symbol: ["triangle-se-open", "triangle-se-open", "triangle-se-open", "triangle-se-open", "triangle-se-open"]
                },
    line: {
        color: 'blue',
    width: 2
                }
            };

    var data2 = [trace12, trace22];

    var layout2 = {
        title: "Right Ear Graph",
    xaxis: {
        title: 'Frequency',
    showgrid: false,
    zeroline: false
                },
    yaxis: {
        title: 'Hearing Level',
    showline: false
                }
            };

    const requestoptions = {
        method: 'post',
    headers: {'content-type': 'application/json' },
    body: JSON.stringify({LeftEarAirUnmaskedFrequecy: AU_l_freq, LeftEarAirUnmaskedHearingLevel: AU_l_hl, LeftEarBoneMaskedFrequecy: BM_l_freq, LeftEarBoneMaskedHearingLevel: BM_l_hl, RightEarAirUnmaskedFrequecy: AU_r_freq, RightEarAirUnmaskedHearingLevel: AU_r_hl, RightEarBoneMaskedFrequecy: BM_r_freq, RightEarBoneMaskedHearingLevel: BM_r_hl, GrNo: id })
            };
    fetch('http://localhost:51376/editor/audiologyassessment', requestoptions)
                .then(response => response.json())
                .then(json => {
        alert(json)
                    document.getElementById("LGraph").style.display = "block";
    document.getElementById("RGraph").style.display = "block";
    Plotly.newPlot("LeftEar", data1, layout1)
    Plotly.newPlot("RightEar", data2, layout2)
                })
        }


    }

    function Search(id) {
        debugger
    const requestOptions = {
        method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({id: id })
        };
    fetch('/Editor/GetAudiologyAssessment', requestOptions)
            .then(response => response.json())
            .then(json => {
        console.log(json)
                if (json.IsContent == false) {
        alert("No Record Found")
                    location.reload()
                }
    else {
        document.getElementById("AU_l_freq1").value =
        document.getElementById("AU_l_freq2").value =
        document.getElementById("AU_l_freq3").value =
        document.getElementById("AU_l_freq4").value =
        document.getElementById("AU_l_freq5").value =
        document.getElementById("AU_l_hl1").value =
        document.getElementById("AU_l_hl2").value =
        document.getElementById("AU_l_hl3").value =
        document.getElementById("AU_l_hl4").value =
        document.getElementById("AU_l_hl5").value =
        document.getElementById("BM_l_freq1").value =
        document.getElementById("BM_l_freq2").value =
        document.getElementById("BM_l_freq3").value =
        document.getElementById("BM_l_freq4").value =
        document.getElementById("BM_l_freq5").value =
        document.getElementById("BM_l_hl1").value =
        document.getElementById("BM_l_hl2").value =
        document.getElementById("BM_l_hl3").value =
        document.getElementById("BM_l_hl4").value =
        document.getElementById("BM_l_hl5").value =
        document.getElementById("AU_r_freq1").value =
        document.getElementById("AU_r_freq2").value =
        document.getElementById("AU_r_freq3").value =
        document.getElementById("AU_r_freq4").value =
        document.getElementById("AU_r_freq5").value =
        document.getElementById("AU_r_hl1").value =
        document.getElementById("AU_r_hl2").value =
        document.getElementById("AU_r_hl3").value =
        document.getElementById("AU_r_hl4").value =
        document.getElementById("AU_r_hl5").value =
        document.getElementById("BM_r_freq1").value =
        document.getElementById("BM_r_freq2").value =
        document.getElementById("BM_r_freq3").value =
        document.getElementById("BM_r_freq4").value =
        document.getElementById("BM_r_freq5").value =
        document.getElementById("BM_r_hl1").value =
        document.getElementById("BM_r_hl2").value =
        document.getElementById("BM_r_hl3").value =
        document.getElementById("BM_r_hl4").value =
        document.getElementById("BM_r_hl5").value = " "

                    document.getElementById("LGraph").style.display = "none";
    document.getElementById("RGraph").style.display = "none";

    if (json.IsPresent == true) {
        document.getElementById("SubmitBtn").disabled = true;
    document.getElementById("alert").style.display = "block";

                    }
    else {
        document.getElementById("SubmitBtn").disabled = false;
    document.getElementById("alert").style.display = "none";

                    }
    if (json.Name != "" && json.Father_Name != "" && json.Disability != "") {

        document.getElementById("details").innerHTML = "<ul><li><strong>GR NO#: </strong><span id='GetGRNO'>" + json.GR_NO + "</span></li><li><strong>Name: </strong>" + json.Name + "</li><li><strong>Father Name: </strong>" + json.Father_Name + "</li><li><strong>Disability: </strong>" + json.Disability + "</li><li ><strong>Last Test Date: </strong><span id='testdate'>" + json.Test_Date + "</span></li></ul > "
                        if (json.Test_Date == "No Test Done") {
                            var testdate = document.getElementById("testdate")
    testdate.style.color = "red"
                        }
                    }
    else {
        alert("No Record Found!!")
                        location.reload()
                    }
                }
            })
    }

