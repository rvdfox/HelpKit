var type_search;
Ext.define('Aider.controller.Main',{
	extend:'Ext.app.Controller',
	requires:['Ext.util.GeoLocation'],

	config:{
		refs:{
			locmap:'locmap',
			utility:'utility',
			entertainment:'entertainment',
			fitness:'fitness',
			primary:'primary'

		},
		control:{
			locmap:{
				maprender:'openMap',
			}
		}
	},

	mapType: function(isType){
		console.log('map tap recieved');
		var me = this;
		type_search = isType;
		switch(isType){
			case 'atm':this.getUtility().push({
							xtype:'locmap',
							title:'ATMs Nearby',
						});
						break;
			case 'bank':this.getUtility().push({
							xtype:'locmap',
							title:'Banks Nearby',
						});
						break;
			case 'estore':this.getUtility().push({
							xtype:'locmap',
							title:'Electronics stores Nearby',
						});
						break;
			case 'poffice':this.getUtility().push({
							xtype:'locmap',
							title:'Post Offices Nearby',
						});
						break;
			case 'hospital':this.getPrimary().push({
							xtype:'locmap',
							title:'Hospitals Nearby',
						});
						break;
			case 'electrician':this.getPrimary().push({
							xtype:'locmap',
							title:'Electricians Nearby',
						});
						break;
			case 'fire_station':this.getPrimary().push({
							xtype:'locmap',
							title:'Fire Stations Nearby',
						});
						break;
			case 'police':this.getPrimary().push({
							xtype:'locmap',
							title:'Police Stations Nearby',
						});
						break;
			case 'beauty_care':this.getFitness().push({
							xtype:'locmap',
							title:'Beauty salons Nearby',
						});
						break;
			case 'gym':this.getFitness().push({
							xtype:'locmap',
							title:'Gyms Nearby',
						});
						break;
			case 'hair_care':this.getFitness().push({
							xtype:'locmap',
							title:'Hair salons Nearby',
						});
						break;
			case 'health':this.getFitness().push({
							xtype:'locmap',
							title:'Health centers Nearby',
						});
						break;
			case 'cafe':this.getEntertainment().push({
							xtype:'locmap',
							title:'Cafe`s Nearby',
						});
						break;
			case 'movie':this.getEntertainment().push({
							xtype:'locmap',
							title:'Movie Theatres Nearby',
						});
						break;
			case 'park':this.getEntertainment().push({
							xtype:'locmap',
							title:'Park Nearby',
						});
						break;
			case 'shopping_mall':this.getEntertainment().push({
							xtype:'locmap',
							title:'Shopping Malls Nearby',
						});
						break;

			
		}
	},

	openMap:function(){
		Ext.Viewport.mask({xtype:'loadmask',message:'Please wait'});
		console.log('map rendering started');
		var map;
		var mapel;
		var service;
		var infowindow = new google.maps.InfoWindow({maxWidth:150});;
		var cLng;
		var cLat;

		

		var geo = Ext.create('Ext.util.Geolocation', {
				 autoUpdate: false,
				 listeners: {
				  locationupdate: function(geo) {
				    var currentLat = geo.getLatitude();
				    var currentLng =  geo.getLongitude();
				     cLng = parseFloat(currentLng.toFixed(7));
				     cLat = parseFloat(currentLat.toFixed(7));
				     
				     console.log(currentLat);
				     console.log(currentLng);
				     initialize();
				  },
				  locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
				     if(bTimeout)
				       Ext.Msg.alert('Timeout occurred',"Could not get current position");
				     else 
				       alert('Error occurred.');
				     }
				  }
				 
				}
				);
				geo.updateLocation();
		

	   function initialize(){
	   	console.log(cLat);
		console.log(cLng);

		console.log('initialized map');
		mapel =  Ext.getCmp('loc-map');
		
		var mapcenter = new google.maps.LatLng(cLat,cLng);
		mapel.setMapOptions({

							center: mapcenter,
                  		 	mapTypeId: google.maps.MapTypeId.ROADMAP,
                   		 	zoom: 14
		})
		var request;
	 	
	 	switch(type_search)
		{
			case 'atm':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['atm']
									  };
							break;
			case 'bank':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['bank']
									  };
							break;
			case 'estore':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['electronics_store']
									  };
							break;
			case 'poffice':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['post_office']
									  };
						 	break;
		    case 'hospital':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['hospital']
									  };
							break;
			case 'electrician':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['electrician']
									  };
							break;
		    case 'fire_station':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['fire_station']
									  };
							break;
			case 'police':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['police']
									  };
							break;
			case 'beauty_care':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['beauty_salon']
									  };
							break;
			case 'gym':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['gym']
									  };
							break;
			case 'hair_care':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['hair_care']
									  };
							break;
			case 'health':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['health']
									  };
							break;
			case 'cafe':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['cafe']
									  };
							break;
			case 'movie':request = {
									    location: mapcenter,
									    radius: '15000',
									    types: ['movie_theater']
									  };
							break;
			case 'park':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['park']
									  };
							break;
			case 'shopping_mall':request = {
									    location: mapcenter,
									    radius: '5000',
									    types: ['shopping_mall']
									  };
							break;
		}
		

		  service = new google.maps.places.PlacesService(mapel.getMap());
		  service.nearbySearch(request, callback);
	}
	function callback(results, status) {
		var total_marker = 0 ;
			console.log('map init and callback');
		  if (status == google.maps.places.PlacesServiceStatus.OK) {
		    for (var i = 0; i < results.length; i++) {
		      var place = results[i];
		      createMarker(results[i]);
		      total_marker++;
				    }
			  }
			  Ext.Msg.alert('Search Result','There are in total '+total_marker+' '+type_search+' near you!!');
			  Ext.Viewport.unmask(false);
			}
		function createMarker(place) {
				console.log('marker creation');
				  var placeLoc = place.geometry.location;
				  var marker = new google.maps.Marker({
				    map: mapel.getMap(),
				    position: place.geometry.location
				  });
			Ext.Viewport.unmask(false);
		  google.maps.event.addListener(marker, 'click', function() {
						    infowindow.setContent(place.name);
						    infowindow.open(mapel.getMap(), this);
 				 });
		}
}

})