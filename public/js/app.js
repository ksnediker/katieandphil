console.log("app loaded");

$(function() {

// Hides all of the content containers
	$("#rsvp-container").hide();

	$("#location-container").hide();

	$("#accommodations-container").hide();

	$("#party-container").hide();

	$("#contact-container").hide();

// Hides the add another button
	$("#addanother").hide();

// Hides the submitted message
	$("#submitted").hide();

// hides the close (-) bar
	$('.close').hide();

// Shows the container when + is clicked, hides the + and shows the -
	$("#rsvp-open").click(function() {
		console.log("clicked");
		$("#rsvp-container").show();
		$("#rsvp-open").hide();
		$("#rsvp-close").show();
	});

// Hides the container when - is clicked, hides the - and shows the + 
	$("#rsvp-close").click(function() {
		$("#rsvp-container").hide();
		$("#rsvp-close").hide();
		$("#rsvp-open").show();
	});

	$("#location-open").click(function() {
		$("#location-container").show();
		$("#location-open").hide();
		$("#location-close").show();
		initialize();
	});

	$("#location-close").click(function() {
		$("#location-container").hide();
		$("#location-close").hide();
		$("#location-open").show();
	});

	$("#accommodations-open").click(function() {
		$("#accommodations-container").show();
		$("#accommodations-open").hide();
		$("#accommodations-close").show();
		initialize();
	});

	$("#accommodations-close").click(function() {
		$("#accommodations-container").hide();
		$("#accommodations-close").hide();
		$("#accommodations-open").show();
	});

	$("#party-open").click(function() {
		$("#party-container").show();
		$("#party-open").hide();
		$("#party-close").show();
	});

	$("#party-close").click(function() {
		$("#party-container").hide();
		$("#party-close").hide();
		$("#party-open").show();
	});

	$("#contact-open").click(function() {
		$("#contact-container").show();
		$("#contact-open").hide();
		$("#contact-close").show();
	});

	$("#contact-close").click(function() {
		$("#contact-container").hide();
		$("#contact-close").hide();
		$("#contact-open").show();
	});

// back to top button
	$(".top").click(function() {
		document.getElementById("header-container").scrollIntoView()
	});

// Links in nav bar that open and scroll to container
	$("#rsvp-link").click(function() {
		$("#rsvp-container").show();
		$("#rsvp-open").hide();
		$("#rsvp-close").show();
		document.getElementById("rsvp-container").scrollIntoView()
	});
	
	$("#location-link").click(function() {
		$("#location-container").show();
		$("#location-open").hide();
		$("#location-close").show();
		initialize();
		document.getElementById("location-container").scrollIntoView()
	});

	$("#accommodations-link").click(function() {
		$("#accommodations-container").show();
		$("#accommodations-open").hide();
		$("#accommodations-close").show();
		initialize();
		document.getElementById("accommodations-container").scrollIntoView()
	});

	$("#party-link").click(function() {
		$("#party-container").show();
		$("#party-open").hide();
		$("#party-close").show();
		document.getElementById("party-container").scrollIntoView()
	});

	$("#contact-link").click(function() {
		$("#contact-container").show();
		$("#contact-open").hide();
		$("#contact-close").show();
		document.getElementById("contact-container").scrollIntoView()
	});

// Hide submit button and show add another button

	$("#submit").click(function() {
		$("#submit").hide();
		$("#submitted").show();
		$("#addanother").show();
	});

	$("#addanother").click(function() {
		$("#addanother").hide();
		$("#submitted").hide();
		$("#submit").show();
	});


// function that creates maps

	var initialize = function() {

		// Locusts on Hudson location		
		var loh = new google.maps.LatLng(41.863625, -73.927455);

		// Options for LOH map
		var mapOptions = {
			center: loh,
    	zoom: 9,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		// Variable that creates LOH map in HTML
		var lohMap = new google.maps.Map(document.getElementById("loh-map-canvas"), mapOptions);

		// Variable that creates LOH marker
		var lohMarker = new google.maps.Marker({
			position: loh,
			map: lohMap,
			title: "Locust on Hudson"
		});

		// Hotel locations
		var hotels = [
			['Poughkeepsie Courtyard', 41.670521, -73.929861],
			['Residence Inn Poughkeepsie', 41.661302, -73.932591],
			['Hampton Inn Kingston', 41.970125, -73.990563],
			['Kingston Courtyard', 41.969996, -73.986378],
			['Locusts on Hudson',41.863625, -73.927455]
		];

		// Variable that creates hotel map in HTML
		var hotelMap = new google.maps.Map(document.getElementById("hotel-map-canvas"), mapOptions);

		// Loops through hotels array and adds hotel markers
		var marker, i;

		for(i = 0; i < hotels.length; i++) {
			hotelMarker = new google.maps.Marker({
				position: new google.maps.LatLng(hotels[i][1], hotels[i][2]),
				map: hotelMap,
				title: hotels[i][0]
			});
		}
	}	
});