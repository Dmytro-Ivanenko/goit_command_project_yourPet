import PropTypes from 'prop-types';
import moment from 'moment';
import defaultImg from './defaultNewsImg.jpg';

import styles from './news_item.module.scss';

const NewsItem = ({ item }) => {
    const { url = '', text, title, imgUrl = defaultImg, date } = item;
    const formatedDate = moment(date).format('DD/MM/YYYY');

    return (
        <li className={styles.item}>
            <div className={styles.imgWrapper}>
                <img
                    className={styles.img}
                    src={imgUrl ? imgUrl : defaultImg}
                    alt="news"
                    onError={e => {
                        e.preventDefault();
                        // currentTarget.onerror = null; // prevents looping
                        e.currentTarget.src =
                            'https://i5.walmartimages.com/asr/b35f3428-5dc2-48f7-812e-c315e93d80b1.0995bd1ee0a57e814ab573d9d7276c2e.jpeg';
                    }}
                />
            </div>
            <div className={styles.content}>
                <div>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.text}>{text}</p>
                </div>
                <div className={styles.flexContainer}>
                    <span className={styles.date}>{formatedDate}</span>
                    <a
                        className={styles.url}
                        target="_blank"
                        rel="noreferrer"
                        href={url ? url : 'https://www.nytimes.com/'}
                    >
                        Read more
                    </a>
                </div>
            </div>
        </li>
    );
};

NewsItem.defaultProps = {
    imgUrl: 'https://i5.walmartimages.com/asr/b35f3428-5dc2-48f7-812e-c315e93d80b1.0995bd1ee0a57e814ab573d9d7276c2e.jpeg',
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
