import styles from './App.module.css';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

function App() {
  return (
    <div className={`${styles.gradient} container-fluid`}>
      <div className="d-flex py-2" style={{ minHeight: '100vh' }}>
        <div className="card-group gap-3 w-75 mx-auto my-auto">
          <div className="card bg-dark rounded-0 shadow-lg animate__animated animate__slideInLeft">
            <img className="img-fluid" src={image1} alt="card bg" />
            <div className="card-body text-center">
              <h5 className="card-title text-white">Bootstrap y React</h5>
              <p className="card-text text-secondary">
                Esto pagina es para probar el funcionamiento de la librería bootstrap con la
                combinación de react y typescript.
              </p>
            </div>
            <div className="card-footer text-center py-3">
              <a
                href="https://getbootstrap.com/"
                rel="noreferrer"
                target="_blank"
                className="btn btn-link text-decoration-none text-danger"
              >
                Información acerca de bootstrap
              </a>
            </div>
          </div>
          <div className="card bg-dark rounded-bottom rounded-0 shadow-lg animate__animated animate__slideInUp">
            <img className="img-fluid" src={image2} alt="card bg 2" />
            <div className="card-body text-center">
              <h5 className="card-title text-white">Mas proyectos</h5>
              <p className="card-text text-secondary">
                Te intereso este proyecto? mira mis otros proyectos en mi perfil de github.
              </p>
            </div>
            <div className="card-footer text-center text-white py-3">
              <a
                href="https://github.com/MatiasTK?tab=repositories"
                rel="noreferrer"
                target="_blank"
                className="btn btn-link text-decoration-none text-danger"
              >
                Mi repositorio de github
              </a>
            </div>
          </div>
          <div className="card bg-dark rounded-bottom rounded-0 shadow-lg animate__animated animate__slideInRight">
            <img className="img-fluid" src={image3} alt="card bg 3" />
            <div className="card-body text-center">
              <h5 className="card-title text-white">Mas Información</h5>
              <p className="card-text text-secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum qui corporis ipsa!
                Fugiat doloremque praesentium dolor unde at pariatur eos inventore minima. Aliquid
                et est facilis in quidem laudantium distinctio!
              </p>
            </div>
            <div className="card-footer text-center text-white py-3">
              <a
                href="https://github.com/MatiasTK"
                rel="noreferrer"
                target="_blank"
                className="btn btn-link text-decoration-none text-danger"
              >
                Mas Información
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
