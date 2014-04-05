var emergency_num = window.localStorage.getItem("enum");
Ext.define('Aider.view.Emergency',{
	extend:'Ext.Container',
	xtype:'emergency',
	requires:['Ext.TitleBar'],

	config:{

		layout:{
			type:'vbox'
		},

		title:'Emergency assistace',
		items:[{
			xtype:'titlebar',
			title:'Emergency Assistace'
		},
		{
			xtype:'container',
			id:'econtainer',
			flex:3,
			html:'<div class="call"><p id="msg">Tap the emergency button to make emergency call</p><br><a href="tel:911"><img id="exclaim" src="resources/images/exclaim.png"></a></div>',

			listeners:{
				tap:{
					fn: function(event ,el){
						console.log('call tapped');
						
					},
					element:'element',
					delegate:'#exclaim'
				}

			}

		},
		{
			xtype:'formpanel',
			id:'formpanel',
			flex:1,
			items:[{
				xtype:'textfield',
				name:'number',
				id:'number',
				label:'E-Number'
			},
			{
				xtype:'button',
				ui:'confirm',
				text:'Save',
				scope:'this',
				handler: function(){
					var num = Ext.getCmp('number').getValue();
					window.localStorage.setItem("enum",num);
					Ext.Msg.alert('saved','You set '+num+' as emergency Number');

				}

			}]
		}
		],

		listeners:{
			initialize: function(){
				var get_num = window.localStorage.getItem("enum");
				emergency_num = get_num;
				if(get_num != null)
				{
					console.log(get_num);
					Ext.getCmp('formpanel').setValues({
						number:'Number already set'
					});
				}
				else{
					Ext.getCmp('formpanel').setValues({
						number:'Click to Add number'
					});
				}
			}
		}

	},
	call: function(){

		console.log('button tapped');
	}
})