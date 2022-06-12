import classNames from 'classnames/bind'
import Footer from '../Footer'
import Header from '../Header'
import styles from './LayoutSideBar.module.css'
import SideBar from './SideBar'

const cx = classNames.bind(styles)
function LayoutSideBar({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default LayoutSideBar
