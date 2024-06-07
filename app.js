console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++) {
    if ( i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log(i, "FIZZ");
        } else if (i % 5 == 0) {
                console.log(i, "BUZZ");
        } else {
            console.log(i);
        }
    }
}
// Exercise 3 Section
console.log("Excercise 3: \n===========\n");

let x = 1;
do {
    if (x % 2 !== 0) {
        console.log(x);
    }
    x++;
} while (x < 100);

let i = 1;
while (i < 100) {
    if (i % 2 !== 0) {
        console.log(i)
    }
    i++;
}

i = 1;
while (i <= 100) {
    let output = "";
    if (i % 3 == 0) {
        output += "FIZZ";
    }
    if (i % 5 == 0) {
        output += "BUZZ";
    }
    if (output !== "") {
        console.log(i, output);
    }else {
        console.log(i);
    }
    i++;
}
i = 1;
do  {
    let output = "";

    if (i % 3 == 0) {
        output += "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }
    if (output !== "") {
        console.log(i, output);
    } else {
        console.log(i);
    }
    i++;
} while (i <= 100);

//Exercise 4
console.log("Excercise 4: \n===========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let j = 0; i <= n; i++) {
    if (j == value) {
        console.log(`Found ${value}!`);
        break;
    }

    if (j == n) {
        console.log(`Did not find ${value} within range...`);
    }
}
