// A Hostinger cria os arquivos de build (.next/static) sem permissão de
// leitura para o processo que serve os arquivos estáticos, causando 503
// em todo /_next/static/*. Este script corrige isso logo após o build,
// rodando com o mesmo usuário que gerou os arquivos.
const fs = require("fs");
const path = require("path");

function chmodRecursive(target) {
  let stat;
  try {
    stat = fs.statSync(target);
  } catch {
    return;
  }

  if (stat.isDirectory()) {
    fs.chmodSync(target, 0o755);
    for (const entry of fs.readdirSync(target)) {
      chmodRecursive(path.join(target, entry));
    }
  } else {
    fs.chmodSync(target, 0o644);
  }
}

const nextDir = path.join(__dirname, "..", ".next");
if (fs.existsSync(nextDir)) {
  chmodRecursive(nextDir);
  console.log("Permissões de .next ajustadas (755/644).");
}
