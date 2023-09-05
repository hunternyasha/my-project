const Footer = () => {
    const footerTitles = {
      title: "Nyasha Tanganyika",
      title2: "Front-end Web Developer",
    };
    return (
      <>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <h4>{footerTitles.title}</h4>
                <h2>{footerTitles.title2}</h2>
              </div>
              <div className="col-12 col-md-4">
                <h4>{footerTitles.title}</h4>
                <h2>{footerTitles.title2}</h2>
              </div>
              <div className="col-12 col-md-4">
                <h4>{footerTitles.title}</h4>
                <h2>{footerTitles.title2}</h2>
              </div>
            </div>
          </div>
          <hr />
        </footer>
      </>
    );
}
 
export default Footer;