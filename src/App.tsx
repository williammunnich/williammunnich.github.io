import * as React from 'react';
import { useState, useEffect } from 'react';

import { FC } from 'react';
import './style.css'; // Assuming you move the CSS into App.css

interface Position {
  x: number;
  y: number;
}

const CatSprite: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [catPosition, setCatPosition] = useState<Position>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const speed: number = 1;
  const jiggleInterval: number = 7000;
  let lastMoveTime: number = Date.now();

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      lastMoveTime = Date.now();
      setIsMoving(true);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener(
        'mousemove',
        handleMouseMove as unknown as (this: Document, ev: MouseEvent) => any
      );
    };
  }, []);

  // Follow mouse movement
  useEffect(() => {
    const followMouse = () => {
      requestAnimationFrame(() => {
        const dx: number = mousePosition.x - catPosition.x;
        const dy: number = mousePosition.y - catPosition.y;
        const distance: number = Math.sqrt(dx * dx + dy * dy);

        if (distance > 50) {
          setCatPosition({
            x: catPosition.x + Math.cos(Math.atan2(dy, dx)) * speed,
            y: catPosition.y + Math.sin(Math.atan2(dy, dx)) * speed,
          });
          setIsMoving(true);
        } else {
          setIsMoving(false);
        }
      });
    };

    followMouse();
  }, [mousePosition, catPosition]);

  // Jiggle effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMoving && Date.now() - lastMoveTime >= jiggleInterval) {
        const catElement = document.getElementById('catSprite') as HTMLElement;
        catElement.style.animation = 'jiggle 1s';

        setTimeout(() => {
          catElement.style.animation = 'none';
        }, 1000);
        lastMoveTime = Date.now();
      }
    }, jiggleInterval);

    return () => clearInterval(interval);
  }, [isMoving]);

  return (
    <img
      src="cat.svg"
      id="catSprite"
      alt="Cat Sprite"
      style={{
        position: 'absolute',
        left: `${catPosition.x}px`,
        top: `${catPosition.y}px`,
        pointerEvents: 'none',
        width: '50px', // Adjust size as needed
        zIndex: 1000,
        transformOrigin: 'center', // Set rotation origin to the center of the sprite
      }}
    />
  );
};

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <p>Hello! Portfolio Coming Soon :)</p>
      <p>
        See my GitHub:{' '}
        <a href="https://github.com/williammunnich">William Munnich's GitHub</a>
      </p>
      <CatSprite />
      <h1>Data Dump (To Sort Later)</h1>
      <p> 
EXPERIENCE
Risk Advisory Intern | Boulay Minneapolis, MN                                                                               June-August 2023
•	Conducted extensive research on past engagements, and assessed compliance of client companies within the SOC 2 Type 1, SOC 2 Type 2, and Microsoft SSPA frameworks to ensure security adherence
•	Demonstrated strong analytical abilities and technical skills by meticulously managing evidence, drafting request lists, and utilizing security auditing software like OneTrust and Vanta to bring customer satisfaction and build trust in Boulay

IT Tech Bench Worker & App Developer | SCSU Husky Tech                                                   March 2022-Present    
•	Provided Microsoft Power Automate knowledge and help to move data reports from the established ticketing system the cloud Aure Database
•	Collaborated with the SCSU Development Team to build a PowerApps Application and make changes to the ticketing system via API
•	Resolving 30+ classroom, staff, and student technical and IT issues through the Team Dynamix ticketing system
•	Reconfiguring 40+ state devices that serve as workstations for the staff and students on campus
•	Strengthened knowledge of software and physical components of computing by trouble shooting previously unseen issues

Vice-President | SCSU Computer Science Club                                                                                                                August 2023-Present
President | SCSU Computer Science Club                                                                                                           September 2021-August 2023
•	Rebuilding Computer Science Club by taking initiative as leader to revive weekly club meetings and Hackathon competitions
•	Provide students with access to career and skill building activities originating on and off campus
•	Networking with 4+ alumni and 5+ staff members to bring back dormant club and provide field specific workshops and presentations

Back End Developer | Minneapolis Southwest High School:                                                                                              March-May 2019       
https://tinyurl.com/wtcc9r87 (GitHub link with code, parts, 3d print models, and pictures)
•	Collaborated with a team of 6 peers, dividing up tasks like 3d printing, ordering parts, and coding, to create a robot that can be controlled over the network from (almost) any WIFI compatible device.
•	Learned back-end coding (java and node), using the software development process, to allow for seamless implementation of a predefined goal of building a robot from scratch
•	Contributed valuable team organization skills by acting as a manager when it was unclear what the next step was to work towards goals and work deal with the constraints of deadlines

PROJECTS 
ByteMe SCSU Hackathon Fall 2023: Web Scraping for Course Optimization                                         Fall 2023
•	Developed a cutting-edge web scraping tool using Selenium and Undetected Chrome Driver to assist SCSU students in optimizing their course schedules
•	Collaborated with team members to design and implement a web scraper that collects course information from SCSU's website
•	Involved in integrating the Rate My Professor API into the system to enhance the accuracy of course recommendations

eCommerce Website Development for Bouldering Holds                                               June 2023 - August 2023
•	Successfully developed and launched an eCommerce website for a custom climbing equipment business, showcasing a range of climbing wall holds and volumes
•	Employed WordPress and WooCommerce, creating an intuitive and user-friendly online store, enhancing the shopping experience as well as the integrated payment and invoicing system
•	Managed website hosting and backend operations using A2 Hosting and cPanel, ensuring reliable site performance.

•	CERTIFICATIONS: AWS Cloud Practitioner C ertified (May 2023), Vanta Inc. Certified (June 2023), OneTrust Certified (June 2023)
      </p>
    </div>
  );
};

export default App;
