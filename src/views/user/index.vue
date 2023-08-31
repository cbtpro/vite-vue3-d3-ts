<!--
 Copyright 2023 Peter Chen

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<template>
  <div class="views-user">
    用户 {{ id }}，用户name：{{ name }}
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { RouterView } from 'vue-router';
import useUserStore from '@/stores/user';

defineOptions({
  name: 'views-user',
});

interface IProps {
  /**
   * 用户ID
   */
  id: string;
}
const props = defineProps<IProps>();

const { id } = toRefs(props);
const userStore = useUserStore();
const { userInfo } = toRefs(userStore);
const { name } = userInfo.value;
</script>

<style lang="less" scoped>
.views-user {
}
</style>
