/**
 * Created by User on 2017/1/6.
 */


//我们这里使用CommonJS的风格
// function generateText() {
//     var element = document.createElement('h2');
//     element.innerHTML = "Hello h2 world@@@@";
//     return element;
// }
//
// module.exports = generateText;

export default function  () {
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 world hahaha";
    return element;
}