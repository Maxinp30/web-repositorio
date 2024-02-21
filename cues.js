function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('oculto');
}


document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('toggle');
    toggle.addEventListener('change', function() {
        var lista = document.querySelector('.lista');
        if (this.checked) {
            lista.style.display = 'block';
        } else {
            lista.style.display = 'none';
        }
    });
});
