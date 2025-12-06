import styles from './SideBar.module.css'
import { NavLink } from 'react-router-dom'
import accountIcon from '../assets/bar/account.svg'
import settingsIcon from '../assets/bar/settings.svg'
import homeIcon from '../assets/bar/home.svg'
import investmentIcon from '../assets/bar/invest.svg'
import transactionIcon from '../assets/bar/transaction.svg'
import cardsIcon from '../assets/bar/cards.svg'
import loansIcon from '../assets/bar/loans.svg'
import servicesIcon from '../assets/bar/services.svg'
import privilegesIcon from '../assets/bar/priveleges.svg'



const items = [
  { key: 'dashboard', label: 'Dashboard', img: homeIcon },
  { key: 'transactions', label: 'Transactions', img: transactionIcon },
  { key: 'accounts', label: 'Accounts', img: accountIcon },
  { key: 'investments', label: 'Investments', img: investmentIcon },
  { key: 'creditcards', label: 'Credit Cards', img: cardsIcon },
  { key: 'loans', label: 'Loans', img: loansIcon },
  { key: 'services', label: 'Services', img: servicesIcon },
  { key: 'privileges', label: 'My Privileges', img: privilegesIcon },
  { key: 'setting', label: 'Setting', img: settingsIcon },
]

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {items.map((item) => (
          <NavLink
            key={item.key}
            to={`/${
              item.key === 'creditcards' ? 'credit-cards' :
              item.key === 'privileges' ? 'privileges' :
              item.key
            }`}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            <span className={styles.icon}>
              <img src={item.img} alt={item.label} />
            </span>
            <span className={styles.text}>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default SideBar