import styles from './OurFriendsPage.module.scss';
import React from 'react';
// import Loader from "shared/components/Loader/Loader";
import PageTitle from 'shared/components/PageTitle';
import OurFriendsList from 'components/OurFriends/OurFriendList/OurFriendsList';
import OurFriendsItem from 'components/OurFriends/OurFriendItem/OurFriendsItem';


const OurFriendsPage = () => {
    return (
        <>
            <div className={styles.container}>
                <PageTitle text={'Our friends'} />
            
                <OurFriendsList />
               
                
            </div>
        </>
    );
};

export default OurFriendsPage;
