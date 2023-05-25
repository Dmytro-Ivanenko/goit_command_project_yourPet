import sendRequest from './sendRequest';

const serverRequestHandler = async (data, fileInputRef) => {
    const { birth, breed, comments, name, option } = data;

    if (option !== 'pet') {
        let { addTitle, location, option, sex, price } = data;

        switch (option) {
            case 'hands': {
                option = 'in good hands';
                break;
            }
            case 'lostFound': {
                option = 'lost/found';
                break;
            }
            case 'pet': {
                option = 'my pet';
                break;
            }
            default:
                break;
        }

        let obj = {
            name,
            breed,
            sex,
            location,
            comments,
            date: birth,
            title: addTitle,
            category: option,
            image: fileInputRef.current.files[0],
        };

        if (option !== 'sell') {
            await sendRequest('/notice', obj);
            return;
        } else {
            obj.price = price;
            await sendRequest('/notice', obj);
            return;
        }
    } else {
        await sendRequest('/yourPets', {
            comments,
            breed,
            name,
            birthDate: birth,
            petsAvatar: fileInputRef.current.files[0],
        });
        return;
    }
};
export default serverRequestHandler;
