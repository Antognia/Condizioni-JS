
// if/else
let v = 18;
 if (v < 18){
        console.log('Insufficente');
     }else if(v >= 18 && v < 21){
            console.log('sufficiente');
        }else if(v >= 21 && v < 24){
                console.log('buono');
            }else if (v >= 24 && v < 27){
                    console.log('distinto');
                }else if(v >= 27 && v <= 29){
                        console.log('Ottimo');
                    }else if (v = 30){
                            console.log('Eccellente');
                         }
                        
                        
                        

// Switch                        
let vote = 18;

switch (true) {

    case vote < 18: 
    console.log('Insufficente');
    break;

    case vote >= 18 && vote < 21:
        console.log('sufficiente');
        break;

        case vote >= 21 && vote < 24:
            console.log('buono');
            break;

            case vote >= 24 && vote < 27:
                console.log('distinto');
                break;

                case vote >= 27 && vote <= 29:
                    console.log('Ottimo');
                    break;

                    case vote == 30:
                        console.log('Eccellente');
                        break;

                    default:
                             console.log('Votazione inesistente');
            

            
}