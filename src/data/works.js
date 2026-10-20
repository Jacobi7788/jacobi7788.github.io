/* ==========================================================================
   作品数据 —— 以后加案例 / 换截图，只改这个文件
   --------------------------------------------------------------------------
   截图放到 public/assets/ 对应文件夹，然后把路径填进 shots[].src
   例如：public/assets/shop/mx-sales.jpg  →  src: '/assets/shop/mx-sales.jpg'

   视频：mp4 放 public/assets/video/，填 video 字段；封面填 poster
   src 留空 '' 时，页面显示“待上传”占位
   ========================================================================== */

export const works = [
  {
    slug: 'ai-video',
    title: 'AI 创意视频',
    sub: '实拍混剪 + AI 成片',
    year: '',
    cover: '/assets/video/posters/ai-01.jpg',
    facts: [
      { k: '单条最高播放', v: '800 万' },
      { k: '单条带货', v: '2,000+ 单' },
      { k: 'AI 混剪', v: '多条百万级播放' },
    ],
    blocks: [
      {
        h: '结果',
        p: ['达人内容与自营实拍、AI 混剪素材跑出高播放与带货；站内放成片样例。'],
      },
    ],
    shots: [
      { src: '/assets/video/plan-bd.png', cap: '策划案' },
      { src: '/assets/video/plan-brand.png', cap: '策划案' },
    ],
    videos: [
      { src: '/assets/video/ai-01.mp4', poster: '/assets/video/posters/ai-01.jpg', cap: 'AI 成片 01' },
      { src: '/assets/video/ai-02.mp4', poster: '/assets/video/posters/ai-02.jpg', cap: 'AI 成片 02' },
      { src: '/assets/video/ai-03.mp4', poster: '/assets/video/posters/ai-03.jpg', cap: 'AI 成片 03' },
      { src: '/assets/video/live-01.mp4', poster: '/assets/video/posters/live-01.jpg', cap: '实拍 / 达人样例 01' },
      { src: '/assets/video/live-02.mp4', poster: '/assets/video/posters/live-02.jpg', cap: '实拍 / 达人样例 02' },
      { src: '/assets/video/live-03.mp4', poster: '/assets/video/posters/live-03.jpg', cap: '实拍 / 达人样例 03' },
      { src: '/assets/workflow/video-replicate.mp4', poster: '/assets/video/posters/video-replicate.jpg', cap: '视频复刻' },
    ],
  },
  {
    slug: 'ai-workflow',
    title: 'AI 工作流',
    sub: '选品到素材，流水线日产提升 5–10 倍',
    year: '',
    cover: '/assets/video/posters/product-main-image.jpg',
    facts: [
      { k: '传统', v: '约 20 条 / 人 / 天' },
      { k: '接入 AI', v: '100–200 条 / 人 / 天' },
      { k: '效率', v: '提升 5–10 倍' },
    ],
    blocks: [
      {
        h: '思路',
        p: ['飞书多维表格做任务中台，串起选品、商品卡、主图、短视频脚本与数据复盘；新人照表可产出，爆款可复刻。'],
      },
    ],
    flow: ['选品分析', '商品卡', '主图 / 详情', '短视频脚本', 'BD 跟进', '数据复盘'],
    shots: [],
    videos: [
      { src: '/assets/workflow/product-main-image.mp4', poster: '/assets/video/posters/product-main-image.jpg', cap: '产品主图工作流' },
      { src: '/assets/workflow/ugc.mp4', poster: '/assets/video/posters/ugc.jpg', cap: 'UGC 视频工作流' },
      { src: '/assets/workflow/ai-shorts.mp4', poster: '/assets/video/posters/ai-shorts.jpg', cap: 'AI Shorts 工作台' },
    ],
  },
  {
    slug: 'projects',
    title: '数据总览',
    sub: '墨西哥 · 美区跨境店铺操盘',
    year: '',
    cover: '/assets/projects/mx-beauty-gmv.png',
    facts: [
      { k: '墨区峰值', v: '月均 2,000 单 · 峰值 5,800' },
      { k: '广告 ROAS', v: '稳定 5+ · 峰值约 13' },
      { k: '美区单品', v: '上线当月 GMV 5 万美元' },
    ],
    blocks: [
      {
        h: '结果',
        p: [
          '墨西哥美妆零食：1 个月从约 100 单拉到月均 2,000、峰值 5,800；ROAS 稳定 5+；零食单品类目前列。',
          '墨区鞋服：世界杯期间单品单月约 9,000 单。',
          '美区店群：3C 单品首月 GMV 约 5 万美元；自研软路由支撑多账号矩阵。',
        ],
      },
    ],
    shots: [
      { src: '/assets/projects/mx-beauty-gmv.png', cap: '墨区美妆店铺 GMV' },
      { src: '/assets/projects/mx-feb-gmv.png', cap: '墨区月度数据' },
      { src: '/assets/projects/mx-trend.png', cap: '墨区近 28 日趋势' },
      { src: '/assets/projects/mx-roas.png', cap: '广告 / ROAS' },
      { src: '/assets/projects/mx-snack-rank.jpg', cap: '零食类目榜 #1' },
      { src: '/assets/projects/us-28d-gmv.jpg', cap: '美区 GMV' },
      { src: '/assets/projects/us-ads-roi.png', cap: '美区广告 ROI ≈ 20' },
    ],
    videos: [],
  },
];

export const profile = {
  name: '郭宗楠',
  en: 'Jacobi',
  phone: '13609024221',
  phoneDisplay: '136 0902 4221',
  role: 'AI 跨境电商运营',
  city: '广州',
  line1: 'AI 内容与创意视频执行',
  line2: '跨境电商运营 | 广州',
  blurb: '把商品和业务目标，转化为可测试的内容创意、可交付的视频素材与可复用的生产工作流。',
};
