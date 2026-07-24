/**
 * Datos legales del sitio. Sustituir los valores [PENDIENTE] cuando se
 * disponga de la información definitiva: es el ÚNICO archivo que hay que
 * tocar para actualizar todas las páginas legales.
 */

export interface CookieRow {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  category: 'necesarias' | 'analiticas' | 'personalizacion' | 'publicitarias';
}

export interface Processor {
  name: string;
  purpose: string;
  location: string;
  guarantee: string;
}

export const LEGAL = {
  /* ── Titular ─────────────────────────────────────────── */
  companyName: 'Gestión del Papeleo, S.L.',
  cif: 'B42869537',
  address: 'Can Savella 21, bajo',
  phone: '',
  email: 'info@gestiondelpapeleo.com',
  registry: 'Inscrita en el Registro Mercantil de Palma de Mallorca, hoja PM-101496, IRUS 1000380135859, tomo electrónico y folio electrónico. EUID: ES08005.000653140',
  activity: 'Actividades de programación informática (CNAE 6201); prestación de servicios de estudios de mercado, marketing y comunicación; servicios de publicidad, diseño e imagen corporativa; diseño de páginas web y correo electrónico, y actividades vinculadas a la generación y transmisión de información a través de distintos canales',

  /* ── Sitio ───────────────────────────────────────────── */
  siteName: 'Rodearte',
  domain: '[PENDIENTE — dominio web]',
  updated: '24 de julio de 2026',

  /* ── Tratamientos ────────────────────────────────────── */
  hasForms: true,
  sellsOnline: false,
  hasBanner: false,

  /** Encargados de tratamiento / destinatarios de datos. */
  processors: [
    {
        "name": "Vercel Inc.",
        "purpose": "Alojamiento y entrega del sitio web",
        "location": "EE. UU. / UE",
        "guarantee": "Marco de Privacidad de Datos (DPF) y Cláusulas Contractuales Tipo"
    },
    {
        "name": "Formspree, Inc.",
        "purpose": "Recepción y reenvío de los mensajes del formulario de contacto",
        "location": "EE. UU.",
        "guarantee": "Marco de Privacidad de Datos (DPF) / Cláusulas Contractuales Tipo"
    }
] as Processor[],

  /** Cookies realmente utilizadas por el sitio. */
  cookieRows: [] as CookieRow[],
} as const;

export type LegalConfig = typeof LEGAL;
