import React, { useEffect } from "react";

export default function AboutUs(props) {
  useEffect(() => {
    props.setProgress(30);
    setTimeout(() => {
      props.setProgress(100);
    }, 300);
    props.KeepLoggedIn();
    props.setNavigateTo("about")
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center display-6 my-3">
          <b>ABOUT US</b>
        </h1>
        <div className="container AboutUs mb-4 md:mt-12">
          <i>
            <sup>
              <i
                className="fa-solid fa-quote-left mr-1.5"
                style={{ color: "#9ca3af" }}
              ></i>
            </sup>
            Welcome to RFC, your digital gateway to a world of culinary delights. At RFC, we celebrate the art of dining by seamlessly blending the flavors of exceptional cuisine with the precision of cutting-edge technology. Our passion lies in crafting a user-friendly experience that goes beyond the ordinary, offering a diverse menu curated to satisfy every palate. 
            <sup>
              <i
                className="fa-solid fa-quote-right mr-1.5"
                style={{ color: "#9ca3af" }}
              ></i>
            </sup>
          </i>
        </div>
        <div className="container AboutUs mb-5">
        <i>
            <sup>
              <i
                className="fa-solid fa-quote-left mr-1.5"
                style={{ color: "#9ca3af" }}
              ></i>
            </sup>
            Whether you're a tech enthusiast or a food connoisseur, RFC is your go-to destination for a harmonious fusion of innovation and gastronomy. Join us on this journey as we redefine the way you explore, savor, and enjoy the exquisite world of food through the lens of modern technology. Cheers to a dining experience that transcends expectations - welcome to RFC!
            <sup>
              <i
                className="fa-solid fa-quote-right mr-1.5"
                style={{ color: "#9ca3af" }}
              ></i>
            </sup>
          </i>
        </div>
      </div>
    </>
  );
}
