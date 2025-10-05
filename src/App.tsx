import { Presentacion } from "./componentes/Presentacion";
import { Precios } from "./componentes/Precios";
import { Formulario } from "./componentes/Formulario";
import { DatosContacto } from "./componentes/Datos-contacto";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function App() {
     useLayoutEffect(() => {
          const ctx = gsap.context(() => {
               // 1) HERO on load (sin .set)
               const tl = gsap.timeline({
                    defaults: { ease: "power2.out", duration: 0.7 },
               });
               tl.from(".hero h1", { autoAlpha: 0, y: 16 })
                    .from(".hero .lead", { autoAlpha: 0, y: 16 }, "-=0.35")
                    .from(".hero .cta", { autoAlpha: 0, y: 16 }, "-=0.35");

               // 2) Secciones al hacer scroll (usa from)
               gsap.utils.toArray<HTMLElement>(".section").forEach((sec) => {
                    gsap.from(sec, {
                         autoAlpha: 0,
                         y: 40,
                         duration: 0.9,
                         ease: "power2.out",
                         scrollTrigger: {
                              trigger: sec,
                              start: "top 80%",
                              once: true, // reprodúcelo una vez
                              // markers: true,           // descomenta para depurar
                         },
                         // importante si el elemento ya está en viewport
                         immediateRender: false,
                    });
               });

               // 3) Footer
               gsap.from("#datos-contacto", {
                    autoAlpha: 0,
                    y: 24,
                    duration: 0.9,
                    ease: "power2.out",
                    scrollTrigger: {
                         trigger: "#datos-contacto",
                         start: "top 85%",
                         once: true,
                    },
                    immediateRender: false,
               });

               // 4) Refresh cuando carguen imágenes (opcional pero útil)
               const onLoad = () => ScrollTrigger.refresh();
               window.addEventListener("load", onLoad);
          });

          // Limpieza para StrictMode (evita que la segunda pasada deje cosas ocultas)
          return () => ctx.revert();
     }, []);

     return (
          <>
               {Presentacion()}
               {Precios()}
               {Formulario()}
               {DatosContacto()}
          </>
     );
}

export default App;
