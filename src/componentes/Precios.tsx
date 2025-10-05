export function Precios() {
     const elegirPlan = (nombrePlan: string) => {
          // guardamos en localStorage (o en query params si prefieres)
          localStorage.setItem("planSeleccionado", nombrePlan);
          window.dispatchEvent(
               new CustomEvent("plan-seleccionado", { detail: nombrePlan })
          );

          // luego navegamos al formulario
          const anchor = document.getElementById("contacto");
          if (anchor) anchor.scrollIntoView({ behavior: "smooth" });
     };
     return (
          <section className="section reveal" id="precios">
               <div className="container">
                    <h2 className="m0">Planes de entrenamiento</h2>

                    <div className="grid price-grid mt16">
                         {/* Entreno o dieta por separado 40€/mes */}
                         <article className="card price-card">
                              <h3>Entrenamiento o dieta por separado</h3>
                              <div className="price-tag">40€/mes</div>
                              <ul className="price-feats">
                                   <li>Plan a medida</li>
                                   <li>Revisión semanal online</li>
                                   <li>Soporte por WhatsApp</li>
                              </ul>
                              <a
                                   className="price-cta"
                                   href="#contacto"
                                   onClick={() =>
                                        elegirPlan(
                                             "Entrenamiento o dieta por separado"
                                        )
                                   }
                              >
                                   Elegir
                              </a>
                         </article>
                         {/* Entreno + dieta 60€/mes */}
                         <article className="card price-card">
                              <h3>Entrenamiento + Dieta</h3>
                              <br />
                              <div className="price-tag">60€/mes</div>
                              <ul className="price-feats">
                                   <li>Plan a medida</li>
                                   <li>Entrenamiento personalizado</li>
                                   <li>Seguimiento semanal</li>
                                   {/*<li>Soporte prioritario</li>
                                    */}
                              </ul>
                              <a
                                   className="price-cta"
                                   href="#contacto"
                                   onClick={() =>
                                        elegirPlan(
                                             "Entrenamiento + Dieta básico"
                                        )
                                   }
                              >
                                   Elegir
                              </a>
                         </article>
                         {/* Entreno + dieta + coaching mensual 120€/mes */}
                         <article className="card price-card">
                              <h3>Entrenamiento + Dieta Mensual</h3>
                              <div className="price-tag">120€/mes</div>
                              <ul className="price-feats">
                                   <li>Plan Premium Mensual</li>
                                   <li>Plan 100% personalizado</li>
                                   <li>Revisión semanal</li>
                                   <li>Entrenamiento presencial</li>
                              </ul>
                              <a
                                   className="price-cta"
                                   href="#contacto"
                                   onClick={() =>
                                        elegirPlan(
                                             "Entrenamiento + Dieta Mensual"
                                        )
                                   }
                              >
                                   Elegir
                              </a>
                         </article>
                         {/* Entreno + dieta + coaching trimestral 350€/mes */}
                         <article className="card price-card featured">
                              <span className="badge">Mejor valor</span>
                              <h3>Entrenamiento + Dieta Trimestral</h3>
                              <div className="price-tag">350€/trimestre</div>
                              <ul className="price-feats">
                                   <li>Plan Premium Trimestral</li>
                                   <li>Plan 100% personalizado</li>
                                   <li>Revisión semanal</li>
                                   <li>Entrenamiento presencial</li>
                              </ul>
                              <a
                                   className="price-cta"
                                   href="#contacto"
                                   onClick={() =>
                                        elegirPlan(
                                             "Entrenamiento + Dieta Trimestral"
                                        )
                                   }
                              >
                                   Elegir
                              </a>
                         </article>
                         {/* Entreno + dieta + coaching anual 1200€/mes */}
                         <article className="card price-card">
                              <h3>Entrenamiento + Dieta Anual</h3>
                              <br />
                              <div className="price-tag">1150€/año</div>
                              <ul className="price-feats">
                                   <br />
                                   <li>Plan Premium Anual</li>
                                   <li>Plan 100% personalizado</li>
                                   <li>Revisión semanal</li>
                                   <li>Entrenamiento presencial</li>
                              </ul>
                              <a
                                   className="price-cta"
                                   href="#contacto"
                                   onClick={() =>
                                        elegirPlan(
                                             "Entrenamiento + Dieta Anual"
                                        )
                                   }
                              >
                                   Elegir
                              </a>
                         </article>
                    </div>

                    <hr className="divider" />
               </div>
          </section>
     );
}
