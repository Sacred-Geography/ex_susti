document.getElementById('quadraticForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById('coeffA').value);
    const b = parseFloat(document.getElementById('coeffB').value);
    const c = parseFloat(document.getElementById('coeffC').value);

    // Validar que sea una ecuación de segundo grado
    if (a === 0) {
        document.getElementById('rootsResult').textContent = "No es una ecuación de segundo grado (a no puede ser cero).";
        return;
    }

    // Mostrar la ecuación
    document.getElementById('equationResult').innerHTML = `${a}(x<sup>2</sup>) + ${b}x + ${c} = 0`;

    // Cálculo de las raíces
    const discriminant = b * b - 4 * a * c;
    let roots;
    let rootType;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        roots = `X<sub>1</sub> = ${root1.toFixed(2)}<br>X<sub>2</sub> = ${root2.toFixed(2)}`;
        rootType = "Dos raíces reales diferentes";
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        roots = `X<sub>1</sub> = ${root.toFixed(2)}`;
        rootType = "Dos raíces reales iguales";
    } else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        roots = `X<sub>1</sub> = ${realPart} + ${imaginaryPart}i<br>X<sub>2</sub> = ${realPart} - ${imaginaryPart}i`;
        rootType = "Dos raíces complejas conjugadas";
    }

    document.getElementById('rootsResult').innerHTML = 
        `<strong>Tipo de raíces:</strong><br>${rootType}<br><br>` +
        `<strong>Raíces:</strong><br>${roots}`;
});