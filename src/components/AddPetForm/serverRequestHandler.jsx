import sendRequest from './sendRequest';

const serverRequestHandler = (data, fileInputRef) => {
    console.log('in handler');
    const { birth, breed, comments, name, option } = data;

    if (option !== 'pet') {
        console.log('not pet');
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
                return;
        }
        console.log('modif option');
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
            console.log('not sell');
            sendRequest('/notice', obj);
            return;
        } else {
            console.log('in sell');
            obj.price = price;
            console.log('obj.price', obj.price);
            sendRequest('/notice', obj);

            return;
        }
    } else {
        console.log('in serverRequestHandler - pet');
        sendRequest('/yourPets', {
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
