# Uso: python scripts/gen-car-models.py "Baterias por Modelo de Carro - 2026.xlsx" lib/car-models.ts
import sys, json, re, unicodedata, zipfile, xml.etree.ElementTree as ET
src, out = sys.argv[1], sys.argv[2]
ns={'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
z=zipfile.ZipFile(src)
ss=[''.join(t.text or '' for t in si.iter('{%s}t'%ns['m'])) for si in ET.fromstring(z.read('xl/sharedStrings.xml')).findall('m:si',ns)]
root=ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
rows=[]
for row in root.iter('{%s}row'%ns['m']):
    vals={}
    for c in row.findall('m:c',ns):
        v=c.find('m:v',ns); col=re.match(r'[A-Z]+',c.get('r')).group()
        vals[col]= ss[int(v.text)] if c.get('t')=='s' else (v.text if v is not None else '')
    rows.append(vals)
def slug(s):
    s=unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+','-',s).strip('-')
BRAND_NAMES={'VW':'Volkswagen'}
models=[]
for r in rows[1:]:
    if not r.get('B'): continue
    brand=BRAND_NAMES.get(r['A'].strip(), r['A'].strip())
    split=lambda s:[x.strip() for x in s.split('/') if x.strip()]
    models.append(dict(brand=brand, brandSlug=slug(brand), model=r['B'].strip(), slug=slug(r['B']),
        detail=r['C'].strip(), specs=r['D'].strip(), moura=split(r['E']), heliar=split(r['F']), pioneiro=split(r['G'])))
seen=set()
for m in models:
    k=(m['brandSlug'],m['slug']); assert k not in seen, k; seen.add(k)
body=json.dumps(models,ensure_ascii=False,indent=2)
open(out,'w',encoding='utf-8',newline='\n').write(
"""// Gerado a partir da planilha "Baterias por Modelo de Carro - 2026.xlsx".
// Para atualizar, edite a planilha e rode o gerador novamente.

export type CarModel = {
  brand: string;
  brandSlug: string;
  model: string;
  slug: string;
  detail: string;
  specs: string;
  moura: string[];
  heliar: string[];
  pioneiro: string[];
};

export const CAR_MODELS: CarModel[] = """+body+";\n")
print(len(models),'modelos;', sorted({m['brand'] for m in models}))
