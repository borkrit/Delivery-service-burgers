import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Navigation} from "./components/Navigation/Navigation";

export const  App = () =>  {

  return (
    <>
        <Header />
        <main>
            <Navigation />
        </main>
        <Footer />
    </>
  )
}

