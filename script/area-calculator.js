function calculatorTriangleArea (){
    // get triangle base value base 
   const baseField = document.getElementById('triangle-base');
   const baseValueText = baseField.value;
   const base = parseFloat(baseValueText);
    // get triangle base value height
    const heightField = document.getElementById('height-field');
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText)
    const area = 0.5 * base * height;
    console.log(area)

    // show triangle area 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea (){
    const widthField = document.getElementById('rectangle-width');
    const widthFieldText = widthField.value;
    const width = parseFloat(widthFieldText);
    console.log(width)

    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldText = lengthField.value;
    const length = parseFloat(lengthFieldText);
    console.log(length) 

    // calculate rectangle are
    const area = width * length;

    // show rectangle area Element and set the value
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}