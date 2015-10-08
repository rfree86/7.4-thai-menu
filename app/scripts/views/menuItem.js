var MenuItemView = Backbone.View.extend({
  className: 'menuItem',

  template: JST['products/item'],

  initialize: function(){
    // this.listenTo(appRouter.comparison, 'change:products', this.renderClasses);
  },

  events: {
    // 'change .js-is-compared': 'toggleCompared'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.renderClasses();
    return this;
  },


});

export default MenuItemView;
