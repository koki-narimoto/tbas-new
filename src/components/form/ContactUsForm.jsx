import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import queryString from "query-string";

/* ========= importing images for icons ============ */
import {SectionHeading, 
  Subheading as SubheadingBase,
  Container,
  PrimaryButton as PrimaryButtonBase 
} from "assets/styles/TailwindComponents.jsx";
import EmailIllustrationSrc from "assets/treact-images/email-illustration.svg";

/* ======== importing some data for text =========== */
import { ContactFormInfo } from "assets/tbas-data/TbasInfo.jsx";

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

// const SubmitButton2 = tw(PrimaryButtonBase)`inline-block mt-8`
const SubmitButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none `;

var currData = ContactFormInfo[0]
export default function ContactUsForm (props) {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  if(props.language === "ENG"){
    currData = ContactFormInfo[1]
  }

  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    // console.log(event.target.name, event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };
  const resetForm = () => { 
      setInputs({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit")
    console.log(inputs)
    // emailjs.send('service_uy36bn4', 'template_gdounrd', inputs, 'user_Kdi5ZnfDSSBcsnjbauegC')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });

    const id = "1tiFyOQ--uew7fX8NfmR9SNQThztVBcvdHb_OjV_hcpA" //YOUR FORM ID
    const formUrl = "https://docs.google.com/forms/d/"+ id + "/formResponse";
    const q = queryString.stringifyUrl({
      url: formUrl,
      query: inputs
    })
    await axios.post(q, {headers:{'Access-Control-Allow-Origin': '*'}})
      .then((response) => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });

    alert("Submitted!");
    resetForm();
    // navigate("/");
  };

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={true}>
          <TextContent>
            <Subheading>{currData.subheading}</Subheading>
            <Heading>{currData.heading}</Heading>
            <Description>{currData.description}</Description>
            <Form onSubmit={handleSubmit} >
              <Input type="email" name="entry.465291047" placeholder="Your Email Address" value={inputs.email} onChange={handleChange}/>
              <Input type="text" name="entry.2082583386" placeholder="Full Name" value={inputs.name} onChange={handleChange}/>
              <Input type="text" name="entry.937523649" placeholder="Subject" value={inputs.subject} onChange={handleChange}/>
              <Textarea name="entry.1748530396" placeholder="Your Message Here" value={inputs.message} onChange={handleChange}/>
              <SubmitButton >{currData.submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
