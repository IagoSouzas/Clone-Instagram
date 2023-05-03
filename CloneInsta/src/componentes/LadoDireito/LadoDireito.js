import BarraLateral from './componentes/BarraLateral'

import imgPerfil from './imagens/iago.jpg'
import imgMereoleona from './imagens/mereoleona.svg'
import imgGrimm from './imagens/griim.svg'



export default function LadoDireito() {
    return (
        <div className="BarraLateral">
            <BarraLateral
                Perfil={imgPerfil}

                Nome='Iago_Souza51'
                SubNome='Iago Souza'
                
                userSugestion={imgMereoleona}
                NameSugestion="Luis.u5"
                seguidores="Seguido(a) por httpsquel e mais 5 p..."

                userSugestion2={imgGrimm}
                NameSugestion2="Luis.u5"
                seguidores2="Seguido(a) por httpsquel e mais 5 p..."

            />
            

        </div>
    )
}

