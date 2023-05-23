import sendRequest from './sendRequest';

const serverRequestHandler = async (data, fileInputRef) => {
    const { birth, breed, comments, name } = data;

    if (data.option !== 'pet') {
        let { addTitle, location, option, price = null, sex } = data;

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
        sendRequest('/notice', {
            name,
            breed,
            sex,
            location,
            price,
            comments,
            date: birth,
            title: addTitle,
            category: option,
            image: fileInputRef.current.files[0],
        });
    } else {
        sendRequest('/yourPets', {
            comments,
            breed,
            name,
            birthDate: birth,
            petsAvatar: fileInputRef.current.files[0],
        });
    }
};
export default serverRequestHandler;
