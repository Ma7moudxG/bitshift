import React from "react";
import Main from "../../components/Main";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <Main>
      <div className="relative bg-[#02033B] bg-center bg-cover h-[200px] md:h-[250px] lg:h-[300px]">
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center p-8 xl:justify-start xl:p-0 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl xl:text-6xl text-left">
            PRIVACY POLICY
          </h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto py-16 px-8 xl:px-0 text-[#333333]">
        <h1 className="text-xl text-[#02033B] font-bold">Introduction</h1>
        <p className="text-base">
          Bitshift is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you visit our website or use our services, including the Champs
          application. This policy complies with regulations in the EMEA
          regions, including the General Data Protection Regulation (GDPR).
        </p>

        <br />

        <h1 className="text-xl font-bold mb-2 text-[#02033B]">
          1. Information We Collect
        </h1>
        <h2 className="text-lg font-bold">1.1 Information You Provide</h2>
        <p>
          We collect information that you provide directly to us, such as when
          you:
        </p>
        <ul className="list-disc ml-8 marker:text-sky-400">
          <li>Contact us via our website or email.</li>
          <li>Request a quote or use our services.</li>
          <li>Register or create an account on the Champs application</li>
          <li>
            Participate in activities or contact us through the Champs
            application.
          </li>
        </ul>
        <p className="mb-1">
          This information may include your name, email address, phone number,
          company name, age, gender, location, sports preferences, goals,
          achievements, and feedback.
        </p>

        <h2 className="text-lg font-bold">
          1.2 Information We Collect Automatically
        </h2>
        <p>
          When you visit our website or use our services, we automatically
          collect certain information, including:
        </p>
        <ul className="list-disc ml-8 mb-1 marker:text-sky-400">
          <li>IP address</li>
          <li>Browser type and version.</li>
          <li>Operating system.</li>
          <li>Referring URLs</li>
          <li>Device type and usage data</li>
          <li>App usage and crash reports for the Champs application</li>
        </ul>

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

        <h2 className="text-lg font-bold">
          2.1 Service Provision and Improvement
        </h2>
        <ul className="list-disc ml-8 mb-1 marker:text-sky-400">
          <li>
            To provide, maintain, and improve our website, services, and the
            Champs application.
          </li>
          <li>
            To personalize your experience and provide tailored recommendations.
          </li>
        </ul>

        <h2 className="text-lg font-bold">2.2 Communication</h2>
        <ul className="list-disc ml-8 mb-1 marker:text-sky-400">
          <li>
            To communicate with you about our services, including sending
            updates, newsletters, and promotional materials.
          </li>
          <li>
            To send notifications, updates, newsletters, surveys, or promotions
            related to the Champs application.
          </li>
        </ul>

        <h2 className="text-lg font-bold">2.3 Analysis and Research</h2>
        <ul className="list-disc ml-8 mb-1 marker:text-sky-400">
          <li>To analyze website and app usage, performance, and trends.</li>
          <li>
            To measure the effectiveness of our advertising and marketing
            campaigns.
          </li>
        </ul>

        <h2 className="text-lg font-bold">2.4 Security and Compliance</h2>
        <ul className="list-disc ml-8 mb-1 marker:text-sky-400">
          <li>
            To protect the security and integrity of our website, services, and
            the Champs application.
          </li>
          <li>
            To prevent, detect, and respond to fraud, abuse, or illegal
            activities.
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

        <h2 className="text-lg font-bold">3.1 Service Providers</h2>
        <ul className="list-disc ml-8 mb-1 marker:text-sky-400">
          <li>
            Cloud hosting, data storage, analytics, payment processing, and
            customer support providers who help us operate and improve our
            website, services, and the Champs application.
          </li>
        </ul>

        <h2 className="text-lg font-bold">3.2 Business Partners</h2>
        <ul className="list-disc ml-8 mb-1 marker:text-sky-400">
          <li>
            Sponsors, advertisers, or event organizers who may offer you
            products, services, or opportunities that may be of interest to you.
          </li>
        </ul>

        <h2 className="text-lg font-bold">3.3 Affiliates</h2>
        <ul className="list-disc ml-8 mb-1 marker:text-sky-400">
          <li>
            Our parent company, subsidiaries, or other related entities who may
            use your information for the same purposes as we do.
          </li>
        </ul>

        <h2 className="text-lg font-bold">3.4 Legal Authorities</h2>
        <ul className="list-disc ml-8 mb-1 marker:text-sky-400">
          <li>
            Law enforcement, regulators, courts, or other public authorities
            when required or permitted by law, or when necessary to protect our
            rights, property, or safety, or the rights, property, or safety of
            others.
          </li>
        </ul>
        <br />

        <h1 className="text-xl font-bold mb-2 text-[#02033B]">
          4. How We Protect Your Information
        </h1>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, use, disclosure, alteration, or destruction.
          These measures include encryption, password protection, access
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
          <li>Access, update, or delete your personal information.</li>
          <li>Opt out of receiving marketing communications.</li>
          <li>Manage app permissions through your device settings.</li>
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
          changes by posting the updated policy on our website or by sending you
          an email. Your continued use of our services after the update
          constitutes your acceptance of the updated policy.
        </p>
      </div>
      <div className="bg-[#F1F7FE]  py-16 px-8 xl:px-0 text-[#333333]">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-xl text-[#02033B] font-bold"> Contact Us</h1>
          <p className="text-base">
          If you have any questions, comments, or requests regarding this Privacy Policy, please contact us at:
          </p>
          <p className="py-2 font-bold"> Email: {" "}
          <Link href="mailto:info@bitshift-tech.com" className="font-bold text-[#02033B] hover:text-[#35BCDC]">
            info@bitshift-tech.com
          </Link>
          </p>
        </div>
      </div>
    </Main>
  );
};

export default PrivacyPolicy;
