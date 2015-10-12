var CreateOrder = Backbone.Model.extend({
  defaults: function() {
    return {
      orders: []
    };
  },
addOrder: function(item){
  this.set('orders', this.get('orders').concat([item]));
}


});
//export default CreateOrder;
export default new CreateOrder();
