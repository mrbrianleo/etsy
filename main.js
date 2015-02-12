var productListingTemplate = _.template(
  "<div class='product'>" +
    "<div class='product-wrapper'>" +
      "<div class='product-image-wrapper'>" +
        "<div class='product-image'>" +
          "<img src='<%= Images[0].url_fullxfull %>'>" +
        "</div>" +
      "</div>" +
      "<div class='product-info'>" +
        "<div class='product-title'><a href='<%= url %>'><%= title %></a></div>" +
        "<div class='product-details'>" +
          "<div class='product-seller'><a href='<% Shop.url %>'><%= Shop.shop_name %></a></div>" +
          "<div class='product-price'>$<%= price %> <%= currency_code %></div>" +
        "</div>" +
      "</div>" +
    "</div>"+
  "</div>"
);

var insertProductListingTemplate = function() {

  items.forEach(function(item) {
    $(".product-listing").append(myTemplate(item));
  });

};