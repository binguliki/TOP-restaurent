export default function menuPage() {
    const div = document.createElement('div');
    div.id = 'menu';
    div.className = 'tab-content';

    const heading = document.createElement('h2');
    heading.textContent = 'Our Menu';

    div.appendChild(heading);

    const menuItems = [
        {
            name: 'Margherita Pizza',
            price: '$10.99',
            description: 'Fresh mozzarella, basil, and tomato sauce on a crispy crust.'
        },
        {
            name: 'Grilled Chicken Salad',
            price: '$8.99',
            description: 'Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.'
        },
        {
            name: 'Chocolate Brownie',
            price: '$5.99',
            description: 'Warm brownie served with a scoop of vanilla ice cream.'
        }
    ];

    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';

        const h3 = document.createElement('h3');
        h3.textContent = item.name;

        const priceDiv = document.createElement('div');
        priceDiv.className = 'price';
        priceDiv.textContent = item.price;

        const p = document.createElement('p');
        p.textContent = item.description;

        itemDiv.append(h3, priceDiv, p);
        div.appendChild(itemDiv);
    });

    return div;
}
