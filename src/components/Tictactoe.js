import React, { useState } from 'react'
import './tictactoe.css' 





const Tictactoe = () => {
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState('');
    
    

    const reStartGame = () => {
        setCells(Array(9).fill(''));
        setWinner('');
        
    }
    

    const checkWinner = (square) => {
        let combos = {
            hz: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            vt: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
                
            ],
            diag: [
                [0, 4, 8],
                [2, 4, 6]
                
            ]
        }
        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (square[pattern[0]] === '' || 
                square[pattern[1]] === '' ||
                    square[pattern[2]] === '') {
                    
                }
                else if (square[pattern[0]]===  square[pattern[1]] && square[pattern[1]]===  square[pattern[2]]) {
                    if (square[pattern[0]] === 'X') {
                        setWinner('X')
                        return;
                    } else {
                        setWinner('O');
                        return;
                    }
                }
            });

            
        }
    }

     
    const handleClick = (nums) => {
        if (winner) {
            alert("Match ends"); 
            return;
        }
        if (cells[nums] !=='') {
            alert('plz choose another box');
            return;
      }
        let square = [...cells];
        if (turn === 'X') {
            setTurn('O');
            
            square[nums]='X'
        } else {
            setTurn('X');
            
            square[nums]='O'
        }
        checkWinner(square);
        
        setCells(square);
       
        
        
    }
    const Cell = ({nums}) => {
        return <td onClick={() => { handleClick( nums )}}><h1>{cells[nums]}</h1></td>
 }

  return (
    <div>
          <h1 className='text-center' >TIC TAC TOE</h1>
          
          <table>
              <h2 style={{color:'white'}}>Turn: {turn}</h2>
              <tbody>
                  <tr>
                      <Cell nums={0} />
                      <Cell  nums={1} />
                       <Cell  nums={2} />
                  </tr>
                  <tr>
                      <Cell  nums={3} />
                      <Cell  nums={4} />
                       <Cell nums={5} />
                  </tr>
                  <tr>
                      <Cell  nums={6} />
                      <Cell  nums={7} />
                      <Cell  nums={8} />
                  </tr>
              </tbody>
          </table>
          {winner && (
              <div className='victory'>
                  <h1> {winner} &nbsp; is the winner </h1> 
        
                  <br />
                  
                  <button onClick={reStartGame}>Play Again😃</button>
             </div>

         )
          }


    </div>
  )
}

export default Tictactoe
