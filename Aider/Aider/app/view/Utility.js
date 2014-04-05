Ext.define('Aider.view.Utility',{
	extend:'Ext.navigation.View',
	xtype:'utility',
	requires:['Ext.TitleBar'],


	config:{
		items:[{
			xtype:'utility_view',
			title:'Utility Spotter'
		}]
	}
});