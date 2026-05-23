
let arr = [];
let display = document.querySelector(".display");
let calculate = document.querySelector(".calculate");
let delete1 = document.querySelector(".delete");
let delete_all = document.querySelector(".alldelete");
let buttons = document.querySelectorAll(".btn");
let operation_btn = document.querySelectorAll(".opbutton");
let lastvalue = '';


buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let pressbtn = e.target.dataset.value;
        if(!pressbtn)
            return 
        // 1. prevent starting with operator

            if (arr.length === 0 && ["+", "-", "*", "/", "%"].includes(pressbtn)) {
    return;
 }

        // 2. prevent double operators
        if (
            ["+", "-", "*", "/", "%"].includes(lastvalue) &&
            ["+", "-", "*", "/", "%"].includes(pressbtn)
        ) {
            return;
        }

        // 3. prevent multiple decimals
        if (pressbtn === ".") {
            let lastNumber = arr.join('').split(/[\+\-\*\/%]/).pop();
            if (lastNumber.includes(".")) return;
        }

        arr.push(pressbtn);
        display.innerHTML = arr.join('');
        lastvalue = pressbtn;
    });
});


delete1.addEventListener("click", () => {
    arr.pop();
    display.innerHTML = arr.join('');
})

delete_all.addEventListener("click", () => {
    arr.splice(0);
    display.innerHTML = arr.join('');

})

calculate.addEventListener("click", () => {
    if(arr.length === 0) return;
    try {
        let result = eval(arr.join(''));
        display.innerHTML = result;
        arr = [result]
    }
    catch {
        display.innerHTML = 'Error'
        setTimeout(() => {
            display.innerHTML = ''
        }, 1000);
        arr = []
    }

})


