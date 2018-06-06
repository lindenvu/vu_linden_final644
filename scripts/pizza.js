/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

/*
var step1FormJSON;
var xhr = new XMLHttpRequest();
xhr.open("GET", "../step1Form.json");
xhr.send();
xhr.onreadystatechange = function () {
    "use strict";
    if (this.readyState === 4 && this.status === 200) {
        step1FormJSON = JSON.parse(this.responseText);
    }
};


*/
var step1FormArray = ["name", "address-type", "address-1", "address-2", "other-address", "city", "state", "zip", "tel", "email"];

var step1FormJSON =
    {
        "name" : {
            "formID" : "step1-name",
            "invalidID" : "step1-name-invalid",
            "required" : "true",
            "checkForName" : "true",
            "checkForState" : "false",
            "checkForZip" : "false",
            "checkForTel" : "false",
            "checkForEmail" : "false"
        },
        "address-type" :  {
            "formID" : "step1-address-type",
            "invalidID" : "step1-address-type-invalid",
            "required" : "true",
            "checkForName" : "false",
            "checkForState" : "false",
            "checkForZip" : "false",
            "checkForTel" : "false",
            "checkForEmail" : "false"
        },
        "address-1" :  {
            "formID" : "step1-address-1",
            "invalidID" : "step1-address-1-invalid",
            "required" : "true",
            "checkForName" : "false",
            "checkForState" : "false",
            "checkForZip" : "false",
            "checkForTel" : "false",
            "checkForEmail" : "false"
        },
        "address-2" :  {
            "formID" : "step1-address-2",
            "invalidID" : "step1-address-2-invalid",
            "required" : "false",
            "checkForName" : "false",
            "checkForState" : "false",
            "checkForZip" : "false",
            "checkForTel" : "false",
            "checkForEmail" : "false"
        },
        "other-address" :  {
            "formID" : "step1-other-address",
            "invalidID" : "step1-other-address-invalid",
            "required" : "false",
            "checkForName" : "false",
            "checkForState" : "false",
            "checkForZip" : "false",
            "checkForTel" : "false",
            "checkForEmail" : "false"
        },
        "city" :  {
            "formID" : "step1-city",
            "invalidID" : "step1-city-invalid",
            "required" : "true",
            "checkForName" : "true",
            "checkForState" : "false",
            "checkForZip" : "false",
            "checkForTel" : "false",
            "checkForEmail" : "false"
        },
        "state" :  {
            "formID" : "step1-state",
            "invalidID" : "step1-state-invalid",
            "required" : "true",
            "checkForName" : "false",
            "checkForState" : "true",
            "checkForZip" : "false",
            "checkForTel" : "false",
            "checkForEmail" : "false"
        },
        "zip" :  {
            "formID" : "step1-zip",
            "invalidID" : "step1-zip-invalid",
            "required" : "true",
            "checkForName" : "false",
            "checkForState" : "false",
            "checkForZip" : "true",
            "checkForTel" : "false",
            "checkForEmail" : "false"
        },
        "tel" :  {
            "formID" : "step1-tel",
            "invalidID" : "step1-tel-invalid",
            "required" : "true",
            "checkForName" : "false",
            "checkForState" : "false",
            "checkForZip" : "false",
            "checkForTel" : "true",
            "checkForEmail" : "false"
        },
        "email" :  {
            "formID" : "step1-email",
            "invalidID" : "step1-email-invalid",
            "required" : "true",
            "checkForName" : "false",
            "checkForState" : "false",
            "checkForZip" : "false",
            "checkForTel" : "false",
            "checkForEmail" : "true"
        }
    };

var step1Validated = true;

window.alert(step1FormJSON[step1FormArray[7]].invalidID);

var step1Validate = function () {
    "use strict";
    window.alert("step1Validate function started");
    var x, y;
    for (x = 0; x < step1FormArray.length; x += 1) {
        //window.alert("classname loop started: " + step1FormJSON[step1FormArray[x]].invalidID);
        $(step1FormJSON[step1FormArray[x]].invalidID).className = "invalid-feedback hide-me";
        //window.alert("classname loop ended: " + step1FormJSON[step1FormArray[x]].invalidID);
    }
    window.alert("step1Validate function step 2 started");
    for (y = 0; y < step1FormArray.length; y += 1) {
        if (step1FormJSON[step1FormArray[y]].required === "true") {
            if ($(step1FormJSON[step1FormArray[y]].formID).value === "") {
                window.alert("required and empty: " + step1FormJSON[step1FormArray[y]].formID);
                $(step1FormJSON[step1FormArray[y]].invalidID).classList.toggle("hide-me");
                step1Validated = false;
            }
        }
    }

    window.alert(
        $("step1-name").value + "\n" +
            $("step1-address-type").value + "\n" +
            $("step1-address-1").value + "\n" +
            $("step1-address-2").value + "\n" +
            $("step1-other-address").value + "\n" +
            $("step1-city").value + "\n" +
            $("step1-state").value + "\n" +
            $("step1-zip").value + "\n" +
            $("step1-tel").value + "\n" +
            $("step1-email").value + "\n"
    );
    window.alert("step1Validate function finished");
    return step1Validated;
};

var step1Process = function () {
    "use strict";
    window.alert("step1Process function exected");
    if (step1Validate()) {
        $("step1").innerHTML = "Return to Step 1: Enter Your Delivery Address";
        $("step1-form").classList.toggle("hide-me");
        $("step2").classList.toggle("hide-me");
        $("step2-form").classList.toggle("hide-me");
    } else {
        step1Validated = true;
    }
    window.alert("");
    window.alert("step1Process function finished");
    return false;
};



var step2Validate = function () {
    "use strict";
    return false;
};

var step2Process = function () {
    "use strict";
    step2Validate();
    return false;
};

var step3Validate = function () {
    "use strict";
    return false;
};

var step3Process = function () {
    "use strict";
    step3Validate();
    return false;
};

var init = function () {
    "use strict";
    window.alert("init function exected");
    $("step1-btn").onclick = step1Process;
    $("step2-btn").onclick = step2Process;
    $("step3-btn").onclick = step3Process;
    $("step2").classList.toggle("hide-me");
    $("step2-form").classList.toggle("hide-me");
    $("step3").classList.toggle("hide-me");
    $("step3-form").classList.toggle("hide-me");
    window.alert("init function finished");
};

window.onload = init;