
    var checkBM
    var checkFT

    function GetInfo(id) {
        console.log(id);
    $.get("/Result/GetInfo?GRNO=" + id, function (response) {
        console.log(response)

            document.getElementById("BM_St_Name").innerHTML = response.Name;
    document.getElementById("BM_Father_Name").innerHTML = response.Father_Name;
    document.getElementById("BM_Class").innerHTML = response.Class;
    document.getElementById("BM_Disability").innerHTML = response.Disability;
        });
    }

    function FTGetInfo(id) {
        console.log(id);
    $.get("/Result/GetInfo?GRNO=" + id, function (response) {
        console.log(response)

            document.getElementById("FT_St_Name").innerHTML = response.Name;
    document.getElementById("FT_Father_Name").innerHTML = response.Father_Name;
    document.getElementById("FT_Class").innerHTML = response.Class;
    document.getElementById("FT_Disability").innerHTML = response.Disability;
        });
    }

    function submitBMResult(id) {
        if (id == "") {
            return alert("GR NO is required")
        }
    var biMonthlyModel_Test_Type = document.getElementById("biMonthlyModel_Test_Type").value
    var biMonthlyModel_English = document.getElementById("biMonthlyModel_English").value
    var biMonthlyModel_Urdu = document.getElementById("biMonthlyModel_Urdu").value
    var biMonthlyModel_Maths = document.getElementById("biMonthlyModel_Maths").value
    var biMonthlyModel_Science = document.getElementById("biMonthlyModel_Science").value
    var biMonthlyModel_Social_Studies = document.getElementById("biMonthlyModel_Social_Studies").value
    var biMonthlyModel_Islamiat = document.getElementById("biMonthlyModel_Islamiat").value
    var biMonthlyModel_Computer = document.getElementById("biMonthlyModel_Computer").value
    var biMonthlyModel_Vocational = document.getElementById("biMonthlyModel_Speech").value
    var biMonthlyModel_Mobility = document.getElementById("biMonthlyModel_Language").value
    var biMonthlyModel_Concepts = document.getElementById("biMonthlyModel_Concepts").value
    var biMonthlyModel_Sports = document.getElementById("biMonthlyModel_Art_and_Drawing").value
    var biMonthlyModel_Sindhi = document.getElementById("biMonthlyModel_Sindhi").value

    var biMonthlyModel_Total = Number(biMonthlyModel_English) + Number(biMonthlyModel_Urdu) + Number(biMonthlyModel_Maths) + Number(biMonthlyModel_Science) + Number(biMonthlyModel_Social_Studies) + Number(biMonthlyModel_Islamiat) + Number(biMonthlyModel_Computer) + Number(biMonthlyModel_Vocational) + Number(biMonthlyModel_Mobility) + Number(biMonthlyModel_Concepts) + Number(biMonthlyModel_Sports) + Number(biMonthlyModel_Sindhi)
    var biMonthlyModel_Percentage = (biMonthlyModel_Total / 300) * 100

        if (biMonthlyModel_Percentage >= 90) {
        biMonthlyModel_grade = "A+";
        } else if (biMonthlyModel_Percentage >= 80) {
        biMonthlyModel_grade = "A";
        } else if (biMonthlyModel_Percentage >= 70) {
        biMonthlyModel_grade = "B+";
        } else if (biMonthlyModel_Percentage >= 60) {
        biMonthlyModel_grade = "B";
        } else if (biMonthlyModel_Percentage >= 50) {
        biMonthlyModel_grade = "C";
        } else if (biMonthlyModel_Percentage >= 45) {
        biMonthlyModel_grade = "D";
        } else {
        biMonthlyModel_grade = "F";
        }

    var biMonthlyModel_Result_Date = document.getElementById("biMonthlyModel_Result_Date").value
    var data =
    {
        GR_NO: id,
    Test_Type: biMonthlyModel_Test_Type,
    English: biMonthlyModel_English,
    Urdu: biMonthlyModel_Urdu,
    Maths: biMonthlyModel_Maths,
    Science: biMonthlyModel_Science,
    Social_Studies: biMonthlyModel_Social_Studies,
    Islamiat: biMonthlyModel_Islamiat,
    Computer: biMonthlyModel_Computer,
    Speech: biMonthlyModel_Vocational,
    Language: biMonthlyModel_Mobility,
    Concepts: biMonthlyModel_Concepts,
    Art_and_Drawing: biMonthlyModel_Sports,
    Sindhi: biMonthlyModel_Sindhi,
    Obtained_Total: biMonthlyModel_Total,
    Percentage: biMonthlyModel_Percentage,
    Grade: biMonthlyModel_grade,
    Result_Date: biMonthlyModel_Result_Date
        }
    checkBM = ValidateBM()
    if (checkBM == true) {
            const requestOptions = {
        method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(data)
            };
    fetch('/Result/Add_BM_HIResult', requestOptions)
                .then(response => response.json())
                .then(json => {alert(json)})
        }
    else {
        alert("Error Submitting")
    }
    }

    function submitFTResult(id) {
        var finalResultModel_Term_Type = document.getElementById("finalResultModel_Term_Type").value
    var finalResultModel_English = document.getElementById("finalResultModel_English").value
    var finalResultModel_Urdu = document.getElementById("finalResultModel_Urdu").value
    var finalResultModel_Maths = document.getElementById("finalResultModel_Maths").value
    var finalResultModel_Science = document.getElementById("finalResultModel_Science").value
    var finalResultModel_Social_Studies = document.getElementById("finalResultModel_Social_Studies").value
    var finalResultModel_Islamiat = document.getElementById("finalResultModel_Islamiat").value
    var finalResultModel_Computer = document.getElementById("finalResultModel_Computer").value
    var finalResultModel_Vocational = document.getElementById("finalResultModel_Speech").value
    var finalResultModel_Mobility = document.getElementById("finalResultModel_Language").value
    var finalResultModel_Concepts = document.getElementById("finalResultModel_Concepts").value
    var finalResultModel_Sports = document.getElementById("finalResultModel_Art_and_Drawing").value
    var finalResultModel_Sindhi = document.getElementById("finalResultModel_Sindhi").value
    var finalResultModel_Total = Number(finalResultModel_English) + Number(finalResultModel_Urdu) + Number(finalResultModel_Maths) + Number(finalResultModel_Science) + Number(finalResultModel_Social_Studies) + Number(finalResultModel_Islamiat) + Number(finalResultModel_Computer) + Number(finalResultModel_Vocational) + Number(finalResultModel_Mobility) + Number(finalResultModel_Concepts) + Number(finalResultModel_Sports) + Number(finalResultModel_Sindhi)
    var finalResultModel_Percentage = (finalResultModel_Total / 1200) * 100

        if (finalResultModel_Percentage >= 90) {
        finalResultModel_grade = "A+";
        } else if (finalResultModel_Percentage >= 80) {
        finalResultModel_grade = "A";
        } else if (finalResultModel_Percentage >= 70) {
        finalResultModel_grade = "B+";
        } else if (finalResultModel_Percentage >= 60) {
        finalResultModel_grade = "B";
        } else if (finalResultModel_Percentage >= 50) {
        finalResultModel_grade = "C";
        } else if (finalResultModel_Percentage >= 45) {
        finalResultModel_grade = "D";
        } else {
        finalResultModel_grade = "F";
        }

    var finalResultModel_Result_Date = document.getElementById("finalResultModel_Result_Date").value
    var data =
    {
        GR_NO: id,
    Term_Type: finalResultModel_Term_Type,
    English: finalResultModel_English,
    Urdu: finalResultModel_Urdu,
    Maths: finalResultModel_Maths,
    Science: finalResultModel_Science,
    Social_Studies: finalResultModel_Social_Studies,
    Islamiat: finalResultModel_Islamiat,
    Computer: finalResultModel_Computer,
    Speech: finalResultModel_Vocational,
    Language: finalResultModel_Mobility,
    Concepts: finalResultModel_Concepts,
    Art_and_Drawing: finalResultModel_Sports,
    Sindhi: finalResultModel_Sindhi,
    Obtained_Total: finalResultModel_Total,
    Percentage: finalResultModel_Percentage,
    Grade: finalResultModel_grade,
    Result_Date: finalResultModel_Result_Date
        }
    var data2 = {
        GR_NO: id,
    Term_Type: finalResultModel_Term_Type
        }

    checkBM = ValidateFT()
    if (checkBM == true) {

            const requestOptions = {
        method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(data2)
            };
    fetch('/Result/IsMidTermPresent', requestOptions)
                .then(response => response.json())
                .then(json => {
                    if (json == true) {
                        if (confirm("You are updating the data, are you sure?")) {
                            const requestOptions1 = {
        method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(data)
                            };
    fetch('/Result/Add_FT_HIResult', requestOptions1)
                                .then(response => response.json())
                                .then(json => {
        alert(json)
                                    location.reload();
                                })
                        }
                    } else {
                        const requestOptions2 = {
        method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(data)
                        };
    fetch('/Result/Add_FT_HIResult', requestOptions2)
                            .then(response => response.json())
                            .then(json => {
        alert(json)
                                location.reload();
                            })
                    }
                })
        }
    else {
        alert("Error Submitting")
    }
    }

    function BMTotal() {
        var biMonthlyModel_Total = Number(document.getElementById("biMonthlyModel_English").value) + Number(document.getElementById("biMonthlyModel_Urdu").value) + Number(document.getElementById("biMonthlyModel_Maths").value) + Number(document.getElementById("biMonthlyModel_Science").value) + Number(document.getElementById("biMonthlyModel_Social_Studies").value) + Number(document.getElementById("biMonthlyModel_Islamiat").value) + Number(document.getElementById("biMonthlyModel_Computer").value) + Number(document.getElementById("biMonthlyModel_Speech").value) + Number(document.getElementById("biMonthlyModel_Language").value) + Number(document.getElementById("biMonthlyModel_Concepts").value) + Number(document.getElementById("biMonthlyModel_Art_and_Drawing").value) + Number(document.getElementById("biMonthlyModel_Sindhi").value)
    document.getElementById("BM_Total").innerText = biMonthlyModel_Total

    var biMonthlyModel_Percentage = (biMonthlyModel_Total / 300) * 100
    document.getElementById("BM_Percentage").innerText = biMonthlyModel_Percentage.toFixed(2)

        if (biMonthlyModel_Percentage >= 90) {
        biMonthlyModel_grade = "A+";
        } else if (biMonthlyModel_Percentage >= 80) {
        biMonthlyModel_grade = "A";
        } else if (biMonthlyModel_Percentage >= 70) {
        biMonthlyModel_grade = "B+";
        } else if (biMonthlyModel_Percentage >= 60) {
        biMonthlyModel_grade = "B";
        } else if (biMonthlyModel_Percentage >= 50) {
        biMonthlyModel_grade = "C";
        } else if (biMonthlyModel_Percentage >= 45) {
        biMonthlyModel_grade = "D";
        } else {
        biMonthlyModel_grade = "F";
        }

    document.getElementById("BM_Grade").innerText = biMonthlyModel_grade
    }

    function FTTotal() {
        var finalResultModel_Total = Number(document.getElementById("finalResultModel_English").value) + Number(document.getElementById("finalResultModel_Urdu").value) + Number(document.getElementById("finalResultModel_Maths").value) + Number(document.getElementById("finalResultModel_Science").value) + Number(document.getElementById("finalResultModel_Social_Studies").value) + Number(document.getElementById("finalResultModel_Islamiat").value) + Number(document.getElementById("finalResultModel_Computer").value) + Number(document.getElementById("finalResultModel_Speech").value) + Number(document.getElementById("finalResultModel_Language").value) + Number(document.getElementById("finalResultModel_Concepts").value) + Number(document.getElementById("finalResultModel_Art_and_Drawing").value) + Number(document.getElementById("finalResultModel_Sindhi").value)
    document.getElementById("FT_Total").innerText = finalResultModel_Total

    var finalResultModel_Percentage = (finalResultModel_Total / 1200) * 100
    document.getElementById("FT_Percentage").innerText = finalResultModel_Percentage.toFixed(2)

        if (finalResultModel_Percentage >= 90) {
        finalResultModel_grade = "A+";
        } else if (finalResultModel_Percentage >= 80) {
        finalResultModel_grade = "A";
        } else if (finalResultModel_Percentage >= 70) {
        finalResultModel_grade = "B+";
        } else if (finalResultModel_Percentage >= 60) {
        finalResultModel_grade = "B";
        } else if (finalResultModel_Percentage >= 50) {
        finalResultModel_grade = "C";
        } else if (finalResultModel_Percentage >= 45) {
        finalResultModel_grade = "D";
        } else {
        finalResultModel_grade = "F";
        }

    document.getElementById("FT_Grade").innerText = finalResultModel_grade
    }

    function ValidateBM() {
        var isValid = true
    var biMonthlyModel_English = document.getElementById("biMonthlyModel_English").value
    var biMonthlyModel_Urdu = document.getElementById("biMonthlyModel_Urdu").value
    var biMonthlyModel_Maths = document.getElementById("biMonthlyModel_Maths").value
    var biMonthlyModel_Science = document.getElementById("biMonthlyModel_Science").value
    var biMonthlyModel_Social_Studies = document.getElementById("biMonthlyModel_Social_Studies").value
    var biMonthlyModel_Islamiat = document.getElementById("biMonthlyModel_Islamiat").value
    var biMonthlyModel_Computer = document.getElementById("biMonthlyModel_Computer").value
    var biMonthlyModel_Vocational = document.getElementById("biMonthlyModel_Speech").value
    var biMonthlyModel_Mobility = document.getElementById("biMonthlyModel_Language").value
    var biMonthlyModel_Concepts = document.getElementById("biMonthlyModel_Concepts").value
    var biMonthlyModel_Sports = document.getElementById("biMonthlyModel_Art_and_Drawing").value
    var biMonthlyModel_Sindhi = document.getElementById("biMonthlyModel_Sindhi").value

        if (Number(biMonthlyModel_English) > 25) {
        $('#BMEnglishError').text("Marks should be less than 25")
            isValid = false
        } else if (Number(biMonthlyModel_English) == 0) {
        $('#BMEnglishError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#BMEnglishError').text("")
    }
        if (Number(biMonthlyModel_Urdu) > 25) {
        $('#BMUrduError').text("Marks should be less than 25")
            isValid = false
        } else if (Number(biMonthlyModel_Urdu) == 0) {
        $('#BMUrduError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#BMUrduError').text("")
    } if (Number(biMonthlyModel_Maths) > 25) {
        $('#BMMathsError').text("Marks should be less than 25")
            isValid = false
        } else if (Number(biMonthlyModel_Maths) == 0) {
        $('#BMMathsError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#BMMathsError').text("")
    } if (Number(biMonthlyModel_Science) > 25) {
        $('#BMScienceError').text("Marks should be less than 25")
            isValid = false
        } else if (Number(biMonthlyModel_Science) == 0) {
        $('#BMScienceError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#BMScienceError').text("")
    } if (Number(biMonthlyModel_Social_Studies) > 25) {
        $('#BMSocial_StudiesError').text("Marks should be less than 25")
            isValid = false
        } else if (Number(biMonthlyModel_Social_Studies) == 0) {
        $('#BMSocial_StudiesError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#BMSocial_StudiesError').text("")
    }
        if (Number(biMonthlyModel_Islamiat) > 25) {
        $('#BMIslamiatError').text("Marks should be less than 25")
            isValid = false
        } else if (Number(biMonthlyModel_Islamiat) == 0) {
        $('#BMIslamiatError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#BMIslamiatError').text("")
    }
        if (Number(biMonthlyModel_Computer) > 25) {
        $('#BMComputerError').text("Marks should be less than 25")
            isValid = false
        } else if (Number(biMonthlyModel_Computer) == 0) {
        $('#BMComputerError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#BMComputerError').text("")
    } if (Number(biMonthlyModel_Vocational) > 25) {
        $('#BMSpeechError').text("Marks should be less than 25")
            isValid = false
        } else if (Number(biMonthlyModel_Vocational) == 0) {
        $('#BMSpeechError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#BMSpeechError').text("")
    } if (Number(biMonthlyModel_Mobility) > 25) {
        $('#BMLanguageError').text("Marks should be less than 25")
            isValid = false
        } else if (Number(biMonthlyModel_Mobility) == 0) {
        $('#BMLanguageError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#BMLanguageError').text("")
    } if (Number(biMonthlyModel_Concepts) > 25) {
        $('#BMConceptsError').text("Marks should be less than 25")
            isValid = false
        } else if (Number(biMonthlyModel_Concepts) == 0) {
        $('#BMConceptsError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#BMConceptsError').text("")
    } if (Number(biMonthlyModel_Sports) > 25) {
        $('#BMArt_and_DrawingError').text("Marks should be less than 25")
            isValid = false
        } else if (Number(biMonthlyModel_Sports) == 0) {
        $('#BMArt_and_DrawingError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#BMArt_and_DrawingError').text("")
    } if (Number(biMonthlyModel_Sindhi) > 25) {
        $('#BMSindhiError').text("Marks should be less than 25")
            isValid = false
        } else if (Number(biMonthlyModel_Sindhi) == 0) {
        $('#BMSindhiError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#BMSindhiError').text("")
    }

    return isValid;
    }

    function ValidateFT() {
        var isValid = true
    var finalResultModel_English = document.getElementById("finalResultModel_English").value
    var finalResultModel_Urdu = document.getElementById("finalResultModel_Urdu").value
    var finalResultModel_Maths = document.getElementById("finalResultModel_Maths").value
    var finalResultModel_Science = document.getElementById("finalResultModel_Science").value
    var finalResultModel_Social_Studies = document.getElementById("finalResultModel_Social_Studies").value
    var finalResultModel_Islamiat = document.getElementById("finalResultModel_Islamiat").value
    var finalResultModel_Computer = document.getElementById("finalResultModel_Computer").value
    var finalResultModel_Vocational = document.getElementById("finalResultModel_Speech").value
    var finalResultModel_Mobility = document.getElementById("finalResultModel_Language").value
    var finalResultModel_Concepts = document.getElementById("finalResultModel_Concepts").value
    var finalResultModel_Sports = document.getElementById("finalResultModel_Art_and_Drawing").value
    var finalResultModel_Sindhi = document.getElementById("finalResultModel_Sindhi").value

        if (Number(finalResultModel_English) > 100) {
        $('#FTEnglishError').text("Marks should be less than 100")
            isValid = false
        } else if (Number(finalResultModel_English) == 0) {
        $('#FTEnglishError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#FTEnglishError').text("")
    }
        if (Number(finalResultModel_Urdu) > 100) {
        $('#FTUrduError').text("Marks should be less than 100")
            isValid = false
        } else if (Number(finalResultModel_Urdu) == 0) {
        $('#FTUrduError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#FTUrduError').text("")
    } if (Number(finalResultModel_Maths) > 100) {
        $('#FTMathsError').text("Marks should be less than 100")
            isValid = false
        } else if (Number(finalResultModel_Maths) == 0) {
        $('#FTMathsError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#FTMathsError').text("")
    } if (Number(finalResultModel_Science) > 100) {
        $('#FTScienceError').text("Marks should be less than 100")
            isValid = false
        } else if (Number(finalResultModel_Science) == 0) {
        $('#FTScienceError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#FTScienceError').text("")
    } if (Number(finalResultModel_Social_Studies) > 100) {
        $('#FTSocial_StudiesError').text("Marks should be less than 100")
            isValid = false
        } else if (Number(finalResultModel_Social_Studies) == 0) {
        $('#FTSocial_StudiesError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#FTSocial_StudiesError').text("")
    }
        if (Number(finalResultModel_Islamiat) > 100) {
        $('#FTIslamiatError').text("Marks should be less than 100")
            isValid = false
        } else if (Number(finalResultModel_Islamiat) == 0) {
        $('#FTIslamiatError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#FTIslamiatError').text("")
    }
        if (Number(finalResultModel_Computer) > 100) {
        $('#FTComputerError').text("Marks should be less than 100")
            isValid = false
        } else if (Number(finalResultModel_Computer) == 0) {
        $('#FTComputerError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#FTComputerError').text("")
    } if (Number(finalResultModel_Vocational) > 100) {
        $('#FTSpeechError').text("Marks should be less than 100")
            isValid = false
        } else if (Number(finalResultModel_Vocational) == 0) {
        $('#FTSpeechError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#FTSpeechError').text("")
    } if (Number(finalResultModel_Mobility) > 100) {
        $('#FTLanguageError').text("Marks should be less than 100")
            isValid = false
        } else if (Number(finalResultModel_Mobility) == 0) {
        $('#FTLanguageError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#FTLanguageError').text("")
    } if (Number(finalResultModel_Concepts) > 100) {
        $('#FTConceptsError').text("Marks should be less than 100")
            isValid = false
        } else if (Number(finalResultModel_Concepts) == 0) {
        $('#FTConceptsError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#FTConceptsError').text("")
    } if (Number(finalResultModel_Sports) > 100) {
        $('#FTArt_and_DrawingError').text("Marks should be less than 100")
            isValid = false
        } else if (Number(finalResultModel_Sports) == 0) {
        $('#FTArt_and_DrawingError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#FTArt_and_DrawingError').text("")
    } if (Number(finalResultModel_Sindhi) > 100) {
        $('#FTSindhiError').text("Marks should be less than 100")
            isValid = false
        } else if (Number(finalResultModel_Sindhi) == 0) {
        $('#FTSindhiError').text("Marks is Required")
            isValid = false
        }
    else {
        $('#FTSindhiError').text("")
    }

    return isValid;
    }
