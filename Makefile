up:
	docker compose --env-file .env up -d

down:
	docker compose down

build:
	docker compose build
logs:
	docker compose logs -f

ps:
	docker compose ps

restart:
	docker compose restart

clean:
	docker compose down -v
	docker system prune -f
database-clean:
	cd database && \
	npx drizzle-kit push --config ./src/drizzle.config.ts
database-migrations:
	cd database && \
	npx drizzle-kit generate --config ./src/drizzle.config.ts
db-shell:
	docker compose exec postgresdb psql -U ${POSTGRESDB_USER} -d ${POSTGRESDB_DATABASE}
