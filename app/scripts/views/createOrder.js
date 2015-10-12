import MenuItemView from '/views/menuItem';
import order from 'models/createOrder';
 var CreateOrderView = Backbone.View.extend({

tagName: 'ul',
className: "js_order_list",
template: JST['order/collection'],

initialize: function() {

  this.listenTo(order, 'change', this.render);
},

render: function(){

  this.$el.html(this.template(this.present()));
  return this;

},

present: function(){
  return {
    orders: order.get('orders').map((p)=>{
      return p.toJSON();
    }),
    subtotal: order.get('orders').reduce(function(total, current) {
      return total + Number(current.get('price'));
    }, 0) / 1000 + ""
  };
}

 });
export default CreateOrderView;
