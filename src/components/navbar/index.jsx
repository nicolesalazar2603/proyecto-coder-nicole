import  'bootstrap/dist/css/bootstrap.min.css';


const NavbarComponent = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">CODER</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Produtos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Precios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Carrito</a>
      </li>
    </ul>
  </div>
</nav>

    </>
   );
}

export default NavbarComponent;
