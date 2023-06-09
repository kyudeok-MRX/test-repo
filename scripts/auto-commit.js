import { promiseExec } from "./utils.js";

try {
  console.log(
    await promiseExec(`git submodule foreach --recursive git pull origin main`)
  );

  const diff = await promiseExec(`git diff-index HEAD --`);

  console.log(diff);

  if (!diff) console.log(`No changes to commit`);
  else {
    await promiseExec(`git add .`);
    await promiseExec(`git commit -am "Update submodules"`);
  }
} catch (error) {
  console.warn(error.message);
}
