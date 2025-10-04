// $(window).ready(function(){
//     alert("Jquery is working")
// })


// $('#header')


// $('.paragrafi')


// $('ul li').mouseover(function(){
//     alert('Mouse over')
// })


// $('ol li').mouseout(function(){
//     alert('Mouse out')
// })


$('#btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text('this is not a heading trust me');
})
var counter = 0;
$('#btn2').click(function(){
    counter++;
    $('#result').text(`clicked ${counter} times`);
})

$('#mydiv').click(function(){
    $(this).addClass('clickd');
})
.find('span')
.attr('title', 'hover over me');


$('#btn3').click(function(){
    $('.hidden').show();
})
$('#btn4').click(function(){
    $('.hidden').hide();
})

$('#btn3').click(function(){
    $('.hidden').show('slow');
    
})
    

