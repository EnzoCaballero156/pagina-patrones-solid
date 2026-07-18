# Evaluación Parcial Patrones Proyecto

Integrantes:
- Enzo Gabriel Caballero Crisostomo
- Juan Sebastian Quevedo Briceño
- Jhonatan Jeremy Mautino Antay

## ¿Cómo correr en el dispositivo?
1. En una terminal, entrar a la carpeta de server:
```bash
$ cd server
```
2. Ingresar el siguiente comando para crear el entorno virtual:
```bash
$ py -m venv venv
```
3. Para activar el venv, ingresar el siguiente comando:
```bash
$ .\venv\Scripts\Activate.ps1
```
4. Después, instalar las dependencias con el siguiente comando:
```bash
$ py -m pip install -r requirements.txt
```
5. Por último, correr el servidor con el siguiente comando: py -m app
```bash
$ py -m app
```

## Si no opera:
Instalar Redis por la siguiente página: https://github.com/MicrosoftArchive/redis/releases
1. Seleccionar Redis-x64-3.0.504.msi
2. Verificar operatividad de Redis poniendo el siguiente comando en PowerShell:
```bash
$ redis-cli ping
PONG
```
3. Si opera (con la respuesta PONG), se puede correr con normalidad el servidor y el frontend.

## Página del proyecto desplegado
https://pagina-patrones-solid.onrender.com/
