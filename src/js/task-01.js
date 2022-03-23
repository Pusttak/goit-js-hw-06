// Number of categories: 3

const categoriesRef = document.querySelector('#categories');
console.log('Number of categories:', categoriesRef.children.length);

categoriesRef.querySelectorAll('.item').forEach(item => {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
});
