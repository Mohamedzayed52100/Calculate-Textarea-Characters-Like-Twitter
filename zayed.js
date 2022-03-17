var mytextarea = document.getElementById('textarea'),
    myspan = document.getElementById('span');
mytextarea.oninput = function() {

    myspan.textContent = 50 - this.value.length;
    if (myspan.textContent <= 10)
        myspan.style.color = 'red';
    else

        myspan.style.color = 'black';




}