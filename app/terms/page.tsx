import React from "react";
import Main from "../../components/Main";
import Link from "next/link";

const TermsOfUse = () => {
  return (
    <Main>
      <div className="relative bg-[#02033B] bg-center bg-cover h-[200px] md:h-[250px] lg:h-[300px]">
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center p-8 xl:justify-start xl:p-0 z-0">
          <h1 className="text-white font-extrabold text-4xl lg:text-5xl xl:text-6xl text-left">
            TERMS OF USE
          </h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto py-16 px-8 xl:px-0 text-[#333333]">
        <h1 className="text-xl text-[#02033B] font-bold">Introduction</h1>
        <p className="text-base">
          These Terms of Service (“Terms”) govern your use of the Champs mobile
          application (“app”) developed by Bitshift. By using our app, you agree
          to these Terms.
        </p>

        <br />

        <h2 className="text-lg font-bold">1. Use of the App</h2>
        <p>
          You agree to use our app only for lawful purposes and in accordance
          with these Terms. You must not use our app in any way that could
          damage, disable, overburden, or impair our app or interfere with any
          other party&apos;s use of our app.
        </p>

        <br />

        <h2 className="text-lg font-bold">2. User Accounts</h2>
        <p>
          To use certain features of our app, you may need to create an account.
          You are responsible for maintaining the confidentiality of your
          account information and for all activities that occur under your
          account. You agree to notify us immediately of any unauthorized use of
          your account.
        </p>

        <br />

        <h2 className="text-lg font-bold">3. Intellectual Property</h2>
        <p>
          All content on our app, including text, graphics, logos, and software,
          is the property of Bitshift or its licensors and is protected by
          copyright and other intellectual property laws. You may not use any
          content from our app without our prior written permission.
        </p>

        <br />

        <h2 className="text-lg font-bold">4. Disclaimer of Warranties</h2>
        <p>
          Our app is provided “as is” and “as available” without any warranties
          of any kind, either express or implied. We do not warrant that our app
          will be uninterrupted or error-free.
        </p>

        <br />

        <h2 className="text-lg font-bold">5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Bitshift will not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising out of or in connection with your use of our app.
        </p>

        <br />

        <h2 className="text-lg font-bold">6. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the jurisdiction in which Bitshift is located, without regard to
          its conflict of law principles.
        </p>

        <br />

        <h2 className="text-lg font-bold">7. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. We will notify you of any
          material changes by posting the updated Terms on our app. Your
          continued use of our app after the update constitutes your acceptance
          of the updated Terms.
        </p>
      </div>

      <div className="bg-[#F1F7FE]  py-16 px-8 xl:px-0 text-[#333333]">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-xl text-[#02033B] font-bold"> Contact Us</h1>
          <p className="text-base">
          If you have any questions about these Terms or our app, please contact us at:
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

export default TermsOfUse;
