FROM python:3.10.1-slim-bullseye

LABEL maintainer="Penn Labs"

WORKDIR /app/

# Install build dependencies
RUN apt-get update && apt-get install --no-install-recommends -y default-libmysqlclient-dev gcc \
    && rm -rf /var/lib/apt/lists/*

# Install pipenv
RUN pip install pipenv

# Copy project dependencies
COPY Pipfile* /app/

# Install project dependencies
RUN pipenv install --system

# Copy project files
COPY . /app/

CMD ["/usr/local/bin/uwsgi", "--ini", "/app/setup.cfg"]
