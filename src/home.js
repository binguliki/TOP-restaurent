export default function homePage(){
    const div = document.createElement('div');
    div.id = 'home';
    div.className='tab-content active';

    const h1 = document.createElement('h1');
    h1.innerText = 'Welcome to Tasty Haven';

    const image = document.createElement('img');
    image.src = "https://source.unsplash.com/800x400/?restaurant,food";
    image.alt = "Delicious dish at Tasty Haven";

    const p1 = document.createElement('p');
    p1.textContent = "Tasty Haven is your go-to spot for hearty meals and warm hospitality. Since 2015, we've been serving up delicious dishes made with fresh, locally-sourced ingredients. Whether you're craving a cozy dinner or a quick lunch, our welcoming atmosphere and flavorful food will make every visit memorable.";
    
    const p2 = document.createElement('p');
    p2.textContent = "Join us today and discover why Tasty Haven is a favorite among food lovers!"

    div.append(...[h1, image, p1, p2]);
    return div;
}