
document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("main section");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.1
    });

    sections.forEach(function (section) {
        section.classList.add("hidden");
        observer.observe(section);
    });

});
