import './App.css';
import img1 from './components/images/photo.jpg';
import img2 from './components/images/surgery.jpg';
import img3 from './components/images/vaccination.jpg';
import img4 from './components/images/wellness.jpg';
import img5 from './components/images/dental.jpg';
function App() {
  return (
    <div className="App">

    <div className="container">
      <div className="nav">
        <div className="logo">Veterinary</div>
        <div className="navbar">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="#x">Services</a></li>
            <li><a href="#Doctor">Doctor</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="hero">
        <div className="hero_text">
          <h1>Except Veterinary Care</h1>
          <p>
            Online veterinary consultations can assist with mild to moderate
            behavioural issues, general advice, and training tips, including
            identifying triggers, environmental enrichment, and training
            exercises. Severe issues may require in-person consultation with a
            veterinary behaviourist or certified dog trainer.
          </p>
          <button className="btn">Learn More</button>
        </div>
        <div className="hero_image">
          <img src={img1} alt="myimage" />
        </div>
      </div>
      <section class="service_section" id="x">
      <div class="section_text">
        <h1>Our Services</h1>
        <p>All type of services available</p>
      </div>
      <div class="card_details">
        <div class="card">
          <img src={img2} alt="myimage" />
          <h2>Surgery</h2>
          <p>
            Veterinary surgery is surgery performed on animals by veterinarians,
            whereby the procedures fall into three broad categories:
            orthopaedics (bones, joints, muscles), soft tissue surgery (skin,
            body cavities, cardiovascular system.
          </p>
          <button class="btn">Learn More</button>
        </div>
        <div class="card">
          <img src={img3} alt="myimage" />
          <h2>Vacciantions</h2>
          <p>
            Vaccinating animals helps in stimulating an immune response without
            causing the disease itself. This creates early exposure to
            disease-causing organisms, where the animals' immune system is able
            to recall the infectious agent to which the animal is vaccinated.
          </p>
          <button class="btn">Learn More</button>
        </div>
        <div class="card">
          <img src={img4} alt="myimage" />
          <h2>wellness exams</h2>
          <p>
            During a routine wellness examination, your veterinarian will ask
            you questions about your dog's diet, exercise, how much they're
            drinking, breathing, behavior, habits, elimination patterns (i.e.,
            bowel movements and urination), lifestyle, and general health.
          </p>
          <button class="btn">Learn More</button>
        </div>
        <div class="card">
          <img src={img5} alt="myimage" />
          <h2>Dental care</h2>
          <p>
            Periodontal disease is the common dental condition in dogs and cats
            by the time your pet is 3years old,he or she will very likely have
            someearly evidence periodontal disease,which will worsen asyour
            petgrows older effective preventive measures aren’t taken.
          </p>
          <button class="btn">Learn More</button>
        </div>
      </div>
    </section>
      </div>

    </div>
  );
}

export default App;
