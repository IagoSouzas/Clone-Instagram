import BarraLateral from './componentes/BarraLateral'

import imgPerfil from './imagens/iago.jpg'


export default function LadoDireito() {
    return (
        <div className="BarraLateral">
            <BarraLateral
                Perfil={imgPerfil}

                Nome='Iago_Souza51'
                SubNome='Iago Souza'

                userSugestion={imgPerfil}
                NameSugestion="Luis.u5"
                seguidores="Seguido(a) por httpsquel e mais 5 p..."

            />
            

        </div>
    )
}

