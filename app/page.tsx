"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, CalendarDays, Camera as Instagram, ChevronLeft, ChevronRight, Clock3, Coffee, Heart, MapPin, Menu, MessageCircle, Music2, Sparkles, Star, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const IG = "https://www.instagram.com/daebak_kpopcafe/";
const CATALOG = "https://daebakkpopcafe.kyte.site/es";
const WHATSAPP = "https://wa.me/584129444216?text=Hola%2C%20Daebak%20%F0%9F%92%9C%20Quisiera%20consultar%20el%20men%C3%BA%20y%20la%20disponibilidad.";
const MAP_QUERY = "Daebak Kpop Café, Edificio Majo, Alta Vista, Puerto Ordaz, Venezuela";
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(MAP_QUERY);
const navItems = [["Inicio", "inicio"], ["Menú", "menu"], ["Galería", "galeria"], ["Eventos", "eventos"], ["Ubicación", "ubicacion"], ["Contacto", "contacto"]];
const products = [
  { name: "Ramen coreano", label: "UN ANTOJO MUY K-FOOD", description: "Elige tu ramen y tus toppings. La experiencia empieza preparándolo.", image: "ramen-station.jpg", imageClass: "ramen-product", color: "pink", category: "ramen", link: "https://www.instagram.com/daebak_kpopcafe/reel/DYZzrMkRISO/" },
  { name: "Un cafecito en Daebak", label: "TU PAUSA FAVORITA", description: "Un café y una buena conversación. Así de simple, así de bonito.", image: "coffee.jpg", imageClass: "coffee-product", color: "lavender", category: "bebidas", link: "https://www.instagram.com/daebak_kpopcafe/reel/DdcCnnOJo_R/" },
  { name: "ARIH Ramen", label: "SABORES POR DESCUBRIR", description: "Explora las variedades de ramen ARIH disponibles en el café.", image: "arih.jpg", imageClass: "arih-product", color: "blue", category: "ramen", link: "https://www.instagram.com/daebak_kpopcafe/reel/DbMPSSBvJ_0/" },
  { name: "ARIH DualBiotic", label: "ALGO PARA ACOMPAÑAR", description: "Conoce las bebidas ARIH y consulta los sabores disponibles.", image: "arih.jpg", imageClass: "soda-product", color: "yellow", category: "bebidas", link: "https://www.instagram.com/daebak_kpopcafe/reel/DbMPSSBvJ_0/" },
];
const gallery = [
  { image: "coffee.jpg", name: "Cafecito y buena compañía", className: "gallery-coffee", source: products[1].link },
  { image: "ramen-station.jpg", name: "Tu ramen, a tu manera", className: "gallery-ramen", source: products[0].link },
  { image: "arih.jpg", name: "Un mundo de sabores ARIH", className: "gallery-arih", source: products[2].link },
  { image: "ramen.jpg", name: "Un antojo coreano", className: "gallery-noodles", source: "https://www.instagram.com/daebak_kpopcafe/reel/DZxXkCJxu4z/" },
];
const external = { target: "_blank", rel: "noopener noreferrer" };

