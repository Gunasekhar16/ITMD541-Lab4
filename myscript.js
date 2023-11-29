$(document).ready(function(){
    var loc = ""; 
    $("#search").click(function(){
	var loc = $("#location").val(); 
	var inputValid = true;
	
	//validate investment 
	if ( loc == "" ) {
		alert("Search location is empty");
		inputValid = false;
	} 
	
	//search the location at given url
	if (inputValid){
	    url1 = "https://geocode.maps.co/search?q=" + "{" + loc + "}";
	    console.log( "url1 :         " + url1 );
	    $.getJSON(url1, function(json) {
		var res = $.isEmptyObject(json);
		if (res) {
		    console.log('Location is Unknown!')
		}
		else {
		    var lat = json[0].lat;
		    var lon = json[0].lon;
		    
		    console.log( "Name: " + json[0].display_name ); 
		    console.log( "Latitude Data: " + json[0].lat ); 
		    console.log( "Longitude Data: " + json[0].lon );
		    
		    var today = new Date();
		    var twoDigitMonth = (today.getMonth() +1) +"";
		    if(twoDigitMonth.length==1)	
			twoDigitMonth="0" +twoDigitMonth;
		    var twoDigitDate = today.getDate()+"";
		    if(twoDigitDate.length==1)
			twoDigitDate="0" +twoDigitDate;
		    var todayDate = today.getFullYear() + "-" + twoDigitMonth + "-" + twoDigitDate;
		    
		    console.log("Today Date      : " + today);
		    console.log("Today Year      : " + today.getFullYear());
		    console.log("Today Month     : " + twoDigitMonth); 
		    console.log("Today Day       : " + twoDigitDate);
		    
		    var url2 = "https://api.sunrisesunset.io/json?lat=" + lat +"&lng=" + lon + "&timezone=UTC&date=" + todayDate;
		    console.log( "url2 :         " + url2 );
		    $.getJSON(url2, function(json) { 
			$("#today_sunrise").val(json.results.sunrise);
			$("#today_sunset").val(json.results.sunset);
			$("#today_dawn").val(json.results.dawn);
			$("#today_dusk").val(json.results.dusk);
			$("#today_day_length").val(json.results.day_length);
			$("#today_solar_noon").val(json.results.solar_noon);
			$("#today_timezone").val(json.results.timezone);
			console.log( "Today Date:         " + json.results.date ); 
			console.log( "Today Sunrise:      " + json.results.sunrise ); 
			console.log( "Today Sunset:       " + json.results.sunset ); 
			console.log( "Today Dawn:         " + json.results.dawn ); 
			console.log( "Today Dusk:         " + json.results.dusk ); 
			console.log( "Today Day Length    " + json.results.day_length ); 
			console.log( "Today Solar Noon    " + json.results.solar_noon ); 
			console.log( "Today Timezone      " + json.results.timezone); 
		    });
		    
		    var tomm = new Date();
		    tomm.setDate(tomm.getDate() +1);	
		    var twoDigitMonth = (tomm.getMonth() +1) +"";
		    if(twoDigitMonth.length==1)	
			twoDigitMonth="0" +twoDigitMonth;
		    
		    var twoDigitDate = tomm.getDate()+"";
		    if(twoDigitDate.length==1)
			twoDigitDate="0" +twoDigitDate;
		    var tommDate = tomm.getFullYear() + "-" + twoDigitMonth + "-" + twoDigitDate;
		    
		    console.log("Tomm Date      : " + tomm);
		    console.log("Tomm Year      : " + tomm.getFullYear());
		    console.log("Tomm Month     : " + twoDigitMonth);
		    console.log("Tomm Day       : " + twoDigitDate);
		    var url3 = "https://api.sunrisesunset.io/json?lat=" + lat +"&lng=" + lon + "&timezone=UTC&date=" + tommDate;
		    console.log( "url :         " + url3 );
		    $.getJSON(url3, function(json) { 
			$("#tomorrow_sunrise").val(json.results.sunrise);
			$("#tomorrow_sunset").val(json.results.sunset);
			$("#tomorrow_dawn").val(json.results.dawn);
			$("#tomorrow_dusk").val(json.results.dusk);
			$("#tomorrow_day_length").val(json.results.day_length);
			$("#tomorrow_solar_noon").val(json.results.solar_noon);
			$("#tomorrow_timezone").val(json.results.timezone);
			console.log( "Tomorrow Date:         " + json.results.date ); 
			console.log( "Tomorrow Sunrise:      " + json.results.sunrise ); 
			console.log( "Tomorrow Sunset:       " + json.results.sunset ); 
			console.log( "Tomorrow Dawn:         " + json.results.dawn ); 
			console.log( "Tomorrow Dusk:         " + json.results.dusk ); 
			console.log( "Tomorrow Day Length    " + json.results.day_length ); 
			console.log( "Tomorrow Solar Noon    " + json.results.solar_noon ); 
			console.log( "Tomorrow Timezone      " + json.results.timezone); 
		    });
		}
	    });
	    
	}
    })
})
