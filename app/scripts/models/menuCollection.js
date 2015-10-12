import Menu from 'models/menu';

var MenuCollection = Backbone.Collection.extend({
  model: Menu,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/richard_menu_items?limit=100",
  comparator: 'category'
});

export default MenuCollection;
