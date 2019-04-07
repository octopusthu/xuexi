function getUrlParam(name) {
        var query = globalCache.sysQuery;
        return query[name];
    }
    function getUrlParamOrigin(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return decodeURIComponent(r[2]);
      }
    
      return null; //返回参数值
    }
    
new Vue({
    el:'#app',
    data:{"src_9djoy7fjv7400":"","mode_9djoy7fjv7400":2,"src_8lmbjus1vz400":"","mode_8lmbjus1vz400":2,"innerText_e9ob5plx7u800":"学习强国","innerText_ihe8tk61h7c00":">>","innerText_373r31v5wsw00":"学习强国","src_aepwflu1h6800":"","mode_aepwflu1h6800":2,"src_ed5lslw30ig00":"","mode_ed5lslw30ig00":2,"src_ejp1kqovz4w00":{"filename":"顶部背景.png","_id":"5a1d754f2da1335610ea6a8f","url":"https://bootcdn.xuexi.cn/18600410326/4d9b77286d55ae66b7bd31fcb7619c2d.png"},"mode_ejp1kqovz4w00":2,"innerText_kur830j6bsw00":"学习强国","src_i095deqar3400":"","mode_i095deqar3400":2,"src_3k404eh37gq00":"","mode_3k404eh37gq00":2,"value_hj9orckh95s00":[],"pageSet_hj9orckh95s00":0,"loadMore_hj9orckh95s00":0,"showPageSet_hj9orckh95s00":0,"src_e26bryms22o00":"","mode_e26bryms22o00":2,"src_9vbojkfmu8w00":"","mode_9vbojkfmu8w00":2,"src_5oysc83w9ic00":"","mode_5oysc83w9ic00":2,"src_2eiuw8t8n0e80":"","mode_2eiuw8t8n0e80":2,"judgeHtml_gktwzw0eq0o00":"","src_7gol6e7oed400":"","mode_7gol6e7oed400":2,"innerText_55w2zdxqswk00":"暂无数据","judgeShow_7gol6e7oed400":false,"src_jp5m498t76o00":"","mode_jp5m498t76o00":2,"value_4ydd0jeud7g00":[],"pageSet_4ydd0jeud7g00":0,"loadMore_4ydd0jeud7g00":0,"src_8m57xrd94y800":"","mode_8m57xrd94y800":2,"count_bihw8wtupvk00":0,"page_bihw8wtupvk00":1,"list_bihw8wtupvk00":[],"jump_bihw8wtupvk00":"","value_56pakso7dlk00":[],"pageSet_56pakso7dlk00":0,"loadMore_56pakso7dlk00":0,"src_en05onrr1ts00":"","mode_en05onrr1ts00":2,"src_aqmiq8w5e8800":"","mode_aqmiq8w5e8800":2,"src_ckczr4b7ywg00":"","mode_ckczr4b7ywg00":2,"value_cp82fmrpenk00":[],"pageSet_cp82fmrpenk00":0,"loadMore_cp82fmrpenk00":0,"innerText_2j80w85mmc800":"0","innerText_8o6pnzq6y2000":"请输入内容","currentPageId":"9a3668c13f6e303932b5e0e100fc248b","currentUser":"","location_latitude":"","location_longitude":"","localization":"zh","currentRoleAuthList":[],"judgeHtml_imto2r1bquw00":""},
    computed:{
        
    list_bihw8wtupvk00 : function(val) {
      var count = parseInt(this.count_bihw8wtupvk00)
      var page  = parseInt(this.page_bihw8wtupvk00)
      if (page <= count) {
        return pagination(count, page)
      }
      return pagination(count, 0)
    }
    },
    watch:{
      
    },
    filters: {
      formatDateFilter: function(timestamp, fmt) {
        if (timestamp) {
          if (!isNaN(timestamp)) {
            timestamp = parseInt(timestamp)
          }
          if (!isNaN(timestamp) && timestamp.toString().length == '10') {
            timestamp = timestamp * 1000
          }
          return formatDate(fmt, timestamp)
        }
        return ''
      }
    },
    created: function(){
        if ('pc' == 'pc') {
  if (typeof dd != 'undefined') {
    dd = DingTalkPC
  }
}
window.ddenv = {
  corpId: '',
  agentId: '',
  appId: 'dingoankubyrfkttorhpou'
};

if (typeof dd != 'undefined') {
  var url = '/api/dingtalk/auth';
  var params = { url: location.href };
  httpPost(url, params).done(function (res) {
    res = res.data
    var ddoptions = {
      agentId: window.ddenv.agentId, // 必填，微应用ID,
      corpId: window.ddenv.corpId,
      jsApiList: [
        'runtime.info',
        'device.notification.alert',
        'device.notification.confirm',
        'device.notification.prompt',
        'device.notification.toast',
        'runtime.permission.requestAuthCode', // 获取免登授权码 
        'device.geolocation.get', // 获取地理位置信息
        'device.base.getUUID', // 获取uuid
        'biz.util.uploadImageFromCamera',
        'biz.util.uploadImage',
        'device.accelerometer.watchShake',
        'biz.util.scan',
        'biz.user.get',
        'biz.cspace.saveFile',
        'biz.cspace.preview',
        'biz.cspace.chooseSpaceDir',
        'biz.util.uploadAttachment'
      ]
    }
    ddoptions.nonceStr = res.nonceStr
    ddoptions.timeStamp = res.timeStamp
    ddoptions.signature = res.signature
    // console.log(ddoptions);
    dd.config(ddoptions);

    // dd ready
    dd.ready(function (res) {
      var apiUrl = '/api/dingtalk'
      dingtalk.runtime.permission.requestAuthCode({
        //企业ID
        corpId: window.ddenv.corpId,
        onSuccess: function (result) {},
        onFail: function (err) {}
      })
    })
  })
}
if (this.onChangeCookie) this.onChangeCookie();
if (this.getUserAuthList) this.getUserAuthList();this.flow_method_i4n6mff4u2w00();

this.currentUser = localStorage.getItem('phone') || '';this.flow_method_2cpphhyfebk00();

    },
    ready: function() {
      
      if(lessIEVersion(11)) {
        if(document.styleSheets) {
          document.styleSheets[0].addRule('style', 'display: none !important;');
        }
        flexibility(document.body);
        document.styleSheets[0].addRule('.screen', 'position: relative !important;');
      } else if(lessIE9()) {
        alert('您的浏览器版本过低,为了更好的体验,建议升级到IE9以上版本');
      }
    },
    methods: {
        
click_e9ob5plx7u800:function(){var that = this;  var url = "/";window.open(url);},
click_hj9orckh95s00:
            function(){
            },

interceptingFirstSpace_eqj4drwadtc00:function(time){
               var timeArr = time.split(" ");
               if(timeArr){
                  return timeArr[0];
               }else
                return '';
            },

flow_method_fa66oxv5w4w0:
      function(item, event) {
        item = item || {};
        event = event || {};
        // 跳转页面
        var self = this
        try {
          
    // FLOW [COMPUTE] 2
    
      var res_2_0 = 
          function() {
            var param = {
              
            }
            return ((item.pdf_id || [''])[0] ? item.pdf_id[0].imageInfo: '').replace('&', '&amp;')
          }()
        
      
    
      if(res_2_0) {
      
        var url = res_2_0
        
        window.open(url)
        
      }else {
      
        var url = item.static_page_url
        
        window.open(url)
        
      }
      
    
    
        } catch(e) {
          console.error(e.stack);
        }
      },

complexExpression_7gol6e7oed400:function() {
            var that = this;
            
            if((that.innerText_2j80w85mmc800 == '1')){
                return true;
            }else
                return false;
        },

page_action_bihw8wtupvk00:
    function(item) {
      if(!isNaN(item)) {
        if(this.page_bihw8wtupvk00 == item) {
          return false
        }
        this.page_bihw8wtupvk00 = item
      }
      if(item == '<<') {
        this.page_bihw8wtupvk00 = parseInt(this.page_bihw8wtupvk00)
        if(this.page_bihw8wtupvk00 > 1) {
          this.page_bihw8wtupvk00 -= 1
        }
      }
      if(item == '>>') {
        this.page_bihw8wtupvk00 = parseInt(this.page_bihw8wtupvk00)
        if(this.page_bihw8wtupvk00 < this.count_bihw8wtupvk00) {
          this.page_bihw8wtupvk00 += 1
        }
      }
      this.flow_method_27ciyzkpc3gg0(item)
    },

jumpPage_bihw8wtupvk00:
      function() {
        var item = this.jump_bihw8wtupvk00;
        if(!isNaN(item)) {
          if(this.page_bihw8wtupvk00 == item) {
            return false
          }
          this.page_bihw8wtupvk00 = item
        } else {
          this.page_bihw8wtupvk00 = parseInt(this.page_bihw8wtupvk00)
          if(this.page_bihw8wtupvk00 > 1) {
            this.page_bihw8wtupvk00 -= 1
          }
        }
        this.flow_method_27ciyzkpc3gg0(item)
      },

flow_method_cka8ayva4e000:
      function(item, event) {
        item = item || {};
        event = event || {};
        // 前台初始化-查询数据
        var self = this
        try {
          
      var res_1 = null
      
            var param = {
                programa_id: getUrlParam('programa_id'),
cate_id: getUrlParam('cate_id'),
type: getUrlParam('type'),
tags_a: getUrlParam('tags_a'),
source: getUrlParam('source'),
pageNumber: getUrlParam('pageNumber'),
pageCount: '20',
tags_b: getUrlParam('tags_b')
            }
            
      
      var key = 'fpcka8ayva4e0001';
      res_1 = globalCache[key] || {}
      stringToObject(res_1);
      var pageNumber = getUrlParamOrigin('pageNumber') || 1;
      res_1.list = res_1.list.slice((pageNumber-1)*20, pageNumber*20);
      res_1.pageNumber = pageNumber;
      
      
    // FLOW [COMPUTE] 2
    
      var res_2_0 = res_1.list
      self.value_hj9orckh95s00 = res_2_0

      var res_2_1 = 
          function() {
            var param = {
              
            }
            return Math.ceil(res_1.count/20)
          }()
        
      self.count_bihw8wtupvk00 = res_2_1

      var res_2_2 = res_1.pageNumber
      self.page_bihw8wtupvk00 = res_2_2
    
    
      
      
        } catch(e) {
          console.error(e.stack);
        }
      },

flow_method_i4n6mff4u2w00:
      function(item, event) {
        item = item || {};
        event = event || {};
        // 初始化
        var self = this
        try {
          
      if(getUrlParam('title')) {
      
    // FLOW [COMPUTE] 10
    
      var res_10_0 = getUrlParam('title')
      document.title = res_10_0

      var res_10_1 = getUrlParam('title')
      self.innerText_373r31v5wsw00 = res_10_1

      var res_10_2 = getUrlParam('title')
      self.innerText_kur830j6bsw00 = res_10_2
    
        self.flow_method_cka8ayva4e000(item, event)
        
        
    
      }else {
      
      if(getUrlParam('four_id')) {
      
    // FLOW [COMPUTE] 8
    
      var res_8_0 = getUrlParam('four_id')
      document.title = res_8_0

      var res_8_1 = getUrlParam('four_id')
      self.innerText_373r31v5wsw00 = res_8_1

      var res_8_2 = getUrlParam('four_id')
      self.innerText_kur830j6bsw00 = res_8_2
    
        self.flow_method_cka8ayva4e000(item, event)
        
        
    
      }else {
      
      if(getUrlParam('type')) {
      
    // FLOW [COMPUTE] 4
    
      var res_4_0 = getUrlParam('type')
      document.title = res_4_0

      var res_4_1 = getUrlParam('type')
      self.innerText_373r31v5wsw00 = res_4_1

      var res_4_2 = getUrlParam('type')
      self.innerText_kur830j6bsw00 = res_4_2
    
        self.flow_method_cka8ayva4e000(item, event)
        
        
    
      }else {
      
      if(getUrlParam('cate_id')) {
      
    // FLOW [COMPUTE] 5
    
      var res_5_0 = getUrlParam('cate_id')
      document.title = res_5_0

      var res_5_1 = getUrlParam('cate_id')
      self.innerText_373r31v5wsw00 = res_5_1

      var res_5_2 = getUrlParam('cate_id')
      self.innerText_kur830j6bsw00 = res_5_2
    
        self.flow_method_cka8ayva4e000(item, event)
        
        
    
      }else {
      
      if(getUrlParam('programa_id')) {
      
    // FLOW [COMPUTE] 16
    
      var res_16_0 = getUrlParam('programa_id')
      document.title = res_16_0

      var res_16_1 = getUrlParam('programa_id')
      self.innerText_373r31v5wsw00 = res_16_1

      var res_16_2 = getUrlParam('programa_id')
      self.innerText_kur830j6bsw00 = res_16_2
    
        self.flow_method_cka8ayva4e000(item, event)
        
        
    
      }else {
      
      if(getUrlParam('tags_a')) {
      
    // FLOW [COMPUTE] 18
    
      var res_18_0 = getUrlParam('tags_a')
      document.title = res_18_0

      var res_18_1 = getUrlParam('tags_a')
      self.innerText_373r31v5wsw00 = res_18_1

      var res_18_2 = getUrlParam('tags_a')
      self.innerText_kur830j6bsw00 = res_18_2
    
        self.flow_method_cka8ayva4e000(item, event)
        
        
    
      }else {
      
      if(getUrlParam('tags_b')) {
      
    // FLOW [COMPUTE] 20
    
      var res_20_0 = getUrlParam('tags_b')
      document.title = res_20_0

      var res_20_1 = getUrlParam('tags_b')
      self.innerText_373r31v5wsw00 = res_20_1

      var res_20_2 = getUrlParam('tags_b')
      self.innerText_kur830j6bsw00 = res_20_2
    
        self.flow_method_cka8ayva4e000(item, event)
        
        
    
      }else {
      
      }
      
    
      }
      
    
      }
      
    
      }
      
    
      }
      
    
      }
      
    
      }
      
    
        } catch(e) {
          console.error(e.stack);
        }
      },

flow_method_27ciyzkpc3gg0:
      function(item, event) {
        item = item || {};
        event = event || {};
        // 分页跳转666
        var self = this
        try {
          
        var url = '/9a3668c13f6e303932b5e0e100fc248b'
        
        var param = {
          pageId: '9a3668c13f6e303932b5e0e100fc248b',
            programa_id: getUrlParam('programa_id'),
cate_id: getUrlParam('cate_id'),
type: getUrlParam('type'),
tags_a: getUrlParam('tags_a'),
source: getUrlParam('source'),
title: getUrlParam('title'),
pageNumber: self.page_bihw8wtupvk00
        }
        var qsString = '';
        var questMark = false;
        var qsObj = {};

        for (var i = 1; i <= 3; i++) {
          var spName = 'p' + i;
          if (param[spName]) {
            qsObj[spName] = param[spName];
            questMark = true;
            delete param[spName];
          }
        }
        if (param.pageNumber) {
          qsObj.pageNumber = param.pageNumber;
          questMark = true;
          delete param.pageNumber;
        }
        if (param.pfr) {
          qsObj.pfr = param.pfr;
          questMark = true;
          delete param.pfr;
        }
        if (questMark) {
          qsString = '?' + querystring(qsObj);
        }
        for (var key in param) {
          if (!param[key]) delete param[key];
        }
        
        var queryMd5 = md5(JSON.stringify(param)).toLowerCase();
        url = '/' + queryMd5 + '/' + '9a3668c13f6e303932b5e0e100fc248b' + '.html' + qsString;
        
        location.href = url
        
        } catch(e) {
          console.error(e.stack);
        }
      },

onChangeCookie:
      function () {
         var that = this;
         var localizationFlag = Cookies.get('localization');
         if ( localizationFlag ){
           that.localization = localizationFlag;
         }
       },
       
flow_method_2cpphhyfebk00:
      function(item, event) {
        item = item || {};
        event = event || {};
        // document初始化
        var self = this
        try {
          
    // FLOW [COMPUTE] 1
    
      var res_1_0 = 
        function() {
          var template = '#a# | 学习强国'
          var param = {
            
            a: document.title
            
          }
          for(var key in param) {
            var value = param[key]
            if(Object.prototype.toString.call(value) == '[object Array]') {
                value = value.join(',')
            }
            var source = '#' + key + '#'
            template = template.replace(source, value)
          }
          return template
        }()
        
      document.title = res_1_0
    
    
        } catch(e) {
          console.error(e.stack);
        }
      },

        logout: function () {
            localStorage.removeItem('phone');
            httpPost("/api/logout").done(function (res) {
                location.href = "/login";
            });
        }
    }
});