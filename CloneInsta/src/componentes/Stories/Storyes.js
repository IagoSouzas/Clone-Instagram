import './Storyes.css'

import Story from './Components/Storie';

import imgImicida from './Components/Imagens/BLOG_EMICIDA_Header.svg' //Não se esqueça de importar a imagem
import imgNicoRobin from './Components/Imagens/1285461.svg'
import imgMaki from './Components/Imagens/3a77bd45d3153fb9ce9032e12d6b8d24.svg'
import imgGon from './Components/Imagens/72a7c1a634a3264c0741fe4bab2d6ad0.svg'
import imgAlucard from './Components/Imagens/D97b8d68-af90-4346-bc06-cbfeeee410d5.svg'
import imgGojo from './Components/Imagens/download.svg'
import imgLuffy from './Components/Imagens/luffy.svg'


function Stories () {
    return (
        <div className="Stories">
            
            <Story 
            imgPerfil={imgImicida} 
            nomeDaConta="Emicida"/>

            <Story 
            imgPerfil={imgNicoRobin} 
            nomeDaConta="Nico Robin"/>

            <Story 
            imgPerfil={imgMaki} 
            nomeDaConta="Maki"/>

            <Story 
            imgPerfil={imgGon} 
            nomeDaConta="Gon"/>
            
            <Story 
            imgPerfil={imgLuffy} 
            nomeDaConta="Luffy"/>
            
            <Story 
            imgPerfil={imgGojo} 
            nomeDaConta="Gojo"/>
            
            <Story 
            imgPerfil={imgAlucard} 
            nomeDaConta="Alucard"/>
            
        </div>
    )
}

export default Stories;