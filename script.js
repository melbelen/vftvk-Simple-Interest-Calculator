//Lab step 11 section
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
    
    result.innerHTML = interest ;

    //var principal2 = document.getElementById("pt");
    //var pt = document.createTextNode("If you deposit");
    //pt.appendChild(principal2);
    //paragraph.appendChild(text);

    //pv.textContent = principal;
    //rv.textContent = rate;
    //it.textContent = interest;
    //yv.textContent = years;
}


//Lab step 8 section
function sliderchange()
{ var slider1 = document.getElementById("rate");
    var lab8rate = document.getElementById("lab8rate");
lab8rate.innerHTML = slider1.value;
//lab8rate.innerHTML = this.value;
}


//Lab step 13 section
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
