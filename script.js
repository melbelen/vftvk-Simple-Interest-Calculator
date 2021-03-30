//Lab Step 2: Create Variables for 
//"principal" "rate" "years" and "interest"

//Lab Step 3: Create a variable called rate and assign 
//to it the value of the input element "rate"

//Lab Step 4: Create a variable called years and assign 
//to it the value of the input element "years"

//Lab Step 5: Create a variable called interest and assign 
//to it the value of principal * years * rate / 100

function compute()
{
    p = document.getElementById("principal").value;
    var principal = p ;
    r = document.getElementById("rate").value; 
    var rate = r ;
    y = document.getElementById("years").value;
    var years = y ;
    i = (principal * years * rate / 100);
    var interest = i ;

//Lab Step 11: When "Compute Interest" is clicked, 
//set its inner html property to the below text.
//If you deposit 1000000,
//at an interest rate of 3.5%.
//You will receive an amount of 175000,
//in the year 2025

//Lab Step 12: The number above are for indication only. 
//Make sure the output contains the relevant values by 
//using the correct variables.

//Lab Step 13: Make sure that the input you have taken 
//as "No of Years" is converted into an actual year.


    var pt = document.getElementById("pt") ;//get p id value from html
    pt.innerText = pt.innerText+"If you deposit " +principal;

    var rt = document.getElementById("rt") ;//get r id value from html
    rt.innerText = rt.innerText+"at an interest rate of " +rate ;

    var it = document.getElementById("it") ;//get i id value from html
    it.innerText = it.innerText+"%. You will receive an amount of " +interest;

    CurrentYear = document.getElementById("years").value;    
    var numberofyears = CurrentYear ;
    var actualyear = new Date();
    var n = actualyear.getFullYear();
    var newyear = +n + +CurrentYear;

    var yt = document.getElementById("yt") ;//get y id value from html
    yt.innerText = yt.innerText+"in the year " +newyear;

//Lab Step 10: Get the reference to the element named 'result'
    
    result.innerHTML = interest ;

}

//Lab Step 7: Write a function that reads the value of the
//range slider and displays it the <span>adjacent to the 
//slider.
//Lab Step 8: Link this function with an "onchange" event on the range.
//Lab Step 9: Change the slider, and test if the display in the span is being 
//updated dynamically.

function sliderchange()
{ var slider1 = document.getElementById("rate");
    var lab8rate = document.getElementById("lab8rate");
lab8rate.innerHTML = slider1.value;
//lab8rate.innerHTML = this.value;
}

//Lab Step 6: Write the logic to convert the 'No of Years' 
//into the actual year in the future.
function convertactualyear()
{
    cy = document.getElementById("years").value;
    var numberofyears = cy ;
    //var ActualYear = document.getElementById("ActualYear");
    //var actualyear = age_dt.getUTCFullYear();
    
    var actualyear = new Date();

    var n = actualyear.getFullYear();
    var newd = +n + +cy;

ActualYear.innerHTML = newd;
}

//Lab 15 step
function validateform() {
var x =
document.forms["Amount"] ["fname"].value;
if (x == "") {
    alert("Name must be filled out");
    return false;       
    }
}

//Lab Step 14: Make sure the numbers in the result are highlighted.

//Lab Step 15: Add validation for "Principal" input box. 
//If the user enters zero or negative values, show an alert "
//Enter a positive number"

//Lab Step 16: Once the user clicks on the alert "OK" button, 
//take the user back to the "Principal" input box, by setting 
//the focus on this box. 
//You can refer to the Javascript Form Validation lab.
