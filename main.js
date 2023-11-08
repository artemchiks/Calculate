
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
    if (a === '.' && b === '') {
        a = 0
        return 0;
    }
    const key = e.target.textContent;



    if (digit.includes(key)) {
        if (b === '' && sign === '' && finish === false) {
            if (key == '.' && (a === '' || a.includes('.'))) return;
            a += key;
            out.textContent = a;
            calcll.textContent = a;
        } else if (finish === true) {
            finish = false;
            a = key;
            out.textContent = a;
            calcll.textContent = a;
        } else {
            if (key == '.' && (b === '' || b.includes('.'))) return;
            b += key;
            calcll.textContent += key;
            return;
        }
    }
    if (a === '' && b === '' && sign === '' && finish === false) {
        if (key === '-') {
            a = key;
            out.textContent = a;
            calcll.textContent = a;
        } else return;
    }

    if (action.includes(key) && out.textContent != 'Ошибка' && a != '-') { //если вводят действие
        if (a !== '' && sign !== '' && b !== '') {

        }
        let hist = calcll.textContent
        let last = hist.length - 1
        if (finish === true) {
            finish = false
            a = out.textContent
            sign = key
            out.textContent = key
            calcll.textContent = a + sign
        } else
            if (hist[last] !== action[0] && hist[last] !== action[1] && hist[last] !== action[2] && hist[last] !== action[3]) {
                sign = key
                out.textContent = sign
                calcll.textContent += sign
            }
            else {
                sign = key
                calcll.textContent = hist.slice(0, hist.length - 1) + sign //чтобы в исходной строке находилась ее измененная версия, необходимо заменить всю строку
                out.textContent = sign
            }
        return;
    }

    // if (action.includes(key)) {
    //     sign = key
    //     out.textContent = sign
    //     calcll.textContent += sign
    //     return;
    // }

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

