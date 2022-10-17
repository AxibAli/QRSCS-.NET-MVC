

    const targetDiv = document.getElementById("secondSection");
    const btn = document.getElementById("addsection");
    btn.onclick = function () {
        if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    $('#addsection').html('Add Section');
    $('#addsection').css({"width": "120px" });
        } else {
        targetDiv.style.display = "block";
    $('#addsection').html('Remove Section');
    $('#addsection').css({"width": "140px" });
        }
    };

    function GetSTDInfo(id) {

        $.get("/Editor/GetOT2RecordbyId?GRNO=" + id, function (res) {
            console.log(res)
            $("#Std_Name").val(res.Student_First_Name + " " + res.Student_Last_Name);

            if (res.Gender == "Male") {
                $("#input_15_0").prop('checked', true);
            } else {
                $("#input_15_1").prop('checked', true);
            }

            const d1 = new Date(res.Dob.match(/\d+/)[0] * 1);
            const formattedDate1 = d1.getFullYear() + '-' + ("0" + (d1.getMonth() + 1)).slice(-2) + '-' + ("0" + d1.getDate()).slice(-2)
            console.log(formattedDate1)
            $('#Std_DOB').val(formattedDate1);
            $("#Disability").val(res.Disability);
        });
    }

    function IEPSubmitData() {
        debugger
    let GR_NO = $("#GR_NO").val();
    let Date_Of_Assessment = $("#d_ex").val();
    let Initial_IEP = $('#meetingInformation_Initial_IEP').val();
    let Date_Initial_IEP = $('#meetingInformation_Initial_IEP').val();
    let Annual_Review = $('#meetingInformation_Annual_Review').val();
    let Date_Annual_Review = $('#meetingInformation_Annual_Review').val();
    let Review_Other_Than_Annaul_Review = $('#meetingInformation_Review_Other_Than_Annaul_Review').val();
    let Date_Review_Other_Than_Annaul_Review = $('#meetingInformation_Review_Other_Than_Annaul_Review').val();
    let Ammendment = $('#meetingInformation_Ammendment').val();
    let Date_Ammendment = $('#meetingInformation_Ammendment').val();
    let Communicating_Language = $('#meetingInformation_Communicating_Language').val();
    let presentLevel_Physical_Development = $('#presentLevel_Physical_Development').val();
    let presentLevel_Communication = $('#presentLevel_Communication').val();
    let presentLevel_Self_Help_Skills = $('#presentLevel_Self_Help_Skills').val();
    let presentLevel_Cognition = $('#presentLevel_Cognition').val();
    let presentLevel_Socialization = $('#presentLevel_Socialization').val();
    let presentLevel_Functional_Academic = $('#presentLevel_Functional_Academic').val();
    let presentLevel_Academic_Performance = $('#presentLevel_Academic_Performance').val();
    let presentLevel_PreVocational_Skills = $('#presentLevel_PreVocational_Skills').val();
    let presentLevel_Others = $('#presentLevel_Others').val();
    let specialInstructional_Question_1 = "";
    let specialInstructional_Question_2 = "";
    let specialInstructional_Question_3 = "";
    let specialInstructional_Question_4 = "";
    let specialInstructional_Question_5 = "";
    let specialInstructional_Question_6 = "";

    if ($('#input_3_0').is(":checked")) {
        specialInstructional_Question_1 = "Yes";
        } else if ($('#input_3_1').is(":checked")) {
        specialInstructional_Question_1 = "No";
        }
    if ($('#input_3_2').is(":checked")) {
        specialInstructional_Question_2 = "Yes";
        } else if ($('#input_3_3').is(":checked")) {
        specialInstructional_Question_2 = "No";
        }
    if ($('#input_3_4').is(":checked")) {
        specialInstructional_Question_3 = "Yes";
        } else if ($('#input_3_5').is(":checked")) {
        specialInstructional_Question_3 = "No";
        }
    if ($('#input_3_6').is(":checked")) {
        specialInstructional_Question_4 = "Yes";
        } else if ($('#input_3_7').is(":checked")) {
        specialInstructional_Question_4 = "No";
        }
    if ($('#input_3_8').is(":checked")) {
        specialInstructional_Question_5 = "Yes";
        } else if ($('#input_3_9').is(":checked")) {
        specialInstructional_Question_5 = "No";
        }
    if ($('#input_3_10').is(":checked")) {
        specialInstructional_Question_6 = "Yes";
        } else if ($('#input_3_11').is(":checked")) {
        specialInstructional_Question_6 = "No";
        }

    let Goal_1 = $("#Goal_1").val();
    let Goal_2 = $("#Goal_2").val();
    let Goal_3 = $("#Goal_3").val();
    let Goal_4 = $("#Goal_4").val();
    let Goal_5 = $("#Goal_5").val();
    let Goal_6 = $("#Goal_6").val();
    let Goal_7 = $("#Goal_7").val();
    let Goal_8 = $("#Goal_8").val();
    let Goal_9 = $("#Goal_9").val();
    let Goal_10 = $("#Goal_10").val();
    let Goal_11 = $("#Goal_11").val();
    let Goal_12 = $("#Goal_12").val();

    let Provider_1 = $("#Provider_1").val();
    let Provider_2 = $("#Provider_2").val();
    let Provider_3 = $("#Provider_3").val();
    let Provider_4 = $("#Provider_4").val();
    let Provider_5 = $("#Provider_5").val();
    let Provider_6 = $("#Provider_6").val();
    let Provider_7 = $("#Provider_7").val();
    let Provider_8 = $("#Provider_8").val();
    let Provider_9 = $("#Provider_9").val();
    let Provider_10 = $("#Provider_10").val();
    let Provider_Others_1 = $("#provider_Others_1").val();
    let Provider_Others_2 = $("#provider_Others_2").val();

    let Evaluation_Method_1 = $("#Evaluation_Method_1").val();
    let Evaluation_Method_2 = $("#Evaluation_Method_2").val();
    let Evaluation_Method_3 = $("#Evaluation_Method_3").val();
    let Evaluation_Method_4 = $("#Evaluation_Method_4").val();
    let Evaluation_Method_5 = $("#Evaluation_Method_5").val();
    let Evaluation_Method_6 = $("#Evaluation_Method_6").val();
    let Evaluation_Method_7 = $("#Evaluation_Method_7").val();
    let Evaluation_Method_8 = $("#Evaluation_Method_8").val();
    let Evaluation_Method_9 = $("#Evaluation_Method_9").val();
    let Evaluation_Method_10 = $("#Evaluation_Method_10").val();
    let Evaluation_Method_Others_1 = $("#evaluation_Method_Others_1").val();
    let Evaluation_Method_Others_2 = $("#evaluation_Method_Others_2").val();

    let Initial_Date_1 = $("#Initial_Date_1").val();
    let Initial_Date_2 = $("#Initial_Date_2").val();
    let Initial_Date_3 = $("#Initial_Date_3").val();
    let Initial_Date_4 = $("#Initial_Date_4").val();
    let Initial_Date_5 = $("#Initial_Date_5").val();
    let Initial_Date_6 = $("#Initial_Date_6").val();
    let Initial_Date_7 = $("#Initial_Date_7").val();
    let Initial_Date_8 = $("#Initial_Date_8").val();
    let Initial_Date_9 = $("#Initial_Date_9").val();
    let Initial_Date_10 = $("#Initial_Date_10").val();
    let Initial_Date_11 = $("#Initial_Date_11").val();
    let Initial_Date_12 = $("#Initial_Date_12").val();

    let Check_Date_1 = $("#Check_Date_1").val();
    let Check_Date_2 = $("#Check_Date_2").val();
    let Check_Date_3 = $("#Check_Date_3").val();
    let Check_Date_4 = $("#Check_Date_4").val();
    let Check_Date_5 = $("#Check_Date_5").val();
    let Check_Date_6 = $("#Check_Date_6").val();
    let Check_Date_7 = $("#Check_Date_7").val();
    let Check_Date_8 = $("#Check_Date_8").val();
    let Check_Date_9 = $("#Check_Date_9").val();
    let Check_Date_10 = $("#Check_Date_10").val();
    let Check_Date_11 = $("#Check_Date_11").val();
    let Check_Date_12 = $("#Check_Date_12").val();

    let Mastery_Date_1 = $("#Mastery_Date_1").val();
    let Mastery_Date_2 = $("#Mastery_Date_2").val();
    let Mastery_Date_3 = $("#Mastery_Date_3").val();
    let Mastery_Date_4 = $("#Mastery_Date_4").val();
    let Mastery_Date_5 = $("#Mastery_Date_5").val();
    let Mastery_Date_6 = $("#Mastery_Date_6").val();
    let Mastery_Date_7 = $("#Mastery_Date_7").val();
    let Mastery_Date_8 = $("#Mastery_Date_8").val();
    let Mastery_Date_9 = $("#Mastery_Date_9").val();
    let Mastery_Date_10 = $("#Mastery_Date_10").val();
    let Mastery_Date_11 = $("#Mastery_Date_11").val();
    let Mastery_Date_12 = $("#Mastery_Date_12").val();

    let Related_Services_1 = $("#supplementaryAids_Related_Services_1").val();
    let Related_Services_2 = $("#supplementaryAids_Related_Services_2").val();
    let Related_Services_3 = $("#supplementaryAids_Related_Services_3").val();
    let Related_Services_4 = $("#supplementaryAids_Related_Services_4").val();
    let Related_Services_5 = $("#supplementaryAids_Related_Services_5").val();
    let Related_Services_6 = $("#supplementaryAids_Related_Services_6").val();
    let Related_Services_7 = $("#supplementaryAids_Related_Services_7").val();

    let Provider_Name_1 = $("#supplementaryAids_Provider_Name_1").val();
    let Provider_Name_2 = $("#supplementaryAids_Provider_Name_2").val();
    let Provider_Name_3 = $("#supplementaryAids_Provider_Name_3").val();
    let Provider_Name_4 = $("#supplementaryAids_Provider_Name_4").val();
    let Provider_Name_5 = $("#supplementaryAids_Provider_Name_5").val();
    let Provider_Name_6 = $("#supplementaryAids_Provider_Name_6").val();
    let Provider_Name_7 = $("#supplementaryAids_Provider_Name_7").val();

    let Hours_per_week_1 = $("#supplementaryAids_Hours_per_week_1").val();
    let Hours_per_week_2 = $("#supplementaryAids_Hours_per_week_2").val();
    let Hours_per_week_3 = $("#supplementaryAids_Hours_per_week_3").val();
    let Hours_per_week_4 = $("#supplementaryAids_Hours_per_week_4").val();
    let Hours_per_week_5 = $("#supplementaryAids_Hours_per_week_5").val();
    let Hours_per_week_6 = $("#supplementaryAids_Hours_per_week_6").val();
    let Hours_per_week_7 = $("#supplementaryAids_Hours_per_week_7").val();

    let Location_1 = $("#supplementaryAids_Location_1").val();
    let Location_2 = $("#supplementaryAids_Location_2").val();
    let Location_3 = $("#supplementaryAids_Location_3").val();
    let Location_4 = $("#supplementaryAids_Location_4").val();
    let Location_5 = $("#supplementaryAids_Location_5").val();
    let Location_6 = $("#supplementaryAids_Location_6").val();
    let Location_7 = $("#supplementaryAids_Location_7").val();

    let Program_Modifications = $("#supplementaryAids_Program_Modifications").val();
    let Recommended_Instructional_Interventions = $("#supplementaryAids_Recommended_Instructional_Interventions").val();

    let DevelopmentTeam_Name_1 = $("#developmentTeam_DevelopmentTeam_Name_1").val();
    let DevelopmentTeam_Name_2 = $("#developmentTeam_DevelopmentTeam_Name_2").val();
    let DevelopmentTeam_Name_3 = $("#developmentTeam_DevelopmentTeam_Name_3").val();
    let DevelopmentTeam_Name_4 = $("#developmentTeam_DevelopmentTeam_Name_4").val();
    let DevelopmentTeam_Name_5 = $("#developmentTeam_DevelopmentTeam_Name_5").val();
    let DevelopmentTeam_Name_6 = $("#developmentTeam_DevelopmentTeam_Name_6").val();
    let DevelopmentTeam_Name_7 = $("#developmentTeam_DevelopmentTeam_Name_7").val();

    let Position_1 = $("#developmentTeam_Position_1").val();
    let Position_2 = $("#developmentTeam_Position_2").val();
    let Position_3 = $("#developmentTeam_Position_3").val();
    let Position_4 = $("#developmentTeam_Position_4").val();
    let Position_5 = $("#developmentTeam_Position_5").val();
    let Position_6 = $("#developmentTeam_Position_6").val();
    let Position_7 = $("#developmentTeam_Position_7").val();



    let data = {
        iEPlanModel: {
        GR_No: GR_NO,
    Date_Of_Assessment: Date_Of_Assessment,
            },
    meetingInformation: {
        //date: Date_Of_Assessment,
        Initial_IEP: Initial_IEP,
    Date_Initial_IEP: Date_Initial_IEP,
    Annual_Review: Annual_Review,
    Date_Annual_Review: Date_Annual_Review,
    Review_Other_Than_Annaul_Review: Review_Other_Than_Annaul_Review,
    Date_Review_Other_Than_Annaul_Review: Date_Review_Other_Than_Annaul_Review,
    Ammendment: Ammendment,
    Date_Ammendment: Date_Ammendment,
    Communicating_Language: Communicating_Language,
            },
    presentLevel: {
        Physical_Development: presentLevel_Physical_Development,
    Communication: presentLevel_Communication,
    Self_Help_Skills: presentLevel_Self_Help_Skills,
    Cognition: presentLevel_Cognition,
    Socialization: presentLevel_Socialization,
    Functional_Academic: presentLevel_Functional_Academic,
    Academic_Performance: presentLevel_Academic_Performance,
    PreVocational_Skills: presentLevel_PreVocational_Skills,
    Others: presentLevel_Others
            },
    specialInstructional: {
        Question_1: specialInstructional_Question_1,
    Question_2: specialInstructional_Question_2,
    Question_3: specialInstructional_Question_3,
    Question_4: specialInstructional_Question_4,
    Question_5: specialInstructional_Question_5,
    Question_6: specialInstructional_Question_6
            },
    iEP_Page3: {
        Goal_1: Goal_1,
    Goal_2: Goal_2,
    Goal_3: Goal_3,
    Goal_4: Goal_4,
    Goal_5: Goal_5,
    Goal_6: Goal_6,
    Goal_7: Goal_7,
    Goal_8: Goal_8,
    Goal_9: Goal_9,
    Goal_10: Goal_10,
    Goal_11: Goal_11,
    Goal_12: Goal_12,
    Provider_1: Provider_1,
    Provider_2: Provider_2,
    Provider_3: Provider_3,
    Provider_4: Provider_4,
    Provider_5: Provider_5,
    Provider_6: Provider_6,
    Provider_7: Provider_7,
    Provider_8: Provider_8,
    Provider_9: Provider_9,
    Provider_10: Provider_10,
    Provider_Others_1: Provider_Others_1,
    Provider_Others_2: Provider_Others_2,
    Evaluation_Method_1: Evaluation_Method_1,
    Evaluation_Method_2: Evaluation_Method_2,
    Evaluation_Method_3: Evaluation_Method_3,
    Evaluation_Method_4: Evaluation_Method_4,
    Evaluation_Method_5: Evaluation_Method_5,
    Evaluation_Method_6: Evaluation_Method_6,
    Evaluation_Method_7: Evaluation_Method_7,
    Evaluation_Method_8: Evaluation_Method_8,
    Evaluation_Method_9: Evaluation_Method_9,
    Evaluation_Method_10: Evaluation_Method_10,
    Evaluation_Method_Others_1: Evaluation_Method_Others_1,
    Evaluation_Method_Others_2: Evaluation_Method_Others_2,
    Initial_Date_1: Initial_Date_1,
    Initial_Date_2: Initial_Date_2,
    Initial_Date_3: Initial_Date_3,
    Initial_Date_4: Initial_Date_4,
    Initial_Date_5: Initial_Date_5,
    Initial_Date_6: Initial_Date_6,
    Initial_Date_7: Initial_Date_7,
    Initial_Date_8: Initial_Date_8,
    Initial_Date_9: Initial_Date_9,
    Initial_Date_10: Initial_Date_10,
    Initial_Date_11: Initial_Date_11,
    Initial_Date_12: Initial_Date_12,
    Check_Date_1: Check_Date_1,
    Check_Date_2: Check_Date_2,
    Check_Date_3: Check_Date_3,
    Check_Date_4: Check_Date_4,
    Check_Date_5: Check_Date_5,
    Check_Date_6: Check_Date_6,
    Check_Date_7: Check_Date_7,
    Check_Date_8: Check_Date_8,
    Check_Date_9: Check_Date_9,
    Check_Date_10: Check_Date_10,
    Check_Date_11: Check_Date_11,
    Check_Date_12: Check_Date_12,
    Mastery_Date_1: Mastery_Date_1,
    Mastery_Date_2: Mastery_Date_2,
    Mastery_Date_3: Mastery_Date_3,
    Mastery_Date_4: Mastery_Date_4,
    Mastery_Date_5: Mastery_Date_5,
    Mastery_Date_6: Mastery_Date_6,
    Mastery_Date_7: Mastery_Date_7,
    Mastery_Date_8: Mastery_Date_8,
    Mastery_Date_9: Mastery_Date_9,
    Mastery_Date_10: Mastery_Date_10,
    Mastery_Date_11: Mastery_Date_11,
    Mastery_Date_12: Mastery_Date_12,
            },
    supplementaryAids: {
        Related_Services_1: Related_Services_1,
    Related_Services_2: Related_Services_2,
    Related_Services_3: Related_Services_3,
    Related_Services_4: Related_Services_4,
    Related_Services_5: Related_Services_5,
    Related_Services_6: Related_Services_6,
    Related_Services_7: Related_Services_7,
    Provider_Name_1: Provider_Name_1,
    Provider_Name_2: Provider_Name_2,
    Provider_Name_3: Provider_Name_3,
    Provider_Name_4: Provider_Name_4,
    Provider_Name_5: Provider_Name_5,
    Provider_Name_6: Provider_Name_6,
    Provider_Name_7: Provider_Name_7,
    Hours_per_week_1: Hours_per_week_1,
    Hours_per_week_2: Hours_per_week_2,
    Hours_per_week_3: Hours_per_week_3,
    Hours_per_week_4: Hours_per_week_4,
    Hours_per_week_5: Hours_per_week_5,
    Hours_per_week_6: Hours_per_week_6,
    Hours_per_week_7: Hours_per_week_7,
    Location_1: Location_1,
    Location_2: Location_2,
    Location_3: Location_3,
    Location_4: Location_4,
    Location_5: Location_5,
    Location_6: Location_6,
    Location_7: Location_7,
    Program_Modifications: Program_Modifications,
    Recommended_Instructional_Interventions: Recommended_Instructional_Interventions

            },
    developmentTeam: {
        DevelopmentTeam_Name_1: DevelopmentTeam_Name_1,
    DevelopmentTeam_Name_2: DevelopmentTeam_Name_2,
    DevelopmentTeam_Name_3: DevelopmentTeam_Name_3,
    DevelopmentTeam_Name_4: DevelopmentTeam_Name_4,
    DevelopmentTeam_Name_5: DevelopmentTeam_Name_5,
    DevelopmentTeam_Name_6: DevelopmentTeam_Name_6,
    DevelopmentTeam_Name_7: DevelopmentTeam_Name_7,
    Position_1: Position_1,
    Position_2: Position_2,
    Position_3: Position_3,
    Position_4: Position_4,
    Position_5: Position_5,
    Position_6: Position_6,
    Position_7: Position_7
            }

        }

    console.log(data);

    const requestOptions = {
        method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(data)
        };
    fetch('/IDD/AddIEP', requestOptions)
            .then(response => response.json())
            .then(json => {
        alert(json)
                location.reload();
            })
    }

    function next_step1() {
        document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("active2").style.color = "red";
    }
    function next_step2() {
        document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
    document.getElementById("active3").style.color = "red";
    }
    function next_step3() {
        document.getElementById("third").style.display = "none";
    document.getElementById("fourth").style.display = "block";
    document.getElementById("active3").style.color = "red";
    }
    function next_step4() {
        document.getElementById("fourth").style.display = "none";
    document.getElementById("fifth").style.display = "block";
    document.getElementById("active3").style.color = "red";

    }
    // Previous Button Script
    function prev_step1() {
        document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("active1").style.color = "red";
    document.getElementById("active2").style.color = "gray";
    }
    function prev_step2() {
        document.getElementById("third").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step3() {
        document.getElementById("fourth").style.display = "none";
    document.getElementById("third").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step4() {
        document.getElementById("fifth").style.display = "none";
    document.getElementById("fourth").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }


