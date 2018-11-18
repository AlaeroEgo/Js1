function createObjectFromNum(a) {
    x = String(a).split('');
    let container = {
        hundreds: '',
        tens: '',
        units: ''

    };
    for (let i = 0; i < x.length; i++) {
        
		if (a > 999) {
        container = 'wrong num';
        break;
   		 }

        else if (i == 0) {
            container.hundreds = x[i];
        } else if (i == 1) {
            container.tens = x[i];
        } else if (i == 2) {
            container.units = x[i];
        }
        

    }
    
   
    console.log(container)

}

createObjectFromNum(1234)



