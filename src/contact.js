export default function contentPage() {
    const div = document.createElement('div');
    div.id = 'contact';
    div.className = 'tab-content';

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';

    const pIntro = document.createElement('p');
    pIntro.textContent = 'Reach out to us or book a table!';

    // Create form
    const form = document.createElement('form');
    form.className = 'contact-form';

    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.placeholder = 'Name';
    inputName.required = true;

    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.placeholder = 'Email';
    inputEmail.required = true;

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Message';
    textarea.rows = 4;

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Send';

    form.append(inputName, inputEmail, textarea, button);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-7890';

    const email = document.createElement('p');
    email.textContent = 'Email: info@tastyhaven.com';

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Flavor Street, Food City';

    div.append(h2, pIntro, form, phone, email, address);

    return div;
}
