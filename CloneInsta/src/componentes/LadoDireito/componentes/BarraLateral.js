import './BarraLateral.css'

import { TbPointFilled } from "react-icons/tb";

export default function BarraLateral(props) {
    return (
        <div className="BarraLateral">

            <div className="PerfilLateral">
                <div className='ImagemPerfil'>
                    <img src={props.Perfil} />

                </div>

                <div className="NomePerfil">
                    {props.Nome}

                    <div className='SubName'>
                        {props.SubNome}
                    </div>
                </div>
                <div className="conta">
                    Mudar
                </div>
            </div>



            <div className='sugestion'>

                Sugestões para você

                <div className='tudo'>
                    Ver tudo
                </div>
            </div>


            <div className='sugestionLateral'>

                <div className='sugestion-User'>

                    <div className='imgPerfil'>
                        <img src={props.userSugestion} />
                    </div>

                    <div className='UserNome'>
                        {props.NameSugestion}

                        <div className='Seguidores'>
                            {props.seguidores}
                        </div>
                    </div>

                    <div className='seguir'>
                        Seguir
                    </div>
                </div>

            </div>
            <div className='sugestionLateral2'>

                <div className='sugestion-User'>

                    <div className='imgPerfil'>
                        <img src={props.userSugestion} />
                    </div>

                    <div className='UserNome'>
                        {props.NameSugestion}

                        <div className='Seguidores'>
                            {props.seguidores}
                        </div>
                    </div>

                    <div className='seguir'>
                        Seguir
                    </div>
                </div>

                <div className='Informacoes'>

                    <ul className='info'>
                        <li>Sobre</li>
                        <li>Ajuda</li>
                        <li>imprensa</li>
                        <li>API</li>
                        <li>Carreiras</li>
                        <li>Privacidade</li>
                        <br></br>
                        <li>Termos</li>
                        <li>Localizações</li>
                        <li>Idioma</li>
                        <li>Meta Verified</li>

                    </ul>
                    <div className='instagram1'>
                        <span >© 2023 INSTAGRAM FROM META</span>
                    </div>
                </div>

            </div>

            

        </div>
    )
}