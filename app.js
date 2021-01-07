window.addEventListener('DOMContentLoaded', function() {
    
    let button = document.createElement('button');
    let buttonText = document.createTextNode('Objective 1');
    document.body.appendChild(button);
    button.appendChild(buttonText);
    button.addEventListener('click', function(event) {
        alert('You clicked it!');
    });

});