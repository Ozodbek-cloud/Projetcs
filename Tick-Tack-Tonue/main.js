let cell = document.querySelectorAll(".cell")
let restart = document.querySelector(".game--restart")
let data_inedx  = document.querySelectorAll("data-cell-index")

let cross = "X"
let zero = "O"
cell.forEach(el =>{
el.addEventListener("click", () => {
     el.innerHTML = cross
     cross = cross === "X" ? "O" : "X";
     checkWinner();
     
})
     restart.addEventListener("click", () => {
        el.innerHTML = null
    })
    
    function checkWinner() {
        const winPatterns = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8],
          [0, 3, 6], [1, 4, 7], [2, 5, 8],
          [0, 4, 8], [2, 4, 6]
        ];
      
        winPatterns.forEach(pattern => {
          const [a, b, c] = pattern;
          if (cell[a].innerHTML && cell[a].innerHTML === cell[b].innerHTML && cell[a].innerHTML === cell[c].innerHTML) {
            alert(`${cell[a].innerHTML} yutdi!`);
          } 
        });
      }
    
    
})



