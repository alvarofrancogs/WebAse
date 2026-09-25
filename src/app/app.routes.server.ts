import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'diseno-web-murcia', renderMode: RenderMode.Prerender },
  { path: 'desarrollo-web-murcia', renderMode: RenderMode.Prerender },
  { path: 'tienda-online-murcia', renderMode: RenderMode.Prerender },
  { path: 'mantenimiento-web-murcia', renderMode: RenderMode.Prerender },
  { path: 'precios-diseno-web-murcia', renderMode: RenderMode.Prerender },
  { path: 'pagina-web-para-empresas-murcia', renderMode: RenderMode.Prerender },
  { path: 'seo-local-murcia', renderMode: RenderMode.Prerender },
  { path: 'diseno-web-cartagena', renderMode: RenderMode.Prerender },
  { path: 'diseno-web-lorca', renderMode: RenderMode.Prerender },
  { path: 'diseno-web-molina-de-segura', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client }
];
