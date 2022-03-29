$(document).ready(function(){
  	$(".menu_icon").click(function () {
        $("#mobile_menu").addClass('openmenu');
      	$('body').addClass('mobile_menu_mob');
      });
    $(".close_menu").click(function () {
      $("#mobile_menu").removeClass('openmenu');
      $('body').removeClass('mobile_menu_mob');
    });

	$('.brand_inner_row').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll:1,
      arrows:false,
      autoplay:true,
      centerMode: true,
  	  centerPadding: '200px',
       responsive: [
         {
            breakpoint: 1440,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerPadding: '150px'
            }
         }, 
         {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerPadding: '130px'
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerPadding: '50px'
            }
          }
  	  ]
    });
  
    $('.img_slider_so').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll:1,
      arrows:false,
      dots:true,
      autoplay: true,
  	  autoplaySpeed: 3000
    });
  
  	$('.gallery_slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll:1,
      arrows:true,
      centerMode: true,
  	  centerPadding: '205px',
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '40px'
            }
          }
  	  ]
    });
  
  	$('.top_rated_row').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll:1,
      arrows:true,
      autoplay: false,
      dots:true,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              centerMode: true,
      		  centerPadding: '30px',
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
      		  centerPadding: '30px',
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
  	  ]
    });
  
  	$('.top_rated_row_PDP').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll:1,
      arrows:true,
      autoplay: false,
      dots:true,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1
            }
          }
  	  ]
    });
  
  	$('.product_row').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll:1,
      arrows:true,
      dots:true,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: true,
      		  centerPadding: '25px',
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
      		  centerPadding: '25px',
            }
          }
  	  ]
    });
  
    $('.main_slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll:1,
    arrows:true,
    asNavFor: '.nav_slider'
  });

    $('.nav_slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.main_slider',
    focusOnSelect: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      }
    ]
  });

    $('.main_row_badges').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll:1,
      arrows:false,
      dots:false,
      centerMode: true,
      centerPadding: '25px',
      autoplay: true,
  	  autoplaySpeed: 3000,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerPadding: '60px',
              dots:true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '60px',
              dots:true
            }
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '20px',
              dots:true
            }
          }
  	  ]
    });
  
  	$('.prod_div_inner').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll:1,
      arrows:true,
      dots:false
    });
  
   //product Grid Modal
    $('.btn_modal').on("click", function(){
         var modalSr = $(this).attr('popup-open');
         var parentsSection = $(this).parents('.product_sec');
         $(parentsSection).find('.product-modal-'+modalSr).fadeIn(300);
    });
    $('.modal_close').on("click", function(){
        $( this).parents('.modal_main_wrapper').fadeOut(300);
    });  
  
  
  	//Faq Section
  	$(".set > .main_a").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".content").removeClass("active_content");
        $(this)
          .siblings(".content")
          .slideUp(200);
      } else {
        $(".set > .main_a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this).siblings(".content").addClass("active_content");
        $(this)
          .siblings(".content")
          .slideDown(200);
      }
    });
  
  	//shipping Content PDP
  	$(".shipping_acc").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".answer_wrapper").slideUp(200);
      }else{
        $(this).addClass("active");
      	$(this).siblings(".answer_wrapper").slideDown(200);
      }
    });
	
  
  	//price change on qty
    $('button[name="plus"], button[name="minus"]').click(function(){
      	var mainParent = $(this).parents('.product_main_content');
		var Qtyparent = $(this).parents('.quantity');
      	var plusQty = $(Qtyparent).find('.quantity__input').val();
      	var priceProd = $(mainParent).find('.price__regular').find('.main_prod_price').text();
      	var CPriceProd = $(mainParent).find('.price__sale').find('.compare_price').text();
      	var newPrice = priceProd.replace("$","");
      	var CPnewPrice = CPriceProd.replace("$","");
      	var Sumprice = newPrice * plusQty;
      	var CPSumprice = CPnewPrice * plusQty
      	var FinalPrice = Sumprice.toFixed(2);
      	var CPFinalPrice = CPSumprice.toFixed(2);
      	var SaveTotal = CPFinalPrice - FinalPrice;
      	var FinalSaveTotal = SaveTotal.toFixed(2);
      	
        $(mainParent).find('.price__regular').find('.price-item--regular').text('$'+FinalPrice);
      	$(mainParent).find('.price__sale').find('.price-item--regular').text('$'+CPFinalPrice);
      	$(mainParent).find('.total_saving').text('$'+FinalSaveTotal);
    });
  
  
    //PDP variant Name Change (Select)
    $('.select_box_wrapper').each(function(){
      var reloadValue = '';
      reloadValue = $(this).find('.select_dropdown :selected');
      $(this).find('.title_selected').text(reloadValue.val());
    });
  
   //PDP variant Name Change (radio)
  	$('.radio_box_wrapper').each(function(){
      var reloadValue = '';
      reloadValue = $(this).find('input[class="product_variant_option"]:checked');
      $(this).find('.title_selected').text(reloadValue.val());
      
      let sliderValue = reloadValue.val(); 
      
    });
  
  //PDP variant Name Change (MODAL)
  	$('.radio_box_wrapper_modal').each(function(){
      var reloadValue = '';
      reloadValue = $(this).find('input[type="radio"]:checked');
      $(this).find('.title_selected').text(reloadValue.val());
    });
  
    $('.label_title').click(function(){
		$(this).next().slideToggle();
      	$(this).toggleClass("active_drop");
    });
   
