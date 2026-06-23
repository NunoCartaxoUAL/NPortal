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
          status: 'Prototype v0.3.0 Desktop app with Steam Deck variant.',
          platforms: 'Desktop app with Steam Deck variant.',
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
            { title: 'Electron', text: 'desktop shell, windows, hotkeys, capture, logging, and IPC.' },
            { title: 'React/Vite', text: 'overlay text, status display, and selector state UI.' },
            { title: 'Python/PaddleOCR', text: 'local OCR worker and image text extraction.' },
            { title: 'fugashi/pykakasi', text: 'Japanese reading extraction and dictionary support.' }
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
            }
          ]
        },
        {
          id: 'laila',
          title: 'Laila',
          objective: 'Wear OS destination alarm for silent arrival reminders.',
          status: 'Prototype v0.3.0 for Wear OS.',
          platforms: 'Wear OS.',
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
            { title: 'Kotlin/Compose', text: 'dense Wear OS setup, saved places, and tracking UI.' },
            { title: 'osmdroid/OpenStreetMap', text: 'destination picking and radius display.' },
            { title: 'Android Geocoder', text: 'typed place search and coordinate resolution.' },
            { title: 'TripService', text: 'foreground tracking, distance checks, and vibration.' }
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
            }
          ]
        },
        {
          id: 'nportal',
          title: 'NPortal',
          objective: 'Bilingual portfolio portal for CV, project evidence, and homelab context.',
          status: 'Under development.',
          platforms: 'Web, deployed in Docker or Vercel.',
          meta: ['Static React/Vite site', 'Bilingual content', 'Docker and Vercel preview path'],
          body: [
            'NPortal is the portfolio system behind this site. It keeps CV content, project case studies, screenshots, and homelab notes in one bilingual content model instead of spreading the same information through separate static pages.',
            'The frontend uses **React 19**, reusable view components, **Vite** for static builds, and plain CSS for a restrained CV/paper visual language. The same branch can be checked with `npm run build`, reviewed through **Docker**, and deployed through the Vercel branch.',
            'The project demonstrates content architecture, presentation discipline, bilingual structure, and local deployment workflow. Its limits are deliberate: screenshots are static assets, Japanese copy needs a final native-level polish pass, and there is no CMS or analytics backend.'
          ],
          description:
            'NPortal is the site you are reading: a React/Vite portfolio that keeps CV content, project case studies, screenshots, and homelab notes in one structured bilingual content model.',
          highlights: [
            'Data-driven English/Japanese content with browser-language detection and manual language toggle.',
            'Reusable CV rows, project case study sections, screenshot rails, and homelab tabs.',
            'Static build target that can be previewed locally, served from Docker, and deployed through Vercel.'
          ],
          stackCards: [
            { title: 'React 19', text: 'view rendering from the shared bilingual content model.' },
            { title: 'Vite', text: 'static build output for preview, Docker, and Vercel.' },
            { title: 'CSS', text: 'notebook-like CV layout and compact case-study pages.' },
            { title: 'Docker/Vercel', text: 'local production review and deploy targets.' }
          ],
          flow: ['Edit content', 'Build Vite', 'Preview site', 'Commit changes', 'Push development', 'Push vercel'],
          strengths: [
            'Portfolio content stays centralized and easy to revise.',
            'Project pages can accept a dynamic number of screenshots.',
            'The same content model supports CV, projects, homelab notes, and test pages.'
          ],
          limits: [
            'Screenshots are static assets and should be refreshed when the layout changes materially.',
            'Japanese copy is concise and should be reviewed by a fluent speaker before employer use.',
            'The site is intentionally static; no backend analytics or CMS are included.'
          ],
          media: []
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
      heading: 'Layout test area',
      summary: 'Temporary page for checking spacing, typography, and future visual experiments without showing unfinished work.',
      visuals: []
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
          entries: [
            {
              title: 'ソフトウェアエンジニア',
              organization: 'Capgemini',
              location: 'リスボン、ポルトガル',
              date: '2024/10 - 現在',
              summary: 'Capgemini のエンジニアリングチームで、エンタープライズ向け案件とデプロイ関連の開発に携わっています。',
              highlights: [
                '2024年10月に**インターン**として入社し、2025年1月から**正社員のソフトウェア開発者**として勤務。',
                '**Java/Spring** サービス、**React Admin** 画面、**Kubernetes/Helm**、**Jenkins** パイプライン、**Git** ワークフロー、**SIP** 関連システムに対応。',
                '実装、調査、修正、チーム内引き継ぎまで、バックエンドとフロントエンドの両方を担当。'
              ],
              tags: ['Java', 'Spring', 'Kubernetes', 'Helm', 'React Admin', 'Jenkins']
            },
            {
              title: 'ソフトウェア開発インターン',
              organization: 'Inetum',
              location: 'リスボン、ポルトガル',
              date: '2024/01 - 2024/07',
              summary: '**COBOL** と **SQL** を用いた業務システム開発を担当。',
              highlights: [
                '**COBOL** と **SQL** による開発作業を実施。',
                '変更内容の調査、トラブルシューティング、テストを担当。'
              ],
              tags: ['COBOL', 'SQL']
            },
            {
              title: '専任テクニカルサポート担当',
              organization: 'NOS SGPS',
              location: 'リスボン、ポルトガル',
              date: '2019/11 - 2020/01',
              summary: 'BPI向けの専任サポートとして、問い合わせ対応と**ネットワークトラブルシューティング**を担当。',
              highlights: [
                'BPI関連の依頼対応と**ネットワークトラブルシューティング**を実施。',
                '**Cisco** 機器とネットワーク技術を使用。'
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
              title: 'コンピュータ工学学士',
              organization: 'Universidade Autonoma de Lisboa',
              location: 'リスボン、ポルトガル',
              date: '2020/10 - 2023/07',
              summary: '**コンピュータサイエンスとソフトウェア工学**を中心に学んだ学士課程。',
              highlights: [
                '**Python**、**Java**、**JavaScript**、**Vue.js**、**MySQL**、**MongoDB**、**Firebase**、**GitHub**、**Heroku**、**AWS**を使用。',
                '**Express.js + MySQL** のWebストア、**Vue.js** Webストア、ソケット通信チャットを作成。'
              ],
              tags: ['コンピュータ工学', 'Python', 'Java', 'JavaScript', 'Vue.js', 'DB']
            },
            {
              title: 'ネットワーク・コンピュータシステム管理 専門課程',
              organization: 'ATEC - Academia de Formacao',
              location: 'パルメラ、ポルトガル',
              date: '2018/09 - 2020/02',
              summary: '**ネットワークとコンピュータシステム管理**を学ぶ専門課程。',
              highlights: [
                '**SQL**、**Java**、**C#** のプログラミング。',
                '**Linux**、**Windows**、その他OSの管理。',
                '**Cisco** ネットワーク機器とネットワークプロトコルを専門的に学習。'
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
            { label: '日本語', value: 58, detail: 'JLPT N3 / 日常会話レベル' },
            { label: 'スペイン語', value: 32, detail: 'A1-A2' },
            { label: 'フランス語', value: 18, detail: 'A1' }
          ],
          certifications: [
            { date: '2023/07', title: '日本語能力試験（JLPT）N3', issuer: 'JLPT' },
            { date: '2024/10', title: 'Oracle Certified Java Programmer, Java SE 8 Associate', issuer: 'Oracle' },
            { date: '2024/12', title: 'Professional Scrum Master I', issuer: 'Scrum.org' }
          ]
        },
        {
          id: 'direction',
          title: '自己紹介',
          paragraphs: [
            'Java/Spring、React Admin、Kubernetes、Helm、Jenkins、Git、データベース、Linux/ネットワークの調査・運用に実務経験を持つソフトウェア開発者です。',
            '日本語学習、ローカルファーストなツール、小型画面向けUI、セルフホスト環境を組み合わせたプロジェクトを中心に開発しています。',
            '日本で働くことを目標に、ポルトガル語を母語、英語を主な実務言語、日本語を JLPT N3 / 日常会話レベルとして使っています。'
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
          objective: 'ゲームや動画内の日本語を読むためのローカルOCR・ふりがなオーバーレイ。',
          status: 'プロトタイプ v0.3.0。デスクトップアプリで、Steam Deck 向けブランチあり。',
          platforms: 'デスクトップアプリ、Steam Deck 版。',
          meta: ['プロトタイプ v0.3.0', 'デスクトップ優先', 'SteamOSブランチ作業中'],
          body: [
            'Giina は、日本語学習向けのローカルファーストな読解支援ワークフローを形にしたプロジェクトです。選択した画面範囲をキャプチャし、端末内のOCRで読みを抽出して、日本語テキスト上にふりがなを重ねて表示します。',
            'デスクトップ側では **Electron** がウィンドウ管理、透明オーバーレイ、ホットキー、キャプチャ、ログ、IPCを担います。UI は **React/Vite** で構成し、ローカルの **Python** ワーカーが **PaddleOCR**、**fugashi**、**pykakasi**、辞書データを使って読みを抽出します。',
            '現在のプロトタイプは、ウィンドウ表示またはボーダーレス表示のデスクトップ用途に向いています。排他フルスクリーンは対象外です。SteamOSブランチでは、F8 範囲選択、F9 OCR更新、F10 終了、小さなステータス表示に操作を絞っています。'
          ],
          description:
            'Giina は選択した画面範囲をキャプチャし、端末内のOCRで読みを抽出して、日本語テキスト上にふりがなを表示します。メイン版に加えて、SteamOS向けに操作を絞ったブランチがあります。',
          highlights: [
            'Python、PaddleOCR、fugashi、pykakasi、辞書データによるローカルOCRパイプライン。',
            'Electron の透明ウィンドウ、preload bridge、ホットキー、保存済み範囲、ログ診断。',
            'SteamOSブランチでは F8 範囲選択、F9 OCR更新、F10 終了、小さなステータス表示に整理。'
          ],
          stackCards: [
            { title: 'Electron', text: 'ウィンドウ、ホットキー、キャプチャ、ログ、IPC。' },
            { title: 'React/Vite', text: 'オーバーレイ、状態表示、範囲選択UI。' },
            { title: 'Python/PaddleOCR', text: 'ローカルOCRワーカーと画像内テキスト抽出。' },
            { title: 'fugashi/pykakasi', text: '日本語の読み抽出と辞書補助。' }
          ],
          flow: ['範囲選択', '座標保存', '画像取得', 'OCRワーカー', '読み抽出', 'オーバーレイ表示'],
          strengths: [
            '画像やテキストを外部サービスに送らないローカル処理。',
            'ゲーム中に繰り返し使いやすい小さな操作。',
            'SteamOS の制限を明記し、未検証部分を隠していない。'
          ],
          limits: [
            '排他フルスクリーンは非対応。',
            'SteamOS Desktop Mode を最初の対象にしている。',
            'Game Mode のオーバーレイ表示は Steam Deck 実機検証が必要。'
          ],
          media: [
            { type: 'image', title: 'Giina control window', src: '/project-media/giina/main.png', alt: 'Giina control window' },
            { type: 'image', title: 'Overlay output', src: '/project-media/giina/overlay-wikipedia.png', alt: 'Giina furigana overlay' },
            { type: 'image', title: 'Area selection', src: '/project-media/giina/area-selector.png', alt: 'Giina area selection' }
          ]
        },
        {
          id: 'laila',
          title: 'Laila',
          objective: '音を出せない移動中のための Wear OS 目的地アラーム。',
          status: 'Wear OS 向けプロトタイプ v0.3.0。',
          platforms: 'Wear OS。',
          meta: ['プロトタイプ v0.3.0', 'Wear OS', '目的地トラッキング'],
          body: [
            'Laila は、公共交通機関など音を出しにくい場面で使う Wear OS アプリです。目的地を選び、到着半径を設定し、追跡を開始すると、目的地の範囲に入った時に時計が振動します。',
            'UI は **Kotlin** と **Jetpack Compose** で構成し、小さな時計画面に合わせています。目的地選択には **osmdroid** と **OpenStreetMap**、検索には **Android Geocoder**、位置確認と振動にはフォアグラウンド **TripService** を使います。',
            '保存済み目的地と最近の目的地で繰り返し利用しやすくし、GeoMath、TripRules、TrackingCadence を分離して中心ロジックを確認しやすくしています。GPS精度、通知権限、振動、バッテリー動作は Wear OS 実機での検証が必要です。'
          ],
          description:
            'Laila は音を出しにくい移動中に使う小さな時計アプリです。目的地と半径を選んで追跡を開始すると、到着時に振動で知らせます。',
          highlights: [
            'Wear OS Compose UI、地図ピッカー、検索、保存済み目的地、最近の目的地、半径設定。',
            'TripService が追跡状態を配信し、TripRules の到着判定で振動を起動。',
            '距離に応じた確認間隔で、遠い時の不要なGPS確認を減らす。'
          ],
          stackCards: [
            { title: 'Kotlin/Compose', text: 'Wear OS 向けの設定、保存済み目的地、追跡画面。' },
            { title: 'osmdroid/OpenStreetMap', text: '目的地選択と半径表示。' },
            { title: 'Android Geocoder', text: '場所検索と座標変換。' },
            { title: 'TripService', text: 'フォアグラウンド追跡、距離確認、振動。' }
          ],
          flow: ['場所選択', '半径設定', 'サービス開始', '確認間隔調整', '到着判定', '振動'],
          strengths: [
            '小さな時計画面でも使いやすい単機能アプリ。',
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
            { type: 'image', title: 'Tracking view', src: '/project-media/laila/tracking.png', alt: 'Laila tracking screen' }
          ]
        },
        {
          id: 'nportal',
          title: 'NPortal',
          objective: '履歴書、プロジェクト事例、ホームラボをまとめる二言語ポートフォリオ。',
          status: '開発中。',
          platforms: 'Web。Docker または Vercel にデプロイ。',
          meta: ['静的 React/Vite サイト', '二言語コンテンツ', 'Docker / Vercel 確認経路'],
          body: [
            'NPortal はこのポートフォリオサイトの基盤です。履歴書、プロジェクト事例、スクリーンショット、ホームラボ情報を一つの二言語データモデルにまとめています。',
            'フロントエンドは **React 19**、静的ビルドは **Vite**、表示は素のCSSで構成しています。`npm run build`、**Docker** プレビュー、Vercel 用ブランチへの反映まで同じ流れで確認できます。',
            'このプロジェクトでは、コンテンツ構造、再利用可能な表示部品、二言語対応、ローカル確認からデプロイまでの流れを見せています。制限として、スクリーンショットは静的アセットであり、日本語文は公開前に最終確認しておく方が安全です。'
          ],
          description:
            'NPortal はこのサイト自体です。React/Vite で作られ、履歴書、プロジェクト事例、スクリーンショット、ホームラボ情報を一つの二言語データモデルで管理しています。',
          highlights: [
            'ブラウザ言語検出と手動切替に対応した英語/日本語コンテンツ。',
            '履歴書の行、プロジェクト事例、スクリーンショット、ホームラボタブを再利用コンポーネントで表示。',
            'Vite の静的ビルド、ローカルプレビュー、Docker、Vercel デプロイに対応。'
          ],
          stackCards: [
            { title: 'React 19', text: '共有二言語コンテンツから各ページを表示。' },
            { title: 'Vite', text: 'プレビュー、Docker、Vercel 向けの静的ビルド。' },
            { title: 'CSS', text: 'ノート風の履歴書画面とコンパクトな事例ページ。' },
            { title: 'Docker/Vercel', text: 'ローカル本番確認とデプロイ先。' }
          ],
          flow: ['コンテンツ編集', 'Vite build', 'プレビュー確認', 'commit', 'development push', 'vercel push'],
          strengths: [
            'ポートフォリオ内容が一箇所にまとまっている。',
            'スクリーンショットを動的な数で追加できる。',
            '同じコンテンツモデルで履歴書、プロジェクト、ホームラボ、テストページを管理できる。'
          ],
          limits: [
            'スクリーンショットは静的アセットなので、大きなUI変更後に更新が必要。',
            '日本語文は公開前に自然さを確認した方がよい。',
            '静的サイトのためCMSや分析バックエンドは含まない。'
          ],
          media: []
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
      heading: '表示テスト',
      summary: '未完成のチャートを表示せず、余白や文字組み、今後の表示実験を確認するための一時ページです。',
      visuals: []
    }
  }
};
