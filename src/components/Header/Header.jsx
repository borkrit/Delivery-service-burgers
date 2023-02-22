import st from './Header.module.css'
import {Container} from "../Container/Container.jsx";
import logo from '../../assets/img/logo.svg'

export const Header = ()=>{
    return (
            <header className={`${st.header}`} >
                <Container className={`${st.header__container}`}  >
                    <img className={`${st.header__logo}`} src={logo} alt="Logo YourMeal" />

                    <div className={`${st.header__wrapper}`}>
                        <h1 className={`${st.header__title}`}>
                            <span>Only the most</span>
                            <span className={`${st.header__red}`}>lush burgers!</span>
                        </h1>

                        <p className={`${st.header__appeal}`}>Free devilery after 10$</p>
                    </div>
                </Container>

            </header>
    )
}