import { useState } from "react";

function App() {
  return (
    <>
      {/* main section */}
      <div className="container-fluid main-section ">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <div className="col ">
                <p className="lead mb-3">
                  Hi, my name is <b> William Munnich</b>, a gradute of cybersecurity from Saint Cloud State University. With a passion for software engineering, my aim is to craft innovative and secure software solutions efficiently. From high school projects to endeavors like building web applications for my university and exploring social media APIs for personal projects, I find joy in both the broader scope of software development and the intricacies of mastering programming languages and problem-solving techniques."
                </p>
                <div className="mt-3  mb-3 d-flex justify-content-center">
                  <a type="button"  href="/resume/William_Munnich.pdf" download className="btn btn-dark btn-lg headers">
                    Download My resume <i class="fa-solid fa-file-arrow-down"></i>
                  </a>
            

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 second d-none d-lg-block ">
            <img
              src="/williamMunichProfileImage.jpg"
              alt="William Munich Profile Image"
              className="profileIMG "
            />
          </div>
        </div>
      </div>

      {/* skills section */}
      
  
    <div class="logos border border-top-0 border-start-0 border-end-0 border-2">

<div class="logos-slide ">
  <img src="/logos/c++.png"   alt="C++"/>
  <img src="/logos/html.svg" className="img-fluid" alt="HTML"/>
  <img src="/logos/css.svg" alt="CSS"/>
  <img src="/logos/python.svg" alt="Python"/>
  <img src="/logos/java.svg" alt="Java"/>
  <img src="/logos/aws.svg" alt="AWS"/>
  <img src="/logos/office.svg" alt="OFFICE"/>
  <img src="/logos/azure.svg" alt="AZURE"/>
  
  <img src="/logos/python.svg" alt="Python"/>
  <img src="/logos/java.svg" alt="Java"/>
  <img src="/logos/c++.svg" alt="C++"/>
  <img src="/logos/html.svg" alt="HTML"/>
  <img src="/logos/css.svg" alt="CSS"/>
  <img src="/logos/aws.svg" alt="AWS"/>
  <img src="/logos/office.svg" alt="OFFICE"/>
  <img src="/logos/azure.svg" alt="AZURE"/>
  <img src="/logos/c++.svg"   alt="C++"/>
  <img src="/logos/html.svg" className="img-fluid" alt="HTML"/>
  <img src="/logos/css.svg" alt="CSS"/>
  <img src="/logos/python.svg" alt="Python"/>
  <img src="/logos/java.svg" alt="Java"/>
  <img src="/logos/aws.svg" alt="AWS"/>
  <img src="/logos/office.svg" alt="OFFICE"/>
  <img src="/logos/azure.svg" alt="AZURE"/>
  
  <img src="/logos/python.svg" alt="Python"/>
  <img src="/logos/java.svg" alt="Java"/>
  <img src="/logos/c++.svg" alt="C++"/>
  <img src="/logos/html.svg" alt="HTML"/>
  <img src="/logos/css.svg" alt="CSS"/>
  <img src="/logos/aws.svg" alt="AWS"/>
  <img src="/logos/office.svg" alt="OFFICE"/>
  <img src="/logos/azure.svg" alt="AZURE"/>
  <img src="/logos/c++.svg"  alt="C++"/>
  <img src="/logos/html.svg" className="img-fluid" alt="HTML"/>
  <img src="/logos/css.svg" alt="CSS"/>
  <img src="/logos/python.svg" alt="Python"/>
  <img src="/logos/java.svg" alt="Java"/>
  <img src="/logos/aws.svg" alt="AWS"/>
  <img src="/logos/office.svg" alt="OFFICE"/>
  <img src="/logos/azure.svg" alt="AZURE"/>
  
  <img src="/logos/python.svg" alt="Python"/>
  <img src="/logos/java.svg" alt="Java"/>
  <img src="/logos/c++.svg" alt="C++"/>
  <img src="/logos/html.svg" alt="HTML"/>
  <img src="/logos/css.svg" alt="CSS"/>
  <img src="/logos/aws.svg" alt="AWS"/>
  <img src="/logos/office.svg" alt="OFFICE"/>
  <img src="/logos/azure.svg" alt="AZURE"/>
</div>
</div>
   
    
  

  
 



      {/* work timeline */}
      <div class="container-fluid  work-section p-3 mt-2">
        <h2 className="text-center text-white headers">Work experience</h2>
        <div className="container ">
          <div class="card jobcard   mb-3 mt-2 p-2">
            <div class="container d-flex">
              <h2 class="justify-content-start flex-grow-1 headers ">SCSU Husky Tech</h2>
              <div class="badge text-dark justify-content-end text-white headers">
                2022 - Present
              </div>
            </div>

            <div class="card-body jobtext">
              <h5 class="card-title fw-bold">
                <i class="fa-solid fa-briefcase headers"></i> IT Tech Bench Worker &
                Automation Engineer
              </h5>

              <p class="card-text jobtext ">
                I assisted in transitioning data reports from our ticketing
                system to Azure Database using Microsoft Power Automate,
                offering guidance and support throughout. Collaborated with the
                SCSU Dev Ops Team to develop a PowerApps Application and
                implemented updates to the ticketing system using Team Dynamix
                API. I addressed over 30 technical issues for classrooms, staff,
                and students through the ticketing system, and reconfigured more
                than 40 state devices used by staff and students on campus. This
                experience deepened my understanding of both software and
                hardware components through troubleshooting various unforeseen
                issues.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="card jobcard mb-3 mt-2 p-2">
            <div class="container d-flex">
              <h2 class="justify-content-start flex-grow-1 headers">
                Cyber security Internship
              </h2>
              <div class="badge text-dark justify-content-end text-white">Summer 2023</div>
            </div>

            <div class="card-body jobtext">
              <h5 class="card-title fw-bold">
                <i class="fa-solid fa-briefcase headers"></i> Risk Advisory Intern at <a href="https://boulaygroup.com/" target="_blank" id="bouleyLink">Bouley</a>
              </h5>

              <p class="card-text jobtext">
              I thoroughly looked into previous projects and checked if client companies followed certain security standards: SOC 2 Type 1, which examines security controls at a specific time, SOC 2 Type 2, which assesses their effectiveness over time, and Microsoft SSPA, which sets security requirements for suppliers working with Microsoft. I made sure they were sticking to these standards to keep their data safe. My work showed that I'm good at analyzing information and handling technical tasks, like organizing evidence and making lists of what's needed. I also used security tools like OneTrust and Vanta. All of this was to make sure customers were happy and trusted Boulay.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* projects */}
     

      <div class="container-fluid project-section p-3">
  <h2 class="text-center headers ">My projects</h2>
  <div class="container mt-2 p-2">

    <div class="row row-cols-1 row-cols-md-2">

        <div class="col">
            <div class="card  mb-3">
                <div class="card-header project-headers">
                Streamlining Time Tracking: A Modern Card Swipe Solution                </div>
                <div class="card-body jobtext">
                    <p>This project is all about creating a new card swipe system to make tracking time and attendance easier for Saint Cloud State University Student Government. It uses React for the front end (what you see) and Ruby on Rails for the back end (where data is processed). With this system, users can log in securely, see a list of members and their swipes, and keep track of time. When someone swipes their card, the system records the time and calculates how long they've been there. It's designed to make things more efficient and accurate, so everyone gets paid fairly and attendance is logged properly. Overall, it's a modern solution to an age-old problem, using the latest technology to benefit the student government.</p>
                    <div class="project-links text-center">
                        <a href="https://github.com/Swip-Card-For-SCSU-Tech-Committee/The_Cardswipe_System" target="_blank">View Project source code <i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card  mb-3">
                <div class="card-header project-headers">
                SWHS Open-Source Robotics Curriculum: Raspberry Pi & Java                </div>
                <div class="card-body jobtext">
                    <p>Southwest High School presents an innovative curriculum project, SWHS-RaspPiJavaRobotics, designed to introduce students and instructors to both AP CSA (Computer Science Applications) and Robotics using Java programming. This pioneering initiative aims to provide accessible robotics programming while keeping costs low. The project offers a complete, open-source solution, including hardware interfaces, with all necessary materials and code available in the repository. With a focus on user-friendliness, the curriculum includes well-documented APIs for easy development. Currently seeking contributions for further enhancements, the project stands as a testament to collaborative learning and innovation in education.</p>
                    <div class="project-links text-center">

                        <a href="https://github.com/CSE-SouthwestHS/SWHS-RaspPiJavaRobotics" target="_blank">View Project source code <i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card  mb-3">
                <div class="card-header project-headers">
                    Understanding Ransomware Creation: An Educational Exploration
                </div>
                <div class="card-body jobtext">
                <p>This project is an educational exploration of Python-based ransomware creation. Inspired by a malware tutorial, it utilizes Python's cryptography library, particularly Fernet for AES 128-bit encryption and decryption. Initially designed to encrypt files within a directory, it evolved to handle subdirectories as well. Compiled into executable files for ease of testing, it's crucial to approach with caution to prevent data loss. Installation involves the cryptography library, placing "my_ransomware.py" and "decrypt.py" files, and executing "python my_ransomware.py" for encryption and "python decrypt.py" for decryption. PyInstaller compiles Python files into standalone executables for convenience. Visual representations illustrate files before and after encryption, highlighting the project's educational focus and functionality.</p>                    <div class="project-links">
                <div class="project-links text-center">
                <a href="https://github.com/williammunnich/ransomware_example" target="_blank">View Project source code <i class="fas fa-external-link-alt"></i></a>
                </div>  
                    </div>
                </div>
            </div>
        </div>

        <div class="col ">
            <div class="card  mb-3  ">
                <div class="card-header project-headers   ">
                Music Catalog Overview                </div>
                <div class="card-body jobtext">
                    <p>The index page serves as a centralized hub, offering easy access to all albums and songs by a specific artist, along with their related metadata. It provides a comprehensive overview of the artist's musical collection, allowing users to explore their work effortlessly. Whether someone is looking for a particular album or simply browsing through the artist's discography, they can find everything they need on this page. Each album and song is accompanied by its relevant information, ensuring that users have all the details they need to make informed choices about what to listen to. This user-friendly interface simplifies the navigation process, making it convenient for music enthusiasts to discover and enjoy the artist's catalog. It's important to note that this setup is designed solely for educational purposes.</p>
                    <div class="project-links text-center">
                        <a href="https://github.com/williammunnich/Video-Downloader" target="_blank">View Project source code <i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>


    </div>
</div>

</div>
<footer class="bg-white text-dark text-center py-4">
    <div class="container">
      <p>&copy; 2024  <a href="https://www.linkedin.com/in/william-munnich/" target="_blank">William Munnich</a></p>
    </div>
  </footer>

    </>
  );
}

export default App;