//     //PDP variant Name Change (Select)
//   	var reloadValue = $('.select_dropdown :selected').val();
//     var parentSelectReload = $('.select_dropdown').parents('.select_box_wrapper');
//     $(parentSelectReload).find('.title_selected').text(reloadValue);
  
//   	//PDP variant Name Change (radio)
//   	var boxes = $('input[class="product_variant_option"]:checked');
//   	console.log(boxes);
//   	var boxval = boxes.val();
//   	var parentReload = $(boxes).parents('.radio_box_wrapper');
//   	$(parentReload).find('.title_selected').text(boxval);
  
  
  	//PDP Extra Products Color
  	var colorH_oneSelected = $('input[name="hoodie-2"]:checked');
  	var colorH_oneVal = colorH_oneSelected.val();
  	var colorH_oneVimg = $(colorH_oneSelected).attr('data-vimg');
  	var colorH_oneparentReload = $(colorH_oneSelected).parents('.color_box');
  	$(colorH_oneparentReload).find('.img_vimg').attr('src', colorH_oneVimg);
  	$(colorH_oneparentReload).find('.selected_label').text(colorH_oneVal);
  	$('#hoodie-2-form').val(colorH_oneVal);
  
  	var colorH_threeSelected = $('input[name="hoodie-3"]:checked');
  	var colorH_threeVal = colorH_threeSelected.val();
  	var colorH_threeVimg = $(colorH_threeSelected).attr('data-vimg');
  	var colorH_threeparentReload = $(colorH_threeSelected).parents('.color_box');
  	$(colorH_threeparentReload).find('.img_vimg').attr('src', colorH_threeVimg);
  	$(colorH_threeparentReload).find('.selected_label').text(colorH_threeVal);
  	$('#hoodie-3-form').val(colorH_threeVal);
  
    if ($('#template--15607802167540__main_product-2-0').is(':checked')) {
      $('.select_color_wrapper .select_box').hide();
      var QtyaddOn = $('#template--15607802167540__main_product-2-0').attr('data-qty');
      var ParentsMain = $('#template--15607802167540__main_product-2-0').parents('.product__info-wrapper');
      var Rarents = $('#template--15607802167540__main_product-2-0').parents('.product__info-wrapper').find('.price');
      var RHOMPrice  = $('#main_1').find('.v_price').text();
      var RHOCPrice  = $('#h1_compare').text();
      var RHOTPrice  = $('#h1_total').text();
      $(ParentsMain).find('#Quantity-main-pdp').val(QtyaddOn);
      $(Rarents).find('.main_price').text(RHOMPrice);
      $(Rarents).find('.main_compare').text(RHOCPrice);
      $(Rarents).find('.main_total').text(RHOTPrice);
    }else if ($('#template--15607802167540__main_product-2-1').is(':checked')){
      $('.select_color_wrapper .select_box').hide();
      $('.select_color_wrapper .select_box:first-child').show();
      var QtyaddOn = $('#template--15607802167540__main_product-2-1').attr('data-qty');
      var ParentsMain = $('#template--15607802167540__main_product-2-1').parents('.product__info-wrapper');
      var Rarents = $('#template--15607802167540__main_product-2-1').parents('.product__info-wrapper').find('.price');
      var RHOMPrice  = $('#main_2').find('.v_price').text();
      var RHOCPrice  = $('#h2_compare').text();
      var RHOTPrice  = $('#h2_total').text();
      $(Rarents).find('.main_price').text(RHOMPrice);
      $(Rarents).find('.main_compare').text(RHOCPrice);
      $(Rarents).find('.main_total').text(RHOTPrice);
      $(ParentsMain).find('#Quantity-main-pdp').val(QtyaddOn);
    }else{
      $('.select_color_wrapper .select_box').show();
      var QtyaddOn = $('#template--15607802167540__main_product-2-2').attr('data-qty');
      var ParentsMain = $('#template--15607802167540__main_product-2-2').parents('.product__info-wrapper');
      var Rarents = $('#template--15607802167540__main_product-2-2').parents('.product__info-wrapper').find('.price');
      var RHOMPrice  = $('#main_3').find('.v_price').text();
      var RHOCPrice  = $('#h3_compare').text();
      var RHOTPrice  = $('#h3_total').text();
      $(Rarents).find('.main_price').text(RHOMPrice);
      $(Rarents).find('.main_compare').text(RHOCPrice);
      $(Rarents).find('.main_total').text(RHOTPrice);
      $(ParentsMain).find('#Quantity-main-pdp').val(QtyaddOn);
    }
  
   //header scroll sticky
  	$(window).scroll(function(){
      var sticky = $('.TBH_header'),
          scroll = $(window).scrollTop();

      if (scroll >= 29) sticky.addClass('fixed_header');
      else sticky.removeClass('fixed_header');
    });
  
   //price and off labels
  	//Hoodie 1
    var mainParentbox = $('#addon_box'); 
  	var hoodie1Price = $('#main_1').attr('data-price');
    var hoodie1Box = $(mainParentbox).find('.selector-1-hoodie');
  		$(hoodie1Box).find('.span_p').text(hoodie1Price);
  		$(hoodie1Box).find('.dis_label').hide();
  		$(hoodie3Box).find('.label_top').hide();
    //Hoodie 2
  	var hoodie2Box = $(mainParentbox).find('.selector-2-hoodie');
  	var hoodie2Price = $('#main_2').attr('data-price');
    var hoodie2Label = $('#main_2 .popular_label').text();
  	var hoodie2Discount = $('#main_2 .discount_label').text();
  		$(hoodie2Box).find('.span_p').text(hoodie2Price);
  		$(hoodie2Box).find('.dis_label').text(hoodie2Discount);
  		$(hoodie2Box).find('.label_top').text(hoodie2Label);
    //Hoodie 3
  	var hoodie3Box = $(mainParentbox).find('.selector-3-hoodie');
  	var hoodie3Price = $('#main_3').attr('data-price');
    var hoodie3Label = $('#main_3 .popular_label').text();
  	var hoodie3Discount = $('#main_3 .discount_label').text();
  		$(hoodie3Box).find('.span_p').text(hoodie3Price);
  		$(hoodie3Box).find('.dis_label').text(hoodie3Discount);
  		$(hoodie3Box).find('.label_top').text(hoodie3Label);
  
  
  
    
});



