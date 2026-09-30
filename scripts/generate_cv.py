from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "cv"
PAGE_W, PAGE_H = A4
INK = colors.HexColor("#202833")
MUTED = colors.HexColor("#687482")
RULE = colors.HexColor("#BCC6D0")
LINK = colors.HexColor("#42596F")


CONTENT = {
    "es": {
        "title": "ARQUITECTO FRONTEND",
        "location": "Valladolid, España",
        "language_line": "Español nativo | Inglés B2",
        "profile_heading": "PERFIL PROFESIONAL",
        "profile": (
            "Arquitecto Frontend especializado en sistemas web complejos con Vue 3, Nuxt 4 y TypeScript. "
            "Aplico principios de arquitectura hexagonal para separar el dominio, la aplicación, la infraestructura y la interfaz. "
            "Integro herramientas de IA en el análisis, la implementación y la revisión diaria, manteniendo la responsabilidad técnica y la validación final."
        ),
        "skills_heading": "COMPETENCIAS",
        "skills": [
            ("Lenguajes", "TypeScript, JavaScript, Python, Java"),
            ("Frameworks y herramientas", "Vue 3, Nuxt 4, React, Angular, Tailwind CSS, Node.js, Pinia, Django, AWS, S3, CloudFront, Git, GitHub"),
            ("Arquitectura y práctica", "Arquitectura frontend y hexagonal, desarrollo asistido por IA, pruebas unitarias, de integración y end-to-end, migraciones legacy, definición de producto, liderazgo técnico, metodologías ágiles"),
        ],
        "experience_heading": "EXPERIENCIA",
        "continued_heading": "EXPERIENCIA (CONTINUACIÓN)",
        "education_heading": "FORMACIÓN E IDIOMAS",
        "education": "IES Galileo - Desarrollo de Aplicaciones Web (2012 - 2014)",
        "languages": "Español: nativo | Inglés: B2",
        "remote": "Remoto",
        "roles": [
            {
                "company": "Hiberus", "dates": "Sep 2023 - Actualidad", "title": "Frontend Developer", "page": 1,
                "bullets": [
                    "Lidero el desarrollo end-to-end de una aplicación web crítica para el Ministerio de Transportes con Vue 3, Nuxt 4 y TypeScript.",
                    "Diseño y evoluciono una arquitectura frontend modular con principios hexagonales, separando dominio, aplicación, infraestructura y presentación para facilitar su evolución y testabilidad.",
                    "Estructuro componentes con Tailwind CSS y Pinia, optimizando su reutilización en un 40%.",
                    "Colaboro en la definición funcional y las decisiones de producto, como puente técnico entre diseño y backend.",
                    "Integro herramientas de IA en análisis, implementación y revisión diaria, manteniendo la responsabilidad técnica y validando los cambios.",
                ],
            },
            {
                "company": "Fuell", "dates": "Feb 2022 - Ago 2023", "title": "Lead Frontend Developer", "page": 1,
                "bullets": [
                    "Dirigí la plataforma web principal y establecí estándares de calidad, arquitectura y flujos de trabajo del equipo frontend.",
                    "Lideré la migración integral de Vue 2 a Vue 3, reduciendo un 30% los tiempos de carga y mejorando la experiencia de desarrollo.",
                    "Definí producto y nuevas funcionalidades junto a stakeholders, asegurando viabilidad técnica y escalabilidad.",
                    "Implanté buenas prácticas de desarrollo y revisión de código para mejorar la mantenibilidad.",
                ],
            },
            {
                "company": "Singular", "dates": "Jun 2020 - Feb 2022", "title": "Frontend Developer", "page": 2,
                "bullets": [
                    "Desarrollé aplicaciones web para clientes de alto impacto con Angular y Vue.",
                    "Diseñé y desplegué desde cero una aplicación en Vue con estrategias de pruebas unitarias y de integración.",
                    "Optimicé aplicaciones existentes para mejorar rendimiento y escalabilidad.",
                    "Durante el último semestre, compatibilicé mis responsabilidades con proyectos de transición técnica en Fuell.",
                ],
            },
            {
                "company": "Wegow", "dates": "Nov 2016 - Jun 2020", "title": "Lead Frontend Developer", "location": "Madrid", "page": 2,
                "bullets": [
                    "Lideré el equipo frontend y el desarrollo de la plataforma web y sus aplicaciones móviles.",
                    "Dirigí la migración de AngularJS a Nuxt/Vue, modernizando el stack y reduciendo deuda técnica.",
                    "Gestioné infraestructura AWS (S3, CloudFront) en colaboración con backend (Python/Django) para optimizar la entrega de contenido.",
                    "Participé en la evolución del producto, transformando objetivos de negocio en soluciones técnicas.",
                ],
            },
            {
                "company": "Paradigma Digital", "dates": "Jun 2016 - Nov 2016", "title": "Frontend Developer", "location": "Madrid", "page": 2,
                "bullets": [
                    "Desarrollé aplicaciones web internas de alta complejidad para entidades financieras, incluido Banco Santander.",
                    "Implementé interfaces para proyectos educativos en equipos multidisciplinares y con metodologías ágiles.",
                ],
            },
            {
                "company": "Paradigma Digital (Yaap)", "dates": "Jul 2015 - Jun 2016", "title": "Frontend Developer", "location": "Madrid", "page": 2,
                "bullets": [
                    "Desarrollé funcionalidades frontend y participé en la definición técnica de producto para soluciones de pago digital.",
                    "Lideré el trabajo frontend en proyectos clave y colaboré en tareas de backend Java y despliegues automatizados en AWS.",
                ],
            },
            {
                "company": "Oneclick", "dates": "Jun 2014 - Jul 2015", "title": "Frontend Developer", "location": "Madrid", "page": 2,
                "bullets": [
                    "Desarrollé plataformas educativas y libros digitales interactivos con tecnologías web estándar.",
                    "Gestioné proyectos y desarrollo full-stack con PHP para backend y arquitecturas frontend personalizadas.",
                ],
            },
        ],
    },
    "en": {
        "title": "FRONTEND ARCHITECT",
        "location": "Valladolid, Spain",
        "language_line": "Spanish: Native | English: B2",
        "profile_heading": "PROFESSIONAL PROFILE",
        "profile": (
            "Frontend Architect specializing in complex web systems with Vue 3, Nuxt 4, and TypeScript. "
            "I apply hexagonal architecture principles to separate domain, application, infrastructure, and interface concerns. "
            "I integrate AI tools into daily analysis, implementation, and review while retaining technical ownership and validating the final changes."
        ),
        "skills_heading": "SKILLS",
        "skills": [
            ("Languages", "TypeScript, JavaScript, Python, Java"),
            ("Frameworks and tools", "Vue 3, Nuxt 4, React, Angular, Tailwind CSS, Node.js, Pinia, Django, AWS, S3, CloudFront, Git, GitHub"),
            ("Architecture and practice", "Frontend and hexagonal architecture, AI-assisted development, unit, integration and end-to-end testing, legacy migrations, product definition, technical leadership, Agile methods"),
        ],
        "experience_heading": "EXPERIENCE",
        "continued_heading": "EXPERIENCE (CONTINUED)",
        "education_heading": "EDUCATION AND LANGUAGES",
        "education": "IES Galileo - Web Application Development (2012 - 2014)",
        "languages": "Spanish: Native | English: B2",
        "remote": "Remote",
        "roles": [
            {
                "company": "Hiberus", "dates": "Sep 2023 - Present", "title": "Frontend Developer", "page": 1,
                "bullets": [
                    "Lead end-to-end development of a mission-critical web application for Spain's Ministry of Transport using Vue 3, Nuxt 4, and TypeScript.",
                    "Design and evolve modular frontend architecture grounded in hexagonal principles, separating domain, application, infrastructure, and presentation to support maintainability and testability.",
                    "Structure components with Tailwind CSS and Pinia, optimizing component reuse by 40%.",
                    "Partner on functional definition and product decisions, bridging design and backend teams.",
                    "Integrate AI tools into daily analysis, implementation, and review while retaining technical ownership and validating changes.",
                ],
            },
            {
                "company": "Fuell", "dates": "Feb 2022 - Aug 2023", "title": "Lead Frontend Developer", "page": 1,
                "bullets": [
                    "Led the main web platform and established quality, architecture, and frontend team workflow standards.",
                    "Led the full migration from Vue 2 to Vue 3, reducing load times by 30% and improving the development experience.",
                    "Defined product direction and features with stakeholders, ensuring technical feasibility and scalability.",
                    "Introduced development and code review practices to improve long-term maintainability.",
                ],
            },
            {
                "company": "Singular", "dates": "Jun 2020 - Feb 2022", "title": "Frontend Developer", "page": 2,
                "bullets": [
                    "Built web applications for high-impact clients using Angular and Vue.",
                    "Designed and delivered a Vue application from scratch with unit and integration testing strategies.",
                    "Optimized existing applications to improve performance and scalability.",
                    "During the final semester, balanced responsibilities with technical transition projects at Fuell.",
                ],
            },
            {
                "company": "Wegow", "dates": "Nov 2016 - Jun 2020", "title": "Lead Frontend Developer", "location": "Madrid", "page": 2,
                "bullets": [
                    "Led the frontend team and development of the web platform and mobile applications.",
                    "Directed the migration from AngularJS to Nuxt/Vue, modernizing the stack and reducing technical debt.",
                    "Managed AWS infrastructure (S3, CloudFront) with the Python/Django backend team to improve content delivery.",
                    "Contributed to product evolution by translating business goals into technical solutions.",
                ],
            },
            {
                "company": "Paradigma Digital", "dates": "Jun 2016 - Nov 2016", "title": "Frontend Developer", "location": "Madrid", "page": 2,
                "bullets": [
                    "Built complex internal web applications for financial institutions, including Banco Santander.",
                    "Implemented interfaces for education projects in multidisciplinary teams using Agile methods.",
                ],
            },
            {
                "company": "Paradigma Digital (Yaap)", "dates": "Jul 2015 - Jun 2016", "title": "Frontend Developer", "location": "Madrid", "page": 2,
                "bullets": [
                    "Built frontend features and contributed to technical product definition for digital payment solutions.",
                    "Led frontend work on key projects and contributed to Java backend tasks and automated AWS deployments.",
                ],
            },
            {
                "company": "Oneclick", "dates": "Jun 2014 - Jul 2015", "title": "Frontend Developer", "location": "Madrid", "page": 2,
                "bullets": [
                    "Developed education platforms and interactive digital books using standard web technologies.",
                    "Managed projects and full-stack development with PHP backend and custom frontend architectures.",
                ],
            },
        ],
    },
}


