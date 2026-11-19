function AboutPage() {
  return (
    <main className="page-container about-page">
      <section className="profile-card">
        <img
          src="/products/รูป.jpeg"
          alt="Sirichai Profile"
          className="profile-avatar"
        />{" "}
        <p className="profile-caption">STUDENT PROFILE</p>
        <h1>นายสิริชัย ขำสุขเลิศ</h1>
        <div className="profile-detail">
          <span>Student ID</span>
          <strong>1680706197</strong>
        </div>
        <div className="profile-detail">
          <span>Section</span>
          <strong>227E</strong>
        </div>
        <p className="profile-course">Computer Science · Bangkok University</p>
      </section>
    </main>
  );
}
export default AboutPage;
