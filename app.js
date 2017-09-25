
$( document ).ready(function(){

  var num = Math.floor(Math.random() * 22) + 1
   $('body').addClass('colorScheme' + num);
   $('.overlayElement').addClass('colorScheme' + num);
   $('.closebtn').addClass('colorScheme' + num);
   $('#myNav').addClass('myNav1' + num);


   $( "body" ).dblclick(function() {
     location.reload();
   });

  // Make sure to add your API key to the URL!
  var url = 'https://api.wunderground.com/api/9b8bea4c7d08eb23/geolookup/conditions/q/DC/washington.json'
  var url2 = 'https://api.wunderground.com/api/9b8bea4c7d08eb23/geolookup/conditions/q/DE/bethany_beach.json'
  var url3 = 'https://api.wunderground.com/api/9b8bea4c7d08eb23/geolookup/conditions/q/WY/jackson_hole.json'
  var url4 = 'https://api.wunderground.com/api/9b8bea4c7d08eb23/geolookup/conditions/q/NY/new_york.json'

  $( "#dc" ).click(function() {
    closeNav()
     $.ajax({
       url: url,
       type: 'get',
       dataType: 'json'
       // $.ajax takes an object as an argument with at least three key-value pairs...
       // (1) The URL endpoint for the JSON object.
       // (2) Type of HTTP request.
       // (3) Datatype. Usually JSON.
     })
     .done((response) => {
       var city = response.location.city
       var state = response.location.state
       var temperature = response.current_observation.temp_f
       var temp = Math.round(temperature)
       var humidity = response.current_observation.relative_humidity
       var wind = response.current_observation.wind_mph
       var rain = response.current_observation.precip_today_metric
       var icon = response.current_observation.icon
       console.log(city, state, temp, humidity, wind, rain, icon)

       $("#location").empty();
       $("#icon").empty();
       $("#temperature").empty();
       $("#humidity").empty();
       $("#rainnum").empty();
       $("#wind").empty();

       $("#location").append(city + ", " + state);
       $("#icon").append(icon);
       $("#temperature").prepend(temp);
       $("#humidity").append(humidity);
       $("#rainnum").append(rain);
       $("#wind").prepend(wind);
   })
  });

  $( "#de" ).click(function() {
    closeNav()
     $.ajax({
       url: url2,
       type: 'get',
       dataType: 'json'
       // $.ajaxtakes an object as an argument with at least three key-value pairs...
       // (1) The URL endpoint for the JSON object.
       // (2) Type of HTTP request.
       // (3) Datatype. Usually JSON.
     })
     .done((response) => {
       var city = response.location.city
       var state = response.location.state
       var temperature = response.current_observation.temp_f
       var temp = Math.round(temperature)
       var humidity = response.current_observation.relative_humidity
       var wind = response.current_observation.wind_mph
       var rain = response.current_observation.precip_today_metric
       var icon = response.current_observation.icon
       console.log(city, state, temp, humidity, wind, rain, icon)

       $("#location").empty();
       $("#icon").empty();
       $("#temperature").empty();
       $("#humidity").empty();
       $("#rainnum").empty();
       $("#wind").empty();

       $("#location").append(city + ", " + state);
       $("#icon").append(icon);
       $("#temperature").prepend(temp);
       $("#humidity").append(humidity);
       $("#rainnum").append(rain);
       $("#wind").prepend(wind);
   })
  });
  $( "#wy" ).click(function() {
    closeNav()
     $.ajax({
       url: url3,
       type: 'get',
       dataType: 'json'
       // $.ajax takes an object as an argument with at least three key-value pairs...
       // (1) The URL endpoint for the JSON object.
       // (2) Type of HTTP request.
       // (3) Datatype. Usually JSON.
     })
     .done((response) => {
       var city = response.location.city
       var state = response.location.state
       var temperature = response.current_observation.temp_f
       var temp = Math.round(temperature)
       var humidity = response.current_observation.relative_humidity
       var wind = response.current_observation.wind_mph
       var rain = response.current_observation.precip_today_metric
       var icon = response.current_observation.icon
       console.log(city, state, temp, humidity, wind, rain, icon)

       $("#location").empty();
       $("#icon").empty();
       $("#temperature").empty();
       $("#humidity").empty();
       $("#rainnum").empty();
       $("#wind").empty();

       $("#location").append(city + ", " + state);
       $("#icon").append(icon);
       $("#temperature").prepend(temp);
       $("#humidity").append(humidity);
       $("#rainnum").append(rain);
       $("#wind").prepend(wind);
   })
  });
  $( "#ny" ).click(function() {
    closeNav()
     $.ajax({
       url: url4,
       type: 'get',
       dataType: 'json'
       // $.ajax takes an object as an argument with at least three key-value pairs...
       // (1) The URL endpoint for the JSON object.
       // (2) Type of HTTP request.
       // (3) Datatype. Usually JSON.
     })
     .done((response) => {
       var city = response.location.city
       var state = response.location.state
       var temperature = response.current_observation.temp_f
       var temp = Math.round(temperature)
       var humidity = response.current_observation.relative_humidity
       var wind = response.current_observation.wind_mph
       var rain = response.current_observation.precip_today_metric
       var icon = response.current_observation.icon
       console.log(city, state, temp, humidity, wind, rain, icon)

       $("#location").empty();
       $("#icon").empty();
       $("#temperature").empty();
       $("#humidity").empty();
       $("#rainnum").empty();
       $("#wind").empty();

       $("#location").append(city + ", " + state);
       $("#icon").append(icon);
       $("#temperature").prepend(temp);
       $("#humidity").append(humidity);
       $("#rainnum").append(rain);
       $("#wind").append(wind);
   })
  });

  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json'
    // $.ajax takes an object as an argument with at least three key-value pairs...
    // (1) The URL endpoint for the JSON object.
    // (2) Type of HTTP request.
    // (3) Datatype. Usually JSON.
  })
  .done((response) => {
    var city = response.location.city
    var state = response.location.state
    var temperature = response.current_observation.temp_f
    var temp = Math.round(temperature)
    var humidity = response.current_observation.relative_humidity
    var wind = response.current_observation.wind_mph
    var rain = response.current_observation.precip_today_metric
    var icon = response.current_observation.icon
    console.log(city, state, temp, humidity, wind, rain, icon)

    $("#location").append(city + ", " + state);
    $("#icon").append(icon);
    $("#temperature").prepend(temp);
    $("#humidity").append(humidity);
    $("#rainnum").append(rain );
    $("#wind").append(wind );
})

})

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("pageContainer").style.width = "0vw";
    $("span").css("display","none")
    $("#pageContainer").css("display","none")
    $("middle").css("font-size","20vw")
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
      document.getElementById("pageContainer").style.width = "100vw";
      $("span").css("display","block")
      $("#pageContainer").css("display","block")

}