def make_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle("Name", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=21, leading=24, textColor=INK, alignment=TA_CENTER, spaceAfter=1),
        "title": ParagraphStyle("Title", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=LINK, alignment=TA_CENTER, spaceAfter=5),
        "contact": ParagraphStyle("Contact", parent=base["Normal"], fontName="Helvetica", fontSize=7.6, leading=9.2, textColor=MUTED, alignment=TA_CENTER, spaceAfter=1),
        "section": ParagraphStyle("Section", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=10.2, leading=12, textColor=INK, spaceBefore=7, spaceAfter=4, keepWithNext=True),
        "body": ParagraphStyle("Body", parent=base["Normal"], fontName="Helvetica", fontSize=8.35, leading=10.8, textColor=INK, spaceAfter=2.5),
        "skill": ParagraphStyle("Skill", parent=base["Normal"], fontName="Helvetica", fontSize=8.1, leading=10.3, textColor=INK, spaceAfter=2, allowWidows=0, allowOrphans=0),
        "company": ParagraphStyle("Company", parent=base["Normal"], fontName="Helvetica", fontSize=8.6, leading=10, textColor=MUTED, spaceBefore=3, spaceAfter=0.5, keepWithNext=True),
        "role": ParagraphStyle("Role", parent=base["Normal"], fontName="Helvetica", fontSize=7.9, leading=9.2, textColor=MUTED, spaceAfter=2, keepWithNext=True),
        "bullet": ParagraphStyle("Bullet", parent=base["Normal"], fontName="Helvetica", fontSize=8.15, leading=10.35, textColor=INK, leftIndent=9, firstLineIndent=-7, spaceAfter=2.2, allowWidows=0, allowOrphans=0),
    }


