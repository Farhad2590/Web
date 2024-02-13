function calculateTriangle(){
    const base = document.getElementById("base");
    const base_text = base.value;
    const triangle_base_value = parseFloat(base_text)
    base.value = "";
    const height = document.getElementById("height");
    const height_text = height.value;
    const triangle_height_value = parseFloat(height_text)
    height.value = "";
    
    const area = 0.5 * triangle_base_value * triangle_height_value;

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

}

