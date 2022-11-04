
import Totoro from '../Asset/Totoro.jpg'
import "../CSS/TestJSX.css";

function TestJSX () {
    return (
        <div className='bodyComponent'>
            <p>Premier composant</p>
            <h1>Le film</h1>
            <img alt='ghibli' className='totoro' src={Totoro} />
            <p className='text'>
                Mon voisin Totoro (となりのトトロ, Tonari no Totoro?) est un film d'animation japonais réalisé par Hayao Miyazaki et produit par le studio Ghibli, 
                sorti au Japon le 16 avril 1988. Il est récompensé la même année par le prix Noburō Ōfuji et le Prix Mainichi du meilleur film.

               Ce film a été diffusé pour la première fois en France lors du Festival du cinéma pour enfants de Corbeil-Essonnes en 19921. 
               Il fut ensuite publié en VHS (TF1 Vidéo) en juillet 1999 quelques mois avant de sortir en salles dans toute la France au cinéma 
               le 8 décembre 1999, avant une ressortie en 2002. 
               Quant au DVD, son édition française est disponible depuis le 26 juillet 2006, et le Blu-ray est disponible depuis le 13 juillet 2013.</p>
        </div>
    )
}

export default TestJSX;