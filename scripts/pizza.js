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

var step1Validate = function () {
    "use strict";
    window.alert("step1Validate function started");
    var x, y;
    for (x = 0; x < step1FormArray.length; x += 1) {
        $(step1FormJSON[step1FormArray[x]].invalidID).className = "invalid-input hide-me";
    }
    for (y = 0; y < step1FormArray.length; y += 1) {
        if (step1FormJSON[step1FormArray[y]].required === "true") {
            if ($(step1FormJSON[step1FormArray[y]].formID).value === "") {
                $(step1FormJSON[step1FormArray[y]].invalidID).className = "invalid-input";
                step1Validated = false;
            }
        }
        if (step1FormJSON[step1FormArray[y]].checkForName === "true") {
            if (/[0-9]/.test($(step1FormJSON[step1FormArray[y]].formID).value)) {
                $(step1FormJSON[step1FormArray[y]].invalidID).className = "invalid-input";
                step1Validated = false;
            }
        }
        if (step1FormJSON[step1FormArray[y]].checkForState === "true") {
            if (!/^(AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)$/.test($(step1FormJSON[step1FormArray[y]].formID).value)) {
                $(step1FormJSON[step1FormArray[y]].invalidID).className = "invalid-input";
                step1Validated = false;
            }
        }
        if (step1FormJSON[step1FormArray[y]].checkForZip === "true") {
            if (!/^[0-9][0-9][0-9][0-9][0-9]$/.test($(step1FormJSON[step1FormArray[y]].formID).value)) {
                $(step1FormJSON[step1FormArray[y]].invalidID).className = "invalid-input";
                step1Validated = false;
            }
        }
        if (step1FormJSON[step1FormArray[y]].checkForTel === "true") {
            if (!/^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/.test($(step1FormJSON[step1FormArray[y]].formID).value)) {
                $(step1FormJSON[step1FormArray[y]].invalidID).className = "invalid-input";
                step1Validated = false;
            }
        }
        if (step1FormJSON[step1FormArray[y]].checkForEmail === "true") {
            if (!/.+\@.+\.[com|net|edu|gov]/.test($(step1FormJSON[step1FormArray[y]].formID).value)) {
                $(step1FormJSON[step1FormArray[y]].invalidID).className = "invalid-input";
                step1Validated = false;
            }
        }
    }
    
    window.alert(
        "Name: " + $("step1-name").value + "\n" +
            "Address Type: " + $("step1-address-type").value + "\n" +
            "Address1: " + $("step1-address-1").value + "\n" +
            "Address2: " + $("step1-address-2").value + "\n" +
            "Other: " + $("step1-other-address").value + "\n" +
            "City: " + $("step1-city").value + "\n" +
            "State: " + $("step1-state").value + "\n" +
            "Zip: " + $("step1-zip").value + "\n" +
            "Tel: " + $("step1-tel").value + "\n" +
            "Email: " + $("step1-email").value + "\n"
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
        $("pizza-price").classList.toggle("hide-me");
        
    } else {
        step1Validated = true;
    }
    window.alert("step1Process function finished");
    return false;
};

var step1AddressTypeProcess = function () {
    "use strict";
    step1FormJSON["other-address"].required = "false";
    $("step1-other-adress-div").className = "hide-me";
    if ($("step1-address-type").value === "Other") {
        $("step1-other-adress-div").classList.toggle("hide-me");
        step1FormJSON["other-address"].required = "true";
    }
    return false;
};


var crustPrices =
    {
        "Hand Tossed Crust": ["Small ($9.99)", "Medium ($12.99)", "Large ($14.99)"],
        "Thin Crust": ["Medium ($11.99)", "Large ($13.99)"],
        "New York Style Crust": ["Large ($16.99)", "Extra Large ($19.99)"],
        "Gluten Free Crust": ["Small ($10.99)"]
    };

var crustValues =
    {
        "Hand Tossed Crust": ["9.99", "12.99", "14.99"],
        "Thin Crust": ["11.99", "13.99"],
        "New York Style Crust": ["16.99", "19.99"],
        "Gluten Free Crust": ["10.99"]
    };

var crustChoice = false, sizePrices, sizeValues, z, a;

var step2CheckCrustChoice = function () {"use strict"; if (!crustChoice) {window.alert("Please choose a crust type first"); return false; } else { return true; } };

