const createTopArea = () =>{
    const content = document.querySelector('#content');
    const topImage = document.createElement('img');
    const tabContainer = document.createElement('ul');
    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');

    topImage.src = 'img/spices.jpg';
    topImage.alt = 'Ayurvedic spices';
    homeTab.innerText = 'Home';
    homeTab.dataset.id = 'homeContent';
    homeTab.classList.add('activeTab');
    menuTab.innerText = 'Menu';
    menuTab.dataset.id = 'menuContent';
    contactTab.innerText = 'Contact';
    contactTab.dataset.id = 'contactContent';
    
    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);
    content.appendChild(tabContainer);
    content.appendChild(topImage);

    return [homeTab, menuTab, contactTab];
}

const createHomeContent = () => {
    const homeContent = document.createElement('div');
    const headline = document.createElement('h1');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');

    headline.innerText = `Frey's wonderful Ayurvedic Restaurant`;
    para1.innerText = 'Hometext Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ornare dui, a tempor tortor. Ut tincidunt viverra tellus eget lobortis. Duis ut sodales magna, nec rhoncus orci. Nulla risus augue, elementum sit amet orci vel, imperdiet vulputate justo. Nam diam lectus, consectetur sed nunc et, mattis rutrum metus. Integer eget fermentum eros. Fusce tincidunt sapien massa, ac lacinia risus consectetur quis. Nulla maximus pellentesque leo quis pretium. Vivamus porttitor libero quam, et tempus sem varius nec. Quisque ut nisi eget ipsum dapibus eleifend a tincidunt leo. Duis suscipit sem vel lectus feugiat rhoncus. Integer id orci ac odio molestie tristique.';
    para2.innerText = 'Nunc massa nisi, dignissim eu sapien sit amet, accumsan sagittis urna. Aenean porta enim in lorem ornare, sed malesuada sem dignissim. Nam eu leo quis ipsum tincidunt aliquam sit amet vel arcu. Morbi nec nunc vitae odio dictum pulvinar quis quis purus. Fusce aliquam in ipsum quis porta. Phasellus faucibus felis id diam lacinia, sit amet elementum magna fermentum. Vivamus laoreet enim sit amet elit eleifend, eu dapibus orci lacinia. Integer id varius nibh. Praesent enim diam, vehicula imperdiet mollis at, commodo eu odio. Etiam lorem ante, tempus non tortor non, suscipit tempor mauris. Sed egestas risus id tortor pulvinar, non faucibus neque varius. Duis elementum viverra dolor at efficitur.';
    para3.innerText = 'Duis sit amet libero interdum, dignissim risus non, vestibulum massa. Nam in venenatis neque. Nullam tincidunt augue vel varius vulputate. Donec vestibulum, quam quis sodales ultrices, neque tortor interdum est, sed faucibus sem quam ut mauris. Mauris consectetur lacus sapien, id viverra ligula elementum sit amet. Phasellus posuere, nisi sit amet lacinia convallis, ex velit elementum nunc, sed blandit quam magna vehicula orci. Vivamus sagittis, est luctus pretium sollicitudin, tortor ex imperdiet neque, et imperdiet risus augue vitae arcu. Vivamus ac pulvinar arcu, suscipit consequat lectus.';   

    homeContent.appendChild(headline);
    homeContent.appendChild(para1);
    homeContent.appendChild(para2);
    homeContent.appendChild(para3);

    return homeContent; 
}

export {createTopArea, createHomeContent}