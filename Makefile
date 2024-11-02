run:
	docker-compose up -d
run-fresh:
	docker-compose up --build -d
stop:
	docker-compose down
clean:
	docker image prune -a -f