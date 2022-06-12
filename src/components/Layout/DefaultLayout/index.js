import classNames from 'classnames/bind'
import Footer from '../Footer'
import Header from '../Header'
import styles from './DefaultLayout.module.css'

const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout
