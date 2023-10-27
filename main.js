
            function calculate() {
                const num1 = parseFloat(document.getElementById("num1").value);
                const num2 = parseFloat(document.getElementById("num2").value);
                const resultElement = document.getElementById("result");
                const errorMessage = document.getElementById("error-message");

                errorMessage.textContent = "";

                const selectedOperator = document.querySelector('input[name="operator"]:checked');
                if (!selectedOperator) {
                    errorMessage.textContent = "Vui lòng chọn một phép tính.";
                    resultElement.value = "";
                    return;
                }

                const operator = selectedOperator.value;

                if (isNaN(num1) || isNaN(num2)) {
                    errorMessage.textContent = "Số thứ nhất và số thứ hai phải là số thực.";
                    resultElement.value = "";
                } else {
                    switch (operator) {
                        case '+':
                            resultElement.value = num1 + num2;
                            break;
                        case '-':
                            resultElement.value = num1 - num2;
                            break;
                        case '*':
                            resultElement.value = num1 * num2;
                            break;
                        case '/':
                            if (num2 === 0) {
                                errorMessage.textContent = "Không thể chia cho 0.";
                                resultElement.value = "";
                            } else {
                                resultElement.value = num1 / num2;
                            }
                            break;
                    }
                }
            }

      
    