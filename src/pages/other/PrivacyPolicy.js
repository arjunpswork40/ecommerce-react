import { Fragment } from "react";
import { useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const PrivacyPolicy = () => {
  let { pathname } = useLocation();
    console.log(pathname)
  return (
    <Fragment>
      <SEO
        titleTemplate="Not Found"
        description="404 of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "PrivacyPolicy", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
         <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
                <h1><u>PRIVACY NOTICE</u></h1>
                <h6>Last updated February 20, 2023</h6><br></br>
                <p>This privacy notice for Alweena Perfumes LLC (doing business as Alweena Perfumes) 
                    (“Alweena Perfumes,” “we,” “us,” or “our“), describes how and why we might collect, 
                    store, use, and/or share (“process“) your information when you use our services (“Services“), such as when you:
                </p>
                <ul>
                    <li>
                        Visit our website at <a href="https://www.alweenaperfumes.com">https://www.alweenaperfumes.com</a>, or any website of ours that links to this privacy notice
                    </li>
                    <li>
                    Engage with us in other related ways, including any sales, marketing, or events
                    </li>
                </ul>
                <br></br>
                <p className="mt-10">
                Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info@alweenaperfumes.com.
                </p>
                <br></br>
                <h4><u>SUMMARY OF KEY POINTS</u></h4>
                <br></br>
                <em className="mt-10">
                This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.
                </em><br></br>
                <p className="mt-10">
                What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Alweena Perfumes and the Services, the choices you make, and the products and features you use. Click here to learn more.
                </p><br></br>
                <p className="mt-10">
                    Do we process any sensitive personal information? We do not process sensitive personal information.
                </p><br></br>
                <p className="mt-10">
                Do we receive any information from third parties? We may receive information from public databases, marketing partners, social media platforms, and other outside sources. Click here to learn more.
                </p><br></br>
                <p className="mt-10">
                How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click here to learn more
                </p><br></br>
                <p className="mt-10">
                In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. Click here to learn more.
                </p><br></br>
                <p className="mt-10">
                How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click here to learn more.
                </p><br></br>
                <p className="mt-10">
                What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click here to learn more.
                </p><br></br>
                <p className="mt-10">
                How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                </p><br></br>
                <p className="mt-10">
                Want to learn more about what Alweena Perfumes does with any information we collect? Click here to review the notice in full.
                </p><br></br>
                <h4 className="mt-30">
                    <u>TABLE OF CONTENTS</u>
                </h4>
                <ul className="mt-20">
                    <li>
                        <a href="#infoCollect">
                            1. WHAT INFORMATION DO WE COLLECT?
                        </a>
                    </li>
                    <li>
                        2. HOW DO WE PROCESS YOUR INFORMATION?
                    </li>
                    <li>
                        3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                    </li>
                    <li>
                        4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </li>
                    <li>
                        5. HOW LONG DO WE KEEP YOUR INFORMATION?
                    </li>
                    <li>
                        6. HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </li>
                    <li>
                        7. DO WE COLLECT INFORMATION FROM MINORS?
                    </li>
                    <li>
                        8. WHAT ARE YOUR PRIVACY RIGHTS?
                    </li>
                    <li>
                        9. CONTROLS FOR DO-NOT-TRACK FEATURES
                    </li>
                    <li>
                        10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    </li>
                    <li>
                        11. DO WE MAKE UPDATES TO THIS NOTICE?
                    </li>
                    <li>
                        12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                    </li>
                    <li>
                        13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                    </li>
                    
                </ul>
                <div className="mt-20" id="infoCollect">
                    <h4><u>1. WHAT INFORMATION DO WE COLLECT?</u></h4>

                    <h6 className="mt-20">Personal information you disclose to us</h6>

                    <em className="mt-10">In Short: We collect personal information that you provide to us.</em>

                    <p className="mt-10">
                        We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                    </p>
                    <p className="mt-10">
                    Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                    </p>
                    <ul className="mt-10" style={{listStyle:'inside'}}>
                        <li>names</li>
                        <li>phone numbers</li>
                        <li>email addresses</li>
                        <li>mailing addresses</li>
                        <li>passwords</li>
                        <li>usernames</li>
                        <li>billing addresses</li>
                        <li>debit/credit card numbers</li>
                    </ul>

                    <p className="mt-10">Sensitive Information. We do not process sensitive information.</p>
                    <p className="mt-10">Payment Data. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by Stripe. You may find their privacy notice link(s) here: <a href="https://stripe.com/in/privacy">https://stripe.com/in/privacy</a>.</p>
                    <p className="mt-10">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
                    <h6 className="mt-10">Information automatically collected</h6>
                    <em className="mt-10">In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em>
                    <p className="mt-10">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
                    <p className="mt-10">Like many businesses, we also collect information through cookies and similar technologies.</p>
                    <p className="mt-20">The information we collect includes:</p>
                    <ul className="mt-10">
                        <li>
                            <em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called “crash dumps”), and hardware settings).
                        </li>
                        <li>
                            <em>Device Data.</em> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                        </li>
                    </ul>
                    <h6 className="mt-20">
                        Information collected from other sources
                    </h6>
                    <em className="mt-10">
                        In Short: We may collect limited data from public databases, marketing partners, and other outside sources.
                    </em>

                    <p className="mt-10">
                        In order to enhance our ability to provide relevant marketing, offers, and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, and from other third parties. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user behavior data), Internet Protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion.
                    </p>
                </div>
            </div>
            </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default PrivacyPolicy;
