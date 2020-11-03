import {createTopArea, createHomeContent} from './init';
import {createMenuContent} from './menu';
import {createContactContent} from './contact';


const displayRestaurantModule  = (function(){

    //load and display startPage
    const content = document.getElementById('content');
    const navigationTabArray = createTopArea();
    const homeCon = createHomeContent();
    content.appendChild(homeCon);
    let currentContent = homeCon;

    //load and store content of other pages
    const contactCon = createContactContent();
    const menuCon = createMenuContent();

    implementTabLogic();

    function implementTabLogic () {
        navigationTabArray.forEach(tab => {
            tab.addEventListener('click', changePage);
        });        
    }

    function changePage (event) {
        removeContent();
        loadCurrentContent(event); 
        changeActiveTab(event);
    }

    function removeContent () {
        content.removeChild(currentContent);
    }

    function loadCurrentContent (event) {
        const idCurrentTab = event.target.dataset.id;
        currentContent = (idCurrentTab === 'homeContent') ? homeCon : 
                        (idCurrentTab === 'menuContent') ? menuCon :
                        contactCon;

        content.appendChild(currentContent);
    }

    function changeActiveTab (event) {
        const priorTab = navigationTabArray.find(tab => {
            return tab.classList.contains('activeTab');
        }); 
        priorTab.classList.remove('activeTab');
        event.target.classList.add('activeTab');
    }
})();