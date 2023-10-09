FROM --platform=linux/amd64 python:3.10
ENV POETRY_HOME=/run/media/veer/613A1DEC519A152F/.cache/poetry
ENV POETRY_VENV=/run/media/veer/613A1DEC519A152F/.cache/poetry-venv
ENV POETRY_DATA_DIR=/run/media/veer/613A1DEC519A152F/.cache/poetry-data
ENV POETRY_CONFIG_DIR=/run/media/veer/613A1DEC519A152F/.cache/poetry-config
# Tell Poetry where to place its cache and virtual environment
ENV POETRY_CACHE_DIR=/run/media/veer/613A1DEC519A152F/.cache

VOLUME ./.poetry-data-cache /run/media/veer/613A1DEC519A152F/.cache/poetry-data
VOLUME ./.poetry-cache /run/media/veer/613A1DEC519A152F/.cache

RUN python3.10 -m pip install poetry
WORKDIR /workspace
RUN poetry config virtualenvs.in-project true
RUN poetry config virtualenvs.create true

COPY ./pyproject.toml ./pyproject.toml
COPY ./poetry.lock ./poetry.lock
# install only deps in dependency list first and lockfile to cache them
# RUN poetry install 

COPY . .
# then install our own module
RUN poetry install --only main

EXPOSE 8080

ENTRYPOINT [ "poetry", "run", "start" ]
