const createContactContent = () => {
    const contactContent = document.createElement('div');
    const contactHeadline = document.createElement('h1');
    const contactFon = document.createElement('p');
    const contactEmail = document.createElement('p');

    contactHeadline.innerText = `Feel free to get in touch with us!`;
    contactFon.innerText = 'Phone: 0123 45678910';
    contactFon.style.fontSize = '40px';
    contactEmail.innerText = 'Email: ayurvedic@restaurant.posteo.de';
    contactEmail.style.fontSize = '40px';
    
    contactContent.appendChild(contactHeadline);
    contactContent.appendChild(contactFon);
    contactContent.appendChild(contactEmail);

    return contactContent;
}

export {createContactContent}