var step2Validate = function () {
    "use strict";
    $("step2-crust-type-invalid").className = "invalid-input hide-me";
    if (crustChoice) {
        var totalPrice = 0;
        var step2ToppingsCheckBoxes = document.getElementsByClassName("toppings"), b;
        for (b = 0; b < step2ToppingsCheckBoxes.length; b += 1) {
            if (step2ToppingsCheckBoxes[b].checked) {
                totalPrice += 0.99;
            }
        }
        totalPrice = totalPrice +
            parseFloat($("step2-size-choice").options[$("step2-size-choice").selectedIndex].getAttribute("price")) + parseFloat($("step2-cheese-choice").options[$("step2-cheese-choice").selectedIndex].getAttribute("price"))
            + parseFloat($("step2-sauce-choice").options[$("step2-sauce-choice").selectedIndex].getAttribute("price"));
        $("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
    } else {
        $("step2-crust-type-invalid").classList.toggle("hide-me");
    }
};

var step2CrustChoiceProcess = function () {
    "use strict";
    crustChoice = true;
    $("crustPrice").innerHTML = this.value;
    for (a = $("step2-size-choice").length - 1; a >= 0; a -= 1) {
        $("step2-size-choice").remove(a);
    }
    
    sizePrices = crustPrices[this.value];
    sizeValues = crustValues[this.value];
    for (z = 0; z < sizePrices.length; z += 1) {
        var option = document.createElement("option");
        option.text = sizePrices[z];
        option.setAttribute("price", sizeValues[z]);
        $("step2-size-choice").add(option);
    }
    $("sizePrice").innerHTML = $("step2-size-choice").options[$("step2-size-choice").selectedIndex].value;
    $("cheesePrice").innerHTML = $("step2-cheese-choice").options[$("step2-cheese-choice").selectedIndex].value;
    $("saucePrice").innerHTML = $("step2-sauce-choice").options[$("step2-sauce-choice").selectedIndex].value;
    step2Validate();
    return false;
};

var step2SizeChoiceProcess = function () {
    "use strict";
    $("sizePrice").innerHTML = $("step2-size-choice").options[$("step2-size-choice").selectedIndex].value;
    step2Validate();
    return false;
};

var step2CheeseChoiceProcess = function () {
    "use strict";
    $("cheesePrice").innerHTML = $("step2-cheese-choice").options[$("step2-cheese-choice").selectedIndex].value;
    step2Validate();
    return false;
};

var step2SauceChoiceProcess = function () {
    "use strict";
    $("saucePrice").innerHTML = $("step2-sauce-choice").options[$("step2-sauce-choice").selectedIndex].value;
    step2Validate();
    return false;
};

var step2ToppingsChoiceProcess = function () {
    "use strict";
    if (this.checked) {
        $("toppingsPrice").innerHTML += document.querySelector("#" + this.id + "+ label").innerText;
        $("toppingsPrice").innerHTML += "<br>";
        step2Validate();
    } else {
        $("toppingsPrice").innerHTML = $("toppingsPrice").innerHTML.replace(document.querySelector("#" + this.id + "+ label").innerText + "<br>", "");
        step2Validate();
    }
    return false;
};

var step2Process = function () {
    "use strict";
    window.alert("step2Process function started");
    step2Validate();
    if (step2CheckCrustChoice()) {
        if (window.confirm("You've clicked finished building pizza, would you like proceed to payment info?")) {
            $("step2").innerHTML = "Return to Step 2: Build Your Pizza";
            $("step2-form").classList.toggle("hide-me");
            $("step3").classList.toggle("hide-me");
            $("step3-form").classList.toggle("hide-me");
        }
    }
    window.alert("step2Process function finished");
    return false;
};

var sameDeliveryProcess = function () {
    "use strict";
    if (this.checked) {
        $("step3-name").value = $("step1-name").value;
        $("step3-address-type").value = $("step1-address-type").value;
        $("step3-address-1").value = $("step1-address-1").value;
        $("step3-address-2").value = $("step1-address-2").value;
        $("step3-city").value = $("step1-city").value;
        $("step3-state").value = $("step1-state").value;
        $("step3-zip").value = $("step1-zip").value;
    }
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
    $("step1-address-type").onchange = step1AddressTypeProcess;
    $("step2-btn").onclick = step2Process;
    $("step2-hand-tossed").onchange = step2CrustChoiceProcess;
    $("step2-thin").onchange = step2CrustChoiceProcess;
    $("step2-new-york").onchange = step2CrustChoiceProcess;
    $("step2-gluten-free").onchange = step2CrustChoiceProcess;
    $("step2-size-choice").onchange = step2SizeChoiceProcess;
    $("step2-cheese-choice").onchange = step2CheeseChoiceProcess;
    $("step2-sauce-choice").onchange = step2SauceChoiceProcess;
    $("step2-size-choice").onclick = step2CheckCrustChoice;
    $("step2-cheese-choice").onclick = step2CheckCrustChoice;
    $("step2-sauce-choice").onclick = step2CheckCrustChoice;
    var step2ToppingsCheckBoxes = document.getElementsByClassName("toppings"), b;
    for (b = 0; b < step2ToppingsCheckBoxes.length; b += 1) {
        step2ToppingsCheckBoxes[b].onchange = step2ToppingsChoiceProcess;
        step2ToppingsCheckBoxes[b].onclick = step2CheckCrustChoice;
    }
    $("step3-btn").onclick = step3Process;
    $("step3-same-billing-address").onchange = sameDeliveryProcess;
    
    
    $("step2").classList.toggle("hide-me");
    $("step2-form").classList.toggle("hide-me");
    $("pizza-price").classList.toggle("hide-me");
    //$("step3").classList.toggle("hide-me");
   // $("step3-form").classList.toggle("hide-me");
    window.alert("init function finished");
};

window.onload = init;