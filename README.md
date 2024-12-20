# Charging (차징)
- Charging은 환경과 경제성을 모두 챙기고 싶은 전기차주, 예비 차주분들을 위한 커뮤니티 서비스입니다

## 프로젝트 구성 안내

## 1. 프로젝트 소개

  - 사용하려는 데이터
    - 한국환경공단_전기자동차 충전소 정보 ( 전기차 충전소 )
    - 자동차별 탄소 배출 데이터
    - 연도별 리튬 배터리 가격 데이터
    - 연도별 전기차 판매량 데이터
    - 연도별 고속, 완속 충전기 데이터

  - 기술 스택 
    - Front-End
      ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
      ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
      ![Axios](https://img.shields.io/badge/Axios-20232A?style=flat-square&logo=axios&logoColor=61DAFB)
      ![Vite](https://img.shields.io/badge/Vite-20232A?style=flat-square&logo=vite&logoColor=AD46EF)
      ![ShadCN](https://img.shields.io/badge/ShadCN-20232A?style=flat-square&logo=shadcn&logoColor=black)
      ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
      ![Jotai](https://img.shields.io/badge/Jotai-20232A?style=flat-s&logo=jotai&logoColor=61DAFB)
      ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
    
    - Back-End
      ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
      ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node-dot-js&logoColor=white)
      ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
      ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
      ![OAuth](https://img.shields.io/badge/OAuth-000000?style=flat-square&logo=oauth&logoColor=white)
      ![Passport](https://img.shields.io/badge/Passport-34E27A?style=flat-square&logo=passport&logoColor=white)
      ![NanoID](https://img.shields.io/badge/NanoID-000000?style=flat-square&logo=nanoid&logoColor=white)

    - Data Analysis
      ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
      ![Numpy](https://img.shields.io/badge/Numpy-013243?style=flat-square&logo=numpy&logoColor=white)
      ![Matplotlib](https://img.shields.io/badge/Matplotlib-000000?style=flat-square&logo=matplotlib&logoColor=white)
      ![Seaborn](https://img.shields.io/badge/Seaborn-3776AB?style=flat-square&logo=seaborn&logoColor=white)

## 2. 프로젝트 목표

**데이터 분석 결과로 도출되는 인사이트와 웹서비스의 해결과제에 대한 논의**
  - 연도별 전기차 판매 데이터를 Bass모델로 분석한 결과 2032년까지 판매량이 증가하다 2033년부터 감소하기 시작할 것이라는 결론이 도출되었습니다.
  - 전기차의 주요 구매 요인은 경제적 요인 (정부의 보조금, 충전 비용의 감소)과 환경적 요인 (탄소배출량 감소)이 주를 이루었습니다.
  - 이러한 전기차 커뮤니티를 만들게 된 이유는 2032년부터는 전기차의 판매가 하락할 것이라는 전망때문입니다. 이러한 전망을 개선하기 위해 전기차의 WoM(구전 효과)를 극대화 시키면 이러한 판매 감소를 극복할 수 있다고 판단했습니다.
  - 이러한 WoM을 극대화 시키기 위해서는 솔직한 리뷰를 보는 것이라고 판단했습니다. 사람들이 전기차에 대한 정보를 획득할 수 있는 플랫폼의 수가 현재는 적기 때문에 이러한 구전효과가 발생하지 않아서 현재 전기차의 재고가 늘어나고 있습니다.
  - 따라서 이러한 커뮤니티를 통해 미래 문제 상황을 방지, 해결하고자 하였습니다.

## 3. 프로젝트 기능 설명

**웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**

  - 주요 기능 : 
    - 전기차 충전소의 실시간 상황 파악, 리뷰 작성 및 조회 
    - 전기차에 대한 정보 제공 및 리뷰 작성 및 조회
    - 데이터 분석을 통한 전기차 시장의 확장

  - 부가 기능 : 
    - MBTI테스트를 이용한 차량 추천
    - 

  - 프로젝트의 차별점, 기대효과
    - 차별점 : 
      - 데이터 분석을 통해 전기차의 필요성 강조
      - Typescript로 작성하여 코드의 안정성 증가
      - 소셜로그인으로만 구성하여 개인민감정보 보안
      - 전기차 충전소 실시간 정보와 리뷰를 한번에 제공
      - 전기차 충전소 서치 기능

    - 기대효과 :
      - 전기차에 대한 사람들의 관심 증가 및 정보공유
      - 보다 윤택한 전기차 생활

## 4. 프로젝트 구성도
  - 피그마
  ![figma](https://github.com/user-attachments/assets/ebf79c1f-7fca-4e32-ac25-493c89cac233)

  - ERD
  ![ERD](https://github.com/user-attachments/assets/9ea009b1-6366-47be-b59f-f1b23bcec756)
    
  - 소셜로그인
  ![social](https://github.com/user-attachments/assets/73dcf103-49d8-40b3-9eb6-3d2f18a2c1d3)

  - 메인 페이지
  ![main](https://github.com/user-attachments/assets/80a7b5b9-d304-4fdf-9bf4-b8c15c0cb6ad)

  - 전기차 정보
  ![car_main](https://github.com/user-attachments/assets/9deeee24-709f-4989-802e-939fa9f038fd)
  ![car_info](https://github.com/user-attachments/assets/3b120975-e1b1-411c-8c22-fc4763dab643)

  - 전기차 충전기
  ![mao_info](https://github.com/user-attachments/assets/a09bc254-9089-4b8f-94e0-4f3f0d4af79a)
  ![map_charger](https://github.com/user-attachments/assets/7706458f-526e-4607-bafb-8986dfd7b37a)
  ![map_comment](https://github.com/user-attachments/assets/b52f043c-0498-47b8-9790-feb0d46798b4)


  - 나에게 맞는 전기차
![MBTI](https://github.com/user-attachments/assets/1e4cd4c3-37f9-4cbe-aba1-14453f070348)
![MBTI_select](https://github.com/user-attachments/assets/bdcfb39d-c4b5-4b2b-b146-9db0e1a9d667)
![MBTI_result](https://github.com/user-attachments/assets/d5312d91-5177-45dd-88ea-3a80e3d3f051)



## 5. 프로젝트 팀원 역할 분담
|  이름  |             담당 업무                |
| ------ | ------------------------------------ |
| 김경하 | 프론트엔드 개발 / 데이터 분석        |
| 김재근 | 프론트엔드 개발 / 데이터 분석        |
| 김홍진 | 백엔드 개발 / 데이터 분석            |
| 원경혜 | 백엔드 개발 / 데이터 분석            |
| 임도헌 | 팀장 / 프론트엔드 개발 / 데이터 분석 |
| 한유림 | 백엔드 개발 / 데이터 분석            |

