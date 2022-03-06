import './App.scss';
import Cards from './components/cards';
import Footer from './components/footer';
import Header from './components/header';

export default function App() {

    return (
        <>
            <main>
                <Header/>
                <Cards/>
            </main>
            <Footer />
        </>
    )
}
