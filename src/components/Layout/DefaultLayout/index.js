import classNames from 'classnames/bind'
import { useState, useMemo } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './DefaultLayout.module.css'

const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    const [keyHeader, setKeyHeader] = useState(Math.random())
    const header = useMemo(() => <Header key={keyHeader} />, [])
    const footer = useMemo(() => <Footer />, [])
    return (
        <div className={cx('wrapper')}>
            {header}
            <div className={cx('container')}>{children}</div>
            {footer}
        </div>
    )
}

export default DefaultLayout
