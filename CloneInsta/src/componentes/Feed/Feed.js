import './Feed.css'

import Post from './Componentes/Post'

import imgJett from './Componentes/Imagens/00123.png'
import imgRey from './Componentes/Imagens/00120.png'
import {FiHeart} from 'react-icons/fi'
import { FaRegComment } from "react-icons/fa";
import {FiSend} from 'react-icons/fi'
import {BsBookmark} from 'react-icons/bs'

export default function Feed() {
    return (
        <div className='Feed'>
            <Post NomeUser='Jett'

                ImagemPerfil={imgRey}

                ConteudoPost={imgJett}

                reagir={<FiHeart/>}
                coment={<FaRegComment/>}
                enviar={<FiSend/>}
                salvar={<BsBookmark/>}
                />
            

            <Post NomeUser='Jett' ConteudoPost={imgRey} ImagemPerfil={imgJett} 
            reagir={<FiHeart/>}
            coment={<FaRegComment/>}
            enviar={<FiSend/>}
            salvar={<BsBookmark/>}
            />
        </div>
    )
}