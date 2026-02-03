# Инструкция по развертыванию

## Требования

- Docker
- Docker Compose
- Домен (опционально)

## Быстрый старт

### 1. Настройте next.config.ts

Добавьте в `next.config.ts`:

```typescript
output: 'standalone',
```

### 2. Соберите и запустите контейнеры

```bash
# Сборка
docker-compose build

# Запуск
docker-compose up -d

# Проверка логов
docker-compose logs -f
```

Сайт будет доступен на `http://localhost` или `http://your-server-ip`

## Настройка домена и SSL

### 1. Обновите nginx.conf

Замените `server_name _;` на ваш домен:

```nginx
server_name example.com www.example.com;
```

### 2. Получите SSL сертификат (Let's Encrypt)

```bash
# Установите certbot
apt-get install certbot

# Получите сертификат
certbot certonly --standalone -d example.com -d www.example.com

# Создайте папку для сертификатов
mkdir -p ssl

# Скопируйте сертификаты
cp /etc/letsencrypt/live/example.com/fullchain.pem ssl/
cp /etc/letsencrypt/live/example.com/privkey.pem ssl/
```

### 3. Активируйте HTTPS в nginx.conf

Раскомментируйте секцию HTTPS server и строку редиректа в HTTP server.

### 4. Перезапустите nginx

```bash
docker-compose restart nginx
```

## Полезные команды

```bash
# Остановить контейнеры
docker-compose down

# Пересобрать без кэша
docker-compose build --no-cache

# Просмотр логов конкретного сервиса
docker-compose logs -f app
docker-compose logs -f nginx

# Обновление после изменений в коде
docker-compose down
docker-compose build
docker-compose up -d
```

## Production рекомендации

1. **Переменные окружения**: Создайте `.env` файл из `.env.example`
2. **Firewall**: Откройте порты 80 и 443
3. **Auto-renewal SSL**: Настройте cron для автообновления сертификатов
4. **Backup**: Настройте регулярный backup данных
5. **Monitoring**: Используйте инструменты мониторинга (Grafana, Prometheus)

## Troubleshooting

### Проблема: контейнер не стартует

```bash
docker-compose logs app
```

### Проблема: порт занят

Измените порты в `docker-compose.yml`:

```yaml
ports:
  - "8080:80"
  - "8443:443"
```

### Проблема: изменения не применяются

Пересоберите образ:

```bash
docker-compose build --no-cache app
docker-compose up -d
```
