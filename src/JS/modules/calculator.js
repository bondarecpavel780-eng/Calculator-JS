 function calculator() {
 
 const display = document.querySelector(".text"),
    btns = document.querySelectorAll(".panel button");

  btns.forEach((button) => {
    button.addEventListener("click", () => {
      // button delete last symbol
      if (button.id == "del") {
        display.value = display.value.slice(0, -1);
      }
      // button delete all
      else if (button.id === "AC") {
        display.value = "";
      }
      // count the percentage
      else if (button.id === "procent") {
        try {
          let val = display.value;
          if (!val) return;
          let match = val.match(/^(.*)([+\-*/])(\d+\.?\d*)$/);// any symbol any times and find op
          if (match) {
            // save the received data into variables 
            let baseExpr = match[1];
            let operator = match[2];
            let percentNum = parseFloat(match[3]);

            let baseValue = new Function("return " + baseExpr)();
            let percentValue;

            // calculate the percentage by sign.
            // logic for +, - and other operations
            if (operator === "+" || operator === "-") {
              percentValue = (baseValue * percentNum) / 100;
            } else {
              percentValue = percentNum / 100;
            }
            // return result 
            let finalExpression = baseExpr + operator + percentValue;
            let res = new Function("return " + finalExpression)();

            if (res === Infinity || res === -Infinity || Number.isNaN(res)) {
              display.value = "Error";
            } else {
              display.value = res;
            }
          } else {
            let res = new Function("return " + val)() / 100;
            display.value = res;
          }
        } catch (error) {
          display.value = "Error";
        }
      }
      // button result 
      else if (button.id === "result") {
        if (display.value.trim() === "Error" || !display.value.trim()) return; // fixed bug "Function Error()"
        try {
          if (display.value) {
            let res = new Function("return " + display.value.trim())();
            if (res === Infinity || res === -Infinity || Number.isNaN(res)) {
              display.value = "Error";
            } else {
              display.value = parseFloat(res.toFixed(5));
            }
          }
        } catch (error) {
          display.value = "Error";
        }
      } else {
        if (display.value.trim() === "Error") display.value = "";
        // double operator protection
        const ops = ['+', '-', '*', '/', '.'];
        let last = display.value.slice(-1);
        let next = button.innerText;

        if (ops.includes(last) && ops.includes(next)) {
          display.value = display.value.slice(0, -1) + next;
        } else {
          display.value += next;
        }
      }
    });
  });

}

module.exports = calculator;