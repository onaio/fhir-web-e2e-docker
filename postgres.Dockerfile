FROM postgres:16
COPY psql-multiple-postgres.sh /docker-entrypoint-initdb.d/