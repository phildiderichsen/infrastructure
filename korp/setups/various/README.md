# Korp med testkorpus

Kør her:

```
docker-compose up -d --build
```

Så kører der en backend med CWB og en frontend med Korp.

Scriptet start.sh i backenden kører tre indekseringsscripts:

* encode_testcorpus.sh (Indekserer et testkorpus bestående af nogle kapitler fra Danmarks grundlov)
* encode_MEMOtestcorpus
* encode_LANCHARTtestcorpus.

Dette vil kun virke hvis de relevante vrt-filer ligger i backend/corpora/annotated, hhv.: 

* DK.constitution.tabulator.vrt
* Memo-testkorpus-1-brill-korp-alle-filer-i-et-korpus.xml
* vrt_out.txt

MEMO-testkorpusset kan hentes med svn hvis man er på VPN (lægges i backend/corpora/annotated):

```
svn export svn://norsdivsvn01fw.unicph.domain/MEMOcorpus/trunk/Testkorpus/Memo-testkorpus-1-brill-korp-alle-filer-i-et-korpus.xml .
```