Ext.define('MyApp.view.signup.Window', {
	extend: 'Ext.window.Window',
	alias: 'widget.signupwindow',
	
	requires: [
		'Ext.form.Panel'
	],
	
	title: 'SEMS Signup',
	iconCls: 'x-signup',
	
	closable: true,
    height: 250,
    width: 400,
    modal: true,
    autoShow: true,	
    layout: 'fit',
    items: {  
        xtype: 'form',
        defaults: {
	        anchor: '100%'
	    },
        bodyPadding: 15,
        items: [{
                xtype: 'textfield',
                name : 'username',
                fieldLabel: 'Username',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'password',
                fieldLabel: 'Password',
                inputType: 'password',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'confirmpassword',
                fieldLabel: 'Confirm Password',
                inputType: 'confrimpassword',
                enableKeyEvents: true,
                allowBlank: false
            }],
		buttons : [{
                    text: 'signup',
                    action: 'signupClicked',
                    disabled: true,
                    formBind: true
                }]
        }    
});
