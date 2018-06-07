/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var otherAddress = {
    "step1-address-type": "false",
    "step3-address-type": "false"
};

var addressValidate = function (stepNum) {
    "use strict";
    
    var addressValidated = true, step = stepNum;
    //window.alert("Address Validate function started for " + stepNum);
    
    $(stepNum + "-name-invalid").className = "invalid-input hide-me";
    $(stepNum + "-address-type-invalid").className = "invalid-input hide-me";
    $(stepNum + "-address-1-invalid").className = "invalid-input hide-me";
    $(stepNum + "-address-2-invalid").className = "invalid-input hide-me";
    $(stepNum + "-other-address-invalid").className = "invalid-input hide-me";
    $(stepNum + "-city-invalid").className = "invalid-input hide-me";
    $(stepNum + "-state-invalid").className = "invalid-input hide-me";
    $(stepNum + "-zip-invalid").className = "invalid-input hide-me";
    //window.alert("Address Validate reset " + stepNum);
    if ($(stepNum + "-name").value === "" || /[0-9]/.test($(stepNum + "-name").value)) {
        $(stepNum + "-name-invalid").classList.toggle("hide-me");
        addressValidated = false;
    }
    //window.alert("Address Validate name " + stepNum);
    if ($(stepNum + "-address-type").value === "") {
        $(stepNum + "-address-type-invalid").classList.toggle("hide-me");
        addressValidated = false;
    }
    //window.alert("Address Validate address type " + stepNum);
    if ($(stepNum + "-address-1").value === "") {
        $(stepNum + "-address-1-invalid").classList.toggle("hide-me");
        addressValidated = false;
    }
    //window.alert("Address Validate address 1 " + stepNum);
    //window.alert(otherAddress[stepNum + "-address-type"]);
    if ($(stepNum + "-other-address").value === "" && otherAddress[stepNum + "-address-type"] === "true") {
        $(stepNum + "-other-address-invalid").classList.toggle("hide-me");
        addressValidated = false;
    }
    //window.alert("Address Validate other address " + stepNum);
    if ($(stepNum + "-city").value === "") {
        $(stepNum + "-city-invalid").classList.toggle("hide-me");
        addressValidated = false;
    }
    //window.alert("Address Validate city " + stepNum);
    if (!/^(AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)$/.test($(stepNum + "-state").value)) {
        $(stepNum + "-state-invalid").classList.toggle("hide-me");
        addressValidated = false;
    }
    //window.alert("Address Validate state " + stepNum);
    if (!/^[0-9][0-9][0-9][0-9][0-9]$/.test($(stepNum + "-zip").value)) {
        $(stepNum + "-zip-invalid").classList.toggle("hide-me");
        addressValidated = false;
    }
    //window.alert("Address Validate zip " + stepNum);
    //window.alert("Address Validate function finished for " + stepNum);
    return addressValidated;
};

var contactValidate = function () {
    "use strict";
    //window.alert("Contact Validate function started for step1");
    $("step1-tel-invalid").className = "invalid-input hide-me";
    $("step1-email-invalid").className = "invalid-input hide-me";
    var contactValidated = true;
    if (!/^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/.test($("step1-tel").value)) {
        //window.alert("Bad Tel");
        $("step1-tel-invalid").classList.toggle("hide-me");
        contactValidated = false;
    }

    if (!/.+\@.+\.[com|net|edu|gov]/.test($("step1-email").value)) {
        //window.alert("Bad Email");
        $("step1-email-invalid").classList.toggle("hide-me");
        contactValidated = false;
    }
    //window.alert("Contact Validate function finished for step1");
    return contactValidated;
};

var step1Process = function () {
    "use strict";
    //window.alert("step1Process function exected");
    addressValidate("step1");
    contactValidate();
    if (addressValidate("step1") && contactValidate()) {
        $("step1").classList.toggle("hide-me");
        $("step1-form").classList.toggle("hide-me");
        $("step1Return").classList.toggle("hide-me");
        $("step2").classList.toggle("hide-me");
        $("step2-form").classList.toggle("hide-me");
        $("pizza-price").classList.toggle("hide-me");
    }
    //window.alert("step1Process function finished");
    return false;
};

