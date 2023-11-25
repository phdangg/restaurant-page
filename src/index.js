import './style.css';
import Image1 from './restaurant.jpg';

const body = document.querySelector('body');
function headerComponent(){

    const headerDiv = document.getElementById("header");
    const p = document.createElement('p');
    p.textContent = "My Restaurant";
    const ul = document.createElement('ul');
    for(let i=1 ;i<= 3;i++){
        const li = document.createElement('li');
        const id = 'img'+i;
        li.setAttribute('id',id);
        li.textContent = "Image " + i;
        ul.appendChild(li);
    }
    headerDiv.appendChild(p);
    headerDiv.appendChild(ul);

    return headerDiv;
}
function contentComponent(option){
    const contentDiv = document.getElementById("content");
    if (option == null) option = 1;
    if (option == 1){
        const restaurantImg1 = new Image();
        restaurantImg1.src = Image1;
        contentDiv.appendChild(restaurantImg1);

        const p = document.createElement('p');
        p.textContent = "This is image 1";
        contentDiv.appendChild(p);


    }else if (option == 2){

    }else if (option == 3){
        
    }

    return contentDiv;
}
function component(){
    const element = document.createElement('div');
    element.className = "container";
    const contentDiv = contentComponent();
    const headerDiv = headerComponent();


    element.appendChild(headerDiv);
    element.appendChild(contentDiv);

    return element;
}
body.appendChild(component());