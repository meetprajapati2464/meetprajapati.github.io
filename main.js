const rImg = document.querySelector(".resumeImg");
rImg.addEventListener('click', function () {
  const pdfUrl = 'Assets/Resume_Meet.pdf';

  const linkPdf = document.createElement('a');
  linkPdf.href = pdfUrl;
  linkPdf.download = "Meet_Resume.pdf";
  linkPdf.click();
});

var rBtn = document.querySelector("#resumeLink");
rBtn.addEventListener('click', function () {
  const fileUrl = 'Assets/Resume_Meet.pdf';

  const linkPdf = document.createElement('a');
  linkPdf.href = fileUrl;
  linkPdf.download = "Meet_Resume.pdf";
  linkPdf.click();
});

function gotogithub() {
  document.getElementById("github").click();
}

function sidebarHandler() {
  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".hidemenu");
    const sidebar = document.querySelector(".aside");
    const closeBtn = document.querySelector(".close");
    const links = document.querySelectorAll(".aside nav .list ul li a");
    menuIcon.addEventListener("click", function () {
      console.log("Menu clicked");
      if (sidebar.style.left === "-100%" || sidebar.style.left === "") {
        sidebar.style.left = "0";
      } else {
        sidebar.style.left = "-100%";
      }
    });
    closeBtn.addEventListener("click", function () {
      console.log("Close clicked");
      sidebar.style.left = "-100%";
    });
    links.forEach((link) => {
      link.addEventListener("click", function () {
        console.log("Link clicked");
        sidebar.style.left = "-100%";
      });
    });
  });
}
sidebarHandler();