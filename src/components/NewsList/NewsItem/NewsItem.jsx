import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './news_item.module.scss';

const NewsItem = ({ item }) => {
    const { url = '', text, title, imgUrl, date } = item;
    const formatedDate = moment(date).format('DD/MM/YYYY');

    return (
        <li className={styles.item}>
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={imgUrl} alt="news" />
            </div>
            <div className={styles.content}>
                <div>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.text}>{text}</p>
                </div>
                <div className={styles.flexContainer}>
                    <span className={styles.date}>{formatedDate}</span>
                    <a className={styles.url} target="_blank" rel="noreferrer" href={url}>
                        Read more
                    </a>
                </div>
            </div>
        </li>
    );
};

NewsItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string,
        text: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }).isRequired,
};

export default NewsItem;
