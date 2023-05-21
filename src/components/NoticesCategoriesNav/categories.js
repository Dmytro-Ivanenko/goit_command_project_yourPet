import { nanoid } from 'nanoid';

const publicCategories = [
    {
        id: nanoid(),
        to: '/notices/sell',
        text: 'sell',
    },
    {
        id: nanoid(),
        to: '/notices/lost-found',
        text: 'lost/found',
    },
    {
        id: nanoid(),
        to: '/notices/for-free',
        text: 'in good hands',
    },
];

const privateCategories = [
    {
        id: nanoid(),
        to: '/notices/favorite',
        text: 'favorite ads',
    },
    {
        id: nanoid(),
        to: '/notices/own',
        text: 'my ads',
    },
];

const categories = { publicCategories, privateCategories };

export default categories;
