$('.plus').on('click', function(){
    var slg = $(this).parent().find('input').val();
    slg = parseInt(slg) + 1 ;
    $(this).parent().find('input').val(slg);
    var price = $(this).attr('data-price');
    var total_price = slg * price;
    
    $(this).parents('.right').find('.total_1_sp').text(total_price + 'đ');
    $(this).parents('.right').find('.total_1_sp').attr('data-total-price' , total_price);
});