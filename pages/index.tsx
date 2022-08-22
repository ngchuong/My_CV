import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/style.module.scss";
// import { v4 as uuidv4 } from 'uuid';

const Home: NextPage = () => {
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
      label: "Github",
      value: "https://github.com/ngchuong",
    },
    {
      label: "Gitlab",
      value: "https://gitlab.com/ngchuong08",
    },
    {
      label: "Linkedin",
      value: "https://www.linkedin.com/in/nguyen-giang-chuong-6a0324242/",
    },
  ];

  const Experience = [
    {
      id: 1,
      time: "2020/10-2022/09",
      position: "Software engineer",
      company: "Toshiba software development VietNam",
      tasks: ["Học thêm về quy trình", "Tham gia phát triển các microservices"],
      skills: [
        "Javascript",
        "Reactjs",
        "Redux-saga",
        "Redux-thunk",
        "Reduxjs/toolkit",
        "Scss",
        "Tailwind",
      ],
    },
    {
      id: 2,
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
        "Scss",
        "Prisma",
        "PostgreSQL",
      ],
    },
    {
      id: 3,
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
      id: 4,
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
        "Scss",
        "Prisma",
        "PostgreSQL",
      ],
    },
    {
      time: "2019/10-2020/10",
      position: "Fresher",
      company: "Toshiba software development VietNam",
      tasks: [
        "Học về security",
        "Học quy trình phát triển phần mềm",
        "Học lập trình hướng đối tượng",
        "Học phân tích thiết kế hệ thống UML",
        "Học cấu trúc dữ liệu và giải thuật",
        "Học react, redux",
        "Thực hành phát triển UI cho nhà máy điện",
      ],
      skills: ["Javascript", "React", "Redux-saga", "Scss"],
    },
  ];

  return (
    <div className={styles["container"]}>
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
            <div className={styles["title"]}>{"Kinh nghiệm làm việc"}</div>
            {Experience.map((el, index) => (
              <div className={styles["content"]} key={index}>
                <div className={styles["time"]}>{el.time}</div>
                <div className={styles["info"]}>
                  <div className={styles["position"]}>{el.position}</div>
                  <div className={styles["company"]}>{el.company}</div>
                  <div>
                    Công việc:
                    <ul>
                      {el.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    Công nghệ áp dụng:
                    <ul>
                      {el.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
