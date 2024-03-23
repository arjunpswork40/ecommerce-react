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
        <div>
    <h2 class="text-center fw-semibold">PRIVACY NOTICE</h2>
    <p class="text-center lh-base">
    This privacy notice for Alweena Perfumes LLC (doing business as Alweena Perfumes) (“Alweena Perfumes,” “we,” “us,” or “our“), describes how and why we might collect, store, use, and/or share (“process“) your information when you use our services (“Services“), such as when you:
    </p>
    <p>
      We only ask for personal information when we truly need it to provide a
      service to you. We collect it by fair and lawful means, with your
      knowledge and consent. We also let you know why we’re collecting it and
      how it will be used.
    </p>
    <p>
      We only retain collected information for as long as necessary to provide
      you with your requested service. What data we store, we’ll protect within
      commercially acceptable means to prevent loss and theft, as well as
      unauthorized access, disclosure, copying, use or modification.
    </p>
    <p>
      We don’t share any personally identifying information publicly or with
      third-parties, except when required to by law.
    </p>
    <p>
      Our website may link to external sites that are not operated by us. Please
      be aware that we have no control over the content and practices of these
      sites, and cannot accept responsibility or liability for their respective
      privacy policies.
    </p>
    <p>
      You are free to refuse our request for your personal information, with the
      understanding that we may be unable to provide you with some of your
      desired services.
    </p>
    <p>
      Your continued use of our website will be regarded as acceptance of our
      practices around privacy and personal information. If you have any
      questions about how we handle user data and personal information, feel
      free to contact us.
    </p>
    <p>This policy is effective as of 1 January 2024.</p>
  </div>
      </LayoutOne>
    </Fragment>
  );
};

export default PrivacyPolicy;