AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langName: "Testing Knowledge",
    langDesc: "<li>Web Application - DVWA</li> <li>VAPT - Metasploitable2</li>",
  },
  {
    langName: "Front End Development & Back end Development",
    langDesc: "<li>HTML ,css, Bootstrap</li>  <li>Beginner in Php</li>",
  },
  {
    langName: "My Awards",
    langDesc: "<li>AWARDED A PLACE IN THE HALL OF FAME OF THE MICROSOFT SECURITY RESPONSE CENTER (MSRC), FOR A DISCOVERED ACCESS TOKEN. IN THE YEAR 2021</li>",
  },
  {
    langName: "Certifications",
    langDesc: "<li>BASICS OF COMPUTER HARDWARE (A+) &amp; COMPUTER NETWORKING (N+)</li><li>CCNA- CISCO CERTIFIED NETWORK ASSOCIATE</li>    <li>RED HAT LINUX</li>    <li>MICROSOFT CERTIFIED SOLUTION EXPERT</li>    <li>CERTIFIED ETHICAL HACKER </li>    <li>CERTIFIED BUG HUNTER</li>",
  },
  {
    langName: "Domain Knowledge",
    langDesc: "<li>Use Vulnerability Assessment tools such as Nessus, NMAP to perform security testing.</li><li>Apply OS patches and upgrades on a regular basis and monitor event logs in server.</li><li>Scan for  network and web-based vulnerability detection assessment.</li><li>Configuring Routing protocols such as RIP , EIGRP , OSPF &amp; BGP.</li>  <li>Scanning target networking and systems with commercial, open-source, or custom vulnerability detection scanners.</li> <li>OSI Model and computer networking including knowledge of basic desktop and networking topologies.</li>   <li>Networking - Setting up Hardware, VLAN. Subnetting, Routers, Switches.</li>    <li>Good knowledge of Windows Server administration, AD, group policy, DNS, DHCP.    </li>  <li>Good Understanding in OWASP TOP 10</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
function simulateClick(control) {
  if (document.all) {
    control.click();
  } else {
    var evObj = document.createEvent('MouseEvents');
    evObj.initMouseEvent('click', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null );
    control.dispatchEvent(evObj);
  }
}
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
