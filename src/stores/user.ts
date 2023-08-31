// Copyright 2023 Peter Chen
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Sex } from '@/constants';

const initialUserInfo: IUserInfo = {
  name: '匿名用户',
  age: 0,
  sex: Sex.female,
  email: '',
  tel: '',
  hasRealNameAuth: false,
};
const useUserStore = defineStore('user', () => {
  const userInfo = ref(initialUserInfo);
  const updateUserInfo = (payload: IUserInfo) => {
    userInfo.value = payload;
  };
  return {
    userInfo,
    updateUserInfo,
  };
});

export default useUserStore;
