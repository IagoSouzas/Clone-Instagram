import './LadoEsquerdo.css'

import imgLogo from './imagens/instagram.jpeg'
import ItemMenu from './Componentes/itemMenu'
import imgPerfil from './imagens/iago.jpg'

import { MdHomeFilled } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { BiVideoPlus } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'

export default function LadoEsquerdo() {
    return (
        <div className="LadoEsquerdo">
            <div className="logo">
                <img src={imgLogo} />

            </div>

            <div className="menu-principal">

                <div className='Home'> <ItemMenu icone={<MdHomeFilled />} texto="Página inicial" /></div>


                <div className='pesquisa'>
                    <ItemMenu icone={<AiOutlineSearch />} texto="Pesquisa" />
                </div>

                <div className='explorar'>
                    <ItemMenu icone={<FaRegCompass />} texto="Explorar" />
                </div>

                <div className='reels'>
                    <ItemMenu icone={<BiVideoPlus />} texto="Reels" />
                </div>

                <div className='menssagem'>
                    <ItemMenu icone={<RiMessengerLine />} texto="Menssagem" />
                </div>

                <div className='notificacao'>
                    <ItemMenu icone={<FiHeart />} texto="Notificação" />
                </div>

                <div className='criar'>
                    <ItemMenu icone={<BsPlusSquare />} texto="Criar" />
                </div>


                <div className='perfil'>
                    <img src={imgPerfil} />
                    <p>Profile</p>
                </div>


            </div>

        </div>
    )
}