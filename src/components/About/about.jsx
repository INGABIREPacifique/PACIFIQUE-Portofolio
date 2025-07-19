import './about.css'
import paccy from '/i.jpeg'

const about = () => {
  return (
    <div className='main-about'>
        <div className='about-text'>
             <h1 className='about-title'>About Me</h1>
           <p>I am a results-driven Virtual Assistant and Certified Salesforce Administrator with a passion for leveraging CRM expertise and administrative excellence to drive business growth. An ALX Alumni and McKinsey Champion, I specialize in enhancing operational efficiency, managing complex schedules, and executing strategic marketing. I'm also a Trailhead Ranger, committed to continuous learning in Salesforce and cutting-edge technologies. I thrive in dynamic environments and am dedicated to helping innovative organizations achieve impactful results.</p>
        </div>
        <div className='about-image'>
           <img src={paccy} alt="" />
        </div>
      
    </div>
  )
}

export default about
