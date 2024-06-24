import { FC } from 'react'
import Button from '../common/button/button'
import styles from './desktopLogin.module.css'
// import syzygyLogo from '../../assets/img/syzygyLogo.svg'

type DesktopLoginProps = {
    isLoading: boolean
    onClick: () => void
}

export const DesktopLogin: FC<DesktopLoginProps> = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <figure>
                        {/* <img src={syzygyLogo} alt="logo-syzygy" /> */}
                    </figure>
                    <span className={styles.divider}></span>
                    <h3>Operational Rounds</h3>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.title}>Welcome!</h3>

                    <p>Log in to manage and record your unit rounds.</p>

                    <Button
                        onClick={props.onClick}
                        variant="blue-bg"
                        text={props.isLoading ? 'Logging In' : 'Log In'}
                        isLoading={props.isLoading}
                    />
                </div>
            </div>
        </div>
    )
}

export default DesktopLogin
