import '../styles/Resume.css'

const Resume = (props) => {
return(
    <div className='resumeContainer'>
    <ul>
      <li className='titleLines'>
        <div className='yearResume'></div>
        <div className='titleColor'>EDUCATION</div>
      </li>
      <li className='resumeLines'>
        <div className='yearResume'>2022</div>
        <div className='jobResume'>
          Web Developer RNCP 5 title (bac+2 eq.)<br/>
          <span>OC / Paris</span>
        </div>
      </li>
      <li className='resumeLines odd'>
        <div className='yearResume'>2007</div>
        <div className='jobResume'>
          Basic Media Certification<br/>
          <span>MiddleSex University / UK</span>
        </div>
      </li>
      <li className='resumeLines'>
        <div className='yearResume'>2000</div>
        <div className='jobResume'>
          Classe préparatoire aux Grande Ecoles<br/>
          <span>Lycée Saint Louis / Paris</span>
        </div>
      </li>
    </ul>
    <div className='separatorResume'></div>
    <ul>
      <li className='titleLines'>
        <div className='yearResume titleColor'></div>
        <div className='titleColor'>EXPERIENCE</div>
      </li>
      <li className='resumeLines'>
        <div className='yearResume'>2015</div>
        <div className='jobResume'>
          UI Designer - Freelancing<br/>
          <span>Fitness Boutique, Hybrid Factor & Big Block</span>
        </div>
      </li>
      <li className='resumeLines odd'>
      <div className='yearResume'>2007</div>
        <div className='jobResume'>
          Composer / Musician<br/>
          <span>Sony DE, Universal LATAM & BMG Warner</span>
        </div>
      </li>
      <li className='resumeLines'>
        <div className='yearResume'>2004</div>
          <div className='jobResume'>
          Adjoint au Secrétaire Général<br/>
          <span>Mairie de Paris</span>
        </div>
      </li>
      <li className='resumeLines odd'>
        <div className='yearResume'>2002</div>
          <div className='jobResume'>
          Technicien en Ingénierie des données<br/>
          <span>UUNET, EDF & Adecco</span>
        </div>
      </li>
    </ul>
  </div>
)
}

export default Resume