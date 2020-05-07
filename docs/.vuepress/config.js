module.exports = {
  "title": "JING HOUSE",
  "description": "你必须只有内心丰富，才能摆脱这些生活表面的相似。",
  "dest": "public",
  "base": "/GA/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    valineConfig: {
      appId: 'dL7bNHi2mwTwRObwFG4Ft0GD-gzGzoHsz',
      appKey: 'jfD7lJ03yuq0iDNhKJWN6rad'
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时光轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "gitee",
            "link": "https://gitee.com/yiJingJingLove",
            "icon": "reco-npm"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/zhengjingzhengjing",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "Gitee Pages",
        "desc": "gitee pages",
        "email": "1156743527@qq.com",
        "link": "http://yijingjinglove.gitee.io/yjj/"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "更新时间 ",
    "author": "Jing",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2020405"
  },
  "markdown": {
    "lineNumbers": true
  }
}