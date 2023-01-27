import '../styles/Gallery.css'
import work1 from '/works/work1.webp'
import work2 from '/works/work2.webp'
import work3 from '/works/work3.webp'
import work4 from '/works/work4.webp'
import work5 from '/works/work5.webp'
import work6 from '/works/work6.webp'
import work7 from '/works/work7.webp'
import work8 from '/works/work8.webp'
import work9 from '/works/work9.webp'
import work10 from '/works/work10.webp'
import work11 from '/works/work11.webp'
import work12 from '/works/work12.webp'
import work13 from '/works/work13.webp'
import work14 from '/works/work14.webp'
import work15 from '/works/work15.webp'

const Gallery = (props) => {
return(
    <section className='sectionWorks' id="works">
        <img src={work1} alt="travel app design" defer/><img src={work2} alt="travel landing page design" defer/><img src={work3} alt="fintech app design" defer/>
        <img src={work4} alt="eilish landing page design" defer/><img src={work5} alt="lol app design" defer/><img src={work6} alt="chiesa landing page design" defer/>
        <img className="optionalWork" src={work7} alt="library app design" defer/><img className="optionalWork" src={work8} alt="nike landing page design" defer/><img className="optionalWork" src={work9} alt="classical music app design" defer/>
        <img className="optionalWork" src={work10} alt="fintech app design" defer/><img className="optionalWork" src={work11} alt="accessories landing page design" defer/><img className="optionalWork" src={work12} alt="remote app design" defer/>
        <img className="optionalWork" src={work13} alt="movie booking app design" defer/><img className="optionalWork" src={work14} alt="real estate app design" defer/><img className="optionalWork" src={work15} alt="banking app design" defer/>
    </section>
)
}

export default Gallery







