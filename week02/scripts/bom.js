const button = document.querySelector('button');
const deletebutton = document.createElement('button');
const list = document.querySelector('#lista');
const input = document.querySelector('#favchap');

button.addEventListener('click', function(){
    
     if(input.value.trim() !== ''){
        const li = document.createElement('li');
        
            
        deletebutton.textContent = '❌'; 
        li.append(deletebutton);
        list.append(li);
        input.value = '';
    }

});

deletebutton.addEventListener('click', function(){

    list.removeChild(li);
    input.focus();
    input.value = '';


});




