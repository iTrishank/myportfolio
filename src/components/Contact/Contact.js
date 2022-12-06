import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Email'
import TelegramIcon from '@material-ui/icons/Telegram'
import { contact } from '../../portfolio'
import './Contact.css'


const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>About Me</h2>
      {/* <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline' style={{width:200}}>
          Email me
        </span>
      </a> */}



      <div className ="twoMaps">
        <div className='mainContact1'>
          <p className='para1'>Contact me</p>
          
            <div className='numone'><PhoneIcon style={{fontSize:30}}/><p className='numContact'> +7 9152774869 <br/> +91 9680896969</p></div>
            <div className='numone'><MailIcon style={{fontSize:30}}/><p className='numContact'>trishankwork@gmail.com</p></div>
            <div className='numone'><TelegramIcon style={{fontSize:30}}/> <p className='numContact'> itrishank</p></div>
          
          
               
        </div>




        <div className='mainContact2'>
          <div className='subContact'>
              <p className='para1'>Places where I put up !</p>
          </div>
          <div className='subContact'>
            <div className='subMap'>
              <p className='para2'>Moscow</p>
              <iframe id='map1' title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d684294.8806078266!2d36.87199209036912!3d55.71091327465804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow!5e0!3m2!1sen!2sru!4v1670093055410!5m2!1sen!2sru" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
              
            </div>

            <div className='subMap'>
              <p className='para2' >New Delhi</p>
              <iframe id ="map1" title ="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633739.128251718!2d76.9697407403855!3d28.66130110014773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sru!4v1670162397331!5m2!1sen!2sru" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>

            </div>
          </div>
        </div>
      </div>

    </section>
    
  )
}

export default Contact
