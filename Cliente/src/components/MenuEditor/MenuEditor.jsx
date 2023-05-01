import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineUpload } from "react-icons/ai";

function MenuEditor() {
  return (
    <>
      <div className="editor-container">
        <div className="editor-header">
          <div className="img-container " id="menuCoverFoto">
            <img src="https://picsum.photos/200/300" alt="menu-cover-foto" />
          </div>
        </div>

        <div className="editor-main d-flex p-1">
          <div className="form-container p-1">
            <form id="menu-form">
              <div className="form-categorias">
                <h3>
                  {" "}
                  Nombre menú{" "}
                  <i>
                    <FaEdit />
                  </i>
                </h3>
                <p>Categorias</p>
                <input type="text" placeholder="Insertar Categoria" />
                <button>
                  {" "}
                  <i>
                    <AiOutlinePlus />
                  </i>{" "}
                  Crear Categoria
                </button>
                <ul>
                  <li>Desayunos</li>
                  <li>Comida</li>
                </ul>
                <button id="btn-crear-menu">Crear Menu</button>
              </div>

              <div className="form-platillos d-flex">
                <div className="nombre-platillo">
                  <h6> Nombre del platillo </h6>
                  <input type="text" placeholder="Insertar Nombre" />
                </div>

                <div className="precio-platillo">
                  <h6>Precio del platillo</h6>
                  <input type="text" placeholder="Insertar Nombre" />
                </div>

                <div className="categoria-platillo">
                  <h6>Nombre del platillo</h6>
                  <select>
                    <option value="Desayuno">Desayuno</option>
                    <option value="Comida">Comida</option>
                  </select>
                </div>
              </div>

              <div className="descripcion-platillo">
                <h6>Descripcion del Platillo</h6>
                <textarea
                  rows="3"
                  placeholder="Descripcion del platillo"
                ></textarea>
              </div>

              <div className="form-btns d-flex">
                <button id="foto-platillo">
                  Foto del Platillo{" "}
                  <i>
                    <AiOutlineUpload />
                  </i>{" "}
                </button>
                <button id="crear-platillo">Crear Platillo</button>
              </div>

              <div className="checkbox-input">
                <input type="checkbox" />
                <label>Deshabilitar Platillo</label>
              </div>
            </form>
          </div>

          <div className="preview-container p-1">
            <h6>Previsualizacion del Menu</h6>
            <div className="menu-preview">
              <h6 className="categoria-preview">DESAYUNOS</h6>
              <div className="card-container">
                <div className="card d-flex row">
                  <div className="card-body">
                    <div className="d-flex platillo">
                      <img
                        src="https://picsum.photos/200"
                        alt=""
                        className="card-img-left"
                      />
                      <div className="card-title">
                        Este es el Titulo del platillo
                      </div>
                      <small>$666</small>
                    </div>
                    <div className="card-text">
                      Esta seria la descripcion del Platillo un platillo
                      exquisito, digno de deleitar las papilas
                    </div>
                  </div>
                </div>

                <div className="card d-flex row">
                  <div className="card-body">
                    <div className="d-flex platillo">
                      <img
                        src="https://picsum.photos/200"
                        alt=""
                        className="card-img-left"
                      />
                      <div className="card-title">
                        Este es el Titulo del platillo
                      </div>
                      <small>$666</small>
                    </div>
                    <div className="card-text">
                      Esta seria la descripcion del Platillo un platillo
                      exquisito, digno de deleitar las papilas
                    </div>
                  </div>
                </div>

                <div className="card d-flex row">
                  <div className="card-body">
                    <div className="d-flex platillo">
                      <img
                        src="https://picsum.photos/200"
                        alt=""
                        className="card-img-left"
                      />
                      <div className="card-title">
                        Este es el Titulo del platillo
                      </div>
                      <small>$666</small>
                    </div>
                    <div className="card-text">
                      Esta seria la descripcion del Platillo un platillo
                      exquisito, digno de deleitar las papilas
                    </div>
                  </div>
                </div>
                <h6 className="categoria-preview">DESAYUNOS</h6>
                <div className="card d-flex row">
                  <div className="card-body">
                    <div className="d-flex platillo">
                      <img
                        src="https://picsum.photos/200"
                        alt=""
                        className="card-img-left"
                      />
                      <div className="card-title">
                        Este es el Titulo del platillo
                      </div>
                      <small>$666</small>
                    </div>
                    <div className="card-text">
                      Esta seria la descripcion del Platillo un platillo
                      exquisito, digno de deleitar las papilas
                    </div>
                  </div>
                </div>
                <div className="card d-flex row">
                  <div className="card-body">
                    <div className="d-flex platillo">
                      <img
                        src="https://picsum.photos/200"
                        alt=""
                        className="card-img-left"
                      />
                      <div className="card-title">
                        Este es el Titulo del platillo
                      </div>
                      <small>$666</small>
                    </div>
                    <div className="card-text">
                      Esta seria la descripcion del Platillo un platillo
                      exquisito, digno de deleitar las papilas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuEditor;
