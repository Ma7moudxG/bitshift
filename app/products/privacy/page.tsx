import Link from "next/link";
import React from "react";
import Main from "../../../components/Main";

const page = () => {
  return (
    <Main>
      <div className="relative bg-[#02033B] bg-center bg-cover h-[200px] md:h-[250px] lg:h-[300px]">
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center p-8 xl:justify-start xl:p-0 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl xl:text-6xl text-left">
            <span className="text-yellow-300">CHAMPS</span> <br />
            PRIVACY POLICY
          </h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto py-16 px-8 xl:px-0 text-[#333333]">
        <h1 className="text-xl text-[#02033B] font-bold">Introduction</h1>
        <p className="text-base">
          Champs is a sports mobile application developed by Bitshift. This
          Privacy Policy explains how we collect, use, and protect your personal
          information when you use the Champs app.
        </p>

        <br />

        <h1 className="text-xl font-bold mb-2 text-[#02033B]">
          1. Information We Collect
        </h1>
        <h2 className="text-lg font-bold">1.1 Information You Provide</h2>
        <p>
          We collect information that you provide to us when you register,
          create a profile, participate in activities, or contact us through the
          app. This may include your name, email address, phone number, age,
          gender, location, sports preferences, goals, achievements, and
          feedback.
        </p>

        <br />

        <h2 className="text-lg font-bold">
          1.2 Information We Collect Automatically
        </h2>
        <p>
          We collect information that is automatically generated when you use
          our app, such as your device type, operating system, IP address, app
          usage, and crash reports.
        </p>

        <br />

        <h2 className="text-lg font-bold">
          1.3 Information from Third Parties
        </h2>
        <p>
          We may also collect information from third-party sources, such as
          social media platforms, analytics providers, or other partners, that
          you have authorized to share your information with us.
        </p>

        <br />

        <h1 className="text-xl font-bold mb-2 text-[#02033B]">
          2. How We Use Your Information
        </h1>
        <p>We use your information for the following purposes:</p>
        <ul className="list-disc ml-8 mb-1 marker:text-sky-400">
          <li>
            To provide, maintain, and improve the Champs app and its features.
          </li>
          <li>
            To communicate with you about the app, including sending
            notifications, updates, newsletters, surveys, or promotions.
          </li>
          <li>
            To monitor and analyze the app&apos;s performance, usage, and
            trends.
          </li>
          <li>
            To protect the security and integrity of the app and its users.
          </li>
          <li>
            To comply with legal obligations and enforce our terms of service.
          </li>
        </ul>

        <br />

        <h1 className="text-xl font-bold mb-2 text-[#02033B]">
          3. How We Share Your Information
        </h1>
        <p>We may share your information with:</p>
        <ul className="list-disc ml-8 mb-1 marker:text-sky-400">
          <li>
            Other users of the app, such as your club members, coaches, or
            opponents.
          </li>
          <li>Service providers who help us operate and improve the app.</li>
          <li>
            Business partners who offer products, services, or opportunities
            that may be of interest to you.
          </li>
          <li>
            Legal authorities if required by law or to protect our rights.
          </li>
        </ul>

        <br />

        <h1 className="text-xl font-bold mb-2 text-[#02033B]">
          4. How We Protect Your Information
        </h1>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, use, disclosure, alteration, or destruction.
          These measures may include encryption, password protection, access
          control, and data backup. However, no method of transmission or
          storage is completely secure.
        </p>

        <br />

        <h1 className="text-xl font-bold mb-2 text-[#02033B]">
          5. Your Choices and Rights
        </h1>
        <p>
          You have the following choices and rights regarding your information:
        </p>
        <ul className="list-disc ml-8 mb-1 marker:text-sky-400">
          <li>
            Access, update, or delete your profile and preferences through the
            app’s settings or by contacting us.
          </li>
          <li>Opt out of receiving marketing communications from us.</li>
          <li>
            Manage your app&apos;s permissions through your device&apos;s
            settings.
          </li>
          <li>
            Request a copy of your information or ask us to correct, restrict,
            or erase your information.
          </li>
          <li>Withdraw your consent to our use of your information.</li>
          <li>Lodge a complaint with your local data protection authority.</li>
        </ul>

        <br />

        <h1 className="text-xl font-bold mb-2 text-[#02033B]">
          6. Data Retention
        </h1>
        <p>
          We retain your information for as long as necessary to fulfill the
          purposes for which we collected it, or as required or permitted by
          law. When we no longer need your information, we will delete or
          anonymize it in accordance with our data retention policies and
          practices.
        </p>

        <br />

        <h1 className="text-xl font-bold mb-2 text-[#02033B]">
          7. Changes to This Privacy Policy
        </h1>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or the law. We will notify you of any material
          changes by posting the updated policy on our app or by sending you an
          email. Your continued use of our app after the update constitutes your
          acceptance of the updated policy.
        </p>
      </div>

      <div className="bg-[#F1F7FE]  py-16 px-8 xl:px-0 text-[#333333]">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-xl text-[#02033B] font-bold"> Contact Us</h1>
          <p className="text-base">
            If you have any questions, comments, or requests regarding this Privacy Policy, please contact us at:
          </p>
          <p className="text-base">
          Champs App: support section, by submitting your question
          </p>
          <p className="py-2 font-bold">
            Email:{" "}
            <Link
              href="mailto:info@bitshift-tech.com"
              className="font-bold text-[#02033B] hover:text-[#35BCDC]"
            >
              info@bitshift-tech.com
            </Link>
          </p>
        </div>
      </div>
    </Main>
  );
};

export default page;
