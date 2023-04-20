import './Storyes.css'

import Story from './Components/Storie';

import imgJett from './Components/Imagens/00121.png'; //Não se esqueça de importar a imagem

function Stories () {
    return (
        <div className="Stories">
            
            <Story 
            imgPerfil={imgJett} 
            nomeDaConta="Jett"/>
            <Story 
            imgPerfil={imgJett} 
            nomeDaConta="Jett"/>
            <Story 
            imgPerfil={imgJett} 
            nomeDaConta="Jett"/>
            <Story 
            imgPerfil={imgJett} 
            nomeDaConta="Jett"/>
            <Story 
            imgPerfil={imgJett} 
            nomeDaConta="Jett"/>
            <Story 
            imgPerfil={imgJett} 
            nomeDaConta="Jett"/>
            <Story 
            imgPerfil={imgJett} 
            nomeDaConta="Jett"/>
            <Story 
            imgPerfil={imgJett} 
            nomeDaConta="Jett"/>
            
        </div>
    )
}

export default Stories;