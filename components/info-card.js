const template = document.createElement('template');

template.innerHTML = /* html */ `
<style>
    .card {
        display: flex;
        flex-wrap: wrap;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.75rem;
        line-height: 1.4rem;
    }
    .card *:nth-child(odd) {
        width: 25%;
        font-weight: bold;
    }
    .card *:nth-child(even) {
        width: 75%;
    }
</style>

<div class="card">
    <div>Phone</div>
    <div>+45 50 54 23 35</div>
    <div>E-mail</div>
    <div>hector_dk@outlook.com</div>
    <div>Address</div>
    <div>Amager</div>
</div>
`;

class InfoCard extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({
            mode: "open"
        });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("info-card", InfoCard);