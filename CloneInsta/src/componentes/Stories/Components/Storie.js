import './Storie.css'

export default function Story(props) {
    return (
        <div className='Story'>

            <div className='elements'>
                <img className='imgStory' alt="Foto do User" src={props.imgPerfil} />

                <div className='nomeStory'>
                    <span>{props.nomeDaConta}</span>
                </div>

            </div>


        </div>
    )
}

