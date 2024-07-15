import { CSSProperties } from 'react'
import { toast } from 'react-toastify'
import styles from './toast.module.css'
import { capitalizeFirstCharacter } from '../../../utils/stringFormatter'

type ToastProps = {
    type: 'success' | 'error' | 'info'
    message: string
}

const SuccessToastStyle: CSSProperties = {
    border: '1px solid #43A047',
    background: '#E8F5E9',
    borderRadius: '8px',
    boxShadow: 'none',
    color: '#344054',
}

const ErrorToastStyle: CSSProperties = {
    border: '1px solid #F44336',
    background: '#FFEBEE',
    borderRadius: '8px',
    boxShadow: 'none',
    color: '#344054',
}

const InfoToastStyle: CSSProperties = {
    border: '1px solid #0A5EDB',
    background: '#F3FAFD',
    borderRadius: '8px',
    boxShadow: 'none',
    color: '#344054',
}

const SuccessIcon = () => <i className="icon-check-circle" />
const ErrorIcon = () => <i className="icon-x-circle" />
const InfoIcon = () => <i className="icon-info" />

const getCustomization = (type: 'success' | 'error' | 'info') => {
    if (type === 'success') return { icon: <SuccessIcon />, style: SuccessToastStyle }
    else if (type === 'error') return { icon: <ErrorIcon />, style: ErrorToastStyle }
    else return { icon: <InfoIcon />, style: InfoToastStyle }
}

export const Toast = (props: ToastProps) => {
    const { icon, style } = getCustomization(props.type)

    const Body = () => (
        <div className={styles.container}>
            {icon}
            <div className={styles.body}>
                <h4>{`${capitalizeFirstCharacter(props.type)}!`}</h4>
                <span>{props.message}</span>
            </div>
        </div>
    )

    return toast(Body, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        closeButton: false,
        style: style,
    })
}
