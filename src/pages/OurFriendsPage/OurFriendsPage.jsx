// import Loader from "shared/components/Loader/Loader";
import PageTitle from 'shared/components/PageTitle';
import OurFriendsList from 'components/OurFriends/OurFriendList';

import styles from './OurFriendsPage.module.scss';

const OurFriendsPage = () => {
    return (
        <div className={styles.container}>
            <PageTitle text={'Our friends'} />
            <OurFriendsList />
        </div>
    );
};

export default OurFriendsPage;
