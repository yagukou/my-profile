function calculate() {
    
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;


    n1 = Number(n1);
    n2 = Number(n2);


    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("result").textContent = "数字を入力してください";
    } else {
        let sum = n1 + n2;
        document.getElementById("result").textContent = "結果：" + sum;
    }
}

function changeColor() {

    const colors = ["#f1c40f","#e67e22","#e74c3c","#2ecc71","#3498db","#9b59b6"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];


    document.body.style.backgroundColor = randomColor;
}
