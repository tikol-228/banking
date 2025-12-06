import Input from './Input'
import styles from './Header.module.css'
import logo from '../assets/logo.svg'
import settings from '../assets/settings.svg'
import notification from '../assets/notification.svg'
import search from '../assets/search.svg'



const Header = () => {
  return (
    <>  
        <header className={styles.header}>
            <div className={styles.left}>
                <img src={logo} alt='logo' />
                <span className={styles.logo}>BankDash.</span>
                <span className={styles.title}>Overview</span>
            </div>
            <div className={styles.center}>
                <div className={styles.searchWrap}>
                    <img src={search} alt='search' className={styles.searchIcon}/>
                    <Input placeholeder='Search for something' type='text' className={styles.search}/>
                </div>
            </div>
            <div className={styles.right}>
                <button className={styles.iconBtn}><img src={notification} alt='notification' /></button>
                <button className={styles.iconBtn}><img src={settings} alt='settings' /></button>
                <span className={styles.avatar}>Аватар</span>
            </div>
        </header>
    </>
  )
}

export default Header