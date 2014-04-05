Ext.define('Aider.view.Primary_view',{
	extend:'Ext.Container',
	xtype:'primary_view',

config:{
		styleHtmlContent:true,
		scrollable:true,
		html:['<div id="dash_head"><b>Tap on the images below</b></div><div><table class="table1">',
			   '<tr><td><div class="child_div"><img id="hsp" src="resources/images/hospital.png"><br><b>Hospital</div></td><td><div class="child_div"><img id="elct" src ="resources/images/electricia_n.png"><br><b>Electrician</div></td></tr>',
			   '<tr><td><div class="child_div"><img id="fst" src="resources/images/fire_station.png"><br><b>Fire Station</div></td><td><div class="child_div"><img id="plc" src ="resources/images/police.png"><br><b>Police</div></td></tr></table></div>',].join(''),

		listeners:[
			{
				element:'element',
				event:'tap',
				fn:'blhsp',
				delegate:'#hsp'
			},
			{
				element:'element',
				event:'tap',
				fn:'blelct',
				delegate:'#elct'
			},
			{
				element:'element',
				event:'tap',
				fn:'blfst',
				delegate:'#fst'
			},
			{
				element:'element',
				event:'tap',
				fn:'blplc',
				delegate:'#plc'
			},
		],
	},
	blhsp: function(){
		console.log('utility-Hospital');
		Aider.app.getController('Main').mapType('hospital');
	},
	blelct: function(){
		console.log('utility-electrician');
		Aider.app.getController('Main').mapType('electrician');
	},
	blfst: function(){
		console.log('utility-Fire_station');
		Aider.app.getController('Main').mapType('fire_station');
	},
	blplc:function(){
		console.log('utility-Police');
		Aider.app.getController('Main').mapType('police');
	}
});