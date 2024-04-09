document.addEventListener("DOMContentLoaded", function() {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("#calculator input[type='button']");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (this.value === '=') {
                calculate();
            } else if (this.value === 'CE') {
                clearEntry();
            } else if (this.value === 'C') {
                clearResult();
            } else {
                result.value += this.value;
            }
        });
    });
});

function calculate() {
    try {
        document.getElementById("result").value = eval(result.value);
    } catch (error) {
        document.getElementById("result").value = 'Error';
    }
}

function clearEntry() {
    const currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function clearResult() {
    document.getElementById("result").value = '';
}
