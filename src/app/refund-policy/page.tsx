import React from "react";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Refund Policy | Riviera Resort Rishikesh",
  description: "Understand Riviera Resort Rishikesh's refund policy. Get clarity on cancellations, refunds, and adjustments for your convenience.",
  keywords: ["Refund Policy", "Riviera Resort refund policy", "Refunds for Riviera Resort", "Refund for Riviera Resort", "Refund for Riviera Resort Rishikesh", "Refund policy for Riviera Resort Rishikesh"],
  alternates: {
    canonical: "https://rivierastrokes.com/refund-policy/",
    languages: {
      "en-US": "https://rivierastrokes.com/refund-policy/",
    }
  },
  openGraph: {
    title: "Refund Policy | Riviera Resort Rishikesh",
    description: "Understand Riviera Resort Rishikesh's refund policy. Get clarity on cancellations, refunds, and adjustments for your convenience.",
    url: "https://rivierastrokes.com/refund-policy/",
    siteName: "Riviera Resort Rishikesh",

    images: [
      {
        url: "https://rivierastrokes.com/refund-policy/og-image.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const DefinationList = [
  "Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Riviera Resorts.",
  " Goods refer to the items offered for sale on the Service.",
  "Orders mean a request by You to purchase Goods from Us.",
  "Service refers to the Website.",
  " Website refers to Riviera Resorts, accessible from https://rivieraresorts.com/",
  "You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
];

const CancellationRightsList = [
  "By visiting this page on our website: https://rivieraresorts.com/contact/",
];

const ConditonForReturnList = ["The Goods were purchased in the last 7 days"];

const ConditonForReturnList2 = [
  "The supply of Goods made to Your specifications or clearly personalized.",
  "The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.",
  "The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.",
  "The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.",
];

const OrderCancellationList = [
  "By visiting this page on our website: https://rivieraresorts.com/contact/",
];

const ContactusList = [
  "By visiting this page on our website: https://rivieraresorts.com/contact/",
];

function page() {
  // const [showCursor, setShowCursor] = useState(false);

  return (
    <section>
      <div
        className="bg-[#040404] py-24 mt-4 relative"
      // onMouseEnter={() => {
      //   setShowCursor(true);
      // }}
      // onMouseLeave={() => {
      //   setShowCursor(false);
      // }}
      >
        <p className="uppercase md:text-6xl text-3xl font-bold text-[#fff] text-center relative z-10">
          Return and Refund Policy
        </p>

        {/* <div
          className="w-full h-full origin-center bg-text-light/5 -z-0  absolute top-0 left-0"
          style={{
            scale: showCursor ? "1" : "0",
            transition: "all 0.8s",
          }}
        /> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 flex flex-col gap-10">
        <h2 className="text-3xl font-semibold capitalize text-[#040404]">
          Interpretation and Definitions
        </h2>

        <div>
          <h2 className="text-2xl font-semibold text-[#040404]">Interpretation</h2>
          <p className="text-md text-[#474747] mt-2">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#040404]">Definitions</h2>
          <p className="text-md text-[#474747] mt-2">
            For the purposes of this Privacy Policy:
          </p>

          <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
            {DefinationList.map((item, index) => (
              <li className="text-[#474747] text-md" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mt-6">
            <h2 className="text-3xl  font-semibold text-[#040404]">
              Your Order Cancellation Rights
            </h2>
            <p className="text-md text-[#474747] mt-2">
              You are entitled to cancel Your Order within 7 days without giving
              any reason for doing so.
            </p>
            <p className="text-md text-[#474747] mt-2">
              The deadline for cancelling an Order is 7 days from the date on
              which You received the Goods or on which a third party you have
              appointed, who is not the carrier, takes possession of the product
              delivered.
            </p>

            <p className="text-md text-[#474747] mt-2">
              In order to exercise Your right of cancellation, You must inform
              Us of your decision by means of a clear statement. You can inform
              us of your decision by:
            </p>

            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {CancellationRightsList.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-md text-[#474747] mt-2">
              We will reimburse You no later than 14 days from the day on which
              We receive the returned Goods. We will use the same means of
              payment as You used for the Order, and You will not incur any fees
              for such reimbursement.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">
              Conditions for Returns
            </h2>
            <p className="text-md text-[#474747] mt-2">
              In order for the Goods to be eligible for a return, please make
              sure that:
            </p>

            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {ConditonForReturnList.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-md text-[#474747] mt-2">
              The following Goods cannot be returned:
            </p>

            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {ConditonForReturnList2.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-md text-[#474747] mt-2">
              We reserve the right to refuse returns of any merchandise that
              does not meet the above return conditions in our sole discretion.
            </p>

            <p className="text-md text-[#474747] mt-2">
              Only regular priced Goods may be refunded. Unfortunately, Goods on
              sale cannot be refunded. This exclusion may not apply to You if it
              is not permitted by applicable law.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">
              Your Order Cancellation Rights
            </h2>

            <p className="text-md text-[#474747] mt-2">
              You are entitled to cancel Your Order within 7 days without giving
              any reason for doing so.
            </p>
            <p className="text-md text-[#474747] mt-2">
              The deadline for cancelling an Order is 7 days from the date on
              which You received the Goods or on which a third party you have
              appointed, who is not the carrier, takes possession of the product
              delivered.
            </p>
            <p className="text-md text-[#474747] mt-2">
              In order to exercise Your right of cancellation, You must inform
              Us of your decision by means of a clear statement. You can inform
              us of your decision by:
            </p>

            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {OrderCancellationList.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-md text-[#474747] mt-2">
              We will reimburse You no later than 14 days from the day on which
              We receive the returned Goods. We will use the same means of
              payment as You used for the Order, and You will not incur any fees
              for such reimbursement.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">
              Conditions for Returns
            </h2>
            <p className="text-md text-[#474747] mt-2">
              In order for the Goods to be eligible for a return, please make
              sure that:
            </p>

            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {ConditonForReturnList.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-md text-[#474747] mt-2">
              The following Goods cannot be returned:
            </p>

            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {ConditonForReturnList2.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-md text-[#474747] mt-2">
              We reserve the right to refuse returns of any merchandise that
              does not meet the above return conditions in our sole discretion.
            </p>

            <p className="text-md text-[#474747] mt-2">
              Only regular priced Goods may be refunded. Unfortunately, Goods on
              sale cannot be refunded. This exclusion may not apply to You if it
              is not permitted by applicable law.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">Returning Goods</h2>

            <p className="text-md text-[#474747] mt-2">
              You are responsible for the cost and risk of returning the Goods
              to Us. You should send the Goods at the following address:
            </p>

            <p className="text-md text-[#474747] mt-2">No where</p>
            <p className="text-md text-[#474747] mt-2">
              We cannot be held responsible for Goods damaged or lost in return
              shipment. Therefore, We recommend an insured and trackable mail
              service. We are unable to issue a refund without actual receipt of
              the Goods or proof of received return delivery.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">Gifts</h2>

            <p className="text-md text-[#474747] mt-2">
              If the Goods were marked as a gift when purchased and then shipped
              directly to you, You’ll receive a gift credit for the value of
              your return. Once the returned product is received, a gift
              certificate will be mailed to You.
            </p>

            <p className="text-md text-[#474747] mt-2">
              If the Goods weren’t marked as a gift when purchased, or the gift
              giver had the Order shipped to themselves to give it to You later,
              We will send the refund to the gift giver.
            </p>
          </div>
        </div>

        <div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#040404]">Contact Us</h2>
            <p className="text-md text-[#474747] mt-2">
              If you have any questions about our Returns and Refunds Policy,
              please contact us:
            </p>
            <ul className="mt-2 flex flex-col gap-1 list-disc ml-6">
              {ContactusList.map((item, index) => (
                <li className="text-[#474747] text-md" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
