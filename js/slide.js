$(window).load(function(){
  $("#contents #main #items .product-info .product-photo .gallery img").click(function(){
    var img_src = $(this).attr("src");
    $("#contents #main #items .product-info .product-photo .main").attr("src", img_src);
  });
});