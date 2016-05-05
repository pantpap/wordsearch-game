var correctWords  = ["ΚΑΦΤΑΝΙΑ", "ΤΟΠ", "ΜΑΓΙΩ", "ΑΞΕΣΟΥΑΡ", "ΠΕΔΙΛΑ" ];
var tableWords    = ['Κ','Α','Φ','Τ','Α','Ν','Ι','Α','Ε','Α','Γ','Ι','Ο','Π','Α','Λ','Μ','Τ','Ε','Τ','Π','Τ','Γ','Ι','Τ','Α','Π','Τ','Κ','Ο','Ι','Δ','Ο','Ο','Γ','Γ','Α','Π','Ω','Ε','Ρ','Λ','Α','Ι','Ε','Ν','Π','Π','Ζ','Ε','Δ','Ι','Ω','Α','Ι','Ι','Ρ','Α','Υ','Ο','Σ','Ε','Ξ','Α']
var htmlString    = '';

function createGame(){
  htmlString = '';
  for(var i=0; i<8; i++){
    htmlString += '<tr>';
    for(var x=0; x<8; x++){
      htmlString += "<td data-value='"+tableWords[(i*8)+x]+"' data-number='"+((i*8)+x)+"' class='cell'>" + tableWords[(i*8)+x] + '</td>';
    }
    htmlString += '</tr>';
  }
  return htmlString;
}

function createInfoWords(){
  htmlString = ''
  for(var i=0; i<5; i++){
    htmlString += "<li data-value='"+correctWords[i]+"'>"+correctWords[i]+"</li>";
  }
  return htmlString;
}

function createHtml(){
  $('#game').html(createGame());
  $('.info-words').html(createInfoWords());
}

function checkSelectedWord(selectedWord){
  var wordToCheck = selectedWord.join("");
  var action = false;

  for (var i=0;i<correctWords.length;i++){
    if (correctWords[i] == wordToCheck){
      correctWords.splice(i,1);
      action = true;
      $("[data-value|='"+wordToCheck+"']").css('text-decoration', 'line-through');
      $("[data-value|='"+wordToCheck+"']").css('color', 'grey');
    }
  }
  return action;
}

function getMagicNumber(selectedNumbers){
  last = selectedNumbers[selectedNumbers.length - 2];
  previous = selectedNumbers[selectedNumbers.length - 3];
  mn=last-previous;
  return (last+mn);
}