// Módulos:
const { promisify } = require('util')
const { join, extname } = require('path')
const fs = require('fs')

// Método do File System transformado em uma promise:
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)

// Nossa frase:
const message = 'Hello world!'

// Cria os arquivos:
async function create () {
  for (const [index, value] of [...message].entries()) {
    try {
      await writeFile(join(__dirname, `${index + 1}.txt`), value, 'utf8')
    } catch (e) {
      console.error(`Houve um erro ao tentar criar o arquivo ${index}.txt`)
    }
  }
}

// Lê os arquivos da pasta atual:
async function read () {
  const dirs = await readdir(__dirname)
  const filtered = dirs.filter((dir) => extname(dir) === '.txt')

  console.log('Arquivos criados:\n')
  
  for (const dir of filtered) {
    const contents = await readFile(join(__dirname, dir), 'utf8')
    console.log(`Arquivo ${dir} -> ${contents}`)
  }
}

create()
  .then(read)
  .catch((e) => console.error(e))