window.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('myElement');
    var changeTextBtn = document.getElementById('changeTextBtn');
    changeTextBtn.addEventListener('click', function() {
        element.innerHTML = '¡Texto cambiado!';
    });
});
