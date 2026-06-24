# Evaluación Parcial Patrones Proyecto

Integrantes:
- Enzo Gabriel Caballero Crisostomo
- Juan Sebastian Quevedo Briceño
- Jhonatan Jeremy Mautino Antay

## ¿Cómo correr?
1. En una terminal entrar a la carpeta de server (cd server) y en otra entrar a la carpeta de client (cd client).

## SERVER 
1. En su terminal, ingresar el siguiente comando para crear el entorno virtual: py -m venv venv
2. Para activar el venv, ingresar el siguiente comando: .\venv\Scripts\Activate.ps1
3. Después, instalar las dependencias con el siguiente comando: py -m pip install -r requirements.txt
4. Por último, correr el servidor con el siguiente comando: py -m app

## CLIENT
1. En su terminal, ingresar el siguiente comando para instalar las dependencias: npm install
2. Por último, correr el frontend con el siguiente comando: npm run dev. Abrir el enlace que aparece en el terminal.

## Si no opera:
Instalar Redis por la siguiente página: https://github.com/MicrosoftArchive/redis/releases
1. Seleccionar Redis-x64-3.0.504.msi
2. Verificar operatividad de Redis poniendo "redis-cli ping" en PowerShell.
3. Si opera, se puede correr con normalidad el servidor y el frontend.
