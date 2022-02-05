//Configuração de rotas entre paginas
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/home/index'
import MeusLinks from './pages/meusLinks/index'

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Links' element={<MeusLinks/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;