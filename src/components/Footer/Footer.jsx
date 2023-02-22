import st from './Footer.module.css'
import {Container} from "../Container/Container";
import logo from '../../assets/img/logo-o.svg'
import cn from 'classnames'

export const Footer = () => {
    return (
        <footer className={st.footer}>
            <Container>
                <div className={st.footer__content}>
                    <img className={st.footer__logo} src={logo} alt="logo YourMeal" />

                        <address className={st.footer__address}>
                            <div className={st.footer__contact}>
                                <h2 className={st.footer__title}>Number for order</h2>

                                <a className={st.footer__phone} href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"/>
                                    </svg>

                                    <span>+000 000 000</span>
                                </a>
                            </div>

                            <div className={st.footer__contact}>
                                <h2 className={cn(st.footer__title , st.footer__title_sn)}>Social media</h2>

                                <ul className={st.footer__list}>


                                    <li className={st.footer__item}>
                                        <a href="#" className={st.footer__sn} aria-label="chanel in telegram">
                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M36 18C36 22.7739 34.1036 27.3523 30.7279 30.7279C27.3523 34.1036 22.7739 36 18 36C13.2261 36 8.64773 34.1036 5.27208 30.7279C1.89642 27.3523 0 22.7739 0 18C0 13.2261 1.89642 8.64773 5.27208 5.27208C8.64773 1.89642 13.2261 0 18 0C22.7739 0 27.3523 1.89642 30.7279 5.27208C34.1036 8.64773 36 13.2261 36 18ZM18.6458 13.2885C16.8952 14.0175 13.3942 15.525 8.14725 17.811C7.29675 18.1485 6.849 18.4815 6.8085 18.8055C6.741 19.3522 7.42725 19.5683 8.361 19.863L8.75475 19.9868C9.67275 20.286 10.9102 20.6348 11.5515 20.6483C12.1365 20.6618 12.7867 20.4233 13.5045 19.9283C18.4072 16.6185 20.9385 14.9467 21.096 14.9107C21.2085 14.8837 21.366 14.8523 21.4695 14.9468C21.5752 15.039 21.564 15.2168 21.5528 15.264C21.4853 15.5542 18.792 18.0562 17.3993 19.3522C16.965 19.7572 16.6567 20.043 16.5938 20.1082C16.455 20.25 16.314 20.3895 16.1707 20.5268C15.3157 21.3503 14.6768 21.9668 16.2045 22.9748C16.9403 23.4608 17.5298 23.859 18.117 24.2595C18.756 24.696 19.395 25.1303 20.223 25.6748C20.4322 25.8098 20.6348 25.956 20.8305 26.0955C21.5753 26.6265 22.248 27.1035 23.0737 27.027C23.5553 26.982 24.0525 26.532 24.3045 25.182C24.9007 21.9938 26.073 15.0885 26.343 12.2423C26.3595 12.0056 26.3497 11.7679 26.3137 11.5335C26.2926 11.3443 26.201 11.17 26.0573 11.0452C25.8525 10.9039 25.6085 10.8307 25.3597 10.836C24.6847 10.8472 23.643 11.2095 18.6458 13.2885Z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </address>

                        <div className={st.footer__development}>
                            <p>© YouMeal, 2022</p>
                            <p>Design: <a href="#">Anastasia Ilina</a></p>
                            <p>Developer: <a href="mailto:vladyslav.pohorilyi@gmail.com">Pohorilyi Vlad</a></p>
                        </div>
                </div>
            </Container>
        </footer>

)
}