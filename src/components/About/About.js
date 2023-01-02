/* eslint-disable linebreak-style */
const About = () => (
  <section id="about-section" className="grid-about">
    <div className="card-about">
      <h2 className="text-titleH2 text-title">About</h2>
      <p className="text-paragraph">
        Remote full-stack developer, passionate about Ruby on Rails and
        JavaScript. I enjoy writing technical articles in my free time. Open to
        new opportunities.
      </p>
      <button
        type="button"
        className="button-about"
        onClick="window.location.href=''"
      >
        Get my CV
      </button>
    </div>
    <div
      id="languages"
      className="card-about-abilities card-about-backgroundimg card-about-bgimg-source1"
    >
      <h3 className="text-title-about title-about">Languages</h3>
      <ul className="ul-about">
        <li className="li-about">JavaScript (ES5/ES6)</li>
        <li className="li-about">Ruby</li>
        <li className="li-about">HTML</li>
        <li className="li-about">CSS</li>
      </ul>
    </div>
    <div
      id="frameworks"
      className="card-about-abilities card-about-backgroundimg card-about-bgimg-source2"
    >
      <h3 className="text-title-about title-about">Frameworks</h3>
      <ul className="ul-about">
        <li className="li-about">Bootstrap</li>
        <li className="li-about">Ruby on rails</li>
        <li className="li-about">RSpec</li>
        <li className="li-about">Capibara</li>
        <li className="li-about">Selenium</li>
      </ul>
    </div>
    <div
      id="skills"
      className="card-about-abilities card-about-backgroundimg card-about-bgimg-source3"
    >
      <h3 className="text-title-about title-about">Skills</h3>
      <ul className="ul-about">
        <li className="li-about">CodeKit</li>
        <li className="li-about">Codepen</li>
        <li className="li-about">GitHub</li>
        <li className="li-about">GitLab</li>
        <li className="li-about">Terminal</li>
      </ul>
    </div>
  </section>
);

export default About;
