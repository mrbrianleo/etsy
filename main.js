var productListingTemplate = _.template(
  "<div class='product'>" +
    "<div class='product-wrapper'>" +
      "<div class='product-image-wrapper'>" +
        "<div class='product-image'>" +
          "<img src='<%= Images[0].url_570xN %>' alt='<%= title %>'>" +
        "</div>" +
      "</div>" +
      "<div class='product-info'>" +
        "<div class='product-title'><a href='<%= url %>'><%= title %></a></div>" +
        "<div class='product-details'>" +
          "<div class='product-seller'><a href='<%= Shop.url %>'><%= Shop.shop_name %></a></div>" +
          "<div class='product-price'>$<%= price %> <%= currency_code %></div>" +
        "</div>" +
      "</div>" +
    "</div>"+
  "</div>"
);

var getData = function(keywords, callback) {
  var params = {
    api_key: "niqoyrl7dver15xzb6mp2c7e",
    includes: "Images,Shop"
  };

  if (!callback && typeof keywords === "function") {
    callback = keywords;
    keywords = null;
  }

  if (keywords && keywords.length) {
    params.keywords = keywords;
  }

  $.ajax("https://openapi.etsy.com/v2/listings/active.js", {
    data: params,
    dataType: "jsonp",
    success: callback
  });
};

var insertProductListingTemplate = function(items) {
  items.forEach(function(item) {
    $(".product-listings").append(productListingTemplate(item));
  });
};

var handleEtsyData = function(data) {
  insertProductListingTemplate(data.results);
};

$(function() {
  $(".search-form").on("submit", function(event) {  
    event.preventDefault();
    var keywords = $(".search-field").val();
    $(".product-listings").empty();
    getData(keywords, handleEtsyData); 
    $(".keyword-results").html("<h4>&ldquo;" + keywords + "&rdquo;</h4>" + " We found " + " items!");
    
  });

  getData(handleEtsyData);

});



