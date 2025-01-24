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

db-shell:
	docker compose exec postgresdb psql -U ${POSTGRESDB_USER} -d ${POSTGRESDB_DATABASE}
