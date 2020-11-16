let board = new Array(9).fill(' ',0,9); // n*n arrray
let remmainingBlocks = 8;
let count;
let isDraw = false;

function showBoard( board ){

    for(let index = 0; index < 7; index+=3 ){
        console.log('_',board[index + 0],'_|_',board[index + 1],'_|_',board[index + 2],'_');
    }

}

function checkMove( remmainingBlocks ){

    return remmainingBlocks < 0 ? false : true
}

function checkPosition( position ){

    return board[ Number(position) ] === ' '  ? true : false;
}


function Player( name, sign ){

    this.name = name;
    this.sign = sign;    

    this.playerMove = function ( remmainingBlocks ){

        let moveCondition = true;
        count = 3;
        while( moveCondition ){
            
            if( checkMove(remmainingBlocks) && count ){
                let position = prompt(this.name + " turn !!\n" + "Enter the position", ' ');

                if( checkPosition(position) ){
                    board[ Number(position) ] = this.sign;
                    moveCondition = false;
                }
                else{
                    alert("Position already accquired. Enter position again");
                    count--;
                }
            }
            else{
                moveCondition = false;
            }
        }
    }

    this.checkCondition = function ( board ){

        if( board[0] === board[4] && board[4] === board[8] && board[0] === this.sign){
            return true;
        }

        if( board[2] === board[4] && board[4] === board[6] && board[2] === this.sign){
            return true;
        }

        for(let index = 0 ; index < 7; index += 3){
            
            if( board[index + 0] === board[index + 1] && board[index + 1] === board[index + 2] && board[index + 0] === this.sign ){
                return true;
            }
        }
        
        for(let index = 0; index<3; index += 1){
            if( board[index + 0] === board[index + 3] && board[index + 3] === board[index + 6] && board[index + 0] === this.sign){
                return true;
            }
        }
        
        return false;
    }

}

let player1Name = prompt('Enter Player 1 name : ', '');
let player2Name = prompt('Enter Player 2 name : ', '');

let p1 = new Player( player1Name, 'x');
let p2 = new Player( player2Name, 'o');

let playerArr = [p1,p2];

while( remmainingBlocks >= 0 && !(isDraw) ){

    for( let player of playerArr){
        
        player.playerMove(remmainingBlocks);

        if ( player.checkCondition(board) ){
            alert(`${player.name} wins`);
            isDraw = true;
            break;
        }
        
        --remmainingBlocks;
        showBoard( board );
    }
}

if ( !isDraw ){
    showBoard( board );
    alert("Draw");
}