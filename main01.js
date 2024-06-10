let degree = 35;

if(degree > 0 && degree < 20){
    console.log('non ci sono piu’ le mezze stagioni');
}else if(degree >= 30){
    console.log('lu mare, lu sole, lu ientu');
}else if (degree < 30 && degree > 20){
    console.log('mi dia una peroni sudata');
}else if(degree <= 0 && degree > -10){
    console.log('non e’ tanto il freddo quanto l’umidità');
}else if (degree <= -10){
    console.log('copriti…ancora ti raffreddi');
}


let temp = 15;

switch (true) {
    case temp > 0 && temp < 20:
        console.log('non ci sono piu’ le mezze stagioni');
        break;
        case temp >= 30:
            console.log('lu mare, lu sole, lu ientu');
            break;
            case temp < 30 && temp > 20:
                console.log('mi dia una peroni sudata');
                break;
                case temp <= 0 && temp > -10:
                    console.log('non e’ tanto il freddo quanto l’umidità');
                    break;
                    case temp <= -10:
                        console.log('copriti…ancora ti raffreddi');
                        break;
}
                    