class Navbar extends HTMLElement{
    constructor(){
      super();
    }
    connectedCallback(){
      this.innerHTML = `
      <link rel="stylesheet" href="/static/css/global.css" />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <header>
      <nav>
        <ul class="list">
          <li>
            <a
              class="underline"
              href="/resources"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              >Resources</a
            >
          </li>
          <li>
            <a
              class="underline"
              href="/workspace"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              >Workspace</a
            >
          </li>
          <li>
            <a
              class="underline"
              href="/crew"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="350"
              >Crew</a
            >
          </li>
        </ul>
      </nav>
    </header>
      `
    }
  }

customElements.define('navbar-header', Navbar);
AOS.init();