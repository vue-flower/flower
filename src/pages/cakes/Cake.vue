<template>
  <div class="cake-container">
    <TopHeader/>
    
    <div class="cake-header">
      <CakeItem>
        <ul class="nav-left" >
          <li><a  href="">综合</a></li>
          <li>
            <a href="">销量
            </a>
          </li>
          <li><a href="">价格</a></li>
          <li><a href="">最新</a></li>
        </ul>
      </CakeItem>
      <div class="search-city">
        <p>快速查找</p>
        <ul class="nav-left">
          <li class="city">
            <select name="" id="" v-model="selectProvince">
              <option value="" >请选择省份</option>
              <option :value="item.province" v-for="(item,index) in allProvince" :key="index">{{item.name}}</option>
            </select>

          </li>
          <li class="contry">
            <select name="" id="" v-model="selectCity">
              <option value="">请选择城市</option>
              <option :value="item.city" v-for="(item,index) in cities" :key="index">{{item.name}}</option>
            </select>
          </li>
          <li class="region">
            <select name="" id="">
              <option value="">请选择县/区</option>
              <option :value="item.city" v-for="(item,index) in regions" :key="index">{{item.name}}</option>
            </select>
          </li>

          <li class="enter"><button>进入</button></li>
          <li class="search">
            <input type="text" placeholder="请输入蛋糕配送城市">
            <a class="soso_btn" href="javascript;"><span class="ico ico-search"></span></a>
          </li>
        </ul>
      </div>

      <div class="flower-nav">
        <ul class="nav-left clearfix">
          <li>按拼音首字母选择</li>
        </ul>  
    
        <ul class="nav-rigth">
          <li>
            <a :class="{active:chooseCity === 'acity'}" href="javascript:;" name="acity" @click.prevent="chooseCity='acity'">A</a>
          </li>
          <li>
            <a class="" :class="{active:chooseCity === 'bcity'}" href="javascript:;" name="bcity" @click.prevent="chooseCity='bcity'">B</a>
          </li>
          <li><a class="" href="javascript:;" name="ccity">C</a></li>
          <li><a class="" href="javascript:;" name="dcity">D</a></li>
          <li><a class="" href="javascript:;" name="ecity">E</a></li>
          <li><a class="" href="javascript:;" name="fcity">F</a></li>
          <li><a class="" href="javascript:;" name="gcity">G</a></li>
        </ul>
      </div>

      <div class="city_box">
        <!--华北、东北-->
        <div class="cs_zs">
        <div class="name-title">华北、东北</div>
        <div class="xzcs_dt">
          <span><a href="/cake/city/beijingdangao.html" title="北京蛋糕" class="f_csb" name="bcity" :class="{active:chooseCity === 'bcity'}">北京</a></span>
          <span><a href="/cake/city/tianjindangao.html" title="天津蛋糕" class="f_cs" name="tcity">天津</a></span>
          <span><a href="/cake/city/shijiazhuangdangao.html" title="石家庄蛋糕" class="f_cs" name="scity">石家庄</a></span>
          <span><a href="/cake/city/tangshandangao.html" title="唐山蛋糕" class="f_cs" name="tcity">唐山</a></span>
          <span><a href="/cake/city/?city=邯郸" title="邯郸蛋糕" class="f_cs" name="hcity">邯郸</a></span>
          <span><a href="/cake/city/?city=沧州" title="沧州蛋糕" class="f_cs" name="ccity">沧州</a></span>
          <span><a href="/cake/city/?city=保定" title="保定蛋糕" class="f_csb" name="bcity">保定</a></span>
          <span><a href="/cake/city/?city=廊坊" title="廊坊蛋糕" class="f_cs" name="lcity">廊坊</a></span>
          <span><a href="/cake/city/?city=邢台" title="邢台蛋糕" class="f_cs" name="xcity">邢台</a></span>
          <span><a href="/cake/city/?city=张家口" title="张家口蛋糕" class="f_cs" name="zcity">张家口</a></span>
          <span><a href="/cake/city/?city=秦皇岛" title="秦皇岛蛋糕" class="f_cs" name="qcity">秦皇岛</a></span>
          <span><a href="/cake/city/?city=武安" title="武安蛋糕" class="f_cs" name="wcity">武安</a></span>
          <span><a href="/cake/city/huhehaotedangao.html" title="呼和浩特蛋糕" class="f_cs" name="hcity">呼和浩特</a></span>
          <span><a href="/cake/city/?city=鄂尔多斯" title="鄂尔多斯蛋糕" class="f_cs" name="ecity">鄂尔多斯</a></span>
          <span><a href="/cake/city/?city=包头" title="包头蛋糕" class="f_csb" name="bcity" :class="{active:chooseCity === 'bcity'}">包头</a></span>
          <span><a href="/cake/city/taiyuandangao.html" title="太原蛋糕" class="f_cs" name="tcity">太原</a></span>
          <span><a href="/cake/city/?city=大同" title="大同蛋糕" class="f_cs" name="dcity">大同</a></span>
          <span><a href="/cake/city/?city=阳泉" title="阳泉蛋糕" class="f_cs" name="ycity">阳泉</a></span>
          <span><a href="/cake/city/?city=晋城" title="晋城蛋糕" class="f_cs" name="jcity">晋城</a></span>
          <span><a href="/cake/city/shenyangdangao.html" title="沈阳蛋糕" class="f_cs" name="scity">沈阳</a></span>
          <span><a href="/cake/city/daliandangao.html" title="大连蛋糕" class="f_cs" name="dcity">大连</a></span>
          <span><a href="/cake/city/?city=鞍山" title="鞍山蛋糕" class="f_cs"  :class="{active:chooseCity === 'acity'}" name="acity">鞍山</a></span>
          <span><a href="/cake/city/?city=本溪" title="本溪蛋糕" class="f_csb" name="bcity" :class="{active:chooseCity === 'bcity'}">本溪</a></span>
          <span><a href="/cake/city/?city=盘锦" title="盘锦蛋糕" class="f_cs" name="pcity">盘锦</a></span>
          <span><a href="/cake/city/?city=锦州" title="锦州蛋糕" class="f_cs" name="jcity">锦州</a></span>
          <span><a href="/cake/city/?city=抚顺" title="抚顺蛋糕" class="f_cs" name="fcity">抚顺</a></span>
          <span><a href="/cake/city/?city=丹东" title="丹东蛋糕" class="f_cs" name="dcity">丹东</a></span>
          <span><a href="/cake/city/?city=辽阳" title="辽阳蛋糕" class="f_cs" name="lcity">辽阳</a></span>
          <span><a href="/cake/city/?city=朝阳" title="朝阳蛋糕" class="f_cs" name="ccity">朝阳</a></span>
          <span><a href="/cake/city/?city=铁岭" title="铁岭蛋糕" class="f_cs" name="tcity">铁岭</a></span>
          <span><a href="/cake/city/?city=阜新" title="阜新蛋糕" class="f_cs" name="fcity">阜新</a></span>
          <span><a href="/cake/city/?city=葫芦岛" title="葫芦岛蛋糕" class="f_cs" name="hcity">葫芦岛</a></span>
          <span><a href="/cake/city/haerbindangao.html" title="哈尔滨蛋糕" class="f_cs" name="hcity">哈尔滨</a></span>
          <span><a href="/cake/city/?city=大庆" title="大庆蛋糕" class="f_cs" name="dcity">大庆</a></span>
          <span><a href="/cake/city/?city=齐齐哈尔" title="齐齐哈尔蛋糕" class="f_cs" name="qcity">齐齐哈尔</a></span>
          <span><a href="/cake/city/?city=牡丹江" title="牡丹江蛋糕" class="f_cs" name="mcity">牡丹江</a></span>
          <span><a href="/cake/city/?city=佳木斯" title="佳木斯蛋糕" class="f_cs" name="jcity">佳木斯</a></span>
          <span><a href="/cake/city/changchundangao.html" title="长春蛋糕" class="f_cs" name="ccity">长春</a></span>
          <span><a href="/cake/city/?city=吉林" title="吉林蛋糕" class="f_cs" name="jcity">吉林</a></span>
          <span><a href="/cake/city/?city=延吉" title="延吉蛋糕" class="f_cs" name="ycity">延吉</a></span>
        </div>
        </div>
        <!--华东地区-->
        <div class="cs_zs">
            <div class="name-title">华东地区</div>
            <div class="xzcs_dt">
                <span><a href="/cake/city/shanghaidangao.html" title="上海蛋糕" class="f_cs" name="scity">上海</a></span>
                <span><a href="/cake/city/nanjingdangao.html" title="南京蛋糕" class="f_cs" name="ncity">南京</a></span>
                <span><a href="/cake/city/suzhoudangao.html" title="苏州蛋糕" class="f_cs" name="scity">苏州</a></span>
                <span><a href="/cake/city/wuxidangao.html" title="无锡蛋糕" class="f_cs" name="wcity">无锡</a></span>
                <span><a href="/cake/city/?city=南通" title="南通蛋糕" class="f_cs" name="ncity">南通</a></span>
                <span><a href="/cake/city/?city=徐州" title="徐州蛋糕" class="f_cs" name="xcity">徐州</a></span>
                <span><a href="/cake/city/?city=常州" title="常州蛋糕" class="f_cs" name="ccity">常州</a></span>
                <span><a href="/cake/city/?city=盐城" title="盐城蛋糕" class="f_cs" name="ycity">盐城</a></span>
                <span><a href="/cake/city/?city=扬州" title="扬州蛋糕" class="f_cs" name="ycity">扬州</a></span>
                <span><a href="/cake/city/?city=泰州" title="泰州蛋糕" class="f_cs" name="tcity">泰州</a></span>
                <span><a href="/cake/city/?city=镇江" title="镇江蛋糕" class="f_cs" name="zcity">镇江</a></span>
                <span><a href="/cake/city/?city=淮安" title="淮安蛋糕" class="f_cs" name="hcity">淮安</a></span>
                <span><a href="/cake/city/?city=连云港" title="连云港蛋糕" class="f_cs" name="lcity">连云港</a></span>
                <span><a href="/cake/city/?city=宿迁" title="宿迁蛋糕" class="f_cs" name="scity">宿迁</a></span>
                <span><a href="/cake/city/?city=昆山" title="昆山蛋糕" class="f_cs" name="kcity">昆山</a></span>
                <span><a href="/cake/city/?city=江阴" title="江阴蛋糕" class="f_cs" name="jcity">江阴</a></span>
                <span><a href="/cake/city/hangzhoudangao.html" title="杭州蛋糕" class="f_cs" name="hcity">杭州</a></span>
                <span><a href="/cake/city/ningbodangao.html" title="宁波蛋糕" class="f_cs" name="ncity">宁波</a></span>
                <span><a href="/cake/city/wenzhoudangao.html" title="温州蛋糕" class="f_cs" name="wcity">温州</a></span>
                <span><a href="/cake/city/?city=绍兴" title="绍兴蛋糕" class="f_cs" name="scity">绍兴</a></span>
                <span><a href="/cake/city/?city=台州" title="台州蛋糕" class="f_cs" name="tcity">台州</a></span>
                <span><a href="/cake/city/?city=嘉兴" title="嘉兴蛋糕" class="f_cs" name="jcity">嘉兴</a></span>
                <span><a href="/cake/city/?city=金华" title="金华蛋糕" class="f_cs" name="jcity">金华</a></span>
                <span><a href="/cake/city/?city=湖州" title="湖州蛋糕" class="f_cs" name="hcity">湖州</a></span>
                <span><a href="/cake/city/?city=舟山" title="舟山蛋糕" class="f_cs" name="zcity">舟山</a></span>
                <span><a href="/cake/city/?city=丽水" title="丽水蛋糕" class="f_cs" name="lcity">丽水</a></span>
                <span><a href="/cake/city/?city=衢州" title="衢州蛋糕" class="f_cs" name="ccity">衢州</a></span>
                <span><a href="/cake/city/jinandangao.html" title="济南蛋糕" class="f_cs" name="jcity">济南</a></span>
                <span><a href="/cake/city/qingdaodangao.html" title="青岛蛋糕" class="f_cs" name="qcity">青岛</a></span>
                <span><a href="/cake/city/yantaidangao.html" title="烟台蛋糕" class="f_cs" name="ycity">烟台</a></span>
                <span><a href="/cake/city/?city=潍坊" title="潍坊蛋糕" class="f_cs" name="wcity">潍坊</a></span>
                <span><a href="/cake/city/?city=淄博" title="淄博蛋糕" class="f_cs" name="zcity">淄博</a></span>
                <span><a href="/cake/city/?city=济宁" title="济宁蛋糕" class="f_cs" name="jcity">济宁</a></span>
                <span><a href="/cake/city/?city=临沂" title="临沂蛋糕" class="f_cs" name="lcity">临沂</a></span>
                <span><a href="/cake/city/?city=东营" title="东营蛋糕" class="f_cs" name="dcity">东营</a></span>
                <span><a href="/cake/city/?city=泰安" title="泰安蛋糕" class="f_cs" name="tcity">泰安</a></span>
                <span><a href="/cake/city/?city=威海" title="威海蛋糕" class="f_cs" name="wcity">威海</a></span>
                <span><a href="/cake/city/?city=枣庄" title="枣庄蛋糕" class="f_cs" name="zcity">枣庄</a></span>
                <span><a href="/cake/city/?city=日照" title="日照蛋糕" class="f_cs" name="rcity">日照</a></span>
                <span><a href="/cake/city/?city=滨州" title="滨州蛋糕" class="f_csb" name="bcity" :class="{active:chooseCity === 'bcity'}">滨州</a></span>
                <span><a href="/cake/city/?city=菏泽" title="菏泽蛋糕" class="f_cs" name="hcity">菏泽</a></span>
                <span><a href="/cake/city/fuzhoudangao.html" title="福州蛋糕" class="f_cs" name="fcity">福州</a></span>
                <span><a href="/cake/city/?city=厦门" title="厦门蛋糕" class="f_cs" name="xcity">厦门</a></span>
                <span><a href="/cake/city/?city=泉州" title="泉州蛋糕" class="f_cs" name="qcity">泉州</a></span>
                <span><a href="/cake/city/?city=莆田" title="莆田蛋糕" class="f_cs" name="pcity">莆田</a></span>
                <span><a href="/cake/city/hefeidangao.html" title="合肥蛋糕" class="f_cs" name="hcity">合肥</a></span>
                <span><a href="/cake/city/?city=芜湖" title="芜湖蛋糕" class="f_cs" name="wcity">芜湖</a></span>
                <span><a href="/cake/city/?city=滁州" title="滁州蛋糕" class="f_cs" name="ccity">滁州</a></span>
                <span><a href="/cake/city/?city=黄山" title="黄山蛋糕" class="f_cs" name="hcity">黄山</a></span>
                <span><a href="/cake/city/?city=铜陵" title="铜陵蛋糕" class="f_cs" name="tcity">铜陵</a></span>
                <span><a href="/cake/city/?city=马鞍山" title="马鞍山蛋糕" class="f_cs" name="mcity">马鞍山</a></span>
                <span><a href="/cake/city/?city=蚌埠" title="蚌埠蛋糕" class="f_csb" name="bcity" :class="{active:chooseCity === 'bcity'}">蚌埠</a></span>
                <span><a href="/cake/city/nanchangdangao.html" title="南昌蛋糕" class="f_cs" name="ncity">南昌</a></span>
                <span><a href="/cake/city/?city=赣州" title="赣州蛋糕" class="f_cs" name="gcity">赣州</a></span>
                <span><a href="/cake/city/?city=九江" title="九江蛋糕" class="f_cs" name="jcity">九江</a></span>
                <span><a href="/cake/city/?city=抚州" title="抚州蛋糕" class="f_cs" name="fcity">抚州</a></span>
                <span><a href="/cake/city/?city=新余" title="新余蛋糕" class="f_cs" name="xcity">新余</a></span>
                <span><a href="/cake/city/?city=景德镇" title="景德镇蛋糕" class="f_cs" name="jcity">景德镇</a></span>
            </div>
        </div>

        <!--华南华中地区-->
        <div class="cs_zs">
            <div class="name-title">华南、华中</div>
            <div class="xzcs_dt">
                <span><a href="/cake/city/guangzhoudangao.html" title="广州蛋糕" class="f_cs" name="gcity">广州</a></span>
                <span><a href="/cake/city/shenzhendangao.html" title="深圳蛋糕" class="f_cs" name="scity">深圳</a></span>
                <span><a href="/cake/city/?city=佛山" title="佛山蛋糕" class="f_cs" name="fcity">佛山</a></span>
                <span><a href="/cake/city/?city=东莞" title="东莞蛋糕" class="f_cs" name="dcity">东莞</a></span>
                <span><a href="/cake/city/?city=珠海" title="珠海蛋糕" class="f_cs" name="zcity">珠海</a></span>
                <span><a href="/cake/city/?city=惠州" title="惠州蛋糕" class="f_cs" name="hcity">惠州</a></span>
                <span><a href="/cake/city/?city=中山" title="中山蛋糕" class="f_cs" name="zcity">中山</a></span>
                <span><a href="/cake/city/?city=茂名" title="茂名蛋糕" class="f_cs" name="mcity">茂名</a></span>
                <span><a href="/cake/city/?city=湛江" title="湛江蛋糕" class="f_cs" name="zcity">湛江</a></span>
                <span><a href="/cake/city/?city=江门" title="江门蛋糕" class="f_cs" name="jcity">江门</a></span>
                <span><a href="/cake/city/?city=汕头" title="汕头蛋糕" class="f_cs" name="scity">汕头</a></span>
                <span><a href="/cake/city/nanningdangao.html" title="南宁蛋糕" class="f_cs" name="ncity">南宁</a></span>
                <span><a href="/cake/city/?city=柳州" title="柳州蛋糕" class="f_cs" name="lcity">柳州</a></span>
                <span><a href="/cake/city/?city=桂林" title="桂林蛋糕" class="f_cs" name="gcity">桂林</a></span>
                <span><a href="/cake/city/?city=贵港" title="贵港蛋糕" class="f_cs" name="gcity">贵港</a></span>
                <span><a href="/cake/city/?city=海口" title="海口蛋糕" class="f_cs" name="hcity">海口</a></span>
                <span><a href="/cake/city/?city=三亚" title="三亚蛋糕" class="f_cs" name="scity">三亚</a></span>
                <span><a href="/cake/city/wuhandangao.html" title="武汉蛋糕" class="f_cs" name="wcity">武汉</a></span>
                <span><a href="/cake/city/?city=宜昌" title="宜昌蛋糕" class="f_cs" name="ycity">宜昌</a></span>
                <span><a href="/cake/city/?city=襄阳" title="襄阳蛋糕" class="f_cs" name="xcity">襄阳</a></span>
                <span><a href="/cake/city/?city=荆州" title="荆州蛋糕" class="f_cs" name="jcity">荆州</a></span>
                <span><a href="/cake/city/?city=黄石" title="黄石蛋糕" class="f_cs" name="hcity">黄石</a></span>
                <span><a href="/cake/city/?city=鄂州" title="鄂州蛋糕" class="f_cs" name="ecity">鄂州</a></span>
                <span><a href="/cake/city/?city=孝感" title="孝感蛋糕" class="f_cs" name="xcity">孝感</a></span>
                <span><a href="/cake/city/?city=荆门" title="荆门蛋糕" class="f_cs" name="jcity">荆门</a></span>
                <span><a href="/cake/city/?city=十堰" title="十堰蛋糕" class="f_cs" name="scity">十堰</a></span>
                <span><a href="/cake/city/?city=潜江" title="潜江蛋糕" class="f_cs" name="qcity">潜江</a></span>
                <span><a href="/cake/city/?city=随州" title="随州蛋糕" class="f_cs" name="scity">随州</a></span>
                <span><a href="/cake/city/?city=仙桃" title="仙桃蛋糕" class="f_cs" name="xcity">仙桃</a></span>
                <span><a href="/cake/city/zhengzhoudangao.html" title="郑州蛋糕" class="f_cs" name="zcity">郑州</a></span>
                <span><a href="/cake/city/?city=洛阳" title="洛阳蛋糕" class="f_cs" name="lcity">洛阳</a></span>
                <span><a href="/cake/city/?city=许昌" title="许昌蛋糕" class="f_cs" name="xcity">许昌</a></span>
                <span><a href="/cake/city/?city=焦作" title="焦作蛋糕" class="f_cs" name="jcity">焦作</a></span>
                <span><a href="/cake/city/?city=安阳" title="安阳蛋糕" class="f_cs" name="acity" :class="{active:chooseCity === 'acity'}">安阳</a></span>
                <span><a href="/cake/city/?city=信阳" title="信阳蛋糕" class="f_cs" name="xcity">信阳</a></span>
                <span><a href="/cake/city/?city=驻马店" title="驻马店蛋糕" class="f_cs" name="zcity">驻马店</a></span>
                <span><a href="/cake/city/?city=平顶山" title="平顶山蛋糕" class="f_cs" name="pcity">平顶山</a></span>
                <span><a href="/cake/city/?city=开封" title="开封蛋糕" class="f_cs" name="kcity">开封</a></span>
                <span><a href="/cake/city/changshadangao.html" title="长沙蛋糕" class="f_cs" name="ccity">长沙</a></span>
                <span><a href="/cake/city/?city=株洲" title="株洲蛋糕" class="f_cs" name="zcity">株洲</a></span>
                <span><a href="/cake/city/?city=湘潭" title="湘潭蛋糕" class="f_cs" name="xcity">湘潭</a></span>
                <span><a href="/cake/city/?city=郴州" title="郴州蛋糕" class="f_cs" name="ccity">郴州</a></span>
            </div>
        </div>

        <!--西南西北地区-->
        <div class="cs_zs">
            <div class="name-title">西南、西北</div>
            <div class="xzcs_dt">
                <span><a href="/cake/city/chongqingdangao.html" title="重庆蛋糕" class="f_cs" name="ccity">重庆</a></span>
                <span><a href="/cake/city/chengdudangao.html" title="成都蛋糕" class="f_cs" name="ccity">成都</a></span>
                <span><a href="/cake/city/?city=绵阳" title="绵阳蛋糕" class="f_cs" name="mcity">绵阳</a></span>
                <span><a href="/cake/city/?city=德阳" title="德阳蛋糕" class="f_cs" name="dcity">德阳</a></span>
                <span><a href="/cake/city/?city=宜宾" title="宜宾蛋糕" class="f_cs" name="ycity">宜宾</a></span>
                <span><a href="/cake/city/?city=南充" title="南充蛋糕" class="f_cs" name="ncity">南充</a></span>
                <span><a href="/cake/city/?city=内江" title="内江蛋糕" class="f_cs" name="ncity">内江</a></span>
                <span><a href="/cake/city/?city=眉山" title="眉山蛋糕" class="f_cs" name="mcity">眉山</a></span>
                <span><a href="/cake/city/?city=乐山" title="乐山蛋糕" class="f_cs" name="lcity">乐山</a></span>
                <span><a href="/cake/city/?city=雅安" title="雅安蛋糕" class="f_cs" name="ycity">雅安</a></span>
                <span><a href="/cake/city/?city=泸州" title="泸州蛋糕" class="f_cs" name="lcity">泸州</a></span>
                <span><a href="/cake/city/?city=达州" title="达州蛋糕" class="f_cs" name="dcity">达州</a></span>
                <span><a href="/cake/city/?city=攀枝花" title="攀枝花蛋糕" class="f_cs" name="pcity">攀枝花</a></span>
                <span><a href="/cake/city/?city=遂宁" title="遂宁蛋糕" class="f_cs" name="scity">遂宁</a></span>
                <span><a href="/cake/city/?city=自贡" title="自贡蛋糕" class="f_cs" name="zcity">自贡</a></span>
                <span><a href="/cake/city/?city=广安" title="广安蛋糕" class="f_cs" name="gcity">广安</a></span>
                <span><a href="/cake/city/?city=广元" title="广元蛋糕" class="f_cs" name="gcity">广元</a></span>
                <span><a href="/cake/city/?city=西昌" title="西昌蛋糕" class="f_cs" name="xcity">西昌</a></span>
                <span><a href="/cake/city/?city=资阳" title="资阳蛋糕" class="f_cs" name="zcity">资阳</a></span>
                <span><a href="/cake/city/?city=简阳" title="简阳蛋糕" class="f_cs" name="jcity">简阳</a></span>
                <span><a href="/cake/city/?city=都江堰" title="都江堰蛋糕" class="f_cs" name="dcity">都江堰</a></span>
                <span><a href="/cake/city/?city=峨眉山" title="峨眉山蛋糕" class="f_cs" name="ecity">峨眉山</a></span>
                <span><a href="/cake/city/kunmingdangao.html" title="昆明蛋糕" class="f_cs" name="kcity">昆明</a></span>
                <span><a href="/cake/city/?city=曲靖" title="曲靖蛋糕" class="f_cs" name="qcity">曲靖</a></span>
                <span><a href="/cake/city/guiyangdangao.html" title="贵阳蛋糕" class="f_cs" name="gcity">贵阳</a></span>
                <span><a href="/cake/city/?city=遵义" title="遵义蛋糕" class="f_cs" name="zcity">遵义</a></span>
                <span><a href="/cake/city/?city=安顺" title="安顺蛋糕" class="f_cs" name="acity" :class="{active:chooseCity === 'acity'}">安顺</a></span>
                <span><a href="/cake/city/?city=六盘水" title="六盘水蛋糕" class="f_cs" name="lcity">六盘水</a></span>
                <span><a href="/cake/city/xiandangao.html" title="西安蛋糕" class="f_cs" name="xcity">西安</a></span>
                <span><a href="/cake/city/?city=榆林" title="榆林蛋糕" class="f_cs" name="ycity">榆林</a></span>
                <span><a href="/cake/city/?city=咸阳" title="咸阳蛋糕" class="f_cs" name="xcity">咸阳</a></span>
                <span><a href="/cake/city/?city=宝鸡" title="宝鸡蛋糕" class="f_csb" name="bcity" :class="{active:chooseCity === 'bcity'}">宝鸡</a></span>
                <span><a href="/cake/city/?city=汉中" title="汉中蛋糕" class="f_cs" name="hcity">汉中</a></span>
                <span><a href="/cake/city/?city=延安" title="延安蛋糕" class="f_cs" name="yhcity">延安</a></span>
                <span><a href="/cake/city/lanzhoudangao.html" title="兰州蛋糕" class="f_cs" name="lcity">兰州</a></span>
                <span><a href="/cake/city/?city=西宁" title="西宁蛋糕" class="f_cs" name="xcity">西宁</a></span>
                <span><a href="/cake/city/?city=银川" title="银川蛋糕" class="f_cs" name="ycity">银川</a></span>
                <span><a href="/cake/city/?city=拉萨" title="拉萨蛋糕" class="f_cs" name="lcity">拉萨</a></span>
                <span><a href="/cake/city/wulumuqidangao.html" title="乌鲁木齐蛋糕" class="f_cs" name="wcity">乌鲁木齐</a></span>
            </div>
        </div>
    </div>


    </div>
    <div class="cake-container">
      <div class="cake-left"></div>
      <div class="cake-right">
          <ListItem v-for="(cake,index) in cakes" :key="index" :flower="cake"/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CakeItem from '../../components/CakeItem/CakeItem'
