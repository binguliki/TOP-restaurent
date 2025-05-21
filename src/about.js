export default function aboutPage() {
    const div = document.createElement('div');
    div.id = 'about';
    div.className = 'tab-content';

    const h2 = document.createElement('h2');
    h2.textContent = 'About Tasty Haven';

    const image = document.createElement('img');
    image.src = "https://i.pinimg.com/474x/d2/35/47/d2354797cfb995122e8bf0248cb1fd76.jpg";
    image.alt = "Our chef at Tasty Haven";

    const p1 = document.createElement('p');
    p1.textContent = "Founded in 2015, Tasty Haven is built on a passion for great food and community. Our team of skilled chefs uses only the freshest ingredients to create dishes that warm the heart and soul.";

    const p2 = document.createElement('p');
    p2.textContent = "Our mission is to make every guest feel like family. From our cozy dining room to our friendly staff, we’re here to create lasting memories with every meal.";

    div.append(h2, image, p1, p2);
    return div;
}
