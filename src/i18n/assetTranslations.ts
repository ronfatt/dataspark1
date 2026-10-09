export interface LocalizedResourceContent {
  title: string;
  description: string;
  subCategory: string;
  fileFormatName?: string;
}

export const ASSET_TRANSLATIONS: Record<string, Record<string, LocalizedResourceContent>> = {
  // 1. 中文简体 (Default)
  '中文简体': {
    'res-cw-01': {
      title: 'SPARK ONE 项目介绍标准讲课课件 v2.3',
      subCategory: '项目介绍',
      description: '官方金牌讲师标准演讲 PDF 高清轻量版，深入阐述 SparkOne 商业模式、全球生态布局与产品矩阵。',
      fileFormatName: 'PDF 高清版'
    },
    'res-cw-02': {
      title: 'SPARK 全球标准化讲课课件 (精炼速查版)',
      subCategory: '项目介绍',
      description: '官方标准化讲课精编课件，提炼业务要点与核心逻辑，轻量化极速下载。',
      fileFormatName: 'PDF 精编版'
    },
    'res-cw-03': {
      title: 'SPARK 全球数字财富深度解析白皮书',
      subCategory: '金融简介',
      description: '宏观数字经济演变与 Web3 财富配置趋势白皮书，官方研究团队重磅出品。',
      fileFormatName: 'PDF 白皮书'
    },
    'res-mkt-00': {
      title: 'SPARK 会员晋升与全球奖金激励计划 (8国语言官方宣发物料)',
      subCategory: '各种海报',
      description: '官方权威发布会员晋升梯队与全球奖金返佣制度图鉴，覆盖大中华、欧美及东南亚8大核心语言市场。',
      fileFormatName: 'PNG / JPG'
    },
    'res-mkt-01': {
      title: 'SPARK 会员成长与全球权益体系宣发长图',
      subCategory: '长图',
      description: '全景解析会员成长梯队、返佣激励、社群赋能及VIP生态特权，适合社群高频宣发。',
      fileFormatName: 'JPG 高清长图'
    },
    'res-mkt-02': {
      title: 'SPARK 全球品牌活动海报系列 - EN-01 (Brand Horizon)',
      subCategory: '各种海报',
      description: '极简高端黑紫金融科技主视觉海报，4K超高分辨率，适合线下峰会大屏与灯箱。',
      fileFormatName: 'JPG 印刷级'
    },
    'res-mkt-03': {
      title: 'SPARK 全球官方社媒推广海报 - EN-02 (Next Generation)',
      subCategory: '各种海报',
      description: '聚焦“智能金融 • 卓越明天”核心价值观的品牌理念海报。',
      fileFormatName: 'JPG 印刷级'
    },
    'res-mkt-04': {
      title: 'SPARK 尊享全球峰会海报 - EN-03 (Union Power)',
      subCategory: '各种海报',
      description: '高端私享会与区域城市发布会定制竖版视觉海报。',
      fileFormatName: 'JPG 印刷级'
    },
    'res-mat-01': {
      title: 'SPARK 3D立体金属徽标 (官方高光倒角立体标)',
      subCategory: 'Logo',
      description: '全新官方 3D 棱面流光金属立体标，曜石深黑底色配合高光倒角与电光紫辉，专用于权威展示。',
      fileFormatName: 'PNG / JPG'
    },
    'res-mat-02': {
      title: 'SPARK 曜黑紫金金属立体标 (透明底 PNG)',
      subCategory: 'Logo',
      description: '透明底高清大图，深邃黑曜石搭配紫罗兰金属质感与边缘倒角反光，可直接拖入任意设计背景。',
      fileFormatName: 'PNG 透明底'
    },
    'res-mat-03': {
      title: 'SPARK 梦幻紫晶流光徽标 (Web3 大屏标)',
      subCategory: 'Logo',
      description: '水晶折射质感与紫色光晕渲染，专用于高端数字大屏与 Web3 界面展示。',
      fileFormatName: 'PNG 透明底'
    },
    'res-mat-04': {
      title: 'SPARK 奢华黑金与电镀黄金 Logo 合集包',
      subCategory: 'Logo',
      description: '黄金电镀与尊贵黑金两款定制质感 Logo，满足高净值用户俱乐部及高端峰会场景。',
      fileFormatName: 'ZIP 合集包'
    },
    'res-mat-05': {
      title: 'SPARK 官方多语言标准易拉宝展架 (80x200cm 印刷套包)',
      subCategory: '易拉宝',
      description: '标准 80x200cm 易拉宝印刷高分辨率矢量文件，支持多语言快速切换与即刻出图。',
      fileFormatName: 'PNG 高清印刷'
    },
    'res-mat-06': {
      title: '美国 FinCEN MSB 金融合规牌照官方权威备案件',
      subCategory: '合规资质',
      description: '美国财政部金融犯罪执法网络颁发 MSB 牌照官方扫描高清件，权威合规背书。',
      fileFormatName: 'PDF 盖章件'
    },
    'res-mat-07': {
      title: 'SPARK UNION CAPITAL 美国政府公司注册执照',
      subCategory: '合规资质',
      description: 'SPARK UNION CAPITAL INC. 美国科罗拉多州政府核发官方企业营业执照证明文件。',
      fileFormatName: 'PDF 官方执照'
    },
    'res-vid-01': {
      title: 'SPARK 全球官方品牌形象大片 (1080P Cinema Promo)',
      subCategory: '项目宣传片',
      description: '电影级品牌宣传大片，展示 Spark 核心科技、量化实力与全球宏伟布局，配备四语母语原声。',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-02': {
      title: 'SPARK 3D 动态 LOGO 演绎光效片 (4K/60FPS Cinema Intro)',
      subCategory: '3D动效片',
      description: '3D 金属粒子聚合与暗夜电光划破黑曜石的震撼片头，适合发布会与自制视频。',
      fileFormatName: 'MP4 4K'
    },
    'res-vid-03': {
      title: '越南孤儿与残障儿童温暖关爱现场纪实大片',
      subCategory: '公益片',
      description: 'SparkOne 越南慈善基金现场纪实纪录短片，感动记录物资发放与爱心互动瞬间。',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-04': {
      title: '泰国穆斯林地区孤儿院儿童公益行动纪实短片',
      subCategory: '公益片',
      description: '走进泰国穆斯林地区孤儿机构，完整记录生活物资赞助与节日关怀现场。',
      fileFormatName: 'MOV 1080P'
    },
    'res-vid-05': {
      title: '马来西亚关爱老人爱心公益活动纪实集锦',
      subCategory: '活动片',
      description: '走访马来西亚老人安养院，志愿者与老人暖心长谈、送上营养品现场影像。',
      fileFormatName: 'MOV 1080P'
    },
    'res-album-01': {
      title: '西非尼日利亚爱心助学校园捐建全套现场纪实相册',
      subCategory: '西非学校公益',
      description: '走进尼日利亚偏远小学，捐赠课桌椅、学习用具及生活物资，包含 114 张现场单反高清实拍原图。',
      fileFormatName: 'ZIP 相册包'
    },
    'res-album-02': {
      title: '越南政府部门及医院爱心食物捐赠现场相册',
      subCategory: '越南食物捐赠',
      description: '联合公立医院与政府民政部门，发放爱心食物与营养物资，包含 92 张现场纪实。',
      fileFormatName: 'ZIP 相册包'
    },
    'res-album-03': {
      title: '泰国穆斯林地区孤儿院儿童爱心关怀现场相册',
      subCategory: '泰国孤儿助学',
      description: '探访穆斯林社区孤儿院，为孩子们送去书包与成长陪伴，包含 87 张温情纪实原图。',
      fileFormatName: 'ZIP 相册包'
    },
    'res-album-04': {
      title: '马来西亚关爱孤寡老人安养院走访纪实相册',
      subCategory: '马来西亚老人院',
      description: '走访马来西亚老人安养中心，赠送日常营养生活包，包含 82 张现场原片。',
      fileFormatName: 'ZIP 相册包'
    },
    'res-album-05': {
      title: '越南孤儿与残障儿童温暖关爱行动纪实相册',
      subCategory: '越南助残助孤',
      description: '关怀残疾与贫困特殊儿童，包含 66 张现场康复辅具赠送照片。',
      fileFormatName: 'ZIP 相册包'
    },
    'res-album-06': {
      title: '马来西亚初心弱势家园爱心走访相册',
      subCategory: '马来西亚弱势家园',
      description: '慰问弱势儿童家园，包含 21 张温馨现场合影与捐赠证明。',
      fileFormatName: 'ZIP 相册包'
    }
  },

  // 2. 中文繁體 (Traditional Chinese)
  '中文繁体': {
    'res-cw-01': {
      title: 'SPARK ONE 項目介紹標準講課課件 v2.3',
      subCategory: '項目介紹',
      description: '官方金牌講師標準演講 PDF 高清輕量版，深入闡述 SparkOne 商業模式、全球生態佈局與產品矩陣。',
      fileFormatName: 'PDF 高清版'
    },
    'res-cw-02': {
      title: 'SPARK 全球標準化講課課件 (精煉速查版)',
      subCategory: '項目介紹',
      description: '官方標準化講課精編課件，提煉業務要點與核心邏輯，輕量化極速下載。',
      fileFormatName: 'PDF 精編版'
    },
    'res-cw-03': {
      title: 'SPARK 全球數字財富深度解析白皮書',
      subCategory: '金融簡介',
      description: '宏觀數字經濟演變與 Web3 財富配置趨勢白皮書，官方研究團隊重磅出品。',
      fileFormatName: 'PDF 白皮書'
    },
    'res-mkt-00': {
      title: 'SPARK 會員晉升與全球獎金激勵計劃 (8國語言官方宣發物料)',
      subCategory: '各種海報',
      description: '官方權威發布會員晉升梯隊與全球獎金返傭制度圖鑑，覆蓋大中華、歐美及東南亞8大核心語言市場。',
      fileFormatName: 'PNG / JPG'
    },
    'res-mkt-01': {
      title: 'SPARK 會員成長與全球權益體系宣發長圖',
      subCategory: '長圖',
      description: '全景解析會員成長梯隊、返傭激勵、社群賦能及VIP生態特權，適合社群高頻宣發。',
      fileFormatName: 'JPG 高清長圖'
    },
    'res-mkt-02': {
      title: 'SPARK 全球品牌活動海報系列 - EN-01 (Brand Horizon)',
      subCategory: '各種海報',
      description: '極簡高端黑紫金融科技主視覺海報，4K超高分辨率，適合線下峰會大屏與燈箱。',
      fileFormatName: 'JPG 印刷級'
    },
    'res-mkt-03': {
      title: 'SPARK 全球官方社媒推廣海報 - EN-02 (Next Generation)',
      subCategory: '各種海報',
      description: '聚焦「智能金融 • 卓越明天」核心價值觀的品牌理念海報。',
      fileFormatName: 'JPG 印刷級'
    },
    'res-mkt-04': {
      title: 'SPARK 尊享全球峰會海報 - EN-03 (Union Power)',
      subCategory: '各種海報',
      description: '高端私享會與區域城市發布會定制豎版視覺海報。',
      fileFormatName: 'JPG 印刷級'
    },
    'res-mat-01': {
      title: 'SPARK 3D立體金屬徽標 (官方高光倒角立體標)',
      subCategory: 'Logo',
      description: '全新官方 3D 棱面流光金屬立體標，曜石深黑底色配合高光倒角與電光紫輝，專用於權威展示。',
      fileFormatName: 'PNG / JPG'
    },
    'res-mat-02': {
      title: 'SPARK 曜黑紫金金屬立體標 (透明底 PNG)',
      subCategory: 'Logo',
      description: '透明底高清大圖，深邃黑曜石搭配紫羅蘭金屬質感與邊緣倒角反光，可直接拖入任意設計背景。',
      fileFormatName: 'PNG 透明底'
    },
    'res-mat-03': {
      title: 'SPARK 夢幻紫晶流光徽標 (Web3 大屏標)',
      subCategory: 'Logo',
      description: '水晶折射質感與紫色光暈渲染，專用於高端數字大屏與 Web3 界面展示。',
      fileFormatName: 'PNG 透明底'
    },
    'res-mat-04': {
      title: 'SPARK 奢華黑金與電鍍黃金 Logo 合集包',
      subCategory: 'Logo',
      description: '黃金電鍍與尊貴黑金兩款定制質感 Logo，滿足高淨值用戶俱樂部及高端峰會場景。',
      fileFormatName: 'ZIP 合集包'
    },
    'res-mat-05': {
      title: 'SPARK 官方多語言標準易拉寶展架 (80x200cm 印刷套包)',
      subCategory: '易拉寶',
      description: '標準 80x200cm 易拉寶印刷高分辨率矢量文件，支持多語言快速切換與即刻出圖。',
      fileFormatName: 'PNG 高清印刷'
    },
    'res-mat-06': {
      title: '美國 FinCEN MSB 金融合規牌照官方權威備案件',
      subCategory: '合規資質',
      description: '美國財政部金融犯罪執法網絡頒發 MSB 牌照官方掃描高清件，權威合規背書。',
      fileFormatName: 'PDF 蓋章件'
    },
    'res-mat-07': {
      title: 'SPARK UNION CAPITAL 美國政府公司註冊執照',
      subCategory: '合規資質',
      description: 'SPARK UNION CAPITAL INC. 美國科羅拉多州政府核發官方企業營業執照證明文件。',
      fileFormatName: 'PDF 官方執照'
    },
    'res-vid-01': {
      title: 'SPARK 全球官方品牌形象大片 (1080P Cinema Promo)',
      subCategory: '項目宣傳片',
      description: '電影級品牌宣傳大片，展示 Spark 核心科技、量化實力與全球宏偉佈局，配備四語母語原聲。',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-02': {
      title: 'SPARK 3D 動態 LOGO 演繹光效片 (4K/60FPS Cinema Intro)',
      subCategory: '3D動效片',
      description: '3D 金屬粒子聚合與暗夜電光劃破黑曜石的震撼片頭，適合發布會與自製視頻。',
      fileFormatName: 'MP4 4K'
    },
    'res-vid-03': {
      title: '越南孤兒與殘障兒童溫暖關愛現場紀實大片',
      subCategory: '公益片',
      description: 'SparkOne 越南慈善基金現場紀實紀錄短片，感動記錄物資發放與愛心互動瞬間。',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-04': {
      title: '泰國穆斯林地區孤兒院兒童公益行動紀實短片',
      subCategory: '公益片',
      description: '走進泰國穆斯林地區孤兒機構，完整記錄生活物資贊助與節日關懷現場。',
      fileFormatName: 'MOV 1080P'
    },
    'res-vid-05': {
      title: '馬來西亞關愛老人愛心公益活動紀實集錦',
      subCategory: '活動片',
      description: '走訪馬來西亞老人安養院，志願者與老人暖心長談、送上營養品現場影像。',
      fileFormatName: 'MOV 1080P'
    },
    'res-album-01': {
      title: '西非尼日利亞愛心助學校園捐建全套現場紀實相冊',
      subCategory: '西非學校公益',
      description: '走進尼日利亞偏遠小學，捐贈課桌椅、學習用具及生活物資，包含 114 張現場單反高清實拍原圖。',
      fileFormatName: 'ZIP 相冊包'
    },
    'res-album-02': {
      title: '越南政府部門及醫院愛心食物捐贈現場相冊',
      subCategory: '越南食物捐贈',
      description: '聯合公立醫院與政府民政部門，發放愛心食物與營養物資，包含 92 張現場紀實。',
      fileFormatName: 'ZIP 相冊包'
    },
    'res-album-03': {
      title: '泰國穆斯林地區孤兒院兒童愛心關懷現場相冊',
      subCategory: '泰國孤兒助學',
      description: '探訪穆斯林社區孤兒院，為孩子們送去書包與成長陪伴，包含 87 張溫情紀實原圖。',
      fileFormatName: 'ZIP 相冊包'
    },
    'res-album-04': {
      title: '馬來西亞關愛孤寡老人安養院走訪紀實相冊',
      subCategory: '馬來西亞老人院',
      description: '走訪馬來西亞老人安養中心，贈送日常營養生活包，包含 82 張現場原片。',
      fileFormatName: 'ZIP 相冊包'
    },
    'res-album-05': {
      title: '越南孤兒與殘障兒童溫暖關愛行動紀實相冊',
      subCategory: '越南助殘助孤',
      description: '關懷殘疾與貧困特殊兒童，包含 66 張現場康復輔具贈送照片。',
      fileFormatName: 'ZIP 相冊包'
    },
    'res-album-06': {
      title: '馬來西亞初心弱勢家園愛心走訪相冊',
      subCategory: '馬來西亞弱勢家園',
      description: '慰問弱勢兒童家園，包含 21 張溫馨現場合影與捐贈證明。',
      fileFormatName: 'ZIP 相冊包'
    }
  },

  // 3. 英文 (English)
  '英文': {
    'res-cw-01': {
      title: 'SPARK ONE Standard Presentation Deck v2.3',
      subCategory: 'Pitch Deck',
      description: 'Official master speaker PDF deck. Thorough breakdown of SparkOne business model, global ecosystem, and financial matrix.',
      fileFormatName: 'PDF Ultra-HD'
    },
    'res-cw-02': {
      title: 'SPARK Standard Presentation Deck (Compact Fast-Ref)',
      subCategory: 'Pitch Deck',
      description: 'Official condensed lecture presentation focusing on key business points with ultra-fast download size.',
      fileFormatName: 'PDF Compact'
    },
    'res-cw-03': {
      title: 'SPARK Global Digital Wealth Architecture Whitepaper',
      subCategory: 'Finance Overview',
      description: 'Whitepaper examining macro digital economy shifts and Web3 wealth allocation strategies by the research team.',
      fileFormatName: 'PDF Whitepaper'
    },
    'res-mkt-00': {
      title: 'SPARK Member Promotion & Global Bonus Incentive Plan (8-Lang Official)',
      subCategory: 'Official Posters',
      description: 'Official ranking ladder and global referral incentive diagrams covering 8 core global languages.',
      fileFormatName: 'PNG / JPG'
    },
    'res-mkt-01': {
      title: 'SPARK Member Growth & Global Privileges Panoramic Long-form',
      subCategory: 'Infographic Banner',
      description: 'Panoramic breakdown of member rank progression, rebate incentives, community tools, and VIP benefits.',
      fileFormatName: 'JPG HD Long-form'
    },
    'res-mkt-02': {
      title: 'SPARK Global Brand Poster Series - EN-01 (Brand Horizon)',
      subCategory: 'Official Posters',
      description: 'Minimalist luxury purple-black fintech visual poster in 4K resolution, ideal for summits and exhibitions.',
      fileFormatName: 'JPG Print-Ready'
    },
    'res-mkt-03': {
      title: 'SPARK Global Social Media Poster - EN-02 (Next Generation)',
      subCategory: 'Official Posters',
      description: 'Brand philosophy poster focusing on "Intelligent Finance • A Better Tomorrow".',
      fileFormatName: 'JPG Print-Ready'
    },
    'res-mkt-04': {
      title: 'SPARK Global Summit Exclusive Poster - EN-03 (Union Power)',
      subCategory: 'Official Posters',
      description: 'Custom vertical visual poster tailored for private VIP summits and regional launch events.',
      fileFormatName: 'JPG Print-Ready'
    },
    'res-mat-01': {
      title: 'SPARK 3D Metallic Emblem (Official High-Gloss Beveled)',
      subCategory: 'Brand Logo',
      description: 'New official 3D beveled obsidian black & electric purple metallic emblem for authoritative displays.',
      fileFormatName: 'PNG / JPG'
    },
    'res-mat-02': {
      title: 'SPARK Obsidian Purple Metallic Emblem (Transparent PNG)',
      subCategory: 'Brand Logo',
      description: 'High-res transparent PNG with purple metallic specular reflections ready to drop into any design background.',
      fileFormatName: 'PNG Transparent'
    },
    'res-mat-03': {
      title: 'SPARK Fantasy Crystal Luminescence Emblem (Web3 Stage)',
      subCategory: 'Brand Logo',
      description: 'Crystal refractive luster and purple aura render tailored for giant digital stages and Web3 apps.',
      fileFormatName: 'PNG Transparent'
    },
    'res-mat-04': {
      title: 'SPARK Luxury Black & Gold Electroplated Logo Pack',
      subCategory: 'Brand Logo',
      description: 'Electroplated gold and prestigious black-gold dual texture logos for private high-net-worth clubs.',
      fileFormatName: 'ZIP Master Pack'
    },
    'res-mat-05': {
      title: 'SPARK Multi-Language Roll-up Banner Stand (80x200cm Print Pack)',
      subCategory: 'Roll-up Banners',
      description: 'Standard 80x200cm high-resolution vector print file supporting multi-language instant switching.',
      fileFormatName: 'PNG Print-Ready'
    },
    'res-mat-06': {
      title: 'US FinCEN MSB Financial Regulatory Official Certified Filing',
      subCategory: 'Compliance Legal',
      description: 'Official scanned high-res copy of MSB License issued by US Treasury FinCEN.',
      fileFormatName: 'PDF Stamped'
    },
    'res-mat-07': {
      title: 'SPARK UNION CAPITAL US Corporate Certificate of Incorporation',
      subCategory: 'Compliance Legal',
      description: 'SPARK UNION CAPITAL INC. official Certificate of Good Standing issued by Colorado State Government.',
      fileFormatName: 'PDF Official License'
    },
    'res-vid-01': {
      title: 'SPARK Global Official Brand Cinema Promo (1080P Cinema)',
      subCategory: 'Promo Cinema',
      description: 'Cinematic brand promotional film showcasing Spark core fintech, quant strength, and global reach with quad-lingual native voiceovers.',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-02': {
      title: 'SPARK 3D Dynamic LOGO Light Show Intro (4K/60FPS Cinema)',
      subCategory: '3D Motion Logo',
      description: '3D metallic particle convergence and electric lightning intro stinger for keynotes and video production.',
      fileFormatName: 'MP4 4K'
    },
    'res-vid-03': {
      title: 'Vietnam Orphan & Disabled Children Warmth Care Documentary',
      subCategory: 'CSR Documentaries',
      description: 'SparkOne Vietnam Charity documentary capturing heart-warming moments of aid distribution and child care.',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-04': {
      title: 'Thailand Muslim Community Orphanage Aid Documentary Short',
      subCategory: 'CSR Documentaries',
      description: 'Field visit to southern Thailand Muslim orphanage documenting educational supply gifts and care.',
      fileFormatName: 'MOV 1080P'
    },
    'res-vid-05': {
      title: 'Malaysia Elderly Nursing Home Care Charity Action Highlights',
      subCategory: 'Event Videos',
      description: 'Volunteers visiting nursing home in Malaysia bringing health packs and companionship.',
      fileFormatName: 'MOV 1080P'
    },
    'res-album-01': {
      title: 'West Africa Nigeria School Educational Aid Field Documentary Album',
      subCategory: 'Africa Education CSR',
      description: 'Supplying desks, school essentials, and food packages in rural Nigeria, featuring 114 high-res DSLR master photos.',
      fileFormatName: 'ZIP Photo Pack'
    },
    'res-album-02': {
      title: 'Vietnam Government & Hospital Food Relief Charity Field Album',
      subCategory: 'Vietnam Food Aid',
      description: 'Partnership with public hospital & civil ministry distributing food packages, featuring 92 field photos.',
      fileFormatName: 'ZIP Photo Pack'
    },
    'res-album-03': {
      title: 'Thailand Muslim Orphanage Child Care Action Photo Album',
      subCategory: 'Thai Orphan Aid',
      description: 'Visiting Muslim orphanage with schoolbags and warm companionship, featuring 87 DSLR raw photos.',
      fileFormatName: 'ZIP Photo Pack'
    },
    'res-album-04': {
      title: 'Malaysia Elderly Nursing Home Caregiver Field Visit Album',
      subCategory: 'Malaysia Elderly CSR',
      description: 'Visiting nursing home in Malaysia providing nutrition packs, featuring 82 master photos.',
      fileFormatName: 'ZIP Photo Pack'
    },
    'res-album-05': {
      title: 'Vietnam Orphan & Special Needs Children Care Field Album',
      subCategory: 'Vietnam Child CSR',
      description: 'Field assistance for disabled and impoverished children with rehab equipment, featuring 66 photos.',
      fileFormatName: 'ZIP Photo Pack'
    },
    'res-album-06': {
      title: 'Malaysia ChuXin Vulnerable Children Home Caring Visit Album',
      subCategory: 'Malaysia Shelter CSR',
      description: 'Comforting children in shelter homes with donations and supplies, featuring 21 DSLR photos.',
      fileFormatName: 'ZIP Photo Pack'
    }
  },

  // 4. 韩国语 (Korean - 한국어)
  '韩文': {
    'res-cw-01': {
      title: 'SPARK ONE 프로젝트 소개 표준 강의 교재 v2.3',
      subCategory: '강의자료',
      description: '공식 마스터 강사용 표준 발표 PDF 고화질 경량 버전. SparkOne 비즈니스 모델, 글로벌 생태계 및 제품 매트릭스를 상세히 해설합니다.',
      fileFormatName: 'PDF 고화질'
    },
    'res-cw-02': {
      title: 'SPARK 글로벌 표준화 강의안 (핵심 요약본)',
      subCategory: '강의자료',
      description: '공식 핵심 요약 강의안으로 비즈니스 핵심 사항을 간추려 초고속 다운로드가 가능합니다.',
      fileFormatName: 'PDF 요약본'
    },
    'res-cw-03': {
      title: 'SPARK 글로벌 디지털 금융 심층 분석 백서',
      subCategory: '금융 백서',
      description: '거시 디지털 경제의 진화와 Web3 자산 배분 동향을 분석한 공식 연구팀의 프리미엄 백서입니다.',
      fileFormatName: 'PDF 백서'
    },
    'res-mkt-00': {
      title: 'SPARK 회원 승급 및 글로벌 보너스 인센티브 플랜 (8개국어 공식자료)',
      subCategory: '공식 포스터',
      description: '회원 직급 체계 및 글로벌 보너스 커미션 제도를 도식화한 공식 인포그래픽으로 8대 주요 언어 시장을 완벽 지원합니다.',
      fileFormatName: 'PNG / JPG'
    },
    'res-mkt-01': {
      title: 'SPARK 회원 성장 및 글로벌 혜택 체계 홍보 롱폼 인포그래픽',
      subCategory: '롱폼 포스터',
      description: '회원 성장 단계, 커미션 보상, 커뮤니티 권한 및 VIP 생태계 특권을 한눈에 파악할 수 있는 커뮤니티 전용 포스터입니다.',
      fileFormatName: 'JPG 초고화질 롱폼'
    },
    'res-mkt-02': {
      title: 'SPARK 글로벌 브랜드 프로모션 포스터 시리즈 - EN-01 (Brand Horizon)',
      subCategory: '공식 포스터',
      description: '미니멀 럭셔리 퍼플&블랙 핀테크 키비주얼 포스터. 4K 초고해상도로 오프라인 정상회담 대형 스크린에 적합합니다.',
      fileFormatName: 'JPG 인쇄용'
    },
    'res-mkt-03': {
      title: 'SPARK 글로벌 소셜 미디어 프로모션 포스터 - EN-02 (Next Generation)',
      subCategory: '공식 포스터',
      description: '“스마트 금융 • 뛰어난 내일” 핵심 가치를 담은 공식 브랜드 철학 포스터입니다.',
      fileFormatName: 'JPG 인쇄용'
    },
    'res-mkt-04': {
      title: 'SPARK VIP 글로벌 서밋 전용 포스터 - EN-03 (Union Power)',
      subCategory: '공식 포스터',
      description: 'VIP 프라이빗 밋업 및 지역 도시 론칭 행사를 위한 맞춤형 수직 비주얼 포스터입니다.',
      fileFormatName: 'JPG 인쇄용'
    },
    'res-mat-01': {
      title: 'SPARK 3D 메탈릭 입체 엠블럼 (공식 하이글로스 베벨 엠블럼)',
      subCategory: '브랜드 로고',
      description: '새로운 공식 3D 각면 유광 메탈 입체 로고. 옵시디언 블랙과 일렉트릭 퍼플 광택이 어우러진 최고 권위 비주얼입니다.',
      fileFormatName: 'PNG / JPG'
    },
    'res-mat-02': {
      title: 'SPARK 옵시디언 퍼플 메탈 입체 엠블럼 (투명 배경 PNG)',
      subCategory: '브랜드 로고',
      description: '투명 배경의 초고해상도 이미지. 깊은 흑요석 질감과 바이올렛 메탈 반사가 적용되어 어떤 디자인에도 즉시 배치 가능합니다.',
      fileFormatName: 'PNG 투명 배경'
    },
    'res-mat-03': {
      title: 'SPARK 판타지 크리스탈 발광 엠블럼 (Web3 대형 스크린용)',
      subCategory: '브랜드 로고',
      description: '크리스탈 굴절 질감과 퍼플 아우라 렌더링으로 프리미엄 디지털 전광판 및 Web3 인터페이스에 최적화되었습니다.',
      fileFormatName: 'PNG 투명 배경'
    },
    'res-mat-04': {
      title: 'SPARK 럭셔리 블랙&골드 전기도금 로고 패키지',
      subCategory: '브랜드 로고',
      description: '골드 전기도금과 품격 높은 블랙골드 듀얼 텍스처 로고로 VIP 프라이빗 클럽 및 컨퍼런스에 최적입니다.',
      fileFormatName: 'ZIP 마스터 패키지'
    },
    'res-mat-05': {
      title: 'SPARK 공식 다국어 표준 롤업 배너 스탠드 (80x200cm 인쇄 패키지)',
      subCategory: '롤업 배너',
      description: '표준 80x200cm 인쇄용 고해상도 벡터 파일로 다국어 빠른 전환과 현장 출력이 가능합니다.',
      fileFormatName: 'PNG 인쇄용 고화질'
    },
    'res-mat-06': {
      title: '미국 FinCEN MSB 금융 규제 라이선스 공식 정식 인증 서류',
      subCategory: '컴플라이언스 인증',
      description: '미국 재무부 금융범죄단속네트워크에서 발급한 MSB 라이선스 공식 스캔 고화질 사본입니다.',
      fileFormatName: 'PDF 공식 날인본'
    },
    'res-mat-07': {
      title: 'SPARK UNION CAPITAL 미국 법인 공식 등록증 (콜로라도주)',
      subCategory: '컴플라이언스 인증',
      description: 'SPARK UNION CAPITAL INC. 미국 콜로라도 주정부가 발급한 공식 기업 사업자등록 증명서입니다.',
      fileFormatName: 'PDF 공식 면허증'
    },
    'res-vid-01': {
      title: 'SPARK 글로벌 공식 브랜드 시네마 영상 (1080P Cinema Promo)',
      subCategory: '공식 브랜드 영상',
      description: '영화급 브랜드 홍보 대작. Spark의 핵심 기술, 퀀트 역량 및 글로벌 비전을 4개 국어 원어민 나레이션으로 제공합니다.',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-02': {
      title: 'SPARK 3D 모션 LOGO 시네마 인트로 영상 (4K/60FPS Intro)',
      subCategory: '3D 모션 영상',
      description: '3D 메탈릭 입자 결합과 밤하늘 번개 광채가 돋보이는 강렬한 인트로로 발표회 및 영상 제작에 적합합니다.',
      fileFormatName: 'MP4 4K'
    },
    'res-vid-03': {
      title: '베트남 고아 및 장애 아동 따뜻한 나눔 현장 다큐멘터리',
      subCategory: 'CSR 다큐멘터리',
      description: 'SparkOne 베트남 자선 기금의 생생한 현장 기록으로 물품 기부와 아이들의 미소를 담았습니다.',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-04': {
      title: '태국 무슬림 지역 보육원 아동 나눔 활동 현장 다큐멘터리',
      subCategory: 'CSR 다큐멘터리',
      description: '태국 남부 무슬림 고아원을 찾아 생활 물품과 학용품을 전하는 온기 가득한 영상 기록입니다.',
      fileFormatName: 'MOV 1080P'
    },
    'res-vid-05': {
      title: '말레이시아 홀몸 어르신 양로원 케어 자원봉사 다큐멘터리',
      subCategory: '행사 영상',
      description: '말레이시아 요양원을 방문하여 어르신들과의 따뜻한 대화와 건강식품 지원을 담은 영상입니다.',
      fileFormatName: 'MOV 1080P'
    },
    'res-album-01': {
      title: '서아프리카 나이지리아 학교 교육지원 및 건립 현장 실사 앨범',
      subCategory: '서아프리카 학교 CSR',
      description: '나이지리아 시골 초등학교에 책걸상, 학용품 및 생필품을 기부한 현장 DSLR 원본 사진 114장을 수록했습니다.',
      fileFormatName: 'ZIP 앨범 패키지'
    },
    'res-album-02': {
      title: '베트남 정부기관 및 국립병원 사랑의 식료품 기부 현장 앨범',
      subCategory: '베트남 식료품 지원',
      description: '국립병원 및 지역 복지부와 협력하여 영양식과 생필품을 배분한 현장 기록 사진 92장입니다.',
      fileFormatName: 'ZIP 앨범 패키지'
    },
    'res-album-03': {
      title: '태국 무슬림 공동체 보육원 아동 따뜻한 돌봄 현장 앨범',
      subCategory: '태국 보육원 지원',
      description: '무슬림 고아원 아이들에게 가방과 선물을 전달하며 함께한 온기 가득한 87장의 실사 원본입니다.',
      fileFormatName: 'ZIP 앨범 패키지'
    },
    'res-album-04': {
      title: '말레이시아 독거노인 안식처 방문 및 영양 키트 지원 앨범',
      subCategory: '말레이시아 양로원 CSR',
      description: '말레이시아 양로원을 방문하여 생활 영양 키트를 전해드린 82장의 현장 고화질 사진입니다.',
      fileFormatName: 'ZIP 앨범 패키지'
    },
    'res-album-05': {
      title: '베트남 장애 및 취약계층 아동 재활보조기구 지원 앨범',
      subCategory: '베트남 아동 지원',
      description: '어려운 환경의 특수 아동들에게 재활 기구와 격려를 전한 현장 사진 66장입니다.',
      fileFormatName: 'ZIP 앨범 패키지'
    },
    'res-album-06': {
      title: '말레이시아 소외계층 아동 보호시설 사랑의 쉼터 방문 앨범',
      subCategory: '말레이시아 쉼터 CSR',
      description: '보호시설 아동들과의 따뜻한 교감과 기부 증정 현장을 담은 21장의 고화질 사진입니다.',
      fileFormatName: 'ZIP 앨범 패키지'
    }
  },

  // 5. 日本語 (Japanese)
  '日文': {
    'res-cw-01': {
      title: 'SPARK ONE プロジェクト紹介公式講義スライド v2.3',
      subCategory: '講義資料',
      description: '公式マスター講師標準プレゼンPDF高画質軽量版。ビジネスモデル、グローバルエコシステムを詳細解説。',
      fileFormatName: 'PDF 高画質版'
    },
    'res-cw-02': {
      title: 'SPARK グローバル標準講義資料 (要約速見版)',
      subCategory: '講義資料',
      description: 'ビジネスの要点と基本ロジックを凝縮した高速DL可能な公式講義資料です。',
      fileFormatName: 'PDF 要約版'
    },
    'res-cw-03': {
      title: 'SPARK グローバルデジタル資産アーキテクチャ白書',
      subCategory: '金融白書',
      description: 'デジタル経済の変遷とWeb3資産配分トレンドを分析した公式リサーチチームのプレミアム白書。',
      fileFormatName: 'PDF 白書'
    },
    'res-mkt-00': {
      title: 'SPARK 会員ランク昇格＆グローバルボーナスインセンティブ計画 (8言語公式宣伝素材)',
      subCategory: '各種ポスター',
      description: '会員昇格ラダーとグローバル還元報酬制度を網羅した公式図鑑。主要8言語市場を完全サポート。',
      fileFormatName: 'PNG / JPG'
    },
    'res-mkt-01': {
      title: 'SPARK 会員育成＆グローバル権利体系ロングフォームポスター',
      subCategory: '長図ポスター',
      description: '会員成長ステップ、還元報酬、コミュニティ特典およびVIP特権を一目で把握できる高頻度配信素材。',
      fileFormatName: 'JPG 高解像度長図'
    },
    'res-mkt-02': {
      title: 'SPARK グローバルブランドポスターシリーズ - EN-01 (Brand Horizon)',
      subCategory: '各種ポスター',
      description: 'ミニマルラグジュアリーな黒紫フィンテックキービジュアル。4K解像度で展示会やイベントに最適。',
      fileFormatName: 'JPG 印刷用'
    },
    'res-mkt-03': {
      title: 'SPARK 公式ソーシャルメディアプロモーションポスター - EN-02 (Next Generation)',
      subCategory: '各種ポスター',
      description: '「インテリジェント金融 • 卓越した未来」の価値観を表現した公式理念ポスター。',
      fileFormatName: 'JPG 印刷用'
    },
    'res-mkt-04': {
      title: 'SPARK VIPグローバルサミット専用ポスター - EN-03 (Union Power)',
      subCategory: '各種ポスター',
      description: 'VIPプライベート発表会や地域イベントのためのカスタム縦型ビジュアルポスター。',
      fileFormatName: 'JPG 印刷用'
    },
    'res-mat-01': {
      title: 'SPARK 3D立体メタルエンブレム (公式ハイグロス面取り仕様)',
      subCategory: 'ロゴ素材',
      description: 'オブシディアンブラックにエレクトリックパープルの輝きをまとった最新3Dメタル立体エンブレム。',
      fileFormatName: 'PNG / JPG'
    },
    'res-mat-02': {
      title: 'SPARK 黒曜パープルメタル立体ロゴ (透過背景 PNG)',
      subCategory: 'ロゴ素材',
      description: '背景透過の超高解像度画像。高級感あふれる光沢反射で、あらゆる背景に即座に配置可能です。',
      fileFormatName: 'PNG 透過背景'
    },
    'res-mat-03': {
      title: 'SPARK クリスタルグラデーション発光ロゴ (Web3大画面用)',
      subCategory: 'ロゴ素材',
      description: 'クリスタル屈折光彩とパープルオーラを演出し、大型デジタルスクリーンやWeb3UIに最適。',
      fileFormatName: 'PNG 透過背景'
    },
    'res-mat-04': {
      title: 'SPARK ラグジュアリーブラック＆ゴールドメッキロゴ集',
      subCategory: 'ロゴ素材',
      description: 'ゴールドメッキとブラックゴールドの2つのプレミアム質感ロゴ。VIPクラブに最適。',
      fileFormatName: 'ZIP マスター集'
    },
    'res-mat-05': {
      title: 'SPARK 公式多言語ロールアップバナースタンド (80x200cm 印刷パック)',
      subCategory: 'ロールアップ',
      description: '標準80x200cmの印刷用高解像度ベクターファイル。多言語の即時切り替えに対応。',
      fileFormatName: 'PNG 高精細印刷'
    },
    'res-mat-06': {
      title: '米国 FinCEN MSB 金融機関登録公式ライセンス証明書',
      subCategory: '法的認証',
      description: '米国財務省FinCENが発行したMSB公式登録の高画質スキャン証明書類です。',
      fileFormatName: 'PDF 公式認証'
    },
    'res-mat-07': {
      title: 'SPARK UNION CAPITAL 米国法人登録証明書 (コロラド州)',
      subCategory: '法的認証',
      description: '米国コロラド州政府が発行したSPARK UNION CAPITAL INC.の公式企業営業許可証です。',
      fileFormatName: 'PDF 公式営業許可'
    },
    'res-vid-01': {
      title: 'SPARK グローバル公式ブランドシネマ映像 (1080P Cinema Promo)',
      subCategory: '公式宣伝映像',
      description: '映画クオリティの公式ブランド映像。中・英・韓・日の4言語ネイティブ音声に対応。',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-02': {
      title: 'SPARK 3Dモーションロゴシネマイントロ (4K/60FPS Cinema)',
      subCategory: '3D動効映像',
      description: '3Dメタル粒子の集結と電光が交錯する圧倒的なオープニング動画。動画制作や発表会に。',
      fileFormatName: 'MP4 4K'
    },
    'res-vid-03': {
      title: 'ベトナム孤児・障がい児温もり支援現場ドキュメンタリー',
      subCategory: '慈善ドキュメント',
      description: 'SparkOneベトナム慈善基金の現地記録。物資寄付と子どもたちの笑顔を記録した映像。',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-04': {
      title: 'タイ・イスラム孤児院児童支援活動現場ドキュメンタリー',
      subCategory: '慈善ドキュメント',
      description: 'タイ南部イスラム地域孤児院を訪れ、生活物資と学用品を届けた温かいドキュメンタリー。',
      fileFormatName: 'MOV 1080P'
    },
    'res-vid-05': {
      title: 'マレーシア高齢者施設訪問・見守り活動記録ハイライト',
      subCategory: 'イベント映像',
      description: 'マレーシアの養護老人ホームを訪れ、健康食や生活用品を贈呈したボランティア活動映像。',
      fileFormatName: 'MOV 1080P'
    },
    'res-album-01': {
      title: '西アフリカ・ナイジェリア教育支援＆学校寄贈現地記録アルバム',
      subCategory: '西アフリカ学校公益',
      description: 'ナイジェリア農村小学校へ机椅子や学用品を寄付。一眼レフで撮影された114枚の原画を収録。',
      fileFormatName: 'ZIP アルバム'
    },
    'res-album-02': {
      title: 'ベトナム政府機関・病院食糧支援活動現場アルバム',
      subCategory: 'ベトナム食糧支援',
      description: '公立病院や行政と連携して栄養食品を配布した現地記録写真92枚を収録。',
      fileFormatName: 'ZIP アルバム'
    },
    'res-album-03': {
      title: 'タイ・イスラム共同体孤児院児童ケア活動写真集',
      subCategory: 'タイ孤児支援',
      description: '子どもたちにカバンや文具を贈り温かく見守った87枚の高品質記録写真です。',
      fileFormatName: 'ZIP アルバム'
    },
    'res-album-04': {
      title: 'マレーシア独居老人養護施設訪問＆健康支援アルバム',
      subCategory: 'マレーシア高齢者支援',
      description: '養護老人ホームを訪問し日用品をプレゼントした82枚の現場高画質アルバム。',
      fileFormatName: 'ZIP アルバム'
    },
    'res-album-05': {
      title: 'ベトナム障がい児・要支援児童リハビリ器具支援アルバム',
      subCategory: 'ベトナム児童支援',
      description: '特別な支援が必要な子どもたちへリハビリ器具と真心を届けた66枚の写真集。',
      fileFormatName: 'ZIP アルバム'
    },
    'res-album-06': {
      title: 'マレーシア社会的養護児童シェルター愛の訪問アルバム',
      subCategory: 'マレーシアシェルター支援',
      description: '保護施設の子どもたちと交流し物資を届けた21枚の心温まる写真集です。',
      fileFormatName: 'ZIP アルバム'
    }
  },

  // 6. ภาษาไทย (Thai)
  '泰文': {
    'res-cw-01': {
      title: 'SPARK ONE สไลด์นำเสนอโครงการมาตรฐาน v2.3',
      subCategory: 'เอกสารนำเสนอ',
      description: 'เอกสารการนำเสนอมาตรฐานของวิทยากรทางการ รูปแบบ PDF คมชัดสูง อธิบายโมเดลธุรกิจและระบบนิเวศอย่างลึกซึ้ง',
      fileFormatName: 'PDF คมชัดสูง'
    },
    'res-cw-02': {
      title: 'SPARK เอกสารการนำเสนอมาตรฐาน (ฉบับย่อกระชับ)',
      subCategory: 'เอกสารนำเสนอ',
      description: 'สรุปหัวใจสำคัญของธุรกิจสำหรับการเรียนรู้และดาวน์โหลดด้วยความเร็วสูงสุด',
      fileFormatName: 'PDF ฉบับย่อ'
    },
    'res-cw-03': {
      title: 'SPARK สมุดปกขาวเจาะลึกโครงสร้างความมั่งคั่งดิจิทัลระดับโลก',
      subCategory: 'สมุดปกขาวการเงิน',
      description: 'สมุดปกขาววิเคราะห์เศรษฐกิจดิจิทัลระดับมหภาคและการจัดสรรสินทรัพย์ Web3 โดยทีมวิจัยทางการ',
      fileFormatName: 'PDF สมุดปกขาว'
    },
    'res-mkt-00': {
      title: 'SPARK แผนเลื่อนระดับสมาชิกและผลตอบแทนระดับโลก (สื่อทางการ 8 ภาษา)',
      subCategory: 'โปสเตอร์ทางการ',
      description: 'ผังโครงสร้างการเลื่อนตำแหน่งและผลตอบแทนคอมมิชชั่นระดับโลก ครอบคลุม 8 ภาษาหลักสากล',
      fileFormatName: 'PNG / JPG'
    },
    'res-mkt-01': {
      title: 'SPARK ผังภาพสิทธิประโยชน์สมาชิกและระบบเติบโตระดับโลก',
      subCategory: 'ภาพยาวอินโฟกราฟิก',
      description: 'วิเคราะห์บันไดความก้าวหน้าของสมาชิก รางวัลผลตอบแทน และสิทธิพิเศษ VIP เหมาะสำหรับเผยแพร่ในชุมชน',
      fileFormatName: 'JPG คมชัดสูงภาพยาว'
    },
    'res-mkt-02': {
      title: 'SPARK โปสเตอร์โปรโมตแบรนด์ระดับโลก - EN-01 (Brand Horizon)',
      subCategory: 'โปสเตอร์ทางการ',
      description: 'โปสเตอร์ภาพลักษณ์เทคโนโลยีการเงินหรูหราสีดำ-ม่วง ระดับ 4K เหมาะสำหรับจอแสดงผลในงานประชุม',
      fileFormatName: 'JPG สำหรับพิมพ์'
    },
    'res-mkt-03': {
      title: 'SPARK โปสเตอร์โปรโมตโซเชียลมีเดียระดับโลก - EN-02 (Next Generation)',
      subCategory: 'โปสเตอร์ทางการ',
      description: 'โปสเตอร์แนวคิดแบรนด์ภายใต้คุณค่าหลัก "การเงินอัจฉริยะ • อนาคตที่ยอดเยี่ยม"',
      fileFormatName: 'JPG สำหรับพิมพ์'
    },
    'res-mkt-04': {
      title: 'SPARK โปสเตอร์การประชุมสุดยอดระดับโลก - EN-03 (Union Power)',
      subCategory: 'โปสเตอร์ทางการ',
      description: 'โปสเตอร์แนวตั้งระดับพรีเมียมสำหรับงานประชุม VIP และการเปิดตัวในแต่ละภูมิภาค',
      fileFormatName: 'JPG สำหรับพิมพ์'
    },
    'res-mat-01': {
      title: 'SPARK โลโก้ 3D เมทัลลิกนูนตัดขอบเงา (ตราสัญลักษณ์ทางการ)',
      subCategory: 'โลโก้แบรนด์',
      description: 'ตราสัญลักษณ์โลหะ 3D รุ่นใหม่ล่าสุด พร้อมขอบเงาประกายม่วงบนพื้นสีดำออบซิเดียนเพื่อการแสดงผลระดับพรีเมียม',
      fileFormatName: 'PNG / JPG'
    },
    'res-mat-02': {
      title: 'SPARK โลโก้โลหะสีดำม่วง (พื้นหลังโปร่งใส PNG)',
      subCategory: 'โลโก้แบรนด์',
      description: 'ไฟล์ PNG พื้นหลังโปร่งใสคุณภาพสูง พร้อมแสงสะท้อนขอบโลหะ สามารถวางบนพื้นหลังดีไซน์ใดก็ได้ทันที',
      fileFormatName: 'PNG พื้นหลังใส'
    },
    'res-mat-03': {
      title: 'SPARK โลโก้คริสตัลม่วงเปล่งประกาย (สำหรับจอขนาดใหญ่ Web3)',
      subCategory: 'โลโก้แบรนด์',
      description: 'ภาพเรนเดอร์คริสตัลหักเหแสงสีม่วง เหมาะสำหรับจอแสดงผลดิจิทัลและอินเทอร์เฟซ Web3',
      fileFormatName: 'PNG พื้นหลังใส'
    },
    'res-mat-04': {
      title: 'SPARK ชุดโลโก้สีทองหรูหราและชุบทองคำแท้',
      subCategory: 'โลโก้แบรนด์',
      description: 'ชุดโลโก้เนื้อสัมผัสสีทองและดำ-ทอง สำหรับคลับระดับ VIP และงานประชุมระดับสูง',
      fileFormatName: 'ZIP ชุดรวมมาสเตอร์'
    },
    'res-mat-05': {
      title: 'SPARK ชุดสแตนด์โรลอัปมาตรฐานหลายภาษา (ขนาด 80x200cm)',
      subCategory: 'โรลอัป',
      description: 'ไฟล์เวกเตอร์ความละเอียดสูงสำหรับพิมพ์โรลอัปขนาด 80x200cm รองรับการสลับภาษาได้อย่างรวดเร็ว',
      fileFormatName: 'PNG พิมพ์ความละเอียดสูง'
    },
    'res-mat-06': {
      title: 'เอกสารรับรองใบอนุญาตทางการเงิน FinCEN MSB สหรัฐฯ',
      subCategory: 'ใบอนุญาตทางกฎหมาย',
      description: 'สำเนาสแกนความละเอียดสูงของใบอนุญาต MSB ที่ออกโดยเครือข่ายบังคับใช้กฎหมายอาชญากรรมทางการเงิน กระทรวงการคลังสหรัฐฯ',
      fileFormatName: 'PDF ประทับตราทางการ'
    },
    'res-mat-07': {
      title: 'SPARK UNION CAPITAL หนังสือรับรองการจดทะเบียนบริษัทสหรัฐฯ',
      subCategory: 'ใบอนุญาตทางกฎหมาย',
      description: 'หนังสือรับรองการจดทะเบียนนิติบุคคลอย่างเป็นทางการ ออกโดยรัฐบาลรัฐโคโลราโด สหรัฐอเมริกา',
      fileFormatName: 'PDF ใบอนุญาตทางการ'
    },
    'res-vid-01': {
      title: 'SPARK ภาพยนตร์โปรโมตแบรนด์ระดับโลก (1080P Cinema Promo)',
      subCategory: 'วิดีโอโปรโมต',
      description: 'วิดีโอภาพยนตร์โปรโมตแบรนด์ระดับพรีเมียม ถ่ายทอดเทคโนโลยีและการเติบโตระดับโลก พร้อมเสียงพากย์ 4 ภาษาหลัก',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-02': {
      title: 'SPARK แอนิเมชันเปิดตัวโลโก้ 3D แสงเงา (4K/60FPS Cinema Intro)',
      subCategory: 'วิดีโอโมชัน 3D',
      description: 'การรวมตัวของอนุภาคโลหะ 3D และประกายแสงสีม่วง เหมาะสำหรับเปิดตัวในงานสัมมนาและงานตัดต่อวิดีโอ',
      fileFormatName: 'MP4 4K'
    },
    'res-vid-03': {
      title: 'สารคดีกิจกรรมช่วยเหลือเด็กกำพร้าและผู้พิการในเวียดนาม',
      subCategory: 'สารคดีเพื่อสังคม',
      description: 'บันทึกภาพจริงจากมูลนิธิการกุศล SparkOne ในเวียดนาม ถ่ายทอดการมอบสิ่งของและความอบอุ่นแก่เด็กๆ',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-04': {
      title: 'สารคดีกิจกรรมช่วยเหลือเด็กกำพร้าในชุมชนมุสลิม ประเทศไทย',
      subCategory: 'สารคดีเพื่อสังคม',
      description: 'ลงพื้นที่สถานเลี้ยงเด็กกำพร้ามุสลิมในภาคใต้ของไทย มอบอุปกรณ์การเรียนและของใช้จำเป็น',
      fileFormatName: 'MOV 1080P'
    },
    'res-vid-05': {
      title: 'วิดีโอกิจกรรมอาสาเยี่ยมเยียนและดูแลผู้สูงอายุในมาเลเซีย',
      subCategory: 'วิดีโอกิจกรรม',
      description: 'เยี่ยมชมบ้านพักคนชราในมาเลเซีย มอบอาหารเสริมและสร้างความสุขแก่ผู้สูงอายุ',
      fileFormatName: 'MOV 1080P'
    },
    'res-album-01': {
      title: 'อัลบั้มภาพกิจกรรมสนับสนุนการศึกษาและสร้างโรงเรียนในไนจีเรีย',
      subCategory: 'CSR โรงเรียนแอฟริกา',
      description: 'มอบโต๊ะ เก้าอี้ อุปกรณ์การเรียน และอาหารแก่โรงเรียนในชนบทไนจีเรีย พร้อมภาพถ่ายกล้อง DSLR 114 ภาพ',
      fileFormatName: 'ZIP อัลบั้มภาพ'
    },
    'res-album-02': {
      title: 'อัลบั้มภาพการแจกจ่ายอาหารแก่โรงพยาบาลและชุมชนในเวียดนาม',
      subCategory: 'CSR อาหารเวียดนาม',
      description: 'ร่วมมือกับโรงพยาบาลรัฐและหน่วยงานท้องถิ่น แจกจ่ายอาหารและสิ่งของจำเป็น จำนวน 92 ภาพ',
      fileFormatName: 'ZIP อัลบั้มภาพ'
    },
    'res-album-03': {
      title: 'อัลบั้มภาพกิจกรรมดูแลเด็กกำพร้าในชุมชนมุสลิม ประเทศไทย',
      subCategory: 'CSR เด็กกำพร้าไทย',
      description: 'มอบกระเป๋านักเรียนและของขวัญแก่เด็กๆ ในสถานสงเคราะห์ จำนวน 87 ภาพคุณภาพสูง',
      fileFormatName: 'ZIP อัลบั้มภาพ'
    },
    'res-album-04': {
      title: 'อัลบั้มภาพการเยี่ยมเยียนและมอบชุดสุขภาพแก่ผู้สูงอายุในมาเลเซีย',
      subCategory: 'CSR ผู้สูงอายุมาเลเซีย',
      description: 'เยี่ยมเยียนผู้สูงอายุในสถานสงเคราะห์ มอบของใช้และชุดบำรุงสุขภาพ จำนวน 82 ภาพ',
      fileFormatName: 'ZIP อัลบั้มภาพ'
    },
    'res-album-05': {
      title: 'อัลบั้มภาพการสนับสนุนอุปกรณ์ฟื้นฟูแก่เด็กพิการในเวียดนาม',
      subCategory: 'CSR เด็กพิเศษเวียดนาม',
      description: 'มอบอุปกรณ์ฟื้นฟูสมรรถภาพและการดูแลแก่เด็กด้อยโอกาส จำนวน 66 ภาพ',
      fileFormatName: 'ZIP อัลบั้มภาพ'
    },
    'res-album-06': {
      title: 'อัลบั้มภาพการเยี่ยมเยียนบ้านพักเด็กด้อยโอกาสในมาเลเซีย',
      subCategory: 'CSR บ้านพักเด็กมาเลเซีย',
      description: 'มอบกำลังใจและสิ่งของจำเป็นแก่เด็กๆ ในสถานสงเคราะห์ จำนวน 21 ภาพความประทับใจ',
      fileFormatName: 'ZIP อัลบั้มภาพ'
    }
  },

  // 7. Tiếng Việt (Vietnamese)
  '越南文': {
    'res-cw-01': {
      title: 'SPARK ONE Bộ bài giảng thuyết trình chuẩn v2.3',
      subCategory: 'Bài giảng chuẩn',
      description: 'Bài giảng PDF chất lượng cao chính thức dành cho giảng viên master. Phân tích chi tiết mô hình kinh doanh SparkOne và hệ sinh thái toàn cầu.',
      fileFormatName: 'PDF Siêu nét'
    },
    'res-cw-02': {
      title: 'SPARK Bộ bài giảng chuẩn hóa toàn cầu (Bản tóm tắt tra cứu nhanh)',
      subCategory: 'Bài giảng chuẩn',
      description: 'Bài giảng cô đọng các điểm cốt lõi của doanh nghiệp, tải cực nhanh với dung lượng tối ưu.',
      fileFormatName: 'PDF Bản tóm tắt'
    },
    'res-cw-03': {
      title: 'SPARK Sách trắng chuyên sâu kiến trúc tài sản số toàn cầu',
      subCategory: 'Sách trắng tài chính',
      description: 'Sách trắng phân tích kinh tế số vĩ mô và xu hướng phân bổ tài sản Web3 do nhóm nghiên cứu chính thức phát hành.',
      fileFormatName: 'PDF Sách trắng'
    },
    'res-mkt-00': {
      title: 'SPARK Kế hoạch thăng cấp hội viên & Thưởng hoa hồng toàn cầu (8 ngôn ngữ)',
      subCategory: 'Áp phích chính thức',
      description: 'Sơ đồ chính thức về cấp bậc hội viên và chính sách hoa hồng thưởng toàn cầu, hỗ trợ trọn vẹn 8 ngôn ngữ chủ đạo.',
      fileFormatName: 'PNG / JPG'
    },
    'res-mkt-01': {
      title: 'SPARK Ảnh dài infographic nấc thang phát triển & Đặc quyền hội viên toàn cầu',
      subCategory: 'Ảnh dài Infographic',
      description: 'Toàn cảnh nấc thang hội viên, cơ chế hoa hồng, công cụ cộng đồng và đặc quyền VIP phù hợp chia sẻ mạng xã hội.',
      fileFormatName: 'JPG Ảnh dài siêu nét'
    },
    'res-mkt-02': {
      title: 'SPARK Chuỗi áp phích quảng bá thương hiệu toàn cầu - EN-01 (Brand Horizon)',
      subCategory: 'Áp phích chính thức',
      description: 'Áp phích phong cách tài chính công nghệ cao cấp đen tím độ phân giải 4K, phù hợp cho màn hình hội nghị.',
      fileFormatName: 'JPG Bản in ấn'
    },
    'res-mkt-03': {
      title: 'SPARK Áp phích truyền thông mạng xã hội toàn cầu - EN-02 (Next Generation)',
      subCategory: 'Áp phích chính thức',
      description: 'Áp phích triết lý thương hiệu tôn vinh giá trị cốt lõi "Tài chính thông minh • Tương lai vượt trội".',
      fileFormatName: 'JPG Bản in ấn'
    },
    'res-mkt-04': {
      title: 'SPARK Áp phích hội nghị thượng đỉnh VIP toàn cầu - EN-03 (Union Power)',
      subCategory: 'Áp phích chính thức',
      description: 'Áp phích dọc cao cấp thiết kế riêng cho các buổi gặp mặt VIP và sự kiện ra mắt khu vực.',
      fileFormatName: 'JPG Bản in ấn'
    },
    'res-mat-01': {
      title: 'SPARK Huy hiệu kim loại nổi 3D (Bản cắt vát viền bóng chính thức)',
      subCategory: 'Logo thương hiệu',
      description: 'Huy hiệu 3D kim loại góc cạnh ánh sáng mới trên nền đen obsidian với ánh tím điện quang cho màn trình diễn quyền lực.',
      fileFormatName: 'PNG / JPG'
    },
    'res-mat-02': {
      title: 'SPARK Logo kim loại đen tím nổi khối (Bản nền trong suốt PNG)',
      subCategory: 'Logo thương hiệu',
      description: 'Hình ảnh PNG trong suốt độ nét cao với phản quang kim loại tím, sẵn sàng kéo thả vào mọi thiết kế nền.',
      fileFormatName: 'PNG Nền trong suốt'
    },
    'res-mat-03': {
      title: 'SPARK Logo pha lê tím tỏa sáng (Dành cho màn hình lớn Web3)',
      subCategory: 'Logo thương hiệu',
      description: 'Hiệu ứng khúc xạ pha lê và hào quang tím thiết kế chuyên biệt cho màn hình lớn và giao diện Web3.',
      fileFormatName: 'PNG Nền trong suốt'
    },
    'res-mat-04': {
      title: 'SPARK Gói bộ sưu tập Logo mạ vàng & Đen vàng sang trọng',
      subCategory: 'Logo thương hiệu',
      description: 'Bộ logo mạ vàng cao cấp và đen vàng dành riêng cho câu lạc bộ VIP và sự kiện hội nghị thượng đỉnh.',
      fileFormatName: 'ZIP Gói Master'
    },
    'res-mat-05': {
      title: 'SPARK Bộ Standee cuốn chuẩn đa ngôn ngữ (Gói in 80x200cm)',
      subCategory: 'Standee cuốn',
      description: 'Tệp vector in ấn độ phân giải cao chuẩn kích thước 80x200cm, hỗ trợ chuyển đổi đa ngôn ngữ xuất file ngay.',
      fileFormatName: 'PNG Bản in nét cao'
    },
    'res-mat-06': {
      title: 'Giấy phép quản lý tài chính FinCEN MSB Hoa Kỳ bản quét chính thức',
      subCategory: 'Giấy phép pháp lý',
      description: 'Bản quét độ nét cao giấy phép MSB được cấp bởi Mạng lưới Thực thi Tội phạm Tài chính (FinCEN) thuộc Bộ Tài chính Hoa Kỳ.',
      fileFormatName: 'PDF Bản đóng dấu'
    },
    'res-mat-07': {
      title: 'SPARK UNION CAPITAL Giấy phép đăng ký doanh nghiệp Hoa Kỳ (Colorado)',
      subCategory: 'Giấy phép pháp lý',
      description: 'Giấy phép hoạt động kinh doanh chính thức của SPARK UNION CAPITAL INC. do chính quyền bang Colorado cấp.',
      fileFormatName: 'PDF Giấy phép chính thức'
    },
    'res-vid-01': {
      title: 'SPARK Phim quảng bá thương hiệu điện ảnh toàn cầu (1080P Cinema Promo)',
      subCategory: 'Video quảng bá',
      description: 'Phim quảng bá chuẩn điện ảnh giới thiệu công nghệ cốt lõi và quy mô toàn cầu với lồng tiếng bản ngữ 4 thứ tiếng.',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-02': {
      title: 'SPARK Video Intro hiệu ứng Logo 3D sống động (4K/60FPS Cinema)',
      subCategory: 'Video hiệu ứng 3D',
      description: 'Phần mở đầu ấn tượng với hạt kim loại 3D hội tụ và tia chớp tím, thích hợp cho sự kiện và dựng video.',
      fileFormatName: 'MP4 4K'
    },
    'res-vid-03': {
      title: 'Phim tài liệu hành trình thiện nguyện ấm áp cho trẻ em Việt Nam',
      subCategory: 'Phim tài liệu CSR',
      description: 'Phim tài liệu thực tế của Quỹ từ thiện SparkOne Việt Nam ghi lại những khoảnh khắc trao tặng quà đầy xúc động.',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-04': {
      title: 'Phim tài liệu hoạt động hỗ trợ trại trẻ mồ côi Hồi giáo tại Thái Lan',
      subCategory: 'Phim tài liệu CSR',
      description: 'Chuyến thăm trại trẻ mồ côi tại miền nam Thái Lan trao tặng đồ dùng học tập và nhu yếu phẩm cần thiết.',
      fileFormatName: 'MOV 1080P'
    },
    'res-vid-05': {
      title: 'Video hoạt động tình nguyện chăm sóc viện dưỡng lão tại Malaysia',
      subCategory: 'Video sự kiện',
      description: 'Thăm hỏi các cụ già tại viện dưỡng lão ở Malaysia, trao tặng gói dinh dưỡng và sẻ chia ấm áp.',
      fileFormatName: 'MOV 1080P'
    },
    'res-album-01': {
      title: 'Album ảnh thực địa xây dựng trường học và hỗ trợ giáo dục tại Nigeria',
      subCategory: 'CSR Giáo dục Tây Phi',
      description: 'Trao tặng bàn ghế, dụng cụ học tập và lương thực cho trường tiểu học tại Nigeria với 114 bức ảnh chụp máy cơ DSLR.',
      fileFormatName: 'ZIP Gói ảnh'
    },
    'res-album-02': {
      title: 'Album ảnh hoạt động trao tặng thực phẩm cho bệnh viện tại Việt Nam',
      subCategory: 'CSR Lương thực Việt Nam',
      description: 'Phối hợp với bệnh viện công và cơ quan ban ngành phát quà cứu trợ dinh dưỡng với 92 bức ảnh thực địa.',
      fileFormatName: 'ZIP Gói ảnh'
    },
    'res-album-03': {
      title: 'Album ảnh chăm sóc trẻ em trại trẻ mồ côi Hồi giáo tại Thái Lan',
      subCategory: 'CSR Trẻ mồ côi Thái Lan',
      description: 'Trao tặng cặp sách và đồng hành cùng các em nhỏ với 87 bức ảnh nguyên bản sắc nét.',
      fileFormatName: 'ZIP Gói ảnh'
    },
    'res-album-04': {
      title: 'Album ảnh thăm hỏi và tặng quà dinh dưỡng viện dưỡng lão tại Malaysia',
      subCategory: 'CSR Viện dưỡng lão Malaysia',
      description: 'Thăm hỏi và trao tặng gói dinh dưỡng cho các cụ già neo đơn với 82 bức ảnh sắc nét.',
      fileFormatName: 'ZIP Gói ảnh'
    },
    'res-album-05': {
      title: 'Album ảnh hỗ trợ dụng cụ phục hồi chức năng cho trẻ khuyết tật Việt Nam',
      subCategory: 'CSR Trẻ em Việt Nam',
      description: 'Hỗ trợ thiết bị phục hồi và gửi trao tình thương cho trẻ em có hoàn cảnh khó khăn với 66 bức ảnh.',
      fileFormatName: 'ZIP Gói ảnh'
    },
    'res-album-06': {
      title: 'Album ảnh thăm hỏi mái ấm tình thương trẻ em khó khăn tại Malaysia',
      subCategory: 'CSR Mái ấm Malaysia',
      description: 'Động viên các em nhỏ tại mái ấm tình thương và trao tặng quà cứu trợ với 21 bức ảnh kỷ niệm.',
      fileFormatName: 'ZIP Gói ảnh'
    }
  },

  // 8. Bahasa Indonesia (Indonesian)
  '印尼文': {
    'res-cw-01': {
      title: 'SPARK ONE Materi Presentasi Proyek Standar v2.3',
      subCategory: 'Materi Presentasi',
      description: 'Materi presentasi PDF master resolusi tinggi resmi. Penjelasan mendalam mengenai model bisnis SparkOne dan ekosistem global.',
      fileFormatName: 'PDF Kualitas Tinggi'
    },
    'res-cw-02': {
      title: 'SPARK Materi Presentasi Standar Global (Versi Ringkas Cepat)',
      subCategory: 'Materi Presentasi',
      description: 'Materi presentasi ringkas yang merangkum poin-poin bisnis utama dengan ukuran unduhan sangat ringan.',
      fileFormatName: 'PDF Ringkas'
    },
    'res-cw-03': {
      title: 'SPARK Buku Putih Arsitektur Aset Digital Global Mendalam',
      subCategory: 'Buku Putih Keuangan',
      description: 'Buku putih yang menganalisis pergeseran ekonomi digital makro dan alokasi aset Web3 oleh tim riset resmi.',
      fileFormatName: 'PDF Buku Putih'
    },
    'res-mkt-00': {
      title: 'SPARK Rencana Peningkatan Anggota & Bonus Insentif Global (Materi 8 Bahasa)',
      subCategory: 'Poster Resmi',
      description: 'Bagan resmi peringkat anggota dan sistem komisi insentif rujukan global yang mencakup 8 bahasa pasar utama.',
      fileFormatName: 'PNG / JPG'
    },
    'res-mkt-01': {
      title: 'SPARK Infografis Panjang Jenjang Karir Anggota & Hak Istimewa Global',
      subCategory: 'Poster Panjang',
      description: 'Tinjauan lengkap tangga kemajuan anggota, rabat insentif, dan hak istimewa ekosistem VIP untuk promosi komunitas.',
      fileFormatName: 'JPG Gambar Panjang'
    },
    'res-mkt-02': {
      title: 'SPARK Seri Poster Promosi Merek Global - EN-01 (Brand Horizon)',
      subCategory: 'Poster Resmi',
      description: 'Poster visual fintech hitam-ungu minimalis mewah beresolusi 4K, sangat ideal untuk layar konferensi dan pameran.',
      fileFormatName: 'JPG Standar Cetak'
    },
    'res-mkt-03': {
      title: 'SPARK Poster Promosi Media Sosial Global - EN-02 (Next Generation)',
      subCategory: 'Poster Resmi',
      description: 'Poster filosofi merek dengan nilai inti "Keuangan Cerdas • Hari Esok yang Luar Biasa".',
      fileFormatName: 'JPG Standar Cetak'
    },
    'res-mkt-04': {
      title: 'SPARK Poster KTT VIP Global Eksklusif - EN-03 (Union Power)',
      subCategory: 'Poster Resmi',
      description: 'Poster vertikal premium yang dirancang khusus untuk pertemuan privat VIP dan peluncuran kota regional.',
      fileFormatName: 'JPG Standar Cetak'
    },
    'res-mat-01': {
      title: 'SPARK Lambang Logam 3D Timbul (Edisi Resmi Kilap Bevel)',
      subCategory: 'Logo Merek',
      description: 'Lambang logam timbul 3D resmi baru pada latar belakang obsidian hitam dengan kilau ungu elektrik untuk tampilan berwibawa.',
      fileFormatName: 'PNG / JPG'
    },
    'res-mat-02': {
      title: 'SPARK Lambang Logam Hitam Obsidian & Ungu (PNG Latar Transparan)',
      subCategory: 'Logo Merek',
      description: 'Gambar PNG transparan resolusi tinggi dengan pantulan logam ungu, siap disematkan ke latar belakang desain apa pun.',
      fileFormatName: 'PNG Latar Transparan'
    },
    'res-mat-03': {
      title: 'SPARK Lambang Kristal Ungu Berpendar (Layar Raksasa Web3)',
      subCategory: 'Logo Merek',
      description: 'Tekstur kristal dan aura ungu menyala yang dirancang khusus untuk layar digital panggung dan antarmuka Web3.',
      fileFormatName: 'PNG Latar Transparan'
    },
    'res-mat-04': {
      title: 'SPARK Paket Koleksi Logo Mewah Hitam & Emas Elektroplating',
      subCategory: 'Logo Merek',
      description: 'Dua tekstur logo emas elektroplating dan hitam-emas bergengsi untuk klub privat VIP.',
      fileFormatName: 'ZIP Paket Master'
    },
    'res-mat-05': {
      title: 'SPARK Paket Stand Banner Roll-Up Standar Multi-Bahasa (80x200cm)',
      subCategory: 'Banner Roll-up',
      description: 'Berkas vektor cetak resolusi tinggi ukuran 80x200cm, mendukung pergantian bahasa cepat untuk dicetak langsung.',
      fileFormatName: 'PNG Kualitas Cetak'
    },
    'res-mat-06': {
      title: 'Dokumen Pemindaian Resmi Lisensi Regulasi FinCEN MSB AS',
      subCategory: 'Legalitas Regulasi',
      description: 'Salinan resmi pemindaian resolusi tinggi Lisensi MSB yang diterbitkan oleh FinCEN Departemen Keuangan AS.',
      fileFormatName: 'PDF Berstempel'
    },
    'res-mat-07': {
      title: 'SPARK UNION CAPITAL Sertifikat Pendaftaran Perusahaan Pemerintah AS',
      subCategory: 'Legalitas Regulasi',
      description: 'Sertifikat pendaftaran perusahaan resmi SPARK UNION CAPITAL INC. yang diterbitkan oleh Pemerintah Negara Bagian Colorado.',
      fileFormatName: 'PDF Lisensi Resmi'
    },
    'res-vid-01': {
      title: 'SPARK Film Bioskop Promosi Merek Global Resmi (1080P Cinema)',
      subCategory: 'Video Promosi',
      description: 'Film promosi berkualitas sinema yang menampilkan teknologi inti dan ekspansi global dengan sulih suara 4 bahasa asli.',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-02': {
      title: 'SPARK Video Intro Efek Cahaya Logo Dinamis 3D (4K/60FPS Cinema)',
      subCategory: 'Video Animasi 3D',
      description: 'Intro video spektakuler partikel logam 3D dan kilatan petir ungu, cocok untuk konferensi dan produksi konten.',
      fileFormatName: 'MP4 4K'
    },
    'res-vid-03': {
      title: 'Dokumenter Aksi Kepedulian Anak Yatim & Difabel di Vietnam',
      subCategory: 'Dokumenter CSR',
      description: 'Dokumenter nyata Yayasan Amal SparkOne Vietnam yang merekam momen berharga pembagian bantuan dan kehangatan.',
      fileFormatName: 'MP4 1080P'
    },
    'res-vid-04': {
      title: 'Dokumenter Aksi Amal Panti Asuhan Komunitas Muslim di Thailand',
      subCategory: 'Dokumenter CSR',
      description: 'Kunjungan ke panti asuhan di Thailand selatan menyalurkan perlengkapan sekolah dan kebutuhan pangan.',
      fileFormatName: 'MOV 1080P'
    },
    'res-vid-05': {
      title: 'Video Sorotan Kunjungan Relawan ke Panti Jompo di Malaysia',
      subCategory: 'Video Kegiatan',
      description: 'Kunjungan relawan ke panti jompo di Malaysia mendampingi para lansia dan memberikan paket nutrisi.',
      fileFormatName: 'MOV 1080P'
    },
    'res-album-01': {
      title: 'Album Dokumenter Pembangunan Sekolah & Bantuan Pendidikan di Nigeria',
      subCategory: 'CSR Pendidikan Afrika',
      description: 'Bantuan meja, kursi, alat sekolah, dan makanan di sekolah dasar terpencil Nigeria, berisi 114 foto DSLR asli.',
      fileFormatName: 'ZIP Paket Foto'
    },
    'res-album-02': {
      title: 'Album Kegiatan Donasi Pangan Bersama Rumah Sakit di Vietnam',
      subCategory: 'CSR Pangan Vietnam',
      description: 'Bekerja sama dengan rumah sakit umum dan kementerian membagikan paket pangan, berisi 92 foto lapangan.',
      fileFormatName: 'ZIP Paket Foto'
    },
    'res-album-03': {
      title: 'Album Aksi Kasih Panti Asuhan Muslim di Thailand',
      subCategory: 'CSR Yatim Thailand',
      description: 'Membagikan tas sekolah dan mendampingi anak-anak panti asuhan, berisi 87 foto resolusi tinggi.',
      fileFormatName: 'ZIP Paket Foto'
    },
    'res-album-04': {
      title: 'Album Kunjungan Kasih dan Paket Nutrisi Panti Jompo di Malaysia',
      subCategory: 'CSR Panti Jompo Malaysia',
      description: 'Kunjungan dan pembagian paket nutrisi lansia di Malaysia, berisi 82 foto asli berkualitas tinggi.',
      fileFormatName: 'ZIP Paket Foto'
    },
    'res-album-05': {
      title: 'Album Bantuan Alat Rehabilitasi untuk Anak Berkebutuhan Khusus di Vietnam',
      subCategory: 'CSR Anak Vietnam',
      description: 'Mendukung alat terapi dan bantuan kasih bagi anak-anak berkebutuhan khusus, berisi 66 foto lapangan.',
      fileFormatName: 'ZIP Paket Foto'
    },
    'res-album-06': {
      title: 'Album Kunjungan Kasih ke Panti Asuhan Anak Kurang Mampu di Malaysia',
      subCategory: 'CSR Panti Asuhan Malaysia',
      description: 'Menghibur dan berbagi bingkisan kasih bersama anak-anak panti asuhan, berisi 21 foto kenangan.',
      fileFormatName: 'ZIP Paket Foto'
    }
  }
};

