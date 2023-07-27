const Layout = ()=> {
  return(
    <>
      <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
        <li className="nav-item mx-2" role="presentation">
          <button className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab"  aria-selected="true">Home</button>
        </li>
        <li className="nav-item mx-2" role="presentation">
          <button className="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab"  aria-selected="false">Profile</button>
        </li>
        <li className="nav-item mx-2" role="presentation">
          <button className="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab"  aria-selected="false">Contact</button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home Page</div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile Page</div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Contact Page</div>
      </div>
    </>
  )
}

export default Layout