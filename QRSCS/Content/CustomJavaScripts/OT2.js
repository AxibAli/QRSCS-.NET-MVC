

    //const d1 = new Date(res.DateFrom.match(/\d+/)[0] * 1);

    //const formattedDate1 = d1.getFullYear() + '-' + ("0" + (d1.getMonth() + 1)).slice(-2) + '-' + ("0" + d1.getDate()).slice(-2)
    //console.log(formattedDate1)
    //$('#DateFrom').val(formattedDate1);

    //const d2 = new Date(res.DateTo.match(/\d+/)[0] * 1);

    //const formattedDate2 = d2.getFullYear() + '-' + ("0" + (d2.getMonth() + 1)).slice(-2) + '-' + ("0" + d2.getDate()).slice(-2)
    //console.log(formattedDate2)
    //$('#DateTo').val(formattedDate2);



    function GetSTDInfo(id) {

        $.get("/Editor/GetOT2RecordbyId?GRNO=" + id, function (res) {
            console.log(res)
            $("#ST_Name").val(res.Student_First_Name + " " + res.Student_Last_Name);

            if (res.Gender == "Male") {
                $("#input_15_0").prop('checked', true);
            } else {
                $("#input_15_1").prop('checked', true);
            }

            const d1 = new Date(res.Dob.match(/\d+/)[0] * 1);
            const formattedDate1 = d1.getFullYear() + '-' + ("0" + (d1.getMonth() + 1)).slice(-2) + '-' + ("0" + d1.getDate()).slice(-2)
            console.log(formattedDate1)
            $('#ST_DOB').val(formattedDate1);
        });
    }

    function APScore() {
        let AV_1 = $("#auditoryProcessing_AV_1").val();
    let AV_2 = $("#auditoryProcessing_AV_2").val();
    let SN_3 = $("#auditoryProcessing_SN_3").val();
    let SN_4 = $("#auditoryProcessing_SN_4").val();
    let AV_5 = $("#auditoryProcessing_AV_5").val();
    let SN_6 = $("#auditoryProcessing_SN_6").val();
    let SN_7 = $("#auditoryProcessing_SN_7").val();
    let RG_8 = $("#auditoryProcessing_RG_8").val();

    let Auditory_Raw_Score = Number(AV_1) + Number(AV_2) + Number(SN_3) + Number(SN_4) + Number(AV_5) + Number(SN_6) + Number(SN_7) + Number(RG_8);
    $("#APTextbox").val(Auditory_Raw_Score);
    }

    function VPScore() {
        let SN_9 = $("#visualProcessing_SN_9").val();
    let SN_10 = $("#visualProcessing_SN_10").val();
    let SN_11 = $("#visualProcessing_SN_11").val();
    let RG_12 = $("#visualProcessing_RG_12").val();
    let SN_13 = $("#visualProcessing_SN_13").val();
    let SK_14 = $("#visualProcessing_SK_14").val();
    let Visual_Raw_Score = Number(SN_9) + Number(SN_10) + Number(SN_11) + Number(RG_12) + Number(SN_13) + Number(SK_14);
    $("#VPTextbox").val(Visual_Raw_Score);
    }

    function TPScore() {
        let SN_16 = $("#touchProcessing_SN_16").val();
    let SN_17 = $("#touchProcessing_SN_17").val();
    let AV_18 = $("#touchProcessing_AV_18").val();
    let SN_19 = $("#touchProcessing_SN_19").val();
    let SN_20 = $("#touchProcessing_SN_20").val();
    let SK_21 = $("#touchProcessing_SK_21").val();
    let SK_22 = $("#touchProcessing_SK_22").val();
    let RG_23 = $("#touchProcessing_RG_23").val();
    let RG_24 = $("#touchProcessing_RG_24").val();
    let SK_25 = $("#touchProcessing_SK_25").val();
    let RG_26 = $("#touchProcessing_RG_26").val();
    let Touch_Raw_Score = Number(SN_16) + Number(SN_17) + Number(AV_18) + Number(SN_19) + Number(SN_20) + Number(SK_21) + Number(SK_22) + Number(RG_23) + Number(RG_24) + Number(SK_25) + Number(RG_26);
    $("#TPTextbox").val(Touch_Raw_Score);
    }

    function MPScore() {
        let SK_27 = $("#movementProcessing_SK_27").val();
    let SK_28 = $("#movementProcessing_SK_28").val();
    let SK_29 = $("#movementProcessing_SK_29").val();
    let SK_30 = $("#movementProcessing_SK_30").val();
    let SK_31 = $("#movementProcessing_SK_31").val();
    let SK_32 = $("#movementProcessing_SK_32").val();
    let RG_33 = $("#movementProcessing_RG_33").val();
    let RG_34 = $("#movementProcessing_RG_34").val();
    let Movement_Raw_Score = Number(SK_27) + Number(SK_28) + Number(SK_29) + Number(SK_30) + Number(SK_31) + Number(SK_32) + Number(RG_33) + Number(RG_34);
    $("#MPTextbox").val(Movement_Raw_Score);
    }

    function BPScore() {
        let RG_35 = $("#bodyPositionProcessing_RG_35").val();
    let RG_36 = $("#bodyPositionProcessing_RG_36").val();
    let RG_37 = $("#bodyPositionProcessing_RG_37").val();
    let RG_38 = $("#bodyPositionProcessing_RG_38").val();
    let RG_39 = $("#bodyPositionProcessing_RG_39").val();
    let RG_40 = $("#bodyPositionProcessing_RG_40").val();
    let SK_41 = $("#bodyPositionProcessing_SK_41").val();
    let SK_42 = $("#bodyPositionProcessing_SK_42").val();
    let Body_Position_Raw_Score = Number(RG_35) + Number(RG_36) + Number(RG_37) + Number(RG_38) + Number(RG_39) + Number(RG_40) + Number(SK_41) + Number(SK_42);
    $("#BPTextbox").val(Body_Position_Raw_Score);
    }

    function OSPScore() {
        let SN_44 = $("#oralSensoryProcessing_SN_44").val();
    let SN_45 = $("#oralSensoryProcessing_SN_45").val();
    let SN_46 = $("#oralSensoryProcessing_SN_46").val();
    let SN_47 = $("#oralSensoryProcessing_SN_47").val();
    let SK_48 = $("#oralSensoryProcessing_SK_48").val();
    let SK_49 = $("#oralSensoryProcessing_SK_49").val();
    let SK_50 = $("#oralSensoryProcessing_SK_50").val();
    let SK_51 = $("#oralSensoryProcessing_SK_51").val();
    let SN_52 = $("#oralSensoryProcessing_SN_52").val();
    let Oral_Sensory_Raw_Score = Number(SN_44) + Number(SN_45) + Number(SN_46) + Number(SN_47) + Number(SK_48) + Number(SK_49) + Number(SK_50) + Number(SK_51) + Number(SN_52);
    $("#OSPTextbox").val(Oral_Sensory_Raw_Score);
    }

    function CPScore() {
        let RG_53 = $("#conductProcessing_RG_53").val();
    let RG_54 = $("#conductProcessing_RG_54").val();
    let SK_55 = $("#conductProcessing_SK_55").val();
    let SK_56 = $("#conductProcessing_SK_56").val();
    let RG_57 = $("#conductProcessing_RG_57").val();
    let AV_58 = $("#conductProcessing_AV_58").val();
    let AV_59 = $("#conductProcessing_AV_59").val();
    let SK_60 = $("#conductProcessing_SK_60").val();
    let AV_61 = $("#conductProcessing_AV_61").val();
    let Conduct_Raw_Score = Number(RG_53) + Number(RG_54) + Number(SK_55) + Number(SK_56) + Number(RG_57) + Number(AV_58) + Number(AV_59) + Number(SK_60) + Number(AV_61);
    $("#CPTextbox").val(Conduct_Raw_Score);
    }

    function SEPScore() {
        let RG_62 = $("#socialEmotionalProcessing_RG_62").val();
    let AV_63 = $("#socialEmotionalProcessing_AV_63").val();
    let AV_64 = $("#socialEmotionalProcessing_AV_64").val();
    let AV_65 = $("#socialEmotionalProcessing_AV_65").val();
    let AV_66 = $("#socialEmotionalProcessing_AV_66").val();
    let AV_67 = $("#socialEmotionalProcessing_AV_67").val();
    let AV_68 = $("#socialEmotionalProcessing_AV_68").val();
    let SN_69 = $("#socialEmotionalProcessing_SN_69").val();
    let AV_70 = $("#socialEmotionalProcessing_AV_70").val();
    let AV_71 = $("#socialEmotionalProcessing_AV_71").val();
    let AV_72 = $("#socialEmotionalProcessing_AV_72").val();
    let SN_73 = $("#socialEmotionalProcessing_SN_73").val();
    let AV_74 = $("#socialEmotionalProcessing_AV_74").val();
    let AV_75 = $("#socialEmotionalProcessing_AV_75").val();
    let Social_Emotional_Score = Number(RG_62) + Number(AV_63) + Number(AV_64) + Number(AV_65) + Number(AV_66) + Number(AV_67) + Number(AV_68) + Number(SN_69) + Number(AV_70) + Number(AV_71) + Number(AV_72) + Number(SN_73) + Number(AV_74) + Number(AV_75);
    $("#SETextbox").val(Social_Emotional_Score);
    }

    function AScore() {
        let RG_76 = $("#attentionalProcessing_RG_76").val();
    let SN_77 = $("#attentionalProcessing_SN_77").val();
    let SN_78 = $("#attentionalProcessing_SN_78").val();
    let RG_79 = $("#attentionalProcessing_RG_79").val();
    let RG_80 = $("#attentionalProcessing_RG_80").val();
    let AV_81 = $("#attentionalProcessing_AV_81").val();
    let SK_82 = $("#attentionalProcessing_SK_82").val();
    let SK_83 = $("#attentionalProcessing_SK_83").val();
    let SN_84 = $("#attentionalProcessing_SN_84").val();
    let RG_85 = $("#attentionalProcessing_RG_85").val();
    let Attentional_Score = Number(RG_76) + Number(SN_77) + Number(SN_78) + Number(RG_79) + Number(RG_80) + Number(AV_81) + Number(SK_82) + Number(SK_83) + Number(SN_84) + Number(RG_85);
    $("#ATextbox").val(Attentional_Score);
    }

    function SSummary() {
        let AV_1 = $("#auditoryProcessing_AV_1").val();
    let AV_2 = $("#auditoryProcessing_AV_2").val();
    let SN_3 = $("#auditoryProcessing_SN_3").val();
    let SN_4 = $("#auditoryProcessing_SN_4").val();
    let AV_5 = $("#auditoryProcessing_AV_5").val();
    let SN_6 = $("#auditoryProcessing_SN_6").val();
    let SN_7 = $("#auditoryProcessing_SN_7").val();
    let RG_8 = $("#auditoryProcessing_RG_8").val();
    let SN_9 = $("#visualProcessing_SN_9").val();
    let RG_12 = $("#visualProcessing_RG_12").val();
    let SN_13 = $("#visualProcessing_SN_13").val();
    let SK_14 = $("#visualProcessing_SK_14").val();
    let AV_15 = $("#visualProcessing_AV_15").val();
    let SN_16 = $("#touchProcessing_SN_16").val();
    let AV_18 = $("#touchProcessing_AV_18").val();
    let SN_19 = $("#touchProcessing_SN_19").val();
    let SN_20 = $("#touchProcessing_SN_20").val();
    let SK_21 = $("#touchProcessing_SK_21").val();
    let SK_22 = $("#touchProcessing_SK_22").val();
    let RG_23 = $("#touchProcessing_RG_23").val();
    let RG_24 = $("#touchProcessing_RG_24").val();
    let SK_25 = $("#touchProcessing_SK_25").val();
    let RG_26 = $("#touchProcessing_RG_26").val();
    let SK_27 = $("#movementProcessing_SK_27").val();
    let SK_28 = $("#movementProcessing_SK_28").val();
    let SK_30 = $("#movementProcessing_SK_30").val();
    let SK_31 = $("#movementProcessing_SK_31").val();
    let SK_32 = $("#movementProcessing_SK_32").val();
    let RG_33 = $("#movementProcessing_RG_33").val();
    let RG_34 = $("#movementProcessing_RG_34").val();
    let RG_35 = $("#bodyPositionProcessing_RG_35").val();
    let RG_36 = $("#bodyPositionProcessing_RG_36").val();
    let RG_37 = $("#bodyPositionProcessing_RG_37").val();
    let RG_38 = $("#bodyPositionProcessing_RG_38").val();
    let RG_39 = $("#bodyPositionProcessing_RG_39").val();
    let RG_40 = $("#bodyPositionProcessing_RG_40").val();
    let SK_41 = $("#bodyPositionProcessing_SK_41").val();
    let SN_44 = $("#oralSensoryProcessing_SN_44").val();
    let SN_45 = $("#oralSensoryProcessing_SN_45").val();
    let SN_46 = $("#oralSensoryProcessing_SN_46").val();
    let SN_47 = $("#oralSensoryProcessing_SN_47").val();
    let SK_48 = $("#oralSensoryProcessing_SK_48").val();
    let SK_49 = $("#oralSensoryProcessing_SK_49").val();
    let SK_50 = $("#oralSensoryProcessing_SK_50").val();
    let SK_51 = $("#oralSensoryProcessing_SK_51").val();
    let SN_52 = $("#oralSensoryProcessing_SN_52").val();
    let RG_53 = $("#conductProcessing_RG_53").val();
    let RG_54 = $("#conductProcessing_RG_54").val();
    let SK_55 = $("#conductProcessing_SK_55").val();
    let SK_56 = $("#conductProcessing_SK_56").val();
    let RG_57 = $("#conductProcessing_RG_57").val();
    let AV_58 = $("#conductProcessing_AV_58").val();
    let AV_59 = $("#conductProcessing_AV_59").val();
    let SK_60 = $("#conductProcessing_SK_60").val();
    let AV_61 = $("#conductProcessing_AV_61").val();
    let RG_62 = $("#socialEmotionalProcessing_RG_62").val();
    let AV_63 = $("#socialEmotionalProcessing_AV_63").val();
    let AV_64 = $("#socialEmotionalProcessing_AV_64").val();
    let AV_65 = $("#socialEmotionalProcessing_AV_65").val();
    let AV_66 = $("#socialEmotionalProcessing_AV_66").val();
    let AV_67 = $("#socialEmotionalProcessing_AV_67").val();
    let AV_68 = $("#socialEmotionalProcessing_AV_68").val();
    let SN_69 = $("#socialEmotionalProcessing_SN_69").val();
    let AV_70 = $("#socialEmotionalProcessing_AV_70").val();
    let AV_71 = $("#socialEmotionalProcessing_AV_71").val();
    let AV_72 = $("#socialEmotionalProcessing_AV_72").val();
    let SN_73 = $("#socialEmotionalProcessing_SN_73").val();
    let AV_74 = $("#socialEmotionalProcessing_AV_74").val();
    let AV_75 = $("#socialEmotionalProcessing_AV_75").val();
    let RG_76 = $("#attentionalProcessing_RG_76").val();
    let SN_77 = $("#attentionalProcessing_SN_77").val();
    let SN_78 = $("#attentionalProcessing_SN_78").val();
    let RG_79 = $("#attentionalProcessing_RG_79").val();
    let RG_80 = $("#attentionalProcessing_RG_80").val();
    let AV_81 = $("#attentionalProcessing_AV_81").val();
    let SK_82 = $("#attentionalProcessing_SK_82").val();
    let SK_83 = $("#attentionalProcessing_SK_83").val();
    let SN_84 = $("#attentionalProcessing_SN_84").val();
    let RG_85 = $("#attentionalProcessing_RG_85").val();
    let RG_86 = $("#attentionalProcessing_RG_86").val();

    $("#S_14").html(SK_14);
    $("#S_21").html(SK_21);
    $("#S_22").html(SK_22);
    $("#S_25").html(SK_25);
    $("#S_27").html(SK_27);
    $("#S_28").html(SK_28);
    $("#S_30").html(SK_30);
    $("#S_31").html(SK_31);
    $("#S_32").html(SK_32);
    $("#S_41").html(SK_41);
    $("#S_48").html(SK_48);
    $("#S_49").html(SK_49);
    $("#S_50").html(SK_50);
    $("#S_51").html(SK_51);
    $("#S_55").html(SK_55);
    $("#S_56").html(SK_56);
    $("#S_60").html(SK_60);
    $("#S_82").html(SK_83);
    $("#S_83").html(SK_82);

    let Raw_Score_14 = $("#S_14").text();
    let Raw_Score_21 = $("#S_21").text();
    let Raw_Score_22 = $("#S_22").text();
    let Raw_Score_25 = $("#S_25").text();
    let Raw_Score_27 = $("#S_27").text();
    let Raw_Score_28 = $("#S_28").text();
    let Raw_Score_30 = $("#S_30").text();
    let Raw_Score_31 = $("#S_31").text();
    let Raw_Score_32 = $("#S_32").text();
    let Raw_Score_41 = $("#S_41").text();
    let Raw_Score_48 = $("#S_48").text();
    let Raw_Score_49 = $("#S_49").text();
    let Raw_Score_50 = $("#S_50").text();
    let Raw_Score_51 = $("#S_51").text();
    let Raw_Score_55 = $("#S_55").text();
    let Raw_Score_56 = $("#S_56").text();
    let Raw_Score_60 = $("#S_60").text();
    let Raw_Score_82 = $("#S_82").text();
    let Raw_Score_83 = $("#S_83").text();

    let Seeking_Score = Number(Raw_Score_14) + Number(Raw_Score_21) + Number(Raw_Score_22) + Number(Raw_Score_25) + Number(Raw_Score_27) + Number(Raw_Score_28) + Number(Raw_Score_30) + Number(Raw_Score_31) +
    Number(Raw_Score_32) + Number(Raw_Score_41) + Number(Raw_Score_48) + Number(Raw_Score_49) + Number(Raw_Score_50) + Number(Raw_Score_51) +
    Number(Raw_Score_55) + Number(Raw_Score_56) + Number(Raw_Score_60) + Number(Raw_Score_82) + Number(Raw_Score_83);
    $("#SQ_RawScoreTotal").html(Seeking_Score);

    $("#A_1").html(AV_1);
    $("#A_2").html(AV_2);
    $("#A_5").html(AV_5);
    $("#A_15").html(AV_15);
    $("#A_18").html(AV_18);
    $("#A_58").html(AV_58);
    $("#A_59").html(AV_59);
    $("#A_61").html(AV_61);
    $("#A_63").html(AV_63);
    $("#A_64").html(AV_64);
    $("#A_65").html(AV_65);
    $("#A_66").html(AV_66);
    $("#A_67").html(AV_67);
    $("#A_68").html(AV_68);
    $("#A_70").html(AV_70);
    $("#A_71").html(AV_71);
    $("#A_72").html(AV_72);
    $("#A_74").html(AV_74);
    $("#A_75").html(AV_75);
    $("#A_81").html(AV_81);

    let Raw_Score_1 = $("#A_1").text();
    let Raw_Score_2 = $("#A_12").text();
    let Raw_Score_5 = $("#A_5").text();
    let Raw_Score_15 = $("#A_15").text();
    let Raw_Score_18 = $("#A_18").text();
    let Raw_Score_58 = $("#A_58").text();
    let Raw_Score_59 = $("#A_59").text();
    let Raw_Score_61 = $("#A_61").text();
    let Raw_Score_63 = $("#A_63").text();
    let Raw_Score_64 = $("#A_64").text();
    let Raw_Score_65 = $("#A_65").text();
    let Raw_Score_66 = $("#A_66").text();
    let Raw_Score_67 = $("#A_67").text();
    let Raw_Score_68 = $("#A_68").text();
    let Raw_Score_70 = $("#A_70").text();
    let Raw_Score_71 = $("#A_71").text();
    let Raw_Score_72 = $("#A_72").text();
    let Raw_Score_74 = $("#A_74").text();
    let Raw_Score_75 = $("#A_75").text();
    let Raw_Score_81 = $("#A_81").text();

    let Avoiding_Score = Number(Raw_Score_1) + Number(Raw_Score_2) + Number(Raw_Score_5) + Number(Raw_Score_15) + Number(Raw_Score_18) + Number(Raw_Score_58) + Number(Raw_Score_59) + Number(Raw_Score_61) +
    Number(Raw_Score_63) + Number(Raw_Score_64) + Number(Raw_Score_65) + Number(Raw_Score_66) + Number(Raw_Score_67) + Number(Raw_Score_68) + Number(Raw_Score_70) +
    Number(Raw_Score_71) + Number(Raw_Score_72) + Number(Raw_Score_74) + Number(Raw_Score_75) + Number(Raw_Score_81);
    $("#AQ_RawScoreTotal").html(Avoiding_Score);

    $("#SS_3").html(SN_3);
    $("#SS_4").html(SN_4);
    $("#SS_6").html(SN_6);
    $("#SS_7").html(SN_7);
    $("#SS_9").html(SN_9);
    $("#SS_13").html(SN_13);
    $("#SS_16").html(SN_16);
    $("#SS_19").html(SN_19);
    $("#SS_20").html(SN_20);
    $("#SS_44").html(SN_44);
    $("#SS_45").html(SN_45);
    $("#SS_46").html(SN_46);
    $("#SS_47").html(SN_47);
    $("#SS_52").html(SN_52);
    $("#SS_69").html(SN_69);
    $("#SS_73").html(SN_73);
    $("#SS_77").html(SN_77);
    $("#SS_78").html(SN_78);
    $("#SS_84").html(SN_84);

    let Raw_Score_3 = $("#SS_3").text();
    let Raw_Score_4 = $("#SS_4").text();
    let Raw_Score_6 = $("#SS_6").text();
    let Raw_Score_7 = $("#SS_7").text();
    let Raw_Score_9 = $("#SS_9").text();
    let Raw_Score_13 = $("#SS_13").text();
    let Raw_Score_16 = $("#SS_16").text();
    let Raw_Score_19 = $("#SS_19").text();
    let Raw_Score_20 = $("#SS_20").text();
    let Raw_Score_44 = $("#SS_44").text();
    let Raw_Score_45 = $("#SS_45").text();
    let Raw_Score_46 = $("#SS_46").text();
    let Raw_Score_47 = $("#SS_47").text();
    let Raw_Score_52 = $("#SS_52").text();
    let Raw_Score_69 = $("#SS_69").text();
    let Raw_Score_73 = $("#SS_73").text();
    let Raw_Score_77 = $("#SS_77").text();
    let Raw_Score_78 = $("#SS_78").text();
    let Raw_Score_84 = $("#SS_84").text();

    let Sensitivity_Score = Number(Raw_Score_3) + Number(Raw_Score_4) + Number(Raw_Score_6) + Number(Raw_Score_7) + Number(Raw_Score_9) + Number(Raw_Score_13) + Number(Raw_Score_16) +
    Number(Raw_Score_19) + Number(Raw_Score_20) + Number(Raw_Score_44) + Number(Raw_Score_45) + Number(Raw_Score_46) + + Number(Raw_Score_47) + Number(Raw_Score_52) + Number(Raw_Score_69) +
    Number(Raw_Score_73) + Number(Raw_Score_77) + Number(Raw_Score_78) + Number(Raw_Score_84);
    $("#SSQ_RawScoreTotal").html(Sensitivity_Score);

    $("#R_8").html(RG_8);
    $("#R_12").html(RG_12);
    $("#R_23").html(RG_23);
    $("#R_24").html(RG_24);
    $("#R_26").html(RG_26);
    $("#R_33").html(RG_33);
    $("#R_34").html(RG_34);
    $("#R_35").html(RG_35);
    $("#R_36").html(RG_36);
    $("#R_37").html(RG_37);
    $("#R_38").html(RG_38);
    $("#R_39").html(RG_39);
    $("#R_40").html(RG_40);
    $("#R_53").html(RG_53);
    $("#R_54").html(RG_54);
    $("#R_57").html(RG_57);
    $("#R_62").html(RG_62);
    $("#R_76").html(RG_76);
    $("#R_79").html(RG_79);
    $("#R_80").html(RG_80);
    $("#R_85").html(RG_85);
    $("#R_86").html(RG_86);

    let Raw_Score_8 = $("#R_8").text();
    let Raw_Score_12 = $("#R_12").text();
    let Raw_Score_23 = $("#R_23").text();
    let Raw_Score_24 = $("#R_24").text();
    let Raw_Score_26 = $("#R_26").text();
    let Raw_Score_33 = $("#R_33").text();
    let Raw_Score_34 = $("#R_34").text();
    let Raw_Score_35 = $("#R_35").text();
    let Raw_Score_36 = $("#R_36").text();
    let Raw_Score_37 = $("#R_37").text();
    let Raw_Score_38 = $("#R_38").text();
    let Raw_Score_39 = $("#R_39").text();
    let Raw_Score_40 = $("#R_40").text();
    let Raw_Score_53 = $("#R_53").text();
    let Raw_Score_54 = $("#R_54").text();
    let Raw_Score_57 = $("#R_57").text();
    let Raw_Score_62 = $("#R_62").text();
    let Raw_Score_76 = $("#R_76").text();
    let Raw_Score_79 = $("#R_79").text();
    let Raw_Score_80 = $("#R_80").text();
    let Raw_Score_85 = $("#R_85").text();
    let Raw_Score_86 = $("#R_86").text();

    let Registration_Score = Number(Raw_Score_8) + Number(Raw_Score_12) + Number(Raw_Score_23) + Number(Raw_Score_24) + Number(Raw_Score_26) + Number(Raw_Score_33) +
    Number(Raw_Score_34) + Number(Raw_Score_35) + Number(Raw_Score_36) + Number(Raw_Score_37) + Number(Raw_Score_38) + Number(Raw_Score_39) + Number(Raw_Score_40) + Number(Raw_Score_53) +
    Number(Raw_Score_54) + Number(Raw_Score_57) + Number(Raw_Score_62) + Number(Raw_Score_76) + Number(Raw_Score_79) + Number(Raw_Score_80) + Number(Raw_Score_85) + Number(Raw_Score_86);
    $("#RQ_RawScoreTotal").html(Registration_Score);

    }

    function APGetData() {
        debugger
    let GR_NO = $("#GRNO").val();
    let Test_Date = $("#d_ex").val();
    let Examiner_Name = $("#Ex_Name").val();
    let Examiner_Profession = $("#Ex_Profession").val();
    let Caregiver_Name = $("#C_Name").val();
    let Caregiver_Relationship = $("#C_Relation").val();
    let Name_Of_School = $("#DC_Name").val();
    let School_Level = $("#S_Level").val();
    let Child_Order = $("#C_Order").val();
    let Children_Years_Living = $("#CY_Living").val();

    let AV_1 = $("#auditoryProcessing_AV_1").val();
    let AV_2 = $("#auditoryProcessing_AV_2").val();
    let SN_3 = $("#auditoryProcessing_SN_3").val();
    let SN_4 = $("#auditoryProcessing_SN_4").val();
    let AV_5 = $("#auditoryProcessing_AV_5").val();
    let SN_6 = $("#auditoryProcessing_SN_6").val();
    let SN_7 = $("#auditoryProcessing_SN_7").val();
    let RG_8 = $("#auditoryProcessing_RG_8").val();
    let Auditory_Raw_Score = Number(AV_1) + Number(AV_2) + Number(SN_3) + Number(SN_4) + Number(AV_5) + Number(SN_6) + Number(SN_7) + Number(RG_8);
    let Auditory_Comments = $("#Auditory_Comments").val();

    let SN_9 = $("#visualProcessing_SN_9").val();
    let SN_10 = $("#visualProcessing_SN_10").val();
    let SN_11 = $("#visualProcessing_SN_11").val();
    let RG_12 = $("#visualProcessing_RG_12").val();
    let SN_13 = $("#visualProcessing_SN_13").val();
    let SK_14 = $("#visualProcessing_SK_14").val();
    let AV_15 = $("#visualProcessing_AV_15").val();
    let Visual_Raw_Score = Number(SN_9) + Number(SN_10) + Number(SN_11) + Number(RG_12) + Number(SN_13) + Number(SK_14);
    let Visual_Comments = $("#Visual_Comments").val();

    let SN_16 = $("#touchProcessing_SN_16").val();
    let SN_17 = $("#touchProcessing_SN_17").val();
    let AV_18 = $("#touchProcessing_AV_18").val();
    let SN_19 = $("#touchProcessing_SN_19").val();
    let SN_20 = $("#touchProcessing_SN_20").val();
    let SK_21 = $("#touchProcessing_SK_21").val();
    let SK_22 = $("#touchProcessing_SK_22").val();
    let RG_23 = $("#touchProcessing_RG_23").val();
    let RG_24 = $("#touchProcessing_RG_24").val();
    let SK_25 = $("#touchProcessing_SK_25").val();
    let RG_26 = $("#touchProcessing_RG_26").val();
    let Touch_Raw_Score = Number(SN_16) + Number(SN_17) + Number(AV_18) + Number(SN_19) + Number(SN_20) + Number(SK_21) + Number(SK_22) + Number(RG_23) + Number(RG_24) + Number(SK_25) + Number(RG_26);
    let Touch_Comments = $("#Touch_Comments").val();

    let SK_27 = $("#movementProcessing_SK_27").val();
    let SK_28 = $("#movementProcessing_SK_28").val();
    let SK_29 = $("#movementProcessing_SK_29").val();
    let SK_30 = $("#movementProcessing_SK_30").val();
    let SK_31 = $("#movementProcessing_SK_31").val();
    let SK_32 = $("#movementProcessing_SK_32").val();
    let RG_33 = $("#movementProcessing_RG_33").val();
    let RG_34 = $("#movementProcessing_RG_34").val();
    let Movement_Raw_Score = Number(SK_27) + Number(SK_28) + Number(SK_29) + Number(SK_30) + Number(SK_31) + Number(SK_32) + Number(RG_33) + Number(RG_34);
    let Movement_Comments = $("#Movement_Comments").val();

    let RG_35 = $("#bodyPositionProcessing_RG_35").val();
    let RG_36 = $("#bodyPositionProcessing_RG_36").val();
    let RG_37 = $("#bodyPositionProcessing_RG_37").val();
    let RG_38 = $("#bodyPositionProcessing_RG_38").val();
    let RG_39 = $("#bodyPositionProcessing_RG_39").val();
    let RG_40 = $("#bodyPositionProcessing_RG_40").val();
    let SK_41 = $("#bodyPositionProcessing_SK_41").val();
    let SK_42 = $("#bodyPositionProcessing_SK_42").val();
    let Body_Position_Raw_Score = Number(RG_35) + Number(RG_36) + Number(RG_37) + Number(RG_38) + Number(RG_39) + Number(RG_40) + Number(SK_41) + Number(SK_42);
    let Body_Position_Comments = $("#Body_Position_Comments").val();

    let Item_43 = $("#oralSensoryProcessing_Item_43").val();
    let SN_44 = $("#oralSensoryProcessing_SN_44").val();
    let SN_45 = $("#oralSensoryProcessing_SN_45").val();
    let SN_46 = $("#oralSensoryProcessing_SN_46").val();
    let SN_47 = $("#oralSensoryProcessing_SN_47").val();
    let SK_48 = $("#oralSensoryProcessing_SK_48").val();
    let SK_49 = $("#oralSensoryProcessing_SK_49").val();
    let SK_50 = $("#oralSensoryProcessing_SK_50").val();
    let SK_51 = $("#oralSensoryProcessing_SK_51").val();
    let SN_52 = $("#oralSensoryProcessing_SN_52").val();
    let Oral_Sensory_Raw_Score = Number(SN_44) + Number(SN_45) + Number(SN_46) + Number(SN_47) + Number(SK_48) + Number(SK_49) + Number(SK_50) + Number(SK_51) + Number(SN_52);
    let Oral_Sensory_Comments = $("#Oral_Sensory_Comments").val();

    let RG_53 = $("#conductProcessing_RG_53").val();
    let RG_54 = $("#conductProcessing_RG_54").val();
    let SK_55 = $("#conductProcessing_SK_55").val();
    let SK_56 = $("#conductProcessing_SK_56").val();
    let RG_57 = $("#conductProcessing_RG_57").val();
    let AV_58 = $("#conductProcessing_AV_58").val();
    let AV_59 = $("#conductProcessing_AV_59").val();
    let SK_60 = $("#conductProcessing_SK_60").val();
    let AV_61 = $("#conductProcessing_AV_61").val();
    let Conduct_Raw_Score = Number(RG_53) + Number(RG_54) + Number(SK_55) + Number(SK_56) + Number(RG_57) + Number(AV_58) + Number(AV_59) + Number(SK_60) + Number(AV_61);
    let Conduct_Comments = $("#Conduct_Comments").val();

    let RG_62 = $("#socialEmotionalProcessing_RG_62").val();
    let AV_63 = $("#socialEmotionalProcessing_AV_63").val();
    let AV_64 = $("#socialEmotionalProcessing_AV_64").val();
    let AV_65 = $("#socialEmotionalProcessing_AV_65").val();
    let AV_66 = $("#socialEmotionalProcessing_AV_66").val();
    let AV_67 = $("#socialEmotionalProcessing_AV_67").val();
    let AV_68 = $("#socialEmotionalProcessing_AV_68").val();
    let SN_69 = $("#socialEmotionalProcessing_SN_69").val();
    let AV_70 = $("#socialEmotionalProcessing_AV_70").val();
    let AV_71 = $("#socialEmotionalProcessing_AV_71").val();
    let AV_72 = $("#socialEmotionalProcessing_AV_72").val();
    let SN_73 = $("#socialEmotionalProcessing_SN_73").val();
    let AV_74 = $("#socialEmotionalProcessing_AV_74").val();
    let AV_75 = $("#socialEmotionalProcessing_AV_75").val();
    let Social_Emotional_Score = Number(RG_62) + Number(AV_63) + Number(AV_64) + Number(AV_65) + Number(AV_66) + Number(AV_67) + Number(AV_68) + Number(SN_69) + Number(AV_70) + Number(AV_71) + Number(AV_72) + Number(SN_73) + Number(AV_74) + Number(AV_75);
    let Social_Emotional_Comments = $("#Social_Emotional_Comments").val();

    let RG_76 = $("#attentionalProcessing_RG_76").val();
    let SN_77 = $("#attentionalProcessing_SN_77").val();
    let SN_78 = $("#attentionalProcessing_SN_78").val();
    let RG_79 = $("#attentionalProcessing_RG_79").val();
    let RG_80 = $("#attentionalProcessing_RG_80").val();
    let AV_81 = $("#attentionalProcessing_AV_81").val();
    let SK_82 = $("#attentionalProcessing_SK_82").val();
    let SK_83 = $("#attentionalProcessing_SK_83").val();
    let SN_84 = $("#attentionalProcessing_SN_84").val();
    let RG_85 = $("#attentionalProcessing_RG_85").val();
    let RG_86 = $("#attentionalProcessing_RG_86").val();
    let Attentional_Score = Number(RG_76) + Number(SN_77) + Number(SN_78) + Number(RG_79) + Number(RG_80) + Number(AV_81) + Number(SK_82) + Number(SK_83) + Number(SN_84) + Number(RG_85);
    let Attentional_Comments = $("#Attentional_Comments").val();

    let Raw_Score_14 = $("#S_14").text();
    let Raw_Score_21 = $("#S_21").text();
    let Raw_Score_22 = $("#S_22").text();
    let Raw_Score_25 = $("#S_25").text();
    let Raw_Score_27 = $("#S_27").text();
    let Raw_Score_28 = $("#S_28").text();
    let Raw_Score_30 = $("#S_30").text();
    let Raw_Score_31 = $("#S_31").text();
    let Raw_Score_32 = $("#S_32").text();
    let Raw_Score_41 = $("#S_41").text();
    let Raw_Score_48 = $("#S_48").text();
    let Raw_Score_49 = $("#S_49").text();
    let Raw_Score_50 = $("#S_50").text();
    let Raw_Score_51 = $("#S_51").text();
    let Raw_Score_55 = $("#S_55").text();
    let Raw_Score_56 = $("#S_56").text();
    let Raw_Score_60 = $("#S_60").text();
    let Raw_Score_82 = $("#S_82").text();
    let Raw_Score_83 = $("#S_83").text();
    let Seeking_Score = Number(Raw_Score_14) + Number(Raw_Score_21) + Number(Raw_Score_22) + Number(Raw_Score_25) + Number(Raw_Score_27) + Number(Raw_Score_28) + Number(Raw_Score_30) + Number(Raw_Score_31) +
    Number(Raw_Score_32) + Number(Raw_Score_41) + Number(Raw_Score_48) + Number(Raw_Score_49) + Number(Raw_Score_50) + Number(Raw_Score_51) +
    Number(Raw_Score_55) + Number(Raw_Score_56) + Number(Raw_Score_60) + Number(Raw_Score_82) + Number(Raw_Score_83);

    let Raw_Score_1 = $("#A_1").text();
    let Raw_Score_2 = $("#A_2").text();
    let Raw_Score_5 = $("#A_5").text();
    let Raw_Score_15 = $("#A_15").text();
    let Raw_Score_18 = $("#A_18").text();
    let Raw_Score_58 = $("#A_58").text();
    let Raw_Score_59 = $("#A_59").text();
    let Raw_Score_61 = $("#A_61").text();
    let Raw_Score_63 = $("#A_63").text();
    let Raw_Score_64 = $("#A_64").text();
    let Raw_Score_65 = $("#A_65").text();
    let Raw_Score_66 = $("#A_66").text();
    let Raw_Score_67 = $("#A_67").text();
    let Raw_Score_68 = $("#A_68").text();
    let Raw_Score_70 = $("#A_70").text();
    let Raw_Score_71 = $("#A_71").text();
    let Raw_Score_72 = $("#A_72").text();
    let Raw_Score_74 = $("#A_74").text();
    let Raw_Score_75 = $("#A_75").text();
    let Raw_Score_81 = $("#A_81").text();
    let Avoiding_Score = Number(Raw_Score_1) + Number(Raw_Score_2) + Number(Raw_Score_5) + Number(Raw_Score_15) + Number(Raw_Score_18) + Number(Raw_Score_58) + Number(Raw_Score_59) +
    Number(Raw_Score_61) + Number(Raw_Score_63) + Number(Raw_Score_64) + Number(Raw_Score_65) + Number(Raw_Score_66) + Number(Raw_Score_67) + Number(Raw_Score_68) + Number(Raw_Score_70) +
    Number(Raw_Score_71) + Number(Raw_Score_72) + Number(Raw_Score_74) + Number(Raw_Score_75) + Number(Raw_Score_81);

    let Raw_Score_3 = $("#SS_3").text();
    let Raw_Score_4 = $("#SS_4").text();
    let Raw_Score_6 = $("#SS_6").text();
    let Raw_Score_7 = $("#SS_7").text();
    let Raw_Score_9 = $("#SS_9").text();
    let Raw_Score_13 = $("#SS_13").text();
    let Raw_Score_16 = $("#SS_16").text();
    let Raw_Score_19 = $("#SS_19").text();
    let Raw_Score_20 = $("#SS_20").text();
    let Raw_Score_44 = $("#SS_44").text();
    let Raw_Score_45 = $("#SS_45").text();
    let Raw_Score_46 = $("#SS_46").text();
    let Raw_Score_47 = $("#SS_47").text();
    let Raw_Score_52 = $("#SS_52").text();
    let Raw_Score_69 = $("#SS_69").text();
    let Raw_Score_73 = $("#SS_73").text();
    let Raw_Score_77 = $("#SS_77").text();
    let Raw_Score_78 = $("#SS_78").text();
    let Raw_Score_84 = $("#SS_84").text();
    let Sensitivity_Score = Number(Raw_Score_3) + Number(Raw_Score_4) + Number(Raw_Score_6) + Number(Raw_Score_7) + Number(Raw_Score_9) + Number(Raw_Score_13) + Number(Raw_Score_16) +
    Number(Raw_Score_19) + Number(Raw_Score_20) + Number(Raw_Score_44) + Number(Raw_Score_45) + Number(Raw_Score_47) + Number(Raw_Score_52) + Number(Raw_Score_69) +
    Number(Raw_Score_73) + Number(Raw_Score_77) + Number(Raw_Score_78) + Number(Raw_Score_84);

    let Raw_Score_8 = $("#R_8").text();
    let Raw_Score_12 = $("#R_12").text();
    let Raw_Score_23 = $("#R_23").text();
    let Raw_Score_24 = $("#R_24").text();
    let Raw_Score_26 = $("#R_26").text();
    let Raw_Score_33 = $("#R_33").text();
    let Raw_Score_34 = $("#R_34").text();
    let Raw_Score_35 = $("#R_35").text();
    let Raw_Score_36 = $("#R_36").text();
    let Raw_Score_37 = $("#R_37").text();
    let Raw_Score_38 = $("#R_38").text();
    let Raw_Score_39 = $("#R_39").text();
    let Raw_Score_40 = $("#R_40").text();
    let Raw_Score_53 = $("#R_53").text();
    let Raw_Score_54 = $("#R_54").text();
    let Raw_Score_57 = $("#R_57").text();
    let Raw_Score_62 = $("#R_62").text();
    let Raw_Score_76 = $("#R_76").text();
    let Raw_Score_79 = $("#R_79").text();
    let Raw_Score_80 = $("#R_80").text();
    let Raw_Score_85 = $("#R_85").text();
    let Raw_Score_86 = $("#R_86").text();
    let Registration_Score = Number(Raw_Score_8) + Number(Raw_Score_12) + Number(Raw_Score_23) + Number(Raw_Score_24) + Number(Raw_Score_26) + Number(Raw_Score_33) +
    Number(Raw_Score_34) + Number(Raw_Score_35) + Number(Raw_Score_36) + Number(Raw_Score_37) + Number(Raw_Score_38) + Number(Raw_Score_39) + Number(Raw_Score_40) + Number(Raw_Score_53) +
    Number(Raw_Score_54) + Number(Raw_Score_57) + Number(Raw_Score_62) + Number(Raw_Score_76) + Number(Raw_Score_79) + Number(Raw_Score_80) + Number(Raw_Score_85) + Number(Raw_Score_86);

    let data = {
        occupationalTherapy2: {
        GR_NO: GR_NO,
    Test_Date: Test_Date,
    Examiner_Name: Examiner_Name,
    Examiner_Profession: Examiner_Profession,
    Caregiver_Name: Caregiver_Name,
    Caregiver_Relationship: Caregiver_Relationship,
    Name_Of_School: Name_Of_School,
    School_Level: School_Level,
    Child_Order: Child_Order,
    Children_Years_Living: Children_Years_Living,
            },
    auditoryProcessing: {
        AV_1: AV_1,
    AV_2: AV_2,
    SN_3: SN_3,
    SN_4: SN_4,
    AV_5: AV_5,
    SN_6: SN_6,
    SN_7: SN_7,
    RG_8: RG_8,
    Auditory_Raw_Score: Auditory_Raw_Score,
    Auditory_Comments: Auditory_Comments,
            },
    visualProcessing: {
        SN_9: SN_9,
    SN_10: SN_10,
    SN_11: SN_11,
    RG_12: RG_12,
    SN_13: SN_13,
    SK_14: SK_14,
    AV_15: AV_15,
    Visual_Raw_Score: Visual_Raw_Score,
    Visual_Comments: Visual_Comments,
            },
    touchProcessing: {
        SN_16: SN_16,
    SN_17: SN_17,
    AV_18: AV_18,
    SN_19: SN_19,
    SN_20: SN_20,
    SK_21: SK_21,
    SK_22: SK_22,
    RG_23: RG_23,
    RG_24: RG_24,
    SK_25: SK_25,
    RG_26: RG_26,
    Touch_Raw_Score: Touch_Raw_Score,
    Touch_Comments: Touch_Comments,
            },
    movementProcessing: {
        SK_27: SK_27,
    SK_28: SK_28,
    SK_29: SK_29,
    SK_30: SK_30,
    SK_31: SK_31,
    SK_32: SK_32,
    RG_33: RG_33,
    RG_34: RG_34,
    Movement_Raw_Score: Movement_Raw_Score,
    Movement_Comments: Movement_Comments,
            },
    bodyPositionProcessing: {
        RG_35: RG_35,
    RG_36: RG_36,
    RG_37: RG_37,
    RG_38: RG_38,
    RG_39: RG_39,
    RG_40: RG_40,
    SK_41: SK_42,
    SK_42: SK_41,
    Body_Postion_Raw_Score: Body_Position_Raw_Score,
    Body_Position_Comments: Body_Position_Comments,
            },
    oralSensoryProcessing: {
        Item_43: Item_43,
    SN_44: SN_44,
    SN_45: SN_45,
    SN_46: SN_46,
    SN_47: SN_47,
    SK_48: SK_48,
    SK_49: SK_49,
    SK_50: SK_50,
    SK_51: SK_51,
    SN_52: SN_52,
    Oral_Sensory_Raw_Score: Oral_Sensory_Raw_Score,
    Oral_Sensory_Comments: Oral_Sensory_Comments,
            },
    conductProcessing: {
        RG_53: RG_53,
    RG_54: RG_54,
    SK_55: SK_55,
    SK_56: SK_56,
    RG_57: RG_57,
    AV_58: AV_58,
    AV_59: AV_59,
    SK_60: SK_60,
    AV_61: AV_61,
    Conduct_Raw_Score: Conduct_Raw_Score,
    Conduct_Comments: Conduct_Comments,
            },
    socialEmotionalProcessing: {
        RG_62: RG_62,
    AV_63: AV_63,
    AV_64: AV_64,
    AV_65: AV_65,
    AV_66: AV_66,
    AV_67: AV_67,
    AV_68: AV_68,
    SN_69: SN_69,
    AV_70: AV_70,
    AV_71: AV_71,
    AV_72: AV_72,
    SN_73: SN_73,
    AV_74: AV_74,
    AV_75: AV_75,
    Social_Emotional_Score: Social_Emotional_Score,
    Social_Emotional_Comments: Social_Emotional_Comments,
            },
    attentionalProcessing: {
        RG_76: RG_76,
    SN_77: SN_77,
    SN_78: SN_78,
    RG_79: RG_79,
    RG_80: RG_80,
    AV_81: AV_81,
    SK_82: SK_82,
    SK_83: SK_83,
    SN_84: SN_84,
    RG_85: RG_85,
    RG_86: RG_86,
    Attentional_Score: Attentional_Score,
    Attentional_Comments: Attentional_Comments,
            },
    seekingOT2: {
        Raw_Score_14: Raw_Score_14,
    Raw_Score_21: Raw_Score_21,
    Raw_Score_22: Raw_Score_22,
    Raw_Score_25: Raw_Score_25,
    Raw_Score_27: Raw_Score_27,
    Raw_Score_28: Raw_Score_28,
    Raw_Score_30: Raw_Score_30,
    Raw_Score_31: Raw_Score_31,
    Raw_Score_32: Raw_Score_32,
    Raw_Score_41: Raw_Score_41,
    Raw_Score_48: Raw_Score_48,
    Raw_Score_49: Raw_Score_49,
    Raw_Score_50: Raw_Score_50,
    Raw_Score_51: Raw_Score_51,
    Raw_Score_55: Raw_Score_55,
    Raw_Score_56: Raw_Score_56,
    Raw_Score_60: Raw_Score_60,
    Raw_Score_62: Raw_Score_82,
    Raw_Score_63: Raw_Score_83,
    Seeking_Score: Seeking_Score,
            },
    avoidingOT2: {
        Raw_Score_1: Raw_Score_1,
    Raw_Score_2: Raw_Score_2,
    Raw_Score_5: Raw_Score_5,
    Raw_Score_15: Raw_Score_15,
    Raw_Score_18: Raw_Score_18,
    Raw_Score_58: Raw_Score_58,
    Raw_Score_59: Raw_Score_59,
    Raw_Score_61: Raw_Score_61,
    Raw_Score_63: Raw_Score_63,
    Raw_Score_64: Raw_Score_64,
    Raw_Score_65: Raw_Score_65,
    Raw_Score_66: Raw_Score_66,
    Raw_Score_67: Raw_Score_67,
    Raw_Score_68: Raw_Score_68,
    Raw_Score_70: Raw_Score_70,
    Raw_Score_71: Raw_Score_71,
    Raw_Score_72: Raw_Score_72,
    Raw_Score_74: Raw_Score_74,
    Raw_Score_75: Raw_Score_75,
    Raw_Score_81: Raw_Score_81,
    Avoiding_Score: Avoiding_Score,
            },
    sensitivityOT2: {
        Raw_Score_3: Raw_Score_3,
    Raw_Score_4: Raw_Score_4,
    Raw_Score_6: Raw_Score_6,
    Raw_Score_7: Raw_Score_7,
    Raw_Score_9: Raw_Score_9,
    Raw_Score_13: Raw_Score_13,
    Raw_Score_16: Raw_Score_16,
    Raw_Score_19: Raw_Score_19,
    Raw_Score_20: Raw_Score_20,
    Raw_Score_44: Raw_Score_44,
    Raw_Score_45: Raw_Score_45,
    Raw_Score_46: Raw_Score_46,
    Raw_Score_47: Raw_Score_47,
    Raw_Score_52: Raw_Score_52,
    Raw_Score_69: Raw_Score_69,
    Raw_Score_73: Raw_Score_73,
    Raw_Score_77: Raw_Score_77,
    Raw_Score_78: Raw_Score_78,
    Raw_Score_84: Raw_Score_84,
    Sensitivity_Score: Sensitivity_Score,
            },
    registrationOT2: {
        Raw_Score_8: Raw_Score_8,
    Raw_Score_12: Raw_Score_12,
    Raw_Score_23: Raw_Score_23,
    Raw_Score_24: Raw_Score_24,
    Raw_Score_26: Raw_Score_26,
    Raw_Score_33: Raw_Score_33,
    Raw_Score_34: Raw_Score_34,
    Raw_Score_35: Raw_Score_35,
    Raw_Score_36: Raw_Score_36,
    Raw_Score_37: Raw_Score_37,
    Raw_Score_38: Raw_Score_38,
    Raw_Score_39: Raw_Score_39,
    Raw_Score_40: Raw_Score_40,
    Raw_Score_53: Raw_Score_53,
    Raw_Score_54: Raw_Score_54,
    Raw_Score_57: Raw_Score_57,
    Raw_Score_62: Raw_Score_62,
    Raw_Score_76: Raw_Score_76,
    Raw_Score_79: Raw_Score_79,
    Raw_Score_80: Raw_Score_80,
    Raw_Score_85: Raw_Score_85,
    Raw_Score_86: Raw_Score_86,
    Registration_Score: Registration_Score
            }
        }

    console.log(data);

    const requestOptions = {
        method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(data)
        };
    fetch('/Editor/AddOccupationalTherapy2', requestOptions)
            .then(response => response.json())
            .then(json => {
        alert(json)
                location.reload();
            })

    }

    // Next Button Script
    function next_step1() {
        document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
        //document.getElementById("active2").style.color = "red";
    }
    function next_step2() {
        document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
        //document.getElementById("active3").style.color = "red";
    }
    function next_step3() {
        document.getElementById("third").style.display = "none";
    document.getElementById("fourth").style.display = "block";
        //document.getElementById("active3").style.color = "red";
    }
    function next_step4() {

        document.getElementById("fourth").style.display = "none";
    document.getElementById("fifth").style.display = "block";
        //document.getElementById("active3").style.color = "red";

    }
    function next_step5() {
        document.getElementById("fifth").style.display = "none";
    document.getElementById("sixth").style.display = "block";
        //document.getElementById("active3").style.color = "red";

    }
    function next_step6() {
        document.getElementById("sixth").style.display = "none";
    document.getElementById("seventh").style.display = "block";
        //document.getElementById("active3").style.color = "red";

    }
    function next_step7() {
        document.getElementById("seventh").style.display = "none";
    document.getElementById("eighth").style.display = "block";
        //document.getElementById("active3").style.color = "red";
    }
    function next_step8() {
        document.getElementById("eighth").style.display = "none";
    document.getElementById("nineth").style.display = "block";
        //document.getElementById("active3").style.color = "red";

    }
    function next_step9() {
        document.getElementById("nineth").style.display = "none";
    document.getElementById("tenth").style.display = "block";
        //document.getElementById("active3").style.color = "red";

    }
    function next_step10() {
        debugger
    document.getElementById("tenth").style.display = "none";
    document.getElementById("eleventh").style.display = "block";
    //document.getElementById("active3").style.color = "red";
    SSummary();

    }
    function next_step11() {
        document.getElementById("eleventh").style.display = "none";
    document.getElementById("twelveth").style.display = "block";
        //document.getElementById("active3").style.color = "red";

    }
    function next_step12() {
        document.getElementById("twelveth").style.display = "none";
    document.getElementById("thirteenth").style.display = "block";
        //document.getElementById("active3").style.color = "red";

    }
    function next_step13() {
        document.getElementById("thirteenth").style.display = "none";
    document.getElementById("fourteenth").style.display = "block";
        //document.getElementById("active3").style.color = "red";

    }

    // Previous Button Script
    function prev_step1() {
        document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    //document.getElementById("active1").style.color = "red";
    document.getElementById("active2").style.color = "gray";
    }
    function prev_step2() {
        document.getElementById("third").style.display = "none";
    document.getElementById("second").style.display = "block";
    //document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step3() {
        document.getElementById("fourth").style.display = "none";
    document.getElementById("third").style.display = "block";
    //document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step4() {
        document.getElementById("fifth").style.display = "none";
    document.getElementById("fourth").style.display = "block";
    //document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step5() {
        document.getElementById("sixth").style.display = "none";
    document.getElementById("fifth").style.display = "block";
    //document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step6() {
        document.getElementById("seventh").style.display = "none";
    document.getElementById("sixth").style.display = "block";
    //document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step7() {
        document.getElementById("eighth").style.display = "none";
    document.getElementById("seventh").style.display = "block";
    //document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step8() {
        document.getElementById("nineth").style.display = "none";
    document.getElementById("eighth").style.display = "block";
    //document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step9() {
        document.getElementById("tenth").style.display = "none";
    document.getElementById("nineth").style.display = "block";
    //document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step10() {
        document.getElementById("eleventh").style.display = "none";
    document.getElementById("tenth").style.display = "block";
    //document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step11() {
        document.getElementById("twelveth").style.display = "none";
    document.getElementById("eleventh").style.display = "block";
    //document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step12() {
        document.getElementById("thirteenth").style.display = "none";
    document.getElementById("twelveth").style.display = "block";
    //document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }
    function prev_step13() {
        document.getElementById("fourteenth").style.display = "none";
    document.getElementById("thirteenth").style.display = "block";
    //document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
    }

