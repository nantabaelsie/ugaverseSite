/* Rotating heading: the items inside [data-rotate] fade into each other, one at a time.
   Pictures (rf-about__pic), captions (rf-about__caption) and dots (rf-about__dot) inside the same [data-rotate-scope] change together.
   The dots always work. With reduced motion there is no autoplay: the first heading, picture and caption stay up until a dot is chosen. */
(function () {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll("[data-rotate]").forEach((heading) => {
        const items = Array.from(heading.querySelectorAll(".rf-rotate__item"));
        if (items.length < 2) return;
        const scope = heading.closest("[data-rotate-scope]") || heading.parentElement;
        const groups = [
            items,
            Array.from(scope.querySelectorAll(".rf-about__pic")),
            Array.from(scope.querySelectorAll(".rf-about__caption"))
        ];
        const dots = Array.from(scope.querySelectorAll(".rf-about__dot"));
        const DELAY = 4000;
        let index = 0;
        let timer = null;

        function show(next) {
            index = (next + items.length) % items.length;
            groups.forEach((group) => group.forEach((el, i) => el.classList.toggle("is-active", i === index)));
            dots.forEach((dot, i) => {
                dot.classList.toggle("is-active", i === index);
                dot.setAttribute("aria-current", i === index ? "true" : "false");
            });
        }

        function stop() {
            clearInterval(timer);
            timer = null;
        }

        function start() {
            stop();
            if (!reduced && !document.hidden) timer = setInterval(() => show(index + 1), DELAY);
        }

        dots.forEach((dot, i) => dot.addEventListener("click", () => { show(i); start(); }));
        document.addEventListener("visibilitychange", start);
        start();
    });
})();
