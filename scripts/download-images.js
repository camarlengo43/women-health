const fs = require('fs');
const path = require('path');

const targetDir = path.join(process.cwd(), 'public', 'images', 'blog');
const authorDir = path.join(process.cwd(), 'public', 'images', 'authors');
fs.mkdirSync(targetDir, { recursive: true });
fs.mkdirSync(authorDir, { recursive: true });

const images = [
  { name: 'entender-ciclo-menstrual.jpg', id: 'photo-1506126613408-eca07ce68773' },
  { name: 'sindrome-premenstrual-spm.jpg', id: 'photo-1515377905703-c4788e51af15' },
  { name: 'dolor-menstrual-dismenorrea.jpg', id: 'photo-1544717305-2782549b5136' },
  { name: 'menstruacion-irregular-causas.jpg', id: 'photo-1584515979956-d9f6e5d09982' },
  { name: 'que-es-perimenopausia.jpg', id: 'photo-1573496359142-b8d87734a5a2' },
  { name: 'sintomas-perimenopausia.jpg', id: 'photo-1544005313-94ddf0286df2' },
  { name: 'cambios-hormonales-perimenopausia.jpg', id: 'photo-1532938911079-1b06ac7ceec7' },
  { name: 'cuando-consultar-perimenopausia.jpg', id: 'photo-1579684385127-1ef15d508118' },
  { name: 'sintomas-menopausia.jpg', id: 'photo-1581579438747-1dc8d17bbce4' },
  { name: 'sofocos-menopausia.jpg', id: 'photo-1508214751196-bcfd4ca60f91' },
  { name: 'menopausia-sueno-descanso.jpg', id: 'photo-1541781774459-bb2af2f05b55' },
  { name: 'primeros-sintomas-embarazo.jpg', id: 'photo-1516585427167-9f4af9627e6c' },
  { name: 'cambios-cuerpo-embarazo.jpg', id: 'photo-1555252333-9f8e92e65df9' },
  { name: 'sueno-salud-hormonal.jpg', id: 'photo-1520206183501-b80df61043c2' },
  { name: 'ejercicio-ciclo-menstrual.jpg', id: 'photo-1518611012118-696072aa579a' }
];

async function download() {
  for (const img of images) {
    const url = 'https://images.unsplash.com/' + img.id + '?w=1200&auto=format&fit=crop&q=80';
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to download ' + img.name + ': ' + res.status);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(path.join(targetDir, img.name), buffer);
    console.log('Downloaded ' + img.name + ' (' + buffer.length + ' bytes)');
  }
  console.log('All blog images downloaded successfully!');
}

download().catch(err => {
  console.error(err);
  process.exit(1);
});
