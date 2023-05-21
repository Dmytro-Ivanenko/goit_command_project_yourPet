import { nanoid } from 'nanoid';
import cat from 'images/example/cat.jpg';

const items = [
    {
        _id: nanoid(),
        name: 'Cat',
        birthDate: '21-10-2022',
        breed: 'breed',
        comments:
            'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, hes a loyal and affectionate lap cat.',
        photoURL: cat,
    },
    {
        _id: nanoid(),
        name: 'Cat',
        birthDate: '21-10-2022',
        breed: 'breed',
        comments:
            'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, hes a loyal and affectionate lap cat.',
        photoURL: cat,
    },
];

export default items;
