/* Contact card: any element with data-contact-open opens the dialog; the close button, the backdrop and Esc close it.
   If the opener has data-contact-topic (and data-contact-mailto), the card says what the visitor is asking about
   and the Email button opens that prefilled email. Without them it is the plain contact card. */
(function () {
    const card = document.querySelector("dialog.rf-contact");
    if (!card) return;

    const topicLine = card.querySelector("[data-contact-topic-line]");
    const topicName = card.querySelector("[data-contact-topic-name]");
    const emailLink = card.querySelector("[data-contact-email]");
    const plainEmail = emailLink ? emailLink.getAttribute("href") : "";

    function open(opener) {
        const topic = opener.dataset.contactTopic;
        if (topicLine && topicName) {
            topicName.textContent = topic || "";
            topicLine.hidden = !topic;
        }
        if (emailLink) emailLink.setAttribute("href", opener.dataset.contactMailto || plainEmail);
        card.showModal();
    }

    document.querySelectorAll("[data-contact-open]").forEach((opener) => {
        opener.addEventListener("click", () => open(opener));
    });

    card.querySelectorAll("[data-contact-close]").forEach((closer) => {
        closer.addEventListener("click", () => card.close());
    });

    // a click on the dark backdrop (outside the card) closes it
    card.addEventListener("click", (event) => {
        const box = card.getBoundingClientRect();
        const inside = event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom;
        if (!inside) card.close();
    });
})();
