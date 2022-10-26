## TD post-image-to-twitter 🐦

`ES`
Componente custom de [TouchDesigner](https://derivative.ca/) potenciado por [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) para postear imágenes en [Twitter](https://twitter.com/home?lang=es) directo desde TouchDesigner.
Un problema recurrente al postear imágenes en Twitter desde TouchDesigner es que TouchDesigner se "friza" ya que es "single-threaded". Si bien hay formas de optimizar esto con varios proyectos de TouchDesigner o con [Python](https://www.python.org/), encontré esta manera de optimizar la cuestión.
El componente funciona enviando a una aplicación web toda la información necesaria (llaves de Twitter, imagen codificada en [Base64](https://es.wikipedia.org/wiki/Base64) y texto opcional) la cual se encarga de hacer el posteo. 

### Generación de las API Keys de Twitter 🗝
Es necesario generar las llaves propias para conectarse a la API de Twitter.

1. Log-in en [Twitter Developer Platform](https://developer.twitter.com/en) y entrar a [Developer Portal](https://developer.twitter.com/en/portal/dashboard).

2. Crear un proyecto, si es que no se tiene uno ya.

3. Aplicar para una cuenta "Elevated". Es muy simple e instantaneo, solo basta con completar la información.
	> 💡 Nota: esto es necesario para poder usar todos los endpoints la API.

4. Crear una app.

5. Editar los permisos "User authentication set up" y seleccionar "Read and Write". El resto completarlo con una web, no importa mucho cual (en lo posible que sea propia).

6. Generar Keys y copiarlas momentaneamente en algún lugar de tu computadora. Las vas a necesitar en TouchDesigner.

### Rápida instalación con Node.js y npm 🚩 

Para usar este respositorio es necesario descargar [Node.js](https://nodejs.org/es/).

1. Descargar o clonar el repositorio en tu computadora.

2. Instalar las dependencias en la carpeta de destino ejecutando en la consola `npm i` o manualmente `npm i express twit`.

3. `npm start` para inicilizar la app.

### Comentarios y comandos 🚏 

Una vez abierto el servidor, arrastrar el componente `TDPostImgToTwitter.tox` al proyecto de TouchDesigner que tengas abierto trabajando.

- `API Key`: completar con la API Key de tu app.

- `API Secret Key`: completar con la API Secret Key de tu app.

- `Access Token`: completar con el Access Token de tu app.

- `Access Token Secret`: completar con el Access Token Secret de tu app.

- `TOP`: arrastrá el operador que contiene la imagen final que se va a codificar y guardar en la base de datos.

- `Text` (*opcional*): mensaje que acompañará a la imagen en el tweet.  

Para inicializar en modo *test* (la app se reiniciará cada vez que se haga un cambio en ella) ejecutar en la consola:

```
npm test
````
> 💡 Nota: para ello es necesario instalar previamente `npm nodemon -g`.


👋 *Si lo usas, si tenés algún tipo de feedback o problema, hacemelo llegar por favor :)*

---

`EN`
Custom component for [TouchDesigner](https://derivative.ca/) powered by [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) to post images to [Twitter](https://twitter.com/home?lang=es) directly from TouchDesigner.
A recurring problem when posting images to Twitter from TouchDesigner is that TouchDesigner "frizzes" since it's "single-threaded". While there are ways to optimize this with various TouchDesigner projects or with [Python](https://www.python.org/), I found this way to optimize the issue.
The component works by sending to a web application all the necessary information (Twitter keys, [Base64](https://es.wikipedia.org/wiki/Base64) encoded image and optional text) which takes care of doing the posting. 

### Generation of the Twitter API Keys 🗝
You need to generate your own keys to connect to the Twitter API.

1. Log-in to [Twitter Developer Platform](https://developer.twitter.com/en) and enter [Developer Portal](https://developer.twitter.com/en/portal/dashboard).

2. Create a project, if you don't already have one.

3. Apply for an "Elevated" account. It's very simple and instantaneous, just fill in the information.
	> 💡 Note: this is necessary to be able to use all the API endpoints.

4. Create an app.

5. Edit the "User authentication set up" permissions and select "Read and Write". Complete the rest with a website, it doesn't matter much which one (if possible it should be your own).

6. Generate Keys and copy them temporarily somewhere on your computer. You will need them in TouchDesigner.

### Quick installation with Node.js and npm 🚩 

To use this repository you'll need to download [Node.js](https://nodejs.org/es/).

1. Download or clone the repository on your computer.

2. Install the dependencies in the target folder by running `npm i` or manually `npm i express twit` in the console.

3. `npm start` to start the app.

### Comments and commands 🚏 

Once the server is open, drag the `TDPostImgToTwitter.tox` component to the TouchDesigner project you have open working.

- `API Key`: fill in with the API Key of your app.

- `API Secret Key`: fill in with the API Secret Key of your app.

- `Access Token`: fill in with the Access Token of your app.

- `Access Token Secret`: fill with the Access Token Secret of your app.

- `TOP`: drag the operator containing the final image to be encoded and saved in the database.

- `Text` (*optional*): message that will accompany the image in the tweet.  

To initialize in *test* mode (the app will restart every time a change is made in it) execute in the console:

```
npm test
````
> 💡 Note: it is necessary to install `npm nodemon -g` first.


👋 *If you use it or if you have any feedback or problem, please let me know :)*

🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼🧼