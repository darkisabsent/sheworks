import Header from "./Components/header";
import Footer from "./Components/footer";
import step_one from "/assets/step_on.png";
import step_two from "/assets/step_tw.png";
import step_three from "/assets/step_thre.png";
import step_four from "/assets/step_fou.png";
import quote from "/assets/quote.png";
import language from "/assets/books.webp";//
import quiz from "/assets/call.webp";//
import chat from "/assets/service2.svg";//
import dashboard from "/assets/ai.webp";//
import progress from "/assets/lock.webp";//
import notif from "/assets/notif.webp";
import support from "/assets/supp.webp";
import resource from "/assets/jump.webp";//
import hero from "/assets/landing.png";
import land from "/assets/land.jpg"
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* hero section */}

        <section className="text-center pt-16 lg:pt-[120px] pb-10 lg:pb-20 px-4">

          <div className="mt-10  mx-auto flex flex-col lg:flex-row items-center">

            <div className="lg:mr-8">
              <h10>Ladies, Are you missing opportunities?</h10>
              <h1>Climb the Career ladder on</h1><h11>SheWorks</h11>
              <p className="mt-4 mb-10 max-w-[800px]">
                SheWorks is the premier job portal for women, offering a wide range of job opportunities in a variety of industries. Our mission is to empower women in the workforce by connecting them with female-friendly employers and providing resources for career advancement.
              </p>
              <button className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors duration-300">
                Learn More
            </button>
            </div>
            <div>
              <img src={land} width={600} alt="hero-bg" style={{marginTop:'-100px'}}/>
            </div>
          </div>
        </section>


        <section className="px-[25px] mx-auto max-w-[1140px] bg-feature-bg">
          <div className=" pt-20 lg:pt-[120px] text-center">
            <p className="small-heading bg-pink-500" style={{ border: '0px ', color: 'white' }}>Features</p>
            <h2 className=" mt-8 mb-4">Take a glimpse at our features</h2>
            <p className=" sm:max-w-[740px] mx-auto">
            Unlock a world of possibilities with SheWorks's empowering features tailored for women in the workforce. From personalized job recommendations to comprehensive career resources, SheWorks is your ultimate companion on the journey to professional success. Discover below some of the key features that make SheWorks the premier job portal for women:</p>
          </div>

          {/* cards */}
          <div className=" text-[#454545]  card mt-16 bg-feature-bg">
            {/* row one */}
            {/* Dashboard */}
            <Link to="/dashboard" >
              <div
                className="lg:flex lg:gap-10 lg:items-start  px-6 py-7 border-[#D3D8DD]
             border-[1px] rounded-xl h-full"
              >
                <img src={dashboard} alt=""className="w-24 h-24 object-cover" />
                <div>
                  <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">AI Assistant</h3>
                  <p>Our AI Asssistant build with help of openai api which provides you with 2 different services. This AI bot is super powerful and can present you with perfect results within a thanos's snap.
                    </p>
                </div>
              </div>
            </Link>

            {/* Chat */}
            <Link to="/chat">
              <div
                className="lg:flex lg:gap-10 lg:items-start  px-6 py-7 border-[#D3D8DD]
             border-[1px] rounded-xl h-full"
              >
                <img src={chat} alt="" className="w-24 h-24 object-cover"/>
                <div>
                  <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">One-2-One Mentorship</h3>
                  <p>Mentors from all big tech companies like Google,Meta ... are here to assist you in your needs. You will be provided personalized chatting with them.
                    </p>
                </div>
              </div>
            </Link>

            {/* row two */}
            {/* Quiz */}
            <Link to="/quiz">
              <div className="lg:flex lg:gap-10 lg:items-start  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl h-full">
                <img src={quiz} alt="" className="w-24 h-24 object-cover"/>

                <div>
                  <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">Tailored Job Recommendations</h3>
                  <p>
                  Receive personalized job recommendations based on your skills, experience, and preferences, ensuring that you find opportunities that align with your career goals.</p>
                </div>
              </div>
            </Link>

            <Link to="#">
              {/* Language Options */}
              <div className="lg:flex lg:gap-10 lg:items-start  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl h-full">
                <img src={language} alt="" className="w-24 h-24 object-cover"/>
                <div>
                  <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">
                      Exclusive Events and Workshops
                  </h3>
                  <p>
                  Attend exclusive events, workshops, and webinars hosted by SheWorks and its partners, providing valuable opportunities for learning how to make a CV, networking, and skill-building.</p>
                </div>
              </div>
            </Link>

            {/* row three */}
            <Link to="#">
              {/* Resource Suggestions */}
              <div className="lg:flex lg:gap-10 lg:items-start  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl h-full">
                <img src={resource} alt="" className="w-24 h-24 object-cover"/>
                <div>
                  <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">
                  Diverse Job Opportunities
                  </h3>
                  <p>
                  Explore a diverse range of job opportunities from female-friendly employers across various industries, ensuring equal access to rewarding careers for women of all backgrounds.
                    </p>
                </div>
              </div>
            </Link>

            <Link to="#">
              {/* Progress Tracker */}
              <div className="lg:flex lg:gap-10 lg:items-start  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl h-full">
                <img src={progress} alt=""className="w-24 h-24 object-cover" />
                <div>
                  <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">
                    Scholarships
                  </h3>
                  <p>
                    We are raising funds from different people all over the world to give the underprivileged girls a proper guidance and shine in the tech field.  </p>
                </div>
              </div>
            </Link>
            <Link to="#">
              {/* Progress Tracker */}
              <div className="lg:flex lg:gap-10 lg:items-start  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl h-full">
                <img src={notif} alt="" className="w-24 h-24 object-cover"/>
                <div>
                  <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">
                    Get Notified
                  </h3>
                  <p>
                    Whenver there will be any new job coming in our website, you will be notified through your email so that you don't miss any opportunity.</p>
                </div>
              </div>
            </Link>
            <Link to="#">
              {/* Progress Tracker */}
              <div className="lg:flex lg:gap-10 lg:items-start  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl h-full">
                <img src={support} alt="" className="w-24 h-24 object-cover"/>
                <div>
                  <h3 className=" mt-7 mb-3 lg:mt-0 lg:mb-4">
                    24/7 Technical Support
                  </h3>
                  <p>
                    If anybody faces any technical issues with our website, we are here to give backup and are available 24/7 hours online with all our tech team.</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section>
          <div className=" pt-20 lg:pt-[120px] text-center">
            <p className="small-heading bg-pink-500" style={{ border: '0px ', color: 'white' }}>How it works</p>
            <h2 className=" mt-8 mb-4">
              Embark on your personalized journey to find your dream career
            </h2>
            <p className=" sm:max-w-[740px] mx-auto">
              Experience a journey that molds itself
              around your preferences, giving you the tools to access multiple resources and opportunities.
            </p>
          </div>

          <div className=" mt-14 lg:mt-[100px] grid place-items-center">
            {/* first */}
            <div className="flex-center flex-col lg:flex-row gap-8 lg:gap-16 mx-6 ">
              <div className=" max-w-[459px]">
                <h3>Step 1: Register/Sign Up</h3>
                <p>
                Welcome to our platform! Registering with us opens the door to a world of opportunities. Signing up is quick, easy, and completely free. Simply provide us with your basic information, including your name, email address, and a secure password. Once registered, you'll have access to a personalized dashboard where you can explore job opportunities, access workshops and courses, and interact with our AI-powered chatbot.</p>
              </div>
              <img src={step_one} className="w-[672px]" alt="step_one" />
            </div>

            {/* second */}
            <div
              className="flex-center flex-col  gap-8 lg:gap-16 
            mx-6 my-12 lg:my-[100px] lg:flex-row-reverse"
            >
              <div className=" max-w-[459px]">
                <h3>Step 2: Intuitive Dashboard</h3>
                <p>
                Your dashboard is your command center, designed to streamline your job search and career development journey. Here, you can manage your appointments, schedule interviews, and track your progress. With just a few clicks, you can add or cancel appointments, reschedule meetings, and set reminders to stay organized and on top of your game.</p>
              </div>
              <img src={step_two} className="w-[672px]" alt="step_one" />
            </div>

            {/* three */}
            <div className="flex-center flex-col lg:flex-row gap-8 lg:gap-16 mx-6 ">
              <div className=" max-w-[459px]">
                <h3>Step 3: AI chatbot</h3>
                <p>
                Say hello to your virtual career assistant! Our AI-powered chatbot is here to help you navigate the job market with ease. Whether you need assistance finding job openings, updating your resume, or preparing for interviews, our chatbot is available 24/7 to provide personalized support and guidance. With advanced natural language processing capabilities, our chatbot understands your needs and delivers accurate, relevant information in real-time.</p>
              </div>
              <img src={step_three} className="w-[672px]" alt="step_three" />
            </div>

            {/* four */}
            <div
              className="flex-center flex-col gap-8 lg:gap-16 mx-6 
             mt-12 lg:mt-[100px] lg:flex-row-reverse "
            >
              <div className=" max-w-[459px]">
                <h3>Step 4:Get Certificates through our courses and workshops</h3>
                <p>
                Expand your skills, network with industry professionals, and stay up-to-date with the latest trends and developments through our events, workshops, and courses. From resume writing and interview techniques to mastering new technologies and soft skills, our curated programs cover a wide range of topics to help you succeed in your career. Attend live sessions, participate in interactive workshops, and access on-demand courses at your convenience. With expert-led instruction and hands-on learning experiences, you'll gain valuable insights and tools to take your career to the next level.</p></div>
              <img src={step_four} className="w-[672px]" alt="step_one" />
            </div>
          </div>
        </section>

        

        {/* TESTIMONIALS */}
        <section className=" mx-auto max-w-[1140px] pb-16 lg:pb-20 px-4">
          <div className=" pt-20 lg:pt-[120px] text-center">
            <p className="small-heading bg-pink-500" style={{ border: '0px ', color: 'white' }}>Testimonials</p>
            <h2 className=" mt-8 mb-4">Here&apos;s What Our Users Say</h2>
            <p className=" sm:max-w-[1200px] ">
              Discover how our platform is making a difference in the lives of
              many women. Read what other women lived and get inspired by their stories.
            </p>
          </div>

          <div className="flex-between gap-[28px] mt-16 overflow-x-auto ">
            <div className="  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl h-full">
              <img src={quote} alt="" />
              <p className="w-[361px] lg:w-[242px] mt-10 mb-4">
              "SheWorks has been an incredible resource for me in my career journey. With their tailored job recommendations and personalized support, I was able to secure a job at my dream company. The mentorship provided by industry experts was invaluable, and I'm grateful for the community of supportive professionals I've found through SheWorks." - Sarah, Software Engineer</p>

              <span className=" font-bold text-base">Davina</span>
            </div>
            <div className="  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl h-full">
              <img src={quote} alt="" />
              <p className="w-[361px] lg:w-[242px]  mt-10 mb-4">
              "As a recent graduate, I was overwhelmed by the job search process. Their platform not only connected me with relevant job opportunities but also provided me with the tools and resources I needed to succeed. The exclusive workshops helped me sharpen my skills and build my network, leading to exciting career prospects. Thank you, SheWorks, for empowering women like me to thrive!" - Emily, Marketing Specialist</p>

              <span className=" font-bold text-base">JoC's</span>
            </div>
            <div className="  px-6 py-7 border-[#D3D8DD] border-[1px] rounded-xl h-full">
              <img src={quote} alt="" />
              <p className="w-[361px] lg:w-[242px]  mt-10 mb-4">
              "Joining SheWorks was a game-changer for me. As a working mother, finding work-life balance can be challenging, but SheWorks made it easier. The 24/7 technical support ensured that I always had assistance whenever I needed it. SheWorks truly understands the needs of modern women in the workforce, and I'm grateful for the support they've provided me." - Rachel, Project Manager</p>

              <span className=" font-bold text-base">Sonia</span>
            </div>
          </div>
        </section>


        {/* faq */}
        <section className="bg-[#EEEDF5]">
          <div
            className="flex flex-col items-center lg:items-start justify-center py-16 lg:py-[120px] px-4 lg:flex-row gap-5
           lg:gap-10  max-w-lg mx-auto lg:max-w-7xl"
          >
            <div></div>
            <h2 className=" text-left self-start">Frequently Asked Question</h2>

            {/* faqs */}
            <div className=" max-w-lg mt-10 lg:mt-0">
              {/*     What is personalized content learning? */}
              <div>
                <details className="group" open>
                  <summary
                    className="flex cursor-pointer list-none items-center
                   justify-between py-4 text-lg lg:text-[22px] font-semibold 
                   text-secondary-900 group-open:text-primary-500"
                  >
                    What is SheWorks?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 font-normal text-sm lg:text-lg">
                    SheWorks is a platform that gives hope!!
                  </div>
                </details>
              </div>

              {/* How do I get started with the platform? */}
              <div>
                <details className="group">
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between 
                  py-4 text-lg  lg:text-[22px] font-semibold  text-secondary-900 group-open:text-primary-500"
                  >
                    How do I get started with the platform?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 font-normal text-sm lg:text-lg">
                    Getting started is easy! Simply sign up for an account!
                  </div>
                </details>
              </div>

              {/* How does the evaluation process work? */}
              <div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg  lg:text-[22px] font-semibold  text-secondary-900 group-open:text-primary-500">
                    How do I apply For a job
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 tfont-normal text-sm lg:text-lg">
                    Getting started is easy! Simply sign up for an account,
                  </div>
                </details>
              </div>

              {/* Can I change my evaluated abilities later? */}
              <div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg  lg:text-[22px] font-semibold  text-secondary-900 group-open:text-primary-500">
                    Can i make my CV?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 font-normal text-sm lg:text-lg">
                    Yess of course !
                  </div>
                </details>
              </div>

              {/* What subjects and languages are available on the platform? */}
              <div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg  lg:text-[22px] font-semibold  text-secondary-900 group-open:text-primary-500">
                    What subjects and languages are available on the platform?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 font-normal text-sm lg:text-lg">
                    All languages!
                  </div>
                </details>
              </div>

              {/* Can I use the platform on mobile devices? */}
              <div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg  lg:text-[22px] font-semibold  text-secondary-900 group-open:text-primary-500">
                    Can I use the platform on mobile devices?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 font-normal text-sm lg:text-lg">
                    Yes!!
                  </div>
                </details>
              </div>

              {/* Is there a free trial available?*/}
              <div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg  lg:text-[22px] font-semibold  text-secondary-900 group-open:text-primary-500">
                    Is there a free trial available?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 font-normal text-sm lg:text-lg">
                    It's free
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
