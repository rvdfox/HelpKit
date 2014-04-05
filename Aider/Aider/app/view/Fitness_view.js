Ext.define('Aider.view.Fitness_view',{
	extend:'Ext.Container',
	xtype:'fitness_view',

	config:{styleHtmlContent:true,
		scrollable:true,
		html:['<div id="dash_head"><b>Tap on the images below</b></div><div><table class="table1">',
			   '<tr><td><div class="child_div"><img id="bts" src="resources/images/beauty_salon.png"><br><b>Beauty Salon</div></td><td><div class="child_div"><img id="gym" src ="resources/images/gym.png"><br><b>Gym</div></td></tr>',
			   '<tr><td><div class="child_div"><img id="hrc" src="resources/images/hair_care.png"><br><b>Hair Care</div></td><td><div class="child_div"><img id="hlt" src ="resources/images/health.png"><br><b>Health</div></td></tr></table></div>',].join(''),

		listeners:[
			{
				element:'element',
				event:'tap',
				fn:'blbts',
				delegate:'#bts'
			},
			{
				element:'element',
				event:'tap',
				fn:'blgym',
				delegate:'#gym'
			},
			{
				element:'element',
				event:'tap',
				fn:'blhrc',
				delegate:'#hrc'
			},
			{
				element:'element',
				event:'tap',
				fn:'blhlt',
				delegate:'#hlt'
			},
		],
	},
	blbts: function(){
		console.log('utility-Beauty_care');
		Aider.app.getController('Main').mapType('beauty_care');
	},
	blgym: function(){
		console.log('utility-Gym');
		Aider.app.getController('Main').mapType('gym');
	},
	blhrc: function(){
		console.log('utility-Hair_care');
		Aider.app.getController('Main').mapType('hair_care');
	},
	blhlt:function(){
		console.log('utility-Health');
		Aider.app.getController('Main').mapType('health');}

})