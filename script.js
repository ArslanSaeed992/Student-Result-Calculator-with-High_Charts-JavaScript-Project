var student = {};
var marks = {};
var arr = [];
var array = {};
var data = []

var fname;
var lname;
var username;
var date;
var city;
var address;

var english;
var urdu;
var maths;
var physics;

var grades_1;
var grades_2;
var grades_3;
var grades_4;

var P1;
var P2;
var P3;
var P4;

var G1;
var G1;
var G1;
var G1;

var totalgrades;
var percentage;
//  for pie chart
var y;
var name;

var resultObject;



// student form 1 data 

function studentForm(){

    // Getting input from user into height variable.
    fname = document.querySelector("#fname").value;
    lname = document.querySelector("#lname").value;
    username = document.querySelector("#username").value;
    date = document.querySelector("#date").value;
    city = document.querySelector("#city").value;
    address = document.querySelector("#address").value;

    if (fname == "" || lname == "" || username == "" || date == "" || city == "" || address == "") {
        document.querySelector("#showdata-1").innerHTML= "Please fill all the fields";
    }

    else{
       
        $("#form-1").hide();
        $("#form-2").show();

        student['First Name'] = fname;
        student['Last Name'] = lname;
        student['User Name'] = username;
        student['Age'] = date;
        student['City'] = city;
        student['Address'] = address;
        
        console.log(student);
    }
}

