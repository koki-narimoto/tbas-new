import React, {useState} from 'react';
import {InlineWidget} from 'react-calendly';
import {Tabs, Tab} from 'react-bootstrap';
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import tw from "twin.macro";

export default function Scheduling() {
    const Container = tw.div`relative`;
    const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;
    const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
    const Heading = tw(SectionHeading)`lg:text-left`;
    const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;
  
    const [key, setKey] = useState('ak');

    return (
        <Container>
            <Content>
                <Subheading>reserve</Subheading>
                <Heading>レッスン予約！</Heading>
                <Description>タブを切り替え希望の講師とレッスンを予約して下さい！</Description>

                <Tabs activeKey={key} onSelect={(k) => setKey(k)}className="mb-3">
                    <Tab eventKey="ak" title="あなたの架け橋と予約">
                        <InlineWidget url="https://calendly.com/anatano-kakehashi/lessonreservation" />
                    </Tab>
                    <Tab eventKey="koki" title="Koki Teacherと予約">
                        <InlineWidget url="https://calendly.com/anatano-koki/koki" />
                    </Tab>
                    <Tab eventKey="katherine" title="Katherine Teacherと予約">
                        <InlineWidget url="https://calendly.com/anatano-katherine/lesson" />
                    </Tab>
                </Tabs>
            </Content>
        </Container>
    )
}
