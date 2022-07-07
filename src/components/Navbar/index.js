import { memo } from 'react'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const cx = classNames.bind(styles)
function Navbar({ name }) {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className={cx('content')}>
                    <div className={cx('home')}>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHouseChimney} />
                        </Link>
                    </div>
                    <div className={cx('path')}>/</div>
                    <div className={cx('subPath')}>
                        <Link to={`/${name}`}>{name}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Navbar)
