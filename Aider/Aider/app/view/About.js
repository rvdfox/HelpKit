Ext.define('Aider.view.About',{
	extend:'Ext.Container',
	xtype:'about',
	requires:['Ext.TitleBar'],
	config:{
		title:'About',
		iconCls:'user',
		scrollable:true,
		styleHtmlContent:true,
		html:['<div class="desc"><h><b>Aider - The Application Description</b></h><br><br>Aider, is a utility app designed for the user',
				' to assist them by serving them the required and important places needed,by showing up on the map nearby ',
			 	'places for the user within the radius of 5km from the current location.<br><br>',
			 	'<b>Note:<b><br>Before using app,be sure to check if Google`s Location Service is set checked,if not goto Settings --> Locations Services --> Google`s Location Service<br><br>' ,
			 	'<br>This app is built for Kenfest app competetion, all codes used were hard-coded,Built on Snehca touch 2.3 framework and no third party tools used<br><br>',
			 	'<br><br><b>Application Support<b><br><br>',
			 	'Mail to: <a href:"mailto:ravivermakumar@yahoo.co.in">ravivermakumar@yahoo.co.in</a><br>Mobile:<a href="tel:08093984898">(+91)-8093984898</a></div>',
			 	
				].join(''),
		items:[
		{
			xtype:'titlebar',
			title:'About us'
		}]
	}
})