import './App.scss';
import Cards from './components/cards';
import Header from './components/header';
import pokeball from './assets/pokeball.png';

export default function App() {

    return (
        <main>
            <img src={pokeball} alt='sdsd'/>
            <Header/>
            <Cards/>
        </main>
    )
}