import ListItem from '../../components/list-item/ListItem'
import { mapState } from 'vuex'
  export default {
    data(){
      return {
        selectProvince: '',
        selectCity: '',
        chooseCity: ''
      }
    },
    components: {
      CakeItem,
      ListItem
    },
    mounted(){
      this.$store.dispatch('getAllProvince')
      this.$store.dispatch('getCakeList')
    },
    computed: {
      ...mapState({
        allProvince: state => state.cake.allProvince,
        cities: state => state.cake.cities,
        regions: state => state.cake.regions,
        cakes: state => state.cake.cakes
      })
    },
    methods:{
    },
    watch: {
      selectProvince(){
        console.log(111)
        this.$store.dispatch('getCities',this.selectProvince)
      },
      selectCity(){
        console.log(1111)
        this.$store.dispatch('getRegions',[this.selectProvince,this.selectCity])
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.cake-container
  width 1200px
  height 800px
  margin 0 auto
  .cake-header
    width 1192px
    height 550px
    border 4px solid #ff6a00
    .active
      color #ff6a00
    .search-city
      margin-left 20px
      margin-top 20px
      display flex
      .nav-left
        margin-top 0
        &>li 
          width 100px  
          height 32px
          float left
          
        .city,.contry,.region 
          margin-left 30px
          select
            width 100px  
            height 30px  
        .region 
          margin-left none      
        .enter
          button 
            width 67px  
            height 30px  
            background #ff6a00
            border-style none
            margin-left 5px
            border-radius 2px
        .search
          input
            height 30px   

    .flower-nav
      height 45px
      font-size 14px
      line-height 20px  
      text-align start
      background #ebebeb 
      margin 10px 0 20px 0  
      line-height 45px
      position relative
      border 1px solid #000
      border-left none
      border-right none
      .nav-left
        &>li 
          height 32px
          float left
          margin-left 10px
          font-size 14px
          font-weight bold
          a
            color #000
      .nav-rigth
        display flex   
        height 32px
        position absolute
        right 0
        top 0
        margin-right 10px
        li
          margin-left 15px
          font-size 18px
          font-weight bold
          a
            display block
            width 20px
            height 20px
    .city_box
      .cs_zs
        display flex
        .name-title
          width 160px
          margin-left 10px
          font-weight bold
        .xzcs_dt  
          display flex
          width 1360px
          flex-wrap wrap
          span
            margin 8px
  .cake-container
    display flex
    margin-top 20px
    .cake-left
      width 210px
      height 500px
      margin-right 24px
      background blue
    .cake-right
      width 969px
      height 1000px
      display flex
      flex-wrap wrap



</style>