//gift Wrap Cart Drawer
$('#gift_check').change(function(){
  if ($(this).is(':checked')) {
    $('.btn_gift').click();
  }else{
    let lineValue = $('#gift-wrap_remove').find('.remove_prod a').attr('href');
    //console.log(lineValue);
    $('#remove_gift_dot').attr('href', lineValue);
    setTimeout(function() {
      $('#remove_gift_dot')[0].click();
    }, 500);
  }
});


$('.select_dropdown').change(function () {
  var selectedOption = $(this).find(':selected');
  var optionValue = $(selectedOption).val();
  var parentSelect = $(this).parents('.select_box_wrapper');
  $(parentSelect).find('.title_selected').text(optionValue);
});


//radio name
$('input:radio[class="product_variant_option"]').change(function() {
  var selectName = $(this).val();
  var parents = $(this).parents('.radio_box_wrapper');
  $(parents).find('.title_selected').text(selectName);
});


// main PDP color Options
  $('input:radio[name="Add On"]').change(function() {
    var parents = $(this).parents('.product__info-wrapper').find('.price');
    var valueH_twoColor = $('input[name="hoodie-2"]:checked').val();
    var valueH_threeColor = $('input[name="hoodie-3"]:checked').val();
    var QtyaddOn = $(this).attr('data-qty');
    var ParentsMain = $(this).parents('.product__info-wrapper');    
    
    var HOMPrice  = $('#main_1').find('.v_price').text();
    var HTMPrice  = $('#main_2').find('.v_price').text();
    var HTMhPrice  = $('#main_3').find('.v_price').text();
    var HOCPrice  = $('#h1_compare').text();
    var HTCPrice  = $('#h2_compare').text();
    var HTChPrice  = $('#h3_compare').text();
    var HOTPrice  = $('#h1_total').text();
    var HTTPrice  = $('#h2_total').text();
    var HTThPrice  = $('#h3_total').text();
    if ($('#template--15607802167540__main_product-2-0').is(':checked')) {
      var mainParent = $(this).parents('.product__info-wrapper');
//       var btnText = $(mainParent).find('.product-form__submit span');
//       $(btnText).text('Proceed to checkout');
      $('.select_color_wrapper .select_box').hide();
      $(ParentsMain).find('#Quantity-main-pdp').val(QtyaddOn);
       $('#hoodie-2-form').val('');
       $('#hoodie-3-form').val('');
      $(parents).find('.main_price').text(HOMPrice);
      	$(parents).find('.main_compare').text(HOCPrice);
      $(parents).find('.main_total').text(HOTPrice);
//       console.log(HOMPrice);
       
    }else if ($('#template--15607802167540__main_product-2-1').is(':checked')){
      $('.select_color_wrapper .select_box').hide();
      $('.select_color_wrapper .select_box:first-child').show();
      $(ParentsMain).find('#Quantity-main-pdp').val(QtyaddOn);
      $('#hoodie-2-form').val(valueH_twoColor);
      $('#hoodie-3-form').val('');
       $(parents).find('.main_price').text(HTMPrice);
      	$(parents).find('.main_compare').text(HTCPrice);
      $(parents).find('.main_total').text(HTTPrice);
    }else{
      $('.select_color_wrapper .select_box').show();
      $(ParentsMain).find('#Quantity-main-pdp').val(QtyaddOn);
      $('#hoodie-3-form').val(valueH_threeColor);
      $(parents).find('.main_price').text(HTMhPrice);
      $(parents).find('.main_compare').text(HTChPrice);
      $(parents).find('.main_total').text(HTThPrice);
     
    }
  });

