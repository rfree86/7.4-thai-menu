import order from 'models/createOrder';
var MenuItemView = Backbone.View.extend({
tagName: 'li',

  className: 'menu-item',

  template: JST['menu/item'],

  events:{ 'click .js_food_price': 'addToOrder',
'click .js_order_button': 'addToOrder',},


  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

addToOrder: function() {
order.addOrder(this.model);

  console.log(order);
}

});

export default MenuItemView;
