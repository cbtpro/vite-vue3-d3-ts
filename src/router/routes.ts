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

import { RouteRecordRaw } from 'vue-router';
import { NotFound } from '@/components/404';

const routes: Readonly<RouteRecordRaw[]> = [
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => NotFound,
  },
  {
    path: '/',
    redirect: 'home',
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    name: 'flex',
    path: '/flex',
    component: () => import('@/views/flex/index.vue'),
  },
  {
    name: 'user',
    path: '/user/:id',
    props: true,
    component: () => import('@/views/user/index.vue'),
    children: [
      {
        name: 'user-detail',
        path: 'detail',
        component: () => import('@/views/user/detail/index.vue'),
      },
      {
        name: 'user-phase-detail',
        path: 'phase',
        props: route => ({ phaseId: route.query.phaseId }),
        component: () => import('@/views/user/phase/index.vue'),
      },
    ],
  },
];

export default routes;
