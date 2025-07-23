import type { APIRoute } from "astro";
import { LINKEDIN_URL, SITE_AUTHOR, SITE_EMAIL } from "@/consts";

export const GET: APIRoute = async () => {
  const content = `/* humans.txt — italodr.com */

/* EQUIPO */
Desarrollador & Líder de Producto: ${SITE_AUTHOR}
Localización: Barcelona, España

/* CONTACTO */
Email: ${SITE_EMAIL}
LinkedIn: ${LINKEDIN_URL}

/* SITIO */
Creado con: Astro
Alojado en: Vercel
Analítica & Datos: Plausible
Rendimiento: Core Web Vitals ≥ 96
Accesibilidad: WCAG 2.2 AA compliant, auditado con axe-core
Última actualización: ${new Date().toISOString().split("T")[0]}

/* GRACIAS */
Fuentes: Poppins
Inspiración: iniciativa humans.txt — https://humanstxt.org

/* DÍ HOLA */
Se amable con los robots también — ver /robots.txt
  `;
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
