window.onload = display;

var output = $('#output'),
    text   = "O curso de Consolidação das Normas do SUS é destinado a gestores do SUS de todo o\n País com enfoque no manuseio das Portarias de Consolidação do SUS para o dia-a-dia da .\n\tgestão em saúde. Espera-se que, ao final o curso,  você possa  compreender o significado\n\t\tda Consolidação das Normas do SUS e sua razão de ser;  compreender a estrutura das\n\t\t\tPortarias de Consolidação das Normas do SUS; e,  utilizar a Consolidação das Normas do\n\t\tSUS na gestão do SUS.", 
    interval,
    i      = 0; 

function display(){
  if(i<=text.length){
    output.text(text.substring(0,i));
    i++;
  }else{
    clearTimeout(interval);
    return false;
  }
  interval = setTimeout('display()',70);
}