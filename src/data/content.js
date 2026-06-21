export const content = {
  en: {
    nav: {
      profile: 'Profile',
      projects: 'Projects',
      homelab: 'Homelab',
      test: 'Test'
    },
    profile: {
      title: 'Profile',
      sections: [
        {
          id: 'experience',
          title: 'Experience',
          intro:
            'Software developer focused on compact tools, local-first workflows, and practical interfaces that can be explained, tested, and maintained.',
          entries: [
            {
              title: 'Software Developer',
              organization: 'Capgemini',
              location: 'Lisbon, Portugal',
              date: '10/2024 - Present',
              summary:
                'Enterprise software work across backend and frontend tasks in a multi-team environment.',
              highlights: [
                'Started as an intern in October 2024 and continued as a full-time software developer from January 2025.',
                'Works with Kubernetes, Helm, Java, Spring, React Admin, Jenkins, Git, and SIP-related systems.',
                'Contributes to delivery work while coordinating between multiple project teams.'
              ],
              tags: ['Java', 'Spring', 'Kubernetes', 'Helm', 'React Admin', 'Jenkins']
            },
            {
              title: 'Software Developer Intern',
              organization: 'Inetum',
              location: 'Lisbon, Portugal',
              date: '01/2024 - 07/2024',
              summary:
                'Maintenance and development work on existing enterprise systems, with database work and validation.',
              highlights: [
                'Developed and maintained COBOL and SQL code.',
                'Troubleshot production-style issues and validated fixes through testing.',
                'Built experience working inside established business systems rather than only greenfield projects.'
              ],
              tags: ['COBOL', 'SQL', 'Testing', 'Troubleshooting']
            },
            {
              title: 'Dedicated Technical Support',
              organization: 'NOS SGPS',
              location: 'Lisbon, Portugal',
              date: '11/2019 - 01/2020',
              summary:
                'Network-focused technical support work with customer-facing investigation and escalation.',
              highlights: [
                'Supported BPI-related technical requests and network troubleshooting.',
                'Worked with Cisco technologies and network support processes.',
                'Built early professional practice in direct technical diagnosis.'
              ],
              tags: ['Technical support', 'Networking', 'Cisco']
            }
          ]
        },
        {
          id: 'studies',
          title: 'Studies',
          intro:
            'Formal software and systems education backed by practical project work in apps, databases, deployment, and networks.',
          entries: [
            {
              title: "Bachelor's Degree, Computer Engineering",
              organization: 'Universidade Autonoma de Lisboa',
              location: 'Lisbon, Portugal',
              date: '10/2020 - 07/2023',
              summary:
                'Computer Engineering degree covering programming, databases, web applications, and cloud/deployment tooling.',
              highlights: [
                'Worked with Python, Java, JavaScript, Vue.js, MySQL, MongoDB, Firebase, GitHub, Heroku, and AWS.',
                'Built academic projects including an Express.js webstore with MySQL, a Vue.js webstore, and a socket-based chat application.',
                'EQF level 6 / QRQ level 6.'
              ],
              tags: ['Computer Engineering', 'Python', 'Java', 'JavaScript', 'Vue.js', 'Databases']
            },
            {
              title: 'Specialist in Network and Computer Systems Management',
              organization: 'ATEC - Academia de Formacao',
              location: 'Palmela, Portugal',
              date: '09/2018 - 02/2020',
              summary:
                'Technical specialization covering programming, operating systems, network administration, and Cisco-oriented networking concepts.',
              highlights: [
                'Studied SQL, Java, C#, Linux, Windows, network management, Cisco equipment, and Cisco protocols.',
                'Built a base across software, systems, and networking before the university degree.',
                'EQF level 5.'
              ],
              tags: ['Networks', 'Linux', 'Windows', 'Cisco', 'SQL', 'Java', 'C#']
            }
          ]
        },
        {
          id: 'credentials',
          title: 'Languages & Certifications',
          intro:
            'Languages and certifications grouped together because both are useful review signals for international software work.',
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
          title: 'Direction',
          intro:
            'I like tools that make a real day-to-day task less annoying: reading Japanese text in games, getting quiet destination reminders, keeping personal infrastructure reliable, and presenting project evidence clearly.',
          cards: [
            {
              title: 'Objective',
              text:
                'Build a career that combines software development, Japanese language interest, practical systems work, and product-minded user interfaces.'
            },
            {
              title: 'Strengths',
              text:
                'Fast learning, troubleshooting, compact UI thinking, clear documentation, and finishing small products end to end.'
            },
            {
              title: 'Working Style',
              text:
                'Prefer direct project evidence, simple stacks, readable modules, honest limits, and deployment paths another developer can repeat.'
            }
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
          description:
            'Giina captures a selected screen area, runs local OCR, extracts readings, and places furigana over detected Japanese text boxes. The main branch presents the full desktop concept, while the SteamOS branch strips the workflow down for Deck controls.',
          highlights: [
            'Local OCR pipeline using Python, PaddleOCR, fugashi, pykakasi, and dictionary data.',
            'Electron overlay architecture with a preload bridge, transparent windows, hotkeys, saved capture areas, and runtime diagnostics.',
            'SteamOS branch replaces the control window with F8 area selection, F9 OCR refresh, F10 quit, and a tiny status strip.'
          ],
          facts: [
            { label: 'Status', value: 'Prototype v0.3.0 with Deck branch hardening' },
            { label: 'Platform', value: 'Desktop first, special SteamOS branch' },
            { label: 'Evidence', value: 'OCR worker, overlay UI, packaging notes, branch-specific docs' }
          ],
          stackCards: [
            { title: 'Shell', text: 'Electron owns windows, hotkeys, capture, logging, and IPC.' },
            { title: 'Interface', text: 'React/Vite renders overlay text, status, and selector states.' },
            { title: 'OCR', text: 'Python worker runs PaddleOCR and reading extraction locally.' },
            { title: 'Language Data', text: 'JMdict/KANJIDIC-backed data supports reading and dictionary output.' }
          ],
          flow: ['Select area', 'Save bounds', 'Capture crop', 'OCR worker', 'Reading parse', 'Overlay render'],
          strengths: [
            'Clear local-first privacy story: captured text stays on the machine.',
            'Small repeated workflow for gaming: select once, refresh when needed.',
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
              title: 'Deck flow',
              nodes: [
                { id: 'F8', label: 'select area' },
                { id: 'F9', label: 'capture saved area' },
                { id: 'OCR', label: 'extract text/readings' },
                { id: 'UI', label: 'draw furigana overlay' }
              ],
              edges: ['F8 -> F9', 'F9 -> OCR', 'OCR -> UI']
            }
          ]
        },
        {
          id: 'laila',
          title: 'Laila',
          objective: 'Wear OS destination alarm for silent arrival reminders.',
          description:
            'Laila is a compact watch utility for trips where audio alerts are inconvenient. Pick a destination, choose an arrival radius, start tracking, and the watch vibrates when the target zone is reached.',
          highlights: [
            'Wear OS Compose UI with map picker, search, saved destinations, recent destinations, and radius controls.',
            'Foreground TripService broadcasts tracking state and triggers vibration when TripRules enters the arrived phase.',
            'Distance-scaled polling reduces unnecessary checks when the user is far from the destination.'
          ],
          facts: [
            { label: 'Status', value: 'Prototype v0.3.0' },
            { label: 'Platform', value: 'Wear OS watch or emulator' },
            { label: 'Evidence', value: 'Compose UI, service logic, pure trip rules, docs' }
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
          description:
            'NPortal is the site you are reading: a React/Vite portfolio that keeps CV content, project case studies, diagrams, and homelab notes in one structured bilingual content model.',
          highlights: [
            'Data-driven English/Japanese content with browser-language detection and manual language toggle.',
            'Reusable CV rows, project case study sections, media diagrams, and homelab tabs.',
            'Static build target that can be previewed locally, served from Docker, and deployed through Vercel.'
          ],
          facts: [
            { label: 'Status', value: 'Active portfolio build' },
            { label: 'Platform', value: 'Static React/Vite site' },
            { label: 'Evidence', value: 'Bilingual data model, reusable views, responsive media rail' }
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
                { name: 'Views', items: ['Profile', 'Projects', 'Homelab', 'Test'] },
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
                { name: 'ProjectCase', fields: ['facts', 'flow', 'media'], methods: ['renderRail()'] },
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
    test: {
      title: 'Test',
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
            { name: 'Pages', items: ['Profile', 'Projects', 'Homelab', 'Test'] },
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
      test: 'テスト'
    },
    profile: {
      title: 'プロフィール',
      sections: [
        {
          id: 'experience',
          title: '職務経験',
          intro:
            '実用的なツール、ローカル中心のワークフロー、保守しやすい小さなUIを重視するソフトウェア開発者です。',
          entries: [
            {
              title: 'ソフトウェア開発者',
              organization: 'Capgemini',
              location: 'リスボン、ポルトガル',
              date: '2024/10 - 現在',
              summary: '複数チームの企業向け開発で、バックエンドとフロントエンドの両方を担当。',
              highlights: [
                '2024年10月にインターンとして入社し、2025年1月から正社員として継続。',
                'Kubernetes、Helm、Java、Spring、React Admin、Jenkins、Git、SIP関連システムを使用。',
                '複数プロジェクトの中で実装とチーム連携を担当。'
              ],
              tags: ['Java', 'Spring', 'Kubernetes', 'Helm', 'React Admin', 'Jenkins']
            },
            {
              title: 'ソフトウェア開発インターン',
              organization: 'Inetum',
              location: 'リスボン、ポルトガル',
              date: '2024/01 - 2024/07',
              summary: '既存の企業システムで保守、開発、データベース作業、検証を担当。',
              highlights: [
                'COBOL と SQL の開発と保守。',
                '問題調査、トラブルシューティング、テストを実施。',
                '既存業務システムを扱う実務経験を取得。'
              ],
              tags: ['COBOL', 'SQL', 'テスト', '調査']
            },
            {
              title: '専任テクニカルサポート',
              organization: 'NOS SGPS',
              location: 'リスボン、ポルトガル',
              date: '2019/11 - 2020/01',
              summary: 'ネットワーク関連の問い合わせ、調査、技術サポートを担当。',
              highlights: [
                'BPI向けサポートとネットワークトラブルシューティング。',
                'Cisco 技術とネットワークサポートの流れを経験。',
                '顧客対応を含む技術調査の初期実務経験。'
              ],
              tags: ['サポート', 'ネットワーク', 'Cisco']
            }
          ]
        },
        {
          id: 'studies',
          title: '学歴',
          intro:
            'ソフトウェア、データベース、デプロイ、ネットワークを、実践的なプロジェクトと一緒に学びました。',
          entries: [
            {
              title: 'コンピュータ工学 学士',
              organization: 'Universidade Autonoma de Lisboa',
              location: 'リスボン、ポルトガル',
              date: '2020/10 - 2023/07',
              summary: 'プログラミング、データベース、Webアプリ、クラウド/デプロイを含む学士課程。',
              highlights: [
                'Python、Java、JavaScript、Vue.js、MySQL、MongoDB、Firebase、GitHub、Heroku、AWSを使用。',
                'Express.js + MySQLのWebストア、Vue.js Webストア、ソケット通信チャットを作成。',
                'EQF レベル6 / QRQ レベル6。'
              ],
              tags: ['コンピュータ工学', 'Python', 'Java', 'JavaScript', 'Vue.js', 'DB']
            },
            {
              title: 'ネットワーク・コンピュータシステム管理 専門課程',
              organization: 'ATEC - Academia de Formacao',
              location: 'パルメラ、ポルトガル',
              date: '2018/09 - 2020/02',
              summary: 'プログラミング、OS管理、ネットワーク管理、Cisco関連技術を学ぶ専門課程。',
              highlights: [
                'SQL、Java、C#、Linux、Windows、ネットワーク管理、Cisco機器とプロトコルを学習。',
                '大学前に、ソフトウェア、システム、ネットワークの基礎を習得。',
                'EQF レベル5。'
              ],
              tags: ['ネットワーク', 'Linux', 'Windows', 'Cisco', 'SQL', 'Java', 'C#']
            }
          ]
        },
        {
          id: 'credentials',
          title: '言語・資格',
          intro: '国際的な開発環境で役立つ言語力と資格をまとめています。',
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
          title: '方向性',
          intro:
            '日本語の読解支援、静かな目的地アラーム、個人インフラ、分かりやすいプロジェクト提示など、日常の問題を小さく解決するツールに興味があります。',
          cards: [
            { title: '目標', text: 'ソフトウェア開発、日本語、システム運用、使いやすいUIを組み合わせたキャリアを作ること。' },
            { title: '強み', text: '学習の速さ、トラブルシューティング、コンパクトなUI、明確なドキュメント、最後まで形にすること。' },
            { title: '進め方', text: '実物のプロジェクト、シンプルな技術、読みやすいモジュール、正直な制限、再現できる手順を重視。' }
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
          description:
            'Giina は選択した画面範囲をキャプチャし、ローカルOCRで読みを抽出し、日本語テキストの上にふりがなを表示します。メイン版に加えて、SteamOS向けに操作を絞ったブランチがあります。',
          highlights: [
            'Python、PaddleOCR、fugashi、pykakasi、辞書データを使うローカルOCRパイプライン。',
            'Electron の透明ウィンドウ、preload bridge、ホットキー、保存済み範囲、ログ診断。',
            'SteamOSブランチでは F8 範囲選択、F9 OCR更新、F10終了、小さなステータス表示に整理。'
          ],
          facts: [
            { label: '状態', value: 'プロトタイプ v0.3.0 / Deck ブランチあり' },
            { label: '対象', value: 'デスクトップ優先、SteamOS専用ブランチ' },
            { label: '根拠', value: 'OCR worker、overlay UI、packaging notes、branch docs' }
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
              title: 'Deck flow',
              nodes: [
                { id: 'F8', label: 'select area' },
                { id: 'F9', label: 'capture' },
                { id: 'OCR', label: 'readings' },
                { id: 'UI', label: 'overlay' }
              ],
              edges: ['F8 -> F9', 'F9 -> OCR', 'OCR -> UI']
            }
          ]
        },
        {
          id: 'laila',
          title: 'Laila',
          objective: '無音の到着通知に使う Wear OS 目的地アラーム。',
          description:
            'Laila は音を出しにくい移動中に使う小さな時計アプリです。目的地と半径を選び、追跡を開始すると、到着時に振動で知らせます。',
          highlights: [
            'Wear OS Compose UI、地図ピッカー、検索、保存先、最近の目的地、半径設定。',
            'TripService が追跡状態を配信し、TripRules の到着判定で振動を起動。',
            '距離に応じた確認間隔で、遠い時の不要なGPS確認を減らす。'
          ],
          facts: [
            { label: '状態', value: 'プロトタイプ v0.3.0' },
            { label: '対象', value: 'Wear OS 時計またはエミュレータ' },
            { label: '根拠', value: 'Compose UI、service logic、pure rules、docs' }
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
          description:
            'NPortal はこのサイトです。React/Vite で作られ、CV、プロジェクト事例、図、ホームラボ情報を一つの二言語データモデルで管理しています。',
          highlights: [
            'ブラウザ言語検出と手動切替に対応した英語/日本語コンテンツ。',
            'CV行、プロジェクト事例、メディア図、ホームラボタブを再利用コンポーネントで表示。',
            'Vite の静的ビルド、ローカルプレビュー、Docker、Vercel デプロイに対応。'
          ],
          facts: [
            { label: '状態', value: '公開用ポートフォリオを開発中' },
            { label: '対象', value: '静的 React/Vite サイト' },
            { label: '根拠', value: '二言語データ、再利用ビュー、レスポンシブ media rail' }
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
                { name: 'Views', items: ['Profile', 'Projects', 'Homelab', 'Test'] },
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
                { name: 'ProjectCase', fields: ['facts', 'flow', 'media'], methods: ['renderRail()'] },
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
    test: {
      title: 'テスト',
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
            { name: 'Pages', items: ['Profile', 'Projects', 'Homelab', 'Test'] },
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
