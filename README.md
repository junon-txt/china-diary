# Diario a China

Un breve diario que escribí mientras estaba de viaje por China con mi padre.

## Setup

El proyecto usa [Poetry](https://python-poetry.org/) para el manejo de dependencias.

```bash
poetry install
poetry shell
```

Para poder `servir | buildear | desplegar` la página es necesario instalar un script custom que maneja los paths a imágenes del proyecto.

```bash
pip install -e plugins/path_rewriter
```

¿Por qué no lo agrego a poetry? No sé. No se me ocurrió antes.

## MkDocs

Servido local:

```bash
mkdocs serve
```

Build local:

```bash
mkdocs build
```

Deploy:

```bash
mkdocs gh-deploy
```