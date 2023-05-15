function generateTambulaTickets(numTickets) {
    const tickets = [];
    
    //how many tickets you want
    while (tickets.length < numTickets) {

        //array of ticket
        let ticket = [[],[],[]];
        
        //arrays fild with zero
        ticket.map((elem)=>{
            for(let i=0;i<9;i++){
                elem.push(0);
            }
        })
    
      const numbers = Array.from({ length: 90 }, (_, i) => i + 1);

      shuffleArray(numbers);
  
      let index = 0;
  
      for (let col = 0; col < 9; col++) {
        const columnNumbers = [];
  
        if (col === 0) {
          columnNumbers.push(0); // Add zero in the first column
        }
  
        while (columnNumbers.length < 3) {
          columnNumbers.push(numbers[index++]);
        }
  
        columnNumbers.sort((a, b) => a - b);
  
        for (let row = 0; row < 3; row++) {
          if (columnNumbers[row] !== 0) {
            ticket[row][col] = columnNumbers[row];
          } else {
            ticket[row][col] = 0;
          }
        }
      }
  
      // Add 3 or 4 zeros in each row
      for (let row = 0; row < 3; row++) {
        const zeroIndices = getRandomIndices(3, 4); // Generate 3 or 4 random indices
        zeroIndices.forEach((colIndex) => {
          ticket[row][colIndex] = 0;
        });
      }
  
      tickets.push(ticket);
    }
  
    return tickets;
  }
  
  // Function to shuffle an array using Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Function to generate random indices
  function getRandomIndices(min, max) {
    const indices = [];
    const numIndices = Math.floor(Math.random() * (max - min + 1)) + min;
    while (indices.length < numIndices) {
      const randomIndex = Math.floor(Math.random() * 9);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }
  
  module.exports=generateTambulaTickets;
