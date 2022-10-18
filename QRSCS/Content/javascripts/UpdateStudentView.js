﻿
    JotForm.newDefaultTheme = true;
    JotForm.extendsNewTheme = false;
    JotForm.newPaymentUIForNewCreatedForms = false;
    JotForm.newPaymentUI = true;

    JotForm.init(function () {
        /*INIT-START*/
        setTimeout(function () {
            $('input_73').hint('ex: 23');
        }, 20);

    JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    JotForm.calendarOther = {"today": "Today" };
    var languageOptions = document.querySelectorAll('#langList li');
    for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
        languageOptions[langIndex].on('click', function (e) { setTimeout(function () { JotForm.setCalendar("74", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "" }); }, 0); });
        }
    JotForm.onTranslationsFetch(function () {JotForm.setCalendar("74", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "" }); });

    JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    JotForm.calendarOther = {"today": "Today" };
    var languageOptions = document.querySelectorAll('#langList li');
    for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
        languageOptions[langIndex].on('click', function (e) { setTimeout(function () { JotForm.setCalendar("75", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "" }); }, 0); });
        }
    JotForm.onTranslationsFetch(function () {JotForm.setCalendar("75", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "" }); });
    if (window.JotForm && JotForm.accessible) $('input_59').setAttribute('tabindex', 0);
    if (window.JotForm && JotForm.accessible) $('input_60').setAttribute('tabindex', 0);
    if (window.JotForm && JotForm.accessible) $('input_61').setAttribute('tabindex', 0);
    if (window.JotForm && JotForm.accessible) $('input_63').setAttribute('tabindex', 0);
    if (window.JotForm && JotForm.accessible) $('input_72').setAttribute('tabindex', 0);
    if (window.JotForm && JotForm.accessible) $('input_76').setAttribute('tabindex', 0);
    setTimeout(function () {
        $('input_79').hint('#####-#######-#');
        }, 20);
    if (window.JotForm && JotForm.accessible) $('input_80').setAttribute('tabindex', 0);
    if (window.JotForm && JotForm.accessible) $('input_81').setAttribute('tabindex', 0);
    if (window.JotForm && JotForm.accessible) $('input_82').setAttribute('tabindex', 0);
    JotForm.setPhoneMaskingValidator('input_79', '#####-#######-#');
    JotForm.setPhoneMaskingValidator('input_85_full', '03##-#######');
    JotForm.setPhoneMaskingValidator('input_86_full', '03##-#######');
    JotForm.setPhoneMaskingValidator('input_87_full', '03##-#######');
    JotForm.setPhoneMaskingValidator('input_84_postal', '#####');
    if (window.JotForm && JotForm.accessible) $('input_90').setAttribute('tabindex', 0);
    JotForm.alterTexts({"confirmClearForm": "Are you sure you want to clear the form", "lessThan": "Your score should be less than" });
        /*INIT-END*/
    });

    JotForm.prepareCalculationsOnTheFly([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, {"name": "gender", "qid": "15", "text": "Gender", "type": "control_radio" }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, {"name": "birthDate39", "qid": "39", "text": "Birth Date", "type": "control_birthdate" }, null, null, null, {"name": "clickTo", "qid": "43", "text": "Admissions Form", "type": "control_head" }, null, null, null, null, null, {"name": "childsDisablity", "qid": "49", "text": "CHILD'S DISABLITY", "type": "control_head" }, null, null, {"name": "submitForm", "qid": "52", "text": "Submit Form", "type": "control_button" }, null, null, null, {"name": "name", "qid": "56", "text": "Name", "type": "control_fullname" }, {"description": "", "name": "class", "qid": "57", "subLabel": "", "text": "Class", "type": "control_dropdown" }, null, {"description": "", "name": "placeOf", "qid": "59", "subLabel": "", "text": "Place of Birth", "type": "control_textbox" }, {"description": "", "name": "religion", "qid": "60", "subLabel": "", "text": "Religion", "type": "control_textbox" }, {"description": "", "name": "nameOf", "qid": "61", "subLabel": "", "text": "Name of last School Attended", "type": "control_textbox" }, null, {"description": "", "name": "hobbies", "qid": "63", "subLabel": "", "text": "Hobbies", "type": "control_textbox" }, {"name": "quaidE", "qid": "64", "text": "QUAID E AZAM RANGERS SPECIAL CHILDREN SCHOOL", "type": "control_head" }, {"name": "studentProfile", "qid": "65", "text": "Student Profile", "type": "control_head" }, null, {"name": "pageBreak67", "qid": "67", "text": "Page Break", "type": "control_pagebreak" }, null, {"name": "pageBreak", "qid": "69", "text": "Page Break", "type": "control_pagebreak" }, {"name": "parentsguardianInformation", "qid": "70", "text": "PARENTS\u002FGUARDIAN INFORMATION", "type": "control_head" }, null, {"description": "", "name": "fatherName72", "qid": "72", "subLabel": "Full name of Father", "text": "Father Name", "type": "control_textbox" }, {"description": "", "name": "grNo", "qid": "73", "subLabel": "Enter GR for Student", "text": "GR No", "type": "control_number" }, {"description": "", "name": "dateOf", "qid": "74", "text": "Date Of Admission", "type": "control_datetime" }, {"description": "", "name": "dateOf75", "qid": "75", "text": "Date of Assessment", "type": "control_datetime" }, {"description": "", "name": "education", "qid": "76", "subLabel": "", "text": "Education", "type": "control_textbox" }, null, null, {"description": "", "name": "nic", "qid": "79", "subLabel": "Enter your NIC", "text": "NIC", "type": "control_number" }, {"description": "", "name": "relationWith80", "qid": "80", "subLabel": "", "text": "Relation with the Student", "type": "control_textbox" }, {"description": "", "name": "monthlyIncome", "qid": "81", "subLabel": "", "text": "Monthly Income", "type": "control_textbox" }, {"description": "", "name": "occupation", "qid": "82", "subLabel": "", "text": "Occupation", "type": "control_textbox" }, {"description": "", "name": "category", "qid": "83", "subLabel": "", "text": "Category", "type": "control_dropdown" }, {"description": "", "name": "completeAddress", "qid": "84", "text": "Complete Address", "type": "control_address" }, {"description": "", "name": "cellPhone", "qid": "85", "text": "Cell Phone Number", "type": "control_phone" }, {"description": "", "name": "phoneResidence", "qid": "86", "text": "Phone Residence", "type": "control_phone" }, {"description": "", "name": "phoneOffice", "qid": "87", "text": "Phone Office", "type": "control_phone" }, {"description": "", "name": "typeA", "qid": "88", "subLabel": "", "text": "Type a question", "type": "control_dropdown" }, null, {"description": "", "name": "presentingComplaint", "qid": "90", "subLabel": "", "text": "Presenting Complaint", "type": "control_textbox" }]);
    setTimeout(function () {
        JotForm.paymentExtrasOnTheFly([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, { "name": "gender", "qid": "15", "text": "Gender", "type": "control_radio" }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, { "name": "birthDate39", "qid": "39", "text": "Birth Date", "type": "control_birthdate" }, null, null, null, { "name": "clickTo", "qid": "43", "text": "Admissions Form", "type": "control_head" }, null, null, null, null, null, { "name": "childsDisablity", "qid": "49", "text": "CHILD'S DISABLITY", "type": "control_head" }, null, null, { "name": "submitForm", "qid": "52", "text": "Submit Form", "type": "control_button" }, null, null, null, { "name": "name", "qid": "56", "text": "Name", "type": "control_fullname" }, { "description": "", "name": "class", "qid": "57", "subLabel": "", "text": "Class", "type": "control_dropdown" }, null, { "description": "", "name": "placeOf", "qid": "59", "subLabel": "", "text": "Place of Birth", "type": "control_textbox" }, { "description": "", "name": "religion", "qid": "60", "subLabel": "", "text": "Religion", "type": "control_textbox" }, { "description": "", "name": "nameOf", "qid": "61", "subLabel": "", "text": "Name of last School Attended", "type": "control_textbox" }, null, { "description": "", "name": "hobbies", "qid": "63", "subLabel": "", "text": "Hobbies", "type": "control_textbox" }, { "name": "quaidE", "qid": "64", "text": "QUAID E AZAM RANGERS SPECIAL CHILDREN SCHOOL", "type": "control_head" }, { "name": "studentProfile", "qid": "65", "text": "Student Profile", "type": "control_head" }, null, { "name": "pageBreak67", "qid": "67", "text": "Page Break", "type": "control_pagebreak" }, null, { "name": "pageBreak", "qid": "69", "text": "Page Break", "type": "control_pagebreak" }, { "name": "parentsguardianInformation", "qid": "70", "text": "PARENTS\u002FGUARDIAN INFORMATION", "type": "control_head" }, null, { "description": "", "name": "fatherName72", "qid": "72", "subLabel": "Full name of Father", "text": "Father Name", "type": "control_textbox" }, { "description": "", "name": "grNo", "qid": "73", "subLabel": "Enter GR for Student", "text": "GR No", "type": "control_number" }, { "description": "", "name": "dateOf", "qid": "74", "text": "Date Of Admission", "type": "control_datetime" }, { "description": "", "name": "dateOf75", "qid": "75", "text": "Date of Assessment", "type": "control_datetime" }, { "description": "", "name": "education", "qid": "76", "subLabel": "", "text": "Education", "type": "control_textbox" }, null, null, { "description": "", "name": "nic", "qid": "79", "subLabel": "Enter your NIC", "text": "NIC", "type": "control_number" }, { "description": "", "name": "relationWith80", "qid": "80", "subLabel": "", "text": "Relation with the Student", "type": "control_textbox" }, { "description": "", "name": "monthlyIncome", "qid": "81", "subLabel": "", "text": "Monthly Income", "type": "control_textbox" }, { "description": "", "name": "occupation", "qid": "82", "subLabel": "", "text": "Occupation", "type": "control_textbox" }, { "description": "", "name": "category", "qid": "83", "subLabel": "", "text": "Category", "type": "control_dropdown" }, { "description": "", "name": "completeAddress", "qid": "84", "text": "Complete Address", "type": "control_address" }, { "description": "", "name": "cellPhone", "qid": "85", "text": "Cell Phone Number", "type": "control_phone" }, { "description": "", "name": "phoneResidence", "qid": "86", "text": "Phone Residence", "type": "control_phone" }, { "description": "", "name": "phoneOffice", "qid": "87", "text": "Phone Office", "type": "control_phone" }, { "description": "", "name": "typeA", "qid": "88", "subLabel": "", "text": "Type a question", "type": "control_dropdown" }, null, { "description": "", "name": "presentingComplaint", "qid": "90", "subLabel": "", "text": "Presenting Complaint", "type": "control_textbox" }]);
    }, 20);
