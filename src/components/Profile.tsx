import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={ styles.profileContainer }>
            <img src="https://assets1.ignimgs.com/2017/12/04/mega-man-11-button-ph2-1512418897260.jpg" alt="Mega Mano" />
            <div>
                <strong>Mega Mano</strong>
                <p>
                    <img src="icons/level.svg" alt="Level icon"/>
                    Level 1</p>
            </div>
        </div>
    );
}