function ProductCard({ product }: { product: typeof products[number] }) {
  return <article className={`product-card ${product.color}`}>
    <a className={`product-photo ${product.imageClass}`} href={product.link} {...external} aria-label={`Ver ${product.name} en el Instagram de Daebak`}>
      <img src={`/images/${product.image}`} alt={product.name} width="360" height="640" loading="lazy" />
      <span className="photo-link"><ArrowUpRight size={20} /></span>
    </a>
    <div className="product-copy"><p className="product-label">{product.label}</p><h3>{product.name}</h3><p>{product.description}</p><a className="text-link" href={WHATSAPP} {...external}>Consultar disponibilidad <ArrowUpRight size={15}/></a></div>
  </article>;
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const photo = photoIndex !== null ? gallery[photoIndex] : null;

  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <div className="announcement"><Sparkles size={13}/><span>COMIDA COREANA</span><span aria-hidden="true">✦</span><span>MERCH K-POP</span><span aria-hidden="true">✦</span><span>PUERTO ORDAZ</span><Sparkles size={13}/></div>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Daebak Kpop Café, inicio"><img src="/images/daebak-logo.jpg" alt="Daebak Kpop Café" width="112" height="84" /></a>
      <nav aria-label="Navegación principal">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <a href="#menu" className="button primary header-cta">Ver menú <ArrowUpRight size={18}/></a>
      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogTrigger asChild><button className="menu-toggle" aria-label="Abrir menú de navegación"><Menu size={25}/></button></DialogTrigger>
        <DialogContent className="mobile-menu-dialog" showCloseButton={false}>
          <DialogTitle className="mobile-menu-title">Hola, Daebak <Heart size={25}/></DialogTitle>
          <DialogDescription>Tu rincón K-pop en Puerto Ordaz.</DialogDescription>
          <DialogClose className="dialog-close" aria-label="Cerrar menú"><X size={22}/></DialogClose>
          <nav aria-label="Navegación móvil">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={()=>setMobileOpen(false)}>{label}<ArrowUpRight size={20}/></a>)}</nav>
          <a href={WHATSAPP} className="button primary" {...external}><MessageCircle size={18}/> Escríbenos</a>
        </DialogContent>
      </Dialog>
    </header>

    <main id="contenido">
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="little-star">✦</span> K-FOOD, K-POP & HAPPY MOMENTS</p>
            <h1 id="hero-title">Tu lugar<br/>K-pop <span>favorito.</span><Heart className="title-heart" aria-hidden="true"/></h1>
            <p className="hero-description">Un cafecito, un antojo coreano y tu fandom. Bienvenid@ a <strong>Daebak Kpop Café.</strong></p>
            <div className="hero-actions"><a className="button primary" href="#menu">Ver menú <ArrowUpRight size={19}/></a><a className="button secondary" href="#ubicacion"><MapPin size={17}/> Ver ubicación</a></div>
            <a className="hero-contact" href={WHATSAPP} {...external}><MessageCircle size={16}/> ¿Hacemos un plan? Escríbenos <ArrowUpRight size={14}/></a>
          </div>
          <div className="hero-collage">
            <span className="hello-note" lang="ko">안녕! <span lang="es">¡hola!</span></span>
            <div className="hero-photo hero-photo-main"><div className="tape" aria-hidden="true"/><div className="photo-window"><img src="/images/coffee.jpg" alt="Café con arte latte publicado por Daebak Kpop Café" width="360" height="640" fetchPriority="high" /></div><p>a little coffee, a lot of love <Heart size={15}/></p></div>
            <div className="hero-photo hero-photo-small"><div className="photo-window"><img src="/images/ramen-station.jpg" alt="Preparación de ramen en la máquina del café" width="361" height="640" /></div><p>ramen time! <Sparkles size={15}/></p></div>
            <span className="round-sticker"><MapPin size={18}/><span>Nos vemos<br/><b>en PZO</b></span></span>
            <Star className="hero-star star-one" aria-hidden="true"/><Sparkles className="hero-star star-two" aria-hidden="true"/><Heart className="hero-heart" aria-hidden="true"/>
            <span className="photo-credit">Un vistazo real a @daebak_kpopcafe</span>
          </div>
        </div>
        <a href="#daebak" className="hero-scroll" aria-label="Descubre Daebak"><ArrowDown size={17}/></a>
      </section>

      <div className="ribbon" aria-hidden="true"><div><span>UN CAFECITO</span><Heart size={18}/><span>MUCHO K-POP</span><Star size={19}/><span>ANTOJOS COREANOS</span><Heart size={18}/><span>BUENA COMPAÑÍA</span><Star size={19}/><span>UN CAFECITO</span><Heart size={18}/><span>MUCHO K-POP</span><Star size={19}/></div></div>

      <section className="about section-shell" id="daebak" aria-labelledby="about-title">
        <div className="about-kicker"><span className="eyebrow">ESTO ES DAEBAK</span><span className="hand-note">Un lugar para ser tú <Heart size={19}/></span></div>
        <div className="about-copy"><h2 id="about-title">De Corea al corazón.<br/><span>Y de ahí, a Puerto Ordaz.</span></h2><p>Comida coreana, merch K-pop y ganas de compartir lo que nos gusta. Un pequeño universo para descubrir sabores, hablar de tu bias y disfrutar el momento.</p></div>
        <div className="about-tags"><span><Coffee size={19}/> Antojos que conectan</span><span><Music2 size={19}/> Corazón K-pop</span><span><Heart size={19}/> Momentos para compartir</span></div>
      </section>

      <section className="menu-section" id="menu" aria-labelledby="menu-title">
        <div className="section-shell">
          <div className="section-heading"><div><p className="eyebrow"><Sparkles size={16}/> UN ANTOJO MÁS, POR FAVOR</p><h2 id="menu-title">¿Qué se te <span>antoja hoy?</span></h2></div><a className="text-link desktop-link" href={CATALOG} {...external}>Ver catálogo completo <ArrowUpRight size={18}/></a></div>
          <Tabs defaultValue="destacados" className="menu-tabs">
            <TabsList className="category-tabs" aria-label="Categorías del menú">
              <TabsTrigger value="destacados"><Heart size={16}/> Para empezar</TabsTrigger><TabsTrigger value="ramen">Ramen coreano</TabsTrigger><TabsTrigger value="bebidas">Café & bebidas</TabsTrigger>
            </TabsList>
            <TabsContent value="destacados" className="product-grid">{products.slice(0,3).map(p=><ProductCard key={p.name} product={p}/>)}</TabsContent>
            <TabsContent value="ramen" className="product-grid">{products.filter(p=>p.category==="ramen").map(p=><ProductCard key={p.name} product={p}/>)}</TabsContent>
            <TabsContent value="bebidas" className="product-grid">{products.filter(p=>p.category==="bebidas").map(p=><ProductCard key={p.name} product={p}/>)}</TabsContent>
          </Tabs>
          <div className="menu-foot"><span>¿Ya tienes un favorito? Consulta sabores, precios y disponibilidad.</span><a className="button secondary" href={CATALOG} {...external}>Explorar el menú <ArrowUpRight size={17}/></a></div>
        </div>
      </section>

      <section className="experience section-shell" aria-labelledby="experience-title">
        <div className="experience-pictures"><div className="experience-photo"><img src="/images/ramen-station.jpg" width="361" height="640" alt="Experiencia de preparar ramen coreano en Daebak" loading="lazy"/></div><div className="experience-mini"><img src="/images/arih.jpg" width="360" height="640" alt="Ramen y sodas ARIH en Daebak" loading="lazy"/></div><span className="experience-label"><Heart size={18}/> Aquí empieza el antojo</span><Sparkles className="experience-spark" aria-hidden="true"/></div>
        <div className="experience-copy"><p className="eyebrow">LA EXPERIENCIA DAEBAK</p><h2 id="experience-title">Ven por el ramen.<br/><span>Quédate por el mood.</span></h2><p>Elige tu ramen, suma tus toppings y prepáralo en las máquinas del café. Tu siguiente plan tiene un poquito de Corea y mucho de ti.</p><div className="experience-list"><div><span>01</span><p><strong>Descubre tu próximo antojo</strong><br/>Sabores coreanos para salir de la rutina.</p></div><div><span>02</span><p><strong>Comparte lo que te encanta</strong><br/>Una conversación, un fandom, un buen momento.</p></div><div><span>03</span><p><strong>Llévate un recuerdo</strong><br/>Explora también el merch K-pop del catálogo.</p></div></div><a href="#ubicacion" className="text-link">Este plan es para mí <ArrowUpRight size={19}/></a></div>
      </section>

      <section className="events-section" id="eventos" aria-labelledby="events-title"><div className="section-shell events-inner"><div className="events-copy"><p className="eyebrow"><Music2 size={16}/> MÁS QUE UN CAFÉ</p><h2 id="events-title">Los mejores planes<br/>se <span>comparten.</span></h2><p>¿Qué se viene en Daebak? Encuentra las novedades y consulta las próximas actividades en nuestro Instagram.</p><a href={IG} className="button primary" {...external}><Instagram size={18}/> Ver novedades</a></div><div className="events-note"><div className="tape" aria-hidden="true"/><span className="note-eyebrow">TU PRÓXIMO PLAN</span><CalendarDays size={43} strokeWidth={1.4}/><h3>Café, K-pop<br/>y tú.</h3><p>La cita empieza en<br/><strong>@daebak_kpopcafe</strong></p><a className="text-link" href={IG} {...external}>Explorar actividades <ArrowUpRight size={18}/></a><Heart className="note-heart" aria-hidden="true"/></div><Star className="events-star" aria-hidden="true"/></div></section>

      <section className="gallery-section section-shell" id="galeria" aria-labelledby="gallery-title"><div className="section-heading"><div><p className="eyebrow"><Instagram size={15}/> PEQUEÑOS MOMENTOS, MUCHO DAEBAK</p><h2 id="gallery-title">Del feed a <span>tu próximo plan.</span></h2></div><a className="text-link desktop-link" href={IG} {...external}>@daebak_kpopcafe <ArrowUpRight size={18}/></a></div><div className="gallery-grid">{gallery.map((item,i)=><button className={`gallery-item ${item.className}`} key={item.name} onClick={()=>setPhotoIndex(i)} aria-label={`Ampliar foto: ${item.name}`}><img src={`/images/${item.image}`} alt={item.name} width="360" height="640" loading="lazy"/><span className="gallery-overlay"><span>{item.name}</span><ArrowUpRight size={21}/></span><span className="gallery-instagram"><Instagram size={18}/></span></button>)}</div><p className="gallery-caption">Momentos reales del Instagram de Daebak. <Heart size={14}/></p></section>

      <section className="location-section" id="ubicacion" aria-labelledby="location-title"><div className="section-shell location-inner"><div className="location-info"><p className="eyebrow"><MapPin size={16}/> TU PRÓXIMA PARADA</p><h2 id="location-title">Corea un poquito<br/><span>más cerquita.</span></h2><p className="location-city">Nos vemos en Puerto Ordaz.</p><div className="info-row"><MapPin size={21}/><div><h3>Encuéntranos</h3><p>Alta Vista, Edificio Majo,<br/>planta baja, local 3.<br/>Puerto Ordaz, estado Bolívar, Venezuela.</p></div></div><div className="info-row"><Clock3 size={21}/><div><h3>Un buen momento para venir</h3><dl className="hours"><div><dt>Martes a jueves y domingo</dt><dd>11:00 a. m. – 8:00 p. m.</dd></div><div><dt>Viernes y sábado</dt><dd>11:00 a. m. – 10:00 p. m.</dd></div></dl><p className="hours-note">Consulta en Instagram los horarios especiales.</p></div></div><a className="button primary" href={MAPS} {...external}>Cómo llegar <ArrowUpRight size={18}/></a></div><div className="map-card"><div className="map-heading"><span><MapPin size={17}/> DAEBAK KPOP CAFÉ</span><span>Puerto Ordaz</span></div><iframe src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=&z=16&ie=UTF8&iwloc=&output=embed`} title="Mapa: Daebak Kpop Café, Alta Vista, Puerto Ordaz" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><a href={MAPS} className="map-bottom" {...external}>El comienzo de un buen plan <ArrowUpRight size={20}/></a></div></div></section>

      <section className="community section-shell" aria-labelledby="community-title"><div className="community-icon"><Instagram size={35} strokeWidth={1.5}/><Heart size={20}/></div><div><p className="eyebrow">EL FANDOM SIGUE POR AQUÍ</p><h2 id="community-title">Un follow. <span>Muchos momentos.</span></h2><p>Antojos, novedades y un poquito de Daebak en tu día.</p></div><a href={IG} className="button secondary" {...external}>Seguir @daebak_kpopcafe <ArrowUpRight size={17}/></a></section>

      <section className="final-cta" id="contacto" aria-labelledby="contact-title"><Star className="cta-star" aria-hidden="true"/><Heart className="cta-heart" aria-hidden="true"/><p className="eyebrow">PONLE UN POQUITO DE DAEBAK A TU DÍA</p><h2 id="contact-title">Tu bias tiene comeback.<br/>Tú tienes <span>plan.</span></h2><p>Te esperamos en Daebak Kpop Café.</p><div className="final-actions"><a className="button primary" href={WHATSAPP} {...external}><MessageCircle size={18}/> Escríbenos</a><a className="button secondary" href="#ubicacion"><MapPin size={18}/> Ver ubicación</a><a className="text-link" href={IG} {...external}>Ver Instagram <ArrowUpRight size={17}/></a></div><span className="final-signature">con cariño, Daebak <Heart size={17}/></span></section>
    </main>

    <footer className="site-footer"><div className="footer-main section-shell"><div className="footer-brand"><a href="#inicio"><img src="/images/daebak-logo.jpg" alt="Daebak Kpop Café" width="146" height="122" loading="lazy"/></a><p>Comida coreana & merch K-pop.<br/>Puerto Ordaz, Venezuela.</p></div><div><h3>Encuéntranos</h3><a href={MAPS} {...external}>Alta Vista, Edif. Majo<br/>PB, local 3 · Puerto Ordaz</a></div><div><h3>Ven a compartir</h3><p>Mar–Jue y Dom · 11 a. m.–8 p. m.<br/>Vie–Sáb · 11 a. m.–10 p. m.</p></div><div><h3>Hablemos</h3><a href={WHATSAPP} {...external}>+58 412 944 4216 <ArrowUpRight size={14}/></a><a href={IG} {...external}>@daebak_kpopcafe <Instagram size={14}/></a><a href={CATALOG} {...external}>Catálogo oficial <ArrowUpRight size={14}/></a></div></div><div className="footer-bottom section-shell"><span>Daebak Kpop Café <Heart size={13}/></span><span>Demostración visual independiente · No es el sitio oficial.</span><a href="#inicio">Volver arriba ↑</a></div></footer>
    <a className="floating-contact" href={WHATSAPP} {...external} aria-label="Escribir a Daebak por WhatsApp"><MessageCircle size={24}/><span>¿Un plan?</span></a>
    <Dialog open={photoIndex!==null} onOpenChange={open=>{if(!open)setPhotoIndex(null)}}><DialogContent className="photo-dialog" showCloseButton={false}><DialogTitle className="photo-dialog-title">{photo?.name}</DialogTitle><DialogDescription className="sr-only">Fotografía publicada por Daebak Kpop Café en su Instagram oficial.</DialogDescription><DialogClose className="dialog-close" aria-label="Cerrar fotografía"><X size={23}/></DialogClose>{photo&&<><img src={`/images/${photo.image}`} alt={photo.name} className="lightbox-photo" width="360" height="640"/><div className="lightbox-footer"><button className="round-button" aria-label="Foto anterior" onClick={()=>setPhotoIndex(i=>((i??0)+gallery.length-1)%gallery.length)}><ChevronLeft size={22}/></button><a href={photo.source} {...external}>Ver publicación <ArrowUpRight size={16}/></a><button className="round-button" aria-label="Foto siguiente" onClick={()=>setPhotoIndex(i=>((i??0)+1)%gallery.length)}><ChevronRight size={22}/></button></div></>}</DialogContent></Dialog>
  </>;
}
