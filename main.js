
const out = document.querySelector('.calc-screen p'),
    buttons = document.querySelector('.buttons'),
    calcll = document.querySelector('.calcll'),
    call = document.querySelector('.calc'),
    plusMinus = document.querySelector('.plus-minus');




let a = '';
let b = '';
let sign = '';
let finish = false;


const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/', '%']

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
    calcll.textContent = 0;

}

function plusseminuse() {

    if (a != '') {
        a = a * -1
        out.textContent = a
        calcll.textContent = a;
        return a
    }
}
document.querySelector('.c').onclick = clearAll;
document.querySelector('.plus-minus').onclick = plusseminuse;


buttons.onclick = (e) => {
    if (!e.target.classList.contains('btn')) return;
    if (e.target.classList.contains('c') || e.target.classList.contains('plus-minus')) return;

    out.textContent = '';
    if (a !== '' || b === '') {
        out.textContent = a;
    }

    const key = e.target.textContent;


    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            if (key == '.' && a.includes('.')) return;
            a += key
            out.textContent = a
            calcll.textContent = a
            if (a === '.' || b === '.') {
                a = ''
                return;
            }
        }
        else if (a !== '' && b !== '' && finish || key == '.' && b.includes('.')) {
            // b = key
            finish = false
            out.textContent = b
        }
        else {
            b += key
            out.textContent = b
            calcll.textContent = `${a}${sign}${b}`
            return
        }


    } if (action.includes(key)) {
        if (key === '-') {
            if (a == '-' && b == '')
                b = key
            out.textContent = a
            calcll.textContent = a
        }
        sign = key
        out.textContent = sign
        calcll.textContent += sign
        return;
    }

    if (key == '=') {
        calcll.textContent = `${a}${sign}${b}` + '='
        switch (sign) {
            case '+':
                a = ((+a) + (+b))
                break;
            case '-':
                a = a - b
                break;
            case 'X':

                a = (a * b)
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка'
                    a = ''
                    b = ''
                    sign = ' '
                    return
                }
                a = (a / b).toFixed(2)
                break;
            case '%':
                a = a / 100 * b
                console.log(a)
                break;
        }
        finish = true
        out.textContent = a

    } if (key === '=' && out.textContent == 0 && key === '+/-') {
        out.textContent = 0
        return 0
    }




}


