import './Feed.css'

import Post from './Componentes/Post'

import imgRobin from './Componentes/Imagens/robinn.svg'
import imgNobarap from './Componentes/Imagens/nobara.svg'

import imgNico from './Componentes/Imagens/1285461.svg'
import imgnobara from './Componentes/Imagens/df3f936c28c10c8a9871c1b7d5a5d0c4.svg'

import imgRuffy from './Componentes/Imagens/EbkEB9UXkAAOuAs.svg'
import imgLuffy from './Componentes/Imagens/luffy.svg'


import {FiHeart} from 'react-icons/fi'
import { FaRegComment } from "react-icons/fa";
import {FiSend} from 'react-icons/fi'
import {BsBookmark} from 'react-icons/bs'

export default function Feed() {
    return (
        <div className='Feed'>
            <Post NomeUser='Nobara'

                ImagemPerfil={imgNobarap}

                ConteudoPost={imgnobara}

                reagir={<FiHeart/>}
                coment={<FaRegComment/>}
                enviar={<FiSend/>}
                salvar={<BsBookmark/>}
                legeName="Nobara.Juju "
                legenda="Fiquei muito linda nessa foto em Tóquio😍"
                />
            

            <Post NomeUser='Nico Robin' ConteudoPost={imgRobin} ImagemPerfil={imgNico} 
            reagir={<FiHeart/>}
            coment={<FaRegComment/>}
            enviar={<FiSend/>}
            salvar={<BsBookmark/>}
            legeName="Nico.Robin "
            legenda="Finalmente encontrei uma calmaria em mim💗💗"
            />
            <Post NomeUser='Luffy' ConteudoPost={imgRuffy} ImagemPerfil={imgLuffy} 
            reagir={<FiHeart/>}
            coment={<FaRegComment/>}
            enviar={<FiSend/>}
            salvar={<BsBookmark/>}
            legeName="Rei.Luffy"
            legenda="Até que enfim reunido com meus nakamas🍺🍺"
            />
        </div>
    )
}