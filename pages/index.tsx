import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/style.module.scss";
// import { v4 as uuidv4 } from 'uuid';

const Home: NextPage = () => {
  const CareerGoals = [
    "Trở thành một người truyển cảm hứng, mang lại những suy nghĩ tích cực cho mọi người xung quanh cả trong công việc lẫn cuộc sống.",
    "Đến năm 2024 trở thành một Project Leader quản lý ít nhất 10 member.",
  ];

  const Info = [
    {
      label: "Tuổi",
      value: 25,
    },
    {
      label: "Giới tính",
      value: "Name",
    },
    {
      label: "Số điện thoại",
      value: "0962296199",
    },
    {
      label: "Email",
      value: "giangchuongnguyen@gmail.com",
    },
    {
      label: "Github",
      value: "https://github.com/ngchuong",
    },
    {
      label: "Gitlab",
      value: "https://gitlab.com/ngchuong08",
    },
    // {
    //   label: "Linkedin",
    //   value: "https://www.linkedin.com/in/nguyen-giang-chuong-6a0324242/",
    // },
  ];

  const Experience = [
    {
      id: 1,
      time: "2019/10-2020/10",
      position: "Fresher",
      company: "Toshiba Software Development (Viet Nam) Co, Ltd",
      tasks: [
        "Học về security",
        "Học lập trình hướng đối tượng",
        "Học phân tích thiết kế hệ thống UML",
        "Học cấu trúc dữ liệu và giải thuật",
        "Học react, redux",
        "Thực hành phát triển UI cho nhà máy điện",
      ],
      skills: ["Javascript", "React", "Redux-saga", "Scss"],
    },
    {
      id: 2,
      time: "2022/01-2022/04",
      position: "Developer",
      company: "Outside job",
      tasks: ["Phát triển UI website https://home.job24h.edu.vn/"],
      skills: [
        "Javascript",
        "Reactjs",
        "Redux-thunk",
        "Reduxjs/toolkit",
        "Scss",
      ],
    },
    {
      id: 3,
      time: "2022/04-2022/07",
      position: "Developer",
      company: "Outside job",
      tasks: ["Tham gia phát triển UI, API nền tảng Becomtik"],
      skills: [
        "Javascript",
        "Typescript",
        "Nextjs",
        "Redux-thunk",
        "Reduxjs/toolkit",
        "Prisma",
        "...",
      ],
    },
    {
      id: 4,
      time: "2020/10-Hiện tại",
      position: "Software engineer",
      company: "Toshiba Software Development (Viet Nam) Co, Ltd",
      tasks: ["Học thêm về quy trình", "Tham gia phát triển các microservices"],
      skills: [
        "Javascript",
        "Reactjs",
        "Redux-saga",
        "Redux-thunk",
        "Reduxjs/toolkit",
        "...",
      ],
    },
  ];

  const Technichque = [
    {
      category: "Front-end",
      skill: [
        "Javascript",
        "Typescript",
        "Reactjs",
        "Nextjs",
        "Redux",
        "Scss",
        "...",
      ],
    },
    {
      category: "Back-end",
      skill: ["Nodejs (beginer)"],
    },
    {
      category: "Database",
      skill: ["Mysql", "postgres"],
    },
    {
      category: "Version control",
      skill: ["Git", "SVN"],
    },
  ];

  const SoftSkill = [
    "Có khả năng làm việc độc lập và làm việc nhóm.",
    "Giao tiếp tốt với đồng nghiệp và khách hàng.",
    "Nghiêm túc và có trách nhiệm trong công việc.",
    "Có thể quản lý công việc công việc của bản thân về thời gian, tiến độ, chất lượng.",
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["header"]}>
          <div className={styles["header-image"]}>
            <img
              src={
                "https://www.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_22483456.htm"
              }
              alt="#"
              width={90}
              height={90}
            />
          </div>
          <div className={styles["header-title"]}>
            <div className={styles["header-name"]}>Nguyễn Giang Chương</div>
            <div className={styles["header-content"]}>
              Medium software engineer front-end
            </div>
          </div>
        </div>
        <div className={styles["body"]}>
          <div className={styles["body-content"]}>
            <div className={styles["body-content-field"]}>
              <div className={styles["title"]}>{"Mục tiêu nghề nghiệp"}</div>
              <div className={styles["content-career-goals"]}>
                {CareerGoals.map((el, index) => {
                  return (
                    <div className={styles["goals"]} key={index}>
                      {el}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles["body-content-field"]}>
              <div className={styles["title"]}>{"Kinh nghiệm làm việc"}</div>
              {Experience.reverse().map((el, index) => (
                <div
                  className={styles["content"]}
                  style={{
                    borderBottom: `${
                      index === Experience.length - 1 ? "0" : "1px solid #ccc"
                    }`,
                  }}
                  key={index}
                >
                  <div className={styles["time"]}>{el.time}</div>
                  <div className={styles["info"]}>
                    <div className={styles["company"]}>{el.company}</div>
                    <div className={styles["position"]}>{el.position}</div>
                    <div className={styles["task"]}>
                      Công việc:
                      <div>
                        {el.tasks.map((task, i) => (
                          <div key={i} style={{ padding: "2px 0" }}>
                            {`- ${task}`}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={styles["tech"]}>
                      Công nghệ áp dụng:
                      {el.skills.join(", ")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["body-person-detail"]}>
            <div className={styles["person-header"]}>Thông tin cá nhân</div>
            {Info.map((el) => {
              return (
                <div className={styles["person-field"]} key={el.label}>
                  <div className={styles["label"]}>{el.label}</div>
                  <div className={styles["value"]}>{el.value}</div>
                </div>
              );
            })}
            <div className={styles["title-skills"]}>Kỹ năng</div>
            <div className={styles["skills"]}>
              {Technichque.map((el) => {
                return (
                  <div className={styles["skill"]} key={el.category}>
                    <div className={styles["category"]}>{el.category}:</div>
                    <div className={styles["detail"]}>
                      {el.skill.join(", ")}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles["title-skills"]}>Kỹ năng mềm</div>
            <div className={styles["skills"]}>
              {SoftSkill.map((el) => {
                return (
                  <div className={styles["skill"]} key={el}>
                    {el}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
