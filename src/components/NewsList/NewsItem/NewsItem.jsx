import styles from './news_item.module.scss';
import moment from 'moment';
const NewsItem = ({ item }) => {
    const { url = '', text, title, imgUrl, date } = item;
    const formatedDate = moment(date).format('DD/MM/YYYY');

    return (
        <li className={styles.item}>
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={imgUrl} alt="news" />
            </div>
            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.text}>{text}</p>
                <div className={styles.flexContainer}>
                    {' '}
                    <span className={styles.date}>{formatedDate}</span>
                    <a className={styles.url} href={url}>
                        Read more
                    </a>
                </div>
            </div>
        </li>
    );
};

export default NewsItem;
