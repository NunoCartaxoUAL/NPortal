export const content = {
  en: {
    nav: {
      profile: 'Profile',
      projects: 'Projects',
      homelab: 'Homelab',
      evidence: 'Evidence'
    },
    profile: {
      title: 'Profile',
      sections: [
        {
          id: 'experience',
          title: 'Experience',
          entries: [
            {
              title: 'Software Developer',
              organization: 'Capgemini',
              location: 'Lisbon, Portugal',
              date: '10/2024 - Present',
              summary:
                'Backend and frontend delivery in a Capgemini engineering team, working across enterprise projects and deployment tooling.',
              highlights: [
                'Started as an **intern** in October 2024 and continued as a **full-time software developer** from January 2025.',
                'Worked on **Java/Spring** services, **React Admin** interfaces, **Kubernetes/Helm** deployment work, **Jenkins** pipelines, **Git** workflows, and **SIP**-related systems.',
                'Balanced implementation, troubleshooting, and team handoff work across backend and frontend tasks.'
              ],
              tags: ['Java', 'Spring', 'Kubernetes', 'Helm', 'React Admin', 'Jenkins']
            },
            {
              title: 'Software Developer Intern',
              organization: 'Inetum',
              location: 'Lisbon, Portugal',
              date: '01/2024 - 07/2024',
              summary:
                'Software development work using **COBOL** and **SQL**.',
              highlights: [
                'Developed software in **COBOL** and **SQL**.',
                'Troubleshot and tested **COBOL** and **SQL** changes.'
              ],
              tags: ['COBOL', 'SQL']
            },
            {
              title: 'Dedicated Technical Support',
              organization: 'NOS SGPS',
              location: 'Lisbon, Portugal',
              date: '11/2019 - 01/2020',
              summary:
                'Dedicated technical support for BPI and **network troubleshooting**.',
              highlights: [
                'Supported BPI-related requests and **network troubleshooting**.',
                'Worked with **Cisco** technologies.'
              ],
              tags: ['Technical support', 'Networking', 'Cisco']
            }
          ]
        },
        {
          id: 'studies',
          title: 'Studies',
          entries: [
            {
              title: "Bachelor's Degree, Computer Engineering",
              organization: 'Universidade Autonoma de Lisboa',
              location: 'Lisbon, Portugal',
              date: '10/2020 - 07/2023',
              summary:
                '**Computer Science and Engineering** degree focused on programming, databases, web applications, and deployment tools.',
              highlights: [
                'Worked with **Python**, **Java**, **JavaScript**, **Vue.js**, **MySQL**, **MongoDB**, **Firebase**, **GitHub**, **Heroku**, and **AWS**.',
                'Projects included an **Express.js** webstore with **MySQL**, a **Vue.js** webstore, and a socket-based chat application.'
              ],
              tags: ['Computer Engineering', 'Python', 'Java', 'JavaScript', 'Vue.js', 'Databases']
            },
            {
              title: 'Specialist in Network and Computer Systems Management',
              organization: 'ATEC - Academia de Formacao',
              location: 'Palmela, Portugal',
              date: '09/2018 - 02/2020',
              summary:
                'Specialist course in **network and computer systems management**.',
              highlights: [
                'Programming in **SQL**, **Java**, and **C#**.',
                'Management of **Linux**, **Windows**, and other operating systems.',
                'Specialization in **Cisco** network equipment and protocols.'
              ],
              tags: ['Networks', 'Linux', 'Windows', 'Cisco', 'SQL', 'Java', 'C#']
            }
          ]
        },
        {
          id: 'credentials',
          title: 'Languages & Certifications',
          levels: [
            { label: 'Portuguese', value: 100, detail: 'Mother tongue' },
            { label: 'English', value: 92, detail: 'C1-C2 working proficiency' },
            { label: 'Japanese', value: 58, detail: 'JLPT N3 / B1 conversation' },
            { label: 'Spanish', value: 32, detail: 'A1-A2' },
            { label: 'French', value: 18, detail: 'A1' }
          ],
          certifications: [
            { date: '07/2023', title: 'Japanese Language Proficiency Test JLPT N3', issuer: 'JLPT' },
            { date: '10/2024', title: 'Oracle Certified Java Programmer, Java SE 8 Associate', issuer: 'Oracle' },
            { date: '12/2024', title: 'Professional Scrum Master I', issuer: 'Scrum.org' }
          ]
        },
        {
          id: 'direction',
          title: 'About Me',
          paragraphs: [
            'Software developer with practical experience in Java/Spring, React Admin, Kubernetes, Helm, Jenkins, Git, databases, and Linux/network troubleshooting.',
            'My strongest portfolio work combines software engineering with language learning, local-first tooling, compact interfaces, and self-hosted infrastructure.',
            'I am building toward work in Japan: Portuguese is my mother tongue, English is my main working language, and Japanese is at JLPT N3 / conversation level.'
          ]
        }
      ]
    },
    projects: {
      title: 'Projects',
      sections: [
        {
          id: 'giina',
          title: 'Giina',
          objective: 'Local Japanese OCR and furigana overlay for games and video.',
          status: 'Prototype v0.3.0 with desktop workflow and SteamOS branch hardening.',
          platforms: 'Desktop first; SteamOS Desktop Mode branch in progress.',
          meta: ['Prototype v0.3.0', 'Desktop first', 'SteamOS branch in progress'],
          body: [
            'Giina proves a Japan-focused, local-first workflow: capture a selected screen area, run OCR on the machine, extract readings, and place furigana over detected Japanese text without sending captured text to an external service.',
            'The implementation joins **Electron** window/control logic, transparent overlays, hotkeys, capture, logging, and IPC with a **React/Vite** interface and a local **Python** worker using **PaddleOCR**, **fugashi**, **pykakasi**, and dictionary data.',
            'The current prototype is honest about platform limits. It works best for windowed or borderless desktop content; exclusive fullscreen is out of scope. The SteamOS branch reduces the interaction to F8 area selection, F9 OCR refresh, F10 quit, and a small status strip for Deck Desktop Mode testing.'
          ],
          description:
            'Giina captures a selected screen area, runs local OCR, extracts readings, and places furigana over detected Japanese text boxes. The main branch presents the full desktop concept, while the SteamOS branch strips the workflow down for Deck controls.',
          highlights: [
            'Local OCR pipeline using Python, PaddleOCR, fugashi, pykakasi, and dictionary data.',
            'Electron overlay architecture with a preload bridge, transparent windows, hotkeys, saved capture areas, and runtime diagnostics.',
            'SteamOS branch replaces the control window with F8 area selection, F9 OCR refresh, F10 quit, and a tiny status strip.'
          ],
          stackCards: [
            { title: 'Shell', text: 'Electron owns windows, hotkeys, capture, logging, and IPC.' },
            { title: 'Interface', text: 'React/Vite renders overlay text, status, and selector states.' },
            { title: 'OCR', text: 'Python worker runs PaddleOCR and reading extraction locally.' },
            { title: 'Language Data', text: 'JMdict/KANJIDIC-backed data supports reading and dictionary output.' }
          ],
          flow: ['Select area', 'Save bounds', 'Capture crop', 'OCR worker', 'Reading parse', 'Overlay render'],
          strengths: [
            'Clear privacy story: captured text stays on the machine.',
            'Small repeated workflow for games and videos: select once, refresh when needed.',
            'SteamOS branch documents the platform tradeoffs instead of pretending every mode is solved.'
          ],
          limits: [
            'Exclusive fullscreen is intentionally unsupported.',
            'SteamOS Desktop Mode is the first Deck target.',
            'Game Mode overlay stacking still needs target Steam Deck testing.'
          ],
          media: [
            {
              type: 'image',
              title: 'Giina control window',
              src: '/project-media/giina/main.png',
              alt: 'Giina desktop control window'
            },
            {
              type: 'image',
              title: 'Overlay reading output',
              src: '/project-media/giina/overlay-wikipedia.png',
              alt: 'Giina furigana overlay over Japanese text'
            },
            {
              type: 'image',
              title: 'Area selection',
              src: '/project-media/giina/area-selector.png',
              alt: 'Giina selecting a screen area for OCR'
            },
            {
              type: 'classDiagram',
              title: 'Class diagram',
              classes: [
                { name: 'OverlayApp', fields: ['windows', 'hotkeys', 'state'], methods: ['capture()', 'broadcast()'] },
                { name: 'CaptureArea', fields: ['x', 'y', 'width', 'height'], methods: ['normalize()', 'persist()'] },
                { name: 'OcrWorker', fields: ['python', 'dictionary'], methods: ['request()', 'parseLines()'] }
              ],
              relations: ['OverlayApp -> CaptureArea', 'OverlayApp -> OcrWorker', 'OcrWorker -> OverlayApp']
            },
            {
              type: 'flowchart',
              title: 'OCR pipeline',
              nodes: [
                { id: '1', label: 'screen area' },
                { id: '2', label: 'image crop' },
                { id: '3', label: 'OCR lines' },
                { id: '4', label: 'reading parse' },
                { id: '5', label: 'overlay render' }
              ],
              edges: ['screen area -> image crop', 'image crop -> OCR lines', 'OCR lines -> reading parse', 'reading parse -> overlay render']
            }
          ]
        },
        {
          id: 'laila',
          title: 'Laila',
          objective: 'Wear OS destination alarm for silent arrival reminders.',
          status: 'Prototype v0.3.0 with setup, saved places, tracking, and vibration logic.',
          platforms: 'Wear OS watch or emulator.',
          meta: ['Prototype v0.3.0', 'Wear OS', 'Destination tracking'],
          body: [
            'Laila is a focused Wear OS utility for trips where audio alerts are inconvenient. The user picks a destination, chooses an arrival radius, starts tracking, and receives a vibration when the watch enters the target zone.',
            'The implementation uses **Kotlin** and **Jetpack Compose** for a dense watch-first interface. Destination picking uses **osmdroid** and **OpenStreetMap**, typed search uses **Android Geocoder**, and a foreground **TripService** owns tracking state, distance checks, and vibration.',
            'The engineering value is in the small-device workflow and separated logic: saved/recent destinations speed up repeated trips, while GeoMath, TripRules, and TrackingCadence keep the core behavior testable. The remaining risks are device realities: GPS accuracy, notification permission, vibration strength, and battery use.'
          ],
          description:
            'Laila is a compact watch utility for trips where audio alerts are inconvenient. Pick a destination, choose an arrival radius, start tracking, and the watch vibrates when the target zone is reached.',
          highlights: [
            'Wear OS Compose UI with map picker, search, saved destinations, recent destinations, and radius controls.',
            'Foreground TripService broadcasts tracking state and triggers vibration when TripRules enters the arrived phase.',
            'Distance-scaled polling reduces unnecessary checks when the user is far from the destination.'
          ],
          stackCards: [
            { title: 'UI', text: 'Kotlin and Jetpack Compose build a dense watch-first setup flow.' },
            { title: 'Map', text: 'osmdroid/OpenStreetMap handles destination picking and radius display.' },
            { title: 'Search', text: 'Android Geocoder resolves typed locations into coordinates.' },
            { title: 'Tracking', text: 'Foreground service runs location checks and vibration actions.' }
          ],
          flow: ['Pick place', 'Set radius', 'Start service', 'Scale polling', 'Detect arrival', 'Vibrate'],
          strengths: [
            'Focused single-purpose app that fits a small watch screen.',
            'Pure GeoMath, TripRules, and TrackingCadence modules make core behavior easier to test.',
            'Saved and recent places keep repeated trips fast.'
          ],
          limits: [
            'CLI build depends on a configured Android SDK, Java, and Gradle runner.',
            'GPS, notification permission, vibration strength, and battery behavior need real Wear OS validation.',
            'Best shown as a compact mobile utility rather than the main Japan-facing project.'
          ],
          media: [
            {
              type: 'image',
              title: 'Watch setup',
              src: '/project-media/laila/home.png',
              alt: 'Laila Wear OS setup screen'
            },
            {
              type: 'image',
              title: 'Saved destinations',
              src: '/project-media/laila/saved-destinations.png',
              alt: 'Laila saved destinations screen'
            },
            {
              type: 'image',
              title: 'Destination picker',
              src: '/project-media/laila/pick-destination.png',
              alt: 'Laila destination picker map'
            },
            {
              type: 'image',
              title: 'Tracking view',
              src: '/project-media/laila/tracking.png',
              alt: 'Laila tracking GPS screen'
            },
            {
              type: 'sequence',
              title: 'Tracking sequence',
              actors: ['User', 'Compose', 'TripService', 'Vibrator'],
              messages: [
                'User -> Compose: start trip',
                'Compose -> TripService: destination + radius',
                'TripService -> Compose: distance update',
                'TripService -> Vibrator: arrived'
              ]
            },
            {
              type: 'erd',
              title: 'Data sketch',
              entities: [
                { name: 'SavedLocation', fields: ['id', 'name', 'lat', 'lon', 'radius'] },
                { name: 'TripState', fields: ['phase', 'distance', 'provider'] },
                { name: 'TrackingRule', fields: ['radius', 'interval', 'arrived'] }
              ],
              relations: ['SavedLocation -> TripState', 'TripState -> TrackingRule']
            }
          ]
        },
        {
          id: 'nportal',
          title: 'NPortal',
          objective: 'Bilingual portfolio portal for CV, project evidence, and homelab context.',
          status: 'Active portfolio build.',
          platforms: 'Static React/Vite site served locally, through Docker, and deployable to Vercel.',
          meta: ['Static React/Vite site', 'Bilingual content', 'Docker and Vercel preview path'],
          body: [
            'NPortal is the portfolio system behind this site. It keeps CV content, project case studies, screenshots, diagrams, and homelab notes in one bilingual content model instead of spreading the same information through separate static pages.',
            'The frontend uses **React 19**, reusable view components, **Vite** for static builds, and plain CSS for a restrained CV/paper visual language. The same branch can be checked with `npm run build`, reviewed through **Docker**, and deployed through the Vercel branch.',
            'The project demonstrates content architecture, presentation discipline, bilingual structure, and local deployment workflow. Its limits are deliberate: screenshots are static assets, Japanese copy needs a final native-level polish pass, and there is no CMS or analytics backend.'
          ],
          description:
            'NPortal is the site you are reading: a React/Vite portfolio that keeps CV content, project case studies, diagrams, and homelab notes in one structured bilingual content model.',
          highlights: [
            'Data-driven English/Japanese content with browser-language detection and manual language toggle.',
            'Reusable CV rows, project case study sections, media diagrams, and homelab tabs.',
            'Static build target that can be previewed locally, served from Docker, and deployed through Vercel.'
          ],
          stackCards: [
            { title: 'Frontend', text: 'React 19 renders each view from a shared content file.' },
            { title: 'Build', text: 'Vite produces a static bundle for preview, Docker, or Vercel.' },
            { title: 'UI', text: 'CSS keeps a notebook-like CV feel while adding denser case-study layouts.' },
            { title: 'Deploy', text: 'Development and Vercel branches can carry the same verified build.' }
          ],
          flow: ['Edit content', 'Build Vite', 'Preview site', 'Commit changes', 'Push development', 'Push vercel'],
          strengths: [
            'Portfolio content stays centralized and easy to revise.',
            'Project pages can accept a dynamic number of images and diagrams.',
            'The same components support visual testing cards and live case-study diagrams.'
          ],
          limits: [
            'Screenshots are static assets and should be refreshed when the layout changes materially.',
            'Japanese copy is concise and should be reviewed by a fluent speaker before employer use.',
            'The site is intentionally static; no backend analytics or CMS are included.'
          ],
          media: [
            {
              type: 'componentMap',
              title: 'Component map',
              groups: [
                { name: 'Shell', items: ['App', 'Sidebar', 'language state'] },
                { name: 'Views', items: ['Profile', 'Projects', 'Homelab'] },
                { name: 'Data', items: ['content.js', 'project media', 'tabs'] }
              ]
            },
            {
              type: 'flowchart',
              title: 'Release flow',
              nodes: [
                { id: 'A', label: 'organize prompt' },
                { id: 'B', label: 'implement views' },
                { id: 'C', label: 'build preview' },
                { id: 'D', label: 'push branches' }
              ],
              edges: ['A -> B', 'B -> C', 'C -> D']
            },
            {
              type: 'classDiagram',
              title: 'View model',
              classes: [
                { name: 'Content', fields: ['profile', 'projects', 'homelab'], methods: ['selectLanguage()'] },
                { name: 'ProjectCase', fields: ['status', 'platforms', 'media'], methods: ['renderRail()'] },
                { name: 'DiagramCard', fields: ['type', 'title'], methods: ['renderBody()'] }
              ],
              relations: ['Content -> ProjectCase', 'ProjectCase -> DiagramCard']
            }
          ]
        }
      ]
    },
    homelab: {
      title: 'Homelab',
      tabs: [
        {
          id: 'network',
          title: 'Network',
          summary: 'A private NordVPN Meshnet links the main PC, SubPC, Raspberry Pi 5, and Raspberry Pi 3B+ so services can communicate without exposing them directly to the public internet.',
          nodes: ['Main PC', 'SubPC', 'Raspberry Pi 5', 'Raspberry Pi 3B+']
        },
        {
          id: 'machines',
          title: 'Machines',
          machines: [
            { name: 'Raspberry Pi 3B+', os: 'Raspbian', specs: ['NAS role', 'Connected to VPN Meshnet'] },
            { name: 'Raspberry Pi 5 8GB', os: 'Raspbian', specs: ['Small NAS', 'Jenkins Server', 'Docker', 'Kubernetes', 'AI Agent (Hermes/Codex)', 'Connected to VPN Meshnet'] },
            { name: 'SubPC', os: 'CachyOS', specs: ['i5-9300H', '16GB RAM', 'GTX 1650 Mobile', 'Ollama server', 'OpenChat', 'Docker', 'Heavier load work', 'Connected to VPN Meshnet'] },
            { name: 'Main PC', os: 'Desktop workstation', specs: ['RTX 4060', '16GB RAM', 'Main interface', 'Connected to VPN Meshnet'] }
          ]
        },
        {
          id: 'services',
          title: 'Services',
          services: [
            { name: 'NAS storage', host: 'Raspberry Pi 3B+ / Pi 5', detail: 'Shared storage and small file-serving duties.' },
            { name: 'Jenkins', host: 'Raspberry Pi 5', detail: 'Automation server for build and maintenance jobs.' },
            { name: 'Docker', host: 'Pi 5 / SubPC', detail: 'Container runtime for service experiments and local apps.' },
            { name: 'Kubernetes', host: 'Raspberry Pi 5', detail: 'Small cluster practice and deployment testing.' },
            { name: 'AI agents', host: 'Raspberry Pi 5', detail: 'Hermes/Codex-style local automation and helper workflows.' },
            { name: 'Ollama / OpenChat', host: 'SubPC', detail: 'Local model serving and heavier interactive workloads.' },
            { name: 'Meshnet access', host: 'All machines', detail: 'Private device-to-device network path for administration.' }
          ]
        }
      ]
    },
    evidence: {
      title: 'Evidence',
      heading: 'Architecture and project diagrams',
      summary: 'A compact board of software-engineering visuals used across the portal: flows, class sketches, sequence diagrams, ERD-style models, component maps, and project-fit comparisons.',
      visuals: [
        {
          type: 'flowchart',
          title: 'Portfolio release flow',
          nodes: [
            { id: '1', label: 'content update' },
            { id: '2', label: 'component render' },
            { id: '3', label: 'vite build' },
            { id: '4', label: 'branch deploy' }
          ],
          edges: ['1 -> 2', '2 -> 3', '3 -> 4']
        },
        {
          type: 'sequence',
          title: 'Giina OCR sequence',
          actors: ['User', 'Electron', 'Worker', 'Overlay'],
          messages: ['User -> Electron: F9', 'Electron -> Worker: image crop', 'Worker -> Electron: OCR lines', 'Electron -> Overlay: readings']
        },
        {
          type: 'classDiagram',
          title: 'NPortal class sketch',
          classes: [
            { name: 'App', fields: ['activeView', 'language'], methods: ['toggleLanguage()'] },
            { name: 'ProjectsView', fields: ['activeProject'], methods: ['renderCaseStudy()'] },
            { name: 'DiagramCard', fields: ['visual'], methods: ['render()'] }
          ],
          relations: ['App -> ProjectsView', 'ProjectsView -> DiagramCard']
        },
        {
          type: 'erd',
          title: 'Laila data model',
          entities: [
            { name: 'SavedLocation', fields: ['id', 'name', 'coordinate', 'radius'] },
            { name: 'TripState', fields: ['phase', 'distance', 'provider'] },
            { name: 'VibrationPattern', fields: ['name', 'timings'] }
          ],
          relations: ['SavedLocation -> TripState', 'TripState -> VibrationPattern']
        },
        {
          type: 'componentMap',
          title: 'View composition',
          groups: [
            { name: 'Navigation', items: ['Sidebar', 'SectionTabs'] },
            { name: 'Pages', items: ['Profile', 'Projects', 'Homelab', 'Evidence'] },
            { name: 'Visuals', items: ['Flowchart', 'Sequence', 'Class', 'ERD'] }
          ]
        },
        {
          type: 'matrix',
          title: 'Project fit',
          columns: ['Japan', 'UX', 'Systems'],
          rows: [
            { label: 'Giina', values: [3, 3, 3] },
            { label: 'Laila', values: [1, 3, 3] },
            { label: 'NPortal', values: [2, 2, 2] },
            { label: 'Homelab', values: [1, 1, 3] }
          ]
        }
      ]
    }
  },
  ja: {
    nav: {
      profile: 'プロフィール',
      projects: 'プロジェクト',
      homelab: 'ホームラボ',
      evidence: '構成図'
    },
    profile: {
      title: 'プロフィール',
      sections: [
        {
          id: 'experience',
          title: '職務経験',
          entries: [
            {
              title: 'ソフトウェア開発者',
              organization: 'Capgemini',
              location: 'リスボン、ポルトガル',
              date: '2024/10 - 現在',
              summary: 'Capgemini の開発チームで、エンタープライズ系プロジェクトとデプロイ関連の開発を担当。',
              highlights: [
                '2024年10月に**インターン**として入社し、2025年1月から**正社員**として継続。',
                '**Java/Spring**、**React Admin**、**Kubernetes/Helm**、**Jenkins**、**Git**、**SIP** 関連システムを使用。',
                'バックエンド、フロントエンド、調査、修正、チーム内の引き継ぎを担当。'
              ],
              tags: ['Java', 'Spring', 'Kubernetes', 'Helm', 'React Admin', 'Jenkins']
            },
            {
              title: 'ソフトウェア開発インターン',
              organization: 'Inetum',
              location: 'リスボン、ポルトガル',
              date: '2024/01 - 2024/07',
              summary: '**COBOL** と **SQL** を使ったソフトウェア開発を担当。',
              highlights: [
                '**COBOL** と **SQL** のソフトウェアを開発。',
                '**COBOL** と **SQL** のトラブルシューティングとテストを実施。'
              ],
              tags: ['COBOL', 'SQL']
            },
            {
              title: '専任テクニカルサポート',
              organization: 'NOS SGPS',
              location: 'リスボン、ポルトガル',
              date: '2019/11 - 2020/01',
              summary: 'BPI向けサポートと**ネットワークトラブルシューティング**を担当。',
              highlights: [
                'BPI向けサポートと**ネットワークトラブルシューティング**。',
                '**Cisco** 技術を使用。'
              ],
              tags: ['サポート', 'ネットワーク', 'Cisco']
            }
          ]
        },
        {
          id: 'studies',
          title: '学歴',
          entries: [
            {
              title: 'コンピュータ工学 学士',
              organization: 'Universidade Autonoma de Lisboa',
              location: 'リスボン、ポルトガル',
              date: '2020/10 - 2023/07',
              summary: '**Computer Science and Engineering** の学士課程。',
              highlights: [
                '**Python**、**Java**、**JavaScript**、**Vue.js**、**MySQL**、**MongoDB**、**Firebase**、**GitHub**、**Heroku**、**AWS**を使用。',
                '**Express.js + MySQL**のWebストア、**Vue.js** Webストア、ソケット通信チャットを作成。'
              ],
              tags: ['コンピュータ工学', 'Python', 'Java', 'JavaScript', 'Vue.js', 'DB']
            },
            {
              title: 'ネットワーク・コンピュータシステム管理 専門課程',
              organization: 'ATEC - Academia de Formacao',
              location: 'パルメラ、ポルトガル',
              date: '2018/09 - 2020/02',
              summary: '**ネットワーク・コンピュータシステム管理**の専門課程。',
              highlights: [
                '**SQL**、**Java**、**C#** のプログラミング。',
                '**Linux**、**Windows**、その他OSの管理。',
                '**Cisco**ネットワーク機器と**Cisco**プロトコルを専門的に学習。'
              ],
              tags: ['ネットワーク', 'Linux', 'Windows', 'Cisco', 'SQL', 'Java', 'C#']
            }
          ]
        },
        {
          id: 'credentials',
          title: '言語・資格',
          levels: [
            { label: 'ポルトガル語', value: 100, detail: '母語' },
            { label: '英語', value: 92, detail: 'C1-C2 実務レベル' },
            { label: '日本語', value: 58, detail: 'JLPT N3 / 会話 B1' },
            { label: 'スペイン語', value: 32, detail: 'A1-A2' },
            { label: 'フランス語', value: 18, detail: 'A1' }
          ],
          certifications: [
            { date: '2023/07', title: '日本語能力試験 JLPT N3', issuer: 'JLPT' },
            { date: '2024/10', title: 'Oracle Certified Java Programmer, Java SE 8 Associate', issuer: 'Oracle' },
            { date: '2024/12', title: 'Professional Scrum Master I', issuer: 'Scrum.org' }
          ]
        },
        {
          id: 'direction',
          title: '自己紹介',
          paragraphs: [
            'Java/Spring、React Admin、Kubernetes、Helm、Jenkins、Git、データベース、Linux/ネットワーク調査の実務経験を持つソフトウェア開発者です。',
            '日本語学習、ローカルファーストなツール、小さな画面向けUI、セルフホスト環境を組み合わせたプロジェクトを中心に作っています。',
            '日本で働くことを目標にしています。ポルトガル語は母語、英語は主な実務言語、日本語は JLPT N3 / 会話レベルです。'
          ]
        }
      ]
    },
    projects: {
      title: 'プロジェクト',
      sections: [
        {
          id: 'giina',
          title: 'Giina',
          objective: 'ゲームや動画の日本語を読むためのローカルOCR・ふりがなオーバーレイ。',
          status: 'デスクトップワークフローと SteamOS ブランチを調整中のプロトタイプ v0.3.0。',
          platforms: 'デスクトップ優先。SteamOS Desktop Mode ブランチを作業中。',
          meta: ['プロトタイプ v0.3.0', 'デスクトップ優先', 'SteamOSブランチ作業中'],
          body: [
            'Giina は、日本語学習向けのローカルファーストなワークフローを形にしたプロジェクトです。選択した画面範囲をキャプチャし、ローカルOCRで読みを抽出し、日本語テキストの上にふりがなを表示します。',
            'デスクトップ側は **Electron** がウィンドウ、透明オーバーレイ、ホットキー、キャプチャ、ログ、IPCを担当します。画面は **React** と **Vite** で表示し、ローカルの **Python** worker が **PaddleOCR**、**fugashi**、**pykakasi**、辞書データで読みを抽出します。',
            '現在のプロトタイプは、ウィンドウ表示またはボーダーレス表示のデスクトップ用途に向いています。排他フルスクリーンは対象外です。SteamOSブランチでは F8 範囲選択、F9 OCR更新、F10終了、小さなステータス表示に整理しています。'
          ],
          description:
            'Giina は選択した画面範囲をキャプチャし、ローカルOCRで読みを抽出し、日本語テキストの上にふりがなを表示します。メイン版に加えて、SteamOS向けに操作を絞ったブランチがあります。',
          highlights: [
            'Python、PaddleOCR、fugashi、pykakasi、辞書データを使うローカルOCRパイプライン。',
            'Electron の透明ウィンドウ、preload bridge、ホットキー、保存済み範囲、ログ診断。',
            'SteamOSブランチでは F8 範囲選択、F9 OCR更新、F10終了、小さなステータス表示に整理。'
          ],
          stackCards: [
            { title: 'Shell', text: 'Electron がウィンドウ、ホットキー、キャプチャ、ログ、IPCを担当。' },
            { title: 'Interface', text: 'React/Vite がオーバーレイ、状態表示、範囲選択を表示。' },
            { title: 'OCR', text: 'Python worker が PaddleOCR と読み抽出をローカルで実行。' },
            { title: 'Language Data', text: 'JMdict/KANJIDIC 系データで読みと辞書情報を補助。' }
          ],
          flow: ['範囲選択', '座標保存', '画像取得', 'OCR worker', '読み抽出', 'overlay表示'],
          strengths: [
            '画像を外部サービスに送らないローカル処理。',
            'ゲーム中に繰り返し使いやすい小さな操作。',
            'SteamOS の制限を明記し、未検証部分を隠していない。'
          ],
          limits: [
            '排他フルスクリーンは非対応。',
            'SteamOS Desktop Mode を最初の対象にしている。',
            'Game Mode の重なり表示は Steam Deck 実機検証が必要。'
          ],
          media: [
            { type: 'image', title: 'Giina control window', src: '/project-media/giina/main.png', alt: 'Giina control window' },
            { type: 'image', title: 'Overlay output', src: '/project-media/giina/overlay-wikipedia.png', alt: 'Giina furigana overlay' },
            { type: 'image', title: 'Area selection', src: '/project-media/giina/area-selector.png', alt: 'Giina area selection' },
            {
              type: 'classDiagram',
              title: 'Class diagram',
              classes: [
                { name: 'OverlayApp', fields: ['windows', 'hotkeys', 'state'], methods: ['capture()', 'broadcast()'] },
                { name: 'CaptureArea', fields: ['x', 'y', 'width', 'height'], methods: ['normalize()', 'persist()'] },
                { name: 'OcrWorker', fields: ['python', 'dictionary'], methods: ['request()', 'parseLines()'] }
              ],
              relations: ['OverlayApp -> CaptureArea', 'OverlayApp -> OcrWorker', 'OcrWorker -> OverlayApp']
            },
            {
              type: 'flowchart',
              title: 'OCR pipeline',
              nodes: [
                { id: '1', label: '画面範囲' },
                { id: '2', label: '画像切り出し' },
                { id: '3', label: 'OCR行' },
                { id: '4', label: '読み抽出' },
                { id: '5', label: 'overlay表示' }
              ],
              edges: ['画面範囲 -> 画像切り出し', '画像切り出し -> OCR行', 'OCR行 -> 読み抽出', '読み抽出 -> overlay表示']
            }
          ]
        },
        {
          id: 'laila',
          title: 'Laila',
          objective: '無音の到着通知に使う Wear OS 目的地アラーム。',
          status: 'セットアップ、保存先、追跡、振動ロジックを含むプロトタイプ v0.3.0。',
          platforms: 'Wear OS 時計またはエミュレータ。',
          meta: ['プロトタイプ v0.3.0', 'Wear OS', '目的地トラッキング'],
          body: [
            'Laila は、音を出しにくい移動中に使う Wear OS アプリです。目的地を選び、到着半径を設定し、追跡を開始すると、目的地の範囲に入った時に時計が振動します。',
            '画面は **Kotlin** と **Jetpack Compose** で作り、小さな時計画面に合わせています。目的地選択には **osmdroid** と **OpenStreetMap**、検索には **Android Geocoder**、位置確認と振動にはフォアグラウンド **TripService** を使います。',
            '保存済み目的地と最近の目的地で繰り返し利用しやすく、GeoMath、TripRules、TrackingCadence を分けて中心ロジックを確認しやすくしています。GPS精度、通知権限、振動、バッテリー動作は Wear OS 実機での検証が必要です。'
          ],
          description:
            'Laila は音を出しにくい移動中に使う小さな時計アプリです。目的地と半径を選び、追跡を開始すると、到着時に振動で知らせます。',
          highlights: [
            'Wear OS Compose UI、地図ピッカー、検索、保存先、最近の目的地、半径設定。',
            'TripService が追跡状態を配信し、TripRules の到着判定で振動を起動。',
            '距離に応じた確認間隔で、遠い時の不要なGPS確認を減らす。'
          ],
          stackCards: [
            { title: 'UI', text: 'Kotlin と Jetpack Compose で時計向けの画面を構成。' },
            { title: 'Map', text: 'osmdroid/OpenStreetMap で目的地と半径を表示。' },
            { title: 'Search', text: 'Android Geocoder で入力した場所を座標に変換。' },
            { title: 'Tracking', text: 'Foreground service が位置確認と振動を担当。' }
          ],
          flow: ['場所選択', '半径設定', 'service開始', '確認間隔調整', '到着判定', '振動'],
          strengths: [
            '小さな時計画面に合う単機能アプリ。',
            'GeoMath、TripRules、TrackingCadence を分離してテストしやすい。',
            '保存済み/最近の目的地で繰り返し利用が速い。'
          ],
          limits: [
            'CLIビルドには Android SDK、Java、Gradle が必要。',
            'GPS、通知権限、振動、バッテリーは実機検証が必要。',
            '主な日本語関連プロジェクトではなく、補助的なモバイル事例。'
          ],
          media: [
            { type: 'image', title: 'Watch setup', src: '/project-media/laila/home.png', alt: 'Laila setup screen' },
            { type: 'image', title: 'Saved destinations', src: '/project-media/laila/saved-destinations.png', alt: 'Laila saved destinations screen' },
            { type: 'image', title: 'Destination picker', src: '/project-media/laila/pick-destination.png', alt: 'Laila destination picker' },
            { type: 'image', title: 'Tracking view', src: '/project-media/laila/tracking.png', alt: 'Laila tracking screen' },
            {
              type: 'sequence',
              title: 'Tracking sequence',
              actors: ['User', 'Compose', 'TripService', 'Vibrator'],
              messages: ['User -> Compose: start', 'Compose -> TripService: destination', 'TripService -> Compose: distance', 'TripService -> Vibrator: arrived']
            },
            {
              type: 'erd',
              title: 'Data sketch',
              entities: [
                { name: 'SavedLocation', fields: ['id', 'name', 'lat', 'lon', 'radius'] },
                { name: 'TripState', fields: ['phase', 'distance', 'provider'] },
                { name: 'TrackingRule', fields: ['radius', 'interval', 'arrived'] }
              ],
              relations: ['SavedLocation -> TripState', 'TripState -> TrackingRule']
            }
          ]
        },
        {
          id: 'nportal',
          title: 'NPortal',
          objective: 'CV、プロジェクト、ホームラボをまとめる二言語ポートフォリオ。',
          status: '公開用ポートフォリオを開発中。',
          platforms: 'ローカル、Docker、Vercel に対応する静的 React/Vite サイト。',
          meta: ['静的 React/Vite サイト', '二言語コンテンツ', 'Docker / Vercel 確認経路'],
          body: [
            'NPortal はこのポートフォリオを支えるサイトです。CV、プロジェクト事例、スクリーンショット、構成図、ホームラボ情報を一つの二言語データモデルにまとめています。',
            'フロントエンドは **React 19**、静的ビルドは **Vite**、表示は通常のCSSで構成しています。`npm run build`、**Docker** プレビュー、Vercel 用ブランチへの反映まで同じ流れで確認できます。',
            'このプロジェクトでは、コンテンツ構造、再利用できる表示部品、二言語対応、ローカル確認からデプロイまでの流れを見せています。制限として、スクリーンショットは静的アセットであり、日本語文は公開前に最終確認した方がよいです。'
          ],
          description:
            'NPortal はこのサイトです。React/Vite で作られ、CV、プロジェクト事例、図、ホームラボ情報を一つの二言語データモデルで管理しています。',
          highlights: [
            'ブラウザ言語検出と手動切替に対応した英語/日本語コンテンツ。',
            'CV行、プロジェクト事例、メディア図、ホームラボタブを再利用コンポーネントで表示。',
            'Vite の静的ビルド、ローカルプレビュー、Docker、Vercel デプロイに対応。'
          ],
          stackCards: [
            { title: 'Frontend', text: 'React 19 が共有 content file から各ページを表示。' },
            { title: 'Build', text: 'Vite が静的bundleを生成し、preview/Docker/Vercelで確認可能。' },
            { title: 'UI', text: 'CVらしい紙面感と、密度のある case study layout を両立。' },
            { title: 'Deploy', text: 'development と vercel ブランチに同じ検証済みビルドを反映。' }
          ],
          flow: ['content編集', 'Vite build', 'preview確認', 'commit', 'development push', 'vercel push'],
          strengths: [
            'ポートフォリオ内容が一箇所にまとまっている。',
            '画像や図を動的な数で追加できる。',
            '同じ図コンポーネントを事例ページとテストページで使える。'
          ],
          limits: [
            'スクリーンショットは静的アセットなので、大きなUI変更後に更新が必要。',
            '日本語文は公開前に自然さをレビューした方がよい。',
            '静的サイトのためCMSや分析バックエンドは含まない。'
          ],
          media: [
            {
              type: 'componentMap',
              title: 'Component map',
              groups: [
                { name: 'Shell', items: ['App', 'Sidebar', 'language state'] },
                { name: 'Views', items: ['Profile', 'Projects', 'Homelab'] },
                { name: 'Data', items: ['content.js', 'project media', 'tabs'] }
              ]
            },
            {
              type: 'flowchart',
              title: 'Release flow',
              nodes: [
                { id: 'A', label: 'prompt' },
                { id: 'B', label: 'views' },
                { id: 'C', label: 'build' },
                { id: 'D', label: 'push' }
              ],
              edges: ['A -> B', 'B -> C', 'C -> D']
            },
            {
              type: 'classDiagram',
              title: 'View model',
              classes: [
                { name: 'Content', fields: ['profile', 'projects'], methods: ['selectLanguage()'] },
                { name: 'ProjectCase', fields: ['status', 'platforms', 'media'], methods: ['renderRail()'] },
                { name: 'DiagramCard', fields: ['type', 'title'], methods: ['renderBody()'] }
              ],
              relations: ['Content -> ProjectCase', 'ProjectCase -> DiagramCard']
            }
          ]
        }
      ]
    },
    homelab: {
      title: 'ホームラボ',
      tabs: [
        {
          id: 'network',
          title: 'ネットワーク',
          summary: 'NordVPN Meshnet のプライベートネットワークで Main PC、SubPC、Raspberry Pi 5、Raspberry Pi 3B+ をつなぎ、外部公開を最小にして通信します。',
          nodes: ['Main PC', 'SubPC', 'Raspberry Pi 5', 'Raspberry Pi 3B+']
        },
        {
          id: 'machines',
          title: 'マシン',
          machines: [
            { name: 'Raspberry Pi 3B+', os: 'Raspbian', specs: ['NAS', 'VPN Meshnet 接続'] },
            { name: 'Raspberry Pi 5 8GB', os: 'Raspbian', specs: ['Small NAS', 'Jenkins Server', 'Docker', 'Kubernetes', 'AI Agent (Hermes/Codex)', 'VPN Meshnet 接続'] },
            { name: 'SubPC', os: 'CachyOS', specs: ['i5-9300H', '16GB RAM', 'GTX 1650 Mobile', 'Ollama server', 'OpenChat', 'Docker', '重い処理', 'VPN Meshnet 接続'] },
            { name: 'Main PC', os: 'Desktop workstation', specs: ['RTX 4060', '16GB RAM', 'Main interface', 'VPN Meshnet 接続'] }
          ]
        },
        {
          id: 'services',
          title: 'サービス',
          services: [
            { name: 'NAS storage', host: 'Raspberry Pi 3B+ / Pi 5', detail: '共有ストレージと小さなファイル提供。' },
            { name: 'Jenkins', host: 'Raspberry Pi 5', detail: 'ビルドやメンテナンス用の自動化サーバー。' },
            { name: 'Docker', host: 'Pi 5 / SubPC', detail: 'ローカルアプリや実験用サービスのコンテナ実行。' },
            { name: 'Kubernetes', host: 'Raspberry Pi 5', detail: '小規模クラスタとデプロイ練習。' },
            { name: 'AI agents', host: 'Raspberry Pi 5', detail: 'Hermes/Codex 系のローカル自動化。' },
            { name: 'Ollama / OpenChat', host: 'SubPC', detail: 'ローカルモデルと重めの対話処理。' },
            { name: 'Meshnet access', host: 'All machines', detail: '管理用のプライベート接続経路。' }
          ]
        }
      ]
    },
    evidence: {
      title: '構成図',
      heading: 'アーキテクチャとプロジェクト図',
      summary: 'ポートフォリオ内で使うソフトウェア構成図の一覧です。フロー、クラス図、シーケンス、ERD風モデル、コンポーネント構成、プロジェクト比較をまとめています。',
      visuals: [
        {
          type: 'flowchart',
          title: 'Portfolio release flow',
          nodes: [
            { id: '1', label: 'content' },
            { id: '2', label: 'render' },
            { id: '3', label: 'build' },
            { id: '4', label: 'deploy' }
          ],
          edges: ['1 -> 2', '2 -> 3', '3 -> 4']
        },
        {
          type: 'sequence',
          title: 'Giina OCR sequence',
          actors: ['User', 'Electron', 'Worker', 'Overlay'],
          messages: ['User -> Electron: F9', 'Electron -> Worker: crop', 'Worker -> Electron: OCR', 'Electron -> Overlay: readings']
        },
        {
          type: 'classDiagram',
          title: 'NPortal class sketch',
          classes: [
            { name: 'App', fields: ['activeView', 'language'], methods: ['toggleLanguage()'] },
            { name: 'ProjectsView', fields: ['activeProject'], methods: ['renderCaseStudy()'] },
            { name: 'DiagramCard', fields: ['visual'], methods: ['render()'] }
          ],
          relations: ['App -> ProjectsView', 'ProjectsView -> DiagramCard']
        },
        {
          type: 'erd',
          title: 'Laila data model',
          entities: [
            { name: 'SavedLocation', fields: ['id', 'name', 'coordinate', 'radius'] },
            { name: 'TripState', fields: ['phase', 'distance', 'provider'] },
            { name: 'VibrationPattern', fields: ['name', 'timings'] }
          ],
          relations: ['SavedLocation -> TripState', 'TripState -> VibrationPattern']
        },
        {
          type: 'componentMap',
          title: 'View composition',
          groups: [
            { name: 'Navigation', items: ['Sidebar', 'SectionTabs'] },
            { name: 'Pages', items: ['Profile', 'Projects', 'Homelab', 'Evidence'] },
            { name: 'Visuals', items: ['Flowchart', 'Sequence', 'Class', 'ERD'] }
          ]
        },
        {
          type: 'matrix',
          title: 'Project fit',
          columns: ['Japan', 'UX', 'Systems'],
          rows: [
            { label: 'Giina', values: [3, 3, 3] },
            { label: 'Laila', values: [1, 3, 3] },
            { label: 'NPortal', values: [2, 2, 2] },
            { label: 'Homelab', values: [1, 1, 3] }
          ]
        }
      ]
    }
  }
};
