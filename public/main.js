document.querySelector("#app").innerHTML = `

  <header>
        <img src="./assets/images/logo.svg" alt="Logo da página" />
        <nav class="nav-bar">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">New</a></li>
            <li><a href="">Popular</a></li>
            <li><a href="">Trending</a></li>
            <li><a href="">Categories</a></li>
          </ul>
        </nav>
        <button class="btn-open-mobile">
          <i class="ph-list-bold"></i>
        </button>

        <button class="btn-close-mobile">
          <i class="ph-x-bold"></i>
        </button>
      </header>

      <main>
        <div class="container">
          <section>
            <img
              src="./assets/images/image-web-3-desktop.jpg"
              alt="Imagem ilustrativa Home"
            />
            <div class="wrapper-text">
              <h1>The Bright Future of Web 3.0?</h1>
              <div class="content-text">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>

                <button>Read More</button>
              </div>
            </div>
          </section>
          <aside>
            <h2>New</h2>
            <div class="aside-text">
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>

            <div class="aside-text line">
              <h3>The Downsides of Al Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand Al image
                generation?
              </p>
            </div>

            <div class="aside-text">
              <h3>Is VC Funding Drying Up?</h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </aside>
        </div>
        <div class="cards">
          <div class="card">
            <img
              src="./assets/images/image-retro-pcs.jpg"
              alt="Imagem de console de video games antigos"
            />
            <div class="card-text">
              <strong>01</strong>
              <h4>Reviving Retro PCs</h4>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div class="card">
            <img
              src="./assets/images/image-top-laptops.jpg"
              alt="Imagem de um teclado de laptops"
            />
            <div class="card-text">
              <strong>02</strong>
              <h4>Top 10 Laptops of 2022</h4>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div class="card">
            <img
              src="./assets/images/image-gaming-growth.jpg"
              alt="Imagem de uma joystick de video game"
            />
            <div class="card-text">
              <strong>03</strong>
              <h4>The Growth of Gaming</h4>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </main>
`

let buttonOpenMobile = document.querySelector(".btn-open-mobile")
let buttonCloseMobile = document.querySelector(".btn-close-mobile")

buttonOpenMobile.addEventListener("click", handleOpenMobile)

function handleOpenMobile() {
  document.body.classList.add("active")
}

buttonCloseMobile.addEventListener("click", handleCLoseMobile)

function handleCLoseMobile() {
  document.body.classList.remove("active")
}

ScrollReveal({
  origin: top,
  distance: "20px",
  duration: 700,
  reset: true,
}).reveal(
  `
    .container section img, .wrapper-text h1,
    .content-text p, .content-text button, .aside-text h3, .aside-text h3, 
    .aside-text h3, .aside-text p, .aside-text p, .aside-text p, .card
  `,
  {
    delay: 200,
  }
)
