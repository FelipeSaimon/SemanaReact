//Configuração de rotas entre paginas
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/home/index'
import MeusLinks from './pages/meusLinks/index'
import Notfound from './pages/notfound/notfound'

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Links' element={<MeusLinks/>}/>
                <Route path='*' element={<Notfound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;