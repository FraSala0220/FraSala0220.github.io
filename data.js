window.PORTFOLIO_DATA = {
  site: {
    name: "Francesco Sala",
    location: "Milan, Italy",
    nav: [
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    eyebrow: "Motorsport | Structural Design | Composite Materials",
    title: "Francesco Sala",
    subtitle: "Mechanical Engineering M.Sc. Student",
    text:
      "I design, analyze, and validate complex, precision-critical mechanical components for demanding engineering environments, connecting composite structures, FEA workflows, and manufacturing reality.",
    image: {
      src: "assets/francesco-sala-profile.jpg",
      alt: "Francesco Sala at Politecnico di Milano graduation",
      fallback: "Add profile photo at assets/francesco-sala-profile.jpg",
    },
    actions: [
      { label: "View projects", href: "#projects", variant: "primary" },
      { label: "Download CV", href: "assets/Francesco_Sala_CV.pdf", variant: "secondary", external: true },
    ],
  },

  sections: [
    {
      id: "profile",
      type: "profile",
      eyebrow: "Profile",
      title: "Curious, practical, and built for fast technical teams.",
      text:
        "I am currently pursuing an M.Sc. in Computational Mechanical Design at Politecnico di Milano. My work connects structural engineering, manufacturing constraints, and track validation, with a strong interest in innovation and technology-driven product development.",
    },
    {
      id: "experience",
      type: "timeline",
      eyebrow: "Experience",
      title: "Where I have been building.",
      items: [
        {
          period: "Mar. 2026 - Present",
          location: "Collecchio, Italy",
          role: "Mechanical Design Intern, Motorsport",
          company: "YCOM",
          website: "https://www.ycom.it/",
          websiteLabel: "Visit the YCOM website",
          logo: {
            src: "assets/images/experience/ycom-logo.png",
            alt: "YCOM logo",
            variant: "wide",
          },
          description:
            "Designing and optimizing composite, metallic, and 3D printed motorsport components in CATIA V5, with technical drawings, documentation, and GD&T layouts for manufacturing teams.",
        },
        {
          period: "Nov. 2022 - Present",
          location: "Milan, Italy",
          role: "Structural Engineer",
          company: "Polimi Motorcycle Factory",
          website: "https://www.polimimotorcyclefactory.it/",
          websiteLabel: "Visit the Polimi Motorcycle Factory website",
          logo: {
            src: "assets/images/experience/polimi-motorcycle-factory-logo.webp",
            alt: "Polimi Motorcycle Factory logo",
            variant: "crest",
          },
          description:
            "Engineering primary structural motorcycle components, including carbon fiber chassis and swingarm, from concept and FEA analysis to lamination, bonding, curing, and track validation.",
        },
        {
          period: "Nov. 2023 - Mar. 2026",
          location: "Milan, Italy",
          role: "Waiter, Bartender, and Cashier",
          company: "Poormanger, Antica Focacceria San Francesco",
          variant: "secondary",
          website: "https://www.poormanger.it/",
          websiteLabel: "Visit the Poormanger website",
          logo: {
            src: "assets/images/experience/poormanger-logo.jpg",
            alt: "Poormanger logo",
            variant: "symbol",
          },
          description:
            "Customer-facing work developed discipline, speed, and communication under pressure alongside academic and engineering commitments.",
        },
      ],
    },
    {
      id: "projects",
      type: "cards",
      eyebrow: "Selected Projects",
      title: "Engineering work to turn into case studies.",
      items: [
        {
          tag: "Composite Design \u00b7 Abaqus \u00b7 Isight \u00b7 Manufacturing",
          topic: "Composite Design \u00b7 Racing Structures",
          year: "2022\u20132025",
          title: "Carbon-Fiber Racing Swingarm",
          href: "projects/carbon-fiber-swingarm.html",
          image: "assets/images/swingarm/track-validation.webp",
          imageAlt: "Polimi Motorcycle Factory racing motorcycle on track",
          description:
            "Carbon-fiber swingarm developed from FEA and laminate optimization to manufacturing and race validation.",
          outcome: "\u221240% weight \u00b7 Race validated",
        },
        {
          tag: "Composite Chassis \u00b7 CATIA \u00b7 FEA \u00b7 Manufacturing",
          topic: "Composite Structures \u00b7 Racing Chassis",
          year: "2024\u20132025",
          title: "Carbon Composite Racing Chassis",
          href: "projects/carbon-composite-chassis.html",
          image: "assets/images/chassis/chassis-cad.webp",
          imageAlt: "CAD model of the carbon-composite racing motorcycle chassis",
          imageFit: "contain",
          description:
            "End-to-end development of a carbon-composite motorcycle chassis, from CAD and mould design to ply cutting, production and track validation.",
          outcome: "Designed \u00b7 Built \u00b7 Track Validated",
        },
        {
          tag: "Entrepreneurship \u00b7 Market Research \u00b7 MVP \u00b7 Mobility",
          topic: "Entrepreneurship \u00b7 Product Validation",
          year: "2025\u20132026",
          title: "Hoppin Community Carpooling",
          href: "projects/hoppin-carpooling.html",
          image: "assets/images/hoppin/hoppin-logo.png",
          imageAlt: "Hoppin community carpooling platform logo",
          imageFit: "contain",
          description:
            "Community-first carpooling platform developed through market research, interviews and iterative web MVP launches.",
          outcome: "\u20ac2K TEF Validation Grant",
        },
        {
          tag: "CATIA V5 \u00b7 Python \u00b7 VBScript \u00b7 Codex",
          topic: "AI-Assisted Engineering \u00b7 CATIA Automation",
          year: "2026\u2013Ongoing",
          title: "AI \u00d7 CATIA Automation",
          href: "projects/catia-ai-automation.html",
          placeholder: "AI \u00d7 CATIA",
          placeholderNote: "Ongoing development",
          description:
            "AI-assisted macro generation and a Python\u2013CATIA bridge for documentation, assemblies, Excel reporting, 3D component creation and mesh workflows.",
          outcome: "\u226590% time reduction",
        },
        {
          tag: "Product Design \u00b7 CAD \u00b7 DFM \u00b7 Open Innovation",
          topic: "Product Design \u00b7 Pro Hacking",
          year: "2024",
          title: "ColorShield Washing-Machine Paddle",
          href: "projects/color-shield-paddle.html",
          image: "assets/images/color-shield/color-shield-hero.png",
          imageAlt: "Cutaway CAD render of the ColorShield washing-machine paddle and removable cartridge",
          imageFit: "contain",
          description:
            "Award-winning paddle and cartridge concept designed to make commercial color-catching sheets safer and reusable.",
          outcome: "Winning concept",
        },
        {
          tag: "Composite Structures \u00b7 Abaqus \u00b7 Isight \u00b7 MATLAB",
          topic: "Composite Structures \u00b7 Lightweight Design",
          year: "2025\u20132026",
          title: "Lightweight Composite MacPherson Lower Arm",
          href: "projects/lightweight-composite-lower-arm.html",
          image: "assets/images/lower-arm/lower-arm-hero.jpg",
          imageAlt: "CAD model of the hybrid composite MacPherson lower control arm",
          imageFit: "contain",
          description:
            "Hybrid CFRP lower arm developed through analytical predesign, topology optimization and nonlinear FEA.",
          outcome: "\u22481.6 kg total mass",
        },
        {
          tag: "Additive Manufacturing \u00b7 CAD \u00b7 DfAM \u00b7 TPU",
          topic: "Additive Manufacturing \u00b7 DfAM",
          year: "2025\u20132026",
          title: "3D-Printed TPU Impact Capsule",
          href: "projects/tpu-impact-capsule.html",
          image: "assets/images/tpu-capsule/rocket-concept.png",
          imageAlt: "CAD render of the rocket-shaped TPU impact capsule concept",
          imageFit: "contain",
          description:
            "Iterative CAD and FDM development of a lightweight TPU capsule that protected a fragile glass ball.",
          outcome: "Top 5 Challenge \u00b7 3rd Design",
        },
        {
          tag: "Topology Optimization \u00b7 Abaqus \u00b7 Altair Inspire \u00b7 LPBF",
          topic: "Additive Manufacturing \u00b7 Topology Optimization",
          year: "2025\u20132026",
          title: "Topology-Optimized LPBF Bracket",
          href: "projects/lpbf-topology-bracket.html",
          image: "assets/images/lpbf-bracket/final-bracket.png",
          imageAlt: "Metallic render of the topology-optimized LPBF machine-arm bracket",
          imageFit: "contain",
          description:
            "Four optimization-redesign iterations transformed a 2 kg aluminium bracket into a 202 g LPBF-ready structure.",
          outcome: "202 g \u00b7 Lightest in Challenge",
        },
        {
          tag: "CFD \u00b7 OpenFOAM \u00b7 k-\u03c9 SST \u00b7 MATLAB",
          topic: "Computational Fluid Dynamics \u00b7 Internal Flow",
          year: "2024\u20132025",
          title: "Converging Nozzle CFD",
          href: "projects/converging-nozzle-cfd.html",
          image: "assets/images/cfd-nozzle/velocity-field.png",
          imageAlt: "Velocity magnitude field through a two-dimensional converging nozzle",
          imageFit: "contain",
          description:
            "Laminar, turbulent and wall-resolved nozzle simulations developed through mesh refinement and near-wall validation.",
          outcome: "1.75 m\u00b3/s \u00b7 KPI 1.04",
        },
        {
          tag: "CFD \u00b7 OpenFOAM \u00b7 Spalart\u2013Allmaras \u00b7 MATLAB",
          topic: "Computational Fluid Dynamics \u00b7 Aerodynamics",
          year: "2024\u20132025",
          title: "NACA 4412 Airfoil CFD",
          href: "projects/naca-4412-airfoil-cfd.html",
          image: "assets/images/cfd-airfoil/velocity-field.png",
          imageAlt: "Velocity magnitude field around a NACA 4412 airfoil",
          imageFit: "contain",
          description:
            "Mesh-independence and turbulence-model study resolving pressure, wake and near-wall aerodynamics.",
          outcome: "Cl 0.405 \u00b7 Cd 0.02314",
        },
        {
          tag: "AI-Assisted Manufacturing \u00b7 Python \u00b7 OpenAI API \u00b7 CadQuery",
          topic: "AI-Assisted Manufacturing \u00b7 CNC Planning",
          year: "2024\u20132025",
          title: "LLM-Assisted CNC Process Planning",
          href: "projects/llm-assisted-cnc-planning.html",
          image: "assets/images/llm-cnc-planning/wardrobe-nesting.png",
          imageAlt: "Python-generated nesting layout for wardrobe panels on a raw sheet",
          imageFit: "contain",
          description:
            "Natural-language-to-production pipeline combining CAD generation, panel nesting and validated CNC planning.",
          outcome: "100% parsing \u00b7 90% CNC plan",
        },
        {
          tag: "MATLAB \u00b7 Bayesian Optimization \u00b7 PID Control",
          topic: "Machine Learning for Mechanical Systems \u00b7 Robot Control",
          year: "2024\u20132025",
          title: "Bayesian PID Optimization for a 7-Axis Robot",
          href: "projects/bayesian-pid-optimization.html",
          image: "assets/images/bayesian-pid-optimization/constrained-zero-start-convergence.png",
          imageAlt: "Bayesian objective convergence below one with constraints and a zero-start trajectory",
          imageFit: "contain",
          description:
            "Constraint-aware Bayesian tuning of 21 PID gains for accurate and physically feasible trajectory tracking.",
          outcome: "Cost <1 \u00b7 Constraints Met",
        },
      ],
    },
    {
      id: "skills",
      type: "skills",
      eyebrow: "Skills",
      title: "Tools, methods, and engineering skills.",
      items: [
        {
          title: "CAD",
          description: "CATIA V5, 3DEXPERIENCE, CadQuery (Python parametric CAD)",
        },
        {
          title: "Simulation & Optimization",
          description:
            "Abaqus (composite, nonlinear, buckling, cohesive damage FEA), Isight, Altair Inspire (topology optimization), OpenFOAM (CFD, turbulence modelling, mesh independence, y+ assessment), MATLAB (Bayesian optimization, PID control, Gaussian processes)",
        },
        {
          title: "Manufacturing & DFM",
          description:
            "Composite lamination (prepreg autoclave, plybook development, sandwich structures, adhesive bonding), mold design, injection molding, CNC process planning and panel nesting, additive manufacturing (FDM, LPBF, build orientation and support optimization)",
        },
        {
          title: "Programming",
          description: "Python, MATLAB, OpenAI API, Git, HTML5, CSS3",
        },
        {
          title: "AI-Assisted Engineering",
          description: "OpenAI Codex, prompt engineering, human-in-the-loop validation for CAD and CNC automation workflows",
        },
        {
          title: "Product Development",
          description:
            "User and expert interviews, market and competitor analysis, concept selection, MVP prototyping and web-app validation, business model and cost estimation",
        },
      ],
    },
    {
      id: "contact",
      type: "contact",
      eyebrow: "Contact",
      title: "Let us build something precise.",
      actions: [
        { label: "Email me", href: "mailto:francescosala2002@gmail.com", variant: "primary" },
        { label: "LinkedIn", href: "https://linkedin.com/in/francescosala2002", variant: "secondary", external: true },
      ],
    },
  ],
};
