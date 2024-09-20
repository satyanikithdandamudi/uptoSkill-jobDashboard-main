import React, { useState } from "react";
import leftImg from "../assets/leftImg1.webp";
import checkmark from "../assets/checktick.jpeg";
import '../styles/CandidateLogin.scss'

const CandidateLogin = () => {
    const languageName = [
        { name: "Hindi", id: 1 },
        { name: "English", id: 2 },
        { name: "Tamil", id: 3 },
        { name: "Telugu", id: 4 },
        { name: "Kannada", id: 5 },
        { name: "Malayalam", id: 6 },
        { name: "Gujarati", id: 7 },
        { name: "Bengali", id: 8 },
        { name: "Marathi", id: 9 },
        { name: "Punjabi", id: 10 },
        { name: "Odia", id: 11 },
        { name: "Assamese", id: 12 },
        { name: "Urdu", id: 13 },
      ];
      const [pickedLang, setPickedLang] = useState(false);
      const [lang, setLang] = useState(false);
    
      //check Language is Egnlish or not
      const HandleClick = (e) => {
        // console.log(e.target.value);
        if (e.target.value === "NoEnglish") {
          console.log("No English");
          setLang(false);
        } else {
          setLang(true);
        }
      };
    
      const SelectLang = (e) => {
        let id = e.target.id;
        // let element = document.getElementById(id);
        // let elementTag = document.getElementsByTagName("i");
        // console.log(elementTag);
        // elementTag[0].classList.toggle("fa-xmark");
        // element.classList.toggle("active-preffered-lang");
      };
    
      // --------Prev Btn Click Function-------------
      const PrevBtn=()=>{
        // console.log("Previous Button Clicked");
        if (currentlocation) {
          setCurrentLocation(false);
          document.getElementById("HeaderTitleChange").innerText = "Basic Details";
          setBasicDetails(true);
          document.querySelector(".filler").style.width = "0%";
        } else if (experience) {
          setExperience(false);
          document.getElementById("HeaderTitleChange").innerText = "Current Location";
          setCurrentLocation(true);
          document.querySelector(".filler").style.width = "20%";
        } else if (profile) {
          setProfile(false);
          document.getElementById("HeaderTitleChange").innerText = "Experience";
          setExperience(true);
          document.querySelector(".filler").style.width = "30%";
        } else if (skill) {
          setSkill(false);
          document.getElementById("HeaderTitleChange").innerText = "Profile Picture";
          setProfile(true);
          document.querySelector(".filler").style.width = "40%";
        } else if (showpreferred) {
          setShowPreferred(false);
          document.getElementById("HeaderTitleChange").innerText = "Skills";
          setSkill(true);
          document.querySelector(".filler").style.width = "50%";
        } else if (showjob) {
          setShowJob(false);
          document.getElementById("HeaderTitleChange").innerText = "Preferred Language";
          setShowPreferred(true);
          document.querySelector(".filler").style.width = "60%";
        } else if (showjobtitle) {
          setShowJobTitle(false);
          document.getElementById("HeaderTitleChange").innerText = "Job Type";
          setShowJob(true);
          document.querySelector(".filler").style.width = "70%";
        } else if (showresume) {
          setShowResume(false);
          document.getElementById("HeaderTitleChange").innerText = "Job Title";
          setShowJobTitle(true);
          document.querySelector(".filler").style.width = "80%";
          document.getElementsByClassName("btn-next")[0].style.display = "block";
        }
    
      }
    
    
      
      const [checked, setChecked] = useState(false);
      const CheckBox = (e) => {
        setChecked(e.target.checked);
        console.log(checked);
      };
      const [basicdetails, setBasicDetails] = useState(true);
      const [currentlocation, setCurrentLocation] = useState(false);
      const [experience, setExperience] = useState(false);
      const [haveexperiece,setHaveExperience] = useState(false);
      const [profile,setProfile] = useState(false); 
      const [skill, setSkill] = useState(false);
      const [showpreferred, setShowPreferred] = useState(false);
      const [showjob, setShowJob] = useState(false);
      const [showresume, setShowResume] = useState(false);
      const [showjobtitle, setShowJobTitle] = useState(false);
      const [skip, setSkip] = useState(false);
    
    
      // --Next Button Click Function--
      const HandleNext = () => {
        if (basicdetails) {
          setBasicDetails(false);
          document.getElementById("HeaderTitleChange").innerText =
            "Current Location";
          setCurrentLocation(true);
          document.querySelector(".filler").style.width = "20%";
        } else if (currentlocation) {
          setCurrentLocation(false);
          document.getElementById("HeaderTitleChange").innerText = "Experience";
          setExperience(true);
          document.querySelector(".filler").style.width = "30%";
        } else if (experience) {
          setExperience(false);
          document.getElementById("HeaderTitleChange").innerText =
            "Profile Picture";
          setProfile(true);
          document.querySelector(".filler").style.width = "40%";
        }
        else if(profile){
          setProfile(false);
          document.getElementById("HeaderTitleChange").innerText = "Skills";
          setSkill(true);
          document.querySelector(".filler").style.width = "50%";
        }
        else if(skill){
          setSkill(false);
          document.getElementById("HeaderTitleChange").innerText = "Preferred Language";
          setShowPreferred(true);
          document.querySelector(".filler").style.width = "60%";
        }
        else if (showpreferred) {
          setShowPreferred(false);
          document.getElementById("HeaderTitleChange").innerText = "Job Type";
          setShowJob(true);
          document.querySelector(".filler").style.width = "70%";
        } else if (showjob) {
          setShowJob(false);
          document.getElementById("HeaderTitleChange").innerText = "Job Title";
          setShowJobTitle(true);
          document.querySelector(".filler").style.width = "80%";
        } else if (showjobtitle) {
          setShowJobTitle(false);
          document.getElementById("HeaderTitleChange").innerText = "Resume Upload";
          setShowResume(true);
          document.querySelector(".filler").style.width = "90%";
          document.getElementsByClassName("btn-next")[0].style.display = "none";
        } else if (showresume) {
          setShowResume(false);
        }
      };
    
      const HandleSkip = () => {
        setSkip(true);
        document.querySelector(".filler").style.width = "100%";
        document.getElementsByClassName("right-header")[0].style.display = "none";
        setShowResume(false);
      };
      const ShowHaveExperience = ()=>{
        setHaveExperience(true)
      }
      const HideHaveExperience =()=>{
        setHaveExperience(false);
      }
    
      return (
        <div className="candidate-login-main-container">
          <div className="content-box">
            <div className="content-left-box">
              <img src={leftImg} alt="" />
              <span>Trusted by over 2 lakhs+ companies</span>
              <div className="brand-partenership-name">
                <span>Paytm</span>
                <span>Uber</span>
                <span>Grab</span>
                <span>Zomato</span>
                <span>Unzo</span>
                <span>Tata</span>
              </div>
            </div>
    
            <div className="content-right-box">
              <div className="right-header">
                <div id="prevbtn" onClick={PrevBtn}>
                  <i
                    className="fa-solid fa-arrow-left-long"
                    style={{ color: "black" }}
                  ></i>
                  <span id="HeaderTitleChange">Basic Details</span>
                </div>
                <div className="filled-bar">
                  <div className="filler"></div>
                </div>
              </div>
    
              {/* ---here component rendering will be done--- */}
    
              <div className="renderingPages">
                {/* -----------Basic Details-------------- */}
                {basicdetails ? (
                  <div className="b-details">
                    <div className="b-name">
                      <p>Name</p>
                      <input type="text" placeholder="Enter Full Name" />
                    </div>
                    <div className="b-dob">
                      <p>Date of Birth (Dob)</p>
                      <input type="date" placeholder="Enter Full Name" />
                    </div>
                    <div className="b-gender">
                      <p>Gender</p>
                      <div className="f-gender">
                        <span>Male</span>
                        <span>Female</span>
                      </div>
                    </div>
                    <div className="b-email">
                      <label htmlFor="">Email Address (Optional)</label>
                      <input type="text" placeholder="Enter Email Address" />
                    </div>
                  </div>
                ) : null}
    
                {/* -------------Location----------- */}
                {currentlocation ? (
                  <div className="c-location">
                    <div className="c-loc-details">
                      <p>Current Location</p>
                      <span>
                        Your current city will help us find you the best jobs.
                      </span>
                      <div className="c-icon-name-box">
                        <div className="c-loc-icon">
                          <h5>Icon</h5>
                        </div>
                        <div className="c-loc-name">
                          <p>Adarsh Nagar, Jaipur, Rj</p>
                          <button>Change</button>
                        </div>
                      </div>
                    </div>
                    <div className="c-loc-details-bottom">
                      <div className="c-loc-bottom-title">
                        <p>Would you also like to explore jobs outside Jaipur? </p>
                        <span>
                          THis may require you to relocate to other cities.
                        </span>
                        <div className="c-loc-bottom-btn">
                          <button>Yes</button>
                          <button>No</button>
                        </div>
                        <span>
                          Add more cities to see jobs outside your current area.
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}
    
                {/* -------------Experience------------- */}
                {experience ? (
                  <div className="experience-details">
                    <div className="ex-top-show">
                      <p>Do you have work experience ?</p>
                      <div className="ex-top-btn">
                        <button onClick={ShowHaveExperience}>Yes</button>
                        <button onClick={HideHaveExperience}>No</button>
                      </div>
                    </div>
    
                    {haveexperiece ? <div className="ex-hide-box">
                      <div className="ex-h-total">
                          <span>Total Years of Experience</span>
                        <div className="ex-h-total-box">
                          <input type="number" />
                          <span>Years</span>
                          <input type="number" />
                          <span>Months</span>
                        </div>
                      </div>
                      <div className="ex-h-job-title">
                        <span>Job Title</span>
                        <input type="text" placeholder="e.g Software Developer" />
                      </div>
    
                      <div className="ex-h-job-role">
                        <span>Job Role</span>
                        <select name="Select" id="ex-h-select">
                          <option value="softwareEngineer">
                            Software Engineer
                          </option>
                          <option value="webdev">Web Developer Engineer</option>
                          <option value="mobdev">
                            Mobile Application Engineer
                          </option>
                        </select>
                      </div>
                      <div className="ex-h-company-name">
                        <span>Company Name</span>
                        <input type="text" placeholder="e.g Facebook" />
                      </div>
                      <div className="ex-h-industry">
                        <span>Industry</span>
                        <select name="Select" id="ex-h-select">
                          <option value="softwareEngineer">
                            Software Engineer
                          </option>
                          <option value="webdev">Web Developer Engineer</option>
                          <option value="mobdev">
                            Mobile Application Engineer
                          </option>
                        </select>
                      </div>
    
                      <div className="ex-h-working-title">
                        <p>Are you currently working in this company ?</p>
                        <div className="ex-top-btn">
                          <button>Yes</button>
                          <button>No</button>
                        </div>
                      </div>
    
                      <div className="ex-h-current-salary">
                        <span>Current Salary</span>
                        <input type="text" placeholder="$ Amount" />
                        <p>Salary Information is private, we use it only to show relevent jobs.</p>
                      </div>
                      <div className="ex-h-start-date">
                      <span>Start Date</span>
                      <div className="ex-h-my">
                      <div className="month-show">
                      <select name="month" id="">
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                      </select>
                      </div>
                      <div className="year-show">
                      <select name="year" id="">
                        <option value="2010">2010</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                      </select>
                      </div>
                      </div>
                    </div>
                    </div>:null}
    
                    
    
    
    
    
    
                  </div>
                ) : null}
    
    
                {/* --------------------Profile upload---------------- */}
    
                  {
                    profile ? (
                      <div className="resume-container">
                  <div className="resume-top">
                    <h4>Let's add your Phtot to</h4>
                    <p>Profile</p>
                    <span>
                      <i class="fa-solid fa-burst"></i>Recommended
                    </span>
                  </div>
                  <div className="resume-mid">
                    <div className="resume-mid-box">
                      <input type="file" />
                      <i class="fa-solid fa-cloud-arrow-up"></i>
                      <span>Supported formats: PDF, DOC, DOCX</span>
                      <span>Max file size: 5MB</span>
                    </div>
                  </div>
                  <div className="resume-bottom">
                    <span>
                      <i class="fa-regular fa-circle-check"></i>Get your Profile
                      reviewed by experts.
                    </span>
                    <span>
                      <i class="fa-regular fa-circle-check"></i>Get a professionally
                      Upload Profile.
                    </span>
                  </div>
                  <div className="resume-bottom-btn">
                    <button className="btn-skip">Skip</button>
                    <button className="btn-add-photo">
                      Add Photo
                    </button>
                  </div>
                </div>
                    ) : null
                  }
    
                {/* ---Add Skill --------   */}
                  {
                    skill ? <div className="job-title-container">
                  <div className="job-top">
                    <p>What Job Title/role are you looking for ?</p>
                    <span>You can select up to 5 jobs.</span>
                    <div className="job-top-input-box">
                      <i class="fa-solid fa-magnifying-glass"></i>
                      <input type="text" placeholder="Search Skills" />
                    </div>
                  </div>
                  <div className="job-bottom">
                    <p>Suggested Skills</p>
                    <div className="job-title-box">
                      <span>Basic Computer</span>
                      <span>Wire Framing</span>
                      <span>UI/UX</span>
                      <span>Google Cloud</span>
                      <span>Programming Languages</span>
                      <span>AWS</span>
                      <span>UI/UX Designer</span>
                      <span>Computer Hardware</span>
                      <span>Computer Network</span>
                      <span>Database</span>
                      <span>Ajax</span>
                      <span>System Design</span>
                    </div>
                  </div>
                </div>
                :null
                  }
    
                {/* ------------Prefered Language---------------- */}
                {showpreferred ? (
                  <div className="preffered-container">
                    <div className="pref-up">
                      <p>English</p>
                      <div className="lang-box">
                        <input
                          type="radio"
                          name="Language"
                          value="NoEnglish"
                          onClick={HandleClick}
                        />
                        <p>No English</p>
                      </div>
                      <div>
                        <div className="lang-box">
                          <input
                            type="radio"
                            name="Language"
                            value={"Basic"}
                            onClick={HandleClick}
                          />
                          <p>Basic</p>
                        </div>
                        <span>You can understand/speak basic sentences</span>
                      </div>
                      <div>
                        <div className="lang-box">
                          <input
                            type="radio"
                            name="Language"
                            value={"Basic"}
                            onClick={HandleClick}
                          />
                          <p>Intermediate</p>
                        </div>
                        <span>
                          You can have a conversation in English on some topics
                        </span>
                      </div>
                      <div>
                        <div className="lang-box">
                          <input
                            type="radio"
                            name="Language"
                            value={"Basic"}
                            onClick={HandleClick}
                          />
                          <p>Advanced</p>
                        </div>
                        <span>
                          You can do your entire job in English and speak fluently
                        </span>
                      </div>
                    </div>
                    {lang ? (
                      <div className="pref-bottom ">
                        <p>Add other languages you can speak (Optionally)</p>
                        <div className="all-lang-show">
                          {languageName.map((item, index) => {
                            return (
                              <div
                                className="s-lang-box"
                                id={item.id}
                                key={index * 2}
                                onClick={SelectLang}
                              >
                                {item.name}
                                <i className="fa-solid fa-plus" id={item.id}></i>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                    {/* <div className="btn-container">
                      <button className="btn-next" onClick={PreferNext}>Next</button>
                    </div> */}
                  </div>
                ) : null}
    
                {/*-----------------Job Content--------------------- */}
                {showjob ? (
                  <div className="jobType">
                    <div className="job-shift">
                      <p>Prefered Shifts</p>
                      <div className="shift-box">
                        <input
                          type="checkbox"
                          checked={checked}
                          onClick={CheckBox}
                        />
                        <span>Night Shift</span>
                      </div>
                      <div className="shift-box">
                        <input type="checkbox" />
                        <span>Day Shift</span>
                      </div>
                    </div>
                    <div className="job-workplace">
                      <p>Prefered workplace</p>
                      <div className="workplace-box">
                        <input type="checkbox" />
                        <span>Work from Home</span>
                      </div>
                      <div className="workplace-box">
                        <input type="checkbox" />
                        <span>Work from office</span>
                      </div>
                      <div className="workplace-box">
                        <input type="checkbox" />
                        <span>Field Job</span>
                      </div>
                    </div>
                    <div className="job-emp">
                      <p>Preferred Employment Type</p>
                      <div className="emp-box">
                        <input type="checkbox" />
                        <span>Full Time</span>
                      </div>
                      <div className="emp-box">
                        <input type="checkbox" />
                        <span>Part Time</span>
                      </div>
                    </div>
                    {/* <button className="btn-next">Next</button> */}
                    {/* <div className="btn-container">
                      <button className="btn-next">Next</button>
                    </div> */}
                  </div>
                ) : null}
              </div>
    
              {/* -----------Job Title---------------- */}
              {showjobtitle ? (
                <div className="job-title-container">
                  <div className="job-top">
                    <p>What Job Title/role are you looking for ?</p>
                    <span>You can select up to 5 jobs.</span>
                    <div className="job-top-input-box">
                      <i class="fa-solid fa-magnifying-glass"></i>
                      <input type="text" placeholder="Search Job Title" />
                    </div>
                  </div>
                  <div className="job-bottom">
                    <p>Suggested Job title/role.</p>
                    <div className="job-title-box">
                      <span>Software Developer</span>
                      <span>Software Engineer</span>
                      <span>Web Developer</span>
                      <span>Frontend Developer</span>
                      <span>Backend Developer</span>
                      <span>Full Stack Developer</span>
                      <span>UI/UX Designer</span>
                      <span>Graphic Designer</span>
                      <span>Product Manager</span>
                      <span>Product Manager</span>
                      <span>Product Manager</span>
                      <span>Product Manager</span>
                      <span>Product Manager</span>
                      <span>Product Manager</span>
                      <span>Product Manager</span>
                    </div>
                  </div>
                </div>
              ) : null}
    
              {/* --------Resume Upload-------- */}
              {showresume ? (
                <div className="resume-container">
                  <div className="resume-top">
                    <h4>Upload Your Resume !</h4>
                    <p>Receive 2x job offers after uploading</p>
                    <span>
                      <i class="fa-solid fa-burst"></i>Takes less than a min to
                      upload
                    </span>
                  </div>
                  <div className="resume-mid">
                    <div className="resume-mid-box">
                      <input type="file" />
                      <i class="fa-solid fa-cloud-arrow-up"></i>
                      <span>Supported formats: PDF, DOC, DOCX</span>
                      <span>Max file size: 5MB</span>
                    </div>
                  </div>
                  <div className="resume-bottom">
                    <span>
                      <i class="fa-regular fa-circle-check"></i>Get your resume
                      reviewed by experts.
                    </span>
                    <span>
                      <i class="fa-regular fa-circle-check"></i>Get a professionally
                      written resume.
                    </span>
                    <span>
                      <i class="fa-regular fa-circle-check"></i>Get a professionally
                      written resume.
                    </span>
                  </div>
                  <div className="resume-bottom-btn">
                    <button className="btn-upload">Upload</button>
                    <button className="btn-skip" onClick={HandleSkip}>
                      Skip
                    </button>
                  </div>
                </div>
              ) : null}
    
              {skip ? (
                <div className="skip-container">
                  <div className="skip-top">
                    <img src={checkmark} alt="Check-Congratulations" />
                    <h3>Congratulations</h3>
                    <p>Your Profile is successfully created.</p>
                  </div>
                  <div className="skip-mid">
                    <span>
                      Pro-tip : Keep Updating your profile to get more calls from HR{" "}
                    </span>
                  </div>
                  <div className="skip-bottom">
                    <button>Proceed</button>
                  </div>
                </div>
              ) : null}
    
              <div className="btn-container">
                <button className="btn-next" onClick={HandleNext}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default CandidateLogin