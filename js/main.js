$(document).ready(function() {
	// THUMB DELAY --------------------->
		$(function() {
			$('.da-thumbs > li').hoverdir();
				hoverDelay	: 20;
		});

		 // -------------------- DOTS --------------------->
		function TAQ_dotnav (url) {
			window.location = url;
		}
		
		// EARTH 2015 -->
		$('#fieldworkMiki').on('click', function() {
			TAQ_dotnav("fieldwork/miki/index.html");
		});
		
		$('#travellogSacredValley').on('click', function() {
			TAQ_dotnav("travellog/sacred-valley/index.html");
		});
		
		$('#ranchChicoBasin').on('click', function() {
			TAQ_dotnav("ranch/chico-basin/index.html");
		});
		
			
		// WATER 2014 -->
		$('#familyCostaBrava').on('click', function() {
			TAQ_dotnav("familytravel/costabrava/index.html");
		});
		
		$('#photographerTahiti').on('click', function() {
			TAQ_dotnav("photographer/tahiti/index.html");
		});
		
		$('#travellogBerlin').on('click', function() {
			TAQ_dotnav("travellog/berlin/index.html");
		});
		
		$('#conserveBigSur').on('click', function() {
			TAQ_dotnav("conserve/bigsur/index.html");
		});
		
		$('#roadtripEverglades').on('click', function() {
			TAQ_dotnav("roadtrip/everglades/index.html");
		});
		
		// AIR 2014 -->
		$('#surfElSalvador').on('click', function() {
			TAQ_dotnav("surf/elsalvador/index.html");
		});
		
		$('#familyTravelNicaragua').on('click', function() {
			TAQ_dotnav("familytravel/nicaragua/index.html");
		});
		
		$('#travellogHongKong').on('click', function() {
			TAQ_dotnav("travellog/hongkong/index.html");
		});
		
		$('#workshopJaipur').on('click', function() {
			TAQ_dotnav("workshop/jaipur/index.html");
		});
		
		$('#hotspringsBridgeport').on('click', function() {
			TAQ_dotnav("hotsprings/bridgeport/index.html");
		});


		// SOLSTICE 2013 -->
		$('#fieldworkMckenna').on('click', function() {
			TAQ_dotnav("fieldwork/mckenna/index.html");
		});

		$('#beautyFtGreen').on('click', function() {
			TAQ_dotnav("beauty/ftgreen/index.html");
		});

		$('#profileWrenn').on('click', function() {
			TAQ_dotnav("profile/wrenn/index.html");
		});

		$('#travellogCabrera').on('click', function() {
			TAQ_dotnav("travellog/cabrera/index.html");
		});

		$('#forageSaltPoint').on('click', function() {
			TAQ_dotnav("forage/saltpoint/index.html");
		});


		// SUMMER 2013 -->
		$('#fieldworkTahiti').on('click', function() {
			TAQ_dotnav("fieldwork/tahiti/index.html");
		});

		$('#makerChristenson').on('click', function() {
			TAQ_dotnav("maker/chrischristenson/index.html");
		});

		$('#travellogSantorini').on('click', function() {
			TAQ_dotnav("travellog/santorini/index.html");
		});

		$('#familytravelFinland').on('click', function() {
			TAQ_dotnav("familytravel/finland/index.html");
		});

		$('#beautyBrooklyn').on('click', function() {
			TAQ_dotnav("beauty/brooklyn/index.html");
		});


		// SPRING 2013 -->
		$('#roadtripSantaBarbara').on('click', function() {
			TAQ_dotnav("roadtrip/index.html");
		});
		$('#travellogSwitzerland').on('click', function() {
			TAQ_dotnav("travellog/index.html");
		});
		$('#hotspringsCalistoga').on('click', function() {
			TAQ_dotnav("hotsprings/index.html");
		});

		// SHARE POP --------------------->
		var popupWindow = null;
		function centeredPopup(url,winName,w,h,scroll)
		{
			LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
			TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
			settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
			popupWindow = window.open(url,winName,settings)
		}

		// MAILCHIMP ---------------------->
		$('#share-menu .newsletter').click(function(event) {

			$('#newsletter-form').show();
			event.preventDefault();
			return false;
		});

		$('#newsletter-form .close').click(function(event) {

			$('#newsletter-form').hide();
			return false;
		});

		$('#newsletter-form .newsletter-submit').click(function(event){

			$('#newsletter-form form').submit();
			return false;
		});

		$('#newsletter-form form').submit(function(event){

			event.preventDefault();

			$.ajax({
 				url: $('#newsletter-form form').attr('action'),
 				type: 'POST',
 				data: {
 					email: $('#subscribe-email').val()
 				},
 				success: function(data){

				   if (data.code == 'OK') {

 	 					$('#newsletter-form span').html(data.message).css('color', 'green');
					   $('#subscribe-email').val('');
					}
					else {

 	 					$('#newsletter-form span').html(data.message).css('color', 'red');
					}
 				},
 				error: function() {
	 					$('#newsletter span').html('Sorry, an error occurred.').css('color', 'red');
 				}
 			});

			return false;
		});
});