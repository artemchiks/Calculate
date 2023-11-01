
const out = document.querySelector('.calc-screen p'),
    buttons = document.querySelector('.buttons'),
    calcll = document.querySelector('.calcll')


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
document.querySelector('.c').onclick = clearAll;

buttons.onclick = (e) => {
    if (!e.target.classList.contains('btn')) return;
    if (e.target.classList.contains('c')) return;

    out.textContent = '';

    const key = e.target.textContent;
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            out.textContent = a
            if (out.textContent = a) { calcll.textContent = a }

        } else if (a != '' && b !== '' && finish) {
            b = key
            finish = false;
            out.textContent = b


        } else {
            b += key
            out.textContent = b
            calcll.textContent += b
            return
        }

    } if (action.includes(key)) {

        sign = key
        out.textContent = sign
        calcll.textContent = a + sign

        return;
    }


    if (key === '=') {
        if (b === '') {
            b = a

        }
        calcll.textContent = '='

        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break;
            case '-':
                a = a - b
                break;
            case 'X':
                a = a * b
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка'
                    a = ''
                    b = ''
                    sign = ' '
                    return
                }
                a = Math.floor(a / b)
                break;
            case '%':
                a = a / 100 * b
                console.log(a)
                break;

        }
        finish = true
        out.textContent = a

    }
}

