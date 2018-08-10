# nodejsMapReduce
Repositório para o trabalho de Arquitetura de Software para Big Data

#Usage:
### Mongo
```
 - Criar um db 'governo' e a collection 'viagens' no monbogb
 - Importar o arquivo do link: 
  https://drive.google.com/drive/folders/1ZU7sHcLAv-LI4_GCVUJqg1ofOhUO4H6Z?usp=sharing 
 ```
### Node
#### Build and Run Application
```git
git clone https://github.com/rpereira15/nodejsMapReduce
``` 
``` node
npm run build
npm run serve
```
#### Efetuar o map/reduce
GET - http://localhost:3000/api/v1/viagens/reduce
```json
{
	"_id": "ADVOCACIA GERAL DA UNIAO",
	"value": 2529376.930000011
}
```