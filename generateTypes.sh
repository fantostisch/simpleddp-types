set -e # Stop on error
set -o xtrace # Print commands before running

if [ -d "repo" ]; then
  (
   cd repo
   git pull
  )
else
 git clone https://github.com/fantostisch/simpleddp.git repo
fi

cp tsconfig.json repo/
(
  cd repo
  tsc
)

mkdir -p types

(
  cd repo/dist/src
  find . -name '*.d.ts' -exec cp --parents \{\} ../../../types  \;
)

(
  cd types
  echo "declare module 'simpleddp' {" > index.d.ts
  cat simpleddp.d.ts >> index.d.ts
  echo "}" >> index.d.ts
  rm simpleddp.d.ts
  find . -name '*.d.ts' > OTHER_FILES.txt
)

cp tsconfig.json types/

rm -rf simpleddp
mv types simpleddp

