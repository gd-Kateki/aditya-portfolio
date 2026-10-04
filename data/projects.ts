export type Media = { type: 'image' | 'video'; src: string; preview?: string; width?: number; height?: number; alt: string; caption?: string; poster?: string; captions?: string };
export type CaseSection = { id: string; title: string; body: string; bullets?: string[]; flow?: string[]; media?: Media[]; document?: { label: string; href: string } };
export type Project = {
  title: string; slug: string; discipline: 'game' | 'ux'; category: string; role: string;
  year: string; duration?: string; date?: string; team: string; description: string; thumbnail: string; heroImage: string;
  thumbnailWidth: number; heroWidth: number; imageAlt: string; tools: string[]; tags: string[]; placeholder: boolean;
  status: string; contribution: string; deliverables: string;
  overview: string; problem?: string; goals?: string[]; process?: CaseSection[];
  gallery?: Media[]; outcome?: string; learnings?: string; prototype?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    "title": "Curse of Osiris",
    "slug": "curse-of-osiris",
    "discipline": "game",
    "category": "Game Design & Level Design",
    "role": "Game Designer & Level Designer",
    "year": "2025",
    "duration": "1 Month",
    "team": "Personal Prototype",
    "description": "An Egyptian mythology roguelite prototype exploring combat spaces, deity rewards, and a repeatable run structure.",
    "thumbnail": "/images/curse-of-osiris/CO1-640.webp",
    "heroImage": "/images/curse-of-osiris/CO1.webp",
    "imageAlt": "Curse of Osiris Egyptian-themed dungeon level blockout",
    "tools": [
      "Unity",
      "ProBuilder",
      "C#",
      "Google Docs"
    ],
    "tags": [
      "Game Design",
      "Level Design",
      "Unity",
      "Egyptian Mythology",
      "Roguelite"
    ],
    "placeholder": false,
    "overview": "Curse of Osiris is a personal prototype set in ancient Egypt — a roguelite dungeon crawler built in Unity and heavily inspired by Supergiant’s Hades. The core premise: a soul condemned to the Egyptian underworld must fight through procedurally-arranged rooms, slowly uncovering the betrayal that led to their death.",
    "problem": "Designing an action-roguelite loop grounded in Egyptian mythology where room layouts, deity boons (Ra, Anubis, Thoth), and death-and-rebirth mechanics serve both tactical combat and narrative progression.",
    "goals": [
      "Create a narrative-driven combat loop where story rewards are tied to mechanical progression.",
      "Design room layouts with natural chokepoints and looping escape routes.",
      "Build a boon system grounded in Egyptian deities (Ra, Anubis, Thoth) with distinct playstyle identities.",
      "Ensure the death-and-rebirth loop feels intentional and purposeful.",
      "Script ambient dialogue that reacts to player decisions without breaking pace."
    ],
    "process": [
      {
        "id": "research",
        "title": "Research & Reference",
        "body": "Deep analysis of Hades' loop — beat maps, room density, dialogue triggers, and boon probability curves. Mapped Egyptian mythology's structure to find equivalent narrative beats."
      },
      {
        "id": "gdd",
        "title": "Game Design Document",
        "body": "Wrote a detailed Game Design Document covering the core loop, room archetypes (combat, elite, rest, shop, boss), currency systems, and narrative delivery method."
      },
      {
        "id": "loop",
        "title": "Gameplay & Progression Loop",
        "body": "Mapped the full run structure from entry to Egyptian underworld boss encounters.",
        "flow": [
          "COMBAT ENCOUNTER",
          "GOD BOON / REWARD",
          "ROOM CHOICE",
          "DEATH & NARRATIVE PROGRESSION"
        ]
      },
      {
        "id": "blockout",
        "title": "Level Blocking in Unity",
        "body": "The blockout explores combat-room proportions, sightlines, and movement routes before visual detail. The level views below show the environment used to work through those spatial questions.",
        "media": [
          {
            "type": "image",
            "src": "/images/curse-of-osiris/CO1.webp",
            "alt": "Curse of Osiris full level overview",
            "caption": "Full Egyptian underworld level overview & blockout",
            "preview": "/images/curse-of-osiris/CO1-preview.webp",
            "width": 1400,
            "height": 701
          }
        ]
      },
      {
        "id": "narrative",
        "title": "Narrative Layer Scripting",
        "body": "Scripted reactive dialogue for the guide character (based on Osiris) using a simple state machine — different lines triggered by low health, first-time room encounters, and run count milestones."
      },
      {
        "id": "playtesting",
        "title": "Playtesting & Iteration",
        "body": "Three rounds of internal playtesting focused on pacing, difficulty curve, and whether players understood the boon system without explicit tutorialisation."
      }
    ],
    "gallery": [
      {
        "type": "image",
        "src": "/images/curse-of-osiris/CO1.webp",
        "alt": "Curse of Osiris full level overview",
        "caption": "Full Egyptian underworld level overview & blockout",
        "preview": "/images/curse-of-osiris/CO1-preview.webp",
        "width": 1400,
        "height": 701
      },
      {
        "type": "image",
        "src": "/images/curse-of-osiris/CO2.webp",
        "alt": "Combat room layout",
        "caption": "Combat chamber layout with sightlines and chokepoints",
        "preview": "/images/curse-of-osiris/CO2-preview.webp",
        "width": 1440,
        "height": 707
      },
      {
        "type": "image",
        "src": "/images/curse-of-osiris/CO3.webp",
        "alt": "Chamber detail and boon altar",
        "caption": "Rest area and deity boon altar transition",
        "preview": "/images/curse-of-osiris/CO3-preview.webp",
        "width": 1440,
        "height": 751
      }
    ],
    "outcome": "Unity level blockouts and a game concept covering combat spaces, deity rewards, and progression.",
    "learnings": "Integrating mythology directly into core rules rather than superficial dressing makes mechanical choices feel organic and narrative rewards far more satisfying.",
    "status": "Personal prototype",
    "deliverables": "Game concept, level blockouts, and a proposed progression loop.",
    "contribution": "Game concept, progression design, and level layout.",
    "thumbnailWidth": 640,
    "heroWidth": 1400
  },
  {
    "title": "Deep Into Dreams",
    "slug": "deep-into-dreams",
    "discipline": "game",
    "category": "Psychological Horror & Narrative",
    "role": "Environment Artist & Narrative Designer",
    "year": "2025",
    "duration": "1 Month",
    "team": "Personal Project",
    "description": "A psychological horror environment and narrative project built around lighting, environmental clues, and memory-based puzzles.",
    "thumbnail": "/images/deep-into-dreams/DD1-640.webp",
    "heroImage": "/images/deep-into-dreams/DD1.webp",
    "imageAlt": "Deep Into Dreams interior environment",
    "tools": [
      "Unreal Engine 4",
      "Notion",
      "Google Docs",
      "Miro",
      "Scrivener"
    ],
    "tags": [
      "Psychological Horror",
      "Narrative Design",
      "Unreal Engine 4",
      "Environmental Storytelling"
    ],
    "placeholder": false,
    "overview": "Deep Into Dreams is a first-person psychological horror game built in Unreal Engine 4. The player inhabits the fractured inner world of protagonist Elliot Marsh, whose mind has become a labyrinth — each level a deeper descent into a nightmare reflecting psychological trauma.",
    "problem": "Crafting genuine psychological horror without relying on cheap jump scares or heavy UI exposition, using environment, audio degradation, and memory puzzles instead.",
    "goals": [
      "No HUD, no handholding: all narrative & navigational info lives in the environment.",
      "Sound as a narrative layer: soundscape deteriorates as horror escalates (music box -> static -> silence).",
      "Sustain tension through pacing and environmental inconsistencies rather than jump scares.",
      "Puzzles as repressed memories: solving a puzzle means confronting a piece of backstory."
    ],
    "process": [
      {
        "id": "psychology-research",
        "title": "Psychological Research",
        "body": "Studied dissociation, intrusive thought patterns, and trauma responses to ensure psychological elements felt authentic and respectful."
      },
      {
        "id": "narrative-arch",
        "title": "Narrative Architecture & Characters",
        "body": "Mapped story across nightmare levels representing stages of collapse. Designed character projections: Elliot Marsh (protagonist), The Watcher (reflection), Clara (memory guide), and The Architect (environmental antagonist)."
      },
      {
        "id": "environmental-scripting",
        "title": "Environmental Scripting",
        "body": "Wrote set-dressing briefs detailing object placement, lighting temperature, and audio cues for every room before building in-engine."
      },
      {
        "id": "puzzle-design",
        "title": "Puzzle Design & Memory Loop",
        "body": "Created puzzles requiring players to re-examine earlier environments with new knowledge, connecting memory confrontment with progression."
      },
      {
        "id": "tone-playtesting",
        "title": "Tone Playtesting",
        "body": "Ran testing sessions specifically to gauge emotional response — noting exact moments players felt confused vs. unsettled, adjusting lighting and sound cues."
      }
    ],
    "gallery": [
      {
        "type": "image",
        "src": "/images/deep-into-dreams/DD1.webp",
        "alt": "Deep Into Dreams environment view 1",
        "caption": "Environment study — lighting, set dressing, and spatial composition.",
        "preview": "/images/deep-into-dreams/DD1-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/deep-into-dreams/DD2.webp",
        "alt": "Deep Into Dreams environment view 2",
        "caption": "Environment study — lighting, set dressing, and spatial composition.",
        "preview": "/images/deep-into-dreams/DD2-preview.webp",
        "width": 1440,
        "height": 760
      },
      {
        "type": "image",
        "src": "/images/deep-into-dreams/DD3.webp",
        "alt": "Deep Into Dreams environment view 3",
        "caption": "Environment study — lighting, set dressing, and spatial composition.",
        "preview": "/images/deep-into-dreams/DD3-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/deep-into-dreams/DD4.webp",
        "alt": "Deep Into Dreams environment view 4",
        "caption": "Environment study — lighting, set dressing, and spatial composition.",
        "preview": "/images/deep-into-dreams/DD4-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/deep-into-dreams/DD5.webp",
        "alt": "Deep Into Dreams environment view 5",
        "caption": "Environment study — lighting, set dressing, and spatial composition.",
        "preview": "/images/deep-into-dreams/DD5-preview.webp",
        "width": 1440,
        "height": 810
      }
    ],
    "outcome": "Environment studies and a narrative plan for five nightmare levels.",
    "learnings": "True horror lives in the gap between player expectation and environmental reality. Subtle audio cues and room shifts create far deeper dread than loud shocks.",
    "status": "Environment & narrative project",
    "deliverables": "Environment design and a five-part narrative structure.",
    "contribution": "Environment design, narrative structure, and scene planning.",
    "thumbnailWidth": 640,
    "heroWidth": 1440
  },
  {
    "title": "742 Blackwood Lane",
    "slug": "742-blackwood-lane",
    "discipline": "game",
    "category": "Level Design & Gameplay Flow",
    "role": "Level Designer",
    "year": "2025",
    "duration": "1 Day",
    "team": "Personal Concept",
    "description": "A ghost-hunting level concept exploring escape routes, spatial tension, and risk across a residential property.",
    "thumbnail": "/images/742-blackwood-lane/HH2-640.webp",
    "heroImage": "/images/742-blackwood-lane/HH2.webp",
    "imageAlt": "742 Blackwood Lane exterior concept art",
    "tools": [
      "Unreal Engine 5",
      "Blender",
      "Google Docs",
      "Miro",
      "Trello"
    ],
    "tags": [
      "Level Design",
      "Phasmophobia Map",
      "Gameplay Flow",
      "Unreal Engine 5",
      "Blender"
    ],
    "placeholder": false,
    "overview": "742 Blackwood Lane is a custom map concept designed for Phasmophobia-style co-op ghost hunting games. The brief was to design a medium-sized residential level that escalates in tension from the familiar warmth of a family home into an isolated rear workshop.",
    "problem": "Balancing two competing player needs: providing open loop routes to retreat safely from hunting ghosts while maintaining choke points and spatial confinement to make encounters threatening.",
    "goals": [
      "Loop Routes: Every major area has at least two exits to prevent unfair dead-ends.",
      "Zone Escalation: Three distinct zones — Domestic (safe), Transitional (uncertain), and Isolated (dangerous).",
      "Evidence Placement: Ghost rooms weighted toward high-risk isolated zones to reward deep exploration.",
      "Architectural Realism: Ensuring room transitions feel like a believable residential property."
    ],
    "process": [
      {
        "id": "reference-analysis",
        "title": "Reference & Pattern Analysis",
        "body": "Analyzed existing Phasmophobia maps, documenting choke points, loop opportunities, evidence rooms, and panic triggers in a comparison matrix."
      },
      {
        "id": "floor-plan",
        "title": "Floor Plan & Zone Drafting",
        "body": "Sketched alternate floor plans selecting for zone clarity, loop viability, and believable domestic architecture."
      },
      {
        "id": "flow-map",
        "title": "Node-Based Flow Map",
        "body": "Translated floor plans into node-based flow maps showing movement routes, exit choices, and risk escalation per zone."
      },
      {
        "id": "3d-blockout",
        "title": "3D Blockout in Blender & UE5",
        "body": "Built a 3D blockout to validate proportions, sightlines, and room transitions in first-person view."
      },
      {
        "id": "gdd-handover",
        "title": "GDD & Developer Brief",
        "body": "Authored complete Game Design Document covering zone descriptions, evidence probability tables, and ghost hunt behavior notes."
      }
    ],
    "gallery": [
      {
        "type": "image",
        "src": "/images/742-blackwood-lane/HH1.webp",
        "alt": "Full property overview map",
        "caption": "Property layout and overall zone distribution",
        "preview": "/images/742-blackwood-lane/HH1-preview.webp",
        "width": 1165,
        "height": 1800
      },
      {
        "type": "image",
        "src": "/images/742-blackwood-lane/HH2.webp",
        "alt": "Exterior and entrance view",
        "caption": "Domestic exterior and entrance transition",
        "preview": "/images/742-blackwood-lane/HH2-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/742-blackwood-lane/HH3.webp",
        "alt": "Interior corridor blockout",
        "caption": "Ground floor hallway showing sightlines and loop doorways",
        "preview": "/images/742-blackwood-lane/HH3-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/742-blackwood-lane/HH4.webp",
        "alt": "Isolated workshop zone",
        "caption": "Deep workshop zone with high-risk evidence placement",
        "preview": "/images/742-blackwood-lane/HH4-preview.webp",
        "width": 1440,
        "height": 810
      }
    ],
    "outcome": "A level design concept with layout and blockout imagery.",
    "learnings": "A great horror level isn't just scary — it's readable. Players must understand their escape options in an instant so every death feels fair.",
    "status": "Level design concept",
    "deliverables": "A residential layout, zone plan, and blockout views.",
    "contribution": "Level layout, spatial flow, and blockout design.",
    "thumbnailWidth": 640,
    "heroWidth": 1440
  },
  {
    "title": "The \"Roll\" Economy — Roblox RNG Games",
    "slug": "roblox-rng-case-study",
    "discipline": "game",
    "category": "Game Analysis & Player Psychology",
    "role": "Game Analyst & Designer",
    "year": "2026",
    "duration": "Case Study",
    "team": "Independent Research",
    "description": "An analysis of the reward loops and social dynamics in Roblox RNG games.",
    "thumbnail": "/images/roblox-rng/RNG_CaseStudy-640.webp",
    "heroImage": "/images/roblox-rng/RNG_CaseStudy.webp",
    "imageAlt": "Roblox RNG Games Roll Economy Case Study cover image",
    "tools": [
      "Game Analysis",
      "Roblox Studio",
      "Compulsion Loop Diagrams",
      "Player Data"
    ],
    "tags": [
      "Roblox",
      "RNG Games",
      "Player Psychology",
      "Compulsion Loop",
      "Game Analysis"
    ],
    "placeholder": false,
    "overview": "An analytical case study unpacking the massive success of RNG luck-based games on Roblox (such as Sol's RNG). The report investigates how hyper-simplified core loops combined with extreme variable rewards and public social status create intense player engagement.",
    "problem": "Understanding how a simple roll-and-collect loop can support engagement through rewards, visible status, and repeated progression.",
    "goals": [
      "Deconstruct the core Roll -> Flex -> Upgrade compulsion loop.",
      "Analyze variable-ratio reinforcement schedules and dopamine hit frequency.",
      "Evaluate social signaling mechanics: aura visual effects, global announcements, and chat flexes.",
      "Identify actionable game design lessons for ethical progression mechanics."
    ],
    "process": [
      {
        "id": "loop-deconstruction",
        "title": "Compulsion Loop Deconstruction",
        "body": "Mapped player actions from automated roll triggers to inventory collection and luck multiplier crafting."
      },
      {
        "id": "psych-framework",
        "title": "Psychological Framework",
        "body": "Uses variable rewards as a framework for discussing repeated rolling and collecting. This is qualitative analysis, not an experiment measuring player retention."
      },
      {
        "id": "social-signaling",
        "title": "Social Signaling & Status",
        "body": "Examined how cosmetic auras and server-wide broadcast banners transform individual luck into public social capital."
      }
    ],
    "gallery": [
      {
        "type": "image",
        "src": "/images/roblox-rng/RNG_CaseStudy.webp",
        "alt": "Roblox RNG Roll Economy Case Study summary graphic",
        "caption": "Compulsion loop breakdown and Roblox roll economy architecture",
        "preview": "/images/roblox-rng/RNG_CaseStudy-preview.webp",
        "width": 1408,
        "height": 768
      }
    ],
    "outcome": "An independent essay examining reward loops, collection, and social status in Roblox RNG games.",
    "learnings": "Visual feedback and peer visibility are just as critical as numerical odds in reward systems.",
    "status": "Independent analysis",
    "deliverables": "An essay examining reward loops and social status.",
    "contribution": "The written analysis and design recommendations.",
    "thumbnailWidth": 640,
    "heroWidth": 1408
  },
  {
    "title": "NovelNest",
    "slug": "novelnest",
    "discipline": "ux",
    "category": "Reading & Publishing Platform",
    "role": "UI/UX Designer",
    "year": "2026",
    "team": "Personal Project",
    "description": "A reading and publishing interface concept with separate journeys for readers and authors.",
    "thumbnail": "/images/novelnest/showcase-640.webp",
    "heroImage": "/images/novelnest/showcase.webp",
    "imageAlt": "NovelNest home feed, discovery, and reading screens",
    "tools": [
      "UI Design",
      "Information Architecture",
      "Prototyping"
    ],
    "tags": [
      "Mobile",
      "Reading",
      "Publishing"
    ],
    "placeholder": false,
    "overview": "Readers need to find a story and return to where they left off. Authors need to create chapters, manage drafts, and respond to feedback. NovelNest brings these tasks into two connected interface flows.",
    "problem": "Discovery, reading, and community interaction can feel fragmented. Authors also need a clear path from drafting to publishing.",
    "goals": [
      "Connect finding a story with continuing to read it.",
      "Provide a clear path from creating a novel to publishing chapters.",
      "Make reader feedback accessible to authors."
    ],
    "process": [
      {
        "id": "resume-reading",
        "title": "Keep the current story easy to resume",
        "body": "The home feed places Continue Reading near the top, while the reading screen keeps chapter progress and navigation in a consistent location. Discovery remains available without replacing the reader’s ongoing task.",
        "media": [
          {
            "type": "image",
            "src": "/images/novelnest/screen-1-3.webp",
            "alt": "S-03 · Home Feed",
            "caption": "Home feed: Continue Reading gives an existing reader a direct route back to their story.",
            "preview": "/images/novelnest/screen-1-3-preview.webp",
            "width": 640,
            "height": 1389
          }
        ]
      },
      {
        "id": "publishing-flow",
        "title": "Separate drafting from publishing",
        "body": "The chapter editor makes draft status, word count, and publishing controls visible. The create-novel flow divides setup into three steps, so metadata entry is separate from writing a chapter.",
        "media": [
          {
            "type": "image",
            "src": "/images/novelnest/screen-2-3.webp",
            "alt": "S-11 · Chapter Editor",
            "caption": "Chapter editor: draft status and publishing controls are presented together.",
            "preview": "/images/novelnest/screen-2-3-preview.webp",
            "width": 640,
            "height": 1389
          }
        ]
      },
      {
        "id": "feedback-loop",
        "title": "Make unanswered feedback identifiable",
        "body": "The feedback screen distinguishes unanswered comments from replies. This gives authors a way to identify conversations that still need attention.",
        "media": [
          {
            "type": "image",
            "src": "/images/novelnest/screen-2-7.webp",
            "alt": "S-15 · Reader Feedback",
            "caption": "Reader feedback: labels distinguish replied and unanswered comments.",
            "preview": "/images/novelnest/screen-2-7-preview.webp",
            "width": 640,
            "height": 1389
          }
        ]
      },
      {
        "id": "reader-flow",
        "title": "Complete reader flow",
        "body": "The reader flow covers onboarding, discovery, reading, and a personal library. Each screen below includes its design rationale.",
        "media": [
          {
            "type": "image",
            "src": "/images/novelnest/screen-1-1.webp",
            "alt": "S-01 · Splash Screen",
            "caption": "Full-bleed dark with amber glow emanating from the logo — makes the brand feel warm, not clinical. Animated loader signals readiness without a number.",
            "preview": "/images/novelnest/screen-1-1-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-1-2.webp",
            "alt": "S-02 · Login / Sign Up",
            "caption": "Fraunces logo as the only serif element here — grounds identity without over-styling a utility screen. Toggle avoids double navigation.",
            "preview": "/images/novelnest/screen-1-2-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-1-3.webp",
            "alt": "S-03 · Home Feed",
            "caption": "\"Continue Reading\" card is the first high-visibility element post-search — returns the reader to his story with one tap. Hero banner doubles as editorial curation.",
            "preview": "/images/novelnest/screen-1-3-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-1-4.webp",
            "alt": "S-04 · Explore / Browse",
            "caption": "Genre tiles use rich dark gradients + emoji for immediate scan-ability. No text-only list — visual genre tiles let the reader feel the mood before committing.",
            "preview": "/images/novelnest/screen-1-4-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-1-5.webp",
            "alt": "S-05 · Novel Detail",
            "caption": "Immersive full-bleed hero for the novel. Stats row gives social proof at a glance. Premium lock is present but not punishing — it's just a transparent label.",
            "preview": "/images/novelnest/screen-1-5-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-1-6.webp",
            "alt": "S-06 · Reading Screen",
            "caption": "Warm parchment-toned reading background (#0E0C0A) is easier on eyes than pure black. Amber progress thread gives a sense of placement. Bottom actions stay discoverable without interrupting reading.",
            "preview": "/images/novelnest/screen-1-6-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-1-7.webp",
            "alt": "S-07 · My Library",
            "caption": "\"+2 NEW\" pill in amber creates excitement and urgency. Progress bars make it trivial to re-orient after a break. Compact play button reduces friction to resume reading.",
            "preview": "/images/novelnest/screen-1-7-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-1-8.webp",
            "alt": "S-08 · Reader Profile",
            "caption": "Reading streak in the stats row creates a \"don't break the chain\" motivator. Locked badges provide aspiration without friction — users can see what they can earn.",
            "preview": "/images/novelnest/screen-1-8-preview.webp",
            "width": 640,
            "height": 1389
          }
        ]
      },
      {
        "id": "author-flow",
        "title": "Complete author flow",
        "body": "The author flow covers creating a novel, managing chapters, tracking activity, and responding to readers.",
        "media": [
          {
            "type": "image",
            "src": "/images/novelnest/screen-2-1.webp",
            "alt": "S-09 · Author Dashboard",
            "caption": "Earnings hero uses a gradient of prestige (deep blue to indigo). \"Unanswered: 12\" with amber creates urgency without anxiety.",
            "preview": "/images/novelnest/screen-2-1-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-2-2.webp",
            "alt": "S-10 · Novel Management",
            "caption": "Line chart gives instant visual feedback on momentum. \"Write New Chapter\" is a ghost row at the bottom of the chapter list — always discoverable, never in the way.",
            "preview": "/images/novelnest/screen-2-2-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-2-3.webp",
            "alt": "S-11 · Chapter Editor",
            "caption": "Auto-save label in subtitle removes \"did I lose my work?\" anxiety. Word count in amber is a non-intrusive motivator. Two-tap publish vs. scheduling gives the author full control.",
            "preview": "/images/novelnest/screen-2-3-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-2-4.webp",
            "alt": "S-12 · Create Novel",
            "caption": "3-step progress bar removes \"how much more?\" anxiety. Chip multi-select for genres is faster than dropdowns. Save Draft in the header means the author never loses her work.",
            "preview": "/images/novelnest/screen-2-4-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-2-5.webp",
            "alt": "S-13 · Analytics",
            "caption": "Revenue breakdown table gives the author actionable data. The chapter performance bar chart immediately reveals which chapters cause drop-off, so she can adjust pacing.",
            "preview": "/images/novelnest/screen-2-5-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-2-6.webp",
            "alt": "S-14 · Earnings & Payouts",
            "caption": "Balance in large Fraunces serif makes the number feel significant. Red withdrawal vs. green income gives instant readability in the transaction log.",
            "preview": "/images/novelnest/screen-2-6-preview.webp",
            "width": 640,
            "height": 1389
          },
          {
            "type": "image",
            "src": "/images/novelnest/screen-2-7.webp",
            "alt": "S-15 · Reader Feedback",
            "caption": "\"12 unanswered\" pill in amber creates urgency without anxiety. Green \"✓ Replied\" state rewards completion. Addresses UX Challenge 4: meaningful reader–author interaction.",
            "preview": "/images/novelnest/screen-2-7-preview.webp",
            "width": 640,
            "height": 1389
          }
        ]
      },
      {
        "id": "design-system",
        "title": "Visual system",
        "body": "A dark interface uses amber for primary actions, with reusable buttons, genre chips, reading progress, and publishing status indicators.",
        "media": [
          {
            "type": "image",
            "src": "/images/novelnest/design-system.webp",
            "alt": "NovelNest colours, typography and reusable interface components",
            "preview": "/images/novelnest/design-system-preview.webp",
            "width": 1440,
            "height": 438
          }
        ]
      }
    ],
    "outcome": "Fifteen interface concepts covering reader and author journeys, supported by a shared visual system.",
    "status": "Interface concept",
    "deliverables": "Fifteen screens across reader and author flows.",
    "contribution": "Reader and author flows, 15 high-fidelity screen layouts, and a shared visual system for navigation, status, and primary actions.",
    "date": "May 2026",
    "thumbnailWidth": 640,
    "heroWidth": 1440
  },
  {
    "title": "eCommerce Seller Dashboard",
    "slug": "ecommerce-seller-dashboard",
    "discipline": "ux",
    "category": "UI/UX & B2B Web App",
    "role": "UI/UX Designer",
    "year": "2026",
    "duration": "2 Months",
    "team": "Lead Product Designer",
    "description": "A seller portal interface covering orders, inventory, analytics, and payouts.",
    "thumbnail": "/images/ecommerce-dashboard/Dashboard-640.webp",
    "heroImage": "/images/ecommerce-dashboard/Dashboard.webp",
    "imageAlt": "eCommerce Seller Dashboard analytics overview screen",
    "tools": [
      "Figma",
      "B2B Web App",
      "Design Systems",
      "Data Visualization",
      "User Research"
    ],
    "tags": [
      "eCommerce",
      "Dashboard Portal",
      "B2B Web App",
      "Inventory Management",
      "Analytics",
      "Payouts"
    ],
    "placeholder": false,
    "overview": "A full UX redesign of an eCommerce seller dashboard portal created to streamline operational complexity for online merchants. The portal unifies inventory management, order shipping, store analytics, customer reviews, promotions, and automated payouts into a cohesive dashboard.",
    "problem": "Merchants struggled with cluttered navigation, fragmented order tracking, difficult inventory updates, and opaque payout timelines across high-volume sales days.",
    "goals": [
      "Unified Overview: At-a-glance revenue, order velocity, and inventory alerts.",
      "Streamlined Order Processing: One-click status updates, bulk shipping label generation, and filterable orders.",
      "Inventory Precision: Real-time stock alerts, SKU search, and quick price adjustments.",
      "Financial Clarity: Detailed payout history, fee breakdowns, and revenue forecasting."
    ],
    "process": [
      {
        "id": "research-audit",
        "title": "UX Audit & Merchant Research",
        "body": "Interviewed merchants to identify high-friction tasks: managing low stock, tracking delayed shipments, and understanding payout deductions."
      },
      {
        "id": "information-arch",
        "title": "Information Architecture Overhaul",
        "body": "Restructured navigation into logical modules: Dashboard, Products, Orders, Inventory, Analytics, Customers, Shipping, Payouts, Promotions, and Settings.",
        "media": [
          {
            "type": "image",
            "src": "/images/ecommerce-dashboard/Inventory.webp",
            "alt": "Inventory screen",
            "caption": "Inventory Management — Stock level indicators & SKU management",
            "preview": "/images/ecommerce-dashboard/Inventory-preview.webp",
            "width": 1440,
            "height": 810
          }
        ]
      },
      {
        "id": "dashboard-ui",
        "title": "High-Fidelity UI & Component Library",
        "body": "Designed an enterprise dark/light UI palette using Slate Navy (#0F172A), Indigo (#4F46E5), and Emerald (#059669) paired with Inter typography."
      }
    ],
    "gallery": [
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Dashboard.webp",
        "alt": "Main Dashboard screen",
        "caption": "Executive Dashboard — Revenue metrics, quick stats & recent orders",
        "preview": "/images/ecommerce-dashboard/Dashboard-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Analytics.webp",
        "alt": "Analytics screen",
        "caption": "Analytics — Sales performance, traffic channels & conversion rates",
        "preview": "/images/ecommerce-dashboard/Analytics-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Inventory.webp",
        "alt": "Inventory screen",
        "caption": "Inventory Management — Stock level indicators & SKU management",
        "preview": "/images/ecommerce-dashboard/Inventory-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Orders.webp",
        "alt": "Orders management screen",
        "caption": "Orders — Status filtering, bulk actions & fulfillment tracking",
        "preview": "/images/ecommerce-dashboard/Orders-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Payouts.webp",
        "alt": "Financial payouts screen",
        "caption": "Payouts — Financial logs, bank transfers & fee transparency",
        "preview": "/images/ecommerce-dashboard/Payouts-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Colour_Palette.webp",
        "alt": "Design system color palette",
        "caption": "Design System — B2B tokenized color palette & status colors",
        "preview": "/images/ecommerce-dashboard/Colour_Palette-preview.webp",
        "width": 600,
        "height": 318
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Customers.webp",
        "alt": "Seller dashboard: Customers",
        "caption": "Customers interface",
        "preview": "/images/ecommerce-dashboard/Customers-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Products.webp",
        "alt": "Seller dashboard: Products",
        "caption": "Products interface",
        "preview": "/images/ecommerce-dashboard/Products-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Shipping.webp",
        "alt": "Seller dashboard: Shipping",
        "caption": "Shipping interface",
        "preview": "/images/ecommerce-dashboard/Shipping-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Reviews.webp",
        "alt": "Seller dashboard: Reviews",
        "caption": "Reviews interface",
        "preview": "/images/ecommerce-dashboard/Reviews-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Promotions.webp",
        "alt": "Seller dashboard: Promotions",
        "caption": "Promotions interface",
        "preview": "/images/ecommerce-dashboard/Promotions-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Profile.webp",
        "alt": "Seller dashboard: Profile",
        "caption": "Profile interface",
        "preview": "/images/ecommerce-dashboard/Profile-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Settings.webp",
        "alt": "Seller dashboard: Settings",
        "caption": "Settings interface",
        "preview": "/images/ecommerce-dashboard/Settings-preview.webp",
        "width": 1440,
        "height": 810
      },
      {
        "type": "image",
        "src": "/images/ecommerce-dashboard/Typography.webp",
        "alt": "Seller dashboard: Typography",
        "caption": "Typography reference",
        "preview": "/images/ecommerce-dashboard/Typography-preview.webp",
        "width": 600,
        "height": 318
      }
    ],
    "outcome": "Seller dashboard interface designs covering orders, inventory, analytics, and payments, with supporting visual-system assets.",
    "learnings": "Frequently used actions need a clear place in the navigation, while payment and order states need consistent labels.",
    "status": "Interface redesign",
    "deliverables": "Seller dashboard screens and visual-system assets.",
    "contribution": "Seller navigation, operational screen layouts, and visual-system references for orders, stock, and payouts.",
    "thumbnailWidth": 640,
    "heroWidth": 1440,
    "date": "April 2026"
  },
  {
    "title": "St. Andrew’s College",
    "slug": "st-andrews-college",
    "discipline": "ux",
    "category": "Website Audit & Redesign",
    "role": "UI/UX Designer",
    "year": "2026",
    "team": "Independent Redesign",
    "description": "A proposed college website redesign focused on admissions, clearer navigation, accessible notices, and a more useful homepage.",
    "thumbnail": "/images/st-andrews-college/cover-640.webp",
    "heroImage": "/images/st-andrews-college/cover.webp",
    "imageAlt": "St. Andrew’s College proposed homepage design",
    "tools": [
      "UX Audit",
      "Information Architecture",
      "Wireframing"
    ],
    "tags": [
      "Education",
      "Web Design",
      "UX Audit"
    ],
    "placeholder": false,
    "overview": "An audit and redesign proposal for St. Andrew’s College, combining a review of the existing information architecture with low-fidelity wireframes and a proposed homepage.",
    "problem": "A large navigation structure and uncategorized notices make important admissions and academic information difficult to find.",
    "goals": [
      "Simplify navigation.",
      "Make notices searchable and easier to scan.",
      "Give prospective students a clear admissions journey."
    ],
    "process": [
      {
        "id": "audiences",
        "title": "Who the website needs to serve",
        "body": "The audit separates four audiences whose priorities differ.",
        "bullets": [
          "Prospective students: courses and how to apply.",
          "Current students: timetables, examination information, and notices.",
          "Parents: fees and admission updates.",
          "Faculty: institutional resources and internal tools."
        ]
      },
      {
        "id": "audit",
        "title": "Audit findings",
        "body": "The original audit identifies these issues in the existing website. They describe the reviewed version of the site.",
        "bullets": [
          "Two navigation bars create a large set of competing links.",
          "An unfiltered notice list makes current information hard to distinguish from old updates.",
          "Admissions and course information lack a clear starting point.",
          "The mobile viewport setting restricts pinch-to-zoom.",
          "Key academic information is available only in PDFs.",
          "The desktop navigation structure does not translate clearly to mobile."
        ]
      },
      {
        "id": "before-after",
        "title": "Existing structure and proposed changes",
        "body": "The proposal changes how information is grouped rather than simply restyling the same layout.",
        "bullets": [
          "Multiple navigation groups → five primary areas with search.",
          "A long notice list → a short, tabbed widget plus a searchable archive.",
          "Buried admissions information → a visible admissions action and programme cards.",
          "PDF-only academic information → searchable web pages for common tasks."
        ]
      },
      {
        "id": "architecture",
        "title": "Information architecture",
        "body": "The proposed primary navigation uses About, Admissions, Academics, Student Life, and Contact. Utility links move to a secondary row or footer.",
        "flow": [
          "ABOUT",
          "ADMISSIONS",
          "ACADEMICS",
          "STUDENT LIFE",
          "CONTACT"
        ]
      },
      {
        "id": "recommendations",
        "title": "Design priorities",
        "body": "The recommendations address common tasks before adding visual detail.",
        "bullets": [
          "Restore mobile zoom, add skip navigation, and provide visible keyboard focus.",
          "Give prospective students a clear admissions route.",
          "Group notices by type and provide a searchable archive.",
          "Surface programme details, academic dates, and fee information as web content.",
          "Use consistent typography, spacing, and notice components across pages."
        ]
      },
      {
        "id": "wireframes",
        "title": "Wireframes and layout decisions",
        "body": "These six wireframes establish the content hierarchy. The notes explain the purpose of each region before visual styling.",
        "media": [
          {
            "type": "image",
            "src": "/images/st-andrews-college/wireframe-1.webp",
            "alt": "① Global navigation bar — 52px height, sticky",
            "caption": "5 primary items (down from 10). Search icon triggers Cmd+K overlay — not an always-visible input field, which saves horizontal space. Login moved out of primary nav. Utility links (NIRF, UNESCO, Knimbus) relocated to footer.",
            "preview": "/images/st-andrews-college/wireframe-1-preview.webp",
            "width": 1200,
            "height": 130
          },
          {
            "type": "image",
            "src": "/images/st-andrews-college/wireframe-2.webp",
            "alt": "② Hero — above the fold, ~340px",
            "caption": "Persona selector sits above the headline — it's an interactive component that triggers content adaptation, not decorative text. \"Prospective\" shows Apply CTA; \"Current Student\" surfaces timetable + portal. 3 CTAs establish the primary user actions. Trust stats anchor the bottom of the hero before the page body begins.",
            "preview": "/images/st-andrews-college/wireframe-2-preview.webp",
            "width": 1200,
            "height": 551
          },
          {
            "type": "image",
            "src": "/images/st-andrews-college/wireframe-3.webp",
            "alt": "③ Quick action bar — 1-click task access",
            "caption": "6 direct-link tiles — no sub-menus. Each resolves the top 6 user tasks found in the audit in a single click. Icon circles are placeholders; the lo-fi deliberately withholds specific icon choices so that decision happens separately. Background shift from hero signals a new content zone.",
            "preview": "/images/st-andrews-college/wireframe-3-preview.webp",
            "width": 1200,
            "height": 189
          },
          {
            "type": "image",
            "src": "/images/st-andrews-college/wireframe-4.webp",
            "alt": "④ Latest notices widget — tabbed, filterable",
            "caption": "Coloured severity dot (blue = info, orange = exam/deadline, green = admissions) communicates urgency before reading. \"View all notices →\" is a persistent escape hatch to a dedicated searchable archive — the architecture that addresses the current site's hard limit of 5 visible notices. Tabs let users filter by their role without changing pages.",
            "preview": "/images/st-andrews-college/wireframe-4-preview.webp",
            "width": 1200,
            "height": 407
          },
          {
            "type": "image",
            "src": "/images/st-andrews-college/wireframe-5.webp",
            "alt": "⑤ Explore programmes — 3×2 card grid",
            "caption": "Degree abbreviation (large) acts as the visual anchor — it's what students already call the course. Stream name (small, uppercase) provides context. Arrow glyph signals clickability without a full button component, keeping cards lightweight. Colour tinting per stream is a hi-fi decision deferred from this lo-fi.",
            "preview": "/images/st-andrews-college/wireframe-5-preview.webp",
            "width": 1200,
            "height": 326
          },
          {
            "type": "image",
            "src": "/images/st-andrews-college/wireframe-6.webp",
            "alt": "⑥ About the college + virtual tour — 50/50 split",
            "caption": "Two distinct content regions — text (left) and media (right) — separated by a layout boundary, not just whitespace. The virtual tour is currently buried deep in the site; surfacing it here addresses a key discoverability gap and speaks directly to prospective students. The 50/50 split gives both zones equal visual weight.",
            "preview": "/images/st-andrews-college/wireframe-6-preview.webp",
            "width": 1200,
            "height": 291
          }
        ]
      },
      {
        "id": "homepage",
        "title": "Proposed homepage",
        "body": "The detailed homepage brings navigation, admissions, quick actions, notices, programmes, and events into one layout. Sample content illustrates the proposal.",
        "media": [
          {
            "type": "image",
            "src": "/images/st-andrews-college/homepage-full.webp",
            "alt": "Full proposed St. Andrew’s College homepage",
            "caption": "Proposed interface, not a screenshot of a deployed redesign.",
            "preview": "/images/st-andrews-college/homepage-full-preview.webp",
            "width": 1440,
            "height": 3068
          }
        ]
      },
      {
        "id": "visual-system",
        "title": "Visual system",
        "body": "The proposed design combines navy and warm neutral surfaces with serif headings and sans-serif body text. Notices use labels and colour to distinguish information, deadlines, and admissions updates."
      },
      {
        "id": "roadmap",
        "title": "Implementation and evaluation",
        "body": "The source proposes a phased rollout: navigation first, then the homepage, followed by searchable academic content and the shared design system.",
        "bullets": [
          "Check whether prospective students can find a course and the next admissions step.",
          "Measure success and time taken when locating the latest relevant notice.",
          "Test mobile navigation, keyboard access, and zoom before implementation."
        ]
      }
    ],
    "outcome": "An independent website redesign proposal combining an audit, information architecture, six wireframes, and a detailed homepage.",
    "status": "Independent redesign proposal",
    "deliverables": "A website audit, six wireframes, and a homepage proposal.",
    "contribution": "Interface layouts, user flows, and the visual presentation shown in this case study.",
    "date": "April 2026",
    "thumbnailWidth": 640,
    "heroWidth": 1440
  },
  {
    "title": "Euro Truck Simulator 2 — UX Audit",
    "slug": "ets2-website-ux-audit",
    "discipline": "ux",
    "category": "UI/UX & Web Audit",
    "role": "UX Researcher & Designer",
    "year": "2026",
    "duration": "1 Week",
    "team": "Independent Audit",
    "description": "An independent UX audit of the Euro Truck Simulator 2 website, with proposed navigation and layout improvements.",
    "thumbnail": "/images/ets2/ets2_preview-640.webp",
    "heroImage": "/images/ets2/ets2_preview.webp",
    "imageAlt": "Euro Truck Simulator 2 website UX audit preview",
    "tools": [
      "Heuristic Evaluation",
      "Information Architecture",
      "Figma",
      "UX Research",
      "Space Grotesk"
    ],
    "tags": [
      "UX Audit",
      "Heuristic Evaluation",
      "Euro Truck Simulator 2",
      "Website Redesign",
      "Information Architecture"
    ],
    "placeholder": false,
    "overview": "A comprehensive heuristic evaluation and redesign proposal for the official Euro Truck Simulator 2 website. The audit evaluated usability against Nielsen Norman's 10 heuristics, pinpointing friction points in purchasing DLCs, reading community updates, and navigating on mobile devices.",
    "problem": "The existing site suffered from outdated visual hierarchy, fragmented buy CTAs, buried DLC expansions, and poor mobile responsiveness.",
    "goals": [
      "Streamline purchase flow to reduce steps to Steam checkout.",
      "Highlight major map DLCs and community events prominently on the homepage.",
      "Modernize typography and dark-mode aesthetic matching SCS Software's simulation standard.",
      "Improve mobile navigation readability and touch targets."
    ],
    "process": [
      {
        "id": "heuristic-eval",
        "title": "Heuristic Evaluation",
        "body": "Scored the site across 10 usability dimensions, highlighting severity 3 and 4 issues in navigation clarity and CTA placement."
      },
      {
        "id": "ia-redesign",
        "title": "Information Architecture Redesign",
        "body": "Simplified primary navigation into Media, DLCs, News, Community, and Buy Now."
      },
      {
        "id": "ui-mockup",
        "title": "Modern Industrial UI",
        "body": "Created a sleek dark industrial UI utilizing Amber accent (#F5A623) and Space Grotesk typography."
      }
    ],
    "gallery": [
      {
        "type": "image",
        "src": "/images/ets2/ets2_preview.webp",
        "alt": "ETS2 website audit overview",
        "caption": "Heuristic score card and homepage redesign layout",
        "preview": "/images/ets2/ets2_preview-preview.webp",
        "width": 1024,
        "height": 1024
      }
    ],
    "outcome": "A heuristic audit and visual redesign proposal focused on navigation, purchase paths, and DLC discovery.",
    "learnings": "Gaming product websites must serve both new buyers looking for instant purchase CTAs and veteran fans seeking patch notes without cluttering either path.",
    "status": "Independent UX audit",
    "deliverables": "A heuristic audit and website redesign proposal.",
    "contribution": "The written analysis and design recommendations.",
    "thumbnailWidth": 640,
    "heroWidth": 1024,
    "date": "March 2026"
  },
  {
    "title": "Cozy Cafe Self-Order",
    "slug": "cozy-cafe-self-order",
    "discipline": "ux",
    "category": "UI/UX & Mobile App",
    "role": "UI/UX Designer",
    "year": "2026",
    "duration": "1 Month",
    "team": "Solo Product Designer",
    "description": "A mobile interface concept for browsing a cafe menu, reviewing an order, and checking its status.",
    "thumbnail": "/images/cozy-cafe/showcase-640.webp",
    "heroImage": "/images/cozy-cafe/showcase.webp",
    "imageAlt": "Cozy Cafe menu, cart review, and order status screens",
    "tools": [
      "Figma",
      "UI Design",
      "Design Systems",
      "Prototyping",
      "Mobile App"
    ],
    "tags": [
      "UI Design",
      "QR Ordering",
      "Mobile App",
      "Dine-In Cafes",
      "Product Design"
    ],
    "placeholder": false,
    "overview": "A QR-based ordering interface concept for dine-in cafes. The screens cover browsing, cart review, and order status without requiring an app download.",
    "problem": "Dine-in cafe guests often experience friction during peak hours: slow waiter response, awkward bill splitting, and lack of order status visibility.",
    "goals": [
      "Zero-barrier access: Browser-native QR flow without mandatory app installation or registration.",
      "Live order status: Real-time tracking (Preparing -> Ready -> Served) per item.",
      "Bill transparency: Itemized breakdown, promo codes, and clear tax breakdown before confirmation.",
      "Dine-in convenience: Session-based ordering allowing guests to add items anytime during their stay."
    ],
    "process": [
      {
        "id": "user-flow",
        "title": "End-to-End User Flow",
        "body": "Designed 4 core steps: Menu View (scan & browse) -> Adding Items (customise & cart) -> Cart Review (summary & taxes) -> Order Tracking (live item status).",
        "flow": [
          "SCAN QR",
          "BROWSE & CUSTOMISE",
          "REVIEW CART & ORDER",
          "LIVE TRACK & ENJOY"
        ]
      },
      {
        "id": "key-features",
        "title": "Key Design Features",
        "body": "Integrated QR-first access, category filters (Coffee, Bakery, Snacks), session persistence per table, and a dedicated \"Call Waiter / Finalise Bill\" action."
      },
      {
        "id": "design-system",
        "title": "Design System & Typography",
        "body": "Built a warm hospitality visual language using Forest Green (#1C3328), Cream (#F4F0E6), and Warm Terra (#E8692A), paired with Playfair Display headings and DM Sans body."
      }
    ],
    "gallery": [
      {
        "type": "image",
        "src": "/images/cozy-cafe/Main Screen.webp",
        "alt": "Cozy Cafe menu view",
        "caption": "Step 1: Category-driven menu view",
        "preview": "/images/cozy-cafe/Main Screen-preview.webp",
        "width": 375,
        "height": 844
      },
      {
        "type": "image",
        "src": "/images/cozy-cafe/Main Screen 2.webp",
        "alt": "Adding items and customization",
        "caption": "Step 2: Customizing items and quick-add flow",
        "preview": "/images/cozy-cafe/Main Screen 2-preview.webp",
        "width": 375,
        "height": 844
      },
      {
        "type": "image",
        "src": "/images/cozy-cafe/Cart View.webp",
        "alt": "Cart review screen",
        "caption": "Step 3: Cart review with promo codes and bill breakdown",
        "preview": "/images/cozy-cafe/Cart View-preview.webp",
        "width": 375,
        "height": 844
      },
      {
        "type": "image",
        "src": "/images/cozy-cafe/Order View.webp",
        "alt": "Live order tracking screen",
        "caption": "Step 4: Live item order status tracking",
        "preview": "/images/cozy-cafe/Order View-preview.webp",
        "width": 375,
        "height": 844
      }
    ],
    "outcome": "Four high-fidelity screens covering browsing, cart review, and proposed order tracking.",
    "learnings": "The design puts the menu first and keeps order totals and status visible throughout the flow.",
    "status": "Interface concept",
    "deliverables": "Four interface screens for a QR-based ordering flow.",
    "contribution": "Interface layouts, user flows, and the visual presentation shown in this case study.",
    "thumbnailWidth": 640,
    "heroWidth": 1440,
    "date": "February 2026"
  }
];
