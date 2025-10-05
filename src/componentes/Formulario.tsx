// formulario.tsx
import { useEffect, useState } from "react";

export function Formulario() {
     const [status, setStatus] = useState<"idle" | "ok" | "error" | "sending">(
          "idle"
     );
     const [plan, setPlan] = useState("");

     // Al montar, lee ?plan= de la URL

     useEffect(() => {
          // valor inicial por si venimos ya con algo elegido
          setPlan(localStorage.getItem("planSeleccionado") || "");

          // escucha selecciones en vivo
          const onSeleccion = (e: Event) =>
               setPlan((e as CustomEvent<string>).detail || "");
          window.addEventListener(
               "plan-seleccionado",
               onSeleccion as EventListener
          );
          return () =>
               window.removeEventListener(
                    "plan-seleccionado",
                    onSeleccion as EventListener
               );
     }, []);
     return (
          <section className="section reveal" id="contacto">
               <div className="container card">
                    <h2 className="m0">Formulario de Contacto</h2>

                    <form
                         className="mt16"
                         action="https://formsubmit.co/flfitentrenos@gmail.com"
                         method="POST"
                         onSubmit={() => setStatus("sending")}
                    >
                         <label>
                              Plan que has elegido:
                              <input
                                   type="text"
                                   value={plan}
                                   onChange={(e) => setPlan(e.target.value)}
                                   name="plan_entrenamiento"
                                   readOnly
                              />
                         </label>
                         <label>
                              Nombre y Apellidos
                              <input type="text" name="nombre" required />
                         </label>
                         <label>
                              Teléfono de contacto
                              <input type="tel" name="telefono" />
                         </label>

                         <label>
                              Email
                              <input type="email" name="email" required />
                         </label>

                         <label>
                              Mensaje
                              <textarea name="mensaje" />
                         </label>
                         <input type="hidden" name="_captcha" value="false" />
                         <button type="submit" disabled={status === "sending"}>
                              {status === "sending" ? "Enviando..." : "Enviar"}
                         </button>
                    </form>
               </div>
          </section>
     );
}
