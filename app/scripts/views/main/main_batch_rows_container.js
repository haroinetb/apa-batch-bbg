/*global define*/

define([
  'jquery',
  'marionette',
  'views/main/main_batch_row',
], function($, Marionette, ChildView) {
  'use strict';

  var View = Marionette.CollectionView.extend({
    childView: ChildView,
    tagName: 'div',
    className: 'batch_rows_container',
  });

  return View;
});
