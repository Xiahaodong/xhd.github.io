//op代表操作符
function compute(op){
    var num1 =Number(document.getElementById("num1").value);
    var num2 =Number(document.getElementById("num2").value);
    console.log(num1);
    console.log(num2);
    var result;
    if(isNaN(num1) || isNaN(num2))
    {
        alert("您输入的数字有误！");
    }
    else
    {
        switch(op)
        {
            case "+":
                result = num1+num2;
                break;
            case "-":
                result = num1-num2;
                break;
            case "*":
                result = num1*num2;
                break;
            case "/":
                if(num2==0)
                {
                    alert("除数不能为0");
                }
                else
                {
                    result = num1/num2;
                }
                break;   
        }
    }
    document.getElementById("result").value = result.toFixed(2);
}