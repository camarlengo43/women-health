# VidaMujer — Portal Profesional de Salud Femenina (Fase 1)

> **Plataforma digital editorial de divulgación sobre salud femenina basada en la evidencia biomédica, diseñada con arquitectura escalable, diseño premium y estándares rigurosos YMYL.**

---

## 1. Visión y Objetivos del Proyecto

**VidaMujer** no es un simple blog: es la **Fase 1 (Capa Pública Editorial)** de un ecosistema integral de salud femenina concebido para acompañar a las mujeres en cada etapa de su vida reproductiva y madurez (ciclo menstrual, perimenopausia, menopausia, embarazo y bienestar hormonal).

### Objetivos Fundamentales
- **Rigor Biomédico YMYL (*Your Money or Your Life*):** Artículos fundamentados en consensos clínicos de organismos oficiales (OMS, SEGO, AEEM, The Menopause Society, NICE, ACOG).
- **Diseño Editorial Premium:** Interfaz cálida, moderna y sofisticada, con tipografía editorial (Playfair Display + Inter), sin clichés estéticos y con máxima legibilidad (680px de ancho de lectura en artículos).
- **Accesibilidad y Rendimiento (WCAG AA):** Contraste calibrado, *skip-to-content*, semántica HTML5 pura, navegación por teclado y Server Components por defecto para tiempos de carga ultrarrápidos.
- **Arquitectura Preparada para el Futuro:** Capa de servicios desacoplada para evolucionar sin fricción hacia una aplicación interactiva con área privada, seguimiento del ciclo, monitorización de síntomas en perimenopausia y PWA.

---

## 2. Stack Tecnológico

| Capa / Herramienta | Tecnología | Justificación |
|---|---|---|
| **Framework Web** | **Next.js 16 (App Router + Turbopack)** | Rendimiento nativo de build, Server Components, generación estática (SSG/ISR) y optimización SEO. |
| **Librería UI** | **React 19** | Soporte para transiciones de estado asíncronas (`useTransition`), Server Actions y concurrencia. |
| **Lenguaje** | **TypeScript 5 (Strict Mode)** | Tipado de dominio para entidades de contenido, SEO, metadatos y componentes. |
| **Estilos y CSS** | **Tailwind CSS v4** | Motor CSS-native ultra ligero `@theme`, sin sobrecarga de JavaScript, diseño atómico y tokens de diseño unificados. |
| **Iconografía** | **Lucide React** | Iconos consistentes, accesibles y con tree-shaking automático. |
| **Motor de Contenido** | **MDX + Gray-Matter + Remark** | Procesamiento estático desacoplado con generación de IDs automáticos de encabezados para la tabla de contenidos (TOC). |

---

## 3. Arquitectura del Proyecto

El código sigue una estructura modular orientada a funcionalidades (**Feature-based Architecture**) con separación estricta entre capas:

```
women-health/
├── content/                         # Repositorio de contenidos MDX
│   └── blog/
│       ├── salud-menstrual/         # 4 artículos clínicos
│       ├── perimenopausia/          # 4 artículos clínicos
│       ├── menopausia/              # 3 artículos clínicos
│       ├── embarazo/                # 2 artículos clínicos
│       └── bienestar/               # 2 artículos clínicos
├── src/
│   ├── app/                         # Rutas App Router (Next.js 16)
│   │   ├── (public)/                # Estructura extensible a (app) en Fase 2
│   │   ├── blog/                    # Listado general de artículos
│   │   │   └── [slug]/              # Detalle de artículo con TOC interactivo
│   │   ├── categorias/              # Directorio completo de categorías
│   │   ├── categoria/[slug]/        # Vista temática por categoría
│   │   ├── buscar/                  # Buscador instantáneo con filtros
│   │   ├── sobre-el-proyecto/       # Misión, metodología y principios
│   │   ├── contacto/                # Canales de comunicación y aviso de salud
│   │   ├── legal/
│   │   │   ├── privacidad/          # Política RGPD / LOPDGDD
│   │   │   ├── cookies/             # Política de cookies
│   │   │   └── aviso-legal/         # LSSI-CE y Medical Disclaimer formal
│   │   ├── layout.tsx               # Root layout con Google Fonts & estructura semántica
│   │   ├── page.tsx                 # Home editorial con Hero, Temas, Destacados y Confianza
│   │   ├── not-found.tsx            # Página 404 personalizada
│   │   ├── sitemap.ts               # Generador dinámico de Sitemap XML
│   │   └── robots.ts                # Configuración de rastreo para motores de búsqueda
│   ├── components/
│   │   ├── layout/                  # Header (con menú móvil responsive), Footer, Breadcrumbs
│   │   └── shared/                  # CategoryBadge, MedicalDisclaimer, NewsletterForm, JsonLd
│   ├── features/
│   │   ├── blog/                    # ArticleCard, TableOfContents
│   │   ├── categories/              # CategoryCard, CategoryGrid
│   │   └── search/                  # SearchInput (client debounce), SearchFilters
│   ├── services/                    # Capa de abstracción de datos
│   │   ├── posts.ts                 # getPosts, getPostBySlug, getRelatedPosts...
│   │   ├── categories.ts            # getCategories, getCategoryBySlug...
│   │   └── search.ts                # searchPosts, searchPostsByCategory
│   ├── config/                      # Configuración del sitio y metadatos maestros
│   ├── lib/                         # Utilidades (SEO helpers, formatDate, slugify)
│   └── types/                       # Interfaces TypeScript (Post, Category, SEO, JSON-LD)
```

