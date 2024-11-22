
import React from "react";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Terms and Conditions | Riviera Resort Rishikesh",
  description: "Review the terms and conditions for using Riviera Resort Rishikesh's services. Stay informed about our policies for a seamless experience.",
  keywords: ["Terms and Conditions", "Riviera Resort terms and conditions", "Terms and conditions for Riviera Resort", "Terms and conditions for Riviera Resort Rishikesh"],
  alternates: {
    canonical: "https://rivierastrokes.com/terms-condition/",
    languages: {
      "en-US": "https://rivierastrokes.com/terms-condition/",
    }
  },
  openGraph: {
    title: "Terms and Conditions | Riviera Resort Rishikesh",
    description: "Review the terms and conditions for using Riviera Resort Rishikesh's services. Stay informed about our policies for a seamless experience.",
    url: "https://rivierastrokes.com",
    siteName: "Riviera Resort Rishikesh",

    images: [
      {
        url: "https://rivierastrokes.com/terms-condition/og-image.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const LicenseList = [
  "Republish material from Riviera Resorts",
  "Sell, rent or sub-license material from Riviera Resorts",
  " Reproduce, duplicate or copy material from Riviera Resorts",
  "Redistribute content from Riviera Resorts",
];

const LicenseList2 = [
  " You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;",
  "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;",
  "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy",
  "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.",
];

const HyperLinkList = [
  " Government agencies;",
  "Search engines;",
  "News organizations;",
  "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and",
  "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.",
];

const HyperLinkList2 = [
  " commonly-known consumer and/or business information sources;",
  " dot.com community sites;",
  "online directory distributors;",
  "internet portals;",
  "accounting, law and consulting firms; and",
  "educational institutions and trade associations.",
];

const HyperLinkList3 = [
  "By use of our corporate name; or",
  "By use of the uniform resource locator being linked to; or",
  "By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.",
];

const DisclaimerList = [
  "limit or exclude our or your liability for death or personal injury;",
  "limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
  "limit any of our or your liabilities in any way that is not permitted under applicable law; or",
  "exclude any of our or your liabilities that may not be excluded under applicable law.",
];

function page() {
  // const [showCursor, setShowCursor] = useState(false);

  return (
    <section>
      <div
        className="bg-[#040404]  py-24 mt-4 relative"
      // onMouseEnter={() => {
      //   setShowCursor(true);
      // }}
      // onMouseLeave={() => {
      //   setShowCursor(false);
      // }}
      >
        <h2 className="uppercase md:text-6xl text-3xl font-bold text-[#ffffff] text-center relative z-10">
          Terms and Condition
        </h2>

        {/* <div
          className="w-full h-full origin-center bg-text-light/5 -z-0  absolute top-0 left-0"
          style={{
            scale: showCursor ? "1" : "0",
            transition: "all 0.8s",
          }}
        /> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 flex flex-col gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-[#040404]">
            Terms and Conditions
          </h2>
          <p className="text-md text-[#474747] mt-2">
            These terms and conditions outline the rules and regulations for the
            use of Riviera’s Website, located at https://rivieraresorts.com/.
          </p>
          <p className="text-md text-[#474747] mt-2">
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Riviera Resorts if you do not
            agree to take all of the terms and conditions stated on this page.
          </p>
          <p className="text-md text-[#474747] mt-2">
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            “Client”, “You” and “Your” refers to you, the person log on this
            website and compliant to the Company’s terms and conditions. “The
            Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company.
            “Party”, “Parties”, or “Us”, refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of Netherlands. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#040404]">Cookies</h2>
          <p className="text-md text-[#474747] mt-2">
            We employ the use of cookies. By accessing Riviera Resorts, you
            agreed to use cookies in agreement with the Riviera’s Privacy
            Policy.
          </p>

          <p className="text-md text-[#474747] mt-2">
            Most interactive websites use cookies to let us retrieve the user’s
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </p>
        </div>

        <div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">License</h2>
            <p className="text-md text-[#474747] mt-2">
              Unless otherwise stated, Riviera and/or its licensors own the
              intellectual property rights for all material on Riviera
              Resorts. All intellectual property rights are reserved. You may
              access this from Riviera Resorts for your own personal use
              subjected to restrictions set in these terms and conditions.
            </p>
            <p className="text-md text-[#474747] mt-2">You must not:</p>

            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {LicenseList.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-md text-[#474747] mt-2">
              This Agreement shall begin on the date hereof. Our Terms and
              Conditions were created with the help of the Terms And Conditions
              Template.
            </p>
            <p className="text-md text-[#474747] mt-2">
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              Riviera does not filter, edit, publish or review Comments prior
              to their presence on the website. Comments do not reflect the
              views and opinions of Riviera,its agents and/or affiliates.
              Comments reflect the views and opinions of the person who post
              their views and opinions. To the extent permitted by applicable
              laws, Riviera shall not be liable for the Comments or for any
              liability, damages or expenses caused and/or suffered as a result
              of any use of and/or posting of and/or appearance of the Comments
              on this website.
            </p>
            <p className="text-md text-[#474747] mt-2">
              Riviera reserves the right to monitor all Comments and to remove
              any Comments which can be considered inappropriate, offensive or
              causes breach of these Terms and Conditions.
            </p>
            <p className="text-md text-[#474747] mt-2">
              You warrant and represent that:
            </p>

            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {LicenseList2.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-md text-[#474747] mt-2">
              You hereby grant Riviera a non-exclusive license to use,
              reproduce, edit and authorize others to use, reproduce and edit
              any of your Comments in any and all forms, formats or media.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">
              Hyperlinking to our Content
            </h2>
            <p className="text-md text-[#474747] mt-2">
              The following organizations may link to our Website without prior
              written approval:
            </p>
            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {HyperLinkList.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-md text-[#474747] mt-2">
              These organizations may link to our home page so long as the link:
              (a) is not in any way deceptive; (b) does not falsely imply
              sponsorship, endorsement or approval of the linking party and its
              products or services; and (c) fits within the context of the
              linking party’s site.
            </p>
            <p className="text-md text-[#474747] mt-2">
              We may consider and approve other link requests from the following
              types of organizations:
            </p>
            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {HyperLinkList2.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-md text-[#474747] mt-2">
              We will approve link requests from these organizations if we
              decide that: (a) the link would not make us look unfavorably to
              ourselves or to our accredited businesses; (b) the organization
              does not have any negative records with us; (c) the benefit to us
              from the visibility of the hyperlink compensates the absence of
              Riviera; and (d) the link is in the context of general resource
              information.
            </p>
            <p className="text-md text-[#474747] mt-2">
              These organizations may link to our home page so long as the link:
              (a) is not in any way deceptive; (b) does not falsely imply
              sponsorship, endorsement or approval of the linking party and its
              products or services; and (c) fits within the context of the
              linking party’s site.
            </p>{" "}
            <p className="text-md text-[#474747] mt-2">
              If you are one of the organizations listed in paragraph 2 above
              and are interested in linking to our website, you must inform us
              by sending an e-mail to Riviera. Please include your name, your
              organization name, contact information as well as the URL of your
              site, a list of any URLs from which you intend to link to our
              Website, and a list of the URLs on our site to which you would
              like to link. Wait 2-3 weeks for a response.
            </p>
            <p className="text-md text-[#474747] mt-2">
              Approved organizations may hyperlink to our Website as follows:
            </p>
            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {HyperLinkList3.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-md text-[#474747] mt-2">
              No use of Riviera’s logo or other artwork will be allowed for
              linking absent a trademark license agreement.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">iFrames</h2>

            <p className="text-md text-[#474747] mt-2">
              Without prior approval and written permission, you may not create
              frames around our Webpages that alter in any way the visual
              presentation or appearance of our Website.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">
              Content Liability
            </h2>

            <p className="text-md text-[#474747] mt-2">
              We shall not be hold responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that is rising on your Website. No link(s) should appear on
              any Website that may be interpreted as libelous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third party rights.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">Your Privacy</h2>

            <p className="text-md text-[#474747] mt-2">
              Please read Privacy Policy
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">
              Reservation of Rights
            </h2>

            <p className="text-md text-[#474747] mt-2">
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amen these terms and conditions and it’s linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">
              Removal of links from our website
            </h2>

            <p className="text-md text-[#474747] mt-2">
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us any moment. We will
              consider requests to remove links but we are not obligated to or
              so or to respond to you directly.
            </p>

            <p className="text-md text-[#474747] mt-2">
              We do not ensure that the information on this website is correct,
              we do not warrant its completeness or accuracy; nor do we promise
              to ensure that the website remains available or that the material
              on the website is kept up to date.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">Disclaimer</h2>

            <p className="text-md text-[#474747] mt-2">
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:
            </p>

            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {DisclaimerList.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-md text-[#474747] mt-2">
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer: (a) are subject to the preceding
              paragraph; and (b) govern all liabilities arising under the
              disclaimer, including liabilities arising in contract, in tort and
              for breach of statutory duty. As long as the website and the
              information and services on the website are provided free of
              charge, we will not be liable for any loss or damage of any
              nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
