import Nav from '../../components/nav/nav'
import styles from './contacts.module.css'

export default function Contacts() {
    return (
        <div>
            <Nav></Nav>
            <h2 className={styles.contacts__title}>Contacts Page</h2>
        </div>
    )
}
