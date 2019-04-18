var indexActive = 0;
var activeTab;
var activeContent;
var dataArray = [];

document.addEventListener("click", function(e) {
    
    var _this = e.target;
    
    if(_this.matches('.submit')) {

        var tabName = document.querySelector('.tab-item-name');

        dataArray.push({
            tabName:tabName.value
        });

        createTab(tabName.value, indexActive);
        createTabContent(tabName.value, indexActive);

        indexActive++;

        document.querySelector('.tab-item-name').value = '';

    }

    if(_this.matches('.item')) {

        clearTabButton();
        clearTabContent();
        
        var idItem = _this.getAttribute('data-id');
        activeTab = _this.getAttribute('data-id');

        var idContent = Array.prototype.slice.call(document.querySelectorAll(".tabs__item"), 0);

        for(var i = 0; i < idContent.length; i++) {
            
            if(idItem === idContent[i].getAttribute('data-id')) {
                
                _this.classList.add('active-button');
                idContent[i].classList.add('active-content');

                activeContent = idContent[i];
                

                fade(activeContent);

            }

        }

    }

    if(_this.matches('.submit-todo-item')) {

        // var todoText = document.getElementsByClassName('todo-text').value;
        var todoText = activeContent.getElementsByTagName('input')[0];
        var li = document.createElement('li');
        var p = document.createElement('p');

        p.textContent = todoText.value;

        li.append(p);

        activeContent.querySelector('.todo-items-list').append(li);
        todoText.value = '';

    }

    

});

function createTabContent(tabName, indexActive) {

    var tabItemBlock = document.createElement('div');
    var h3 = document.createElement('h3');
    var ul = document.createElement('ul');
    var createToDo = document.createElement('div');
    var inputText = document.createElement('input');
    var inputSubmit = document.createElement('input');

    inputText.setAttribute('type', 'text');
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'OK');
    

    tabItemBlock.classList.add('tabs__item');
    // tabItemBlock.classList.add('active-content');
    createToDo.classList.add('create-todo');
    inputSubmit.classList.add('submit-todo-item');
    ul.classList.add('todo-items-list');
    inputText.classList.add('todo-text');
    
    inputText.setAttribute('data-id', indexActive);
    tabItemBlock.setAttribute('data-id', indexActive);

    h3.textContent = tabName;

    tabItemBlock.append(h3);
    tabItemBlock.append(ul);
    createToDo.append(inputText);
    createToDo.append(inputSubmit);
    tabItemBlock.append(createToDo);


    document.querySelector('.tabs__content').append(tabItemBlock);

}

function createTab(tabName, indexActive) {
    
    var li = document.createElement('li');

    li.setAttribute('data-id', indexActive);

    li.classList.add('item');

    li.textContent = tabName;

    document.querySelector('.items').append(li);

}

function createToDo() {
    
}

function clearTabContent() {

    var allTabItems = document.querySelectorAll('.tabs__item');
    
    for(var j = 0; j < allTabItems.length; j++) {

        allTabItems[j].classList.remove('active-content');

    }

}

function clearTabButton() {

    var allTabButtons = document.querySelectorAll('.item');
    
    for(var k = 0; k < allTabButtons.length; k++) {

        allTabButtons[k].classList.remove('active-button')

    }

}

function fade() {

    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {

    if (op >= 1){
        clearInterval(timer);
    }

    activeContent.style.opacity = op;
    activeContent.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
    }, 20);

}

