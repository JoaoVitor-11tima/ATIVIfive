function calcularAumento() {  
    const inputSalario = document.getElementById("salario");
    const paragrafoResultado = document.getElementById("resultado");

    let salario = Number(inputSalario.value);
    
    let porcentagem;

    if (salario <= 1000.00) {
        porcentagem = 20;
    } else if (salario <= 3000.00) {
        porcentagem = 15;
    } else if (salario <= 8000.00) {
        porcentagem = 10;
    } else if (salario > 8000.00) {
        porcentagem = 5;
    }

    let aumento = (salario * porcentagem) / 100;
    let novoSalario = salario + aumento;

    paragrafoResultado.innerHTML = "Novo salario = R$ " + novoSalario.toFixed(2) + "<br>" +
                                   "Aumento = R$ " + aumento.toFixed(2) + "<br>" +
                                   "Porcentagem = " + porcentagem + " %";
}