import React from 'react';
import houseimg from "../Images/main_image.png";
import houseimg1 from "../Images/House1/image1main.png";
import houseimg2 from "../Images/House2/image2main.png";
import houseimg3 from "../Images/House3/image3main.png";
import houseimg4 from "../Images/image4main.png";
import houseimg5 from "../Images/image5main.png";
import houseimg6 from "../Images/image6main.png";
import houseimg7 from "../Images/image7main.png";
import "./Main.css";
import { Link } from 'react-router-dom';




const LogoMain = () => {
  return (

        <>

            <img className="house1" src={houseimg} alt="House" />

            <h1 className="main_h1"> Discover Your Space: For Sale or For Rent, We've Got It All!</h1>

            <div className="blogcontainer">

              <div className="blogbox">
                  <div className="blogimg">
                  <img className="house1" src={houseimg1} alt="House" />
                  </div>
                  <div className="blogtext">
                    <time dateTime="2022-10-12T20:00">2023 Aug 28</time>
                    <div className="blogtitle">Attractive three bedroom semi-detached family home </div>
                    <p>Attractive three bedroom semi-detached family home
                       situated within 0.5 miles of Petts Wood station
                        with fast trains to London and within easy walking distance
                         of local shops, schools, bus routes and National Trust woodland.
                          The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast
                           room and conservatory. The property also benefits from having a utility room and cloakroom.
                            To the first floor there are three bedrooms and a family bathroom with separate WC. 
                            Additional features include double glazing, gas central heating and a well presented interior
                      </p>
                      <Link to="/property/prop1">More Info</Link>
                  </div>
              </div>

              <div className="blogbox">
                  <div className="blogimg">
                  <img className="house1" src={houseimg2} alt="House" />
                  </div>
                  <div className="blogtext">
                    <time dateTime="2022-09-14T20:00">2023 June 07</time>
                    <div className="blogtitle">The modern fitted, two double bedroom, garden flat. </div>
                    <p>Presented in excellent decorative order throughout is this two double bedroom, two bathroom,
                       garden flat. The modern fitted kitchen is open plan to the living room which boasts solid wooden 
                       floors and includes integrated appliances including a dishwasher & a washing machine. This large open
                        plan benefits from bi folding doors onto a secluded private courtyard garden.
                    </p>
                    <Link to="/property/prop2">More Info</Link>
                  </div>
              </div>

              <div className="blogbox">
                  <div className="blogimg">
                  <img className="house1" src={houseimg3} alt="House" />
                  </div>
                  <div className="blogtext">
                    <time dateTime="2022-11-05T20:00">2023 May 30</time>
                    <div className="blogtitle">For ones seeking a sophisticated urban living experience</div>
                    <p>Elegantly designed modern one-bedroom apartment with breathtaking panoramic views of the 
                      city skyline. This exceptional living space features an open plan kitchen/living area,
                       providing a seamless flow and maximizing natural light. 
                    </p>
                    <Link to="/property/prop3">More Info</Link>
                    </div>
                  </div>
              </div>

              <div className="blogcontainer">

                  <div className="blogbox">
                    <div className="blogimg">
                      <img className="house1" src={houseimg4} alt="House" />
                    </div>
                    <div className="blogtext">
                      <time dateTime="2022-12-20T20:00">2023 April 17</time>
                      <div className="blogtitle">A magnificent retreat from the hustle and bustle of the city</div>
                      <p>A spacious family home boasting four bedrooms, a large garden, and modern amenities throughout. Nestled in a quiet suburban area,
                         this delightful house offers a peaceful retreat from the hustle and bustle of the city.</p>
                         <Link to="/property/prop4">More Info</Link>
                    </div>
                  </div>

              <div className="blogbox">
                  <div className="blogimg">
                  <img className="house1" src={houseimg5} alt="House" />
                  </div>
                  <div className="blogtext">
                    <time dateTime="2023-01-10T20:00">2023 March 22</time>
                    <div className="blogtitle">the epitome of luxury living in the heart of the trendy district</div>
                    <p>Indulge in the epitome of luxury living with this two-bedroom flat adorned with modern finishes
                       and contemporary design. The building offers exclusive amenities, including a fully-equipped
                        gym and a rooftop terrace with panoramic city views. </p>
                        <Link to="/property/prop5">More Info</Link>
                  </div>
              </div>

              <div className="blogbox">
                  <div className="blogimg">
                  <img className="house1" src={houseimg6} alt="House" />
                  </div>
                  <div className="blogtext">
                    <time dateTime="2023-02-15T20:00">2023 Feb 20</time>
                    <div className="blogtitle">Immerse in the tranquility of rural living with this enchanting property.</div>
                    <p>Step into the warmth and charm of this delightful three-bedroom cottage with character features. Nestled in a
                       picturesque village, this property offers a unique blend of modern comforts and traditional aesthetics. </p>
                       <Link to="/property/prop6">More Info</Link>
                  </div>
              </div>

            </div>

            <div className="blogcontainer">

              <div className="blogbox">
                  <div className="blogimg">
                  <img className="house1" src={houseimg7} alt="House" />
                  </div>
                  <div className="blogtext">
                    <time dateTime="2023-03-08T20:00">2023 Aug 28</time>
                    <div className="blogtitle">A perfect choice for a harmonious blend of convenience and comfort.</div>
                    <p>Discover the cozy charm of this one-bedroom flat featuring a modern kitchen and a private balcony. Ideal
                       for first-time buyers or as an investment property, this flat offers comfort and convenience</p>
                       <Link to="/property/prop7">More Info</Link>
                  </div>
              </div>

            </div>

        </>
  );
};

export default LogoMain;
