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

/** 性别 */
enum Sex {
  /**
   * 女性
   */
  female = 0,
  /**
   * 男性
   */
  male = 1,
}

/**
 * 用户基础信息
 */
interface IUserInfo {
  /**
   * 姓名
   */
  name: string;
  /**
   * 年龄
   */
  age: number;
  /**
   * 性别
   */
  sex: Sex;
  /**
   * 电子邮箱
   */
  email?: string;
  /**
   * 电话号码
   */
  tel?: string;
  /**
   * 是否实名认证
   */
  hasRealNameAuth: boolean;
}
