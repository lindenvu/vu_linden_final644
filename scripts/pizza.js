var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var msg = function () {
    "use strict";
    window.alert(this.id + " have been clicked");
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
            "invalidID" : "step1-name-invalid",
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
            "checkForZip" : "false",
            "checkForTel" : "false",
            "checkForEmail" : "false"
        },
        "tel" :  {
            "formID" : "step1-tel",
            "invalidID" : "step1-name-invalid",
            "required" : "true",
            "checkForName" : "false",
            "checkForState" : "false",
            "checkForZip" : "false",
            "checkForTel" : "false",
            "checkForEmail" : "false"
        },
        "email" :  {
            "formID" : "step1-name",
            "invalidID" : "step1-name-invalid",
            "required" : "true",
            "checkForName" : "false",
            "checkForState" : "false",
            "checkForZip" : "false",
            "checkForTel" : "false",
            "checkForEmail" : "false"
        }
    };

window.alert(step1FormJSON.length);

var step1Validated = true;

var step1Validate = function () {
    "use strict";
    var x, y;
    for (x = 0; x < step1FormArray.length; x += 1) {
        $(step1FormJSON[step1FormArray[x]].invalidID).className("invalid-feedback hide-me");
        window.alert(step1FormJSON[step1FormArray[x]].invalidID);
    }
     for (y = 0; y < step1FormArray.length; y += 1) {
        if (step1FormJSON[step1FormArray[y]].required === "true") {
            if ($(step1FormJSON[step1FormArray[y]].formID).value === "") {
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
    return step1Validated;
};

var step1Process = function () {
    "use strict";
    if (step1Validate()) {
        $("step1").innerHTML = "Return to Step 1: Enter Your Delivery Address";
        $("step1-form").classList.toggle("hide-me");
        $("step2").classList.toggle("hide-me");
        $("step2-form").classList.toggle("hide-me");
    } else {
        step1Validated = true;
    }
    return false;
};



var step2Validate = function () {
    "use strict";
    return false;
};

var step3Validate = function () {
    "use strict";
    return false;
};
    
var init = function () {
    "use strict";
    $("step1-btn").onclick = step1Process;
    $("step2-btn").onclick = msg;
    $("step3-btn").onclick = msg;
    $("step2").classList.toggle("hide-me");
    $("step2-form").classList.toggle("hide-me");
    $("step3").classList.toggle("hide-me");
    $("step3-form").classList.toggle("hide-me");
};

window.onload = init;