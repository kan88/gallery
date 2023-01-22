import Nav from '../../components/nav/nav'
import styles from './contacts.module.css'
import image from '../../assets/img/1.jpeg'

export default function Contacts() {
    return (
        <div>
            <Nav></Nav>
            <h2 className={styles.contacts__title}>Contacts Page</h2>
            <img src={image} alt="My avatar" width='250' height='350' style={{ float: 'left' }} />
            <p style={{ paddingLeft: '50px', fontSize: '28px' }}>Telegramm: @kan_1988</p>
            <p style={{ paddingLeft: '50px', fontSize: '28px' }}>Mail: msk9199625687@yandex.ru</p>
            <p style={{ paddingLeft: '50px', fontSize: '28px' }}>Mobile: +79167929687</p>

        </div>
    )
}
