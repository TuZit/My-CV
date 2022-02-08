import { useEffect } from "react";
import Typewriter from "typewriter-effect";

import "./App.css";
import "./style.scss";

function App() {
  useEffect(() => {
    const menuBtn = document.querySelector(".responsive-menu");
    const leftMenu = document.querySelector(".left-container");
    menuBtn.addEventListener("click", () => {
      leftMenu.classList.toggle("show");
    });

    return menuBtn.removeEventListener("click", () => {
      leftMenu.classList.toggle("show");
    });
  }, []);
  return (
    <div className="App">
      <div className="main">
        <div className="left-container">
          <div className="left-wrap">
            <div className="intro-name">
              <h3>Nguyễn Tú Anh</h3>
            </div>
            <div className="intro-social-media">
              <a
                href="https://www.facebook.com/SleepingSlayer/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://www.facebook.com/SleepingSlayer/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://github.com/TuZit"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="mailto:nguyentuanh141.uet.vnu@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <i className="far fa-envelope"></i>
              </a>
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About me</a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div
            className="right-banner"
            style={{
              backgroundImage: "url(./img/bg_3.jpg)",
            }}
          >
            <div className="responsive-menu">
              <i className="fas fa-bars"></i>
            </div>
            <h2>Nguyễn Tú Anh</h2>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                cursor: "|",
                pauseFor: 4000,
                deleteSpeed: 20,
                strings: [
                  "Welcome to visit my CV online! ",
                  "Wanna to be your Interns",
                  "Front End Developer",
                ],
              }}
            />
          </div>
          <div className="about">
            <h3 className="section-title">Một chút về bản thân</h3>
            <div className="about-me">
              <div className="about__myself">
                <p>
                  Tìm kiếm những cơ hội và thách thức trong nghề nghiệp, định
                  hướng trở thành một Front-End Developer. Luôn cố gắng hoàn
                  thành các công việc được giao, vào những đóng góp của bộ phận
                  và công ty. Từ đó góp 1 phần đưa sản phẩm, bộ phận và công ty
                  chất lượng hơn, phát triển hơn. Tạo tiền đề có cơ hội thăng
                  tiến trở thành nhân viên chính thức của công ty.
                </p>
                <p style={{ textAlign: "center", marginTop: "3rem" }}>
                  Thông tin liên hệ:
                </p>
                <div className="about__my-info">
                  <div className="about__my-info-items">
                    <p>
                      <span>Ngày sinh:</span> 01/1999.
                    </p>
                    <p>
                      <span>Tuổi:</span> 23.
                    </p>
                    <p>
                      <span>Địa chỉ:</span> 112 Đào Tấn, Hà Nội.
                    </p>
                  </div>
                  <div className="about__my-info-items">
                    <p>
                      <span>Số điện thoại:</span> 0399620152.
                    </p>
                    <p>
                      <span>Email:</span>
                      <a
                        href="mailto:nguyentuanh141.uet.vnu@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        nguyentuanh141.uet.vnu@gmail.com
                      </a>
                    </p>
                    <p>
                      <span>Github:</span>
                      <a
                        href="https://github.com/TuZit"
                        rel="noreferrer"
                        target="_blank"
                      >
                        https://github.com/TuZit
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className="skills">
            <h3 className="section-title">Kỹ năng chuyên môn</h3>
            <div className="skills__container">
              <div className="skill-left">
                <p>
                  Hiểu biết cơ bản về HTML, CSS và JS. Bắt đầu tìm hiểu về
                  Function Components và React Hook. Bản thân tôi đã tìm đến các
                  tài liệu lập trình trên Internet, học tập và cố gắng từng
                  ngày.
                </p>
              </div>
              <div className="skill-right">
                <div className="skill-right__img">
                  <img src="./img/html-5.png" alt="" />
                  <img src="./img/css.png" alt="" />
                  <img src="./img/javascript.png" alt="" />
                </div>
                <div className="skill-right__img">
                  <img src="./img/react.png" alt="" />
                  <img src="./img/sass.png" alt="" />
                  <img src="./img/github.png" width={60} height={60} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* Edu */}
          <div id="education">
            <h3 className="section-title">Học Vấn</h3>
            <div className="edu-container">
              <h4>09/2017 - 01/2022</h4>
              <p>Sinh viên tại Đại Học Công Nghệ - ĐHQG HN</p>
              <span style={{ fontSize: "1.6rem" }}>
                Tốt nghiệp chuyên ngành Cơ Kỹ Thuật
              </span>
              <h4>10/2021 - 12/2021</h4>
              <p>Học viên tại FPT Software Academy</p>
              <span style={{ fontSize: "1.6rem" }}>
                Khoá học: Front-end Developer
              </span>
            </div>
          </div>
          {/* Projects */}
          <div id="projects">
            <h3 className="section-title">Một số Projects</h3>
            <div className="projects-wrap">
              <div className="project-items">
                <img src="./img/pr_1.png" alt="" />
                <div className="project-items__modal">
                  <div className="pr-modal__overlay" />
                  <div className="pr-modal__body">
                    <p>
                      <a href="https://tripo-game.netlify.app/" target="_blank">
                        View Project
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://github.com/TuZit/tripo_1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source Code
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-items">
                <img src="./img/pr_2.png" alt="" />
                <div className="project-items__modal">
                  <div className="pr-modal__overlay" />
                  <div className="pr-modal__body">
                    <p>
                      <a
                        href="https://tesla-clone-tuu.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://github.com/TuZit/Tesla-clonee"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source Code
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-items">
                <img src="./img/pr_3.png" alt="" />
                <div className="project-items__modal">
                  <div className="pr-modal__overlay" />
                  <div className="pr-modal__body">
                    <p>
                      <a
                        href="https://tuzit.github.io/game_demo/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://github.com/TuZit/game_demo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source Code
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-items">
                <img src="./img/pr_4.png" alt="" />
                <div className="project-items__modal">
                  <div className="pr-modal__overlay" />
                  <div className="pr-modal__body">
                    <p>
                      <a
                        href="https://netflixx-clonee.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://github.com/TuZit/Netflix-clone"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source Code
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-items">
                <img src="./img/pr_5.png" alt="" />
                <div className="project-items__modal">
                  <div className="pr-modal__overlay" />
                  <div className="pr-modal__body">
                    <p>
                      <a
                        href="https://my-cv-tuu.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://github.com/TuZit/My-CV"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source Code
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p id="footer">Cảm ơn đã ghé thăm CV của tôi!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
