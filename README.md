## Run application:

```bash
docker compose up
# OR
sudo docker compose up
```




## Rebuild & run:
```bash
docker compose up --build
# OR
sudo docker compose up --build
```



## Start terminal session & run any command
```bash
docker exec -it <container_name> sh
# OR
sudo docker exec -it <container_name> sh

# OR
docker compose run <service_name> sh
# OR
sudo docker compose run <service_name> sh
# OR
sudo docker compose run <service_name> bash
```
Container/service name can be found in docker-compose file. All the following action can be done with this:

- install package
- uninstall package
- build application
- migrate
- seed

---

Tip:
- come out from terminal => "Ctrl + D"
- change anything via terminal (install/uninstall packages) => build (change will be reflected)