class Navbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <header data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="0">
      <nav>
        <ul class="list" >
          <li>
            <a
              class="underline"
              href="/resources"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              >Resources</a
            >
          </li>
          <li>
            <a
              class="underline"
              href="/workspace"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              >Workspace</a
            >
          </li>
          <li>
            <a
              class="underline"
              href="/crew"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="450"
              >Crew</a
            >
          </li>
        </ul>
      </nav>
    </header>
      `;
  }
}

customElements.define("navbar-header", Navbar);
AOS.init();
