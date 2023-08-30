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

/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 网址标题 */
  readonly VITE_APP_TITLE: string;
  /** 请求基本路径 */
  readonly VITE_BASE_URL: string;
  /** vue-devtools调试ip */
  readonly VITE_DEVELOP_HOST: string;
  /** vue-devtools调试端口 */
  readonly VITE_DEVELOP_PORT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
