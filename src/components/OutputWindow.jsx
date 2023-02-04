const OutputWindow = () => {
  return (
    <div className="outputWindowContainer | flex h-full w-full items-center justify-center p-8">
      <div className="outputWindow | w-[700px] bg-white [aspect-ratio:1/1.414]">
        <div className="mainContainer | flex h-full gap-6 py-16 px-10">
          <div className="column | w-[50%]">
            <div className="fullName | whitespace-nowrap text-5xl font-semibold text-blue-600">
              Jaydeep Patel
            </div>
            <div className="tagline | mt-2 text-xs font-semibold italic leading-none text-gray-600">
              ReactJS dev with experience in building accessible and responsive
              web applications.
            </div>

            <div className="workExperienceSection | mt-10">
              <div className="sectionTitle | font-semibold text-blue-600">
                WORK EXPERIENCE
              </div>
              <div className="workExperience | mt-1">
                <div className="workTitle">
                  <span className="font-semibold">Frontend dev</span>
                  <span>, RentYaar</span>
                </div>
                <div className="workPeriod | text-xs text-gray-700">
                  Jan 22 - Jun 22
                </div>
                <div className="workDescription | pl-6">
                  <ul className="list-disc">
                    <li className="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      Worked as a frontend dev for RentYaar, which is a Chennai
                      based student startup
                    </li>
                    <li className="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      Built the UI from the ground up using NextJS and
                      TailwindCSS
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="skillSection  | mt-10">
              <div className="sectionTitle | font-semibold text-blue-600">
                SKILLS
              </div>
              <div className="skillList">
                <div className="skill text-sm font-semibold leading-[1.2rem] text-gray-800">
                  ReactJS, NextJS, MongoDB, AWS, Node.js, Spring Boot, UI/UX,
                  Responsive Web design
                </div>
              </div>
            </div>

            <div className="languageSection  | mt-10">
              <div className="sectionTitle | font-semibold text-blue-600">
                LANGUAGES
              </div>
              <div className="languageList">
                <div className="language text-sm font-semibold leading-[1.2rem] text-gray-800">
                  C/C++, Python, Javascript, JAVA, Typescript, TailwindCSS
                </div>
              </div>
            </div>

            <div className="educationSection | mt-10">
              <div className="sectionTitle | font-semibold text-blue-600">
                EDUCATION
              </div>
              <div className="education | mt-1">
                <div className="educationTitle">
                  <span className="font-semibold">SRM university</span>
                </div>
                <div className="educationPeriod | text-xs text-gray-700">
                  2020 - 2024
                </div>
                <div className="educationDescription | pl-4">
                  <ul>
                    <li className="text-sm leading-[1.2rem] text-gray-600">
                      B.tech CSE student at SRM institute of science and
                      technology
                    </li>
                    <li className="text-xs leading-normal text-gray-500">
                      Current CGPA 9.50
                    </li>
                  </ul>
                </div>
              </div>
              <div className="education | mt-1">
                <div className="educationTitle">
                  <span className="font-semibold">SSP school</span>
                </div>
                <div className="educationPeriod | text-xs text-gray-700">
                  2007 - 2020
                </div>
                <div className="educationDescription | pl-4">
                  <ul>
                    <li className="text-sm leading-[1.2rem] text-gray-600">
                      Public school in Gandhinagar, Gujarat
                    </li>
                    <li className="text-xs leading-normal text-gray-500">
                      12th - 84.8%, 10th - 82.2%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="column | w-[50%]">
            <div className="contactSection | flex flex-col items-end text-xs font-semibold text-gray-600">
              <div className="text-gray-800">Contact Info.</div>
              <a
                href="https://www.linkedin.com/in/jaydeep-patel-32b0b0208/"
                className="underline"
              >
                Linkedin
              </a>
              <div>+91 88666 77500</div>
              <a href="mailto:pj0188@srmist.edu.in">pj0188@srmist.edu.in</a>
            </div>
            <div className="socialLinkSection  | mt-10 pt-2">
              <div className="sectionTitle | font-semibold text-blue-600">
                SOCIAL LINKS
              </div>
              <div className="socialLinkList | mt-1 pl-4">
                <div className="socialLink text-sm font-semibold leading-[1.2rem] text-gray-800">
                  Linkedin{" "}
                  <a href="#" className="link | text-blue-500 underline">
                    link
                  </a>
                </div>
                <div className="socialLink text-sm font-semibold leading-[1.2rem] text-gray-800">
                  Github{" "}
                  <a href="#" className="link | text-blue-500 underline">
                    link
                  </a>
                </div>
                <div className="socialLink text-sm font-semibold leading-[1.2rem] text-gray-800">
                  Codechef{" "}
                  <a href="#" className="link | text-blue-500 underline">
                    link
                  </a>
                </div>
                <div className="socialLink text-sm font-semibold leading-[1.2rem] text-gray-800">
                  Codeforces{" "}
                  <a href="#" className="link | text-blue-500 underline">
                    link
                  </a>
                </div>
              </div>
            </div>

            <div className="projectSection | mt-10">
              <div className="sectionTitle | font-semibold text-blue-600">
                PROJECTS
              </div>
              <div className="project | mt-2">
                <div className="projectTitle">
                  <span className="font-semibold">GPA calculator </span>
                  <a href="#" className="link | text-blue-500 underline">
                    link
                  </a>
                </div>
                <div className="projectDescription | pl-6">
                  <ul className="mt-2 list-disc">
                    <li className="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      Worked as a frontend dev for RentYaar, which is a Chennai
                      based student startup
                    </li>
                    <li className="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      Built the UI from the ground up using NextJS and
                      TailwindCSS
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project | mt-2">
                <div className="projectTitle">
                  <span className="font-semibold">P5 showcase</span>
                  <a href="#" className="link | text-blue-500 underline">
                    link
                  </a>
                </div>
                <div className="projectDescription | pl-6">
                  <ul className="mt-2 list-disc">
                    <li className="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      Built with NextJS using SSG
                    </li>
                    <li className="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      This website was made to show the sketches with a preview
                      image
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project | mt-2">
                <div className="projectTitle">
                  <span className="font-semibold">E-Learning Platform </span>
                  <a href="#" className="link | text-blue-500 underline">
                    link
                  </a>
                </div>
                <div className="projectDescription | pl-6">
                  <ul className="mt-2 list-disc">
                    <li className="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      A team project made during the “Code for Good” hackathon
                      2022 conducted by J.P. Morgan Chase
                    </li>
                    <li className="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      Features include user management and student/teacher
                      dashboards
                    </li>
                    <li className="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      Built using NextJS and Django
                    </li>
                  </ul>
                </div>
              </div>
              <div className="project | mt-2">
                <div className="projectTitle">
                  <span className="font-semibold">Codechef Scraper </span>
                  <a href="#" className="link | text-blue-500 underline">
                    link
                  </a>
                </div>
                <div className="projectDescription | pl-6">
                  <ul className="mt-2 list-disc">
                    <li className="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      Python script for collecting contest data from Codechef
                    </li>
                    <li className="mt-1 text-sm leading-[1.2rem] text-gray-600">
                      Uses Selenium and beautiful soup for data extraction
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputWindow;
