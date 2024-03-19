import { Fragment } from "react";
import { useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

const FAQ = () => {
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
            {label: "FAQ", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
                <MDBAccordion alwaysOpen initialActive={1}>
                    <MDBAccordionItem collapseId={1} headerTitle="PAYMENT METHODS">
                        Nulla in faucibus praesent scelerisque neque ut tellus dolor.
                        Auctor lorem convallis vulputate tincidunt tellus quis molestie pulvinar. 
                        Viverra ut pellentesque pulvinar erat ipsum amet pellentesque semper nunc. 
                        Vitae massa quisque gravida pellentesque ultrices nibh semper elit in. Ut velit vitae purus,
                        ornare odio gravida nulla. Viverra et morbi sapien sapien mauris lacus adipiscing.
                        Mi, tincidunt tortor sed purus. Urna dictumst mauris malesuada aliquam sit nullam volutpat.
                        Tristique mattis vitae leo libero dui scelerisque quis.
                    </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle="INTERNATIONAL SHIPPING">
                    Nulla in faucibus praesent scelerisque neque ut tellus dolor.
                    Auctor lorem convallis vulputate tincidunt tellus quis molestie pulvinar. 
                    Viverra ut pellentesque pulvinar erat ipsum amet pellentesque semper nunc. 
                    Vitae massa quisque gravida pellentesque ultrices nibh semper elit in. Ut velit vitae purus,
                    ornare odio gravida nulla. Viverra et morbi sapien sapien mauris lacus adipiscing.
                    Mi, tincidunt tortor sed purus. Urna dictumst mauris malesuada aliquam sit nullam volutpat.
                    Tristique mattis vitae leo libero dui scelerisque quis.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle="CASHBACK PROGRAM">
                    Nulla in faucibus praesent scelerisque neque ut tellus dolor.
                    Auctor lorem convallis vulputate tincidunt tellus quis molestie pulvinar. 
                    Viverra ut pellentesque pulvinar erat ipsum amet pellentesque semper nunc. 
                    Vitae massa quisque gravida pellentesque ultrices nibh semper elit in. Ut velit vitae purus,
                    ornare odio gravida nulla. Viverra et morbi sapien sapien mauris lacus adipiscing.
                    Mi, tincidunt tortor sed purus. Urna dictumst mauris malesuada aliquam sit nullam volutpat.
                    Tristique mattis vitae leo libero dui scelerisque quis.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={4} headerTitle="MONEY BACK WARRANTY">
                    Nulla in faucibus praesent scelerisque neque ut tellus dolor.
                    Auctor lorem convallis vulputate tincidunt tellus quis molestie pulvinar. 
                    Viverra ut pellentesque pulvinar erat ipsum amet pellentesque semper nunc. 
                    Vitae massa quisque gravida pellentesque ultrices nibh semper elit in. Ut velit vitae purus,
                    ornare odio gravida nulla. Viverra et morbi sapien sapien mauris lacus adipiscing.
                    Mi, tincidunt tortor sed purus. Urna dictumst mauris malesuada aliquam sit nullam volutpat.
                    Tristique mattis vitae leo libero dui scelerisque quis.
                </MDBAccordionItem>
            </MDBAccordion>
            </MDBContainer>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default FAQ;
