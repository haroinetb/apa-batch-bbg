/*global define*/

define([], function() {
  'use strict';

  var settings = [];

  if(settings['url'] == undefined){

	  if(document.domain=='localhost'){
			var domain = prompt("inetb or canada?", "inetb");
			if (domain != null) {
				switch(domain){
					case 'canada':
						settings['url'] = 'reports.securejoinsite.com';
						break;
					default:
						settings['url'] = 'reports.inetb.com';
						break;
				}
			}else settings['url'] = 'reports.inetb.com';

	  }else settings['url'] = document.domain;

  }


  settings['urlRoot'] = 'http://'+settings['url']+'/reports/apa-batch/api/';

  return settings;
});
