$(document).ready(function(){
  var clicked = false;
    $(document).on('click' ,'.info_btn',function(){
      console.log(clicked);
      if(!clicked){
        $(this).next().slideDown('slow');
        clicked=true;
      }else{
        $(this).next().slideUp('slow');
        clicked=false;
      }

    });

});
