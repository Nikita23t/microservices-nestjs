```markdown
# 🚀 EduPlatform Backend (Microservices)

**Бэкенд-платформа для онлайн-образования с микросервисной архитектурой**  
*NestJS | MongoDB | gRPC | WebSockets*

---

## 🌟 Особенности
- **Микросервисы**: 
  - `users` — Регистрация, аутентификация (JWT), роли (студент/преподаватель)
  - `courses` — Управление курсами, уроками, материалами
  - `chat` — Real-time чат через WebSocket (преподаватель ↔ студент)
  - `gateways` — API Gateway для агрегации сервисов
- **Технологии**:
  - Межсервисное взаимодействие: gRPC (события курсов/чата)
  - База данных: MongoDB + Mongoose (для каждого сервиса своя коллекция)
  - Документация: Swagger (по адресу `/api` после запуска)
  - Масштабируемость: Каждый сервис запускается независимо

---

## 🛠 Установка

### 1. Требования
- Node.js v18+
- MongoDB 6.0+

### 2. Настройка
```bash
# 1 Клонировать репозиторий
git clone 

# 2 Установить зависимости для всех сервисов
npm i

# 3 Настройка .env файлов (примеры в .env.example каждого сервиса)

```

### 3. Запуск
```bash
# Запустить все сервисы параллельно (через Concurrently)
npm run start:dev

# Или запускать отдельно:
cd users && npm run start:dev
cd courses && npm run start:dev
cd chat && npm run start:dev
cd gateways && npm run start:dev
```

---

## 🧩 Архитектура
```
📦 microservices-nestjs
├── 📂 chat              # WebSocket-чат
│   ├── src
│   │   └── ...
├── 📂 courses           # Сервис курсов
│   ├── src
│   │   └── ...
├── 📂 gateways          # API Gateway
│   └── src
│       └── ...
└── 📂 users             # Аутентификация
    └── src
        └── ...

```

---

## 🛠 Технологии
<p align="left">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/gRPC-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="gRPC">
  <img src="https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=websocket&logoColor=white" alt="WebSocket">
</p>

---

## 📌 TODO
+ [ ] Реализовать авторизацию/аутенфикацию и гард для проверки ролей
- [ ] Реализовать API для работы с пользователями
- [ ] Реализовать сервис с курсами
- [ ] Реализовать чат преподавателя с учеником
- [ ] Добавить Dockerfile для каждого сервиса

---
