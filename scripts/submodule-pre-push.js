import { promiseExec } from "./utils.js";

try {
  console.log(await promiseExec(`cd ../ && node ./scripts/auto-commit`));
} catch (error) {
  console.warn(error.message);
}
