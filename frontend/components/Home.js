import React from "react";
export default function Home() {
  return (
    <div>
      <>
        <br />
        <br />
        <br />
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators/dots */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to={0}
              className="active"
            />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={3} />
          </div>
          {/* The slideshow/carousel */}
          <div className="carousel-inner">
            <center>
              <div className="carousel-item active">
                <img
                  src="https://media.istockphoto.com/id/1184658011/vector/people-at-the-seminar-presentation-conference-vector-illustration-business-training-coaching.jpg?s=612x612&w=0&k=20&c=2bUGH65MYIvfMToFtaJrvpbxowMlLiLeNiumyJJvkPM="
                  className="d-block"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/09/10045333/Job-Searching-Online-11-Best-Practices-You-Need-to-Know-2-2.jpg"
                  className="d-block"
                  width="800px"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://website-assets-fw.freshworks.com/attachments/cl02ejxkj02ugmjfnh0qs982y-freshteam-spot-illustration-how-to-post-a-job-on-linkedin-for-free.one-half.png"
                  className="d-block"
                  width="600px"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.careeraddict.com/uploads/article/59019/illustration-magnifying-glass-laptop.png"
                  className="d-block"
                  width="600px"
                />
              </div>
            </center>
          </div>
          {/* Left and right controls/icons */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
        <br />
        <br />
        <strong>
          <em>
            SO OUR MAIN AIM OF BUILDLING THIS WEB PAGE IS TO REDUCE THE WORK OF
            ORGANIZER BY PROVIDING DETAILS OF FACULTY WHO ARE
            WORKING,RETIRED,NEWLY JOINED BY GIVING THEIR INFORMATION LIKE
            CONTACT DETAILS THEIR CLG ID ETC...AND ALSO TO POST JOBS
            <blockquote>
              THIS WEBSITE IS MORE USEFUL FOR THOSE WHO ARE TRYING FOR THE
              FACULTY JOBS. OUR WEBSITE HELPS THEM TO KNOW WHAT ARE THE
              VACIENCIES AVAILABLE IN THE INSTITUTE. SO IN THESE PROCESS
              NOTIFICATION IS RELEASED FOR HAVE JOINED OUR WEB SITE.
            </blockquote>
          </em>
        </strong>
      </>
    </div>
  );
}