$('input:radio[name="hoodie-2"]').change(function(){
    var nameLabel = $(this).val();
    var imgVimg = $(this).attr('data-vimg');
    var colorBox = $(this).parents('.color_box');
    var mainParent = $(this).parents('.product__info-wrapper');
//   	var btnText = $(mainParent).find('.product-form__submit span');
  
  	$(colorBox).find('.selected_label').text(nameLabel);
  	$(colorBox).find('.img_vimg').attr('src', imgVimg);
    $(mainParent).find('#hoodie-2-form').val(nameLabel);
//   	$(btnText).text('Add To Cart');
  	
});
$('input:radio[name="hoodie-3"]').change(function(){
    var nameLabel = $(this).val();
    var imgVimg = $(this).attr('data-vimg');
    var colorBox = $(this).parents('.color_box');
    var mainParent = $(this).parents('.product__info-wrapper');
//   	var btnText = $(mainParent).find('.product-form__submit span');
  
  	$(colorBox).find('.selected_label').text(nameLabel);
  	$(colorBox).find('.img_vimg').attr('src', imgVimg);
    $(mainParent).find('#hoodie-3-form').val(nameLabel);
//   	$(btnText).text('Add To Cart');
});


//QuickView Modal
$(document).on("change", "input:radio", function () {
  	var mainOption = '';
  	var mainModal = $(this).parents('.main_content').attr('data-product');
  	var option1 = $('#modal-'+mainModal+' input:radio[class="quick_radio1"]:checked').val();
  	var mainOption = option1;
    var option2 = $('#modal-'+mainModal+' input:radio[class="quick_radio2"]:checked').val();
    if (option2){
       mainOption +=' / ' + option2;
    }
  	$('.dropdown_wrapper').slideUp();
  	$('.select_box .label_title').removeClass('active_drop');
  	$('.radio_box_wrapper_modal').each(function(){
      var reloadValue = '';
      reloadValue = $(this).find('input[type="radio"]:checked');
      $(this).find('.title_selected').text(reloadValue.val());
    });
    var SelectBox = $(this).parents('form').find('.product-single__variants');
  	$(SelectBox).find('option[data-label="'+ mainOption +'"]').prop('selected', 'selected');
});

