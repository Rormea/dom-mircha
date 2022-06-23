

const d = document;

export function scrollSpy() {

    const $sections = d.querySelectorAll("section[data-scroll-spy]")


    const cb = (entries) => {
        // console.log("entriess", entries);

        entries.forEach(entry => {
            // console.log("entry", entry)
            const id = entry.target.getAttribute("id");
            // console.log(id);
            let idSeccion = d.querySelector(`a[data-scroll-spy][href="#${id}"]`)
            // console.log(idSeccion)

            if (entry.isIntersecting) {
                idSeccion.classList.add("active")
            } else {

                idSeccion.classList.remove("active")
            }
        })
    }

    const observer = new IntersectionObserver(cb, {
        // rootMargin: "-325px"
        threshold: [0.9, 0.9]
    });

    $sections.forEach(el => observer.observe(el));

}
