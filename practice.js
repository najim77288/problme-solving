          //>>>>>>>>>>>> Practice tasks<<<<<<<<<<<//
           // >>>>>>>>>>>> <<<<<<<<<<<<<<
        var fruit=['banana', 'orange', 'mango', 'lemon'] //array
        var reversed = [];

        for(i = fruit.length -1; i > -1; i--) {
          reversed.push(fruit[i])
            }
           console.log(reversed)
          console.log(evenNumbers);
          
          
                // >>>>>>>>>>>> <<<<<<<<<<<<<<
          var numbersArray = [12, 98, 5, 41, 23, 78, 46]
          evenNumbers = [];

          for(let i = 0; i < numbersArray.length; i++) {
            if(numbersArray[i] % 2 === 0) {
              evenNumbers.push(numbersArray[i])
            }
          }
          console.log(evenNumbers)

                // >>>>>>>>>>>> <<<<<<<<<<<<<<
          const najimNumbers = [20,50,55,11,33,44,60]
          const najimEven = []

          for (let i = 0; i < najimNumbers.length; i++) {
            if (najimNumbers[i] % 2 === 0) {
              najimEven.push(najimNumbers[i])
            }
          }
          console.log(najimEven)



     // >>>>> Use a for... for loop to concatenate all the elemenets of an array into a single string <<<<<<
        const fruites = ['apple', 'banana', 'jackfruite', 'lemon', 'watermelon'];
        let text = fruites.join("")
        console.log(text)
          // Output applebananajackfruitelemonwatermelon

           // >>>>>>>>>>>> One <<<<<<<<<<<<<<
        let stringSentence = "Najim is a hard working person He allwayes tryes to learn something";
        let reversed = stringSentence.split(" ").reverse().join(' ')
        console.log(reversed)

           // >>>>>>>>>>>> One <<<<<<<<<<<<<
        const najim = "Najim uddin is hafiz and wev developer";
        const my_rev = najim.split(" ").reverse().join(" ");
        console.log(my_rev)