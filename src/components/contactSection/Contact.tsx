
import "./Contact.scss";
import Resume from "../../assets/files/resume.pdf";
import { useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
  const downloadRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleDownload = (e: Event) => {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = Resume;
      link.download = "resume.pdf";
      link.click();
      toast.success("Resume downloaded successfully!",{
        theme: "dark"
      });
    };

    const button = downloadRef.current;
    if (button) {
      button.addEventListener("click", handleDownload);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleDownload);
      }
    };
  }, []);

  const submitForm = () =>{
    toast.success("Thank you for contact, I will reach you soon",{
      theme: "dark",
      closeButton:false
    });
  }

  return (
    <>
      <div className="contact-section-container">

        <div className="group">
          <div className="text">
        <h2>Contact</h2>

            Looking for a skilled Full Stack Developer to join your team? Or want to discuss an exciting
            project? I’m open to job opportunities, freelance work, and collaborations!

            With <b> 3+ years of experience </b>, I specialize in building scalable web applications, crafting
            high-performance APIs, and working with modern frontend & backend technologies. Whether you're a
            recruiter, a company, or an entrepreneur, I'd love to connect and explore how I can contribute to
            your team or project.
          </div>

          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" cols={30} rows={10} placeholder="Enter message"></textarea>

            <div className="button-group">
              <button type="button" onClick={submitForm}><i className="fa-solid fa-envelope-circle-check"></i>Send Message</button>
              <button ref={downloadRef} type="button"><i className="fa-solid fa-download"></i>Download CV</button>

            </div>
          </form>
        </div>
              <ToastContainer />

      </div>
    </>
  )
}

export default Contact
