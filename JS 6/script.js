const products = [
	{
		id: 1,
		name: 'Ручка',
		price: 19,
	},
	{
		id: 2,
		name: 'Карандаш',
		price: 5,
	},
	{
		id: 3,
		name: 'Маркер',
		price: 37,
	},
	{
		id: 4,
		name: 'Тетрадка',
		price: 14,
	},
	{
		id: 5,
		name: 'Книга',
		price: 58,
	}
];

function displayProducts(products) {
	const wrapper = document.getElementById('products');
	for (const product of products) {
		const name = document.createElement('div');
		const price = document.createElement('span');
		const button = document.createElement('button');

		name.innerHTML = product.name;
		price.innerHTML = ` - ${product.price} рублей.`;
		button.innerHTML = 'Купить';
		button.id = product.id;
		button.classList.add('button');

		wrapper.appendChild(name);
		name.appendChild(price);
		name.appendChild(button);
	}
}

displayProducts(products);

const buttons = document.getElementsByClassName('button');
for (const button of buttons) {
	button.addEventListener('click', (event) => {
		const selectProduct = products.find((i) => i.id === +event.srcElement.id);
		displayProductCart(selectProduct)
	});
}

function displayProductCart(product) {
		const cart = document.getElementById('cart');
		const summ = document.getElementById('summ');

		const name = document.createElement('div');
		const price = document.createElement('span');
		
		name.innerHTML = product.name;
		price.innerHTML = ` - ${product.price} рублей.`;

		summ.innerHTML = +summ.innerHTML + +product.price;

		cart.appendChild(name);
		name.appendChild(price);
}