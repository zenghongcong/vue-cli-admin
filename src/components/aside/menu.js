let menu = [
  {
    title: "广告管理",
    icon: "el-icon-s-promotion",
    child: [
      {
        title: "banner",
        path: "/adv/banner"
      }
    ]
  },
  {
    title: "商品管理",
    icon: "el-icon-goods",
    child: [
      {
        title: "商品列表",
        path: "/good/list"
      },
      {
        title: "专题管理",
        path: "/good/topic"
      },
      {
        title: "专题商品",
        path: "/good/topic-goods"
      }
    ]
  },
  {
    title: "订单管理",
    icon: "el-icon-s-order",
    child: [
      {
        title: "订单列表",
        path: "/order/list"
      }
    ]
  },
  {
    title: "用户管理",
    icon: "el-icon-user",
    child: [
      {
        title: "用户信息",
        path: "/user/list"
      }
    ]
  },
  {
    title: "消息推送",
    icon: "el-icon-message",
    child: [
      {
        title: "push推送",
        path: "/message/push"
      },
      {
        title: "系统消息",
        path: "/message/system"
      },
      {
        title: "短信推送",
        path: "/message/sms"
      }
    ]
  },
  {
    title: "数据报表",
    icon: "el-icon-pie-chart",
    child: [
      {
        title: "数据总览",
        path: "/report/preview"
      },
      {
        title: "商品订单排行",
        path: "/report/order-rank"
      },
      {
        title: "类目分析",
        path: "/report/category"
      },
      {
        title: "激活数据",
        path: "/report/alive"
      }
    ]
  },
  {
    title: "财务中心",
    icon: "el-icon-money",
    child: [
      {
        title: "提现",
        path: "/finance/cash"
      },
      {
        title: "充值",
        path: "/finance/recharge"
      }
    ]
  },
  {
    title: "参数配置",
    icon: "el-icon-setting",
    child: [
      {
        title: "分润方案",
        path: "/setting/profit"
      }
    ]
  },
  {
    title: "其他",
    icon: "el-icon-more-outline",
    child: [
      {
        title: "app版本管理",
        path: "/other/app-version"
      }
    ]
  }
];

export default menu;
