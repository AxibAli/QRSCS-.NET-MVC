
    function FetchData(id) {
        $.post("/Result/GetHIResult/",
            {
                GR_NO: id
            },
            function (data, status) {
                console.log(data.Test_Type)
                //if (data.Test_Type == )
                const TestType = [];
                for (let i = 0; i < data.length; i++) {
                    TestType.push(data[i].Test_Type);
                }
                console.log(data)


                if (TestType.includes("1st Bi-Monthly")) {
                    document.getElementById("BMF_English").innerText = data[0].English;
                    document.getElementById("BMF_Urdu").innerText = data[0].Urdu;
                    document.getElementById("BMF_Maths").innerText = data[0].Maths;
                    document.getElementById("BMF_Science").innerText = data[0].Science;
                    document.getElementById("BMF_Social_Studies").innerText = data[0].Social_Studies;
                    document.getElementById("BMF_Islamiat").innerText = data[0].Islamiat;
                    document.getElementById("BMF_Computer").innerText = data[0].Computer;
                    document.getElementById("BMF_Speech").innerText = data[0].Speech;
                    document.getElementById("BMF_Language").innerText = data[0].Language;
                    document.getElementById("BMF_Concepts").innerText = data[0].Concepts;
                    document.getElementById("BMF_Art_and_Drawing").innerText = data[0].Art_and_Drawing;
                    document.getElementById("BMF_Sindhi").innerText = data[0].Sindhi;
                    document.getElementById("BMF_Obtained_Total").innerText = data[0].Obtained_Total;

                    document.getElementById("BMS_English").innerText = 0;
                    document.getElementById("BMS_Urdu").innerText = 0;
                    document.getElementById("BMS_Maths").innerText = 0;
                    document.getElementById("BMS_Science").innerText = 0;
                    document.getElementById("BMS_Social_Studies").innerText = 0;
                    document.getElementById("BMS_Islamiat").innerText = 0;
                    document.getElementById("BMS_Computer").innerText = 0;
                    document.getElementById("BMS_Speech").innerText = 0;
                    document.getElementById("BMS_Language").innerText = 0;
                    document.getElementById("BMS_Concepts").innerText = 0;
                    document.getElementById("BMS_Art_and_Drawing").innerText = 0;
                    document.getElementById("BMS_Sindhi").innerText = 0;
                    document.getElementById("BMS_Obtained_Total").innerText = 0;

                } if (TestType.includes("2nd Bi-Monthly")) {
                    document.getElementById("BMF_English").innerText = 0;
                    document.getElementById("BMF_Urdu").innerText = 0;
                    document.getElementById("BMF_Maths").innerText = 0;
                    document.getElementById("BMF_Science").innerText = 0;
                    document.getElementById("BMF_Social_Studies").innerText = 0;
                    document.getElementById("BMF_Islamiat").innerText = 0;
                    document.getElementById("BMF_Computer").innerText = 0;
                    document.getElementById("BMF_Speech").innerText = 0;
                    document.getElementById("BMF_Language").innerText = 0;
                    document.getElementById("BMF_Concepts").innerText = 0;
                    document.getElementById("BMF_Art_and_Drawing").innerText = 0;
                    document.getElementById("BMF_Sindhi").innerText = 0;
                    document.getElementById("BMF_Obtained_Total").innerText = 0;

                    document.getElementById("BMS_English").innerText = data[1].English;
                    document.getElementById("BMS_Urdu").innerText = data[1].Urdu;
                    document.getElementById("BMS_Maths").innerText = data[1].Maths;
                    document.getElementById("BMS_Science").innerText = data[1].Science;
                    document.getElementById("BMS_Social_Studies").innerText = data[1].Social_Studies;
                    document.getElementById("BMS_Islamiat").innerText = data[1].Islamiat;
                    document.getElementById("BMS_Computer").innerText = data[1].Computer;
                    document.getElementById("BMS_Speech").innerText = data[1].Speech;
                    document.getElementById("BMS_Language").innerText = data[1].Language;
                    document.getElementById("BMS_Concepts").innerText = data[1].Concepts;
                    document.getElementById("BMS_Art_and_Drawing").innerText = data[1].Art_and_Drawing;
                    document.getElementById("BMS_Sindhi").innerText = data[1].Sindhi;
                    document.getElementById("BMS_Obtained_Total").innerText = data[1].Obtained_Total;

                } if (TestType.includes("1st Bi-Monthly") && TestType.includes("2nd Bi-Monthly")) {
                    document.getElementById("BMF_English").innerText = data[0].English;
                    document.getElementById("BMF_Urdu").innerText = data[0].Urdu;
                    document.getElementById("BMF_Maths").innerText = data[0].Maths;
                    document.getElementById("BMF_Science").innerText = data[0].Science;
                    document.getElementById("BMF_Social_Studies").innerText = data[0].Social_Studies;
                    document.getElementById("BMF_Islamiat").innerText = data[0].Islamiat;
                    document.getElementById("BMF_Computer").innerText = data[0].Computer;
                    document.getElementById("BMF_Speech").innerText = data[0].Speech;
                    document.getElementById("BMF_Language").innerText = data[0].Language;
                    document.getElementById("BMF_Concepts").innerText = data[0].Concepts;
                    document.getElementById("BMF_Art_and_Drawing").innerText = data[0].Art_and_Drawing;
                    document.getElementById("BMF_Sindhi").innerText = data[0].Sindhi;
                    document.getElementById("BMF_Obtained_Total").innerText = data[0].Obtained_Total;

                    document.getElementById("BMS_English").innerText = data[1].English;
                    document.getElementById("BMS_Urdu").innerText = data[1].Urdu;
                    document.getElementById("BMS_Maths").innerText = data[1].Maths;
                    document.getElementById("BMS_Science").innerText = data[1].Science;
                    document.getElementById("BMS_Social_Studies").innerText = data[1].Social_Studies;
                    document.getElementById("BMS_Islamiat").innerText = data[1].Islamiat;
                    document.getElementById("BMS_Computer").innerText = data[1].Computer;
                    document.getElementById("BMS_Speech").innerText = data[1].Speech;
                    document.getElementById("BMS_Language").innerText = data[1].Language;
                    document.getElementById("BMS_Concepts").innerText = data[1].Concepts;
                    document.getElementById("BMS_Art_and_Drawing").innerText = data[1].Art_and_Drawing;
                    document.getElementById("BMS_Sindhi").innerText = data[1].Sindhi;
                    document.getElementById("BMS_Obtained_Total").innerText = data[1].Obtained_Total;

                } if (!TestType.includes("1st Bi-Monthly") && !TestType.includes("2nd Bi-Monthly")) {
                    document.getElementById("BMF_English").innerText = 0;
                    document.getElementById("BMF_Urdu").innerText = 0;
                    document.getElementById("BMF_Maths").innerText = 0;
                    document.getElementById("BMF_Science").innerText = 0;
                    document.getElementById("BMF_Social_Studies").innerText = 0;
                    document.getElementById("BMF_Islamiat").innerText = 0;
                    document.getElementById("BMF_Computer").innerText = 0;
                    document.getElementById("BMF_Speech").innerText = 0;
                    document.getElementById("BMF_Language").innerText = 0;
                    document.getElementById("BMF_Concepts").innerText = 0;
                    document.getElementById("BMF_Art_and_Drawing").innerText = 0;
                    document.getElementById("BMF_Sindhi").innerText = 0;
                    document.getElementById("BMF_Obtained_Total").innerText = 0;

                    document.getElementById("BMS_English").innerText = 0;
                    document.getElementById("BMS_Urdu").innerText = 0;
                    document.getElementById("BMS_Maths").innerText = 0;
                    document.getElementById("BMS_Science").innerText = 0;
                    document.getElementById("BMS_Social_Studies").innerText = 0;
                    document.getElementById("BMS_Islamiat").innerText = 0;
                    document.getElementById("BMS_Computer").innerText = 0;
                    document.getElementById("BMS_Speech").innerText = 0;
                    document.getElementById("BMS_Language").innerText = 0;
                    document.getElementById("BMS_Concepts").innerText = 0;
                    document.getElementById("BMS_Art_and_Drawing").innerText = 0;
                    document.getElementById("BMS_Sindhi").innerText = 0;
                    document.getElementById("BMS_Obtained_Total").innerText = 0;
                }
            });
        }
