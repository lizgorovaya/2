document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    const products = [
        {
            name: 'Разноцветный квадратный',
            img: 'photo/square.png',
            alt: 'Квадратный Pop It'
        },
        {
            name: 'Among Us, мраморный',
            img: 'photo/amongus.png',
            alt: 'Among Us Pop It'
        },
        {
            name: 'Разноцветный круглый',
            img: 'photo/round.png',
            alt: 'Круглый Pop It'
        }
    ];

    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.alt}" class="product__image">
            <p class="product__name">${product.name}</p>
            <button class="product__button">КУПИТЬ</button>
        `;
        productList.appendChild(productElement);
    });

    const buyNowBtn = document.getElementById('buy-now-btn');
    buyNowBtn.addEventListener('click', () => {
        alert('Вы нажали кнопку "КУПИТЬ"!');
    });

    productList.addEventListener('click', (e) => {
        if (e.target.classList.contains('product__button')) {
            const productName = e.target.previousElementSibling.textContent;
            alert(`Вы выбрали продукт: ${productName}`);
        }
    });
});