//product form
$('.product_form').on('submit', function(e){
  var btnForm = $(this).find('button[type="submit"]');
  var form = $(this).serialize();
  fetch('/cart/add.js', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: form
  })
  .then(function(response) {
    
    $(btnForm).addClass('loading_wrapper');
    setTimeout(function() {
        $(btnForm).removeClass('loading_wrapper');
      	$('.modal_main_wrapper').fadeOut(300);
    }, 1500);
    setTimeout(function() {
      $("body").addClass("js-my-cart-open");
    }, 2000);
    
  })
});

//cart drawer Product Forms
$('.cart_drawer .product_form').on('submit', function(e){
  var btnForm = $(this).find('button[type="submit"]');
  var form = $(this).serialize();
  fetch('/cart/add.js', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: form
  })
  .then(function(response) {
    $(btnForm).addClass('loading_wrapper');
    setTimeout(function() {
        $(btnForm).removeClass('loading_wrapper');
    }, 1500);
  })
});

// $('.product__info-wrapper input[name="Color"], .product__info-wrapper input[name="Style"] ').click(function(){
//     var slide = $(this).val();
  	
//   console.log(slide);
//     $(".slide_nav_main[data-thumbnail-color='"+ slide +"']").click();
// });

// $('.main_slider').on("afterChange", function (){
// //   console.log('chirag')
//   if ($(this).find('.slick-current')) {
//     var slideValue = $(this).find('.slick-current').attr('data_color');
// //     console.log(slideValue);
//     $('.product__info-wrapper input[value="' + slideValue + '"]').click();
//   }
// });

//mrquee
var elements = $('.marquee-content-items li').length;

for(var i=0;i < elements; i++){
 $(".marquee-content-items").clone().prependTo( ".marquee" );
};

var liEle = [];
var liEle = $(".marquee-content-items li");


// //Timer Cart Drawer
//     console.log('cart Drawer open');
  var timeInSecs;
  var ticker;

  function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000); 
  }

  function tick( ) {
    var secs = timeInSecs;
    if (secs > 0) {
      timeInSecs--; 
    }
    else {
      clearInterval(ticker);
      startTimer(10*60); // 4 minutes in seconds
    }

    var days= Math.floor(secs/86400); 
    secs %= 86400;
    var hours= Math.floor(secs/3600);
    secs %= 3600;
    var mins = Math.floor(secs/60);
    secs %= 60;
    var pretty = ((mins < 10) ? "0" : "" ) + mins + " mins : " + ( (secs < 10) ? "0" : "" ) + secs + " secs";
  //   console.log(typeof pretty);
    if(document.getElementById("countdown"))
    document.getElementById("countdown").innerHTML = pretty;
  }

  startTimer(10*60);
