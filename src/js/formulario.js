
const d = document;

export function contactFormValidation() {
    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");

    console.log($inputs)

    $inputs.forEach((input) => {
        const $span = d.createElement("span");
        $span.id = input.name;

        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)

    })

    d.addEventListener("keyup", (e) => {

        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;

            // console.log($input, pattern)

            if (pattern && $input.value !== "") {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
            }


            if (!pattern) {
                return $input.value === ""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
            }
        }
    })

    d.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Enviando Formulario");

        const $loader = d.querySelector(".contact-form-loader"),
            $reponse = d.querySelector(".contact-form-response");

        console.log($loader)

        $loader.classList.remove("none");

        setTimeout(() => {
            $loader.classList.add("none");
            $reponse.classList.remove("none");
            $form.reset();
        }, 3000)
    })

}