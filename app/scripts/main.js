import MenuCollection from 'models/menuCollection';
import MenuCollectionView from 'views/collection-view';
import CreateOrderView from 'views/createOrder';
//import CreateOrder from 'models/CreateOrder';
$(document).ready(function(){

$('#container').prepend(JST.application());

var meals = new MenuCollection();
//var order = new CreateOrder();
var menuItems = new MenuCollectionView({collection: meals, });
$('#post-container').html(menuItems.render().el);
meals.fetch();

 var orderItems = new CreateOrderView();
 $('#order-container').html(orderItems.render().el);


});

////initialize in orderview
