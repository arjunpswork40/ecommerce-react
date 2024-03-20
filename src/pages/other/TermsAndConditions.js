import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";


const TermsAndConditions = () => {
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
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "TermsAndConditions", path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <>
                    <div class="container">
                        <h1 class="text-uppercase"><center>Know the Terms and Conditions</center></h1><br />

                        <h2 class="text-uppercase">Introduction</h2><br />
                        <p class="fw-lighter">These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Alweena Perfumes accessible at <a href="https://alweenaperfumes.com">https://alweenaperfumes.com</a>.</p>
                        <p class="fw-lighter">These Terms will be applied fully and affect to your use of this Website. By using this Website, you agree to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website’s Standard Terms and Conditions.</p>
                        <p class="fw-lighter">Minors or people below 18 years old are not allowed to use this Website.</p><br />

                        <h2 class="text-uppercase">Intellectual Property Rights</h2><br />
                        <p class="fw-lighter">Other than the content you own, under these Terms, Alweena Perfumes LLC and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>
                        <p class="fw-lighter">You are granted a limited license only for purposes of viewing the material contained on this Website.</p>

                        <h2 class="text-uppercase">Restrictions</h2><br />
                        <p>You are specifically restricted from all of the following:</p>
                        <ul >
                            <li class="fw-lighter">publishing any Website material in any other media;</li><br />
                            <li class="fw-lighter">selling, sublicensing and/or otherwise commercializing any Website material;</li><br />
                            <li class="fw-lighter">publicly performing and/or showing any Website material;</li><br />
                            <li class="fw-lighter">using this Website in any way that is or may be damaging to this Website;</li><br />
                            <li class="fw-lighter">using this Website in any way that impacts user access to this Website;</li><br />
                            <li class="fw-lighter">using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li><br />
                            <li class="fw-lighter">engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li><br />
                            <li class="fw-lighter">using this Website to engage in any advertising or marketing.</li><br />
                        </ul><br />


                        <p class="fw-lighter">Certain areas of this Website are restricted from being access by you and Alweena Perfumes LLC may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p><br />

                        <h2 class="text-uppercase">Your Content</h2><br />

                        <p class="fw-lighter">In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Alweena Perfumes LLC a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media. <br />

                            Your Content must be your own and must not be invading any third-party’s rights. Alweena Perfumes LLC reserves the right to remove any of Your Content from this Website at any time without notice.</p><br /> <br />

                        <h2 class="text-uppercase">Your Privacy</h2><br />
                       <p class="fw-lighter">Please read Privacy Policy.</p><br/> <br/>
                       <h2 class="text-uppercase">No Warranties</h2><br />
                       <p class="fw-lighter">This Website is provided “as is,” with all faults, and Alweena Perfumes LLC express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p><br/><br/>
                       <h2 class="text-uppercase">Limitations of Liability</h2><br />
                       <p class="fw-lighter">In no event shall Alweena Perfumes LLC, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Alweena Perfumes LLC, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p><br/><br/>
                       <h2 class="text-uppercase">Indemnification</h2><br />
                       <p class="fw-lighter">You hereby indemnify to the fullest extent Alweena Perfumes LLC from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p><br/><br/>
                       <h2 class="text-uppercase">Severability</h2><br />
                       <p class="fw-lighter">If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p><br/><br/>
                       <h2 class="text-uppercase">Variation of Terms</h2><br />
                       <p class="fw-lighter">Alweena Perfumes LLC is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p><br/><br/>
                       <h2 class="text-uppercase">Assignment</h2><br />
                       <p class="fw-lighter">The Alweena Perfumes LLC is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p><br/><br/>
                       <h2 class="text-uppercase">Entire Agreement</h2><br />
                       <p class="fw-lighter">These Terms constitute the entire agreement between Alweena Perfumes LLC and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p><br/><br/>
                       <h2 class="text-uppercase">Governing Law & Jurisdiction</h2><br />
                       <p class="fw-lighter">These Terms will be governed by and interpreted in accordance with the laws of the State of ae, and you submit to the non-exclusive jurisdiction of the state and federal courts located in ae for the resolution of any disputes.</p><br/><br/>

                
                    </div>
                </>

            </LayoutOne>
        </Fragment>
    );
};

export default TermsAndConditions;