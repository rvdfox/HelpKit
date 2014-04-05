Ext.define('Aider.view.Entertainment_view',{
	extend:'Ext.Container',
	xtype:'entertainment_view',

	config:{
		styleHtmlContent:true,
		scrollable:true,
		html:['<div id="dash_head"><b>Tap on the images below</b></div><div><table class="table1">',
			   '<tr><td><div class="child_div"><img id="cfe" src="resources/images/cafe.png"><br><b>Cafe</div></td><td><div class="child_div"><img id="mve" src ="resources/images/movie.png"><br><b>Movie</div></td></tr>',
			   '<tr><td><div class="child_div"><img id="prk" src="resources/images/park.png"><br><b>Park</div></td><td><div class="child_div"><img id="sml" src ="resources/images/shopping_mall.png"><br><b>Shopping Mall</div></td></tr></table></div>',].join(''),

		listeners:[
			{
				element:'element',
				event:'tap',
				fn:'blcfe',
				delegate:'#cfe'
			},
			{
				element:'element',
				event:'tap',
				fn:'blmve',
				delegate:'#mve'
			},
			{
				element:'element',
				event:'tap',
				fn:'blprk',
				delegate:'#prk'
			},
			{
				element:'element',
				event:'tap',
				fn:'blsml',
				delegate:'#sml'
			},
		],
	},
	blcfe: function(){
		console.log('utility-Cafe');
		Aider.app.getController('Main').mapType('cafe');
	},
	blmve: function(){
		console.log('utility-movie');
		Aider.app.getController('Main').mapType('movie');
	},
	blprk: function(){
		console.log('utility-Park');
		Aider.app.getController('Main').mapType('park');
	},
	blsml:function(){
		console.log('utility-Shopping_mall');
		Aider.app.getController('Main').mapType('shopping_mall');
	}
})