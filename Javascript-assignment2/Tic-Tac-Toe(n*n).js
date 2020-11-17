function createBoard(){
    let board = new Array(3).fill(' ',0,3);

    for( let index = 0; index < 3; index++){
        board[index] = new Array(3).fill(' ',0,3);
    }

    return board;
}
//console.log(board);


function showBoard( board ){

    for( let index = 0; index < 3; index++ ){
        console.log('_' + board[index][0] + '_|_' + board[index][1] + '_|_' + board[index][2] + '_');
    }
}


class Player {

    constructor ( name, sign ){
        this.name = name;
        this.sign = sign;
    }

    checkWin = ( board ) => {

        for(let index = 0; index < 3; index++){
            if( board[index][0] == board[index][1] && board[index][1] == board[index][2] && board[index][0] == this.sign ){
                return true;
            }

            if( board[0][index] == board[1][index] && board[1][index] == board[2][index] && board[0][index] == this.sign ){
                return true;
            }
        }

        if( board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] == this.sign ){
            return true;
        }

        if( board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] == this.sign ){
            return true;
        }

        return false;
    }

    checkPosition = ( board, position ) => {
         
        return board[ Math.floor(position/3) ][ position%3 ] == ' ' ? true : false;
    }

    playerMove = ( board, remmainingChance ) => {

        while(remmainingChance > 0 ){
            let position = prompt(`${ this.name } turn`, '');

            if( position < 9 && this.checkPosition( board, position) ){

                board[ Math.floor( position/3 ) ][ position%3 ] = this.sign;
                break;   
            }
            else{
                position > 8 ? alert('Invalid Position') : alert('Choose Empty Position');
            }
        }
        return this.checkWin( board ) ? true : false ;
    }
}


function playTicTacToe(){ 

    let board = createBoard();
    let p1_name = prompt('Enter player 1 name : ', '');
    let p2_name = prompt('Enter player 2 name : ', '');

    let p1 = new Player(p1_name, 'x');
    let p2 = new Player(p2_name, 'o');

    let players = [p1, p2]  //new Array(2); //player.push(p1, p2);

    let remmainingChance = 9;
    let winner = false;

    while( ( remmainingChance > 0) && !winner ){
        
        for( let player of players ){
            
            winner = player.playerMove(board, remmainingChance);
            remmainingChance--;
            showBoard( board );

            if( winner ){
                alert(`${ player.name } wins the game`);
                remmainingchance = 0;
                break;
            }
        }
    }

    if( !winner ){
        alert('Match draw');    
    }  
}


playTicTacToe();