import React from "react";
import "./styles/styles.css";
import "./styles/Responsiveness.css";
import EmailForm from "./EmailForm";
// import Accordion from 'react-bootstrap/Accordion';

const Section6 = () => {
    return (
    <div className="section-6 col-lg-12">
        <h1 className="section6-heading">Frequently Asked Questions</h1>
        <div class="accordion accordion-transparent" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" id="accordionColor" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      <h2 className="accordion-heading">What is Netflix?</h2>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Neflix is a streaming service that offers a wide variety of award-winning TV Shows, movies, animes, documentaries
        and more on thousands of internet-connected devices. <br></br>
        You can watch as much you can want, whenever you want without a singal commercial-all for one low monthly price.
         There's always something new to discover and new TV shows and movies are added every week!  
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" id="accordionColor" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <div className="accordion-heading"> How much does Netflix costs?</div>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device, all for one fixed monthly fee. 
          Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.      
          </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" id="accordionColor" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <div className="accordion-heading">Where can I watch?</div> 
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Watch anywhere, anytime. Sign in with your Neflix account to watch instantly on the web at netfix.com from your
        personal computer or on any internet-connected device that offers the Neflix app, including smart TV's, smartphones, tablets, streaming 
        media players and game consoles.<br/>
        You can also download your favourite shows with the iOS,  Android, or Windows 10 app.
        Use downloads to watch while you're on the go and without an internet connection. Take Netflux with you anywhere.      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" id="accordionColor" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
      <div className="accordion-heading">How do I cancel?</div>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Netflix is flexible. There are no pesky contracts and commitments.
        You can easily cancel your account easily in two clicks.
         There are no cancellations fees-start or stop your account anytime.      
         </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" id="accordionColor" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
      <div className="accordion-heading">What can I watch on Netflix?</div>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award winning Neflix originals,
        and more. Watch as much as you want, anytime you want.      
         </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" id="accordionColor" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
      <div className="accordion-heading">Is Netflix good for kids?</div>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The Netflix kids experience is included in your membership to give parents control while kids enjoy family-friendly
         TV shows and movies in their own space.
         <br></br>
         Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content 
         kids can watch and block specific titles you don't want kids to see.      
         </div>
    </div>
  </div>
</div>
<div className="mail2">
  <p className="mail2-text">Ready to watch? Enter your email to create or restart your membership.</p>
  <EmailForm />
</div>
<hr className="hr" />
</div>
        )
}

export default Section6;

