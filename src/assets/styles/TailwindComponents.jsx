import tw from "twin.macro";

/* ===== define some twin / tailwind css for components ===== */

// Button
export const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;

// Headers
export const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`
export const Subheading = tw.h5`font-bold text-primary-500`

// Containers / Content
export const Container = tw.div`relative`;
export const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
export const ContentWithPaddingLg= tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`;
export const Content2Xl= tw.div`max-w-screen-2xl mx-auto`;

// Links
export const PrimaryLink = tw.a`cursor-pointer font-bold text-primary-500 border-b-2 border-transparent hocus:border-primary-500 hocus:text-primary-800 transition duration-300`;

// Description 
export const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`;

// Divs
export const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;

// Used for formatting the website's text better based on common screen size
export const HiddenBrXl = tw.br`hidden xl:block`;
export const HiddenBrLg = tw.br`hidden lg:block xl:hidden`;
export const HiddenBrLgXl = tw.br`hidden lg:block`;

// Used for highlighting certain important text
export const HightlightedText = tw.span`text-primary-500`
