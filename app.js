window.addEventListener('DOMContentLoaded', function() {
    
    //Creates alert when 1st button (objective 1) pressed
    let button = document.createElement('button');
    let buttonText = document.createTextNode('Objective 1');
    document.body.appendChild(button);
    button.appendChild(buttonText);
    button.addEventListener('click', function(event) {
        alert('You clicked it!');
    });

    //Creates alert with text input (objective 2)
    let button2 = document.getElementById('obj2btn');
    button2.addEventListener('click', function() {
        let boxText = document.getElementById('obj2text').value;
        alert(boxText);
    });

    //Changes div background (objective 3)
    let div3 = document.getElementById('obj3');
    div3.addEventListener('mouseover', function() {
        div3.style.backgroundColor = 'red';
    });
    div3.addEventListener('mouseout', function() {
        div3.style.backgroundColor = 'white';
    });

    //Changes p font color (objective 4)
    let p = document.getElementById('obj4');
    p.addEventListener('click', function() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        p.style.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';  
    });

    //Adds span with my name (objective 5)
    let div5 = document.getElementById('obj5div');
    let button5 = document.getElementById('obj5btn');
    button5.addEventListener('click', function() {
        let span5 = document.createElement('span');
        let spanText = document.createTextNode('Will Seese');
        div5.appendChild(span5);
        span5.appendChild(spanText);
    });

    //Fills in a list with friends' names from an array (Objective 6)
    let friends = ['Amber', 'Ethan', 'Kendra', 'Adam', 'Rudy', 'Moe', 'Rory', 'AJ', 'Justin', 'Bryan'];
    let list6 = document.getElementById('obj6ul');
    let button6 = document.getElementById('obj6btn');
    let counter = 0;
    button6.addEventListener('click', function() {
        if(counter < 10) {
            let liText = document.createTextNode(friends[counter]);
            let li = document.createElement('li');
            list6.appendChild(li);
            li.appendChild(liText);
            counter++;
        };
    });

});