export function getLocalizedResource(id: string, language: string): LocalizedResourceContent | undefined {
  const dict = ASSET_TRANSLATIONS[language] || ASSET_TRANSLATIONS['中文简体'];
  return dict ? dict[id] : undefined;
}

const LANG_NAME_MAP: Record<string, Record<string, string>> = {
  '中文简体': {
    '中文简体': '中文简体',
    '中文繁体': '中文繁体',
    '英文': '英文',
    '英语': '英文',
    '韩文': '韩文',
    '韩语': '韩文',
    '日文': '日文',
    '日语': '日文',
    '泰文': '泰文',
    '泰语': '泰文',
    '越南文': '越南文',
    '越南语': '越南文',
    '印尼文': '印尼文',
    '印尼语': '印尼文',
    '多国语': '多国语',
    '通用': '通用'
  },
  '中文繁体': {
    '中文简体': '中文簡體',
    '中文繁体': '中文繁體',
    '英文': '英文',
    '英语': '英文',
    '韩文': '韓文',
    '韩语': '韓文',
    '日文': '日文',
    '日语': '日文',
    '泰文': '泰文',
    '泰语': '泰文',
    '越南文': '越南文',
    '越南语': '越南文',
    '印尼文': '印尼文',
    '印尼语': '印尼文',
    '多国语': '多國語',
    '通用': '通用'
  },
  '英文': {
    '中文简体': 'Simplified Chinese',
    '中文繁体': 'Traditional Chinese',
    '英文': 'English',
    '英语': 'English',
    '韩文': 'Korean',
    '韩语': 'Korean',
    '日文': 'Japanese',
    '日语': 'Japanese',
    '泰文': 'Thai',
    '泰语': 'Thai',
    '越南文': 'Vietnamese',
    '越南语': 'Vietnamese',
    '印尼文': 'Indonesian',
    '印尼语': 'Indonesian',
    '多国语': 'Multilingual',
    '通用': 'Universal'
  },
  '韩文': {
    '中文简体': '중국어 간체',
    '中文繁体': '중국어 번체',
    '英文': '영어',
    '英语': '영어',
    '韩文': '한국어',
    '韩语': '한국어',
    '日文': '일본어',
    '日语': '일본어',
    '泰文': '태국어',
    '泰语': '태국어',
    '越南文': '베트남어',
    '越南语': '베트남어',
    '印尼文': '인도네시아어',
    '印尼语': '인도네시아어',
    '多国语': '다국어',
    '通用': '글로벌 공용'
  },
  '日文': {
    '中文简体': '簡体字中国語',
    '中文繁体': '繁体字中国語',
    '英文': '英語',
    '英语': '英語',
    '韩文': '韓国語',
    '韩语': '韓国語',
    '日文': '日本語',
    '日语': '日本語',
    '泰文': 'タイ語',
    '泰语': 'タイ語',
    '越南文': 'ベトナム語',
    '越南语': 'ベトナム語',
    '印尼文': 'インドネシア語',
    '印尼语': 'インドネシア語',
    '多国语': '多言語',
    '通用': 'グローバル共通'
  },
  '泰文': {
    '中文简体': 'จีนตัวย่อ',
    '中文繁体': 'จีนตัวเต็ม',
    '英文': 'อังกฤษ',
    '英语': 'อังกฤษ',
    '韩文': 'เกาหลี',
    '韩语': 'เกาหลี',
    '日文': 'ญี่ปุ่น',
    '日语': 'ญี่ปุ่น',
    '泰文': 'ไทย',
    '泰语': 'ไทย',
    '越南文': 'เวียดนาม',
    '越南语': 'เวียดนาม',
    '印尼文': 'อินโดนีเซีย',
    '印尼语': 'อินโดนีเซีย',
    '多国语': 'หลายภาษา',
    '通用': 'สากล'
  },
  '越南文': {
    '中文简体': 'Tiếng Trung giản thể',
    '中文繁体': 'Tiếng Trung phồn thể',
    '英文': 'Tiếng Anh',
    '英语': 'Tiếng Anh',
    '韩文': 'Tiếng Hàn',
    '韩语': 'Tiếng Hàn',
    '日文': 'Tiếng Nhật',
    '日语': 'Tiếng Nhật',
    '泰文': 'Tiếng Thái',
    '泰语': 'Tiếng Thái',
    '越南文': 'Tiếng Việt',
    '越南语': 'Tiếng Việt',
    '印尼文': 'Tiếng Indonesia',
    '印尼语': 'Tiếng Indonesia',
    '多国语': 'Đa ngôn ngữ',
    '通用': 'Phổ thông toàn cầu'
  },
  '印尼文': {
    '中文简体': 'Bahasa Mandarin Sederhana',
    '中文繁体': 'Bahasa Mandarin Tradisional',
    '英文': 'Bahasa Inggris',
    '英语': 'Bahasa Inggris',
    '韩文': 'Bahasa Korea',
    '韩语': 'Bahasa Korea',
    '日文': 'Bahasa Jepang',
    '日语': 'Bahasa Jepang',
    '泰文': 'Bahasa Thailand',
    '泰语': 'Bahasa Thailand',
    '越南文': 'Bahasa Vietnam',
    '越南语': 'Bahasa Vietnam',
    '印尼文': 'Bahasa Indonesia',
    '印尼语': 'Bahasa Indonesia',
    '多国语': 'Multibahasa',
    '通用': 'Universal'
  }
};

export function formatLanguageBadge(lang: string, currentLanguage: string): string {
  const targetMap = LANG_NAME_MAP[currentLanguage] || LANG_NAME_MAP['中文简体'];
  return targetMap?.[lang] || lang;
}
