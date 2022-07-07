import classNames from 'classnames/bind'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHouseChimney, faPhone } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
const contact = [
    {
        icon: <FontAwesomeIcon icon={faHouseChimney} />,
        content: 'Đại học Bách Khoa Hà Nội',
    },
    {
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        content: 't20vodich@gmail.com',
    },
    {
        icon: <FontAwesomeIcon icon={faPhone} />,
        content: '01234567890',
    },
]
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className={cx('content', 'row')}>
                    <div className={cx('logoDesc', 'l-3', 'col', 'm-6', 'c-6')}>
                        <div className={cx('logo')}>
                            <Link to="/">
                                <img
                                    src="logo.png"
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <div className={cx('desc')}>
                            Cửa hàng T20 cung cấp cho quý khách những mẫu giày chất lượng nhất.
                        </div>
                    </div>
                    <div className={cx('about', 'l-3', 'col', 'm-6', 'c-6')}>
                        <div className={cx('aboutTitle')}>Information</div>
                        <Link
                            to="/about"
                            className={cx('aboutContent')}
                        >
                            About Us
                        </Link>
                    </div>
                    <div className={cx('contact', 'l-3', 'col', 'm-6', 'c-6')}>
                        <div className={cx('contactTitle')}>Contact Us</div>
                        {contact.map((item, index) => (
                            <div
                                className={cx('contactItem')}
                                key={index}
                            >
                                <div className={cx('contactIcon')}>{item.icon}</div>
                                <div className={cx('contactContent')}>{item.content}</div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('follow', 'l-3', 'col', 'm-6', 'c-6')}>
                        <div className={cx('followTitle')}>Follow Us</div>
                        <div className={cx('followContent')}>
                            <div className={cx('followIcon')}>
                                <FontAwesomeIcon
                                    className={cx('facebook')}
                                    icon={faFacebook}
                                />
                            </div>
                            <div className={cx('followIcon')}>
                                <FontAwesomeIcon
                                    className={cx('insta')}
                                    icon={faInstagram}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
