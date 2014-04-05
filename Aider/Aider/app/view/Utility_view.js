Ext.define('Aider.view.Utility_view',{
	extend:'Ext.Container',
	xtype:'utility_view',

	config:{
		styleHtmlContent:true,
		scrollable:true,
		html:['<div id="dash_head"><b>Tap on the images below</b></div><div><table class="table1">',
			   '<tr><td><div class="child_div"><img id="atm" src="resources/images/atm.png"><br><b>ATM</div></td><td><div class="child_div"><img id="bank" src ="resources/images/bank.png"><br><b>Bank</div></td></tr>',
			   '<tr><td><div class="child_div"><img id="estore" src="resources/images/electrician.png"><br><b>Electronics Store</div></td><td><div class="child_div"><img id="poffice" src ="resources/images/post_office.png"><br><b>Post Office</div></td></tr></table></div>',].join(''),

		listeners:[
			{
				element:'element',
				event:'tap',
				fn:'blAtm',
				delegate:'#atm'
			},
			{
				element:'element',
				event:'tap',
				fn:'blBank',
				delegate:'#bank'
			},
			{
				element:'element',
				event:'tap',
				fn:'blEstore',
				delegate:'#estore'
			},
			{
				element:'element',
				event:'tap',
				fn:'blPoffice',
				delegate:'#poffice'
			},
		],
	},
	blAtm: function(){
		console.log('utility-atm');
		Aider.app.getController('Main').mapType('atm');
	},
	blBank: function(){
		console.log('utility-bank');
		Aider.app.getController('Main').mapType('bank');
	},
	blEstore: function(){
		console.log('utility-estore');
		Aider.app.getController('Main').mapType('estore');
	},
	blPoffice:function(){
		console.log('utility-pofc');
		Aider.app.getController('Main').mapType('poffice');
	}
});