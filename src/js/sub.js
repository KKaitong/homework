/**
 * Created by User on 2017/1/6.
 */
//我们这里使用CommonJS的风格
function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 world lalal";
    return element;
}

module.exports = generateText;