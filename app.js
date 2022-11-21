/*
    Refazer o programa para que ele aceite tanto o mês por extenso quanto o número do mes.
*/

function estação (){
    //informar a estação do ano usando switch e case
    let mês = prompt('digite o mês');
    let saida = document.querySelector('#saida');
    let estação


switch (mês) {
    case 'janeiro': case 'fevereiro': case 'março':
        estação = 'verão'
        break;

        case 'abril': case 'maio': case 'junho':
            estação = 'outono'
            break;

         case 'julho': case 'agosto': case 'setembro':
            estação = 'inverno'
             break;

        case 'outubro': case 'novembro': case 'dezembro':
             estação = 'primavera'
            break;
     
            default:
                estação = 'undefined'
            break;
    }
    saida.innerHTML = `<p>olá, você está em ${mês} e por isso estamos no ${estação}`
}

let est = document.querySelector('.mostrar');

 let dataAtual = new Date();

 var dia = dataAtual.getDate();
 var mes = (dataAtual.getMonth() + 1);
 var ano = dataAtual.getFullYear();
 var horas = dataAtual.getHours();
 var minutos = dataAtual.getMinutes();

 est.innerHTML = "Hoje é dia " + dia + "/" + mes + " de " + ano + ". Agora são " + horas + ":" + minutos + "h."
