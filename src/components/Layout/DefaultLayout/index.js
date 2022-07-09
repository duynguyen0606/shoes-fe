import classNames from 'classnames/bind'
import { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './DefaultLayout.module.css'

const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    const [keyHeader, setKeyHeader] = useState(Math.random());
    return (
        <div className={cx('wrapper')}>
            <Header key={keyHeader} />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout
