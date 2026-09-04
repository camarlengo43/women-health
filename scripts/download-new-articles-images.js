const fs = require('fs');
const path = require('path');

const targetDir = path.join(process.cwd(), 'public', 'images', 'blog');
fs.mkdirSync(targetDir, { recursive: true });

const newImages = [
  { name: 'diabetes-gestacional-embarazo.jpg', id: 'photo-1584515933487-779824d29309' },
  { name: 'nutrientes-clave-embarazo.jpg', id: 'photo-1490818387583-1baba5e638af' },
  { name: 'salud-mental-puerperio-depresion-posparto.jpg', id: 'photo-1544126592-807ade215a0b' },
  { name: 'transicion-perimenopausia-cuerpo.jpg', id: 'photo-1567532939604-b6b5b0db2604' },
  { name: 'cuidar-huesos-menopausia-osteoporosis.jpg', id: 'photo-1571019613454-1cb2f99b2d8b' },
  { name: 'chequeos-medicos-segun-edad.jpg', id: 'photo-1622253692010-333f2da6031d' }
];

async function download() {
  for (const img of newImages) {
    const filePath = path.join(targetDir, img.name);
    if (fs.existsSync(filePath)) {
      console.log(`Already exists: ${img.name}`);
      continue;
    }
    const url = 'https://images.unsplash.com/' + img.id + '?w=1200&auto=format&fit=crop&q=80';
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Status ' + res.status);
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      console.log('Downloaded ' + img.name + ' (' + buffer.length + ' bytes)');
    } catch (e) {
      console.warn(`Fallback for ${img.name}: ${e.message}`);
      // Fallback: copy an existing image if download fails
      const fallbackSrc = path.join(targetDir, 'entender-ciclo-menstrual.jpg');
      if (fs.existsSync(fallbackSrc)) {
        fs.copyFileSync(fallbackSrc, filePath);
        console.log(`Copied fallback for ${img.name}`);
      }
    }
  }
}

download();