---

## 4. Sistema de Diseño & Identidad Visual

La identidad visual ha sido diseñada específicamente para transmitir **serenidad, rigor y calidez**, alejándose deliberadamente de los tonos rosas estridentes o de la frialdad aséptica de los portales hospitalarios tradicionales.

### Paleta Cromática

- **Fondo Primario:** `#FAFAF8` (crema suave, reduce la fatiga visual)
- **Texto Principal:** `#1A1A1A` (contraste óptico 14:1 contra el fondo)
- **Acento Editorial Principal:** `#8B6E5A` (terracota suave)
- **Acento Cálido:** `#C4956A`
- **Bordes y Delimitadores:** `#E8E4DE`

### Identidad por Categoría

| Categoría | Color Token | Tono |
|---|---|---|
| **Salud Menstrual** | `--color-cat-menstrual` (`#9B7A8F`) | Malva suave |
| **Perimenopausia** | `--color-cat-perimenopausia` (`#C4956A`) | Ámbar cálido |
| **Menopausia** | `--color-cat-menopausia` (`#B8846A`) | Arcilla suave |
| **Embarazo** | `--color-cat-embarazo` (`#7A8B6F`) | Verde salvia |
| **Bienestar** | `--color-cat-bienestar` (`#6B9A9A`) | Verde azulado suave |

### Tipografía
- **Títulos y Encabezados:** `Playfair Display` (Serif editorial con distinción y autoridad médica).
- **Cuerpo de Texto y UI:** `Inter` (Sans-serif con máxima legibilidad en dispositivos móviles).

---

## 5. Estrategia SEO y Estándares YMYL

1. **Datos Estructurados (JSON-LD):**
   - **Artículos:** Schema `Article` con fecha de publicación, autoría, titular y editor.
   - **Breadcrumbs:** Schema `BreadcrumbList` jerárquico en todas las páginas.
   - **Sitio:** Schema `WebSite` con `SearchAction` integrado para búsquedas directas en Google.
   - **Categorías:** Schema `CollectionPage`.
2. **Metadatos Canónicos y Redes Sociales:** Generación dinámica de `title`, `description`, `canonical`, `og:image` y tarjetas Twitter `summary_large_image`.
3. **Indexación:** `sitemap.xml` dinámico y `robots.txt` que expone automáticamente todos los artículos y categorías.
4. **Disclaimers Médicos Reales:** Advertencia formal en cada artículo y en el pie de página aclarando que los contenidos no sustituyen la valoración ginecológica o médica presencial.
5. **Citas y Referencias:** Enlaces y referencias bibliográficas a guías clínicas contrastadas (OMS, SEGO, AEEM, NICE, ACOG, Cochrane).

---

## 6. Hoja de Ruta: Transición hacia Fase 2 y 3

La Fase 1 ha sido construida para que la evolución a plataforma interactiva no requiera reescribir la base:

- **Área Privada (`/app` o `(private)`):** El root layout actual convive sin conflicto con futuros layouts autenticados (NextAuth / Supabase Auth).
- **Seguimiento del Ciclo Menstrual:** La capa de servicios (`src/services/`) puede coexistir con un cliente API para guardar registros diarios de temperatura basal, moco cervical y síntomas.
- **Sintomatología en Perimenopausia:** Los modelos de datos ya contemplan categorías clínicas que servirán de base para cuestionarios de evaluación sintomática validada (Escala MRS - Menopause Rating Scale).
- **PWA y Mobile:** La estructura responsive y los estándares de accesibilidad permiten una conversión inmediata a Progressive Web App mediante configuración de `manifest.json` y Service Workers.

---

## 7. Puesta en Marcha en Local

### Prerrequisitos
- **Node.js**: v20 o superior
- **npm** o gestor compatible

### Pasos de Instalación

```bash
# 1. Clonar o acceder al directorio del proyecto
cd women-health

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

El portal estará disponible en [http://localhost:3000](http://localhost:3000).

### Comandos Disponibles

```bash
# Servidor de desarrollo con Turbopack
npm run dev

# Verificación de linting
npm run lint

# Compilación de producción (SSG / validación de tipos)
npm run build

# Servidor de producción
npm start
```

---

## 8. Despliegue en Vercel

El proyecto está 100% optimizado para desplegarse en **Vercel** en menos de 2 minutos:

### Opción A: Despliegue mediante GitHub (Recomendado)
1. Sube este repositorio a tu cuenta de GitHub (`git push origin main`).
2. Entra en [vercel.com/new](https://vercel.com/new).
3. Importa el repositorio `women-health`.
4. Vercel detectará automáticamente **Next.js**.
5. Haz clic en **Deploy**. ¡Listo! Cada vez que hagas `git push`, Vercel desplegará automáticamente.

### Opción B: Despliegue mediante Vercel CLI
```bash
# 1. Instalar Vercel CLI globalmente
npm i -g vercel

# 2. Iniciar sesión y desplegar
vercel

# 3. Para desplegar en producción:
vercel --prod
```

---

## 9. Licencia y Créditos

Proyecto desarrollado bajo estrictos estándares de ingeniería de software, accesibilidad web y divulgación sanitaria. Todos los derechos de contenidos y diseño editorial reservados.
