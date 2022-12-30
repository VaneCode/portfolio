const About = () => (
<section id="about-section" class="grid-about">
            <div class="card-about">
                <h2 class="text-titleH2 text-title">About</h2>
                <p class="text-paragraph">
                    Remote full-stack developer, passionate about Ruby on Rails and JavaScript. I enjoy writing technical articles in my free time. Open to new opportunities.
                </p>
                <button type="button" class="button-about" onclick="window.location.href=''">
                    Get my CV
                </button>
            </div>
            <div id="languages" class="card-about-abilities card-about-backgroundimg card-about-bgimg-source1">
                <h3 class="text-title-about title-about">Languages</h3>
                <ul class="ul-about">
                    <li class="li-about">JavaScript (ES5/ES6)</li>
                    <li class="li-about">Ruby</li>
                    <li class="li-about">HTML</li>
                    <li class="li-about">CSS</li>
                </ul>
            </div>
            <div id="frameworks" class="card-about-abilities card-about-backgroundimg card-about-bgimg-source2">
                <h3 class="text-title-about title-about">Frameworks</h3>
                <ul class="ul-about">
                    <li class="li-about">Bootstrap</li>
                    <li class="li-about">Ruby on rails</li>
                    <li class="li-about">RSpec</li>
                    <li class="li-about">Capibara</li>
                    <li class="li-about">Selenium</li>
                </ul>
            </div>
            <div id="skills" class="card-about-abilities card-about-backgroundimg card-about-bgimg-source3">
                <h3 class="text-title-about title-about">Skills</h3>
                <ul class="ul-about">
                    <li class="li-about">CodeKit</li>
                    <li class="li-about">Codepen</li>
                    <li class="li-about">GitHub</li>
                    <li class="li-about">GitLab</li>
                    <li class="li-about">Terminal</li>
                </ul>
            </div>
            <div class="decorative-skills"></div>
        </section>
);

export default About;
