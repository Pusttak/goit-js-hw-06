const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const listIngredientsRef = document.querySelector('#ingredients');

const createIngredientsArray = ingredients => ingredients.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');

    return listItem;
});

const listItemsRef = createIngredientsArray(ingredients);

listIngredientsRef.append(...listItemsRef);



