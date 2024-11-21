import { NextResponse } from "next/server";

interface Cards {
  profileImageUrl: string;
  flag: string;
  name: string;
  designation: string;
  exp: string;
  skills: string[];
}

type advantages = {
  title: string;
  desc: string;
};

type checkbox = {
  checked: boolean;
  text: string;
};

interface HeroSectionData {
  tooltip: string;
  title1: string;
  title2: string;
  subtitle1: string;
  subtitle2: string;
  cta: string;
}

type miniCards = {
  icon: string;
  title: string;
};

export async function GET() {
  const slideshowData: Cards[] = [
    {
      profileImageUrl:
        "https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cnrDfiLjTDgz0QcRzalMAzAJjD8pP3TXBvtZI5J2y4YDNV4-HMaOUlWHV6WMEu8D0aLin7DVUZoNeH~78RcliWBAlw0w9vZNcd2U4CTtaTQzRz5k77E6xelRXvg8j-CUbDJj2hQp0G5nLwKuqGCi7yxPfTOwxwtfEZOjW5EzMNmW0vvwmaWzSsV~de--XPEIWVDnACUeqrh56YsO9FJjupcg8pk57dcK1vFCLVzcBcmq~~iUJbLn6sbUN0JiAb2jqZ2pHp92219iI9k0SYhYFQ0EwxGVg4-D4j5zPvdC4opFsMDeCrVdYV-MeVZXkH9Iy95zOCPtqv5sJm1penzurA__",
      flag: "https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pwtk-FT5zmpiPJI2yXwWnrgT5EjxipurSinJ1~4M6xgB2XDqIiUZrNCxDyp4zfvpPhrO-G9dZ5HNpPE9pM-gDPj9jfO1p6MmRZu9IbngYnzXcX9XbZ9BVbtNeaRXS31R06wcYfV7GuOdx2LgtN6TzmLBeqThkf7AbyRcjKWLlgN~oAnZCoM3tGEvi33~oxiJkpJ4QAsqa2ow8AcL2lDikeOx7ZxbSTUOZfnufSuARh~bnstnkfwRUXGcrtqoIC~PCW6hcBbSQ9M3l6NtwjEq5QTwRsNoh85SgeZM-8i1QKnhQzXlnWukmYFjEtZspfP2uIdDQbbyllFGDST-6UpGEA__",
      name: "Abhishek Gupta",
      designation: "마케팅",
      exp: "2y+",
      skills: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
    {
      profileImageUrl:
        "https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cnrDfiLjTDgz0QcRzalMAzAJjD8pP3TXBvtZI5J2y4YDNV4-HMaOUlWHV6WMEu8D0aLin7DVUZoNeH~78RcliWBAlw0w9vZNcd2U4CTtaTQzRz5k77E6xelRXvg8j-CUbDJj2hQp0G5nLwKuqGCi7yxPfTOwxwtfEZOjW5EzMNmW0vvwmaWzSsV~de--XPEIWVDnACUeqrh56YsO9FJjupcg8pk57dcK1vFCLVzcBcmq~~iUJbLn6sbUN0JiAb2jqZ2pHp92219iI9k0SYhYFQ0EwxGVg4-D4j5zPvdC4opFsMDeCrVdYV-MeVZXkH9Iy95zOCPtqv5sJm1penzurA__",
      flag: "https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pwtk-FT5zmpiPJI2yXwWnrgT5EjxipurSinJ1~4M6xgB2XDqIiUZrNCxDyp4zfvpPhrO-G9dZ5HNpPE9pM-gDPj9jfO1p6MmRZu9IbngYnzXcX9XbZ9BVbtNeaRXS31R06wcYfV7GuOdx2LgtN6TzmLBeqThkf7AbyRcjKWLlgN~oAnZCoM3tGEvi33~oxiJkpJ4QAsqa2ow8AcL2lDikeOx7ZxbSTUOZfnufSuARh~bnstnkfwRUXGcrtqoIC~PCW6hcBbSQ9M3l6NtwjEq5QTwRsNoh85SgeZM-8i1QKnhQzXlnWukmYFjEtZspfP2uIdDQbbyllFGDST-6UpGEA__",
      name: "Abhishek Gupta",
      designation: "마케팅",
      exp: "2y+",
      skills: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
    {
      profileImageUrl:
        "https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cnrDfiLjTDgz0QcRzalMAzAJjD8pP3TXBvtZI5J2y4YDNV4-HMaOUlWHV6WMEu8D0aLin7DVUZoNeH~78RcliWBAlw0w9vZNcd2U4CTtaTQzRz5k77E6xelRXvg8j-CUbDJj2hQp0G5nLwKuqGCi7yxPfTOwxwtfEZOjW5EzMNmW0vvwmaWzSsV~de--XPEIWVDnACUeqrh56YsO9FJjupcg8pk57dcK1vFCLVzcBcmq~~iUJbLn6sbUN0JiAb2jqZ2pHp92219iI9k0SYhYFQ0EwxGVg4-D4j5zPvdC4opFsMDeCrVdYV-MeVZXkH9Iy95zOCPtqv5sJm1penzurA__",
      flag: "https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pwtk-FT5zmpiPJI2yXwWnrgT5EjxipurSinJ1~4M6xgB2XDqIiUZrNCxDyp4zfvpPhrO-G9dZ5HNpPE9pM-gDPj9jfO1p6MmRZu9IbngYnzXcX9XbZ9BVbtNeaRXS31R06wcYfV7GuOdx2LgtN6TzmLBeqThkf7AbyRcjKWLlgN~oAnZCoM3tGEvi33~oxiJkpJ4QAsqa2ow8AcL2lDikeOx7ZxbSTUOZfnufSuARh~bnstnkfwRUXGcrtqoIC~PCW6hcBbSQ9M3l6NtwjEq5QTwRsNoh85SgeZM-8i1QKnhQzXlnWukmYFjEtZspfP2uIdDQbbyllFGDST-6UpGEA__",
      name: "Abhishek Gupta",
      designation: "마케팅",
      exp: "2y+",
      skills: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
  ];

  const advantagesCards: advantages[] = [
    {
      title: "평균 월 120만원",
      desc: "임금을 해당 국가를 기준으로 계산합니다.",
    },
    {
      title: "최대 3회 인력교체",
      desc: "막상 채용해보니 맞지 않아도 걱정하지 마세요.",
    },
    {
      title: "평균 3일, 최대 10일",
      desc: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
    },
  ];

  const checkboxesData: checkbox[] = [
    {
      checked: true,
      text: "한국어 능력",
    },
    {
      checked: true,
      text: "업무 수행 능력",
    },
    {
      checked: true,
      text: "겸업 여부",
    },
    {
      checked: true,
      text: "평판 조회",
    },
  ];

  const heroHeadings: HeroSectionData = {
    tooltip: "/assets/HeroTitleBubble.svg",
    title1: "최고의 실력을 가진",
    title2: "외국인 인재를 찾고 계신가요?",
    subtitle1: "법률 및 인사관리 부담없이",
    subtitle2: "1주일 이내에 원격으로 채용해보세요.",
    cta: "개발자가 필요하신가요?",
  };

  const miniCardsData: miniCards[] = [
    {
      icon: "/assets/Marketing.svg",
      title: "해외 마케팅",
    },
    {
      icon: "/assets/ImageIcon.svg",
      title: "퍼블리셔",
    },
    {
      icon: "/assets/BoxIcon.svg",
      title: "캐드원(제도사)",
    },
    {
      icon: "/assets/Target.svg",
      title: "해외 세일즈",
    },
    {
      icon: "/assets/Call.svg",
      title: "해외 CS",
    },
    {
      icon: "/assets/Presentation.svg",
      title: "해외 마케팅",
    },
  ];

  return NextResponse.json({
    slideshow: slideshowData,
    advantages: advantagesCards,
    checkboxes: checkboxesData,
    headings: heroHeadings,
    miniCards: miniCardsData,
  });
}
