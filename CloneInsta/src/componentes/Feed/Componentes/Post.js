import './Post.css'

import { FiMoreHorizontal } from "react-icons/fi";
import { CgSmile } from 'react-icons/cg'
import { TbPointFilled } from "react-icons/tb";
import { useState } from 'react';

import {FiHeart} from 'react-icons/fi'


export default function Post(props) {
    const [liked, setLiked] = useState(false);
    // liked -> Valor atual;
    // setLiked -> Novo valor
    return (
        <div className='Post'>
            <header>
                <div className='BarraSuperior'>
                    <div className="ImagemPerfilUser">
                        <img src={props.ImagemPerfil} />
                    </div>

                    <div className="NomePerfilUser">
                        {props.NomeUser}
                    </div>

                    <div className='ponto'>
                        {<TbPointFilled />}
                    </div>
                    <div className='tempo'>50 min</div>

                </div>
                <div className="MenuBarraSuperior">
                    {<FiMoreHorizontal />}
                </div>
            </header>

            <div className='ConteudoPost'>
                <img src={props.ConteudoPost} />
            </div>

            <div className='MenuInferior'>

                <section className='barraInf'>

                    <div className='icons-1'>
                        <button className={`icon`} onClick={() => setLiked(!liked)}>
                            <FiHeart fill={`${liked ? "red" : "transparent"}`} 
                            style={{color:`${liked ? "red" : "black" }`}}
                            />
                        </button>
                        <div className='icon'>{props.coment}</div>
                        <div className='icon'>{props.enviar}</div>
                    </div>

                    <div className='icon'>{props.salvar}</div>

                </section>

                <section className='likes'>
                    <span>
                        50 curtidas
                    </span>
                </section>

                <div className='legenda'>
                    <strong>{props.legeName}</strong> {props.legenda}

                </div>

                <p className='view-coment'>
                    Ver todos os 100 comentários
                </p>

                <div className='comentario'>
                    <input type='text' placeholder='Adicione um comentário...' />
                    {<CgSmile />}
                </div>

            </div>

        </div>

    )
}
