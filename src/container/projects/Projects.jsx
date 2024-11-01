import {useState, React} from 'react'
import { Link } from 'react-router-dom';


import useIntersectionObserver from '../useIntersectionObserver/useIntersectionObserver'; 

import './Projects.css'

import schoolProject from '../../assets/school.png';
import weatherApp from '../../assets/weatherapp.png';
import modernBlog from '../../assets/modernBlog.png';
import modernBakery from '../../assets/modernBakery.png';
import github from '../../assets/github.png';
import arrowLeft from '../../assets/arrowleft.png';
import arrowRight from '../../assets/arrowright.png';

import {ReactComponent as Circle} from '../../assets/circle.svg'
import {ReactComponent as CircleDot} from '../../assets/circle-dot.svg'

function Projects() {

  const projectsData = [
    
                        {
                          title: "Modern Bakery", 
                          image: modernBakery, 
                          description:"Dynamic bakery management system using MERN stack that enables bakery owners to manage their products, categories, testimonials, and promotions through an intuitive admin dashboard. ", 
                          code:"https://github.com/NavCGaur/Rama-Bakery", 
                          projectLink:"https://rama-bakery.vercel.app/"
                        },

                        {
                          title: "Education Institute Website", 
                          image: schoolProject, 
                          description:"Fully responsive and interactive site using HTML, CSS React. The project includes features such as dynamic homepage, news updates, events section, demonstrating my ability to build functional and user-friendly websites.", 
                          code:"https://github.com/NavCGaur/school_website", 
                          projectLink:"https://navcgaur.github.io/school_website/"
                        },
                        {
                          title: "Weather App", 
                          image: weatherApp, 
                          description:"Fully responsive and interactive site using HTML, CSS and React. Realtime weather information such as temperature, Uv index, humidity, wind as well as 6 days forecast of major Indian cities. Also gives population data.", 
                          code:"https://github.com/NavCGaur/weatherapp_react", 
                          projectLink:"https://navcgaur.github.io/weatherapp_react/"
                        },
                        {
                          title: "Modern Blog", 
                          image: modernBlog, 
                          description:"Modern fully responsive and interactive blog using HTML, CSS and React. ", 
                          code:"https://github.com/NavCGaur/React_Blog", 
                          projectLink:"https://navcgaur.github.io/React_Blog/"
                        }
                        ]


    const projectsLength = projectsData.length;

    const [projectIndex, SetProjectIndex] = useState(0);


    function nextProjectHandler(){

      projectIndex < (projectsLength-1)? SetProjectIndex(prevIndex=>prevIndex+1): SetProjectIndex(0);

      
    }

    function previousProjectHandler(){

      projectIndex === 0? SetProjectIndex(projectsLength-1) : SetProjectIndex(prevIndex=>prevIndex-1);


    }

    const [refVariable, isVisible] = useIntersectionObserver({
      threshold: 0.3 // Trigger when 30% of the component is visible
    });


    
  return (
    <div className='projects' id='projects' key={projectIndex} ref={refVariable} >


      <div className='projects__container'>

        <h1 className='projects__heading'>PROJECTS</h1>

        <img src={arrowLeft} alt='move left' className='projects__arrowLeft' onClick={previousProjectHandler} />
        <img src={arrowRight} alt='move right' className='projects__arrowRight' onClick={nextProjectHandler}/>

        <div className='projects__titles'>

          <div className={`projects__title ${isVisible?'visible':''}`} style={{opacity:0.92,color:'#766F6F'}}>{projectIndex===0? projectsData[projectsLength-1].title :  projectsData[projectIndex-1].title}</div>

          <div className={`projects__title ${isVisible?'active':''}`} >{projectsData[projectIndex].title} </div>

          <div className={`projects__title ${isVisible?'visible':''}`}  style={{opacity:0.92,color:'#766F6F'}}>{projectIndex===(projectsLength-1)? projectsData[0].title : projectsData[projectIndex+1].title}</div>

        </div>

        <div className='projects__carousal'>
          <div className={`projects__card ${isVisible? 'visible':''}`} style={{opacity:0.4}} >

            <div className='projects__card-container'>

              {
                <img src={ projectIndex===0? projectsData[projectsLength-1].image :  projectsData[projectIndex-1].image } alt='previous project'/>
              }

              {
                <p>{ projectIndex===0? projectsData[projectsLength-1].description :  projectsData[projectIndex-1].description  }</p>
              }

              <div className='projects__card-links' >

                <div className='projects__card-code'>
                  <p>Check Code</p>
                  <img src={github} alt='github code'/>                
                </div>

                <div className='projects__card-projectLink'>
                  <p>Visit Project</p>
                </div>

              </div>
            </div>

          </div>

          <div className={`projects__card-active ${isVisible?'visible':''}`}>
            <div className='projects__card-container' >


              {
                <img src={ projectsData[projectIndex].image } alt='main project'/>
              }
              {
                <p>{ projectsData[projectIndex].description  } </p>
              }

              <div className='projects__card-links' >
              
                <div className='projects__card-code'>
                  <Link to={projectsData[projectIndex].code} target='_blank'>Check Code</Link>
                  <img src={github} alt='github code'/>                
                </div>

                <div className='projects__card-projectLink'>
                  <Link to={projectsData[projectIndex].projectLink} target='_blank'>Visit Project</Link>
                </div>

              </div>

            </div>

          </div>


          <div className={`projects__card ${isVisible? 'visible':''}`} style={{opacity:0.4,transform:'scale(0.92)'}}>
            <div className='projects__card-container'>

              {
                <img src={ projectIndex===(projectsLength-1)? projectsData[0].image : projectsData[projectIndex+1].image} alt='next project'/>
              }

              {
                <p>{ projectIndex===(projectsLength-1)? projectsData[0].description : projectsData[projectIndex+1].description}</p>
              }

              <div className='projects__card-links' >

                <div className='projects__card-code'>
                    <p>Check Code</p>
                    <img src={github} alt='github code'/>                
                </div>

                <div className='projects__card-projectLink'>
                    <p>Visit Project</p>
                </div>

            </div>
          </div>     
          

        </div>

        </div>

        <div className='projects__circleWrapper'>
            {projectsData.map((_, index)=> index===projectIndex?  <CircleDot className = 'projects__circleDot' key={index}/>
                                            : <Circle className = 'projects__circle' key={index} />

             )}
        </div>

      </div>
     
    </div>
  )
}

export default Projects