var AddressTypeProcess = function () {
    "use strict";
    //window.alert("addresstype process started for " + this.id);
    otherAddress[this.id] = "false";
    
    //window.alert($(this.id + "-div").className);
    $(this.id + "-div").className = "hide-me";
    if ($(this.id).value === "Other") {
        $(this.id + "-div").classList.toggle("hide-me");
        otherAddress[this.id] = "true";
    }
    //window.alert("addresstype process finished for " + this.id);
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

var crustChoice = false, sizePrices, sizeValues, finalPrice;

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
        finalPrice = totalPrice;
    } else {
        $("step2-crust-type-invalid").classList.toggle("hide-me");
    }
};

var step2CrustChoiceProcess = function () {

    "use strict";
    var z, a;
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
    //window.alert("step2Process function started");
    step2Validate();
    if (step2CheckCrustChoice()) {
        if (window.confirm("You've clicked finished building pizza, would you like proceed to payment info?")) {
            $("step2").classList.toggle("hide-me");
            $("step2-form").classList.toggle("hide-me");
            $("step2Return").classList.toggle("hide-me");
            $("step3").classList.toggle("hide-me");
            $("step3-form").classList.toggle("hide-me");
        }
    }
    //window.alert("step2Process function finished");
    return false;
};

var sameDeliveryProcess = function () {
    "use strict";
    if (this.checked) {
        $("step3-name").value = $("step1-name").value;
        $("step3-address-type").value = $("step1-address-type").value;
        $("step3-address-1").value = $("step1-address-1").value;
        $("step3-address-2").value = $("step1-address-2").value;
        otherAddress["step3-address-type"] = otherAddress["step1-address-type"];
        $("step3-other-address").value = $("step1-other-address").value;
        $("step3-address-type-div").setAttribute("class", $("step1-address-type-div").getAttribute("class"));
        $("step3-city").value = $("step1-city").value;
        $("step3-state").value = $("step1-state").value;
        $("step3-zip").value = $("step1-zip").value;
    }
    return false;
};

var CCCompany = "";

