import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../components/pages/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'diseno-web-murcia',
        loadComponent: () => import('../components/pages/diseno-web-murcia.component').then(m => m.DisenoWebMurciaComponent),
    },
    {
        path: 'desarrollo-web-murcia',
        loadComponent: () => import('../components/pages/desarrollo-web-murcia.component').then(m => m.DesarrolloWebMurciaComponent),
    },
    {
        path: 'tienda-online-murcia',
        loadComponent: () => import('../components/pages/tienda-online-murcia.component').then(m => m.TiendaOnlineMurciaComponent),
    },
    {
        path: 'mantenimiento-web-murcia',
        loadComponent: () => import('../components/pages/mantenimiento-web-murcia.component').then(m => m.MantenimientoWebMurciaComponent),
    },
    {
        path: 'precios-diseno-web-murcia',
        loadComponent: () => import('../components/pages/precios-diseno-web-murcia.component').then(m => m.PreciosDisenoWebMurciaComponent),
    },
    {
        path: 'pagina-web-para-empresas-murcia',
        loadComponent: () => import('../components/pages/pagina-web-empresas-murcia.component').then(m => m.PaginaWebEmpresasMurciaComponent),
    },
    {
        path: 'seo-local-murcia',
        loadComponent: () => import('../components/pages/seo-local-murcia.component').then(m => m.SeoLocalMurciaComponent),
    },
    {
        path: 'portfolio',
        loadComponent: () => import('../components/pages/portfolio.component').then(m => m.PortfolioComponent),
    },
    {
        path: 'diseno-web-cartagena',
        loadComponent: () => import('../components/pages/geo/diseno-web-cartagena.component').then(m => m.DisenoWebCartagenaComponent),
    },
    {
        path: 'diseno-web-lorca',
        loadComponent: () => import('../components/pages/geo/diseno-web-lorca.component').then(m => m.DisenoWebLorcaComponent),
    },
    {
        path: 'diseno-web-molina-de-segura',
        loadComponent: () => import('../components/pages/geo/diseno-web-molina.component').then(m => m.DisenoWebMolinaComponent),
    },
    {
        path: '**',
        loadComponent: () => import('../components/pages/not-found.component').then(m => m.NotFoundComponent),
    },
];
