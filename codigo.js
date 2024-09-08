// Función para filtrar recetas por categoría
function filtrarCategoria(categoria) {
    let recetas = document.querySelectorAll('.recipe-card');
    recetas.forEach(receta => {
        if (categoria === '' || receta.getAttribute('data-category') === categoria) {
            receta.style.display = 'block';
        } else {
            receta.style.display = 'none';
        }
    });
}

// Función para buscar recetas por nombre
function filtrarRecetas() {
    let input = document.getElementById('search').value.toLowerCase();
    let recetas = document.querySelectorAll('.recipe-card');
    recetas.forEach(receta => {
        let titulo = receta.querySelector('h3').textContent.toLowerCase();
        if (titulo.includes(input)) {
            receta.style.display = 'block';
        } else {
            receta.style.display = 'none';
        }
    });
}
