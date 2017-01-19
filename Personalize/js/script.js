$(function(){

//quotes 
$.get('quotes.txt', function(data) {
   var quotes = data.split("\n");
   var randLineNum = Math.floor(Math.random() * (quotes.length-1));
   
   //alert(quotes[randLineNum]);
//***************** To iterate on file **********************    
    
//     $.each(quote, function(n, elem) {
//       $('#myContainer').append('<div>' + elem + '</div>');
//    });

// *********************************************************
     $('#quoteContainer').append('<div>' + quotes[randLineNum] + '</div>');
    
});

//focus of the day
$('#focus').bind("enterKey",function(e){
   //do stuff here
    var value = $('#focus').val();
    var div = "<div id='labelFocus' class='labelDiv' text-align= 'center'>" + value+ "</div>";
    $(this).replaceWith(div);
    console.log(value);
});
$('#focus').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});

    
//todo button
   $('#todobtn').on('click', function(event) {        
        $('#todoframe').toggle();
        
   });


    
});