var validateCC = function () {
    "use strict";
    //window.alert("CC Validate function started for step3");
    var CCValidated = true;
    $("step3-credit-card-invalid").className = "invalid-input hide-me";
    $("step3-credit-card-invalid").innerHTML = "Valid Credit Card number is required: ";
    $("step3-expiration-month-invalid").className = "invalid-input hide-me";
    $("step3-expiration-year-invalid").className = "invalid-input hide-me";
    $("step3-cvc-code-invalid").className = "invalid-input hide-me";
    
    var d, doubleDigits = "", c, checkSum = 0,
        CC = $("step3-credit-card").value,
        allNum = /^[0-9]+/.test(CC),
        VISA = /^4/.test(CC) && (CC.length === 13 || CC.length === 16),
        MC = /^5[1-5]/.test(CC) && CC.length === 16,
        AMEX = /^37/.test(CC) && CC.length === 15;
    
    if (allNum && (VISA || MC || AMEX)) {
        for (d = 0; d < CC.length; d += 1) {
            if (d % 2 === 0) {
                doubleDigits = doubleDigits + (parseInt(CC[d] * 2, 10));
            } else { doubleDigits = doubleDigits + CC[d]; }
        }
        //window.alert(doubleDigits);
        for (c = 0; c < doubleDigits.length; c += 1) {
            checkSum += parseInt(doubleDigits[c], 10);
        }
        if (checkSum % 10 === 0) {
            if (VISA) { CCCompany = "VISA"; }
            if (MC) { CCCompany = "MASTERCARD"; }
            if (AMEX) { CCCompany = "AMERICAN EXPRESS"; }
            //window.alert(checkSum + " passed");
        } else {
            CCValidated = false;
            $("step3-credit-card-invalid").classList.toggle("hide-me");
            $("step3-credit-card-invalid").innerHTML += "Did not pass the checksum, please Re-enter CC #";
            //window.alert(checkSum + " failed");
        }
    } else {
        CCValidated = false;
        $("step3-credit-card-invalid").classList.toggle("hide-me");
        $("step3-credit-card-invalid").innerHTML += "Must be all #s, start with 4, 37 or 51-55, and be 13, 15, or 16 digits long. Please Re-enter CC #";
        //window.alert(CC + " failed precheck");
    }
    
    var todayDate = new Date();
    var expirationMonth = $("step3-expiration-month").options[$("step3-expiration-month").selectedIndex].value;
    var expirationYear = $("step3-expiration-year").options[$("step3-expiration-year").selectedIndex].value;
    var expirationDate = new Date(expirationYear, expirationMonth);
    
    //window.alert(expirationMonth);
    //window.alert(expirationYear);
    //window.alert(todayDate);
    //window.alert(expirationDate);

    
    if (expirationMonth === "" || expirationYear === "" || todayDate > expirationDate) {
        //window.alert("Bad Expirate Date");
        $("step3-expiration-month-invalid").classList.toggle("hide-me");
        $("step3-expiration-year-invalid").classList.toggle("hide-me");
        CCValidated = false;
    }

    if (!/^[0-9][0-9][0-9]$/.test($("step3-cvc-code").value)) {
        //window.alert("Bad CVC");
        $("step3-cvc-code-invalid").classList.toggle("hide-me");
        CCValidated = false;
    }
    //window.alert("CC Validate function finished for step3");
    return CCValidated;
};

var step3Process = function () {
    "use strict";
    //window.alert("step3process function started");
    addressValidate("step3");
    validateCC();
    if (addressValidate("step3") && validateCC()) {
        $("step3").classList.toggle("hide-me");
        $("step3-form").classList.toggle("hide-me");
        $("step3Return").classList.toggle("hide-me");
        //window.alert($("step4").innerHTML);
        var msg = "Your " + CCCompany + " card has successfully been charged $" + finalPrice + ". 1-2-3 Pizza is on it's way!";
        window.alert("Your " + CCCompany + " card has successfully been charged $" + finalPrice + ". 1-2-3 Pizza is on it's way!");
    }
    //window.alert("step3process function finished");
    return false;
};

var step1Return = function () {
    "use strict";
    $("step1Return").className = "hide-me";
    $("step2Return").className = "hide-me";
    $("step3Return").className = "hide-me";
    $("step1").className = "";
    $("step2").className = "hide-me";
    $("step3").className = "hide-me";
    $("step1-form").className = "needs-validation";
    $("step2-form").className = "needs-validation hide-me";
    $("pizza-price").className = "hide-me";
    $("step3-form").className = "needs-validation hide-me";
    return false;
};
var step2Return = function () {
    "use strict";
    $("step2Return").className = "hide-me";
    $("step3Return").className = "hide-me";
    $("step2").className = "";
    $("step3").className = "hide-me";
    $("step2-form").className = "needs-validation";
    $("pizza-price").className = "";
    $("step3-form").className = "needs-validation hide-me";
    return false;
};
var step3Return = function () {
    "use strict";
    $("step3Return").className = "hide-me";
    $("step3").className = "";
    $("step3-form").className = "needs-validation";
    return false;
};

var init = function () {
    "use strict";
    //window.alert("init function exected");
    $("step1-btn").onclick = step1Process;
    $("step1-address-type").onchange = AddressTypeProcess;
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
    $("step3").classList.toggle("hide-me");
    $("step3-form").classList.toggle("hide-me");
    $("step1Return").onclick = step1Return;
    $("step2Return").onclick = step2Return;
    $("step3Return").onclick = step3Return;
    //window.alert("init function finished");
};

window.onload = init;