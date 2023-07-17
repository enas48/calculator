let calcuation = [];
let operator;
let firstOperand;
let seconOperand;

let btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        if (e.target.id === 'btnSum' || e.target.id === 'btnSub' || e.target.id === 'btnMul' || e.target.id === 'btnDiv') {
            operator = e.target.innerHTML;
        }
        if (e.target.id === 'btnClr') {
            calcuation = [];
            document.getElementById('res').innerHTML = '';
        }
        else if (e.target.id === 'btnEql') {
            let opI = calcuation.indexOf(operator);
            firstOperand = calcuation.slice(0, opI).toString().replaceAll(',', '');
            seconOperand = calcuation.slice(opI + 1).toString().replaceAll(',', '');
            let calc = parseInt(firstOperand, 2) + operator + parseInt(seconOperand, 2);
            document.getElementById('res').innerHTML = eval(calc).toString(2);;
            calcuation = [];
        } else {
            calcuation.push(value);
            document.getElementById('res').innerHTML = calcuation.toString().replaceAll(',', '');
        }
    })

})
