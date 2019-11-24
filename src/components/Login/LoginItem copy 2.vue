<template>
  <div class="tabZujian">
    <el-tabs v-model="activeName">
      <el-tab-pane label="tab1" name="first" :key="'first'">
        <child1></child1>
      </el-tab-pane>

      <el-tab-pane label="tab2" name="second" :key="'second'">
        <child2></child2>
      </el-tab-pane>

      <el-tab-pane label="tab3" name="third" :key="'third'">
        <child3></child3>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabs1 from "./tabs1";
import tabs2 from "./tabs2";
import tabs3 from "./tabs3";
export default {
  name: "tabZujian",
  components: {
    child1: tabs1,
    child2: tabs2,
    child3: tabs3
  },
  data() {
    return {
      //默认第一个选项卡
      activeName: "first"
    };
  },
  mounted() {}
};
</script>
