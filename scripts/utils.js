//
//  MAKINAROCKS CONFIDENTIAL
//  ________________________
//
//  [2017] - [2022] MakinaRocks Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE:  All information contained herein is, and remains
//  the property of MakinaRocks Co., Ltd. and its suppliers, if any.
//  The intellectual and technical concepts contained herein are
//  proprietary to MakinaRocks Co., Ltd. and its suppliers and may be
//  covered by U.S. and Foreign Patents, patents in process, and
//  are protected by trade secret or copyright law. Dissemination
//  of this information or reproduction of this material is
//  strictly forbidden unless prior written permission is obtained
//  from MakinaRocks Co., Ltd.
//

import { exec } from "child_process";
import path from "path";

export const resolve = (...args) => path.resolve(process?.cwd() || __dirname, ...args);
export const promiseExec = (command, options) =>
  new Promise((resolve, reject) => {
    exec(command, options, (err, stdout) => {
      if (err) reject(err);
      else resolve(stdout);
    });
  });
