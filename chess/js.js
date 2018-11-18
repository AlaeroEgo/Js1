let chessMate = document.querySelector('.chess_mate');

function chessNum() {
	let line = document.createElement('div');
	 let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let i = 0; i < 8; i++) {
       
        let box = document.createElement('div');
        box.className = ('num');
        box.innerText = arr[i];
      line.appendChild(box);


    }
    chessMate.appendChild(line);
    line.className = 'line'
}


function chessLineOdd() {
	let line = document.createElement('div');
    for (let i = 0; i < 8; i++) {
        let box = document.createElement('div');

        if (i % 2 == 0) {
            box.className = 'white';
        } else if (i % 2 != 0) {
            box.className = 'black';

        }

        line.appendChild(box);


    }
    chessMate.appendChild(line);
    line.className = 'line'

}



function chessLineEven() {
	let line = document.createElement('div');
    for (let i = 0; i < 8; i++) {
        let box = document.createElement('div');

        if (i % 2 == 0) {
            box.className = 'black';
        } else if (i % 2 != 0) {
            box.className = 'white';

        }
         line.appendChild(box);

       
    }
    chessMate.appendChild(line);
    line.className = 'line'
}

function generateChessMate() {
 let box = document.createElement('div');
    for (i = 0; i <= 9; i++) {

    	if (i == 0 || i == 9) {
    		box.innerText = i;
    		
    		chessNum()
    	}
        else if (i % 2 == 0) {

            chessLineOdd();
        } else if (i % 2 != 0) {
            chessLineEven();
        }
    }

}
generateChessMate()

