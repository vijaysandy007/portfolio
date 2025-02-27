
import "./Contact.scss";
const Contact = () => {
  return (
    <>
    <div className="contact-section-container">
    <h2>Contact</h2>

      <div className="group">
                <div className="text">
                    Looking for a skilled Full Stack Developer to join your team? Or want to discuss an exciting
                    project? I’m open to job opportunities, freelance work, and collaborations!

                    With <b> 3+ years of experience </b>, I specialize in building scalable web applications, crafting
                    high-performance APIs, and working with modern frontend & backend technologies. Whether you're a
                    recruiter, a company, or an entrepreneur, I'd love to connect and explore how I can contribute to
                    your team or project.
                </div>

                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>

                    <label htmlFor="message">Message</label>
                    <textarea id="message" cols={30} rows={10}></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
    </div>
    </>
  )
}

export default Contact
