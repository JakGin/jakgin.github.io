import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div>
        <span type='button' className='btn btn--outline' style={{ borderRadius: 20, cursor: 'default' }}>
          {contact.email}
        </span>
      </div>
    </section>
  )
}

export default Contact
