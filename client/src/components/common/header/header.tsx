import React, { FC } from 'react'
import styles from './header.module.css'
// import syzygyLogo from '../../../assets/img/syzygyLogo.svg'
import { useWindowSize } from '../../../hooks/useWindowSize'
import classNames from 'classnames'
import useAuth from '../../../hooks/context/useAuth'
// import { useNavigate } from 'react-router-dom'

export const Header: FC = () => {
    const { authenticatedAccount, signOut } = useAuth()
    const { isMobileView } = useWindowSize()
    // const navigate = useNavigate()
    return (
        <div className={classNames(styles.header, authenticatedAccount ? styles.withLogOut : '')}>
            <figure>
                {/* <img onClick={() => navigate('/log-entries')} src={syzygyLogo} alt="logo-syzygy" /> */}
            </figure>

            {!isMobileView && (
                <>
                    <span className={styles.divider}></span>
                    <h3>Operator Rounds</h3>
                </>
            )}
            {authenticatedAccount && (
                <div className={styles.rightSide}>
                    <span className={styles.username}>{authenticatedAccount?.name}</span>
                    <span className={styles.divider}></span>
                    <div className={styles.logOut}>
                        <i className="icon-log-out" onClick={() => signOut()} />
                        {!isMobileView && <span onClick={() => signOut()}>Log Out</span>}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
