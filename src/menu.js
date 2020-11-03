const createMenuContent = () => {
    const menuContent = document.createElement('div');
    const menuHeadline = document.createElement('h1');
    const menuPara1 = document.createElement('p');
    const menuPara2 = document.createElement('p');
    const menuPara3 = document.createElement('p');

    menuHeadline.innerText = `This is our wonderful Menu`;
    menuPara1.innerText = 'Menutext Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ornare dui, a tempor tortor. Ut tincidunt viverra tellus eget lobortis. Duis ut sodales magna, nec rhoncus orci. Nulla risus augue, elementum sit amet orci vel, imperdiet vulputate justo. Nam diam lectus, consectetur sed nunc et, mattis rutrum metus. Integer eget fermentum eros. Fusce tincidunt sapien massa, ac lacinia risus consectetur quis. Nulla maximus pellentesque leo quis pretium. Vivamus porttitor libero quam, et tempus sem varius nec. Quisque ut nisi eget ipsum dapibus eleifend a tincidunt leo. Duis suscipit sem vel lectus feugiat rhoncus. Integer id orci ac odio molestie tristique.';
    menuPara2.innerText = 'Nunc massa nisi, dignissim eu sapien sit amet, accumsan sagittis urna. Aenean porta enim in lorem ornare, sed malesuada sem dignissim. Nam eu leo quis ipsum tincidunt aliquam sit amet vel arcu. Morbi nec nunc vitae odio dictum pulvinar quis quis purus. Fusce aliquam in ipsum quis porta. Phasellus faucibus felis id diam lacinia, sit amet elementum magna fermentum. Vivamus laoreet enim sit amet elit eleifend, eu dapibus orci lacinia. Integer id varius nibh. Praesent enim diam, vehicula imperdiet mollis at, commodo eu odio. Etiam lorem ante, tempus non tortor non, suscipit tempor mauris. Sed egestas risus id tortor pulvinar, non faucibus neque varius. Duis elementum viverra dolor at efficitur.';
    menuPara3.innerText = 'Duis sit amet libero interdum, dignissim risus non, vestibulum massa. Nam in venenatis neque. Nullam tincidunt augue vel varius vulputate. Donec vestibulum, quam quis sodales ultrices, neque tortor interdum est, sed faucibus sem quam ut mauris. Mauris consectetur lacus sapien, id viverra ligula elementum sit amet. Phasellus posuere, nisi sit amet lacinia convallis, ex velit elementum nunc, sed blandit quam magna vehicula orci. Vivamus sagittis, est luctus pretium sollicitudin, tortor ex imperdiet neque, et imperdiet risus augue vitae arcu. Vivamus ac pulvinar arcu, suscipit consequat lectus.';   
    
    menuContent.appendChild(menuHeadline);
    menuContent.appendChild(menuPara1);
    menuContent.appendChild(menuPara2);
    menuContent.appendChild(menuPara3);

    return menuContent;
}

export {createMenuContent}