def link(text, url):
    return f'<link href="{url}" color="{LINK.hexval()}">{text}</link>'


def draw_page(canvas, doc):
    canvas.saveState()
    if doc.page > 1:
        canvas.setFont("Helvetica", 7.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(50, PAGE_H - 24, "DAVID MINGUELA")
        canvas.drawRightString(PAGE_W - 50, PAGE_H - 24, CONTENT[doc.lang]["title"])
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.55)
        canvas.line(50, PAGE_H - 31, PAGE_W - 50, PAGE_H - 31)
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.55)
    canvas.line(50, 30, PAGE_W - 50, 30)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    c = CONTENT[doc.lang]
    canvas.drawString(50, 19, f"{c['location']}  |  {c['language_line']}")
    canvas.drawRightString(PAGE_W - 50, 19, f"{doc.page} / 2")
    canvas.restoreState()


def build_pdf(lang):
    c = CONTENT[lang]
    styles = make_styles()
    path = OUTPUT / ("david-minguela-cv.pdf" if lang == "es" else "david-minguela-cv-en.pdf")
    doc = SimpleDocTemplate(
        str(path), pagesize=A4, rightMargin=50, leftMargin=50,
        topMargin=37, bottomMargin=42, title=f"David Minguela - {c['title'].title()}",
        author="David Minguela", subject="Frontend Architect CV",
    )
    doc.lang = lang
    story = [
        Paragraph("David Minguela", styles["name"]),
        Paragraph(c["title"], styles["title"]),
        Paragraph(
            f'{link("minguela9109@gmail.com", "mailto:minguela9109@gmail.com")}  |  '
            f'{link("+34 677 092 934", "tel:+34677092934")}  |  {c["location"]}',
            styles["contact"],
        ),
        Paragraph(
            f'{link("linkedin.com/in/david-minguela-7167bb98", "https://www.linkedin.com/in/david-minguela-7167bb98/")}  |  '
            f'{link("dminguela.es", "https://dminguela.es")}  |  '
            f'{link("github.com/minguela", "https://github.com/minguela")}',
            styles["contact"],
        ),
        Spacer(1, 4),
        Paragraph(c["profile_heading"], styles["section"]),
        Paragraph(c["profile"], styles["body"]),
        Paragraph(c["skills_heading"], styles["section"]),
    ]
    for label, value in c["skills"]:
        story.append(Paragraph(f"<b>{label}:</b> {value}", styles["skill"]))
    story.append(Paragraph(c["experience_heading"], styles["section"]))
    for role in (r for r in c["roles"] if r["page"] == 1):
        append_role(story, role, c, styles)
    story.extend([PageBreak(), Paragraph(c["continued_heading"], styles["section"])])
    for role in (r for r in c["roles"] if r["page"] == 2):
        append_role(story, role, c, styles)
    story.extend([
        Paragraph(c["education_heading"], styles["section"]),
        Paragraph(c["education"], styles["body"]),
        Paragraph(c["languages"], styles["body"]),
    ])
    doc.build(story, onFirstPage=draw_page, onLaterPages=draw_page)


def append_role(story, role, c, styles):
    location = role.get("location", c["remote"])
    story.append(Paragraph(f"<b>{role['company']}</b>  |  {role['dates']}", styles["company"]))
    story.append(Paragraph(f"{role['title']} - {location}", styles["role"]))
    story.extend(Paragraph(f"- {bullet}", styles["bullet"]) for bullet in role["bullets"])


OUTPUT.mkdir(parents=True, exist_ok=True)
build_pdf("es")
build_pdf("en")
