var result; //定义计算结果
//清空函数
function cle(){
    document.getElementById('showValue').value='';
}
/*计算器主要函数：
1.使用带参函数，按下每一个按钮就将按钮的值显示在文本框中
2.+=后面输入的数或运算符不会覆盖前面的
3.并使用eval将整个文本框的值看做一个字符串运算
4.赋值给result*/
function show(op){
    result = eval(document.getElementById('showValue').value+=op);
}
//按下=输出结果
function re(op1){
    document.getElementById('showValue').value+=op1+result;
}




