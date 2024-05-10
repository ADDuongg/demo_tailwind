import Footer from "./component/footer";
import Header from "./component/header";
import React from "react";
import frame1 from './images/fram1.png';
import background from './images/Background.png';
import backgroundUs from './images/Background-AboutUs.png';
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png';
import pic3 from './images/pic3.png';
import picAbout from './images/pic-about.png'
import avatar1 from './images/avatar1.png';
import avatar2 from './images/avatar2.png';
import avatar3 from './images/avatar3.png';
import backgroundContact from './images/Background-Contact.png'
import useForm from './hook/useForm.jsx'
import picContact from './images/img-contact.png'
import './App.css'
function App() {
  const titleService =
    { title: "Main Services", learnService: "Learn services to focus on your beauty", dumpText: "Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiattellus sagittis, scelerisque eget nulla turpis" }
  const fakeAPI = [
    {
      img: pic1,
      title: "Beauty consultant",
      body: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
    },
    {
      img: pic2,
      title: "Skin treatments",
      body: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
    },
    {
      img: pic3,
      title: "Beauty product",
      body: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
    }
  ]
  const buttons = Array.from({ length: 3 }, (_, index) => (
    <div key={index} className={index % 2 !== 0 ? "active-button-slide " : "btn-slide"}></div>
  ));
  const apiAboutUs = {
    subTitle: "We are the best beauty clinic",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim.Varius tellus in suspendisse placerat.",
    subContent: "Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.",
  }

  const fakeAPITeam = [
    {
      img: avatar1,
      title: "Surgeon",
      subTitle: "Briyan Nevalli",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
    },
    {
      img: avatar2,
      title: "Dermatologist",
      subTitle: "Bella sebastian",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
    },
    {
      img: avatar3,
      title: "Beauty product",
      subTitle: "Lilly Adams",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
    }
  ]
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    inquiry: ''
  };
  const submitForm = (data) => {
    console.log('Form data:', data);
  };

  const { formData, handleChange, handleSubmit, errors } = useForm(initialValues, submitForm);
  return (
    <div className="">
      <Header />
      <div className="h-xl z-0 ">
        <section id="main-slider" className="h-full flex justify-center items-center md:pt-0 pt-10" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left', backgroundSize: '90% 100%' }}>
          <div className="w-11/12 flex lg:flex-row flex-col justify-center items-center">
            <div className="pl-24">
              <div className="text-colorPurple font-bold md:text-5xl text-xl w-3/4">Clinic & beauty consultant</div>
              <div className=" my-6 text-colorPurple font-bold w-4/5">it is a long established fact that a reader will be by the readable content of a
                page</div>
              <button className="custom-btn">More Details</button>
            </div>
            <div className="divImage md:mt-0 ">
              <img className="image-slider" src={frame1} alt="" />
            </div>
          </div>

        </section>
        {/* btn slide */}
        <div className="flex justify-center w-auto h-6 items-center">
          {buttons.map((button, index) => (
            <React.Fragment key={index}>
              {button}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className=" mt-32">
        <section id="coreServices">
          <div className="flex flex-col items-center">
            <div className="text-colorPink font-bold">
              {titleService.title}
            </div>

            <div className="text-colorPurple my-5 font-bold text-4xl lg:w-1/3 w-full  text-center">
              {titleService.learnService}
            </div>
            <div className="text-colorGray text-lg text-center lg:w-2/4 w-full ">
              {titleService.dumpText}
            </div>
          </div>

          <div className=" mt-20 mx-auto w-10/12 flex lg:flex-row flex-col lg:gap-0 gap-5 justify-around items-center">
            {fakeAPI?.map((item, index) => (
              <div className={`h-96 w-80 rounded-3xl p-8 shadow-item`} key={index}>
                <img src={item.img} alt="" className="pictureService mx-auto" />
                <div>
                  <div className="text-center text-colorPurple font-bold text-2xl my-5">
                    {item.title}
                  </div>
                  <div className=" text-center text-colorGray ">
                    {item.body}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>
      </div>


      <div className="h-xl mt-24">
        <section id="main-slider" className="h-full flex justify-center items-center" style={{ backgroundImage: `url(${backgroundUs})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: '70% 100%' }}>
          <div className="w-11/12 flex lg:flex-row flex-col justify-center items-center">

            <div className="h-full w-full pl-24">
              <div className="text-colorPink font-bold text-lg">About us</div>
              <div className="text-colorPurple font-bold text-4xl mt-4">{apiAboutUs.subTitle}</div>
              <div className="text-colorGray text-lg my-6 w-3/4">{apiAboutUs.content}
              </div>
              <div className="text-colorGray text-lg w-3/4">
                {apiAboutUs.subContent}
              </div>
              <div className="divButton mt-4 flex justify-start items-center">
                <button className="custom-btn">
                  Learn More
                </button>
                <div className="divWatch flex justify-between items-center ml-10">
                  <i className="fa-solid fa-circle-play font-bold text-colorPurple text-5xl mr-5"></i>
                  <p className="text-colorGray text-lg">Watch Video</p>
                </div>
              </div>
            </div>

            <img src={picAbout} alt="" className="picture-aboutus lg:w-auto md:w-80 w-full" />
          </div>


        </section>
        {/* btn slide */}
        <div className="flex justify-center w-auto h-6 items-center">
          {buttons.map((button, index) => (
            <React.Fragment key={index}>
              {button}
            </React.Fragment>
          ))}
        </div>
      </div>


      <div className="mt-32">
        <section id="our-team" className={`w-full `}>
          <div className="flex flex-col items-center">
            <div className="text-colorPink font-bold">
              Professional Teams
            </div>
            <div className="text-colorPurple my-5 font-bold text-4xl lg:w-1/3 w-full  text-center">
              The Professional expert
            </div>
            <div className="text-colorGray text-lg text-center lg:w-2/4 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
            </div>
          </div>
          <section id="" className=' w-10/12 mx-auto h-full mt-16 flex lg:flex-row flex-col justify-center items-center'>

            {fakeAPITeam?.map((item, index) => (
              <div className={`${index % 2 !== 0 ? "shadow-item shadow-card cardTeam" : "cardTeam"} h-100 w-96 p-10 rounded-3xl`} key={index}>
                <img src={item.img} alt="" className="pictureService mx-auto" />
                <div className="flex justify-end flex-col items-center mt-10">
                  <div className="text-colorPink font-bold">
                    {item.title}
                  </div>
                  <div className="text-colorPurple my-2 font-bold text-2xl text-center">
                    {item.subTitle}
                  </div>
                  <div className="card-bodytext-colorGray text-center">
                    {item.body}
                  </div>
                </div>
                <div className="iconTeam flex justify-around w-3/5 mx-auto mt-10">
                  <div className='rounded-full w-14 h-14 shadow flex justify-center items-center '>
                    <i className="text-black fa-twitter fa-brands text-2xl"></i>
                  </div>
                  <div className='rounded-full w-14 h-14 shadow flex justify-center items-center'>
                    <i className="text-black fa-brands fa-facebook-f text-2xl"></i>
                  </div>
                  <div className='rounded-full w-14 h-14 shadow flex justify-center items-center'>
                    <i className="text-black fa-instagram fa-brands text-2xl"></i>
                  </div>
                </div>
              </div>
            ))}


          </section>
        </section>
      </div>

      <div className="h-xxl mt-24 lg:mb-0 mb-96">
        <section id="main-slider" className="h-full flex justify-center items-center" style={{ backgroundImage: `url(${backgroundContact})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left', backgroundSize: '70% 100%' }}>
          <div className="w-11/12 h-100 flex lg:flex-row flex-col justify-center items-center">
            <img src={picContact} alt="" className="picture-aboutus" />
            <div className="h-full lg:w-2/4 w-full mx-auto pl-24">

              <div className="flex flex-col items-center justify-center">
                <div className="text-colorPink font-bold text-start w-full">
                  Contact Us
                </div>
                <div className="text-colorPurple my-2 font-bold text-4xl lg:w-8/12 w-full mr-auto text-start">
                  Send your inquiry to
                  our expert team
                </div>
                <div className="text-colorGray text-lg text-start w-full">
                  Lorem ipsum dolor sit amet nulla turapis tellus.
                </div>
              </div>

              <form className="formContact mt-4 flex flex-col items-start justify-start gap-10 h-auto w-full" onSubmit={handleSubmit}>
                <div className="nameInput w-full flex ">
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className=" w-2/4 h-16 mr-5  custom-input" placeholder="First Name" required />
                  {/* {errors.firstName && <div className="error">{errors.firstName}</div>} */}
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className=" w-2/4 h-16 custom-input" placeholder="Last Name" required />
                  {/* {errors.lastName && <div className="error">{errors.lastName}</div>} */}
                </div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className=" w-full h-16 custom-input" placeholder="Email address" required />
                {/* {errors.email && <div className="error">{errors.email}</div>} */}
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className=" w-full h-16 custom-input" placeholder="Subject message" required />
                {/* {errors.subject && <div className="error">{errors.subject}</div>} */}
                <input type="text" name="inquiry" value={formData.inquiry} onChange={handleChange} className=" w-full h-48 custom-input" placeholder="Inquiry" required />
                {/* {errors.inquiry && <div className="error">{errors.inquiry}</div>} */}
                <button className="custom-btn" type="submit">Send Message</button>
              </form>

            </div>


          </div>


        </section>

      </div>

      <Footer />
    </div>
  );
}

export default App;
