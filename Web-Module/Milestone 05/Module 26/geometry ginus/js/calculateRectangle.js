function calculateRectangle(){
    const width = document.getElementById("width");
    const width_text = width.value;
    const rectangle_width_value = parseFloat(width_text);
    width.value = "";

    // console.log(rectangle_width_value);
    const length = document.getElementById("length");
    const length_text = length.value;
    const rectangle_length_value = parseFloat(length_text);
    length.value = "";
    // console.log(rectangle_length_value);

    const area2 = rectangle_width_value * rectangle_length_value;
    
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area2;
}