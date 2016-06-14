/**
 * Created by lahavredler on 14/06/2016.
 */

/*

        MILES <--> KM
        KM    <--> MILES

 */
// function to convert miles to km
function milesToKm(miles)
{
    var result;
    result = miles * 1.6;
    document.milesForm.kmAnswer.value=result;

}

// function to convert km to miles
function kmToMiles(km)
{
    var result;
    result = km * 0.62137;
    document.milesForm.milesAnswer.value=result;
}

/*
        LBS <--> KG
        KG  <--> LBS
 */
// function to convert lbs to kgs

function lbsToKgs(lbs)
{
    var result;
    result = lbs / 2.2046;
    document.lbsForm.kgAnswer.value=result;

}

// function to convert kgs to lbs
function kgsToLbs(kgs)
{
    var result;
    result = kgs * 2.2046;
    document.lbsForm.lbsAnswer.value=result;
}


/*
        INCH <--> CM
        CM   <--> INCH
 */
// function to convert inch to cm
function inchToCm(inch)
{
    var result;
    result = inch * 2.54;
    document.inchForm.cmAnswer.value=result;

}

// function to convert cm to inch
function cmToInch(cm)
{
    var result;
    result = cm * 0.3937;
    document.inchForm.inchAnswer.value=result;
}


/*
         FAHRENHEIT <--> CELSIUS
         CELSIUS    <--> FAHRENHEIT
 */

// function to convert fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit)
{
    var result;
    result = (fahrenheit - 32)  *  (5/9);
        document.fahrenheitForm.celsiusAnswer.value=result;
}

// function to convert celsius to fahrenheit
function celsiusToFahrenheit(celsius)
{
    var result;
    result = (celsius * (9/5)) + 32;
        document.fahrenheitForm.fahrenheitAnswer.value=result;
}