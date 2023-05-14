module.exports.create=function(req,res){
    // generateTambulaTickets()
    // let ticket= generateTambulaTickets();
    // console.log(ticket)
    return res.status(200).json({
        message:"Tambula tickit",
        // ticket:generateTambulaTickets()
    })
}

// function generateTambulaTickets() {
//     // Initialize an empty 2D array with 3 rows and 9 columns
//     let tambulaTickets = [
//       [[], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], []],
//       [[], [], [], [], [], [], [], [], []],
//     ];
  
//     // Create an array of numbers from 1 to 90 and shuffle it randomly
//     let numbers = Array.from({ length: 90 }, (_, i) => i + 1);
//     numbers.sort(() => Math.random() - 0.5);
  
//     // Iterate over each column and fill it with 5 numbers in ascending order
//     for (let col = 0; col < 9; col++) {
//       let nums = numbers.splice(0, 10);
//       for (let row = 0; row < 3; row++) {
//         tambulaTickets[row][col] = nums.splice(0, 5).sort((a, b) => a - b);
//       }
//     }
  
//     // Check if all numbers from 1 to 90 are used only once in each set of 6 tickets
//     let allNumbers = tambulaTickets.flat().flat();
//     if (new Set(allNumbers).size !== 90) {
//       // Regenerate the tickets if needed
//       return generateTambulaTickets();
//     }
  
//     // Fill empty cells with zeros or "x"
//     for (let row = 0; row < 3; row++) {
//       for (let col = 0; col < 9; col++) {
//         if (tambulaTickets[row][col].length === 0) {
//           tambulaTickets[row][col] = [0, 0, 0, 0, "x"];
//         } else {
//           while (tambulaTickets[row][col].length < 5) {
//             tambulaTickets[row][col].push(0);
//           }
//         }
//       }
//     }
  
//     // Return the generated Tambula tickets
//     return tambulaTickets;
//   }
  