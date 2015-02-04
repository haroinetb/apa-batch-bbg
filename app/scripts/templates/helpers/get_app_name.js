define(['handlebars'], function(Handlebars) {
  function get_app_name() {
  	return 'APA Batch Admin';
  }
  Handlebars.registerHelper('get_app_name', get_app_name);
  return get_app_name;
});
