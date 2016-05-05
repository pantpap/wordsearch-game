jQuery( document ).ready(function( $ ) {  
  var selectedWords           = [];
  var down                    = false;
  var action                  = false;
  var selectedNumbers         = [];

  createHtml();

  $(document).mousedown(function() {
    down = true;
  }).mouseup(function() {
    down = false;  
    action = checkSelectedWord(selectedWords);
    selectedWords = [];
    if(action){
      $(".selected").addClass('found').removeClass('hovered selected');
    }else{
      $(".selected").removeClass('hovered selected');
    }
  });

  $('.cell').hover( function(){
    if (down && !($(this).hasClass('selected'))){
      
      selectedNumbers.push($(this).data('number'));
      if (selectedWords.length>1){
        magicNumber = getMagicNumber(selectedNumbers);
        if(($(this).data('number')) == magicNumber){
          $(this).addClass('hovered selected');
          selectedWords.push($(this).data('value'));
        }else{
          selectedNumbers.pop();
        }
      }else{
        $(this).addClass('hovered selected');
        selectedWords.push($(this).data('value'));
      }
    }
  }); 

});
