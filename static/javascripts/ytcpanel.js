// JavaScript Document

jQuery(document).ready(function($){
	/* Begin: Show o hide cpanel */  
	$('#cpanel_btn').click(function(){
		widthC = $('#cpanel_wrapper').width()+34;
		if($('#cpanel_btn i').attr('class') == 'icon-hand-left'){
			$('#cpanel_wrapper').animate({
				'right':-widthC
			}, 200, function(){
				$('#cpanel_wrapper').show().animate({
					'right':'0px'
				});
			});
			$('#cpanel_btn i').attr('class', 'icon-hand-right');
		}else if($('#cpanel_btn i').attr('class')=='icon-hand-right'){
			$('#cpanel_wrapper').animate({
				'right':'0px'  
			}, 200, function(){
				$('#cpanel_wrapper').show().animate({
					'right':-widthC
				});
			});
			$('#cpanel_btn i').attr('class', 'icon-hand-left');
		}
	});
	/* End: Show o hide cpanel */
	
});

function onCPResetDefault(_cookie){
	for (i=0;i<_cookie.length;i++) { 
		if(getCookie(TMPL_NAME+'_'+_cookie[i])!=undefined){
			createCookie (TMPL_NAME+'_'+_cookie[i], '', -1);
		}
	}
	window.location.reload(true);
}

function onCPApply () {
	var elems = document.getElementById('cpanel_wrapper').getElementsByTagName ('*');
	var usersetting = {};
	for (i=0;i<elems.length;i++) {
		var el = elems[i]; 
	    if (el.name && (match=el.name.match(/^ytcpanel_(.*)$/))) {
	        var name = match[1];	        
	        var value = '';
	        if (el.tagName.toLowerCase() == 'input' && (el.type.toLowerCase()=='radio' || el.type.toLowerCase()=='checkbox')) {
	        	if (el.checked) value = el.value;
	        } else {
	        	value = el.value;
	        }
			if(value.trim()){
				if (usersetting[name]) {
					if (value) usersetting[name] = value + ',' + usersetting[name];
				} else {
					usersetting[name] = value;
				}
			}
	    }
	}
	
	for (var k in usersetting) {
		name = TMPL_NAME + '_' + k; //alert(name);
		value = usersetting[k];
		createCookie(name, value, 365);
	}
	
	window.location.reload(true);
}