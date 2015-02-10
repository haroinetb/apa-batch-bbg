/*global define*/

define([
    'namespace',
  'jquery',
  'marionette',
'models/apaBatch',
  'hbs!templates/main',
], function(nameSpace, $, Marionette, BatchModel, TPL) {
  'use strict';

  var MainView = Marionette.LayoutView.extend({
    template: TPL,
    regions: {
      batchRows: '#batch_rows',
    },
    tagName: 'div',

    id: '',

    className: '',

    events: {
        'click button#create_new' : 'createNew'
    },

    createNew: function(){
        nameSpace.collections.apaBatchCollection.add(new BatchModel());
    },

    initialize: function() {
      //this.listenTo(this.collection, 'change', this.render);
    },
  });

  return MainView;
});
