function sendMail(contactForm) {
    emailjs.send("service_ciy2rpf", "template_atmintis", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                alert("Great! We'll be in touch");
                window.location.replace("/");
            },
            function(error) {
                alert("Whoops! Didn't send.");
            }
        );
    return false; // To block from loading a new page
}