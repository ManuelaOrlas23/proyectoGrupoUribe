import React from "react";
import { Link } from "react-router-dom"; 
import ImagenUno from '../../../assets/logoChevignon.png'
import ImagenDos from '../../../assets/logoAmericanEagle.png'
import ImagenTres from '../../../assets/logoEsprit.png'
import ImagenCuatro from '../../../assets/logoGstarRaw.png'


function LogosSection() {
  return (
    <div className="content">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center">
        <div>
          <Link to="">
            <img
              src={ImagenUno}
              alt=""
              className="w-1/2 mx-auto mt-10"
            />
          </Link>
        </div>
        <div>
          <Link to="">
            <img
              src={ImagenDos}
              alt=""
              className="w-1/2 mx-auto mt-10"
            />
          </Link>
        </div>
        <div>
          <Link to="">
            <img
              src={ImagenTres}
              alt=""
              className="w-1/2 mx-auto mt-10"
            />
          </Link>
        </div>
        <div>
          <Link to="">
            <img
              src={ImagenCuatro}
              alt=""
              className="w-1/2 mx-auto mt-10"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LogosSection;
