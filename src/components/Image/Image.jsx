// import ItemsDesktop from './ItemsDesktop';
// import ItemsTablet from './ItemsTablet';
// import ItemsMobile from './itemsMobile';

import desktopPicture from '../../images/pictures-desktop.jpg';
import mobilePicture from '../../images/pictures-mobile.jpg';
import tabletPicture from '../../images/pictures-tablet.jpg';

const Image = () => {
    const imageMainPage = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            return mobilePicture;
        } else if (windowWidth >= 768 && windowWidth < 1280) {
            return tabletPicture;
        } else {
            return desktopPicture;
        }
    };

    return (
        <>
            <div>
                <img src={imageMainPage} alt="" />
            </div>
        </>
    );
};

export default Image;
