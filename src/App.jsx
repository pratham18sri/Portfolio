import linkedinImage from './images/Linkedin.jpg';
import GithubImage from './images/Github.jpg'
import LeetcodeImage from'./images/Leetcode.jpg'
import GmailImage from'./images/Gmail.jpg'

import './App.css'
import { useForm } from "react-hook-form";

import Background from './Components/Background'
import Welcome from './Components/Welcome'
import logo from './images/logo.jpg';
import AboutMe from './Components/About'
import Skill from'./Components/Skill'
import Project1 from './Components/Project1'
import Card from './Components/Card'



const demoItems = [
  { link: 'https://www.linkedin.com/in/pratham-srivastav-8104bb2b8/', text: 'Linked In', image: linkedinImage },

  { link: 'https://github.com/pratham18sri', text: 'GitHub', image:GithubImage },

  { link: 'https://Leetcode.com/u/pratham_sri/', text: 'LeetCode', image: LeetcodeImage },

  { link: '#', text: 'Gmail', image: GmailImage }
];

function App() {
  const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm();

   async function onSubmit(data) {//it delay submiting form for 3 sec
     await new Promise((resolve)=>setTimeout(resolve,3000)) 
    console.log("form submitting", data);
  }


  return (
    <>
    <Background/>
     <div>
      <div>
        <span>
          <Welcome/>
        </span>
        <div className="intro">
          <span className='name'>
           I 'am Pratham 
          </span>
          <span className="logo">
           <img src={logo} alt="Logo"/>
          </span>
        </div>
        <div className='About-heading'>
          About ME 
        </div>
        <span>
          <AboutMe>
             I am Pratham Srivastav — a dedicated and curious full-stack developer with a strong passion for turning ideas into real-world digital experiences. I specialize in building responsive, scalable, and user-centric web applications using modern technologies like React, Node.js, Express, and MongoDB.
          </AboutMe>
        </span>
        <div className='Skill-heading'>
          Programming Skills
        </div>
        <div>
          <Skill></Skill>
          <br></br>
          <br></br>
        </div>
        <div className='Project-heading'>
          Projects
        </div>
        <br></br>

        <div className="project-row">
          <Project1 />
          <Project1 />
          <Project1 />
        </div>
        <br></br>
        <div className='Skill-heading'>
          Contact Me . .
        </div>
        <br></br>
        <div style={{ height: '300px', position: 'relative' }}>
          <Card items={demoItems} />
        </div>

        <br></br>
        <div className='getintouch'>Get in touch </div>
        <br></br>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Name: </label>
              <input
                type="text"
                {...register('firstName', {
                  required: true,
                  minLength: { value: 3, message: 'Min length is 3' },
                  maxLength: { value: 20, message: 'Max length is 20' }
                })}
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}

              <label>Email: </label>
              <input
                type="text"
                {...register('Email', {
                  required: true,
                  minLength: { value: 3, message: 'Min length is 3' },
                  maxLength: { value: 20, message: 'Max length is 20' }
                })}
              />
              {errors.Email && <p>{errors.Email.message}</p>}

              <label>Message: </label>
              <input
                type="text"
                {...register('Age', {
                  required:true,
                  maxLength: { value: 20, message: 'Max length is 100' }
                })}
              />
              {errors.Age && <p>{errors.Age.message}</p>}

              <input
                type="submit"
                disabled={isSubmitting}
                value={isSubmitting ? 'Submitting...' : 'Submit'}
              />
            </div>
          </form>
        </div>

        
      </div>
     

     </div>
    </>
  )
}

export default App
