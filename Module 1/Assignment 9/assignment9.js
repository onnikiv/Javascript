"use strict";
let primeNumberCheck = parseInt(prompt("Give me a Number"));
document.getElementById("p").innerHTML = testNumber
for (let i =2; i < testNumber; i++){
    if (testNumber % i == 0);
        testNumber == true;
        break
    }
        testNumber == false


document.querySelector("p").textContent += primeNumberCheck ? "YES" : "NO";

```
'use strict';
        let testInt = prompt('Anna numero')
        document.getElementById('result').innerHTML = testInt   
        for(let i=2; i<testInt; i++){
            if(testInt%i==0){
                testInt = true
                break
            }
            testInt = false
        }
        document.getElementById('result').innerHTML += testInt ? ' is not a prime number' : ' is a prime number'
```