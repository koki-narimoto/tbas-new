import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";

import {Row, Col} from 'react-bootstrap';

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlansContainer = tw.div`flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`;
const Plan = styled.div`
  ${tw`w-full  mt-16 lg:mr-8 lg:last:mr-0 
  text-center px-8 rounded-lg shadow relative pt-2 
  text-gray-900 bg-white flex flex-col`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }

  ${props =>
    props.featured &&
    css`
      background: rgb(100,21,255);
      background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
      background: rgb(85,60,154);
      background: linear-gradient(135deg, rgba(85,60,154,1) 0%, rgba(128,90,213,1) 100%);
      background: rgb(76,81,191);
      background: linear-gradient(135deg, rgba(76,81,191,1) 0%, rgba(102,126,234,1) 100%);
      ${tw`bg-primary-500 text-gray-100`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-indigo-500`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-3xl`}
  }
  .price {
    ${tw`font-bold text-2xl sm:text-3xl my-1`}
  }
  .price10 {
    ${tw`font-bold text-xl sm:text-xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest text-left`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium text-left`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide text-center`}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;



export default function Pricing() {

  const plans = [
    {
      name: "あなたの架け橋英語プラン",
      price: "１回2000円",
      price10: "１０回：　20000円",
      price20: "２０回：　38000円",
      shortInfo: "生徒が希望するご指導に応じてプランを構成します！",
      mainFeature: "生徒が希望するご指導に応じてプランを構成します！",
      features: ["一人一人に見合ったレッスンを構成", "ネイティブの講師とレッスン", "実用性がある英語を教える", "１対１の完全個別指導"],
    },
    {
      name: "「Chat everyday! LINEプラン」",
      price: "一ヶ月50000円",
      price10: "お試し：二週間20000円",
      shortInfo: "LINEアプリを通して、講師と３０日間毎日チャットを送り合うプラン。毎日英語を使用するという難点をこのプランが簡単に解決します。また、講師とあなたは「友達」になるので、とてもカジュアルで日常的に使用する英語をそのまま使います。",
      mainFeature: "このプランのおすすめポイント！",
      features: ["講師と友達感覚でやりとりができるから楽しく英語を学べる！",
       "英語に毎日触れられる",
       "普通の会話で分からない言葉を言われたら、「申し訳ないから聞けない…」などと思うかもしれないが、メッセージだと自分で調べられるから安心して会話を続けられる",
       "講師が送る私生活の写真や動画からアメリカでの生活がどんな感じか分かる",
       "アメリカ人がよく使うチャットでの表現が学べる",
        ]
    },
  ];

  // features: ["３０日間、毎日やりとりをする。内容は自由。講師は友達と連絡を取り合っているかのような気軽さを目標とするので、共有したい面白動画だったり、その日の出来事を送ったりする。",
  //      "1週間のLINEのやりとりを振り返る５０分間のレッスン週１回（計４回）行う。講師が生徒のメッセージを画面共有しながら説明をする。添削する部分が殆どなくても、５０分のレッスンは行う。", 
  //      "３０日間は前半と後半に分かれる。前半に講師A、そして後半に講師Bのようなスタイルで行う。", 
  //      "講師と友達感覚でやりとりができるから楽しく英語を学べる！",
  //      "英語に毎日触れられる",
  //      "普通の会話で分からない言葉を言われたら、「申し訳ないから聞けない…」などと思うかもしれないが、メッセージだと自分で調べられるから安心して会話を続けられる",
  //      "講師が送る私生活の写真や動画からアメリカでの生活がどんな感じか分かる",
  //      "アメリカ人がよく使うチャットでの表現が学べる",
  //       ]

  const highlightGradientsCss = [
    css`
      background: rgb(70,179,251);
      background: radial-gradient(circle, rgba(70,179,251,1) 11%, rgba(123,139,247,1) 100%);
    `,
    css`
      background: rgb(251,70,70);
      background: radial-gradient(circle, rgba(251,70,70,1) 11%, rgba(255,142,142,1) 100%);
    `
  ];

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          <Subheading>pricing</Subheading>
          <Heading>レッスン価格</Heading>
          <Description>以下にはあなたの架け橋で提供しているプランがあります</Description>
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              {!plan.featured && <div className="planHighlight" css={highlightGradientsCss[index % highlightGradientsCss.length]} />}
              <PlanHeader>
                <span className="name">{plan.name}</span>
                <span className="price">{plan.price}</span>
                <hr></hr>
                <span className="price10">{plan.price10}</span>
                <span className="price10">{plan.price20}</span>
                <span className="duration">{plan.shortInfo}</span>
              </PlanHeader>
              <PlanFeatures>
                <span className="feature mainFeature">{plan.mainFeature}</span>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
              <PlanAction>
                <Row>
                  <Col>
                    <BuyNowButton href="" css={!plan.featured && highlightGradientsCss[index]}>詳しくは！</BuyNowButton>
                  </Col>
                  <Col>
                    <BuyNowButton css={!plan.featured && highlightGradientsCss[index]}>プランを購入！</BuyNowButton>
                  </Col>
                </Row>
              </PlanAction>
            </Plan>
          ))}
          <DecoratorBlob/>
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
