import { FC } from 'react'
import styles from './loader.module.css'

type LoaderProps = {
    size: 'small' | 'medium' | 'large'
}

const calculateDiameter = (size: 'small' | 'medium' | 'large') => {
    let pixels: number = 125
    if (size === 'small') pixels = 25
    else if (size === 'medium') pixels = 70
    return `${pixels}px`
}

export const Loader: FC<LoaderProps> = props => {
    const diameter = calculateDiameter(props.size)

    return (
        <div className={styles.container}>
            <div className={styles.loader} style={{ height: diameter, width: diameter }} />
            {props.size === 'large' && <span>Loading...</span>}
        </div>
    )
}
