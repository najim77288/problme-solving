          //>>>>>>>>>>>> Practice tasks<<<<<<<<<<<//

        // const myFriends = ["Najim", "Helal", "Mohin", "Bodrul", "Emad", "Ahad"]
        // const reversed = [];

        // for(i = myFriends.length -1; i > -1; i--){
        //     reversed.push(myFriends[i])
        // }
        // console.log(reversed)

    //    const books = ['hadith', 'quran', 'fiqho', 'arbic', 'bangla']
    //    books.reverse()
    //    console.log(books)

    // var fruit=['banana', 'orange', 'mango', 'lemon'] //array

    // var reversed = [];

    // for(i = fruit.length -1; i > -1; i--) {
    //   reversed.push(fruit[i])
    // }
    // console.log(reversed)

    // var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // var evenNumbers = [];

    // for (var i = 0; i < numbersArray.length; i++) {
    //     if (numbersArray[i] % 2 === 0) {
    //         evenNumbers.push(numbersArray[i]);
    //     }
    // }

    // console.log(evenNumbers);  // Output: [2, 4, 6, 8, 10]


    // var numbersArray = [12, 98, 5, 41, 23, 78, 46]
    // evenNumbers = [];

    // for(let i = 0; i < numbersArray.length; i++) {
    //   if(numbersArray[i] % 2 === 0) {
    //     evenNumbers.push(numbersArray[i])
    //   }
    // }
    // console.log(evenNumbers)


    // const najimNumbers = [20,50,55,11,33,44,60]
    // const najimEven = []

    // for (let i = 0; i < najimNumbers.length; i++) {
    //   if (najimNumbers[i] % 2 === 0) {
    //     najimEven.push(najimNumbers[i])
    //   }
    // }
    // console.log(najimEven)



     // >>>>> Use a for... for loop to concatenate all the elemenets of an array into a single string <<<<<<
        const fruites = ['apple', 'banana', 'jackfruite', 'lemon', 'watermelon'];
        let text = fruites.join("")
        console.log(text)
          // Output applebananajackfruitelemonwatermelon

        let stringSentence = "Najim is a hard working person He allwayes tryes to learn something";
        let reversed = stringSentence.split(" ").reverse().join(' ')
        console.log(reversed)


        const najim = "Najim uddin is hafiz and wev developer";
        const my_rev = najim.split(" ").reverse().join(" ");
        console.log(my_rev)