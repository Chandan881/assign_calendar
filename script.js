function from_year(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");


createYear = from_year(2015, 2035);

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');

var months = "";
var days = "";

var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if (lang == "en") {
    months = monthDefault;
    days = dayDefault;
} else if (lang == "id") {
    months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
} else if (lang == "fr") {
    months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
} else {
    months = monthDefault;
    days = dayDefault;
}


var $dataHead = "<tr>";
for (dhead in days) {
    $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";


document.getElementById("thead-month").innerHTML = $dataHead;


monthAndYear = document.getElementById("month-year");
showCalendar(currentMonth, currentYear);

function selector() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    var firstDay = ( new Date( year, month ) ).getDay();

    tbl = document.getElementById("calendar-body");

    
    tbl.innerHTML = "";

    
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    var date = 1;
    for ( var i = 0; i < 6; i++ ) {
        
        var row = document.createElement("tr");

        
        for ( var j = 0; j < 7; j++ ) {
            if ( i === 0 && j < firstDay ) {
                cell = document.createElement( "td" );
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = `date-picker ${date}`
                
                cell.innerHTML = "<span>" + date + "</span>";


                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                    cell.className = "date-picker selected";
                    console.log(cell);
                }
                cell.addEventListener('click', (date) => date3(date));

                row.appendChild(cell);
                date++;
                
            }
        }

        tbl.appendChild(row);
    }

}

function date5(){
    const value = document.getElementById("value").value;

    const ele = document.getElementsByClassName(value);
    console.log(ele);
    if(ele >= 32){
        alert("invalid"); 
    }

    ele[0].className += ` selected2`

    value.value =" ";
}

const btn = document.getElementsByClassName("btn1");
console.log(btn);
btn[0].addEventListener('click',date5);



function date3(cell){
    console.log(cell.path);
    console.log(cell);

    console.log(cell.path[0].innerHTML);

    const date  = cell.path[0].innerHTML;
    const ele = document.getElementsByClassName(date);
    console.log(ele[0].className);
    if(ele[0].className == `date-picker ${date}`){
        ele[0].className += ` selected2`
    }else{
        ele[0].className = `date-picker ${date}`
    }
}
    

   

const elements = document.getElementsByTagName("td");
console.log(elements);


function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}


let array = [];

var i =5;
 while(i>=0){
    array[i] = i;
    console.log(array[i]);
    i--;
 }


 console.log(array);