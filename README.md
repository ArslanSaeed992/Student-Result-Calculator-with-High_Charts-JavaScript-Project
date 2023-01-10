
<!DOCTYPE html>
<html>
  <head>
    <title>student calculate</title>
    <link rel="icon" href="/search.png">
    
    <meta name="msapplication-TileImage" content="/download.png" />
 
    <!-- Bootstrap addition -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>

    <!-- jquery link -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <!-- link for font -->
    <link
      href="https://fonts.googleapis.com/css?family=Righteous&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />

    <!-- High Chart Scripts -->

    <script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<script src="https://code.highcharts.com/modules/drilldown.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>




    <style>
      /* Search Tab start */ 
    
    </style>
  </head>
  <body>
    <script>
      //        $('#form-2').click(function(){
      //     $('html, body').animate({scrollTop:1000},'50');
      // });
      $(document).ready(function(){
          $("#form-2").hide();
          $("#search-icon").hide();
          $("#edit").hide();
          $("#new-std").hide();


      });

      // $(document).ready(function(){
          
      // });

      // $(document).ready(function(){
      //     $("#edit").hide();
      // });

      // $(document).ready(function(){
      //     $("#table-2").hide();
      // });
    </script>
    <!-- main html -->

    <div class="container" id="form-1">
      <div class="row" id="row-1">
        <div class="col-6 col-md-4 text-left">
          <h1>STUDENT INFO FORM</h1>
        </div>
        <div class="col-12 col-sm-6 col-md-8">
          <!-- <h1>THis is text 2</h1> -->
          <div class="screen-body-item">
            <!-- <div class="app-form"> -->

            <div class="app-form">
              <div class="form-group boder">
                <!-- option for taking the input -->
                <input
                  style="background-color: #494949; border: none"
                  type="text"
                  class="form-control"
                  placeholder="FIRST NAME"
                  id="fname"
                  required
                />
              </div>

              <div class="form-group boder">
                <input
                  style="background-color: #494949; border: none"
                  type="text"
                  class="form-control placeholder-glow"
                  placeholder="LAST NAME"
                  id="lname"
                  required
                />
              </div>
              <div class="form-group boder">
                <input
                  style="background-color: #494949; border: none"
                  type="text"
                  class="form-control"
                  placeholder="USER NAME"
                  id="username"
                  required
                />
              </div>
              <div class="form-group boder">
                <!-- <label for="date" style="font-size:15px; color: aliceblue; font-weight: 600; padding-left: 25px; margin-bottom: -25px;">DATE OF BIRTH</label> -->
                <input
                  style="background-color: #494949; border: none"
                  class="form-control"
                  type="date"
                  name="begin"
                  id="date"
                  placeholder="dd-mm-yyyy"
                  value=""
                  min="1998-11-21"
                  max="2006-11-21"
                  value="DD-MM-YYYY"
                />
              </div>

              <div class="form-group boder">
                <input
                  style="background-color: #494949; border: none"
                  type="text"
                  class="form-control"
                  placeholder="CITY"
                  id="city"
                />
              </div>
              <div class="form-group boder">
                <input
                  style="background-color: #494949; border: none"
                  type="text"
                  class="form-control"
                  placeholder="ADDRESS"
                  id="address"
                />
              </div>

              <div>
                <input
                  style="
                    background-color: #494949;
                    border: none;
                    font-size: 20px;
                    font-weight: 600;
                    color: #00e5d6;
                  "
                  type="button"
                  id="btn"
                  value="SAVE"
                  class="form-button"
                  onclick="studentForm()"
                />
              </div>

              <!-- <button id="btn">Anination</button> -->
              <!-- onclick="location .href='form.html'" -->
            </div>
          </div>
        </div>
        <div class="form-group showdata" style="padding-left: 30px">
          <p id="showdata-1"></p>
        </div>
      </div>

      <!-- for showing the result-->
    </div>

    <!--adding external javascript file-->

    <div class="container" id="form-2">
      <div class="row" id="row-1">
        <div class="col-6 col-md-4 text-left">
          <h1>STUDENT GRADE CALCY</h1>
        </div>
        <div class="col-12 col-sm-6 col-md-8">
          <!-- <h1>THis is text 2</h1> -->
          <div class="screen-body-item">
            <div class="app-form">
              <div class="form-group boder">
                <!-- option for taking the input -->
                <input
                  style="background-color: #494949; border: none"
                  type="text"
                  class="form-control"
                  placeholder="ENGLISH"
                  onkeypress="return validateNumber(event)"
                  min="1"
                  max="100"
                  id="english"
                />
              </div>

              <div class="form-group boder">
                <input
                  style="background-color: #494949; border: none"
                  type="text"
                  class="form-control placeholder-glow"
                  onkeypress="return validateNumber(event)"
                  placeholder="URDU"
                  id="urdu"
                />
              </div>
              <div class="form-group boder">
                <input
                  style="background-color: #494949; border: none"
                  type="text"
                  class="form-control"
                  onkeypress="return validateNumber(event)"
                  placeholder="MATHS"
                  id="maths"
                />
              </div>
              <div class="form-group boder">
                <input
                  style="background-color: #494949; border: none"
                  type="text"
                  class="form-control"
                  onkeypress="return validateNumber(event)"
                  placeholder="PHYSICS"
                  id="physics"
                />
              </div>
              <div>
                <!-- button One -->
                <input
                  style="
                    background-color: #494949;
                    border: none;
                    font-size: 20px;
                    font-weight: 600;
                    color: #00e5d6;"
                  type="button"
                  value="BACK"
                  id="back-btn"
                  class="form-button"
                />

                <!-- Button Two -->
                <input
                  style="
                    background-color: #494949;
                    border: none;
                    font-size: 20px;
                    font-weight: 600;
                    color: #00e5d6;
                  "
                  id="Submit"
                  type="button"
                  value="SUBMIT"
                  class="form-button"
                  onclick="calculate()"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="form-group showdata" style="padding-left: 30px">
          <p id="showdata-2"></p>
        </div>
      </div>
    </div>
    <!-- for showing the result-->
    <br />
    
    <figure style="padding: 0px; margin: 120px 300px -180px -190px; float: right;" class="highcharts-figure">
    <div id="container" style="padding: 0px;"></div>
    </figure>

    <br />

    <div class="container" style="margin-top: 200px">
      <div id="search-icon">
        <input
          type="text"
          id="myInput"
          placeholder="Search for names.."
          title="Type in a name"
        />
        <div
          class="btn btn-lg btn-dark"
          id="search-btn"
          onclick="search()"
          style="
            margin-left: -14px;
            padding: 9px 20px;
            margin-top: -7px;
            border: 1px solid white;
          "
        >
          Search
        </div>
      </div>
      <br><br>

      <div class="row" >
        <div class="col-md-3">
          <table id="table" style="margin-left: -28px"
            class="table table-bordered table-hover dataTable js-exportable">
            <thead style="background-color: #494949; color: #00e5d6"></thead>

            <tbody
              id="myUL"
              width="30%"
              style="background-color: #494949; color: #00e5d6"
            ></tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- <br/><br/> -->

    <div class="container">
      <div class="row">
        <table
          id="table"
          class="table table-bordered table-hover dataTable js-exportable"
        >
          <tbody
            id="create_td"
            style="background-color: #494949; color: #00e5d6"
          ></tbody>
        </table>

        <div id="edit">
          <input
            style="
              background-color: #00e5d6;
              border: none;
              text-align: right;
              font-size: 20px;
              font-weight: 600;
              color: #494949;
            "
            type="button"
            value="BACK"
            class="form-button"
          />
        </div>

        <div id="new-std">
          <input
            style="
              background-color: #00e5d6;
              border: none;
              text-align: right;
              font-size: 20px;
              font-weight: 600;
              color: #494949;
            "
            type="button"
            id="btn-1"
            value="ADD NEW STUDENT"
            class="form-button"
            onclick="clear_form()"
          />
        </div>
        <!-- </center> -->
      </div>
    </div>

   

    <!--adding external javascript file-->
    <script src="script.js"></script>
  </body>
</html>
