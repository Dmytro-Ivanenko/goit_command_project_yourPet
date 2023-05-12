const publicCategories = [
    {
        to: '/notices/sell',
        text: 'sell',
    },
    {
        to: '/notices/lost-found',
        text: 'lost/found',
    },
    {
        to: '/notices/for-free',
        text: 'in good hands',
    },
];

const privateCategories = [
    {
        to: '/notices/favorite',
        text: 'favorite ads',
    },
    {
        to: '/notices/own',
        text: 'my ads',
    },
];

const categories = { publicCategories, privateCategories };

export default categories;