// Function for calculating grades
function calculate(){

    // Getting input from user into height variable.
    english = document.querySelector("#english").value;
    urdu = document.querySelector("#urdu").value;
    maths = document.querySelector("#maths").value;
    physics = document.querySelector("#physics").value;
    grades = "";

    // Input is string so typecasting is necessary. */
    totalgrades =
    parseFloat(english) +
    parseFloat(urdu) +
    parseFloat(maths) +
    parseFloat(physics);
  
    totalgrades_1 = parseFloat(english);
    totalgrades_2 = parseFloat(urdu);
    totalgrades_3 = parseFloat(maths);
    totalgrades_4 = parseFloat(physics);

   

    

    // Checking the condition for the providing the
    percentage = Math.floor((totalgrades / 400) * 100);
    if ((percentage <= 100 && percentage >= 80)) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }

    // grade to student based on percentage
    percentage_1 = Math.floor((totalgrades_1 / 100) * 100);
    if ((percentage_1 <= 100 && percentage_1 >= 80)) {
        grades_1 = "A";
    } else if (percentage_1 <= 79 && percentage_1 >= 60) {
        grades_1 = "B";
    } else if (percentage_1 <= 59 && percentage_1 >= 40) {
        grades_1 = "C";
    } else {
        grades_1 = "F";
    }

    percentage_2 = Math.floor((totalgrades_2 / 100) * 100);
    if ((percentage_2 <= 100 && percentage_2 >= 80)) {
        grades_2 = "A";
    } else if (percentage_2 <= 79 && percentage_2 >= 60) {
        grades_2 = "B";
    } else if (percentage_2 <= 59 && percentage_2 >= 40) {
        grades_2 = "C";
    } else {
        grades_2 = "F";
    }

    percentage_3 = Math.floor((totalgrades_3 / 100) * 100);
    if ((percentage_3 <= 100 && percentage_3 >= 80)) {
        grades_3 = "A";
    } else if (percentage_3 <= 79 && percentage_3 >= 60) {
        grades_3 = "B";
    } else if (percentage_3 <= 59 && percentage_3 >= 40) {
        grades_3 = "C";
    } else {
        grades_3 = "F";
    }

    percentage_4 = Math.floor((totalgrades_4 / 100) * 100);
    if ((percentage_4 <= 100 && percentage_4 >= 80)) {
        grades_4 = "A";
    } else if (percentage_4 <= 79 && percentage_4 >= 60) {
        grades_4 = "B";
    } else if (percentage_4 <= 59 && percentage_4 >= 40) {
        grades_4 = "C";
    } else {
        grades_4 = "F";
    }

    fname = document.querySelector("#fname").value;
    lname = document.querySelector("#lname").value;
    username = document.querySelector("#username").value;
    date = document.querySelector("#date").value;
    city = document.querySelector("#city").value;
    address = document.querySelector("#address").value;
    
    // validate Number function Checking the values are empty if empty than
     if(parseFloat(english) > 100 || parseFloat(urdu) > 100 || parseFloat(maths)  > 100 || parseFloat(physics) > 100){
        document.querySelector("#showdata-2").innerHTML= "Please enter value (0 - 100)";  
    }
    
    else if ( english == "" || urdu == "" || maths == "" || physics == "") {
        document.querySelector("#showdata-2").innerHTML= "Please fill all the fields";
    
    }

    else if (fname == "" || lname == "" || username == "" || date == "" || city == "" || address == "") {
        document.querySelector("#showdata-2").innerHTML= "Please fill Student Information form";
       

        // $(this).click(function() {
        //     $(window.opera ? 'html' : 'html, body').animate({
        //         scrollTop: 0
        //     }, 'slow');
        // });
    }

 
       else {
        $(document).ready(function(){

            // $("#btn").on("click",function(){
                // $("#form-2").show();
                $("#form-2").hide();

                $("#search-icon").show();
                $("#edit").show();
                $("#new-std").show();

                $("#myUL").show();
                $("#create_td").show();
                $("#container").show();
                // $("#form-2").css("display","block")
                // $("#form-1").css("display","none")
    
            // });
        // $("#Submit").on("click",function(){
            
            
        //     // $("#form-2").css("display","block")
        //     // $("#form-2").css("display","none")
        // });

     
        });

        marks['English'] = english;
        marks['P1'] = percentage_1;
        marks['G1'] = grades_1;

        marks['Urdu'] = urdu;
        marks['P2'] = percentage_2;
        marks['G2'] = grades_2;

        marks['Maths'] = maths;
        marks['P3'] = percentage_3;
        marks['G3'] = grades_3;

        marks['Physics'] = physics;
        marks['P4'] = percentage_4;
        marks['G4'] = grades_4;

        marks['Total'] = totalgrades;
        marks['Percentage'] = percentage;
        marks['T-Grades'] = grades;


        console.log(marks);
    
        
        employee = {...student, ...marks}
        arr.push(employee)

    //    employee = Object.assign(student, marks);
        // arr.splice(1, 0, employee);
       //    arr = arr.concat(student, marks)

       document.getElementById('myUL').innerHTML = ('<tr><td>First Name</td><td>' + fname + '</td></tr><tr><td>Last Name</td><td>' + lname + '</td></tr><tr><td>User Name</td><td>' + username + '</td></tr><tr><td>Date Of Birth</td><td>' + date + '</td></tr><tr><td>City</td><td>' + city + '</td></tr><tr><td>Address</td><td>' + address + '</td></tr>') 
    
       console.log(arr);

         document.getElementById('create_td').innerHTML = ('<tr id="head"><th>Subjects</th><th>Obtained Marks</th><th>Total Marks</th><th id="percent">Percent</th><th>Percentage</th><th id="grade">Grade</th><th>Grades</th></tr>'+ '<tr><td>English</td><td>' + english + '</td><td>100</td><td id="p1">P1</td><td>'+percentage_1+' % </td><td id="g1">G1</td><td>'+ grades_1+'</td></tr>' +'<tr><td>Urdu</td><td>' + urdu +'</td><td>100</td><td id="p2">P2</td><td>'+percentage_2+' % </td><td id="g2">G2</td><td>'+ grades_2+'</td></tr>' +'<tr><td>Maths</td><td>' + maths + '</td><td>100</td><td id="p3">P3</td><td>'+percentage_3+' %</td><td id="g3">G3</td><td>'+ grades_3+'</td></tr>' +'<tr><td>Physics</td><td>' + physics + '</td><td>100</td><td id="p4">P4</td><td>'+percentage_4+' %</td><td id="g4">G4</td><td>'+ grades_4+'</td></tr><tr id="total"><td>Total</td> <td>'+totalgrades +'</td> <td> 400 </td> <td id="t-percentage">Percentage</td><td>'+percentage +' %</td><td id="t-grade">T-Grades</td> <td>'+grades +'</td> </tr> ' )
    
    // $("#btn").click(function(){
    //     $("#percent").hide();
    //   });

    $("#head").css("background-color", "#0d0d0d");
    $("#total").css("background-color", "#262626");

    
      $('#percent , #grade, #p1, #p2,  #p3, #p4,  #g1, #g2, #g3,#g4, #t-percentage, #t-grade').css({
        display: 'none'
    })

 
    array['name'] = fname;
    // array['English'] = english;
    // array['Urdu'] = urdu;
    // array['Maths'] = maths;
    // array['Physics'] = physics;
    // array['Total'] = totalgrades;
    array['y'] = percentage;
    // array['T-Grades'] = grades;

    console.log(fname)
    std = {...array}
    data.push(std)

// Create the chart
 console.log (data);

 Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Student Result'
    },
    subtitle: {
        text: 'Arslan Saeed'
    },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Browsers",
            colorByPoint: true,
            data: data
        }
    ],
    drilldown: {
        series: [
           
        ]
    }
});

    } 

    


    // console.log(arr.length);

    }

  
    

    function search(){
        var input, i;
        input = document.getElementById("myInput").value;
            for(var i=0; i<arr.length; i++){  
            if(input == arr[i]["First Name"]){

                console.log("Exist");

                document.getElementById('myUL').innerHTML = ('<tr id="width"><td>First Name</td><td>' + arr[i]["First Name"] + '</td></tr><tr><td>Last Name</td><td>' + arr[i]["Last Name"] + '</td></tr><tr><td>User Name</td><td>' + arr[i]["User Name"] + '</td></tr><tr><td>Date Of Birth</td><td>' + arr[i]["Age"] + '</td></tr><tr><td>City</td><td>' + arr[i]["City"] + '</td></tr><tr><td>Address</td><td>' + arr[i]["Address"] + '</td></tr>') 
                
                document.getElementById('create_td').innerHTML = ('<tr id="head"><th>Subjects</th><th>Obtained Marks</th><th>Total Marks</th><th id="percent">Percent</th><th>Percentage</th><th id="grade">Grade</th><th >Grades</th></tr>'+ '<tr><td>English</td><td>' + arr[i]["English"] + '</td><td>100</td><td id="p1">P1</td><td>'+ arr[i]["P1"] +' % </td><td id="g1">G1</td><td>'+arr[i]["G1"]+'</td></tr>' +'<tr><td>Urdu</td><td>' + arr[i]["Urdu"] +'</td><td>100</td><td id="p2">P2</td><td>'+ arr[i]["P2"]+' % </td><td id="g2">G2</td><td>'+  arr[i]["G2"]+'</td></tr>' +'<tr><td>Maths</td><td>' + arr[i]["Maths"] + '</td><td>100</td><td id="p3">P3</td><td>'+arr[i]["P3"]+' %</td><td id="g3">G3</td><td>'+ arr[i]["G3"]+'</td></tr>' +'<tr><td>Physics</td><td>' + arr[i]["Physics"] + '</td><td>100</td><td id="p4">P4</td><td>'+arr[i]["P4"]+' %</td><td id="g4">G4</td><td>'+ arr[i]["G4"]+'</td></tr><tr id="total"><td>Total</td> <td>'+ arr[i]["Total"] +'</td> <td> 400 </td> <td id="t-percentage">Percentage</td><td>'+ arr[i]["Percentage"] +' %</td><td id="t-grade">T-Grades</td> <td>'+ arr[i]["T-Grades"] +'</td> </tr>' )
               
                $("#width").css("width", "50%");
                $("#head").css("background-color", "#0d0d0d");
                $("#total").css("background-color", "#262626");
               
                $('#percent , #grade, #p1, #p2,  #p3, #p4,  #g1, #g2, #g3,#g4, #t-percentage, #t-grade').css({
                    display: 'none'
                })

        // percent

            }
            else{
              console.log("Not Exist");
            }
        }
    }

    // form validation function should be (0-9)
    function validateNumber(e) {
        const pattern = /^[0-9]$/;
        return pattern.test(e.key )
    }

function clear_form(){
    $("#btn-1").on("click",function(){
    $("#form-1").show();
    });

  const fnameInput = document.getElementById('fname');
  const lnameInput = document.getElementById('lname');
  const usernameInput = document.getElementById('username');
  const dateInput = document.getElementById('date');
  const cityInput = document.getElementById('city');
  const addressInput = document.getElementById('address');
  const englishInput = document.getElementById('english');
  const urduInput = document.getElementById('urdu');
  const mathInput = document.getElementById('maths');
  const physicsInput = document.getElementById('physics');
  const SearchInput = document.getElementById('myInput');

  


  fnameInput.value = '';
  lnameInput.value = '';
  usernameInput.value = '';
  dateInput.value = '';
  cityInput.value = '';
  addressInput.value = '';
  englishInput.value = '';
  urduInput.value = '';
  mathInput.value = '';
  physicsInput.value = '';
  SearchInput.value = '';

    $("#form-1").show();
    $("#search-icon").hide();
    $("#edit").hide();
    $("#new-std").hide();
    $("#myUL").hide();
    $("#create_td").hide();
    $("#container").hide();
}





