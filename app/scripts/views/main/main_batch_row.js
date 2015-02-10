/*global define*/

define([
  'namespace',
  'jquery',
  'marionette',
  'htaccess_auth',
  'hbs!templates/main_batch_rows',
], function(nameSpace, $, Marionette, Auth, TPL) {
  'use strict';

  var View = Marionette.ItemView.extend({
    template: TPL,
    tagName: 'div',
    className: 'apa_batch_row',
    ui: {
      'save': 'button.save',
      'delete': 'button.delete'
    },
    events: {
      'click @ui.save':'save',
      'click @ui.delete':'delete'
    },
    modelEvents: {
      "change": "render"
    },
    save: function(e){
      e.preventDefault();
      self = this;
      self.model.save({name: self.$el.find('.batch_row_name').val(), acts: self.$el.find('.batch_row_acts').val()},{beforeSend: Auth});
    },

    delete: function(){
      if(this.model.get('id')!=undefined){

        var r = confirm("Are you sure you want to delete this?");
        if (r == true) {
          this.model.destroy();       
        }
        
      }else this.model.destroy();

    },

    initialize: function() {
      //this.listenTo(this.model, 'change', this.render);
    },
  });

  return View;
});
