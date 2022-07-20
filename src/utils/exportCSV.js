import React from 'react'
import { CSVLink } from 'react-csv'
import styles from '../pages/ManageOrder/ManageOrder.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
export const ExportReactCSV = ({ csvData, fileName }) => {
    return (
        <button>
            <CSVLink
                className={cx('btnExp')}
                data={csvData}
                filename={fileName}
            >
                Xuất Excel
            </CSVLink>
        </button>
    )
}
