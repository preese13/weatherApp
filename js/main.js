$(document).ready(function () {
  var basePath = 'https://api.wunderground.com/api/9b8bea4c7d08eb23/geolookup/conditions/q/';
  var isOpen = false;

  if (typeof (Storage) !== "undefined") 
  {
    zip = localStorage.zip;
    isZip = localStorage.isZip;
    city = localStorage.city;
    state = localStorage.state;
  } 
  else 
  {
    var isZip = false;
    var isCity = false;
    var zip = null;
    var city = null;
    var state = null;
  }

  if (localStorage.isCity === 'true') 
  {
    getCity();
  } 
  else if (localStorage.isZip === 'true') 
  {
    getZip();
  }

  $('#zip-submit').on('click', function (event) {
    event.preventDefault();

    localStorage.setItem("isZip", 'true');
    localStorage.setItem("isCity", 'false');

    zip = $('#zip').val();
    $('#zip').val("");
    var x = zip.toString();
    localStorage.setItem("zip", x);

    getZip();

    $('.nav-info-container').toggleClass('display');
    window.scrollTo(0, 0);

    if (isOpen) {
      setTimeout(function () {
        $('.navbar-mobile').toggleClass('navbar-open');
      }, 100);
    } else {
      $('.navbar-mobile').toggleClass('navbar-open');
    }
    isOpen = !isOpen;

  });

  $('#city-submit').on('click', function (event) {

    localStorage.setItem("isZip", 'false');
    localStorage.setItem("isCity", 'true');


    event.preventDefault();

    city = $('#city').val();
    $('#city').val("");

    state = $('#state').val();
    $('#state').val("");

    localStorage.setItem("city", city);
    localStorage.setItem("state", state);


    $('.nav-info-container').toggleClass('display');
    window.scrollTo(0, 0);

    if (isOpen) {
      setTimeout(function () {
        $('.navbar-mobile').toggleClass('navbar-open');
      }, 100);
    } else {
      $('.navbar-mobile').toggleClass('navbar-open');
    }
    isOpen = !isOpen;

    getCity();

  });

  $('#nav-icon').click(function () {

    $('.nav-info-container').toggleClass('display');
    window.scrollTo(0, 0);

    if (isOpen) {
      setTimeout(function () {
        $('.navbar-mobile').toggleClass('navbar-open');
      }, 100);
    } else {
      $('.navbar-mobile').toggleClass('navbar-open');
    }
    isOpen = !isOpen;
  });
  $('#nav-refresh').click(function () {
    if (localStorage.isCity === 'true') {
      getCity();

    } else if (localStorage.isZip === 'true') {

      getZip();
    }
  });


  function toggleNav()
  {
    
  }

  function getCity() {
    $.ajax({
        url: basePath + '/' + localStorage.state + '/' + localStorage.city + '.json',
        type: 'get',
        dataType: 'json'
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

        if(humidity > 100) {
          humidity = '100+'
        }

        $("#location").empty();
        $("#icon").empty();
        $("#temperature").empty();
        $("#humidity").empty();
        $("#rainnum").empty();
        $("#wind").empty();

        //fills those fields with new variables
        $("#location").append(city + ", " + state);
        $("#temperature").prepend(temp + '&deg;');
        $("#humidity").append(humidity);
        $("#rainnum").prepend(rain + ' In.');
        $("#wind").prepend(wind + ' mph');

        if (icon === 'chanceofflurries') {
          $("#chance-of-flurries").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'chanceofrain') {
          $("#chance-of-rain").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'chanceofsleet') {
          $("#chance-of-sleet").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'chanceofsnow') {
          $("#chance-of-snow").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'chanceofathunderstorm') {
          $("#chance-of-storm").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'clear') {
          $("#clear").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");

        } else if (icon === 'cloudy') {
          $("#cloudy").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'flurries') {
          $("#chance-of-snow").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'hazy') {
          $("#hazy").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'mostlycloudy') {
          $("#kinda-cloudy").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'mostlysunny') {
          $("#kinda-cloudy").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'partlycloudy') {
          $("#kinda-cloudy").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'partlysunny') {
          $("#kinda-cloudy").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'rain') {
          $("#rain").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'sleet') {
          $("#sleet").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'snow') {
          $("#snow").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'sunny') {
          $("#clear").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");

        } else if (icon === 'thunderstorm') {
          $("#storm").css("display", "block");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");
        }
      })


  }

  function getZip() {
    $.ajax({
        url: basePath + '/' + localStorage.zip + '.json',
        type: 'get',
        dataType: 'json'
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

        if(humidity > 100) {
          humidity = '100+'
        }

        $("#location").empty();
        $("#icon").empty();
        $("#temperature").empty();
        $("#humidity").empty();
        $("#rainnum").empty();
        $("#wind").empty();

        //fills those fields with new variables
        $("#location").append(city + ", " + state);
        $("#temperature").prepend(temp + '&deg;');
        $("#humidity").append(humidity);
        $("#rainnum").prepend(rain + ' In.');
        $("#wind").prepend(wind + ' mph');

        if (icon === 'chanceofflurries') {
          $("#chance-of-flurries").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'chanceofrain') {
          $("#chance-of-rain").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'chanceofsleet') {
          $("#chance-of-sleet").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'chanceofsnow') {
          $("#chance-of-snow").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'chanceofathunderstorm') {
          $("#chance-of-storm").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'clear') {
          $("#clear").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");

        } else if (icon === 'cloudy') {
          $("#cloudy").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'flurries') {
          $("#chance-of-snow").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'hazy') {
          $("#hazy").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'mostlycloudy') {
          $("#kinda-cloudy").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'mostlysunny') {
          $("#kinda-cloudy").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'partlycloudy') {
          $("#kinda-cloudy").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'partlysunny') {
          $("#kinda-cloudy").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'rain') {
          $("#rain").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'sleet') {
          $("#sleet").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'snow') {
          $("#snow").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#clear").css("display", "none");

        } else if (icon === 'sunny') {
          $("#clear").css("display", "block");
          $("#storm").css("display", "none");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");

        } else if (icon === 'thunderstorm') {
          $("#storm").css("display", "block");
          $("#chance-of-flurries").css("display", "none");
          $("#chance-of-rain").css("display", "none");
          $("#chance-of-sleet").css("display", "none");
          $("#chance-of-storm").css("display", "none");
          $("#cloudy").css("display", "none");
          $("#chance-of-snow").css("display", "none");
          $("#hazy").css("display", "none");
          $("#kinda-cloudy").css("display", "none");
          $("#rain").css("display", "none");
          $("#sleet").css("display", "none");
          $("#snow").css("display", "none");
          $("#clear").css("display", "none");
        }

      })

  }
});


